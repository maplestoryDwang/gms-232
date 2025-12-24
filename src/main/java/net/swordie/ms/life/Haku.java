package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.FoxManPacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.EnterType;

/**
 * Created on 20-11-2019.
 *
 * @author Asura
 */
public class Haku extends Life {

    private int skillID;
    private int upgrade;
    private int fanID;
    private byte moveAction;
    private Char owner;
    private boolean isHumanForm;

    public Haku(int templateId) {
        super(templateId);
    }

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public Char getOwner() {
        return owner;
    }

    public void setOwner(Char owner) {
        this.owner = owner;
    }

    public int getUpgrade() {
        return upgrade;
    }

    public void setUpgrade(int upgrade) {
        this.upgrade = upgrade;
    }

    public int getFanID() {
        return fanID;
    }

    public void setFanID(int fanID) {
        this.fanID = fanID;
    }

    public byte getMoveAction() {
        return moveAction;
    }

    public void setMoveAction(byte moveAction) {
        this.moveAction = moveAction;
    }

    public boolean isHumanForm() {
        return isHumanForm;
    }

    public void setHumanForm(boolean humanForm) {
        isHumanForm = humanForm;
    }

    public static Haku getHakuBy(Char chr, int skillID) {
        Haku haku = new Haku(-1);
        haku.setOwner(chr);
        haku.setSkillID(skillID);
        haku.setMoveAction((byte) 5);
        haku.setUpgrade(2);
        Item item = chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.HakuFan);
        haku.setFanID(item != null ? item.getItemId() : 0);

        return haku;
    }

    public void changeHakuFan(int itemID) {
        if (ItemConstants.isFan(itemID)) {
            setFanID(itemID);
            getOwner().write(FoxManPacket.foxManModified(this));
        }
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
    }

    @Override
    public void broadcastLeavePacket() {
    }
}
