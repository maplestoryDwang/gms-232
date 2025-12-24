package net.swordie.ms.handlers.social;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.social.miniroom.MiniRoomModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.MiniRoomAction;
import net.swordie.ms.enums.PopularityResultType;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.time.LocalDateTime;

public class RoomHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.MINI_ROOM)
    public static void handleMiniRoom(Char chr, InPacket inPacket) {
        if (chr.getClient().getWorld().isReboot()) {
            log.error(String.format("Character %d attempted to use trade in reboot world.", chr.getId()));
            chr.dispose();
            return;
        }
        chr.dispose();
        byte type = inPacket.decodeByte(); // MiniRoom Action value
        MiniRoomAction mrt = MiniRoomAction.getByVal(type);
        if (mrt == null) {
            log.error(String.format("Unknown miniroom type %d", type));
            return;
        }

        if (mrt.isOmokGameRoomAction()) {
            MiniRoomModule.handleOmokGameRoomAction(chr, mrt, inPacket);

        } else if (mrt.isTradingRoomAction()) {
            MiniRoomModule.handleTradingRoomAction(chr, mrt, inPacket);

        } else {
            MiniRoomModule.handleCommonMiniRoomAction(chr, mrt, inPacket);
        }

    }

    @Handler(op = InHeader.USER_GIVE_POPULARITY_REQUEST)
    public static void handleUserGivePopularityRequest(Char chr, InPacket inPacket) {
        int targetChrId = inPacket.decodeInt();
        boolean increase = inPacket.decodeByte() != 0;

        Field field = chr.getField();
        Char targetChr = field.getCharByID(targetChrId);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();

        if (targetChr == null) { // Faming someone who isn't in the map or doesn't exist
            chr.write(WvsContext.givePopularityResult(PopularityResultType.InvalidCharacterId, targetChr, 0, increase));
            chr.dispose();
        } else if (chr.getLevel() < GameConstants.MIN_LEVEL_TO_FAME || targetChr.getLevel() < GameConstants.MIN_LEVEL_TO_FAME) { // Chr or TargetChr is too low level
            chr.write(WvsContext.givePopularityResult(PopularityResultType.LevelLow, targetChr, 0, increase));
            chr.dispose();
        } else if (cs.getNextAvailableFameTime() != null && !cs.getNextAvailableFameTime().isExpired()) { // Faming whilst Chr already famed within the FameCooldown time
            chr.write(WvsContext.givePopularityResult(PopularityResultType.AlreadyDoneToday, targetChr, 0, increase));
            chr.dispose();
        } else if (targetChrId == chr.getId()) {
            chr.getOffenseManager().addOffense(Offense.Type.Warning,
                    String.format("Character %d tried to fame themselves", chr.getId()));
        } else {
            targetChr.addStatAndSendPacket(Stat.pop, (increase ? 1 : -1));
            int curPop = targetChr.getAvatarData().getCharacterStat().getPop();
            chr.write(WvsContext.givePopularityResult(PopularityResultType.Success, targetChr, curPop, increase));
            targetChr.write(WvsContext.givePopularityResult(PopularityResultType.Notify, chr, curPop, increase));
            cs.setNextAvailableFameTime(FileTime.fromDate(LocalDateTime.now().plusHours(GameConstants.FAME_COOLDOWN)));
            if (increase) {
                Effect.showFameGradeUp(targetChr);
            }
        }
    }

    @Handler(op = InHeader.LIKE_POINT)
    public static void handleLikePoint(Client c, InPacket inPacket) {
        //TODO
    }
}
