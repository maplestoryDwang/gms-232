package net.swordie.ms.handlers.life;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.PetItem;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.FieldOption;
import net.swordie.ms.enums.InventoryOperation;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.life.pet.PetSkill;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashSet;
import java.util.Set;

public class PetHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.USER_ACTIVATE_PET_REQUEST)
    public static void handleUserActivatePetRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.NoPet.getVal()) > 0) {
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); // tick
        short slot = inPacket.decodeShort();
        Item item = chr.getCashInventory().getItemBySlot(slot);
        if (!(item instanceof PetItem)) {
            item = chr.getConsumeInventory().getItemBySlot(slot);
        }
        // Two of the same condition, as item had to be re-assigned
        if (!(item instanceof PetItem)) {
            chr.chatMessage(String.format("Could not find a pet on that slot (slot %s).", slot));
            return;
        }
        PetItem petItem = (PetItem) item;
        if (petItem.getActiveState() == 0) {
            if (chr.getPets().size() >= GameConstants.MAX_PET_AMOUNT) {
                chr.chatMessage("You already have 3 pets out!");
                chr.dispose();
                return;
            }
            Pet pet = petItem.createPet(chr);
            chr.addPet(pet);
            petItem.activatePet(chr, pet);
            chr.getField().broadcastPacket(UserLocal.petActivateChange(pet, true, (byte) 0));
        } else {
            Pet pet = chr.getPets()
                    .stream()
                    .filter(p -> p.getItem().getActiveState() == petItem.getActiveState())
                    .findFirst().orElse(null);

            petItem.deactivatePet(chr, pet);
            chr.removePet(pet);
            chr.getField().broadcastPacket(UserLocal.petActivateChange(pet, false, (byte) 0));
        }

        petItem.updateToChar(chr);
        chr.updatePetIgnoredItemList();
        chr.dispose();
    }

    @Handler(op = InHeader.USER_PET_FOOD_ITEM_USE_REQUEST)
    public static void handleUserPetFoodItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.NoPet.getVal()) > 0) {
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); // tick
        short slot = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        // TODO check properly for items here
        Item item = chr.getConsumeInventory().getItemBySlot(slot);
        if (item != null) {
            chr.consumeItem(item);
            for (Pet pet : chr.getPets()) {
                PetItem pi = pet.getItem();
                // max repleteness is 100
                pi.setRepleteness((byte) (Math.min(100, pi.getRepleteness() + 30)));
                c.write(WvsContext.inventoryOperation(true, false,
                        InventoryOperation.Add, (short) pi.getBagIndex(), (short) 0, 0, pi));
            }
        }
    }

    @Handler(op = InHeader.USER_CASH_PET_PICK_UP_ON_OFF_REQUEST)
    public static void handleUserCashPetPickUpOnOffRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        boolean on = inPacket.decodeByte() != 0;
        boolean channelChange = inPacket.decodeByte() != 0;
        int attribute = 0;
        if (channelChange) {
            attribute = inPacket.decodeInt();
        }
        chr.write(WvsContext.cashPetPickUpOnOffResult(true, on));

    }

    @Handler(op = InHeader.PET_MOVE)
    public static void handlePetMove(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.NoPet.getVal()) > 0) {
            chr.dispose();
            return;
        }
        int petID = inPacket.decodeInt();
        inPacket.decodeByte(); // ?
        MovementInfo movementInfo = new MovementInfo(inPacket);
        Pet pet = chr.getPetByIdx(petID);
        if (pet != null) {
            movementInfo.applyTo(pet);
            chr.getField().broadcastPacket(UserLocal.petMove(chr.getId(), petID, movementInfo), chr);
        }
    }

    @Handler(op = InHeader.PET_DROP_PICK_UP_REQUEST)
    public static void handlePetDropPickUpRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.NoPet.getVal()) > 0 || chr.getMiniRoom() != null) {
            return;
        }
        int petID = inPacket.decodeInt();
        byte fieldKey = inPacket.decodeByte();
        inPacket.decodeInt(); // tick
        Position pos = inPacket.decodePosition();
        int dropID = inPacket.decodeInt();
        inPacket.decodeInt(); // cliCrc
        Life life = field.getLifeByObjectID(dropID);
        if (life instanceof Drop) {
            Drop drop = (Drop) life;
            var pet = chr.getPetByIdx(petID);
            if (pet == null) {
                return;
            }
            var om = chr.getOffenseManager();
            if (om.doSampleTest()) {
                var dist = pet.getPosition().distanceTo(drop.getPosition());
                var str = String.format("Dist = %s, Pet loc: %s, drop loc: %s", dist, pet.getPosition(), drop.getPosition());

                if (dist > GameConstants.MAX_PET_DROP_PICKUP_DIST) {
                    chr.getOffenseManager().addOffense(Offense.Type.Editing, str, true);
                    chr.dispose();
                    return;
                }
//                om.increaseTrust();
            }

            boolean success = drop.canBePickedUpByPet() && drop.canBePickedUpBy(chr) && chr.addDrop(drop, true);
            if (success) {
                field.removeDrop(dropID, chr.getId(), false, petID);
            }
        }
    }

    @Handler(op = InHeader.PET_STAT_CHANGE_ITEM_USE_REQUEST)
    public static void handlePetStatChangeItemUseRequest(Char chr, InPacket inPacket) {
        var field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.StatChangeItemConsumeLimit.getVal()) > 0) {
            chr.dispose();
            return;
        }

        var statChangeItemCooltimeSec = field.getInfo().getConsumeItemCoolTime();
        var consumeTimeDelta = chr.getNextAvailableConsumeItemTime() - System.currentTimeMillis();
        if (statChangeItemCooltimeSec > 0 && consumeTimeDelta > 0) {
            chr.chatMessage("You cannot use consumable items (%d second(s) left).", consumeTimeDelta / 1000);
            chr.dispose();
            return;
        }

        if (FieldConstants.isWillP2Field(chr.getField().getId()) && !WillModule.canUseConsumable(chr)) {
            chr.chatMessage("You will need the power of moonlight in order to use that here.");
            chr.dispose();
            return;
        }

        inPacket.decodeInt(); // tick
        inPacket.decodeByte(); // check later
        short pos = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        Item item = chr.getConsumeInventory().getItemBySlot(pos);
        if (item == null || itemID != item.getItemId()) {
            chr.chatMessage("Could not find the potion for your pet to use.");
            return;
        }
        chr.useStatChangeItem(item, true);
    }

    @Handler(op = InHeader.USER_REGISTER_PET_AUTO_BUFF_REQUEST)
    public static void handleUserRegisterPetAutoBuffRequest(Char chr, InPacket inPacket) {
        int petIdx = inPacket.decodeInt();
        int petSkillIdx = inPacket.decodeInt();
        int skillID = inPacket.decodeInt();
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        Skill skill = chr.getSkill(skillID);
        Pet pet = chr.getPetByIdx(petIdx);
        int coolTime = si == null ? 0 : si.getValue(SkillStat.cooltime, 1);
        if (skillID != 0 && (si == null || pet == null || !pet.getItem().hasPetSkill(PetSkill.AUTO_BUFF)
                || skill == null || skill.getCurrentLevel() == 0 || (coolTime > 0 &&  !si.isPetAutoBuff()))) {
            chr.chatMessage("Something went wrong when adding the pet skill.");
            chr.getOffenseManager().addOffense(String.format("Character %d tried to illegally add a pet skill (skillID = %d, skill = %s, "
                    + "pet = %s, coolTime = %d)", chr.getId(), skillID, skill, pet, coolTime));
            chr.dispose();
            return;
        }

        if (petSkillIdx == 0) {
            pet.getItem().setAutoBuffSkill(skillID);
        } else {
            pet.getItem().setAutoBuffSkill2(skillID);
        }
        pet.getItem().updateToChar(chr);
    }

    @Handler(op = InHeader.PET_UPDATE_EXCEPTION_LIST_REQUEST)
    public static void handlePetUpdateExceptionListRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // pet idx, we ignore that anyway
        inPacket.decodeInt();
        inPacket.decodeInt();
        var size = inPacket.decodeByte();

        Set<Integer> ignoredItems = new HashSet<>();
        for (int i = 0; i < size; i++) {
            ignoredItems.add(inPacket.decodeInt());
        }

        chr.setIgnoredItems(ignoredItems);
        chr.updatePetIgnoredItemList();
    }
}
