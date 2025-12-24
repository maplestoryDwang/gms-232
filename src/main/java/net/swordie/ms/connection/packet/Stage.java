package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharEncoder;
import net.swordie.ms.client.character.damage.DamageCalc;
import net.swordie.ms.client.character.modules.CustomTitleModule;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.enums.DBChar;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.FieldCustom;
import net.swordie.ms.world.shop.cashshop.CashShop;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Random;

/**
 * Created on 12/14/2017.
 */
public class Stage {

    public static OutPacket setField(Char chr, Field field, int channelId, boolean dev, int oldDriverID,
                                     boolean characterData, boolean usingBuffProtector, byte portal,
                                     boolean setWhiteFadeInOut, int mobStatAdjustRate, FieldCustom fieldCustom,
                                     boolean canNotifyAnnouncedQuest, int stackEventGauge) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_FIELD);

        outPacket.encodeInt(channelId - 1);
        outPacket.encodeByte(dev);
        outPacket.encodeInt(oldDriverID);

        outPacket.encodeByte(characterData ? 1 : 2);
        outPacket.encodeInt(0); // unused
        outPacket.encodeByte(0); // new 196
        outPacket.encodeInt(field.getInfo().getWidth());
        outPacket.encodeInt(Math.abs(field.getInfo().getHeight()));
        outPacket.encodeByte(characterData);
        short notifierCheck = 0;
        outPacket.encodeShort(notifierCheck);
        if (notifierCheck > 0) {
            outPacket.encodeString(""); // pBlockReasonIter
            for (int i = 0; i < notifierCheck; i++) {
                outPacket.encodeString(""); // sMsg2
            }
        }

        if (characterData) {
            Random random = new SecureRandom();
            int s1 = random.nextInt();
            int s2 = random.nextInt();
            int s3 = random.nextInt();
            chr.setDamageCalc(new DamageCalc(chr, s1, s2, s3));
            outPacket.encodeInt(s1);
            outPacket.encodeInt(s2);
            outPacket.encodeInt(s3);


            CharEncoder.encode(chr, outPacket, DBChar.All); // <<<<------------------------------------
            // unk sub (not in kmst)
            // logout event (mushy)

            boolean bool1 = false;
            outPacket.encodeByte(bool1);
            if (bool1) {
                boolean bool2 = false;
                outPacket.encodeByte(bool2);
                if (bool2) {
                    outPacket.encodeInt(0);
                }
                outPacket.encodeFT(FileTime.MAX_TIME());
                outPacket.encodeByte(0);
                outPacket.encodeFT(FileTime.MAX_TIME());
            }
        } else {
            outPacket.encodeByte(usingBuffProtector);
            outPacket.encodeInt(field.getId());
            outPacket.encodeByte(portal);
            outPacket.encodeInt(chr.getAvatarData().getCharacterStat().getHp());
            boolean bool = false;
            outPacket.encodeByte(bool);
            if (bool) {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
            }
        }

        var bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            // some kind of portal/positional stuff
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }

        outPacket.encodeByte(setWhiteFadeInOut);
        outPacket.encodeByte(false); // setSlowFadeIn
        outPacket.encodeFT(FileTime.currentTime());

        outPacket.encodeInt(mobStatAdjustRate);
        boolean hasFieldCustom = fieldCustom != null;
        outPacket.encodeByte(hasFieldCustom);
        if (hasFieldCustom) {
            fieldCustom.encode(outPacket);
        }

        outPacket.encodeByte(false); // is pvp map, deprecated
        outPacket.encodeByte(canNotifyAnnouncedQuest);

        stackEventGauge = 0;
        outPacket.encodeByte(stackEventGauge > 0);
        if (stackEventGauge > 0) {
            outPacket.encodeInt(stackEventGauge);
        }

        // start new 199
        if (FieldConstants.isVonbonField(chr.getFieldID())) {
            int size = 0;
            outPacket.encodeByte(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeString(""); // portals?
            }
        }
        // end new 199

        // CUser::DecodeTextEquipInfo
        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
            outPacket.encodeString("");
        }
        // FreezeAndHotEventInfo::Decode
        outPacket.encodeByte(0); // nAccountType
        outPacket.encodeInt(0); // nAccountID
        // CUser::DecodeEventBestFriendInfo
        outPacket.encodeInt(0); // dwEventBestFriendAID

        // start new 199
        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeString("");
        }

        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            // popup to open on login
            outPacket.encodeString("");
            outPacket.encodeString("");
            outPacket.encodeString("");
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }

        outPacket.encodeInt(0); // nUiOnLogin?

        outPacket.encodeByte(0);
        outPacket.encodeInt(0); // new 223
        outPacket.encodeByte(1); // new 232

        // sub
        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // ?
        }
        // ~

        CustomTitleModule.encodeCustomTitle(chr, outPacket);

        return outPacket;
    }

    public static OutPacket setAuctionField(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_AUCTION_HOUSE_FIELD);

        CharEncoder.encode(chr, outPacket, DBChar.All);
        outPacket.encodeFT(FileTime.fromDate(LocalDateTime.now()));

        return outPacket;
    }

    private static void encodeLogoutEvent(OutPacket outPacket) {
        int idOrSomething = 0;
        outPacket.encodeInt(idOrSomething);
        if (idOrSomething > 0) {
            for (int i = 0; i < 3; i++) {
                // sub_9896B0
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeString("");
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeLong(0);
                outPacket.encodeLong(0);
                outPacket.encodeLong(0);
                outPacket.encodeLong(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeString("");
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeByte(0);
                // if(a3 & 1 != 0) -> encode int + str + buf of size 0x18 (24). a3 is 0 when called from setField
                int size = 0;
                outPacket.encodeInt(size);
                for (int j = 0; j < size; j++) {
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                }
            }
        }
    }

    public static OutPacket setCashShop(Char chr, CashShop cashShop) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_CASH_SHOP.getValue());

        CharEncoder.encode(chr, outPacket, DBChar.All);
        cashShop.encode(outPacket);

        return outPacket;
    }
}
