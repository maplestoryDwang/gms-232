package net.swordie.ms.client.character.skills.info;

import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.Summon;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class AttackInfo {
    public InHeader inHeader;
    public byte fieldKey;
    public byte hits;
    public int mobCount;
    public int skillId;
    public int summonSpecialSkillId;
    public int slv;
    public int keyDown;
    public byte idk;
    public boolean left;
    public short attackAction;
    public byte attackActionType;
    public byte idk0;
    public byte attackSpeed;
    public byte reduceCount;
    public int psdTargetPlus;
    public int someId;
    public List<MobAttackInfo> mobAttackInfo = new ArrayList<>();
    public int y;
    public int x;
    public short forcedY;
    public short forcedX;
    public short rcDstRight;
    public short rectRight;
    public int option;
    public int[] mists;
    public short forcedYSh;
    public short forcedXSh;
    public byte force;
    public short delay;
    public short[] shortArr;
    public byte addAttackProc, addAttackProcRemote;
    public int grenadeId;
    public byte zeroTag;
    public int bySummonedID;
    public Position ptTarget = new Position();
    public int finalAttackLastSkillID;
    public byte finalAttackByte;
    public boolean ignorePCounter;
    public int spiritCoreEnhance;
    public Position ptAttackRefPoint = new Position();
    public Position chrPos = new Position();
    public Position pos = new Position();
    public byte fh;
    public boolean teleportLeft;
    public Position teleportPt = new Position();
    public short Vx;
    public List<Position> positions = new ArrayList<>();
    public Position grenadePos;
    public Rect rect;
    public int elemAttr;
    public int areaPAD;
    public int attackCount;
    public int wt;
    public int ar01Mad;
    public Position pos3;
    public Summon summon;
    public int updateTime;
    public int bulletID;
    public short mobMove;
    public boolean isJablin;
    public int bulletCount;
    public Position bodyRelMove;
    public Position keyDownRectMoveXY;
    public int tick;
    public int passiveSLV;
    public int passiveSkillID;
    public byte someMask;
    public byte buckShot;
    public int option3;
    public int buckShotSkillID;
    public int buckShotSlv;
    public byte showFixedDamage;
    public boolean dragon;
    public byte dragonAttackStart;
    public byte dragonAttackActionType;
    public byte dragonAttackProgess;
    public byte mastery;
    public OutHeader attackHeader;
    public int requestTime;
    public int summonID;
    public boolean boxAttack;
    public int shadowSpear1;
    public int shadowSpear2;
    public int idk1;
    public int idk2;
    public short idk3;
    public short idk4;
    public byte idk5;
    public boolean byUnreliableMemory;
    public int isMimickedBy;
    public int affectedAreaObjId;
    public int idk205;
    public int familiarId;
    public Familiar familiar;
    public int shootObjId;
    public SkillUseInfo sui;
    public boolean poolmakerEnabled;
    public int poolmakerCount;
    public long totalDamageDealt; // all damages over all mobs combined

    public boolean isReflectType() {
        return attackHeader != OutHeader.SUMMONED_ATTACK && attackHeader != OutHeader.FAMILIAR_INFO;
    }

    public boolean isNoCoolTimeHeaders() {
        return attackHeader == OutHeader.SUMMONED_ATTACK
                || inHeader == InHeader.USER_AREA_DOT_ATTACK
                || inHeader == InHeader.USER_BODY_ATTACK;
    }

    public List<Integer> getMobIds() {
        if (mobAttackInfo.size() == 0) {
            return new ArrayList<>();
        }

        return mobAttackInfo.stream().map(mai -> mai.mobId).collect(Collectors.toList());
    }
}
