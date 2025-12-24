package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.pirate.Buccaneer;
import net.swordie.ms.client.jobs.adventurer.thief.Shadower;
import net.swordie.ms.client.jobs.nova.Cadena;
import net.swordie.ms.client.jobs.nova.Kain;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.util.Position;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 11-4-2019.
 */
public class UserSkillUseInfo {

    private static final Logger log = LogManager.getLogger();

    public SkillUseInfo skillUseInfo;

    public UserSkillUseInfo(SkillUseInfo skillUseInfo) {
        this.skillUseInfo = skillUseInfo;
    }

    public void decode(InPacket inPacket) {
        inPacket.decodeInt(); // unk
        boolean decode = inPacket.decodeByte() != 0;
        if (decode) {
            inPacket.decodeInt();
            int userSkillType = inPacket.decodeInt();
            while (userSkillType != -1) {

                // Convert to UserSkillUseType
                var type = UserSkillUseType.getByVal(userSkillType);
                var skillDisplayed = skillUseInfo.skillID > 0 ? skillUseInfo.skillID : skillUseInfo.skillID2;

                // Null Check
                if (type == null) {
                    log.error(String.format("Unhandled UserSkillUseType! SkillId = %d; UserSkillUseType = %d", skillDisplayed, userSkillType));
                }

                // Logging
                if (skillUseInfo.skillID > 0 || skillUseInfo.skillID2 > 0) {
                    log.debug(String.format("SkillId = %d; UserSkillType = %d", skillDisplayed, userSkillType));
                }


                if (userSkillType >= 1 && userSkillType <= 16 || userSkillType >= 19 && userSkillType <= 37) {
                    decode = inPacket.decodeByte() != 0;
                    if (decode) {
                        switch (type) {
                            case UserSkill:
                                skillUseInfo.skillID = inPacket.decodeInt(); // skillId
                                skillUseInfo.skillID2 = inPacket.decodeInt(); // skillId
                                skillUseInfo.slv = inPacket.decodeInt(); // slv
                                inPacket.decodeByte(); // 0
                                inPacket.decodeByte(); // 0

/*
                                int size = 3;
                                for (int i = 0; i < size; i++) {
                                    var unk = inPacket.decodeInt();
                                    if (unk == 1) {
                                        inPacket.decodeByte();
                                    }
                                }
*/

                                if (skillUseInfo.skillID == Cadena.CHAIN_ART_BEATDOWN_4 ||
                                        skillUseInfo.skillID == Cadena.CHAIN_ART_BEATDOWN_3 ||
                                        skillUseInfo.skillID == Cadena.CHAIN_ART_BEATDOWN_2 ||
                                        skillUseInfo.skillID == Cadena.CHAIN_ART_BEATDOWN_1) {
                                    inPacket.decodeInt();
                                    inPacket.decodeByte();
                                    inPacket.decodeByte();
                                    inPacket.decodeInt();
                                } else if (skillUseInfo.skillID == Kain.DRAGON_SCALE) {
                                    // no more info
                                } else if (skillUseInfo.skillID == Marksman.SURGE_BOLT) {
                                    // no more info
                                } else if (skillUseInfo.skillID == Buccaneer.HOWLING_FIST) {
                                    inPacket.decodeInt();
                                    inPacket.decodeByte();
                                    inPacket.decodeByte();
                                    inPacket.decodeInt();
                                } else {
                                    inPacket.decodeInt(); // 19
                                    inPacket.decodeInt(); // 1
                                    inPacket.decodeByte(); // 0

                                    if (skillUseInfo.skillID == Shadower.TRICKBLADE_FINISHER) {
                                        inPacket.decodePositionInt();
                                        inPacket.decodeInt();
                                        inPacket.decodeInt();
                                    } else {
                                        skillUseInfo.phantomRiftBreaksRemaining = inPacket.decodeInt();
                                    }
                                }
                                break;
                            case Unk2:
                                inPacket.decodeByte();
                                inPacket.decodeByte();
                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                skillUseInfo.isLeft = inPacket.decodeByte() != 0;
                                skillUseInfo.endingPosition = inPacket.decodePositionInt();
                                break;
                            case KeyDownInfo: // Keydown Skill
                                inPacket.decodeByte(); // unk
                                skillUseInfo.skillID2 = inPacket.decodeInt(); // skillId
                                break;
                            case AttackRectInfo: // Attack Rect
                                skillUseInfo.rect = inPacket.decodeIntRect();
                                skillUseInfo.position = inPacket.decodePositionInt();
                                skillUseInfo.isLeft = inPacket.decodeInt() == -1;
                                break;
                            case Unk5:
                                break;
                            case Unk6:
                                break;
                            case SummonLife: // Life Creation
                                skillUseInfo.targetPosition = inPacket.decodePositionInt(); // target Position
                                skillUseInfo.isLeft = inPacket.decodeByte() != 0;
                                var unk = inPacket.decodeByte();
                                var unk2 = inPacket.decodeByte();
                                var unk3 = inPacket.decodeByte();
                                var unk4 = inPacket.decodeByte();
                                break;
                            case RushSkillInfo: // Rush Skill
                                skillUseInfo.endingPosition = inPacket.decodePositionInt();
                                skillUseInfo.rushX = inPacket.decodeInt();
                                skillUseInfo.rushY = inPacket.decodeInt();
                                break;
                            case Unk9:
                                inPacket.decodeInt(); // 0
                                skillUseInfo.endingPosition = inPacket.decodePositionInt(); // ending Position
                                skillUseInfo.isLeft = inPacket.decodeInt() == -1; // isLeft   -1 = Left  |  1 = Right
                                skillUseInfo.lifeObjectId = inPacket.decodeInt();
                                break;
                            case Unk10:
                                break;
                            case Unk11:
                                break;
                            case Unk12:
                                break;
                            case Unk13:
                                break;
                            case Unk14:
                                break;
                            case Unk15:
                                var size = inPacket.decodeInt();
                                for (int i = 0; i < size; i++) {
                                    inPacket.decodeIntRect();
                                }
                                inPacket.decodeIntRect();
                                /*
                                  v2 = this;
                                  v6 = this;
                                  v7 = (v6[2] - v6[1]) >> 4;
                                  COutPacket::EncodeBuffer(&v7, 4);
                                  v3 = v2[2];
                                  for ( i = v2[1]; i != v3; i += 16 )
                                    COutPacket::EncodeBuffer(i, 16);
                                  COutPacket::EncodeBuffer(v6 + 4, 16);
                                 */
                                break;
                            case Unk19:
                                skillUseInfo.lifeObjectId = inPacket.decodeInt(); // mobId
                                skillUseInfo.unk = inPacket.decodeInt();
                                skillUseInfo.fieldId = inPacket.decodeInt(); // fieldId
                                break;
                            case Unk20:
                                size = inPacket.decodeInt();
                                for (int i = 0; i < size; i++) {
                                    inPacket.decodeInt();
                                }
                                break;
                            case Unk21:
                                break;
                            case Unk22:
                                skillUseInfo.startingPosition = inPacket.decodePositionInt(); // starting Position
                                skillUseInfo.endingPosition = inPacket.decodePositionInt(); // ending Position
                                skillUseInfo.position = inPacket.decodePositionInt(); // hit Position
                                skillUseInfo.unk = inPacket.decodeInt(); // unk
                                skillUseInfo.angle = inPacket.decodeInt(); // angle
                                break;
                            case Unk23:
                                size = inPacket.decodeInt();
                                for (int i = 0; i < size; i++) {
                                    int mobId = inPacket.decodeInt(); // MobObjId
                                    Position position = inPacket.decodePositionInt(); // PositionInt
                                    skillUseInfo.mobIds.add(mobId);
                                    skillUseInfo.positions.add(position);
                                }
                                break;
                            case Unk27:
                                inPacket.decodeInt();
                                break;
                            case PhotonRay: // Used by Photon Ray (Xenon 4 V)
                                size = inPacket.decodeInt();
                                Map<Integer, Integer> targetMap = new HashMap<>();
                                for (int i = 0; i < size; i++) {
                                    //              Mob Object Id     ,         Count
                                    targetMap.put(inPacket.decodeInt(), inPacket.decodeInt());
                                }
                                skillUseInfo.targetMap = targetMap;
                                break;
                            case DeathTrigger:
                                inPacket.decodeInt();

                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                skillUseInfo.position = inPacket.decodePositionInt();
                                inPacket.decodeInt();
                                inPacket.decodeInt();
                                inPacket.decodeByte();
                                inPacket.decodeByte();
                                inPacket.decodeByte();
                                break;
                            case MultiAttackInfo: // Chase Cut Activation || MultiAttackInfo
                                skillUseInfo.multiAttackInfoSequenceCounter = inPacket.decodeInt(); // sequence counter
                                inPacket.decodeInt();
                                break;
                        }
                    }
                }
                userSkillType = inPacket.decodeInt();
            }
        }
    }

    public enum UserSkillUseType {
        UserSkill(1),
        Unk2(2),
        KeyDownInfo(3),
        AttackRectInfo(4),
        Unk5(5),
        Unk6(6),
        SummonLife(7),
        RushSkillInfo(8),
        Unk9(9),
        Unk10(10),
        Unk11(11),
        Unk12(12),
        Unk13(13),
        Unk14(14),
        Unk15(15),
        Unk19(19),
        Unk20(20),
        Unk21(21),
        Unk22(22),
        Unk23(23),
        Unk27(27),
        PhotonRay(32),
        DeathTrigger(35),
        MultiAttackInfo(37),
        ;

        private int val;

        UserSkillUseType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }

        public static UserSkillUseType getByVal(int val) {
            return Arrays.stream(values()).filter(t -> t.getVal() == val).findFirst().orElse(null);
        }
    }
}
