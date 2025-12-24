package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.RandomPortalPool;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.util.Position;

/**
 * @author Sjonnie
 * Created on 9/12/2018.
 */
public class RandomPortal extends Life implements Encodable {

    private int charID;
    private Type appearType;

    public RandomPortal(Type appearType, Position pos, int charID) {
        super(0);
        this.appearType = appearType;
        super.setPosition(pos);
        this.charID = charID;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodePosition(getPosition());
        outPacket.encodeInt(getField().getId());
        outPacket.encodeInt(getCharID());
    }

    public int getCharID() {
        return charID;
    }

    public void setCharID(int charID) {
        this.charID = charID;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        if (onlyChar == null) {
            getField().broadcastPacket(RandomPortalPool.created(this));
        } else {
            onlyChar.write(RandomPortalPool.created(this));
        }
    }

    @Override
    public void broadcastLeavePacket() {
        OutPacket packet = RandomPortalPool.removed(getObjectId());
        if (getCharID() == -1) {
            getField().broadcastPacket(packet);
        } else {
            Char chr = getField().getCharByID(getCharID());
            if (chr != null) {
                chr.write(packet);
            }
        }
    }

    public Type getAppearType() {
        return appearType;
    }

    public void setAppearType(Type appearType) {
        this.appearType = appearType;
    }

    public enum Type {
        None(0, "undefined"),
        Event(1, "random_portal_event"),
        PolloFritto(2, "random_portal_pollo_fritto"),
        Inferno(3, "random_portal_inferno"),
        PurpleRift(4, "random_portal_purple_rift"),

        PurpleRift2(6, "random_portal_purple_rift2"),

        PolloFrittoRed(100, "random_portal_pollo_fritto_red")
        ;

        private int val;
        private String script;

        Type(int val, String script) {
            this.val = val;
            this.script = script;
        }

        public int getVal() {
            return val;
        }

        public String getScript() {
            return script;
        }
    }
}
