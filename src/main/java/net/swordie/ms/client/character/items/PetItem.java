package net.swordie.ms.client.character.items;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.life.pet.PetSkill;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.PetInfo;
import net.swordie.ms.loaders.containerclasses.SetItemInfo;
import net.swordie.ms.util.FileTime;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.time.LocalDateTime;
import java.util.*;

/**
 * Created on 4/14/2018.
 */
public class PetItem extends Item {
    private static final Logger log = LogManager.getLogger();

    private String name;
    private byte level;
    private short tameness;
    private byte repleteness; // hungry thing
    private short petAttribute;
    private int petSkill;
    private FileTime dateDead;
    private int remainLife;
    private short attribute;
    private byte activeState;
    private int autoBuffSkill;
    private int petHue;
    private short giantRate;
    private int autoBuffSkill2;

    @Override
    public int getTransactionalHash() {
        return Objects.hash(super.getTransactionalHash(), name, level, tameness, repleteness, petAttribute, petSkill, dateDead, remainLife, attribute, activeState, autoBuffSkill, autoBuffSkill2, petHue, giantRate);
    }

    @Override
    public Type getType() {
        return Type.PET;
    }

    public void encode(OutPacket outPacket) {
        super.encode(outPacket);

        outPacket.encodeString(getName(), 13);
        outPacket.encodeByte(getLevel());
        outPacket.encodeShort(getTameness() + 1);
        outPacket.encodeByte(getRepleteness());
        outPacket.encodeFT((getDateDead() == null || getDateDead().toLong() == 0)
                ? FileTime.fromDate(LocalDateTime.now().plusYears(50))
                : getDateDead());
        outPacket.encodeShort(getPetAttribute());
        outPacket.encodeShort(getPetSkill());
        outPacket.encodeInt(getRemainLife());
        outPacket.encodeShort(getAttribute());
        outPacket.encodeByte(getActiveState());
        outPacket.encodeInt(getAutoBuffSkill());
        outPacket.encodeInt(getAutoBuffSkill2());
        outPacket.encodeInt(getPetHue());
        outPacket.encodeShort(getGiantRate());
        outPacket.encodeShort(0); // 202
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte getLevel() {
        return level;
    }

    public void setLevel(byte level) {
        this.level = level;
    }

    public short getTameness() {
        return tameness;
    }

    public void setTameness(short tameness) {
        this.tameness = tameness;
    }

    public byte getRepleteness() {
        return repleteness;
    }

    public void setRepleteness(byte repleteness) {
        this.repleteness = repleteness;
    }

    public short getPetAttribute() {
        return petAttribute;
    }

    public void setPetAttribute(short petAttribute) {
        this.petAttribute = petAttribute;
    }

    public int getPetSkill() {
        return petSkill;
    }

    public void setPetSkill(int petSkill) {
        this.petSkill = petSkill;
    }

    public FileTime getDateDead() {
        return dateDead;
    }

    public void setDateDead(FileTime dateDead) {
        this.dateDead = dateDead;
    }

    public int getRemainLife() {
        return remainLife;
    }

    public void setRemainLife(int remainLife) {
        this.remainLife = remainLife;
    }

    public short getAttribute() {
        return attribute;
    }

    public void setAttribute(short attribute) {
        this.attribute = attribute;
    }

    public byte getActiveState() {
        return activeState;
    }

    public void setActiveState(byte activeState) {
        this.activeState = activeState;
    }

    public int getAutoBuffSkill() {
        return autoBuffSkill;
    }

    public void setAutoBuffSkill(int autoBuffSkill) {
        this.autoBuffSkill = autoBuffSkill;
    }

    public int getPetHue() {
        return petHue;
    }

    public void setPetHue(int petHue) {
        this.petHue = petHue;
    }

    public short getGiantRate() {
        return giantRate;
    }

    public void setGiantRate(short giantRate) {
        this.giantRate = giantRate;
    }

    public Pet createPet(Char chr) {
        Pet pet = new Pet(getItemId(), chr.getId());
        pet.setFh(chr.getFoothold());
        pet.setPosition(chr.getPosition());
        int chosenIdx = chr.getFirstPetIdx();
        if (chosenIdx == -1) {
            log.warn("Tried to create a pet while 3 pets already exist.");
        }
        pet.setIdx(chosenIdx);
        pet.setName(getName());
        pet.setPetLockerSN(getId());
        pet.setHue(getPetHue() == 0 ? -1 : getPetHue());
        pet.setGiantRate(getGiantRate() == 0 ? 100 : getGiantRate());
        pet.setItem(this);
        return pet;
    }

    public void activatePet(Char chr, Pet pet) {
        setActiveState((byte) (pet.getIdx() + 1));

        PetInfo petInfo = ItemData.getPetInfoByID(getItemId());
        if (petInfo != null && petInfo.getSetItemID() > 0) {
            SetItemInfo sii = EtcData.getSetItemInfoById(petInfo.getSetItemID());
            if (sii != null) {
                Set<Integer> itemIDs = sii.getItemIds();
                int count = (int) chr.getPets().stream().filter(p -> itemIDs.contains(p.getItem().getItemId())).count();
                Map<Integer, Integer> skillMap = sii.getEffectActiveSkills().getOrDefault(count, new HashMap<>());
                for (var entry : skillMap.entrySet()) {
                    var skillId = entry.getKey();
                    var slv = entry.getValue();
                    chr.addSkill(skillId, slv, slv);
                }
            }
        }
    }

    public void deactivatePet(Char chr, Pet pet) {
        setActiveState((byte) 0);

        PetInfo petInfo = ItemData.getPetInfoByID(getItemId());
        if (petInfo != null && petInfo.getSetItemID() > 0) {
            SetItemInfo sii = EtcData.getSetItemInfoById(petInfo.getSetItemID());
            if (sii != null) {
                Set<Integer> itemIDs = sii.getItemIds();
                int count = (int) chr.getPets().stream().filter(p -> itemIDs.contains(p.getItem().getItemId())).count();
                Map<Integer, Integer> skillMap = sii.getEffectActiveSkills().getOrDefault(count, new HashMap<>());
                for (var skillId : skillMap.keySet()) {
                    Skill skill = new Skill();
                    skill.setSkillId(skillId);
                    chr.removeSkills(Collections.singletonList(skill));
                }
            }
        }
    }

    public PetItem deepCopy() {
        PetItem petItem = new PetItem();

        // Item fields
        petItem.setItemId(getItemId());
        petItem.setBagIndex(getBagIndex());
        petItem.setCashItemSerialNumber(getCashItemSerialNumber());
        petItem.setDateExpire(getDateExpire().deepCopy());
        petItem.setInvType(getInvType());
        petItem.setCash(isCash());
        petItem.setType(getType());
        petItem.setOwner(getOwner());
        petItem.setQuantity(getQuantity());

        // PetItem fields
        petItem.setName(getName());
        petItem.setLevel(getLevel());
        petItem.setTameness(getTameness());
        petItem.setRepleteness(getRepleteness());
        petItem.setPetAttribute(getPetAttribute());
        petItem.setPetSkill(getPetSkill());
        petItem.setDateDead(getDateDead() == null ? null : getDateDead().deepCopy());
        petItem.setRemainLife(getRemainLife());
        petItem.setAttribute(getAttribute());
        petItem.setActiveState(getActiveState());
        petItem.setAutoBuffSkill(getAutoBuffSkill());
        petItem.setPetHue(getPetHue());
        petItem.setGiantRate(getGiantRate());

        return petItem;
    }

    public void addPetSkill(PetSkill petSkill) {
        setPetSkill(getPetSkill() | petSkill.getVal());
    }

    public void removePetSkill(PetSkill petSkill) {
        if (hasPetSkill(petSkill)) {
            setPetSkill(getPetSkill() ^ petSkill.getVal());
        }
    }

    public boolean hasPetSkill(PetSkill petSkill) {
        return (getPetSkill() & petSkill.getVal()) != 0;
    }

    public int getAutoBuffSkill2() {
        return autoBuffSkill2;
    }

    public void setAutoBuffSkill2(int autoBuffSkill2) {
        this.autoBuffSkill2 = autoBuffSkill2;
    }
}
