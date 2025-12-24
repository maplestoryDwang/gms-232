package net.swordie.ms.handlers.user;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.EquipAttribute;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.MakingSkillType;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.loaders.containerclasses.MakingSkillRecipe;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Randomizer;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.List;

public class SkillHandlerModule {

    protected static void handleMakeRecipe(Char chr, int recipeID) {
        MakingSkillRecipe msr = SkillData.getRecipeById(recipeID);
        if (chr == null || msr == null || !msr.isAbleToBeUsedBy(chr)) {
            chr.chatMessage("Could not find that item.");
            return;
        }
        List<Tuple<Integer, Integer>> itemResults = new ArrayList<>();
        for (Tuple<Integer, Integer> repice : msr.getIngredient()) {
            int itemID = repice.getLeft();
            int count = repice.getRight();
            if (chr.hasItemCount(itemID, count)) {
                itemResults.add(new Tuple<>(itemID, -count));
            } else {
                chr.write(UserLocal.noticeMsg("You need more materials.", true));
                return;
            }
        }
        int reqSkillID = msr.getReqSkillID();
        Item crafted = null;
        MakingSkillRecipe.TargetElem target = new MakingSkillRecipe.TargetElem();
        MakingSkillType result = MakingSkillType.Fail_Crafting;

        if (Randomizer.nextInt(100) < MakingSkillRecipe.getSuccessProb(reqSkillID, msr.getRecommendedSkillLevel(), chr.getMakingSkillLevel(reqSkillID))
                || recipeID / 10000 <= 9201) {
            int rand = Randomizer.nextInt(100);
            List<MakingSkillRecipe.TargetElem> targets = msr.getTarget();
            while (true) {
                target = targets.get(Randomizer.rand(0, targets.size() - 1));
                if (target.getProbWeight() >= rand) {
                    break;
                } else {
                    rand = Randomizer.nextInt(100);
                }
            }

            crafted = ItemData.getItemDeepCopy(target.getItemID(), Randomizer.isSuccess(chr.getMakingSkillLevel(reqSkillID) * 2));
            if (crafted == null) {
                chr.getField().broadcastPacket(FieldPacket.makingSkillResult(chr.getId(), recipeID, MakingSkillType.MakeRecipe, MakingSkillType.Fail_Unknown, null, target, 0));
                return;
            }

            crafted.setQuantity(target.getCount());
            result = MakingSkillType.Success_Cool;

            if (ItemConstants.isEquip(target.getItemID())) {
                ((Equip) crafted).addAttribute(EquipAttribute.Crafted);
                crafted.setOwner(chr.getName());
                crafted.setQuantity(1);// equipment shouldn't be more than one
            }

            if (msr.getExpiredPeriod() > 0) {
                crafted.setDateExpire(FileTime.fromLong(System.currentTimeMillis() + ((long) msr.getExpiredPeriod() * 60 * 1000)));
            }

            if (msr.isNeedOpenItem()) {
                chr.removeSkillAndSendPacket(recipeID);
            }
        }

        boolean success = result != MakingSkillType.Fail_Crafting;
        int incSkillProficiency = msr.getIncProficiency(chr, success);

        if (crafted != null) {
            for (var consumedItem : itemResults) {
                if (consumedItem.getRight() < 0) {
                    chr.consumeItem(consumedItem.getLeft(), -consumedItem.getRight());
                }
            }

            chr.addItemToInventory(crafted);
            itemResults.add(new Tuple<>(crafted.getItemId(), crafted.getQuantity()));
        }

        chr.addMakingSkillProficiency(recipeID, incSkillProficiency);
        if (success) {
            var trait = SkillConstants.getIncStatByMakingSkill(reqSkillID);
            chr.addTraitExp(trait, GameConstants.getTraitExpByMakingSkillLevel(chr.getMakingSkillLevel(reqSkillID)));
        }

        chr.getField().broadcastPacket(FieldPacket.makingSkillResult(chr.getId(), recipeID, MakingSkillType.MakeRecipe, result, null, target, incSkillProficiency));
        chr.write(UserPacket.effect(Effect.gainQuestItem(itemResults)));
    }

    protected static void extractItem(Char chr, int itemId, int itemPos) {
        if (!ItemConstants.isEquip(itemId)) {
            chr.chatMessage("You can only extract equips.");
            return;
        }
        var inventory = chr.getEquipInventory();
        var equip = (Equip) inventory.getItemBySlot(itemPos);
        var equipLevel = equip.getReqLevel();

        var reqLevel = GameConstants.getRequiredMakingSkillForExtraction(equipLevel);
        var slv = chr.getMakingSkillLevel(SkillConstants.ALCHEMY_CRAFT_SKILL);

        if (slv < reqLevel) {
            var name = StringData.getItemStringById(itemId);
            chr.chatMessage(String.format("Your Alchemy mastery isn't high enough to extract %s (requied: %d).", name, reqLevel));
            return;
        }

        if (chr.getEtcInventory().isFull()) {
            chr.chatMessage("Please make some more space in your ETC inventory.");
            return;
        }

        var itemToGet = GameConstants.getExtractionReward(equipLevel);
        var randQuant = Util.getRandom(1, Math.max(1, equipLevel / 20));

        chr.addItemToInventory(itemToGet, randQuant);
        chr.consumeItemFull(equip);
    }
}
