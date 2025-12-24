package net.swordie.ms.connection.packet.field;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.MarriageRecord;
import net.swordie.ms.client.character.chair.PortableChair;
import net.swordie.ms.client.character.info.FarmUserInfo;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.modules.ChatModule;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.runestones.RuneStoneAckType;
import net.swordie.ms.client.character.skills.ExtraSkillInfo;
import net.swordie.ms.client.character.skills.PsychicArea;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.GuideForceAtomInfo;
import net.swordie.ms.client.character.skills.info.ForceAtomInfo;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.client.jobs.legend.Phantom;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.trunk.TrunkDlg;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.QuickMoveInfo;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.handlers.user.MakingSkillItem;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.AppearingFoothold;
import net.swordie.ms.life.Wreckage;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.loaders.containerclasses.MakingSkillRecipe;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Triple;
import net.swordie.ms.world.auction.AuctionResult;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.DebuffObject;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldskill.FieldSkill;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleInRowInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.jobs.adventurer.magician.IceLightning.BOLT_BARRAGE_TILE;

public class FieldPacket {

    public static OutPacket quickslotInit(List<Integer> keys) {
        OutPacket outPacket = new OutPacket(OutHeader.QUICKSLOT_INIT);

        boolean encode = keys != null && keys.size() > 0;
        outPacket.encodeByte(encode);
        if (encode) {
            for (int i = 0; i < GameConstants.QUICKSLOT_LENGTH; i++) {
                outPacket.encodeInt(i < keys.size() ? keys.get(i) : 0);
            }
        }

        return outPacket;
    }

    public static OutPacket affectedAreaCreated(AffectedArea aa) {
        OutPacket outPacket = new OutPacket(OutHeader.AFFECTED_AREA_CREATED);

        outPacket.encodeInt(aa.getObjectId());
        outPacket.encodeByte(aa.getAaType()); //bMobOwner
        if (aa.getAaType() == 1) {
            outPacket.encodeInt(aa.getMobOwnerOID()); // Mob AA
        } else {
            outPacket.encodeInt(aa.getCharID()); // chr AA
        }
        outPacket.encodeInt(aa.getSkillID());
        outPacket.encodeShort(aa.getSlv());
        outPacket.encodeShort(aa.getDelay());
        aa.getRect().encode(outPacket);
        if (SkillConstants.isWindSwing(aa.getSkillID())) {
            aa.getRect2().encode(outPacket);
        }
        outPacket.encodeInt(aa.getElemAttr());
        outPacket.encodeInt(0); // ?
        outPacket.encodePosition(aa.getPosition()); // idk, it suddenly offset 50 units
        outPacket.encodeInt(aa.getForce());
        outPacket.encodeInt(aa.getOption());
        outPacket.encodeByte(aa.getIdk2());
        outPacket.encodeInt(aa.getType() == 1 ? aa.getMobLv() : aa.getChrLv());
        if (SkillConstants.isFlipAffectAreaSkill(aa.getSkillID())) {
            outPacket.encodeByte(aa.isFlip());
        }
        outPacket.encodeInt(aa.getSkillID() == BOLT_BARRAGE_TILE ? 0 : aa.getDuration()); // duration
        outPacket.encodeInt(0); // new 208
        outPacket.encodeInt(0); // new 214
        outPacket.encodeByte(0); // new 214

        boolean bool = false;
        outPacket.encodeByte(bool); // ?
        if (bool) {
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeString("");
            }
        }
        return outPacket;
    }

    public static OutPacket affectedAreaRemoved(AffectedArea aa, boolean mistEruption) {
        OutPacket outPacket = new OutPacket(OutHeader.AFFECTED_AREA_REMOVED);

        outPacket.encodeInt(aa.getObjectId());
        if (aa.getSkillID() == FirePoison.POISON_MIST) {
            outPacket.encodeByte(mistEruption);
        }
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket installedAreaFire(AffectedArea aa, List<AffectedArea> toFire) {
        OutPacket outPacket = new OutPacket(OutHeader.INSTALLED_AREA_FIRE);

        outPacket.encodeInt(aa.getSkillID());
        outPacket.encodeInt(aa.getSlv());
        outPacket.encodeInt(toFire.size());
        for (AffectedArea area : toFire) {
            outPacket.encodeInt(area.getObjectId());
        }

        return outPacket;
    }

    public static OutPacket curNodeEventEnd(boolean enable) {
        OutPacket outPacket = new OutPacket(OutHeader.CUR_NODE_EVENT_END);

        outPacket.encodeByte(enable);

        return outPacket;
    }

    public static OutPacket createForceAtom(ForceAtom fa) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_FORCE_ATOM);

        int forceAtomType = fa.getForceAtomEnum().getForceAtomType();
        outPacket.encodeByte(fa.isByMob());
        if (fa.isByMob()) {
            outPacket.encodeInt(fa.getUserOwner());
        }
        outPacket.encodeInt(fa.getCharId());
        outPacket.encodeInt(forceAtomType);

        if (forceAtomType != 36 && forceAtomType != 37) {

            // Non Target Atoms
            if (forceAtomType == 0 || forceAtomType == 9 || forceAtomType == 14 || forceAtomType == 29 || forceAtomType == 35 || forceAtomType == 42) {
                if (forceAtomType == 42 || forceAtomType == 29) {
                    outPacket.encodeInt(fa.getSkillId());

                    if (fa.getSkillId() == BattleMage.GRIM_HARVEST) {
                        outPacket.encodeInt(2000); // duration gain
                    }
                }

            // Target Atoms
            } else {
                outPacket.encodeByte(fa.isToMob());
                switch (forceAtomType) {
                    case 2:
                    case 3:
                    case 6:
                    case 7:
                    case 11:
                    case 12:
                    case 13:
                    case 17:
                    case 19:
                    case 20:
                    case 23:
                    case 24:
                    case 25:
                    case 27:
                    case 28:
                    case 30:
                    case 32:
                    case 34:
                    case 38:
                    case 39:
                    case 40:
                    case 41:
                    case 47:
                    case 48:
                    case 49:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                    case 58:
                    case 60:
                    case 64:
                    case 65:
                    case 66:
                    case 67:
                    case 72:
                        outPacket.encodeInt(fa.getTargetIdList().size());
                        for (int i : fa.getTargetIdList()) {
                            outPacket.encodeInt(i);
                        }
                        break;

                    case 62:
                        outPacket.encodeInt(fa.getTargetIdList().size());
                        for (int i : fa.getTargetIdList()) {
                            outPacket.encodeInt(i);
                        }
                        break;

                    default:
                        outPacket.encodeInt(fa.getTargetIdList().get(0));
                        break;
                }
                outPacket.encodeInt(fa.getSkillId());
            }

        } else {
            outPacket.encodeInt(fa.getSkillId());
        }

        for (ForceAtomInfo fai : fa.getFaiList()) {
            outPacket.encodeByte(1);
            fai.encode(outPacket);
        }
        outPacket.encodeByte(0);
        switch (forceAtomType) {
            case 11:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodeInt(fa.getBulletId());
                // goto LABEL_107
                break;
            case 9:
                outPacket.encodeRectInt(fa.getRect());
                // goto LABEL_107
                break;
            case 15:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodeByte(0); // Unknown Boolean
                // goto LABEL_107
                break;
            case 29:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodePositionInt(fa.getForcedTargetPosition());
                // goto LABEL_107
                break;
            case 4:
            case 16:
            case 20:
            case 26:
            case 30:
            case 33:
            case 61:
            case 64:
            case 67:
                outPacket.encodePositionInt(fa.getPosition());
                // goto LABEL_107
                break;
            case 17:
                outPacket.encodeInt(fa.getArriveDir());
                outPacket.encodeInt(fa.getArriveRange());
                break;
            case 18:
                outPacket.encodePositionInt(fa.getForcedTargetPosition());
            case 27:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodeInt(0);
                break;
            case 28:
            case 34:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodeInt(fa.getTime());
                break;
            case 57:
            case 58:
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodeInt(2);
                outPacket.encodePositionInt(fa.getPosition());
                break;
            case 35: // Removed?
                outPacket.encodePositionInt(fa.getForcedTargetPosition());
                break;
            case 36:
            case 39:
                outPacket.encodeInt(fa.getArriveDir()); // Enemies hit
                outPacket.encodeInt(fa.getArriveRange()); // Distance travelled
                outPacket.encodeInt(0);
                outPacket.encodeRectInt(fa.getRect());
                if (forceAtomType == 36) {
                    outPacket.encodeRectInt(fa.getRect2());
                    outPacket.encodeInt(0);
                }
                break;
            case 37:
                outPacket.encodeInt(0);
                outPacket.encodeRectInt(fa.getRect());
                outPacket.encodePositionInt(fa.getForcedTargetPosition());
                break;
            case 42:
                outPacket.encodeRectInt(fa.getRect());
                break;
            case 49:
                outPacket.encodeInt(fa.getBulletId());
                outPacket.encodeInt(fa.getUserOwner()); // Summon Obj Id
                outPacket.encodeRectInt(fa.getRect());
                break;
            case 7:
                outPacket.encodeRectInt(fa.getRect());
                break;
            case 50:
                outPacket.encodePositionInt(fa.getForcedTargetPosition());
                break;
        }

        var skillId = fa.getSkillId();

        if (skillId == Phantom.ACE_IN_THE_HOLE_ATOM) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }

        else if (fa.getSkillId() == Shade.FOX_SPIRITS_ATOM || fa.getSkillId() == Shade.FOX_SPIRITS_ATOM_2) {
            outPacket.encodeInt(0); // idk
        }

        else if (fa.getSkillId() == Paladin.MIGHTY_MJOLNIR) {
            outPacket.encodeInt(0);
            outPacket.encodeByte(0);
        }


        return outPacket;
    }

    public static OutPacket createArkForceAtom(int chrId, int skillId, ForceAtom abyssalFA, ForceAtom gustFA, ForceAtom scarletFA, ForceAtom basicFA) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_ARK_FORCE_ATOM);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(skillId);

        outPacket.encodeInt(4); // size of the different force atoms Ark can get.

        // Abyssal Force Atom
        outPacket.encodeInt(abyssalFA.getForceAtomEnum().getForceAtomType());
        outPacket.encodeInt(abyssalFA.getSkillId());
        outPacket.encodeInt(abyssalFA.getTargetIdList().size());
        for (int i = 0; i < abyssalFA.getTargetIdList().size(); i++) {
            outPacket.encodeInt(abyssalFA.getTargetIdList().get(i));
            outPacket.encodeByte(abyssalFA.getFaiList().size());
            //for (ForceAtomInfo fai : gustFA.getFaiList()) {
            abyssalFA.getFaiList().get(i).encode(outPacket);
            outPacket.encodeByte(0); // unk
            //}
        }

        // Gust Force Atom
        outPacket.encodeInt(gustFA.getForceAtomEnum().getForceAtomType());
        outPacket.encodeInt(gustFA.getSkillId());
        outPacket.encodeInt(gustFA.getTargetIdList().size());
        for (int i = 0; i < gustFA.getTargetIdList().size(); i++) {
            outPacket.encodeInt(gustFA.getTargetIdList().get(i));
            outPacket.encodeByte(gustFA.getFaiList().size());
            //for (ForceAtomInfo fai : gustFA.getFaiList()) {
            gustFA.getFaiList().get(i).encode(outPacket);
            outPacket.encodeByte(0); // unk
            //}
        }

        // Scarlet Force Atom
        outPacket.encodeInt(scarletFA.getForceAtomEnum().getForceAtomType());
        outPacket.encodeInt(scarletFA.getSkillId());
        outPacket.encodeInt(scarletFA.getTargetIdList().size());
        for (int i = 0; i < scarletFA.getTargetIdList().size(); i++) {
            outPacket.encodeInt(scarletFA.getTargetIdList().get(i));
            outPacket.encodeByte(scarletFA.getFaiList().size());
            //for (ForceAtomInfo fai : gustFA.getFaiList()) {
            scarletFA.getFaiList().get(i).encode(outPacket);
            outPacket.encodeByte(0); // unk
            //}
        }

        // Basic Force Atom
        outPacket.encodeInt(basicFA.getForceAtomEnum().getForceAtomType());
        outPacket.encodeInt(basicFA.getSkillId());
        outPacket.encodeInt(basicFA.getTargetIdList().size());
        for (int i = 0; i < basicFA.getTargetIdList().size(); i++) {
            outPacket.encodeInt(basicFA.getTargetIdList().get(i));
            outPacket.encodeByte(basicFA.getFaiList().size());
            //for (ForceAtomInfo fai : gustFA.getFaiList()) {
            basicFA.getFaiList().get(i).encode(outPacket);
            outPacket.encodeByte(0); // unk
            //}
        }

        return outPacket;
    }

    public static OutPacket guideForceAtom(int chrId, int faKey, int mobId) {
        OutPacket outPacket = new OutPacket(OutHeader.GUIDE_FORCE_ATOM);

        outPacket.encodeInt(faKey);
        outPacket.encodeInt(chrId);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(mobId);

        return outPacket;
    }

    public static OutPacket guideForceAtom(GuideForceAtomInfo gfai) {
        OutPacket outPacket = new OutPacket(OutHeader.GUIDE_FORCE_ATOM);

        outPacket.encodeInt(gfai.faKey);
        outPacket.encodeInt(gfai.chrId);
        outPacket.encodeInt(gfai.type);
        outPacket.encodeInt(gfai.interactionObjId);
        switch (gfai.type) {
            case 1:
                outPacket.encodeRectShort(gfai.rect);
                break;
            case 2:
                outPacket.encodeInt(gfai.count);
                outPacket.encodeByte(gfai.flip);
                outPacket.encodeRectShort(gfai.rect);
                break;
            case 3:
                outPacket.encodeInt(gfai.path1);
                outPacket.encodeInt(gfai.path2);
                break;
            default:
                outPacket.encodeInt(gfai.count);
                outPacket.encodeInt(gfai.mobId);
                break;
        }

        return outPacket;
    }

    public static OutPacket removeForceAtom(int type, int chrId, int faKey) {
        return removeForceAtom(type, chrId, Collections.singletonList(faKey));
    }

    public static OutPacket removeForceAtom(int type, int chrId, List<Integer> faKeys) {
        OutPacket outPacket = new OutPacket(OutHeader.REMOVE_FORCE_ATOM);

        outPacket.encodeInt(type);
        switch (type) {
            case 1: // Remove by faKey & ChrId
            case 2: // Remove by faKey & ChrId
                if (faKeys.size() > 0) {
                    outPacket.encodeInt(faKeys.get(0));
                    outPacket.encodeInt(chrId);
                } else {
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                }
                break;
            case 3:
                outPacket.encodeInt(faKeys.size());
                for (var faKey : faKeys) {
                    outPacket.encodeInt(faKey);
                }
                outPacket.encodeInt(chrId);
                break;
        }

        return outPacket;
    }

    public static OutPacket finalAttackRequest(Char chr, int skillID, int finalSkillID, List<Integer> mobsHit) {
        OutPacket outPacket = new OutPacket(OutHeader.FINAL_ATTACK_REQUEST);

        WeaponType wt = ItemConstants.getWeaponType(chr.getEquippedItemByBodyPart(BodyPart.Weapon).getItemId());

        outPacket.encodeInt(Util.getCurrentTime());
        outPacket.encodeInt(1); // success
        outPacket.encodeInt(skillID);
        outPacket.encodeInt(finalSkillID);
        outPacket.encodeInt(wt == null ? 0 : wt.getVal());

        outPacket.encodeInt(mobsHit.size()); // Mob Loop
        for (var mob : mobsHit) {
            outPacket.encodeInt(mob);
        }

        return outPacket;
    }

    public static OutPacket setAmmo(int ammo) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_AMMO);

        outPacket.encodeInt(ammo);

        return outPacket;
    }

    public static OutPacket createPsychicArea(int charID, PsychicArea pa) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_PSYCHIC_AREA);

        outPacket.encodeInt(charID);

        outPacket.encodeByte(pa.success);
        outPacket.encodeInt(pa.action);
        outPacket.encodeInt(pa.actionSpeed);
        outPacket.encodeInt(pa.psychicAreaKey);
        outPacket.encodeInt(pa.skillID);
        outPacket.encodeShort(pa.slv);
        outPacket.encodeInt(pa.localPsychicAreaKey);
        outPacket.encodeInt(pa.duration);
        outPacket.encodeByte(pa.isLeft);
        outPacket.encodeShort(pa.skeletonFilePathIdx);
        outPacket.encodeShort(pa.skeletonAniIdx);
        outPacket.encodeShort(pa.skeletonLoop);
        outPacket.encodePositionInt(pa.start);

        return outPacket;
    }

    public static OutPacket characterInfo(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.CHARACTER_INFO);

        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(chr.getStat(Stat.level));
        outPacket.encodeShort(chr.getJob());
        outPacket.encodeShort(chr.getStat(Stat.job));
        outPacket.encodeByte(cs.getPvpGrade());
        outPacket.encodeInt(cs.getPop()); //Fame
        MarriageRecord marriage = chr.getMarriageRecord();
        outPacket.encodeByte(marriage != null);
        if (marriage != null) {
            marriage.encode(outPacket);
        }
        List<Short> makingSkills = new ArrayList<>();
        for (short i = 9200; i <= 9204; i++) {
            if (chr.getMakingSkillLevel(i * 10000) > 0) {
                makingSkills.add(i);
            }
        }
        outPacket.encodeByte(makingSkills.size());
        for (Short makingSkill : makingSkills) {
            outPacket.encodeShort(makingSkill);
        }
        outPacket.encodeString(chr.getGuild() == null ? "" : chr.getGuild().getName());
        outPacket.encodeString(chr.getGuild() == null || chr.getGuild().getAlliance() == null ? "" :
                chr.getGuild().getAlliance().getName());
        outPacket.encodeByte(4); // Forced pet IDx
        outPacket.encodeByte(4); // User state (?)
        outPacket.encodeByte(4); // 202
        for (Pet pet : chr.getPets()) {
            PetItem pi = pet.getItem();
            outPacket.encodeByte(1);
            outPacket.encodeInt(pet.getIdx());
            outPacket.encodeInt(pi.getItemId());
            outPacket.encodeString(pet.getName());
            outPacket.encodeByte(pi.getLevel());
            outPacket.encodeShort(pi.getTameness());
            outPacket.encodeByte(pi.getRepleteness());
            outPacket.encodeShort(pi.getPetSkill());
            outPacket.encodeInt(0); // equip
            outPacket.encodeInt(pi.getPetHue());
        }
        outPacket.encodeByte(0); // end of pets

        // MedalAchievementInfo::Decode
        Equip medal = (Equip) chr.getEquippedItemByBodyPart(BodyPart.Medal);
        outPacket.encodeInt(medal == null ? 0 : medal.getItemId());
        // for each medal, encode int (itemID) and complete time (FT)
        outPacket.encodeShort(0); // medal size
        // End MedalAchievementInfo::Decode
        chr.encodeDamageSkins(outPacket);
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getCharisma());
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getInsight());
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getWill());
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getCraft());
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getSense());
        outPacket.encodeByte(cs.getNonCombatStatDayLimit().getCharm());
        outPacket.encodeInt(chr.getUserId());
        // FarmUserInfo::Decode
        new FarmUserInfo().encode(outPacket);
        // End FarmUserInfo::Decode
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        //Chairs
        outPacket.encodeInt(0); //chair amount(size)

        // sub
        outPacket.encodeInt(30);
        outPacket.encodeInt(0);
        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
        }
        // ~sub


        return outPacket;
    }

    public static OutPacket showItemUpgradeEffect(int charID, boolean success, boolean enchantDlg, int uItemID, int eItemID, boolean boom) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOW_ITEM_UPGRADE_EFFECT);

        outPacket.encodeInt(charID);

        outPacket.encodeByte(boom ? 2 : success ? 1 : 0);
        outPacket.encodeByte(enchantDlg);
        outPacket.encodeInt(uItemID);
        outPacket.encodeInt(eItemID);

        outPacket.encodeInt(0);
        outPacket.encodeByte(0);
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket showItemReleaseEffect(int charID, short pos, boolean bonus) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOW_ITEM_RELEASE_EFFECT);

        outPacket.encodeInt(charID);

        outPacket.encodeShort(pos);
        outPacket.encodeByte(bonus);

        return outPacket;
    }

    public static OutPacket hyperUpgradeDisplay(Equip equip, boolean downgradeable, long meso, long beforeMvp,
                                                long beforePc, int successChance, int oldSuccessChance,
                                                int destroyChance, int oldDestroyChance, boolean chanceTime) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.HyperUpgradeDisplay.getVal());
        outPacket.encodeByte(downgradeable);
        outPacket.encodeLong(meso);
        outPacket.encodeLong(beforeMvp); // beforeMvp
        outPacket.encodeLong(beforePc); // beforePc
        outPacket.encodeByte(beforeMvp != 0); // bMvp
        outPacket.encodeByte(beforePc != 0 && beforeMvp == 0); // mvp over pc
        outPacket.encodeInt(successChance);
        outPacket.encodeInt((int) ((1000D / (1000 - successChance)) * destroyChance));
        outPacket.encodeInt(oldSuccessChance); // old sucChance
        outPacket.encodeInt((int) ((1000D / (1000 - oldSuccessChance)) * oldDestroyChance));
        outPacket.encodeByte(chanceTime);
        TreeMap<EnchantStat, Integer> vals = equip.getHyperUpgradeStats();
        int mask = 0;
        for (EnchantStat es : vals.keySet()) {
            mask |= es.getVal();
        }
        outPacket.encodeInt(mask);
        vals.forEach((es, val) -> outPacket.encodeInt(val));

        return outPacket;
    }

    public static OutPacket miniGameDisplay(EquipmentEnchantType eeType) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(eeType.getVal());
        outPacket.encodeByte(0);
        outPacket.encodeInt(2000); // TODO nSeed

        return outPacket;
    }

    public static OutPacket showUpgradeResult(Equip oldEquip, Equip equip, boolean succeed, boolean boom, boolean canDegrade) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.ShowHyperUpgradeResult.getVal());
        outPacket.encodeInt(boom ? 2 : succeed ? 1 : canDegrade ? 0 : 3);
        outPacket.encodeByte(0);
        oldEquip.encode(outPacket);
        equip.encode(outPacket);

        return outPacket;
    }

    public static OutPacket showUnknownEnchantFailResult(byte msg) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.ShowUnknownFailResult.getVal());
        outPacket.encodeByte(msg);

        return outPacket;
    }

    public static OutPacket scrollUpgradeDisplay(boolean feverTime, List<ScrollUpgradeInfo> infos) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.ScrollUpgradeDisplay.getVal());
        outPacket.encodeByte(feverTime);

        outPacket.encodeByte(infos.size());
        for (ScrollUpgradeInfo sui : infos) {
            outPacket.encode(sui);
        }

        return outPacket;
    }

    public static OutPacket showScrollUpgradeResult(boolean feverAfter, int result, String desc, Equip prevEquip,
                                                    Equip newEquip) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.ShowScrollUpgradeResult.getVal());

        outPacket.encodeByte(feverAfter);
        outPacket.encodeInt(result);
        outPacket.encodeString(desc);
        outPacket.encode(prevEquip);
        outPacket.encode(newEquip);

        return outPacket;
    }

    public static OutPacket showTranmissionResult(Equip fromEq, Equip toEq) {
        OutPacket outPacket = new OutPacket(OutHeader.EQUIPMENT_ENCHANT);

        outPacket.encodeByte(EquipmentEnchantType.ShowTransmissionResult.getVal());
        fromEq.encode(outPacket);
        toEq.encode(outPacket);

        return outPacket;
    }

    public static OutPacket redCubeResult(Char chr, boolean upgrade, int cubeID, int ePos, Equip equip) {
        OutPacket outPacket = new OutPacket(OutHeader.RED_CUBE_RESULT);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(upgrade);
        outPacket.encodeInt(cubeID);
        outPacket.encodeInt(ePos);
        outPacket.encodeInt(chr.getCashInventory().getQuantity(cubeID) - 1); //Do -1 because we consume cube after this UI is shown.
        equip.encode(outPacket);

        return outPacket;
    }

    public static OutPacket bonusCubeResult(Char chr, boolean upgrade, int cubeID, int ePos, Equip equip) {
        OutPacket outPacket = new OutPacket(OutHeader.BONUS_CUBE_RESULT);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(upgrade);
        outPacket.encodeInt(cubeID);
        outPacket.encodeInt(ePos);
        outPacket.encodeInt(chr.getCashInventory().getQuantity(cubeID) - 1); //Do -1 because we consume cube after this UI is shown.
        equip.encode(outPacket);

        return outPacket;
    }

    public static OutPacket inGameCubeResult(Char chr, boolean upgrade, int cubeID, int ePos, Equip equip) {
        OutPacket outPacket = new OutPacket(OutHeader.IN_GAME_CUBE_RESULT);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(upgrade);
        outPacket.encodeInt(cubeID);
        outPacket.encodeInt(ePos);
        outPacket.encodeInt(chr.getConsumeInventory().getQuantity(cubeID) - 1); //Do -1 because we consume cube after this UI is shown.
        equip.encode(outPacket);

        return outPacket;
    }

    public static OutPacket sitResult(int chrId, int fieldSeatId) {
        OutPacket outPacket = new OutPacket(OutHeader.SIT_RESULT);

        outPacket.encodeInt(chrId);
        outPacket.encodeByte(!(fieldSeatId == -1));
        if (!(fieldSeatId == -1)) {
            outPacket.encodeShort(fieldSeatId);
        }

        return outPacket;
    }


    public static OutPacket questClear(int qrKey) {
        OutPacket outPacket = new OutPacket(OutHeader.QUEST_CLEAR);

        outPacket.encodeInt(qrKey);

        return outPacket;
    }

    public static OutPacket setQuestTime(List<Triple<Integer, FileTime, FileTime>> questTimes) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_QUEST_TIME);

        outPacket.encodeByte(questTimes.size());
        for (Triple<Integer, FileTime, FileTime> times : questTimes) {
            outPacket.encodeInt(times.getLeft());
            outPacket.encodeFT(times.getMiddle());
            outPacket.encodeFT(times.getRight());
        }

        return outPacket;
    }

    public static OutPacket addWreckage(Wreckage wreckage, int wreckageCount) {
        OutPacket outPacket = new OutPacket(OutHeader.ADD_WRECKAGE);

        outPacket.encodeInt(wreckage.getOwnerId());  // owner Id
        outPacket.encodePositionInt(wreckage.getPosition());
        outPacket.encodeInt(wreckage.getDuration());  // duration
        outPacket.encodeInt(wreckage.getObjectId());  //evanWreckage.nIDx
        outPacket.encodeInt(wreckage.getSkillId());  //nSkillID
        outPacket.encodeInt(wreckage.getType());  //nType

        outPacket.encodeInt(wreckageCount);  //Number on Skill Icon, # of Wreckages on map

        return outPacket;
    }

    public static OutPacket delWreckage(Char chr, List<Wreckage> wreckageList) {
        OutPacket outPacket = new OutPacket(OutHeader.DEL_WRECKAGE);

        outPacket.encodeInt(chr.getId()); // Owner Id
        outPacket.encodeInt(wreckageList.size()); //Count
        outPacket.encodeByte(true); //Unk Boolean
        outPacket.encodeByte(true); //Unk Boolean
        for (Wreckage wreckage : wreckageList) {
            outPacket.encodeInt(wreckage.getObjectId()); // Wreckage Id
        }

        return outPacket;
    }

    public static OutPacket whisper(WhisperType type, Char chr, String msg, boolean foundDest, Item item, String itemName) {
        OutPacket outPacket = new OutPacket(OutHeader.WHISPER);

        outPacket.encodeByte(type.getVal());
        switch (type) {
            case Find:
            case Find_2:
                outPacket.encodeString("");
                outPacket.encodeByte(false);
                outPacket.encodeInt(0);
                break;

            case SaveName:
            case SaveName_2:
                outPacket.encodeString(msg);
                outPacket.encodeByte(foundDest);
                break;

            case In:
                outPacket.encodeString(chr.getName());
                outPacket.encodeInt(chr.getId());
                outPacket.encodeByte(chr.getChannel() - 1); // channel
                outPacket.encodeByte(chr.getUser().getAccountType().isGmOrAdmin() && item == null); // gm
                outPacket.encodeString(msg);

                chr.encodeChatInfo(outPacket, msg);

                ChatModule.encodeLinkedMessage(outPacket, item, ChatModule.LinkedMessageType.Item);
                break;

            case Unk19:
                outPacket.encodeString(chr.getName());
                outPacket.encodeInt(chr.getId());
                outPacket.encodeByte(chr.getChannel() - 1); // channel
                outPacket.encodeString(msg);

                chr.encodeChatInfo(outPacket, msg);

                ChatModule.encodeLinkedMessage(outPacket, item, ChatModule.LinkedMessageType.Item);
                break;

            case Unk34:
                outPacket.encodeString("");
                outPacket.encodeByte(false);
                break;

            case Unk146:
                outPacket.encodeString("");
                outPacket.encodeByte(false);
                outPacket.encodeString("");
                break;
        }

        return outPacket;
    }

    public static OutPacket teleport(Position pos, Char chr) {
        return teleport(pos, chr, null);
    }

    public static OutPacket teleport(Position position, Char chr, Portal portal) {
        OutPacket outPacket = new OutPacket(OutHeader.TELEPORT);
        outPacket.encodeByte(false); // exclRequest
        outPacket.encodeByte(portal == null); // nUserCallingType

        if (portal == null) {
            outPacket.encodeInt(chr.getId());
            outPacket.encodePosition(position);
        } else {
            outPacket.encodeInt(portal.getId());
            outPacket.encodeByte(false);
        }

        return outPacket;
    }

    public static OutPacket fieldEffect(FieldEffect fieldEffect) {
        OutPacket outPacket = new OutPacket(OutHeader.FIELD_EFFECT);

        fieldEffect.encode(outPacket);

        return outPacket;
    }

    public static OutPacket removeBlowWeather() {
        return blowWeather(0, null);
    }

    public static OutPacket blowWeather(int itemID, String message) {
        return blowWeather(itemID, message, 5);
    }

    public static OutPacket blowWeather(int itemID, String message, int durationSec) {
        OutPacket outPacket = new OutPacket(OutHeader.BLOW_WEATHER);

        outPacket.encodeInt(itemID);
        if (itemID > 0) {
            outPacket.encodeString(message);
            outPacket.encodeInt(durationSec);

            var encodePackedAL = false;
            outPacket.encodeByte(encodePackedAL);
            if (encodePackedAL) {
                // encode packed avatar look
            }
        }
        return outPacket;
    }

    public static OutPacket trunkDlg(TrunkDlg trunkDlg) {
        OutPacket outPacket = new OutPacket(OutHeader.TRUNK_DLG);

        trunkDlg.encode(outPacket);

        return outPacket;
    }

    public static OutPacket openUI(UIType uiType) {
        return openUI(uiType.getVal());
    }

    public static OutPacket openUI(int uiID) {
        OutPacket outpacket = new OutPacket(OutHeader.OPEN_UI);

        outpacket.encodeInt(uiID);

        return outpacket;
    }

    public static OutPacket closeUI(UIType uiType) {
        return closeUI(uiType.getVal());
    }

    public static OutPacket closeUI(int uiID) {
        OutPacket outpacket = new OutPacket(OutHeader.CLOSE_UI);
        outpacket.encodeInt(uiID);
        return outpacket;
    }

    public static OutPacket socketCreateResult(boolean success) {
        OutPacket outPacket = new OutPacket(OutHeader.SOCKET_CREATE_RESULT);

        outPacket.encodeByte(success ? 2 : 3);

        return outPacket;
    }

    public static OutPacket changeMobZone(int mobID, int zoneId) {
        OutPacket outPacket = new OutPacket(OutHeader.CHANGE_MOB_ZONE);

        outPacket.encodeInt(mobID);
        outPacket.encodeInt(zoneId);

        return outPacket;
    }

    public static OutPacket createObstacle(ObstacleAtomCreateType oact, ObstacleInRowInfo oiri, ObstacleRadianInfo ori,
                                           Set<ObstacleAtomInfo> atomInfos) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_OBSTACLE);

        outPacket.encodeInt(0); // ? gets used in 1 function, which forwards it to another, which does nothing with it
        outPacket.encodeInt(atomInfos.size());
        outPacket.encodeByte(oact.getVal());
        if (oact == ObstacleAtomCreateType.IN_ROW) {
            oiri.encode(outPacket);
        } else if (oact == ObstacleAtomCreateType.RADIAL) {
            ori.encode(outPacket);
        }
        for (ObstacleAtomInfo atomInfo : atomInfos) {
            outPacket.encodeByte(true); // false -> no encode
            atomInfo.encode(outPacket);
            if (oact == ObstacleAtomCreateType.DIAGONAL) {
                atomInfo.getObstacleDiagonalInfo().encode(outPacket);
            }
        }

        return outPacket;
    }

    public static OutPacket enableDebuffObj(List<DebuffObject> debuffObjects){
        OutPacket outPacket = new OutPacket(OutHeader.DEBUFF_OBJ_ON);
        for(DebuffObject debuffObject : debuffObjects) {
            outPacket.encodeByte(debuffObject.isEnabled());
            outPacket.encodeInt(debuffObject.getId());//id, gets returned in the return packet
            outPacket.encodeInt(debuffObject.getDebuffObjectType().getVal()); //Type
            outPacket.encodeString(debuffObject.getName());
            outPacket.encodeString(debuffObject.getEffectPath()); //Effect.wz/DebuffObjEff/ string
            outPacket.encodeByte(0);//?
        }
        outPacket.encodeByte(0);//?
        return outPacket;
    }
    
    public static OutPacket setChaseEffect(Char chr, int mobObjectID, boolean enabled){
        OutPacket outPacket = new OutPacket(OutHeader.CHASE_EFFECT_SET);
        outPacket.encodeInt(chr.getId());
        outPacket.encodeShort(enabled == true ? 1 : 0);
        outPacket.encodeInt(mobObjectID);
        return outPacket;
    }

    public static OutPacket openDimensionalMirror() {
        OutPacket outPacket = new OutPacket(OutHeader.DIMENSIONAL_MIRROR);
        outPacket.encodeInt(DimensionalMirrorType.values().length);
        for (DimensionalMirrorType dmt : DimensionalMirrorType.values()) {
            outPacket.encodeString(""); //name
            outPacket.encodeString(dmt.getDesc());
            outPacket.encodeInt(dmt.getReqLv());
            outPacket.encodeInt(dmt.getPos());
            outPacket.encodeInt(dmt.getID());
            outPacket.encodeInt(dmt.getQuestID());
            outPacket.encodeInt(0);
            outPacket.encodeInt(0); // new 218
            outPacket.encodeString(""); // new 218
            outPacket.encodeByte(dmt.isParty());
            outPacket.encodeInt(dmt.getItems().size());
            for (int j = 0; j < dmt.getItems().size(); j++) {
                outPacket.encodeInt(dmt.getItems().get(j));
            }
        }
        return outPacket;
    }

    public static OutPacket runeStoneAppear(RuneStone runeStone) { //Spawn in RuneStone
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_STONE_APPEAR);

        outPacket.encodeInt(0); // object id ??
        outPacket.encodeInt(runeStone.getEventType().ordinal());
        outPacket.encodeInt(2); // new 202, != 2 = crash
        outPacket.encodeInt(runeStone.getRuneType().getVal()); // Rune Type

        outPacket.encodePositionInt(runeStone.getPosition()); // Position
        outPacket.encodeByte(runeStone.isFlip()); // flip

        return outPacket;
    }

    public static OutPacket completeRune(Char chr) { //RuneStone Disappears
        OutPacket outPacket = new OutPacket(OutHeader.COMPLETE_RUNE);

        outPacket.encodeInt(0);
        outPacket.encodeInt(chr.getId());

        return outPacket;
    }

    public static OutPacket runeStoneUseAck(int mapId, RuneStoneAckType type) {
        return runeStoneUseAck(mapId, type, 0, null, 0);
    }

    public static OutPacket runeStoneUseAck(int mapId, RuneStoneAckType type, int runestoneId, int[] arrows, int remainingTime) {
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_STONE_USE_ACK);

        outPacket.encodeInt(type.getVal());
        switch (type) {
            case CantUseAnotherRuneYet:
            case CantUseAnotherRuneYet2:
                outPacket.encodeInt(remainingTime); // RemainingTime MS
                break;
            case SecureShowArrows:
                outPacket.encodeByte(false);
                outPacket.encodeByte(false);
                outPacket.encodeByte(false);
                var secureOutPacket = new OutPacket();
                secureOutPacket.encodeInt(mapId);
                secureOutPacket.encodeInt(runestoneId);
                secureOutPacket.encodeInt(arrows[0]); // Arrow 0
                secureOutPacket.encodeInt(arrows[1]); // Arrow 1
                secureOutPacket.encodeInt(arrows[2]); // Arrow 2
                secureOutPacket.encodeInt(arrows[3]); // Arrow 3
                outPacket.encodeEncryptedBuffer(secureOutPacket.getData());
                break;
        }

        outPacket.encodeLong(0);

        return outPacket;
    }

    public static OutPacket runeStoneDisappear(int charID) { //RuneStone is Used
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_STONE_DISAPPEAR);

        outPacket.encodeInt(0); // Has to be 0
        outPacket.encodeInt(charID);
        outPacket.encodeInt(0); // new 188
        outPacket.encodeByte(false); // new 188
        outPacket.encodeByte(1); // new

        return outPacket;
    }

    public static OutPacket runeActSuccess(RuneType runeType, int time) {
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_ACT_SUCCESS);

        outPacket.encodeInt(runeType.getVal());
        outPacket.encodeInt(time);

        return outPacket;
    }

    public static OutPacket runeStoneSkillAck(RuneType runeType) {
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_STONE_SKILL_ACK);

        outPacket.encodeInt(runeType.getVal());

        return outPacket;
    }

    public static OutPacket runeStoneClearAndAllRegister() {
        OutPacket outPacket = new OutPacket(OutHeader.RUNE_STONE_CLEAR_AND_ALL_REGISTER);
        int count = 0;
        outPacket.encodeInt(count); // count
        outPacket.encodeInt(1); // new
        for (int i = 0; i < count; i++) {
            outPacket.encodeInt(0); // not sure, but whatever
        }

        return outPacket;
    }

    /**
     * Creates a Clock on a Field.
     *
     * @param clockPacket the clock to display
     * @return packet for the client
     */
    public static OutPacket clock(ClockPacket clockPacket) {
        OutPacket outPacket = new OutPacket(OutHeader.CLOCK);

        clockPacket.encode(outPacket);

        return outPacket;
    }

    /**
     * Creates a packet for changing the elite state of a field.
     *
     * @param eliteState             The new elite state
     * @param notShowPopup           whether or not the popup should show up (warning message for boss spawn, countdown for bonus)
     * @param bgm                    The new bgm if the state is ELITE_BOSS
     * @param propSpecialEliteEffect special elite effect
     * @param backUOL                back uol
     * @return packet for the client
     */
    public static OutPacket eliteState(EliteState eliteState, boolean notShowPopup, String bgm, String propSpecialEliteEffect,
                                       String backUOL, boolean notHappyTime) {

        OutPacket outPacket = new OutPacket(OutHeader.ELITE_STATE);

        outPacket.encodeInt(eliteState.getVal()); // elite state
        outPacket.encodeInt(notShowPopup ? 1 : 0); // ?
        outPacket.encodeInt(0);
        switch (eliteState) {
            case EliteBoss:
            case EliteBoss2:
                outPacket.encodeString(bgm);
                outPacket.encodeString("");
                outPacket.encodeString("");
                break;
            case BonusStage:
            case BonusStage2:
                outPacket.encodeByte(!notHappyTime);
                if (notHappyTime) {
                    outPacket.encodeString(propSpecialEliteEffect);
                    outPacket.encodeString(backUOL);
                    outPacket.encodeString("");
                    outPacket.encodeString("");
                    outPacket.encodeString("");
                    outPacket.encodeByte(eliteState == EliteState.EliteBoss);
                }
                break;
            case Unk:
                outPacket.encodeString(bgm);
                break;
        }
        outPacket.encodeArr(new byte[300]); // cbf to find out what's wrong atm

        return outPacket;
    }

    public static OutPacket setQuickMoveInfo(List<QuickMoveInfo> quickMoveInfos) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_QUICK_MOVE_INFO);

        outPacket.encodeByte(quickMoveInfos.size());
        quickMoveInfos.forEach(qmi -> qmi.encode(outPacket));

        return outPacket;
    }

    public static OutPacket groupMessage(GroupMessageType gmt, Char from, String msg) {

        OutPacket outPacket = new OutPacket(OutHeader.GROUP_MESSAGE.getValue());

        outPacket.encodeByte(gmt.ordinal());

        outPacket.encodeInt(from.getUserId());
        outPacket.encodeInt(from.getId());
        outPacket.encodeString(from.getName());
        outPacket.encodeString(msg);
        from.encodeChatInfo(outPacket, msg);


        return outPacket;
    }

    public static OutPacket itemLinkedGroupMessage(GroupMessageType gmt, Char from, String msg, Item item, String itemName) {
        OutPacket outPacket = new OutPacket(OutHeader.ITEM_LINKED_GROUP_MESSAGE.getValue());

        outPacket.encodeByte(gmt.ordinal());

        outPacket.encodeInt(from.getUserId());
        outPacket.encodeInt(from.getId());
        outPacket.encodeString(from.getName());
        outPacket.encodeString(msg);
        from.encodeChatInfo(outPacket, msg);

        ChatModule.encodeLinkedMessage(outPacket, item, ChatModule.LinkedMessageType.Item);

        return outPacket;
    }

    public static OutPacket createMirrorImage(Position position, int alpha, int red, int green, int blue, boolean left) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_MIRROR_IMAGE);

        outPacket.encodePositionInt(position);
        outPacket.encodeInt(alpha); // nAlpha   out of 1,000 (?)
        outPacket.encodeInt(red); // R  out of 100,000 (?)

        outPacket.encodeInt(green); // G  out of 100,000 (?)
        outPacket.encodeInt(blue); // B  out of 100,000 (?)
        outPacket.encodeInt(left ? 1 : 0); // bLeft

        return outPacket;
    }

    public static OutPacket setOneTimeAction(int charID, int action, int duration) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_ONE_TIME_ACTION);

        outPacket.encodeInt(charID);
        outPacket.encodeInt(action);
        outPacket.encodeInt(duration);

        return outPacket;
    }

    public static OutPacket makingSkillResult(int charID,
                                              int recipeCode,
                                              MakingSkillType result,
                                              MakingSkillType subResult,
                                              List<MakingSkillItem> makingSkillItems,
                                              MakingSkillRecipe.TargetElem target,
                                              int incSkillProficiency
    ) {
        OutPacket outPacket = new OutPacket(OutHeader.MAKING_SKILL_RESULT);

        outPacket.encodeInt(charID);

        outPacket.encodeInt(result.getVal());

        if (result == MakingSkillType.Extraction) {
            outPacket.encodeInt(recipeCode);
            outPacket.encodeInt(0);
            outPacket.encodeByte(subResult.isSuccess());

            if (subResult.isSuccess()) {
                outPacket.encodeInt(makingSkillItems.size());
                for (var msi : makingSkillItems) {
                    outPacket.encodeInt(msi.getItemId());
                    outPacket.encodeInt(msi.getIdk1());
                    outPacket.encodeInt(msi.getIdk2());
                    outPacket.encodeInt(msi.getIdk3());
                    outPacket.encodeInt(msi.getItemPos());
                }
            }
            outPacket.encodeInt(incSkillProficiency);
        } else {
            // success
            outPacket.encodeInt(recipeCode);
            outPacket.encodeInt(subResult.getVal()); // ?

            outPacket.encodeByte(subResult.isSuccess());
            if (subResult.isSuccess()) {
                outPacket.encodeInt(target.getItemID());
                outPacket.encodeInt(target.getCount());
            }
            outPacket.encodeInt(incSkillProficiency);
        }

        return outPacket;
    }

    public static OutPacket gatherResult(Char chr, boolean succeed) {
        OutPacket outPacket = new OutPacket(OutHeader.GATHER_RESULT);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(succeed);

        return outPacket;
    }

    public static OutPacket auctionResult(AuctionResult auctionResult) {
        OutPacket outPacket = new OutPacket(OutHeader.AUCTION_RESULT);

        auctionResult.encode(outPacket);

        return outPacket;
    }

    public static OutPacket registerExtraSkill(Char chr, int mainSkillId, List<Integer> extraSkillIds) {
        return registerExtraSkill(chr.getPosition(), mainSkillId, extraSkillIds, chr.isLeft());
    }

    public static OutPacket registerExtraSkill(Position position, int mainSkillId, List<Integer> extraSkillIds, boolean isLeft) {
        List<ExtraSkillInfo> extraSkillInfoList = extraSkillIds.stream().map(i -> new ExtraSkillInfo(i, position, isLeft, 0, 1)).collect(Collectors.toList());
        return registerExtraSkill(mainSkillId, extraSkillInfoList);
    }

    public static OutPacket registerExtraSkill(int mainSkillId, ExtraSkillInfo extraSkillInfo) {
        return registerExtraSkill(mainSkillId, Collections.singletonList(extraSkillInfo));
    }

    public static OutPacket registerExtraSkill(int mainSkillId, List<ExtraSkillInfo> extraSkillInfoList) {
        OutPacket outPacket = new OutPacket(OutHeader.REGISTER_EXTRA_SKILL);

        var left = -1;
        var right = 1;

        if (mainSkillId == Phantom.PHANTOMS_MARK || mainSkillId == Lara.LANDS_CONNECTION) {
            left = 1;
            right = 0;
        }

        outPacket.encodeInt(mainSkillId);
        outPacket.encodeShort(extraSkillInfoList.size());
        for (var extraSkill : extraSkillInfoList) {
            outPacket.encodeInt(extraSkill.extraSkillId);
            outPacket.encodeInt(extraSkill.extraSkillId);
            outPacket.encodePositionInt(extraSkill.position);
            outPacket.encodeShort(extraSkill.left ? left : right);
            outPacket.encodeInt(extraSkill.delay); // ms
            outPacket.encodeInt(extraSkill.unk);

            var loopSize = 0;
            outPacket.encodeInt(loopSize); // loop Size
            for (var i = 0; i < loopSize; i++) {
                outPacket.encodeInt(0);
            }

            outPacket.encodeInt(loopSize); // loop Size
            for (var i = 0; i < loopSize; i++) {
                outPacket.encodeInt(0);
            }
        }

        return outPacket;
    }

    public static OutPacket footholdAppear(AppearingFoothold afh) {
        return footholdAppear(afh.getFootholdName(), !afh.isHide(), afh.getPosition());
    }

    public static OutPacket footholdAppear(String footholdName, boolean show, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.FOOT_HOLD_APPEAR);

        int loopSize = 1;
        outPacket.encodeInt(loopSize);
        for (int i = 0; i < loopSize; i++) {
            outPacket.encodeString(footholdName);
            outPacket.encodeByte(0);
            outPacket.encodeInt(show ? 1 : 0);
            outPacket.encodePositionInt(position);
        }

        return outPacket;
    }

    public static OutPacket playSound(String dir) {
        OutPacket outPacket = new OutPacket(OutHeader.PLAY_SOUND);

        outPacket.encodeString(dir);

        return outPacket;
    }

    public static OutPacket updateTemporarySkillBar(int skillID) {
        OutPacket outPacket = new OutPacket(OutHeader.UPDATE_TEMPORARY_SKILL_BAR);

        if (skillID == 0) {
            outPacket.encodeInt(0);
        } else {
            // Unknown Packet Structure..
            // This is entirely from a sniff.
            // Can't find this packet anywhere in KMST idb nor v206 idb
            outPacket.encodeInt(13); // unknown, from sniff
            outPacket.encodeInt(13); // unknown, from sniff
            outPacket.encodeByte(0);
            outPacket.encodeByte(1); // unknown, from sniff
            outPacket.encodeInt(0); // unknown, from sniff

            outPacket.encodeInt(skillID);
            outPacket.encodeInt(1); // slv (?)

            outPacket.encodeArr(new byte[50]); // unknown, from sniff
        }

        return outPacket;
    }

    public static OutPacket adminResult(boolean hide) { // There are ton more different types. However, most we won't use
        OutPacket outPacket = new OutPacket(OutHeader.ADMIN_RESULT);

        outPacket.encodeInt(25); // nType  (25 is for Hide)

        // if (nType == 25) {
        outPacket.encodeByte(hide); // hide
        outPacket.encodeByte(false); // unk
        // }

        return outPacket;
    }

    public static OutPacket groupChairSitResult(PortableChair chair, int changeForChrId, boolean enter, boolean show) {
        return groupChairSitResult(chair, changeForChrId, enter, false, show);
    }

    public static OutPacket groupChairSitResult(PortableChair chair, int changeForChrId, boolean enter, boolean otherEnter, boolean show) {
        OutPacket outPacket = new OutPacket(OutHeader.GROUP_CHAIR_SIT_RESULT);

        chair.encodeGroupChair(outPacket, changeForChrId, enter, otherEnter, show);

        return outPacket;
    }

    public static OutPacket groupChairInvitationResult(GroupChairInvitationResultType type) {
        OutPacket outPacket = new OutPacket(OutHeader.GROUP_CHAIR_INVITATION_RESULT);

        outPacket.encodeInt(type.getVal());

        return outPacket;
    }

    /*

    CWKPQ - Makes the pillars move:

    menhir0 , 1
    menhir1 , 1
    menhir2 , 1
    menhir3 , 1
    ...

     */
    public static OutPacket setObjectState(String objName, int state) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_OBJECT_STATE);

        outPacket.encodeString(objName);
        outPacket.encodeInt(state);

        return outPacket;
    }

    public static OutPacket fieldSkill(FieldSkill fieldSkill) {
        OutPacket outPacket = new OutPacket(OutHeader.FIELD_SKILL);

        outPacket.encodeInt(fieldSkill.getSkillID().getId());
        outPacket.encodeInt(fieldSkill.getSlv());

        fieldSkill.encode(outPacket);

        return outPacket;
    }

    public static OutPacket momentAreaOffAll(boolean encodeAreaControl, List<String> areaControl) {
        OutPacket outPacket = new OutPacket(OutHeader.MOMENT_AREA_OFF_ALL);

        var list = new ArrayList<String>();
        var encodeUnk = false;
        outPacket.encodeByte(encodeUnk);
        if (encodeUnk) {
            outPacket.encodeInt(list.size());
            list.forEach(outPacket::encodeString);
        }

        encodeUnk = false;
        outPacket.encodeByte(encodeUnk);
        if (encodeUnk) {
            outPacket.encodeInt(list.size());
            list.forEach(outPacket::encodeString);
        }

        outPacket.encodeByte(encodeAreaControl);
        if (encodeAreaControl) {
            outPacket.encodeInt(areaControl.size());
            areaControl.forEach(outPacket::encodeString);
        }

        return outPacket;
    }
}
