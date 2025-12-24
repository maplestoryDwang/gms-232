package net.swordie.ms.handlers.user;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.Macro;
import net.swordie.ms.client.character.modules.MacrosModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class MacroHandler {
    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.USER_MACRO_SYS_DATA_MODIFIED)
    public static void handleUserMacroSysDataModified(Char chr, InPacket inPacket) {
        byte size = inPacket.decodeByte();

        List<Macro> macros = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            Macro macro = new Macro(true);
            macro.setName(inPacket.decodeString());
            macro.setMuted(inPacket.decodeByte() != 0);
            macro.setMacroPos(i);
            for (int j = 0; j < 3; j++) {
                macro.setSkillAtPos(j, inPacket.decodeInt());
            }
            macros.add(macro);
        }
        MacrosModule.deleteMacros(chr, chr.getMacros());
        chr.setMacros(macros);
    }

    @Handler(ops = {InHeader.USER_ANTI_MACRO_QUESTION_RESULT, InHeader.ANTI_MACRO_RESPONSE})
    public static void handleUserAntiMacroQuestionResult(Char chr, InPacket inPacket) {
        String answer = inPacket.decodeString();
        var om = chr.getOffenseManager();

        if (!answer.equalsIgnoreCase(om.getLieDetectorAnswer())) {
            om.failedLieDetector(1, true, false);
        } else {
            om.passedLieDetector();
        }
    }

    @Handler(op = InHeader.USER_ANTI_MACRO_REFRESH_REQUEST)
    public static void handleUserAntiMacroRefreshResult(Client c, InPacket inPacket) {
        Char chr = c.getChr();

        // attempting to refresh while there's no LD
        if (chr.getOffenseManager().getLieDetectorAnswer().length() > 0) {
            chr.sendLieDetector(true);
        }
    }

}
