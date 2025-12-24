package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.chair.PortableChair;
import net.swordie.ms.client.character.modules.CustomTitleModule;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.social.miniroom.gameroom.MiniGameRoom;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkillStat;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.FileTime;

import java.util.List;
import java.util.Map;

/**
 * Created on 3/18/2018.
 */
public class UserPool {

    public static OutPacket userEnterField(Char chr) {
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        AvatarLook al = chr.getAvatarData().getAvatarLook();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        OutPacket outPacket = new OutPacket(OutHeader.USER_ENTER_FIELD);

        outPacket.encodeFT(FileTime.currentTime());

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(chr.getId());

        // CUser::Init
        outPacket.encodeInt(chr.getLevel());
        outPacket.encodeString(chr.getName());
        outPacket.encodeString(""); // parent name, deprecated
        if (chr.getGuild() != null) {
            chr.getGuild().encodeForRemote(outPacket);
        } else {
            Guild.defaultEncodeForRemote(outPacket);
        }

        outPacket.encodeByte(cs.getGender());

        outPacket.encodeInt(cs.getPop());
        outPacket.encodeInt(10); // nFarmLevel
        outPacket.encodeInt(0); // nNameTagMark
        outPacket.encodeByte(0); // new 203
        outPacket.encodeInt(0); // new 203, next two are probably related

        synchronized (tsm.currentStats) {
            tsm.encodeForRemote(outPacket, tsm.getCurrentStats());
        }

        outPacket.encodeShort(chr.getJob());
        outPacket.encodeShort(cs.getSubJob());
        outPacket.encodeInt(chr.getTotalChuc());
        outPacket.encodeInt(chr.getTotalAf());
        outPacket.encodeInt(chr.getTotalStat(BaseStat.authForce));

        if (JobConstants.isZero(chr.getJob())) {
            if (chr.isZeroBeta()) { // if Beta, encode Beta's AL first
                chr.getAvatarData().getZeroAvatarLook().encode(outPacket);
                chr.getAvatarData().getAvatarLook().encode(outPacket);
            } else {
                chr.getAvatarData().getAvatarLook().encode(outPacket);
                chr.getAvatarData().getZeroAvatarLook().encode(outPacket);
            }
        } else {
            al.encode(outPacket);
        }

        outPacket.encodeInt(chr.getDriverID());
        outPacket.encodeInt(chr.getPassengerID()); // dwPassenserID
        // new 176: sub_191E2D0
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }
        // end sub_191E2D0
        outPacket.encodeInt(chr.getChocoCount());
        outPacket.encodeInt(chr.getActiveEffectItemID()); // nx effect
        outPacket.encodeInt(chr.getMonkeyEffectItemID());
        outPacket.encodeInt(chr.getNickItem()); // Title

        boolean bool = false;
        outPacket.encodeByte(bool); // new 188
        if (bool) {
            outPacket.encodeString(""); // new 188
        }

        if (chr.getNickItem() == ItemConstants.CUSTOM_TITLE_ITEM_ID) {
            // CUser::DecodeCustomTitle
            CustomTitleModule.encodeCustomTitle(chr, outPacket);
        }

        outPacket.encodeInt(chr.getDamageSkin() == null ? 0 : chr.getDamageSkin().getDamageSkinID());
        outPacket.encodeInt(chr.getPremiumDamageSkin() == null ? 0 : chr.getPremiumDamageSkin().getDamageSkinID());
        outPacket.encodeInt(0); // nUnitDamageSkin?
        outPacket.encodeString(""); // damage skin?
        outPacket.encodeString(""); // premium damage skin?

        outPacket.encodeInt(al.getDemonWingID());
        outPacket.encodeInt(al.getKaiserWingID());
        outPacket.encodeInt(al.getKaiserTailID());
        outPacket.encodeByte(0); // new 209
        outPacket.encodeInt(chr.getCompletedSetItemID());
        outPacket.encodeShort(chr.getFieldSeatID());

        PortableChair chair = chr.getChair();
        outPacket.encodeInt(chair != null ? chair.getItemID() : 0);
        outPacket.encodeInt(0); // new 232

        outPacket.encodePosition(chr.getPosition());
        outPacket.encodeByte(chr.getMoveAction());
        outPacket.encodeShort(chr.getFoothold());
        outPacket.encodeByte(false);

        outPacket.encodeByte(chair != null);
        if (chair != null) {
            chair.encode(outPacket);
        }

        for (Pet pet : chr.getPets()) {
            outPacket.encodeByte(1);
            outPacket.encodeInt(pet.getIdx());
            pet.encode(outPacket);
        }
        outPacket.encodeByte(0); // indicating that pets are no longer being encoded

        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            // virtual function :(
        }

        // start new 188
        List<Familiar> famList = chr.getFamiliarCodexManager().getActiveFamiliarsToSummon();
        size = famList.size();
        if (!chr.getFamiliarCodexManager().isFamiliarsSummoned()) {
            size = 0;
        }
        outPacket.encodeByte(size);
        for (int i = 0; i < size; i++) {
            Familiar f = famList.get(i);
            outPacket.encodeByte(true); // show
            f.encodeForRemote(outPacket);
        }

        // end new 188
        outPacket.encodeInt(chr.getTamingMobLevel());
        outPacket.encodeInt(chr.getTamingMobExp());
        outPacket.encodeInt(chr.getTamingMobFatigue());
        bool = false;
        outPacket.encodeByte(bool); // new 188
        if (bool) {
            // virtual function :(
        }

        var miniRoom = chr.getMiniRoom();
        if (!(miniRoom instanceof MiniGameRoom) || miniRoom.getRoomOwner() != chr) {
            outPacket.encodeByte(0);
        } else {
            var miniGameRoom = (MiniGameRoom) miniRoom;
            outPacket.encodeByte(miniGameRoom.getMiniRoomType().getVal());
            outPacket.encodeInt(chr.getId()); // MiniRoomSN
            outPacket.encodeString(miniGameRoom.getRoomName());
            outPacket.encodeByte(miniGameRoom.isPrivate()); // bPrivate
            outPacket.encodeByte(miniGameRoom.getMiniGameKind().ordinal()); // nGameKind
            outPacket.encodeByte(miniGameRoom.getChrs().size()); // nCurUsers
            outPacket.encodeByte(miniGameRoom.getMaxChars()); // nMaxUsers
            outPacket.encodeByte(miniGameRoom.isStarted()); // bGameOn

            outPacket.encodeString(miniGameRoom.getRoomOwner().getName());
            outPacket.encodeString("[Miniroom]"+miniGameRoom.getRoomName());

            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeByte(0);
            outPacket.encodeInt(0);
        }

        outPacket.encodeByte(chr.getADBoardRemoteMsg() != null);
        if (chr.getADBoardRemoteMsg() != null) {
            outPacket.encodeString(chr.getADBoardRemoteMsg());
        }

        outPacket.encodeByte(chr.isInCouple());
        if (chr.isInCouple()) {
            chr.getCouple().encodeForRemote(outPacket);
        }
        outPacket.encodeByte(chr.hasFriendshipItem());
        if (chr.hasFriendshipItem()) {
            chr.getFriendshipRingRecord().encode(outPacket);
        }
        outPacket.encodeByte(chr.isMarried());
        if (chr.isMarried()) {
            chr.getMarriageRecord().encodeForRemote(outPacket);
        }

        // CSecondAtom
        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
//                 SecondAtom sa = new SecondAtom();
//                 outPacket.encode(sa);
            }
        }

        outPacket.encodeByte(0); // some flag that shows uninteresting things for now

        outPacket.encodeInt(chr.getEvanDragonGlide());

        if (JobConstants.isKaiser(chr.getJob())) {
            outPacket.encodeInt(chr.getKaiserColourExtern());
            outPacket.encodeInt(chr.getKaiserColourInner());
            outPacket.encodeByte(chr.getKaiserColourPremium());
        }

        outPacket.encodeInt(chr.getMakingMeisterSkillEff());
        chr.getFarmUserInfo().encode(outPacket);
        for (int i = 0; i < 5; i++) {
            outPacket.encodeByte(-1); // activeEventNameTag
        }

        outPacket.encodeInt(chr.getCustomizeEffect());

        if (chr.getCustomizeEffect() > 0) {
            outPacket.encodeString(chr.getCustomizeEffectMsg());
        }

        outPacket.encodeByte(chr.getSoulEffect());

        if (tsm.hasStat(CharacterTemporaryStat.RideVehicle)) {
            int vehicleID = tsm.getTSBByTSIndex(TSIndex.RideVehicle).getNOption();
            if (vehicleID == 1932249) { // is_mix_vehicle
                size = 0;
                outPacket.encodeInt(size); // ???
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0);
                }
            }
        }

        // flash fire
        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            bool = false;
            outPacket.encodeByte(bool);
            if (bool) {
                outPacket.encodeInt(0); // slv
                outPacket.encodeInt(0); // ignored
                outPacket.encodeShort(0); // x
                outPacket.encodeShort(0); // y
            }
        }

        // CUser::DecodeTextEquipInfo?
        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
            outPacket.encodeString("");
        }
        // ~CUser::DecodeTextEquipInfo

        // sub
        chr.getFreezeHotEventInfo().encode(outPacket);
        // ~sub

        // CUser::DecodeEventBestFriendInfo
        outPacket.encodeInt(chr.getEventBestFriendAID());
        // ~CUser::DecodeEventBestFriendInfo

        outPacket.encodeByte(tsm.hasStat(CharacterTemporaryStat.KinesisPsychicEnergeShield));
        outPacket.encodeByte(chr.isBeastFormWingOn());
        outPacket.encodeByte(false); // Skill ON OFF Effect
        // end kmst

        outPacket.encodeInt(0);

        // new 218
        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }
        // ~

        size = 0;
        outPacket.encodeInt(size); // new 200, updated 218 (bool > int size)
        for (int i = 0; i < size; i++) {
            // sub
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0); // new 228
        }

        //new 227
        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
            outPacket.encodeByte(0);
        }

        outPacket.encodeInt(0);
        outPacket.encodeInt(0); // new 188
        outPacket.encodeString("");

        outPacket.encodeInt(0);
        bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
            }
        }

        int someID = 0;
        outPacket.encodeInt(someID);
        if (someID != 0) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeShort(0);
            outPacket.encodeShort(0);
        }

        outPacket.encodeInt(0);
        // start sub_16D99C0
        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
        }
        // end sub_16D99C0

        return outPacket;
    }

    public static OutPacket userLeaveField(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.USER_LEAVE_FIELD);

        outPacket.encodeInt(chr.getId());

        return outPacket;
    }

    public static OutPacket releasePsychicLock(Char chr, int id) {
        OutPacket outPacket = new OutPacket(OutHeader.RELEASE_PSYCHIC_LOCK);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(id);

        return outPacket;
    }

    public static OutPacket releasePsychicArea(Char chr, int localAreaKey) {
        OutPacket outPacket = new OutPacket(OutHeader.RELEASE_PSYCHIC_AREA);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(localAreaKey);
        outPacket.encodeInt(localAreaKey);

        return outPacket;
    }

    public static OutPacket releasePsychicLockMob(Char chr, List<Integer> ids) {
        OutPacket outPacket = new OutPacket(OutHeader.RELEASE_PSYCHIC_LOCK_MOB);

        outPacket.encodeInt(chr.getId());
        for (int i : ids) {
            outPacket.encodeByte(1);
            outPacket.encodeInt(i);
        }
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket recreatePathPsychicLock(Char chr, int skillID, int slv, int action, int actionSpeed, boolean left,
                                                    Map<Integer, Integer> skillIDMap, Map<Integer, Integer> lockMap) {
        OutPacket outPacket = new OutPacket(OutHeader.RECREATE_PATH_PSYCHIC_LOCK);

        outPacket.encodeInt(chr.getId());
        outPacket.encodeInt(skillID);
        outPacket.encodeShort(slv);
        outPacket.encodeInt(action);
        outPacket.encodeInt(actionSpeed);
        outPacket.encodeByte(left);

        outPacket.encodeInt(skillIDMap.size());
        for (Map.Entry<Integer, Integer> entry : skillIDMap.entrySet()) {
            outPacket.encodeInt(entry.getKey());
            outPacket.encodeInt(entry.getValue());
        }
        outPacket.encodeInt(lockMap.size());
        for (Map.Entry<Integer, Integer> entry : lockMap.entrySet()) {
            outPacket.encodeInt(entry.getKey());
        }

        return outPacket;
    }

    public static OutPacket teslaTriangle(int chrId, List<Summon> rockNshockList) {
        OutPacket outPacket = new OutPacket(OutHeader.TESLA_TRIANGLE);

        outPacket.encodeInt(chrId);
        for (Summon rockNshockSummon : rockNshockList) {
            outPacket.encodeInt(rockNshockSummon.getObjectId());
        }

        return outPacket;
    }

    public static OutPacket skillOnOffEffect(int chrId, boolean show) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_ON_OFF_EFFECT);

        outPacket.encodeInt(chrId);
        outPacket.encodeByte(show);

        return outPacket;
    }

    public static OutPacket skillOnOffEffect2(int chrId, int skillId, boolean show) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_ON_OFF_EFFECT_2);

        outPacket.encodeInt(chrId);
        outPacket.encodeByte(show);
        outPacket.encodeInt(skillId);

        return outPacket;
    }

    public static OutPacket addMesoChairCount(int chrId, long meso) {
        OutPacket outPacket = new OutPacket(OutHeader.ADD_MESO_CHAIR_COUNT);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(0); // unk
        outPacket.encodeLong(meso);
        outPacket.encodeLong(meso);

        return outPacket;
    }

    public static OutPacket tossedByMobSkill(int chrId, Mob mob, MobSkillInfo msi) {
        OutPacket outPacket = new OutPacket(OutHeader.TOSSED_BY_MOB_SKILL);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(mob.getObjectId());
        outPacket.encodeInt(msi.getSkillId());
        outPacket.encodeInt(msi.getLevel());
        outPacket.encodeInt(msi.getSkillStatIntValue(MobSkillStat.x));
        outPacket.encodeInt(msi.getSkillStatIntValue(MobSkillStat.x));

        return outPacket;
    }

    public static OutPacket rwZeroBunkerMobBind(boolean success, boolean isAlive, Mob mob) {
        OutPacket outPacket = new OutPacket(OutHeader.RW_ZERO_BUNKER_MOB_BIND);

        outPacket.encodeByte(success);
        outPacket.encodeByte(isAlive);
        outPacket.encodeInt(mob.getObjectId());
        outPacket.encodeInt(mob.getTemplateId());
        outPacket.encodePositionInt(mob.getPosition());

        return outPacket;
    }
}
