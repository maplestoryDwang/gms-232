package net.swordie.ms.handlers.user;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.CUIHandler;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.QuestData;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class UnionHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.UNION_REQUEST)
    public static void handleUnionRequest(Char chr, InPacket inPacket) {
        Union union = chr.getUnion();
        chr.getUnionRaid().updateTotalDamageDone(chr, true);
        // only take lv 60+ 3rd job characters
        var eligibleChars = union.getEligibleUnionChars();
        UnionBoard activeBoard = union.getBoardByPreset(chr.getActiveUnionPreset());
        chr.write(CUIHandler.unionResult(chr.getUnionRaid().getUnclaimedCoins(), union.getUnionRank(), eligibleChars, activeBoard,
                null, null, null)); // todo: decide how u want to handle mobile/lab members
        chr.write(CUIHandler.unionCoin(union.getUnionCoin()));
        Quest quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.UNION_COIN);
        quest.setProperty("point", union.getUnionCoin());
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
    }

    @Handler(op = InHeader.UNION_PRESET_CHANGED)
    public static void handleUnionPresetChanged(Char chr, InPacket inPacket) {
        Union union = chr.getUnion();
        chr.getUnionRaid().updateTotalDamageDone(chr, true);
        int preset = inPacket.decodeInt();
        if (!union.hasPresetUnlocked(preset)) {
            chr.getOffenseManager().addOffense("Tried changing locked preset " + preset + ", cur max = " + union.getPresets());
            chr.dispose();
            return;
        }

        chr.setActiveUnionPreset(preset);
        int count = inPacket.decodeInt();
        String synergyGrid = "";
        for (int i = 0; i < count; i++) {
            synergyGrid += String.format("%d=%d%s", i, inPacket.decodeInt(), i == 7 ? "" : ";");
        }
        QuestManager qm = chr.getQuestManager();
        Quest q = qm.getQuestById(QuestConstants.UNION_SYNERGY_BOARD);
        if (q == null) {
            q = QuestData.createQuestFromId(QuestConstants.UNION_SYNERGY_BOARD);
            qm.addQuest(q);
        }
        if (!q.getQRValue().equals(synergyGrid)) {
            q.setQrValue(synergyGrid);
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
        }

        count = inPacket.decodeInt();
        inPacket.decodeByte(); // Unknown  Prob Mobile
        inPacket.decodeByte(); // Unknown  Prob Enh Lab
        int labCount = inPacket.decodeByte();
        for (int i = 0; i < labCount; i++) {
            inPacket.decodeByte(); // Unknown
        }
        Account account = chr.getAccount();
        UnionBoard ub = union.getBoardByPreset(preset);
        ub.clearActiveMembers();
        for (int i = 0; i < count; i++) {
            UnionMember.setCharGridPos(inPacket, preset, account);
        }
        for (int i = 0; i < labCount; i++) {
            UnionMember.setCharGridPos(inPacket, preset, account);
            // lab job = 10010900, lab enhanced job = 10010910
        }
        union.updateUnionBonuses(chr);

        var eligibleChars = union.getEligibleUnionChars();
        UnionBoard activeBoard = union.getBoardByPreset(chr.getActiveUnionPreset());

        chr.write(CUIHandler.unionAssignResult(union.getUnionRank(), eligibleChars, activeBoard,
                null, null, null));
    }

    @Handler(op = InHeader.UNION_ASSIGN_REQUEST)
    public static void handleUnionAssignRequest(Char chr, InPacket inPacket) {
        Union union = chr.getUnion();
        chr.getUnionRaid().updateTotalDamageDone(chr, true);
        int preset = inPacket.decodeInt();
        if (!union.hasPresetUnlocked(preset)) {
            chr.getOffenseManager().addOffense("Adding union preset they do not have (" + preset + ", max preset " + union.getPresets() + ")");
            chr.dispose();
            return;
        }
        UnionBoard ub = union.getBoardByPreset(preset);
        boolean unlocked = inPacket.decodeByte() != 0;
        chr.setActiveUnionPreset(preset);

        // Synergy Grid
        List<Integer> synGrid = new ArrayList<>();
        for (int i = 0; i < Union.MAX_STATS; i++) {
            int syn = inPacket.decodeInt();
            if (syn < 0 || syn >= Union.MAX_STATS) {
                chr.getOffenseManager().addOffense("Added invalid or duplicate union stat (expected 0~7, got " +
                        syn + ", grid up til this point = " + synGrid + ")");
                chr.dispose();
                return;
            }
            synGrid.add(syn);
        }
        ub.setSynergyGrid(synGrid);

        int count = inPacket.decodeInt();
        Account account = chr.getAccount();
        ub.clearActiveMembers();
        for (int i = 0; i < count; i++) {
            UnionMember.setCharGridPos(inPacket, preset, account);
        }
        union.updateUnionBonuses(chr);

        var eligibleChars = union.getEligibleUnionChars();
        UnionBoard activeBoard = union.getBoardByPreset(chr.getActiveUnionPreset());

        chr.write(CUIHandler.unionAssignResult(union.getUnionRank(), eligibleChars, activeBoard,
                null, null, null));
    }

    @Handler(op = InHeader.UNION_PRESET_INFO_REQUEST)
    public static void handleUnionPresetInfoRequest(Char chr, InPacket inPacket) {
        int preset = inPacket.decodeInt();
        Union union = chr.getUnion();
        UnionBoard ub = union.getBoardByPreset(preset);
        boolean unlocked = union.hasPresetUnlocked(preset);
        chr.getUnionRaid().updateTotalDamageDone(chr, true);
        chr.write(WvsContext.unionPresetInfoResult(preset, unlocked, ub));
    }

    @Handler(op = InHeader.UNION_RAID_RETREAT)
    public static void handleUnionRaidRetreat(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tRequestTime if i had to guess

        if (chr.getUnionRaid() != null) {
            chr.getUnionRaid().retreat();
        }

/*        if (chr.getFieldID() == 921172000) {
            chr.getScriptManager().warpInstanceOut(921172200);
        } else if (chr.getFieldID() == 921172100) {
            chr.getScriptManager().warpInstanceOut(921172201);
        }*/
    }
}
