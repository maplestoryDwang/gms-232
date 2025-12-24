package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.AndroidPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.loaders.containerclasses.AndroidInfo;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 4/14/2018.
 */
public class Android extends Life implements Encodable {

    private static final int ANDROID_ITEM_SIZE = 7;

    private Char ownerChar;
    private short skin;
    private short hair;
    private short face;
    private String name;

    public Android(int templateId) {
        super(templateId);
    }

    public Android(int templateId, Char ownerChar, short skin, short hair, short face, String name) {
        super(templateId);
        this.ownerChar = ownerChar;
        this.skin = skin;
        this.hair = hair;
        this.face = face;
        this.name = name;
    }

    public Android(Char chr, AndroidInfo androidInfo) {
        super(androidInfo.getId());
        this.ownerChar = chr;
        this.skin = (short) (Util.getRandomFromCollection(androidInfo.getSkins()) % 1000); // double cast...
        this.hair = (short) (Util.getRandomFromCollection(androidInfo.getHairs()) % 1000);
        this.face = (short) (Util.getRandomFromCollection(androidInfo.getFaces()) % 1000);
        this.name = "Android";
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(getTemplateId());
        outPacket.encodePosition(getPosition());
        outPacket.encodeByte(getMoveAction());
        outPacket.encodeShort(getFh());
        outPacket.encodeInt(0); // new 218
        encodeAndroidInfo(outPacket);

        List<Integer> androidItems = getItems(); // size always 7
        for (int itemId : androidItems) {
            outPacket.encodeInt(itemId);
        }
        for (int i = androidItems.size(); i < ANDROID_ITEM_SIZE; i++) {
            outPacket.encodeInt(0);
        }
    }

    public void encodeAndroidInfo(OutPacket outPacket) {
        outPacket.encodeShort(getSkin());
        outPacket.encodeInt(getHair());
        outPacket.encodeInt(getFace());
        outPacket.encodeString(getName());
        outPacket.encodeInt(0);
        outPacket.encodeFT(FileTime.MAX_TIME());
    }

    public static void encodeDefaultAndroidInfo(OutPacket outPacket) {
        outPacket.encodeShort(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeString("Android");
        outPacket.encodeInt(0);
        outPacket.encodeFT(FileTime.MAX_TIME());
    }

    public Char getOwnerChar() {
        return ownerChar;
    }

    public void setOwnerChar(Char ownerChar) {
        this.ownerChar = ownerChar;
    }

    public short getSkin() {
        return skin;
    }

    public void setSkin(short skin) {
        this.skin = skin;
    }

    public short getHair() {
        return hair;
    }

    public void setHair(short hair) {
        this.hair = hair;
    }

    public short getFace() {
        return face;
    }

    public void setFace(short face) {
        this.face = face;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getChrId() {
        return ownerChar.getId();
    }

    public List<Integer> getItems() {
        List<Integer> items = new ArrayList<>();
        if (getOwnerChar() == null || getOwnerChar().getEquippedInventory() == null) {
            if (getOwnerChar() == null) {
                ErrorLogger.logAsClientError("OwnerChar is null in Android::getItems.");
            } else {
                ErrorLogger.logAsClientError(String.format("Would get an NPE in Android::getItems. Ownerchar = %s, channel = %d, fieldId = %d", getOwnerChar(), getOwnerChar().getChannel(), getOwnerChar().getFieldID()));
            }
            return items;
        }


        Inventory inv = getOwnerChar().getEquippedInventory();
        for (int i = BodyPart.APBase.getVal(); i < BodyPart.APEnd.getVal(); i++) {
            Item item = inv.getItemBySlot(i);
            items.add(item == null ? 0 : item.getItemId());
        }
        return items;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        OutPacket outPacket = AndroidPacket.created(this);
        if (onlyChar == null) {
            getField().broadcastPacket(outPacket);
        } else {
            onlyChar.write(outPacket);
        }
    }

    @Override
    public void broadcastLeavePacket() {
        getField().broadcastPacket(AndroidPacket.removed(this));
    }

    public boolean hasObjectId() {
        return getObjectId() != -1;
    }
}
