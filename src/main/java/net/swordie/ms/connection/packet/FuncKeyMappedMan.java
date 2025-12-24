package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.List;

/**
 * Created on 21/03/2020.
 *
 * @author Asura
 */
public class FuncKeyMappedMan {

    public static OutPacket funcKeyMappedManInit(FuncKeyMap funcKeyMap) {
        OutPacket outPacket = new OutPacket(OutHeader.FUNC_KEY_MAPPED_MAN_INIT);

        funcKeyMap.encode(outPacket, true);

        return outPacket;
    }

    public static OutPacket beastTamerFuncKeyMappedManInit(List<FuncKeyMap> funcKeyMap) {
        OutPacket outPacket = new OutPacket(OutHeader.FUNC_KEY_MAPPED_MAN_INIT);

        for (int i = 0; i < BeastTamer.KEYMAPS; i++) {
            funcKeyMap.get(i).encode(outPacket, i == 0); // enforce 5x (one for each mode)
        }

        return outPacket;
    }

    /**
     * Sets the HP Slot in Pet Tab (Equip Window)
     *
     * @param hpPotItemId Template Id of the Item to be set as Pet's HP Slot.
     * @return
     */
    public static OutPacket petConsumeHpInit(int hpPotItemId) {
        OutPacket outPacket = new OutPacket(OutHeader.PET_CONSUME_HP_INIT);

        outPacket.encodeInt(hpPotItemId); // template Id

        return outPacket;
    }

    /**
     * Sets the MP Slot in Pet Tab (Equip Window)
     *
     * @param mpPotItemId Template Id of the Item to be set as Pet's MP Slot.
     * @return
     */
    public static OutPacket petConsumeMpInit(int mpPotItemId) {
        OutPacket outPacket = new OutPacket(OutHeader.PET_CONSUME_MP_INIT);

        outPacket.encodeInt(mpPotItemId); // template Id

        return outPacket;
    }

    /**
     * Sets the AC Slot in Pet Tab (Equip Window)
     *
     * @param acPotItemId Template Id of the Item to be set as Pet's All-Cure Slot.
     * @return
     */
    public static OutPacket petConsumeAllCureInit(int acPotItemId) {
        OutPacket outPacket = new OutPacket(OutHeader.PET_CONSUME_AC_INIT);

        outPacket.encodeInt(acPotItemId); // template Id

        return outPacket;
    }
}
