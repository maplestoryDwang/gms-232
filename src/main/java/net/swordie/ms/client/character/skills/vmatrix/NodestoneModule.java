package net.swordie.ms.client.character.skills.vmatrix;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.loaders.VCoreData;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 06/01/2022.
 *
 * @author Asura
 */
public class NodestoneModule {
    public static final int AMAZING_NODESTONE = 2436037;
    
    public static void openNodestone(Char chr, int itemId, boolean writeNodestoneOpenResultPacket) {

        if (itemId == AMAZING_NODESTONE) { //Amazing Nodestone, only gives you Rope Lift
            MatrixRecord mr = new MatrixRecord(chr);
            mr.setIconID(10000000);
            mr.setMaxLevel(25);
            mr.setSlv(1);
            mr.setSkillID1(400001000);
            chr.addMatrixRecord(mr);
            chr.write(WvsContext.nodestoneOpenResult(mr));

        } else {
            List<VCoreInfo> infos;
            if (Util.succeedProp(GameConstants.NODE_SELF_JOB_CHANCE)) {
                infos = new ArrayList<>(VCoreData.getPossibilitiesByJob(chr.getJob()));
            } else {
                List<Integer> jobs = new ArrayList<>(VCoreData.getJobSkills().keySet());
                jobs.remove((Integer) (int) chr.getJob()); // xd
                int job = Util.getRandomFromCollection(jobs);
                infos = new ArrayList<>(VCoreData.getPossibilitiesByJob(job));
            }

            int rng = Util.getRandom(100);
            if (rng < GameConstants.NODE_ENFORCE_CHANCE) {
                infos = infos.stream().filter(VCoreInfo::isEnforce).collect(Collectors.toList());
            } else if (rng - GameConstants.NODE_ENFORCE_CHANCE < GameConstants.NODE_SKILL_CHANCE) {
                infos = infos.stream().filter(VCoreInfo::isSkill).collect(Collectors.toList());
            } else {
                infos = infos.stream().filter(VCoreInfo::isSpecial).collect(Collectors.toList());
            }

            MatrixRecord mr = new MatrixRecord(chr);
            for (int i = 0; i < 3; i++) {
                VCoreInfo vci = Util.getRandomFromCollection(infos);
                infos.remove(Util.findWithPred(infos, v -> v.getIconID() == vci.getIconID()));
                switch (i) {
                    case 0:
                        mr.setIconID(vci.getIconID());
                        mr.setMaxLevel(vci.getMaxLevel());
                        mr.setSkillID1(vci.getSkillID());
                        mr.setSlv(1);
                        if (vci.isSoloNode()) {
                            // stop if the info is a solo node (i.e, 5th job skill/5th job special node)
                            i = 3;
                        } else {
                            // if it's not a solo node, reduce the possibilities to the other non-solo nodes
                            infos = infos.stream().filter(v -> !v.isSoloNode()).collect(Collectors.toList());
                        }
                        break;

                    case 1:
                        mr.setSkillID2(vci.getSkillID());
                        break;

                    case 2:
                        mr.setSkillID3(vci.getSkillID());
                        break;
                }
            }

            chr.addMatrixRecord(mr);
            if (writeNodestoneOpenResultPacket) {
                chr.write(WvsContext.nodestoneOpenResult(mr));
            }
        }

        chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
    }
}
