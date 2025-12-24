package net.swordie.ms.handlers.life.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.familiar.FamiliarModifiedMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedType;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.life.Familiar;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 4/24/2020.
 *
 * @author Asura
 */
public class FamiliarHandlerModule {

    private static final Logger log = LogManager.getLogger();

    // Familiar Handler Module
    public static void handleFamiliarExtract(Char chr, int size, InPacket inPacket) {

        List<Familiar> fams = new ArrayList<>();
        int famPoints = 0;
        for (int i = 0; i < size; i++) {
            Familiar f = chr.getFamiliarByID(inPacket.decodeInt());
            if (f != null) {
                fams.add(f);
                famPoints += f.getFamPointsValue();
            }
        }

        chr.getFamiliarCodexManager().removeFamiliars(fams);
        chr.getFamiliarCodexManager().addFamPoints(famPoints);
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.Extract, famPoints));
    }

    public static void handleFamiliarFuse(Char chr, int familiarId, InPacket inPacket) { // Fusing points by familiar -> Grade level
        FamiliarCodexManager cfm = chr.getFamiliarCodexManager();
        int size = inPacket.decodeByte();

        Familiar familiar = cfm.getFamiliarByID(familiarId);
        if (familiar == null) {
            return;
        }

        List<Familiar> fams = new ArrayList<>();
        int gradeExp = 0;
        for (int i = 0; i < size; i++) {
            int famId = inPacket.decodeInt(); // Familiar ID
            Familiar f = cfm.getFamiliarByID(famId);
            if (f != null) {
                fams.add(f);
                gradeExp += f.getFusionValue();
            }
        }
        chr.getFamiliarCodexManager().removeFamiliars(fams);

        familiar.addGradeExp(gradeExp);

        chr.write(UserLocal.familiarAddResult(familiar, FamiliarModifiedMask.GradeExp.getVal()));
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.Fuse, true));
    }

    public static void handleFamiliarUpgrade(Char chr, int familiarId, InPacket inPacket) {
        Familiar familiar = chr.getFamiliarByID(familiarId);

        boolean success = false;
        if (familiar.canGradeUp()) {
            success = familiar.doGradeUp(chr);
        }

        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.Upgrade, success));
    }

    public static void handleFamiliarToggleLock(Char chr, int familiarId, InPacket inPacket) {
        Familiar f = chr.getFamiliarByID(familiarId);
        if (f != null) {
            f.setLocked(!f.isLocked());
            chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.ToggleLock, true));
            chr.write(UserLocal.familiarAddResult(f, FamiliarModifiedMask.Locked.getVal()));
        }
    }

    public static void handleFamiliarRename(Char chr, int familiarId, InPacket inPacket) {
        String name = inPacket.decodeString();
        if (name.length() > 13) {
            name = name.substring(0, 13);
        }
        Familiar familiar = chr.getFamiliarByID(familiarId);
        if (familiar != null) {
            familiar.setName(name);
        }
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.Rename, true));
        chr.write(UserLocal.familiarAddResult(familiar, FamiliarModifiedMask.Name.getVal()));
    }

    public static void handleFamiliarReleaseOption(Char chr, int familiarId, InPacket inPacket) {
        Familiar f = chr.getFamiliarByID(familiarId);
        if (f != null) {
            f.rerollPotentialLines(chr);
            chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.ReleaseOption, true));
        }
    }


    // Badge Handler Module
    public static void handleBadgeModifyEquippedBadges(Char chr) {

    }
}
