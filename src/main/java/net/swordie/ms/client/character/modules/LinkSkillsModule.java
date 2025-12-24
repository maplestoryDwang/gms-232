package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.LinkSkillResult;
import net.swordie.ms.util.Util;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created on 07/07/2020.
 *
 * @author Asura
 */
public class LinkSkillsModule {

    // Util
    public static LinkSkill getActivatedLinkSkillByLinkSkillId(Account account, int linkSkillID) {
        return Util.findWithPred(account.getLinkSkills(), s -> s.getUsingID() == 0 && s.getLinkSkillID() == linkSkillID);
    }

    public static LinkSkill getLinkSkillByLinkSkillId(Account account, int linkSkillID) {
        return Util.findWithPred(account.getLinkSkills(), s -> s.getLinkSkillID() == linkSkillID);
    }

    public static LinkSkill getLinkSkillByOriginId(Account account, int originId) {
        return Util.findWithPred(account.getLinkSkills(), s -> s.getOriginID() == originId);
    }

    public static Map<Integer, LinkSkill> getActiveLinkSkills(Account account, Char chr) {
        Map<Integer, LinkSkill> availableLinkSkillsMap = new HashMap<>();
        for (LinkSkill linkSkill : account.getLinkSkills()) {
            var skillId = linkSkill.getLinkSkillID();
            if (linkSkill.getUsingID() == -1 || linkSkill.getOriginID() == chr.getId() || SkillConstants.getLinkSkillByJob(chr.getJob()) == skillId) {
                // inactive, 'chr' is the Owner, or Would be duplicate of 'chr' Job.
                continue;
            }

            if (!availableLinkSkillsMap.containsKey(skillId)) {
                // If map does not contain SkillID, it's safe to put
                availableLinkSkillsMap.put(skillId, linkSkill);
            } else {
                // If map contains SkillID, check which LinkSkill has a higher lv
                LinkSkill curLinkSkill = availableLinkSkillsMap.getOrDefault(skillId, null);
                if (curLinkSkill.getLevel() < linkSkill.getLevel()) {
                    availableLinkSkillsMap.put(skillId, linkSkill);
                }
            }
        }

        return availableLinkSkillsMap;
    }

    // Takes into account duplicate LinkSkills, grabs the Highest Level
    public static Map<Integer, LinkSkill> getAvailableLinkSkills(Account account, Char chr) {
        Map<Integer, LinkSkill> availableLinkSkillsMap = new HashMap<>();
        for (LinkSkill linkSkill : account.getLinkSkills()) {
            var skillId = linkSkill.getLinkSkillID();
            if (linkSkill.getUsingID() == 0 || linkSkill.getOriginID() == chr.getId() || SkillConstants.getLinkSkillByJob(chr.getJob()) == skillId) {
                // Already activated, 'chr' is the Owner, or Would be duplicate of 'chr' Job.
                continue;
            }

            if (!availableLinkSkillsMap.containsKey(skillId)) {
                // If map does not contain SkillID, it's safe to put
                availableLinkSkillsMap.put(skillId, linkSkill);
            } else {
                // If map contains SkillID, check which LinkSkill has a higher lv
                LinkSkill curLinkSkill = availableLinkSkillsMap.getOrDefault(skillId, null);
                if (curLinkSkill.getLevel() < linkSkill.getLevel()) {
                    availableLinkSkillsMap.put(skillId, linkSkill);
                }
            }
        }

        return availableLinkSkillsMap;
    }

    public static int getStackLinkLevel(Account account, int skillId) {
        int[] individualLinkSkills = SkillConstants.getIndividualsByStackLink(skillId);
        if (individualLinkSkills.length == 0) {
            return 0;
        }
        var lv = 0;
        for (int individualLinkSkill : individualLinkSkills) {
            LinkSkill ls = getActivatedLinkSkillByLinkSkillId(account, individualLinkSkill);
            if (ls == null) {
                continue;
            }
            lv += ls.getLevel();
        }

        return Math.min(SkillConstants.getStackLinkSkillMaxLv(skillId), lv);
    }



    public static void initLinkSkills(Account account, Char chr) {
        // Remove All
        for (LinkSkill linkSkill : account.getLinkSkills()) {
            chr.removeSkill(linkSkill.getLinkSkillID());
            if (linkSkill.isStackingSkill()) {
                var stackLinkSkillId = linkSkill.getStackSkill();
                chr.removeSkill(stackLinkSkillId);
            }
        }

        // Add Actives
        for (LinkSkill linkSkill : getActiveLinkSkills(account, chr).values()) {
            var skillId = linkSkill.getLinkSkillID();
            var slv = linkSkill.getLevel();
            var originId = linkSkill.getOriginID();
            if (originId == chr.getId()) {
                continue;
            }

            if (chr.getSkillLevel(skillId) < slv) {

                chr.addSkill(skillId, slv, originId);
                if (linkSkill.isStackingSkill()) {
                    var stackLinkSkillId = linkSkill.getStackSkill();
                    if (stackLinkSkillId > 0) {
                        chr.addSkill(stackLinkSkillId, getStackLinkLevel(account, stackLinkSkillId), originId);
                    }
                }
                chr.write(WvsContext.linkedSkillInfo(chr, linkSkill)); // Must be done.. otherwise somehow origin will mess up for client
            }
        }
    }

    public static void activateLinkSkill(Account account, Char chr, LinkSkill linkSkill) {
        var skillId = linkSkill.getLinkSkillID();
        var slv = linkSkill.getLevel();
        var originId = linkSkill.getOriginID();

        // Activate Link Skill
        linkSkill.setUsingID(0); // 0 -> Active

        // Check Stacking Link Skills
        if (linkSkill.isStackingSkill()) {
            var stackLinkSkillId = linkSkill.getStackSkill();
            if (stackLinkSkillId > 0) {
                chr.addSkill(stackLinkSkillId, getStackLinkLevel(account, stackLinkSkillId), originId);
            }
        }

        // Add Skill
        chr.addSkill(skillId, slv, originId);

        // Broadcast to Client
        chr.write(WvsContext.linkedSkillInfo(chr, linkSkill));
        chr.write(WvsContext.linkSkillResult(skillId, LinkSkillResult.Link_Success));
    }

    public static void deactivateLinkSkill(Account account, Char chr, int skillId) {
        int[] individualLinkSkills = SkillConstants.getIndividualsByStackLink(skillId);
        boolean isStackingLinkSkill = individualLinkSkills.length > 0;
        Set<LinkSkill> deactivatedLinkSkills = new HashSet<>();
        if (isStackingLinkSkill) {
            for (int individualLinkSkill : individualLinkSkills) {
                LinkSkill linkSkill = getActivatedLinkSkillByLinkSkillId(account, individualLinkSkill);
                if (linkSkill == null) {
                    continue;
                }

                // Deactivate Link Skill
                linkSkill.setUsingID(-1); // -1 -> Inactive

                // Remove Skills
                account.removeSkillForAllChars(individualLinkSkill);
                deactivatedLinkSkills.add(linkSkill);
            }
        } else {
            LinkSkill linkSkill = getActivatedLinkSkillByLinkSkillId(account, skillId);
            if (linkSkill == null) {
                chr.write(WvsContext.linkSkillResult(0, LinkSkillResult.UnknownError));
                return;
            }

            // Deactivate Link Skill
            linkSkill.setUsingID(-1); // -1 -> Inactive
            deactivatedLinkSkills.add(linkSkill);
        }

        // Remove Skill
        account.removeSkillForAllChars(skillId);

        // Broadcast to Client
        chr.write(WvsContext.unlinkedSkillInfo(deactivatedLinkSkills));
        chr.write(WvsContext.linkSkillResult(skillId, LinkSkillResult.Unlink_Success));
    }
}
