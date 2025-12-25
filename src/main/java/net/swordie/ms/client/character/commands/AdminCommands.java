package net.swordie.ms.client.character.commands;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.ItemOption;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.ForceAtomInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.party.PartyResult;
import net.swordie.ms.client.rankings.RankingModule;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.IdkBossFieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.constants.JobConstants.JobEnum;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.RandomPortal;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.*;
import net.swordie.ms.loaders.containerclasses.SkillStringInfo;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.*;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions.*;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.orm.dao.AccountDao;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDateTime;
import java.util.*;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.enums.AccountType.*;
import static net.swordie.ms.enums.ChatType.*;
import static net.swordie.ms.enums.InventoryOperation.Add;

/**
 * Created on 12/22/2017.
 */
public class AdminCommands {
    static final Logger log = LogManager.getRootLogger();

    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    @Command(names = {"test"}, requiredType = Admin)
    public static class Test extends AdminCommand {

        public static void execute(Char chr, String[] args) {
        }
    }

    @Command(names = {"help"}, requiredType = Player)
    public static class Help extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            for (Class clazz : AdminCommands.class.getClasses()) {
                Command cmd = (Command) clazz.getAnnotation(Command.class);
                if (chr.getUser().getAccountType().ordinal() >= cmd.requiredType().ordinal()) {
                    StringBuilder str = new StringBuilder(String.format("[%s] ", cmd.requiredType().toString()));
                    for (String cmdName : cmd.names()) {
                        str.append(cmdName);
                        str.append(", ");
                    }
                    chr.chatMessage(Expedition, str.toString());
                }
            }
        }
    }

    @Command(names = {"vmatrix"}, requiredType = Admin)
    public static class VMatrixCommand extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.write(WvsContext.nodeOpenVmatrix(true));
        }
    }

    @Command(names = {"packet"}, requiredType = Admin)
    public static class TestPacket extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !packet <op> <data>");
                return;
            }
            short op = Short.parseShort(args[1]);

            OutPacket outPacket = new OutPacket(op);
            StringBuilder data = new StringBuilder();
            for (int j = 2; j < args.length; j++) {
                data.append(" ").append(args[j]);
            }
            outPacket.encodeArr(data.toString());
            outPacket.encodeArr(new byte[300]);

            chr.write(outPacket);
        }
    }

    @Command(names = {"packetlist"}, requiredType = Admin)
    public static class TestPacketList extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !packet <op> <data>");
                return;
            }
            short op = Short.parseShort(args[1]);
            for (int j = 0; j < 10; j++) {

                OutPacket outPacket = new OutPacket(op + j);
                StringBuilder data = new StringBuilder();
                for (int i = 2; i < args.length; i++) {
                    data.append(" ").append(args[i]);
                }
                outPacket.encodeArr(data.toString());
                outPacket.encodeArr(new byte[300]);
                chr.write(outPacket);
            }
        }
    }


    @Command(names = {"usects", "cts"}, requiredType = Tester)
    public static class CtsCom extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Option o = new Option();
            o.nOption = Integer.parseInt(args[2]);
            o.rOption = 4001005;
            o.tOption = 5;

            CharacterTemporaryStat cts = CharacterTemporaryStat.getByBitPos(Integer.parseInt(args[1]));
//            CharacterTemporaryStat cts = CharacterTemporaryStat.MagnetArea;
            if (cts == null) {
                chr.chatMessage("Could not find cts with bitpos " + args[1]);
                return;
            }
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.putCharacterStatValue(cts, o);
            tsm.sendSetStatPacket();
            System.out.println(String.format("CTS %s = %s", args[1], cts));
            chr.chatMessage(String.format("CTS %s = %s", args[1], cts));
        }
    }

    @Command(names = {"fifthjob", "V"}, requiredType = Tester)
    public static class V extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.getQuestManager().completeQuest(QuestConstants.FIFTH_JOB_QUEST);
        }
    }

    @Command(names = {"showinvinfo", "invinfo"}, requiredType = Tester)
    public static class ShowInvInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {

            chr.chatMessage(WorldName, "------------------------------------------------------------");
            for (InvType invType : InvType.values()) {
                var inv = chr.getInventoryByType(invType);
                chr.chatMessage("---");
                chr.chatMessage(WorldName, "%s (size = %d/%d)", invType.toString(), inv.getItems().size(), inv.getSlots());
                for (Item item : chr.getInventoryByType(invType).getItems()) {
                    item.setInvType(invType);
                    String name = StringData.getItemStringById(item.getItemId());
                    chr.chatMessage(WorldName, String.format("%s, %d, %d, %d, %s", name, item.getItemId(), item.getId(),
                            item.getBagIndex(), item.getInvType().toString()));
                }
            }
        }
    }

    @Command(names = {"testcts"}, requiredType = Admin)
    public static class TestCTS extends AdminCommand {

        public static void execute(Char chr, String[] args) {

//            WildHunterInfo wi = new WildHunterInfo();
//            wi.setIdx((byte) 1);
//            wi.setRidingType((byte) 1);
//            chr.write(WvsContext.wildHunterInfo(wi));
//            new TemporaryStatManager(null).encodeForLocal(null);
            CharacterTemporaryStat cts = Arrays.stream(CharacterTemporaryStat.values()).filter(ctsa -> ctsa.getVal() == Integer.parseInt(args[1]))
                    .findFirst().orElse(null);
            if (cts == null) {
                chr.chatMessage("Could not find a cts with value " + args[1]);
            }
//            CharacterTemporaryStat cts2 = CharacterTemporaryStat.Speed;
//
            OutPacket outPacket = new OutPacket(OutHeader.TEMPORARY_STAT_SET);

//            tsm.encodeForLocal(outPacket);
            // Start encodeForLocal
            int[] mask = new int[CharacterTemporaryStat.length];
            mask[cts.getPos()] |= cts.getVal();
            for (int i = 0; i < mask.length; i++) {
                outPacket.encodeInt(mask[i]);
            }
            log.debug("[Out]\t| " + outPacket);

            outPacket.encodeShort(1); // n                            //Short / Int
            outPacket.encodeInt(Kaiser.FINAL_TRANCE); // r
            outPacket.encodeInt(30000); // t

            //outPacket.encodeInt(0);

            short size = 0;
            outPacket.encodeShort(0);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0); // nKey
                outPacket.encodeByte(0); // bEnable
            }
            outPacket.encodeByte(0); // defenseAtt
            outPacket.encodeByte(0); // defenseState
            outPacket.encodeByte(0); // pvpDamage
            outPacket.encodeInt(0); // viperCharge
            // Start TSTS encode
//            outPacket.encodeArr(new byte[Integer.parseInt(args[2])]);
//            outPacket.encodeInt(1);
//            outPacket.encodeInt(80001001);
//            outPacket.encodeByte(1);
//            outPacket.encodeByte(0);
//            outPacket.encodeArr(new byte[Integer.parseInt(args[1])]);
//            outPacket.encodeShort(1);
            // End TSTS encode
            // End  encodeForLocal
            outPacket.encodeInt(0); // indie?
            outPacket.encodeShort(0); // invalid value => "Failed to use the skill for an unknown reason"
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);
            outPacket.encodeByte(0); // movement enhancing
//            outPacket.encodeArr(new byte[Integer.parseInt(args[1])]);
            chr.write(outPacket);


        }
    }

    @Command(names = {"checkid", "getid", "charid", "id"}, requiredType = Tester)
    public static class CheckID extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.chatMessage(SpeakerChannel, "your charID = " + chr.getId() + " \r\nYour userID = " + chr.getUserId());
        }
    }

    @Command(names = {"testaa", "aa"}, requiredType = Tester)
    public static class TestAffectedArea extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 4) {
                chr.chatMessage("Usage: !aa <skillid> <slv> <delay>");
                return;
            }
            int skillId = Integer.parseInt(args[1]);
            int slv = Integer.parseInt(args[2]);
            int delay = Integer.parseInt(args[3]);
            AffectedArea aa = new AffectedArea(0);
            aa.setSkillID(skillId);
            aa.setSlv(slv);
            aa.setRect(chr.getPosition().getRectAround(new Rect(-70, -170, 70, 10)));
            aa.setDuration(10);
            aa.setFh(chr.getFoothold());
            aa.setDelay((short) delay);
            chr.getField().spawnLife(aa, null);
        }
    }

    @Command(names = {"testmobaa", "mobaa"}, requiredType = Tester)
    public static class TestMobAffectedArea extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 4) {
                chr.chatMessage("Usage: !aa <skillid> <slv> <delay>");
                return;
            }
            int skillId = Integer.parseInt(args[1]);
            int slv = Integer.parseInt(args[2]);
            int delay = Integer.parseInt(args[3]);
            AffectedArea aa = new AffectedArea(0);
            aa.setAaType((byte) 1);
            aa.setSkillID(skillId);
            aa.setSlv(slv);
            aa.setRect(chr.getPosition().getRectAround(new Rect(-70, -170, 70, 10)));
            aa.setDuration(10);
            aa.setFh(chr.getFoothold());
            aa.setDelay((short) delay);
            chr.getField().spawnLife(aa, null);
        }
    }

    @Command(names = {"getphantomstolenskills"}, requiredType = Tester)
    public static class GetPhantomStolenSkills extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.getStolenSkills().stream().sorted(Comparator.comparing(StolenSkill::getPosition))
                    .forEach(ss ->
                            chr.chatMessage(GroupFriend, "[StolenSkills]  Skill ID: " + ss.getSkillId() + " on Position: " + ss.getPosition() + " with Current level: " + ss.getCurrentlv()));
        }
    }

    @Command(names = {"stealskilllist"}, requiredType = Tester)
    public static class StealSkillList extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Set<Skill> skillSet = new HashSet<>();

            //Warriors
            int[] skillIds = new int[]{
                    //Hero
                    1101006, //Rage
                    1101011, //Brandish
                    1101012, //Combo Fury
                    1101013, //Combo Attack

                    1111014, //Shout
                    1111012, //Rush
                    1111010, //Intrepid Slash
                    1111008, //Shout

                    1121008, //Raging Blow
                    1121016, //Magic Crash(Hero)

                    1121054, //Cry Valhalla

                    //Paladin
                    1201011, //Flame Charge
                    1201012, //Blizzard Charge
                    1201013, //Close Combat

                    1211013, //Threaten
                    1211014, //Parashock Guard
                    1211012, //Rush
                    1211011, //Combat order
                    1211010, //HP Recovery
                    1211008, //Lightning Charge

                    1221016, //Guardian
                    1221014, //Magic Crash(Paladin)
                    1221011, //Heaven's Hammer
                    1221009, //Blast

                    1221054, //Sacrosanctity

                    //Dark Knight
                    1301007, //Hyper body
                    1301006, //Iron will
                    1301012, //Spear Sweep
                    1301013, //Evil Eye

                    1311015, //Cross Surge
                    1311011, //La Mancha Spear,
                    1311012, //Rush

                    1321012, //Dark Impale
                    1321013, //Gungnir's Descent
                    1321014, //Magic Crash(Dark Knight)

                    1321054, //Dark Thirst


                    2001002, //Magic Guard
                    //Mage FP
                    2101010, //Ignite
                    2101005, //Poison breath
                    2101004, //Flame Orb
                    2101001, //Meditation(FP)

                    2111002, //Explosion
                    2111003, //Poison mist

                    2121011, //Flame Haze
                    2121007, //Meteor Shower
                    2121006, //Paralyze

                    2121054, //Inferno Aura

                    //MageIL
                    2201008, //Cold Beam
                    2201005, //Thunder Bolt
                    2201001, //Meditation(IL)

                    2211010, //Glacier Chain

                    2221007, //Blizzard
                    2221012, //Frozen Orb
                    2221006, //Chain Lightning

                    2221054, //Absolute Zero Aura

                    //Bishop
                    2301004, //Bless
                    2301005, //Holy Arrow
                    2301002, //Heal

                    2311001, //Dispel
                    2311003, //Holy Symbol
                    2311004, //Shining Ray
                    2311011, //Holy Fountain
                    2311009, //Holy Magic Shell

                    2321008, //Genesis
                    2321007, //Angel Ray
                    2321006, //Resurrection
                    2321005, //Adv Blessing

                    2321054, //Righteously Indignant


                    //Bowmaster
                    3101008, //Covering Fire
                    3101005, //Arrowbomb

                    3111011, //Reckless Hunt: Bow
                    3111010, //Hookshot
                    3111003, //Flame Surge
                    3111013, //Arrow Blaster

                    3121004, //Hurricane
                    3121015, //Arrow Stream
                    3121002, //Sharp Eyes
                    3121014, //Blinding Shot

                    3121054, //Concentration

                    //Marksman
                    3201008, //Net Toss

                    3211008, //Dragon Breath
                    3211009, //Explosive Bolt
                    3211010, //Hookshot
                    3211011, //Pain Killer
                    3211012, //Reckless Hunt: XBow

                    3221007, //Snipe
                    3221006, //Illusion Step
                    3221002, //Sharp Eyes
                    3221001, //Piercing Arrow

                    3221054, //BullsEye Shot


                    4001003, //Dark Sight
                    4001005, //Haste
                    //Night Lord
                    4101011, //Sin Mark
                    4101010, //Gust Charm
                    4101008, //Shuriken Burst

                    4111013, //Shade Splitter
                    4111015, //Shade Splitter
                    4111010, //Triple Throw
                    4111003, //Shadow Web

                    4121017, //Showdown
                    4121016, //Sudden Raid (NL)
                    4121015, //Frailty Curse
                    4121013, //Quad Star

                    4121054, //Bleed Dart

                    //Shadower
                    4201012, //Svg Blow
                    4201011, //Meso Guard
                    4201004, //Steal

                    4211011, //Midnight Carnival
                    4211006, //Meso Explosion
                    4211002, //Phase Dash

                    4221014, //Assassinate
                    4221010, //Sudden Raid(Shad)
                    4221007, //Bstep
                    4221006, //Smoke screen

                    4221054, //Flip of the Coin

                    //Dual Blade
                    4301003, //Self Haste

                    4311003, //Slash Storm
                    4311002, //Fatal Blow

                    4321006, //Flying Assaulter
                    4321004, //Upper Stab
                    4321002, //FlashBang

                    4331011, //Blade Ascension
                    4331006, //Chains of Hell

                    4341011, //Sudden Raid (DB)
                    4341009, //Phantom Blow
                    4341004, //Blade Fury
                    4341002, //Final Cut

                    4341054, //Blade Clone


                    5001005, //Dash
                    //Bucc
                    5101004, //Corkscrew Blow

                    5111007, //Roll of the Dice
                    5111006, //Shock wave
                    5111009, //Spiral Assault
                    5111015, //Static Thumper
                    5111012, //Static Thumper

                    5121013, //Nautilus Strike
                    5121010, //Time Leap
                    5121009, //Speed Infusion
                    5121020, //octopunch
                    5121015, //Crossbones

                    5121054, //Stimulating Conversation

                    //Corsair
                    5201012, //Scurvy Summons
                    5201011, //Wings
                    5201006, //Recoil Shot
                    5201001, //Rapid blast

                    5211007, //Roll of the Dice
                    5211011, //All Aboard
                    5211009, //Cross cut Blast
                    5211010, //Blackboot bill
                    5211014, //Octo Cannon

                    5221018, //Jolly Roger
                    5221015, //Parrotargetting
                    5221016, //Brain scrambler
                    5221013, //Nautilus Strike
                    5221017, //Eigh-legs Easton
                    5221022, //Broadside

                    5221054, //Whaler's potion

                    //Cannon Master
                    5011001, //Cannon Strike

                    5301003, //Monkey Magic
                    5301001, //Barrel Bomb
                    5301000, //Scatter Shot

                    5311004, //Barrel Roulette
                    5311003, //Cannon Jump
                    5311005, //Luck of the Die
                    5311010, //Monkey Fury
                    5311002, //Monkey Wave
                    5311000, //Cannon Spike

                    5321012, //Cannon Barrage
                    5321010, //Pirate Spirit
                    5321004, //Monkey Militia
                    5321003, //Anchor Aweigh
                    5321001, //Nautilus Strike
                    5321000, //Cannon Bazooka

                    5321054, //BuckShot
            };

            for (int skillId : skillIds) {
                Skill skill = SkillData.getSkillDeepCopyById(skillId);
                if (skill == null) {
                    continue;
                }
                skillSet.add(skill);
            }

            chr.write(UserLocal.resultStealSkillList(skillSet, 4, 1, 2412));
        }
    }

    @Command(names = {"np", "nearestportal"}, requiredType = Tester)
    public static class NP extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            Rect rect = new Rect(
                    new Position(
                            chr.getPosition().deepCopy().getX() - 30,
                            chr.getPosition().deepCopy().getY() - 30),
                    new Position(
                            chr.getPosition().deepCopy().getX() + 30,
                            chr.getPosition().deepCopy().getY() + 30)
            );
            chr.chatMessage(Normal, "~~~~~~~~~~");
            chr.chatMessage(SpeakerChannel, "Current Map: " + NumberFormat.getNumberInstance(Locale.US).format(chr.getFieldID()));
            chr.chatMessage(SpeakerChannel, "Current ReturnMap: " + NumberFormat.getNumberInstance(Locale.US).format(chr.getField().getInfo().getReturnMap()));
            chr.chatMessage(SpeakerChannel, "Fieldscript: " + chr.getField().getInfo().getFieldScript());
            chr.chatMessage(SpeakerChannel, "User enter: " + chr.getField().getInfo().getOnUserEnter());
            chr.chatMessage(SpeakerChannel, "User first enter: " + chr.getField().getInfo().getOnFirstUserEnter());
            chr.chatMessage(SpeakerChannel, "");
            for (Portal portal : chr.getField().getClosestPortal(rect)) {
                chr.chatMessage(SpeakerChannel, "Portal Name: " + portal.getName());
                chr.chatMessage(SpeakerChannel, "Portal ID: " + NumberFormat.getNumberInstance(Locale.US).format(portal.getId()));
                chr.chatMessage(SpeakerChannel, "Portal target map: " + NumberFormat.getNumberInstance(Locale.US).format(portal.getTargetMapId()));
                chr.chatMessage(SpeakerChannel, "Portal script: " + portal.getScript());
                chr.chatMessage(SpeakerChannel, ".");
            }
            chr.chatMessage(Normal, "~~~~~~~~~~");
        }
    }

    @Command(names = {"stats"}, requiredType = Tester)
    public static class Stats extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int strength = chr.getStat(Stat.str);
            int dexterity = chr.getStat(Stat.dex);
            int intellect = chr.getStat(Stat.inte);
            int luck = chr.getStat(Stat.luk);
            int hp = chr.getStat(Stat.hp);
            int mhp = chr.getStat(Stat.mhp);
            int mp = chr.getStat(Stat.mp);
            int mmp = chr.getStat(Stat.mmp);
            double hpratio = (((double) hp) / mhp) * 100;
            double mpratio = (((double) mp) / mmp) * 100;
            DecimalFormat formatNumbers = new DecimalFormat("##.00");
            NumberFormat addDeci = NumberFormat.getNumberInstance(Locale.US);
            chr.chatMessage(Notice2, "STR: " + addDeci.format(strength) + "  DEX: " + addDeci.format(dexterity) + "  INT: " + addDeci.format(intellect) + "  LUK: " + addDeci.format(luck));
            chr.chatMessage(Notice2, "HP: " + addDeci.format(hp) + " / " + addDeci.format(mhp) + " (" + formatNumbers.format(hpratio) + "%)   MP: " + addDeci.format(mp) + " / " + addDeci.format(mmp) + " (" + formatNumbers.format(mpratio) + "%)");
        }
    }

    @Command(names = {"spawn"}, requiredType = Tester)
    public static class Spawn extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !spawn <id> (<amount> <hp>).");
                return;
            }
            int id = Integer.parseInt(args[1]);
            int count = 1;
            if (args.length > 2) {
                count = Integer.parseInt(args[2]);
                if (count > 50) {
                    count = 50;
                    chr.chatMessage("You put the amount of mobs to spawn above 50, capping it to 50.");
                }
            }
            long hp = 0;
            if (args.length > 3) {
                hp = Long.parseLong(args[3]);
            }
            for (int i = 0; i < count; i++) {
                Mob mob = MobData.getMobDeepCopyById(id);
                if (mob == null) {
                    chr.chatMessage("Could not find a mob with that ID.");
                    return;
                }
                Field field = chr.getField();
                Position pos = chr.getPosition();
                Foothold fh = field.getInfo().getFootholdById(chr.getFoothold());
                mob.setCurFoodhold(fh);
                mob.setHomeFoothold(fh);
                mob.setPosition(pos.deepCopy());
                mob.setPrevPos(pos.deepCopy());
                mob.setPosition(pos.deepCopy());
                if (hp > 0) {
                    mob.setMaxHp(hp);
                    mob.setHp(hp);
                }
                mob.setNotRespawnable(true);
                if (mob.getField() == null) {
                    mob.setField(field);
                }
                field.spawnLife(mob, null);
            }
        }
    }

    @Command(names = {"npc", "spawnnpc"}, requiredType = GameMaster)
    public static class NPC extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int id = Integer.parseInt(args[1]);
            Npc npc = NpcData.getNpcDeepCopyById(id);
            if (npc == null) {
                chr.chatMessage("Could not find an npc with that ID.");
                return;
            }
            Field field = chr.getField();
            Position pos = chr.getPosition();
            npc.setPosition(pos.deepCopy());
            npc.setCy(chr.getPosition().getY());
            npc.setRx0(chr.getPosition().getX() + 50);
            npc.setRx1(chr.getPosition().getX() - 50);
            npc.setFh(chr.getFoothold());
            npc.setNotRespawnable(true);
            if (npc.getField() == null) {
                npc.setField(field);
            }
            field.spawnLife(npc, null);
            log.debug("npc has id " + npc.getObjectId());
        }
    }

    @Command(names = {"testdrop", "droptest"}, requiredType = Tester)
    public static class TestDrop extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int id = Integer.parseInt(args[1]);
            int count = 1;
            if (args.length > 2) {
                count = Integer.parseInt(args[2]);
            }
            for (int i = 0; i < count; i++) {
                Mob mob = MobData.getMobDeepCopyById(id);
                if (mob == null) {
                    chr.chatMessage("Could not find a mob with that ID.");
                    return;
                }
                Field field = chr.getField();
                Position pos = chr.getPosition();
                mob.setPosition(pos.deepCopy());
                mob.setPrevPos(pos.deepCopy());
                mob.setPosition(pos.deepCopy());
                mob.getForcedMobStat().setMaxMP(3);
                mob.setMaxHp(3);
                mob.setHp(3);
                mob.setNotRespawnable(true);
                if (mob.getField() == null) {
                    mob.setField(field);
                }
                mob.addDamage(chr, 1); // for drop/meso%
                mob.dropDrops(true);
            }
        }
    }

    @Command(names = {"proitem"}, requiredType = Tester)
    public static class ProItem extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 5) {
                chr.chatMessage(Notice2, "Needs more args! <id> <Stat> <Attack> <Flame stats>");
                return;
            }
            int id = Integer.parseInt(args[1]);
            int stat = Integer.parseInt(args[2]);
            int atk = Integer.parseInt(args[3]);
            int flames = Integer.parseInt(args[4]);
            Equip equip = ItemData.getEquipDeepCopy(id, false, chr.getJob());
            equip.setBaseStat(EquipBaseStat.iStr, stat);
            equip.setBaseStat(EquipBaseStat.iDex, stat);
            equip.setBaseStat(EquipBaseStat.iInt, stat);
            equip.setBaseStat(EquipBaseStat.iLuk, stat);
            equip.setBaseStat(EquipBaseStat.iMaxHP, stat);
            equip.setBaseStat(EquipBaseStat.iMaxMP, stat);
            equip.setBaseStat(EquipBaseStat.iDEF, stat);
            equip.setBaseStat(EquipBaseStat.iPAD, atk);
            equip.setBaseStat(EquipBaseStat.iMAD, atk);
            equip.setBaseStat(EquipBaseStat.bdr, flames);
            equip.setBaseStat(EquipBaseStat.imdr, flames);
            equip.setBaseStat(EquipBaseStat.damR, flames);
            equip.setBaseStat(EquipBaseStat.statR, flames);

            chr.addItemToInventory(equip);
            chr.write(WvsContext.inventoryOperation(true, false,
                    Add, (short) equip.getBagIndex(), (byte) 1,
                    0, equip));

        }
    }

    @Command(names = {"setpotential", "setpot"}, requiredType = Tester)
    public static class SetPotential extends AdminCommand {

        public static void execute(Char chr, String[] args) {

            if (args.length < 5) {
                chr.chatMessage("Usage: !setpot <inv position> <id 1st line> <id 2nd line> <id 3rd line>");
                return;
            }
            int invPosition = Integer.parseInt(args[1]);
            Equip equip = (Equip) chr.getInventoryByType(InvType.EQUIP).getItemBySlot(invPosition);
            if (equip == null) {
                chr.chatMessage("There is no equip on this position.");
                return;
            }
            equip.setOptionBase(0, Integer.parseInt(args[2]));
            equip.setOptionBase(1, Integer.parseInt(args[3]));
            equip.setOptionBase(2, Integer.parseInt(args[4]));
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"setbonuspotential", "setbpotential", "setbpot"}, requiredType = Tester)
    public static class SetBonusPotential extends AdminCommand {

        public static void execute(Char chr, String[] args) {

            if (args.length < 5) {
                chr.chatMessage("Usage: !setbpot <inv position> <id 1st line> <id 2nd line> <id 3rd line>");
                return;
            }
            int invPosition = Integer.parseInt(args[1]);
            Equip equip = (Equip) chr.getInventoryByType(InvType.EQUIP).getItemBySlot(invPosition);
            if (equip == null) {
                chr.chatMessage("There is no equip on this position.");
                return;
            }
            equip.setOptionBonus(0, Integer.parseInt(args[2]));
            equip.setOptionBonus(1, Integer.parseInt(args[3]));
            equip.setOptionBonus(2, Integer.parseInt(args[4]));
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"setflames", "flames"}, requiredType = Tester)
    public static class SetFlames extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 7) {
                chr.chatMessage("Usage: !flames <inv position> <stats> <att> <as%> <td%> <bd%>");
                return;
            }
            int invPosition = Integer.parseInt(args[1]);
            Equip equip = (Equip) chr.getInventoryByType(InvType.EQUIP).getItemBySlot(invPosition);
            if (equip == null) {
                chr.chatMessage("There is no equip on this position.");
                return;
            }
            int stat = Integer.parseInt(args[2]);
            int att = Integer.parseInt(args[3]);
            int as = Integer.parseInt(args[4]);
            int td = Integer.parseInt(args[5]);
            int bd = Integer.parseInt(args[6]);

            equip.setfSTR(stat);
            equip.setfDEX(stat);
            equip.setfINT(stat);
            equip.setfLUK(stat);
            equip.setfHP(stat);
            equip.setfMP(stat);
            equip.setfDEF(stat);
            equip.setfSpeed(stat);
            equip.setfJump(stat);

            equip.setfATT(att);
            equip.setfMATT(att);

            equip.setfAllStat(as);
            equip.setfDamage(td);
            equip.setfBoss(bd);
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"setflame", "flame"}, requiredType = Tester)
    public static class setFlame extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 4) {
                chr.chatMessage("Usage: !flame <inv position> <flame type> <value>");
                chr.chatMessage("Example: !flame 1 str 40");
                return;
            }
            int invPosition = Integer.parseInt(args[1]);
            Equip equip = (Equip) chr.getInventoryByType(InvType.EQUIP).getItemBySlot(invPosition);
            if (equip == null) {
                chr.chatMessage("There is no equip on this position.");
                return;
            }
            String flame = args[2].toLowerCase();
            short value = Short.parseShort(args[3]);
            switch (flame) {
                case "str":
                    equip.setfSTR(value);
                    break;
                case "dex":
                    equip.setfDEX(value);
                    break;
                case "int":
                    equip.setfINT(value);
                    break;
                case "luk":
                    equip.setfLUK(value);
                    break;
                case "att":
                case "atk":
                    equip.setfATT(value);
                    break;
                case "matt":
                case "matk":
                    equip.setfMATT(value);
                    break;
                case "def":
                    equip.setfDEF(value);
                    break;
                case "hp":
                    equip.setfHP(value);
                    break;
                case "mp":
                    equip.setfMP(value);
                    break;
                case "speed":
                    equip.setfSpeed(value);
                    break;
                case "jump":
                    equip.setfJump(value);
                    break;
                case "allstat":
                case "as":
                    equip.setfAllStat(value);
                    break;
                case "boss":
                case "bdmg":
                case "bdr":
                    equip.setfBoss(value);
                    break;
                case "dmg":
                case "damage":
                    equip.setfDamage(value);
                    break;
                case "level":
                case "lvl":
                case "lv":
                    equip.setfLevel(value);
                    break;
                case "reset":
                    equip.resetFlameStats();
                    break;
                default:
                    chr.chatMessage("Unknown Flame Type");
                    return;
            }
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"getitem"}, requiredType = Tester)
    public static class GetItem extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            short quant = 1;
            if (args.length > 2 && Util.isNumber(args[args.length - 1])) {
                quant = Short.parseShort(args[args.length - 1]);
            }

            if (Util.isNumber(args[1])) {
                int id = Integer.parseInt(args[1]);
                Equip equip = ItemData.getEquipDeepCopy(id, true);
                if (equip == null) {
                    Item item = ItemData.getItemDeepCopy(id, true);
                    if (item == null) {
                        chr.chatMessage(WorldName, String.format("Could not find an item with id %d", id));
                        return;
                    }
                    item.setQuantity(quant);
                    chr.addItemToInventory(item);
                } else {
                    for (int i = 0; i < quant; i++) {
                        equip = ItemData.getEquipDeepCopy(id, true);
                        chr.addItemToInventory(equip);
                    }
                }
            } else {
                StringBuilder query = new StringBuilder();
                int size = args.length;
                if (Util.isNumber(args[size - 1])) {
                    size--;
                    quant = Short.parseShort(args[size]);
                }
                for (int i = 1; i < size; i++) {
                    query.append(args[i].toLowerCase()).append(" ");
                }
                query = new StringBuilder(query.substring(0, query.length() - 1));
                Map<Integer, String> map = StringData.getItemStringByName(query.toString(), false);
                if (map.size() == 0) {
                    chr.chatMessage(WorldName, "No items found for query " + query);
                }
                for (Map.Entry<Integer, String> entry : map.entrySet()) {
                    int id = entry.getKey();
                    Item item = ItemData.getEquipDeepCopy(id, true);
                    if (item != null) {
                        // If item is equip
                        Equip equip = (Equip) item;
                        if (equip.getItemId() < 1000000) {
                            continue;
                        }
                        for (int i = 0; i < quant; i++) {
                            equip = ItemData.getEquipDeepCopy(id, true);
                            chr.addItemToInventory(equip);
                        }
                        return;
                    }

                    // if item is not equip
                    item = ItemData.getItemDeepCopy(id);
                    if (item == null) {
                        continue;
                    }
                    item.setQuantity(quant);
                    chr.addItemToInventory(item);
                    return;
                }
            }
        }
    }

    @Command(names = {"giveitem"}, requiredType = GameMaster)
    public static class GiveItem extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !giveitem <playername> <item query (id/name)> <?quantity?>");
                return;
            }

            var other = chr.getField().getCharByName(args[1]);

            if (Util.isNumber(args[2])) {

                int id = Integer.parseInt(args[2]);
                Equip equip = ItemData.getEquipDeepCopy(id, true);
                if (equip == null) {
                    Item item = ItemData.getItemDeepCopy(id, true);
                    if (item == null) {
                        chr.chatMessage(WorldName, String.format("Could not find an item with id %d", id));
                        return;
                    }
                    short quant = 1;
                    if (args.length > 3) {
                        quant = Short.parseShort(args[3]);
                    }
                    item.setQuantity(quant);
                    other.addItemToInventory(item);
                    chr.chatMessage(String.format("Gave item %s (%s) to %s.", item.getItemId(), item.getQuantity(), other.getName()));
                } else {
                    other.addItemToInventory(equip);
                    chr.chatMessage(String.format("Gave item %s (%s) to %s.", equip.getItemId(), equip.getQuantity(), other.getName()));
                }
            } else {
                StringBuilder query = new StringBuilder();
                int size = args.length;
                short quant = 1;
                if (Util.isNumber(args[size - 1])) {
                    size--;
                    quant = Short.parseShort(args[size]);
                }
                for (int i = 2; i < size; i++) {
                    query.append(args[i].toLowerCase()).append(" ");
                }
                query = new StringBuilder(query.substring(0, query.length() - 1));
                Map<Integer, String> map = StringData.getItemStringByName(query.toString(), false);
                if (map.size() == 0) {
                    chr.chatMessage(WorldName, "No items found for query " + query);
                }
                for (Map.Entry<Integer, String> entry : map.entrySet()) {
                    int id = entry.getKey();
                    Item item = ItemData.getEquipDeepCopy(id, true);
                    if (item != null) {
                        Equip equip = (Equip) item;
                        if (equip.getItemId() < 1000000) {
                            continue;
                        }
                        other.addItemToInventory(equip);
                        other.write(WvsContext.inventoryOperation(true, false,
                                Add, (short) equip.getBagIndex(), (byte) -1, 0, equip));
                        chr.chatMessage(String.format("Gave item %s (%s) to %s.", item.getItemId(), item.getQuantity(), other.getName()));
                        return;
                    }
                    item = ItemData.getItemDeepCopy(id);
                    if (item == null) {
                        continue;
                    }
                    item.setQuantity(quant);
                    other.addItemToInventory(item);
                    other.write(WvsContext.inventoryOperation(true, false,
                            Add, (short) item.getBagIndex(), (byte) -1, 0, item));
                    chr.chatMessage(String.format("Gave item %s (%s) to %s.", item.getItemId(), item.getQuantity(), other.getName()));
                    return;
                }
            }
        }
    }

    @Command(names = {"done"}, requiredType = Tester)
    public static class Done extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = 1000;
            int hp = 250000;
            int lv = 275;
            chr.setStatAndSendPacket(Stat.hp, hp);
            chr.setStatAndSendPacket(Stat.mhp, hp);
            chr.setStatAndSendPacket(Stat.mp, hp);
            chr.setStatAndSendPacket(Stat.mmp, hp);
            chr.setStatAndSendPacket(Stat.str, (short) num);
            chr.setStatAndSendPacket(Stat.dex, (short) num);
            chr.setStatAndSendPacket(Stat.inte, (short) num);
            chr.setStatAndSendPacket(Stat.luk, (short) num);
            chr.setStatAndSendPacket(Stat.level, lv);
        }
    }

    @Command(names = {"hypertp"}, requiredType = Tester)
    public static class HyperTP extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int hyperTP = 5040004;
            Item hyperTP2 = ItemData.getItemDeepCopy(hyperTP);
            chr.addItemToInventory(hyperTP2.getInvType(), hyperTP2, false);
            chr.write(WvsContext.inventoryOperation(true, false,
                    Add, (short) hyperTP2.getBagIndex(), (byte) -1, 0, hyperTP2));
        }
    }

    @Command(names = {"job", "setjob"}, requiredType = Tester)
    public static class Job extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            short id = Short.parseShort(args[1]);
            JobEnum job = JobEnum.getJobById(id);
            if (job != null) {
                chr.setJob(id);
                if (JobConstants.isDualBlade(id)) {
                    chr.getAvatarData().getCharacterStat().setSubJob(1);
                }
                Map<Stat, Object> stats = new HashMap<>();
                stats.put(Stat.job, id);
                chr.write(WvsContext.statChanged(stats, chr.getAvatarData().getCharacterStat().getSubJob()));
            } else {
                chr.chatMessage("Unknown job id " + id);
            }
        }
    }

    @Command(names = {"sp", "setsp"}, requiredType = Tester)
    public static class Sp extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (JobConstants.isExtendSpJob(chr.getJob())) {
                if (num >= 0) {
                    chr.setSpToCurrentJob(num);
                    Map<Stat, Object> stats = new HashMap<>();
                    stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getExtendSP());
                    chr.write(WvsContext.statChanged(stats));
                }
            } else {
                chr.getAvatarData().getCharacterStat().setSp(num);
                Map<Stat, Object> stats = new HashMap<>();
                stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getSp());
                chr.write(WvsContext.statChanged(stats));
            }
        }
    }

    @Command(names = {"ap", "setap"}, requiredType = Tester)
    public static class Ap extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.ap, (short) num);
            }
        }
    }

    @Command(names = {"hp", "sethp"}, requiredType = Tester)
    public static class Hp extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.hp, num);
                chr.setStatAndSendPacket(Stat.mhp, num);
            }
        }
    }

    @Command(names = {"mp", "setmp"}, requiredType = Tester)
    public static class Mp extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.mp, num);
                chr.setStatAndSendPacket(Stat.mmp, num);
            }
        }
    }

    @Command(names = {"str", "setstr"}, requiredType = Tester)
    public static class Str extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.str, (short) num);
            }
        }
    }

    @Command(names = {"dex", "setdex"}, requiredType = Tester)
    public static class Dex extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.dex, (short) num);
            }
        }
    }

    @Command(names = {"int", "setint"}, requiredType = Tester)
    public static class SetInt extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.inte, (short) num);
            }
        }
    }

    @Command(names = {"luk", "setluk"}, requiredType = Tester)
    public static class Luk extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.luk, (short) num);
            }
        }
    }

    @Command(names = {"level", "setlevel", "lvl", "lv"}, requiredType = Tester)
    public static class Level extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.level, num);
                chr.setStatAndSendPacket(Stat.exp, 0);
                chr.getJobHandler().handleLevelUp();
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.levelUpEffect()));
            }
        }
    }

    @Command(names = {"leveluntil", "levelupuntil", "leveltill", "leveluptill"}, requiredType = Tester)
    public static class LevelUntil extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            int level = chr.getLevel();
            while (level < num) {
                level++;
                chr.setStat(Stat.level, level);
                Map<Stat, Object> stats = new HashMap<>();
                stats.put(Stat.level, level);
                stats.put(Stat.exp, (long) 0);
                chr.write(WvsContext.statChanged(stats));
                chr.getJobHandler().handleLevelUp();
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.levelUpEffect()));
            }
        }
    }

    @Command(names = {"heal"}, requiredType = Tester)
    public static class Heal extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int hp = chr.getMaxHP();
            if (args.length > 1) {
                hp = Integer.parseInt(args[1]);
            }
            chr.heal(hp, false, true);
            chr.healMP(chr.getMaxMP());
        }
    }

    @Command(names = {"curhp"}, requiredType = Tester)
    public static class CurHp extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.hp, num);
                if (num <= 0) {
                    chr.die();
                }
            }
        }
    }

    @Command(names = {"curmp"}, requiredType = Tester)
    public static class CurMp extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int num = Integer.parseInt(args[1]);
            if (num >= 0) {
                chr.setStatAndSendPacket(Stat.mp, num);
            }
        }
    }

    @Command(names = {"invincible", "god", "godmode"}, requiredType = Tester)
    public static class Invincible extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            chr.setInvincible(!chr.isInvincible());
            chr.chatMessage("Invincibility: " + chr.isInvincible());
            if (chr.isInvincible()) {
                Option o = new Option();
                o.nOption = 3;
                tsm.putCharacterStatValue(IndieNotDamaged, o);
            } else {
                tsm.removeStat(IndieNotDamaged);
            }
            tsm.sendSetStatPacket();
        }
    }

    @Command(names = {"morph"}, requiredType = Tester)
    public static class Morph extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(Notice2, "Needs more args! <id>");
                return;
            }

            int morphID = Integer.parseInt(args[1]);
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o1 = new Option();
            o1.nOption = morphID;
            o1.rOption = Kaiser.FINAL_TRANCE;
            tsm.putCharacterStatValue(CharacterTemporaryStat.Morph, o1);
            tsm.sendSetStatPacket();
        }
    }

    @Command(names = {"mount"}, requiredType = Tester)
    public static class Mount extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(Notice2, "Needs more args! <id>");
                return;
            }

            int mountID = Integer.parseInt(args[1]);
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicle);
            tsb.setNOption(mountID);
            tsb.setROption(Kaiser.FINAL_TRANCE);
            tsm.putCharacterStatValue(RideVehicle, tsb.getOption());
            tsm.sendSetStatPacket();
        }
    }

    @Command(names = {"testtempstat"}, requiredType = Admin)
    public static class TestTempStat extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            List<Life> lifes = new ArrayList<>(chr.getField().getLifes().values());
            Life l = lifes.get(lifes.size() - 1);
            if (!(l instanceof Mob)) {
                return;
            }
            Mob mob = (Mob) l;
            chr.write(MobPool.statSet(mob, (short) 0));
        }
    }

    @Command(names = {"setmap"}, requiredType = Tester)
    public static class SetMap extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length > 1 && Util.isNumber(args[1])) {
                Field toField = chr.getOrCreateFieldByCurrentInstanceType(Integer.parseInt(args[1]));
                if (toField != null) {
                    chr.warp(toField);
                } else {
                    chr.chatMessage(Notice2, "Could not find a field with id " + args[1]);
                }
            } else {
                chr.chatMessage("Please input a number as first argument.");
            }
        }
    }

    @Command(names = {"setportal"}, requiredType = Tester)
    public static class SetPortal extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int portalID = Integer.parseInt(args[1]);
            Portal portal = chr.getField().getInfo().getPortalByID(portalID);
            if (portal == null) {
                chr.chatMessage(Notice2, "Portal does not exist.");
                return;
            }
            Position position = new Position(portal.getX(), portal.getY());
            chr.write(FieldPacket.teleport(position, chr));
        }
    }

    @Command(names = {"atom"}, requiredType = Admin)
    public static class Atom extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int charID = chr.getId();
            ForceAtomInfo forceAtomInfo1 = new ForceAtomInfo(142110011, ForceAtomEnum.KINESIS_ORB_REAL.getInc(), 3, 3, 0, 0, Util.getCurrentTime(), 1,
                    142110011, new Position());
            ForceAtomInfo forceAtomInfo2 = new ForceAtomInfo(142110011, ForceAtomEnum.KINESIS_ORB_REAL.getInc(), 3, 3, 0, 0, Util.getCurrentTime(), 1,
                    142110011, new Position());
            List<ForceAtomInfo> fais = new ArrayList<>();
            fais.add(forceAtomInfo1);
            fais.add(forceAtomInfo2);

            Mob mob = (Mob) chr.getField().getLifes().get(chr.getField().getLifes().size() - 1);
            List<Integer> mobs = new ArrayList<>();
            int mobID = mob.getObjectId();
            mobs.add(mobID);
            chr.createForceAtom(new ForceAtom(false, -1, chr.getId(), ForceAtomEnum.KINESIS_ORB_REAL,
                    true, mobs, 142110011, fais, null, 0, 0, null, 142110011, mob.getPosition(), 0));

        }
    }

    @Command(names = {"getskill"}, requiredType = Tester)
    public static class GetSkill extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 4) {
                chr.chatMessage(Notice2, "Needs more args! <id> <cur> <max>");
                return;
            }
            int id = Integer.parseInt(args[1]);
            int cur = Integer.parseInt(args[2]);
            int max = Integer.parseInt(args[3]);
            chr.addSkill(id, cur, max);
        }
    }

    @Command(names = {"maxskills"}, requiredType = Tester)
    public static class MaxSkills extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            List<Skill> list = new ArrayList<>();
            Set<Short> jobs = new HashSet<>();
            short job = chr.getJob();
            // giant hack, but it's for a command, so it's k
            if (JobConstants.isEvan(job)) {
                jobs.add((short) 2000);
                jobs.add((short) 2200);
                while (job >= 2210) {
                    jobs.add(job--);
                }
            } else {
                if (job % 100 == 12 || job % 100 == 22 || job % 100 == 32 || job % 100 == 42) {
                    jobs.add(job);
                    jobs.add((short) (job - 1));
                    jobs.add((short) (job - 2));
                    jobs.add((short) ((job / 100) * 100));
                } else if (job % 100 == 11 || job % 100 == 21 || job % 100 == 31 || job % 100 == 41) {
                    jobs.add(job);
                    jobs.add((short) (job - 1));
                    jobs.add((short) ((job / 100) * 100));
                } else if (job % 100 == 10 || job % 100 == 20 || job % 100 == 30 || job % 100 == 40) {
                    jobs.add(job);
                    jobs.add((short) ((job / 100) * 100));
                } else {
                    jobs.add(job);
                }
            }
            for (short j : jobs) {
                for (Skill skill : SkillData.getSkillsByJob(j)) {
                    byte maxLevel = (byte) skill.getMaxLevel();
                    skill.setCurrentLevel(maxLevel);
                    skill.setMasterLevel(maxLevel);
                    list.add(skill);
                    chr.addSkill(skill);
                }
                if (list.size() > 0) {
                    chr.write(WvsContext.changeSkillRecordResult(list, true, false, false, false));
                }
            }
        }
    }

    @Command(names = {"lookup", "find"}, requiredType = Tester)
    public static class Lookup extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage(Notice2, "Needs more args! <what to lookup> <id/(part of) name>");
                chr.chatMessage(Notice2, "Possible lookup types are: item, skill, mob, npc, map, quest, option (pot), job");
                return;
            }
            StringBuilder queryBuilder = new StringBuilder();
            for (int i = 2; i < args.length; i++) {
                queryBuilder.append(args[i].toLowerCase()).append(" ");
            }
            queryBuilder = new StringBuilder(queryBuilder.substring(0, queryBuilder.length() - 1));
            if (queryBuilder.length() < 3 && !Util.isNumber(queryBuilder.toString())) {
                chr.chatMessage("Please narrow your query by having a query of at least 3 characters");
                return;
            }

            var query = queryBuilder.toString();

            chr.chatMessage("Query: " + query);
            boolean isNumber = Util.isNumber(query);
            if ("job".equalsIgnoreCase(args[1])) {
                if (isNumber) {
                    var job = JobEnum.getJobById(Integer.parseInt(query));
                    if (job == null) {
                        chr.chatMessage("No job with id " + query);
                    } else {
                        chr.chatMessage("Job id %d: %s", query, job.toString());
                    }
                } else {
                    var jobs = JobEnum.getJobsByName(query);
                    if (jobs.isEmpty()) {
                        chr.chatMessage("No job found for query %s", query);
                    } else {
                        chr.chatMessage("Following jobs found: ");
                        jobs.forEach(chr::chatMessage);
                    }
                }
            } else if ("skill".equalsIgnoreCase(args[1])) {
                SkillStringInfo ssi;
                int id;
                if (isNumber) {
                    id = Integer.parseInt(query.toString());
                    ssi = StringData.getSkillStringById(id);
                    if (ssi == null) {
                        chr.chatMessage(WorldName, "Cannot find skill " + id);
                        return;
                    }
                    SkillInfo skillInfo = SkillData.getSkillInfoById(id);
                    chr.chatMessage(WorldName, "Name: " + ssi.getName());
                    chr.chatMessage(WorldName, "Desc: " + ssi.getDesc());
                    chr.chatMessage(WorldName, "h: " + ssi.getH());
                    chr.chatMessage(WorldName, "type: " + skillInfo.getType());
                } else {
                    Map<Integer, SkillStringInfo> map = StringData.getSkillStringByName(query.toString());
                    if (map.size() == 0) {
                        chr.chatMessage(WorldName, "No skills found for query " + query);
                    }
                    for (Map.Entry<Integer, SkillStringInfo> entry : map.entrySet()) {
                        id = entry.getKey();
                        ssi = entry.getValue();
                        SkillInfo si = SkillData.getSkillInfoById(id);
                        if (si != null) {
                            chr.chatMessage(WorldName, "Id: " + id);
                            chr.chatMessage(WorldName, "Name: " + ssi.getName());
                            chr.chatMessage(WorldName, "Desc: " + ssi.getDesc());
                            chr.chatMessage(WorldName, "h: " + ssi.getH());
                            chr.chatMessage(WorldName, "type: " + si.getType());
                        }
                    }
                }
            } else if ("option".equalsIgnoreCase(args[1]) || "itemoption".equalsIgnoreCase(args[2])) {
                List<ItemOption> ioList = ItemData.getItemOptionsByName(query.toString());
                for (ItemOption io : ioList) {
                    int id = io.getId();
                    int tier = id / 10000;  // 1 = Rare,  2 = Epic,  3 = Unique,  4 = Legendary
                    ChatType chatType;
                    String ioString = "";
                    if (tier > 0 && tier <= 4) {
                        boolean bonus = (id % (tier * 10000)) >= 2000;
                        if (bonus) {
                            ioString += "[Bonus] ";
                        }
                    }
                    switch (tier) {
                        case 1:
                            chatType = Notice2; // Rare
                            ioString += "(Rare) ";
                            break;
                        case 2:
                            chatType = GroupParty; // Epic
                            ioString += "(Epic) ";
                            break;
                        case 3:
                            chatType = Notice; // Unique
                            ioString += "(Unique) ";
                            break;
                        case 4:
                            chatType = Whisper; // Legendary
                            ioString += "(Legendary) ";
                            break;
                        default:
                            chatType = WorldName; // Other
                            ioString += "(Other) ";
                            break;
                    }
                    ioString += io.getString();
                    chr.chatMessage(chatType, "Id: " + id);
                    chr.chatMessage(chatType, "Name: " + ioString);
                }
            } else {
                String queryType = args[1].toLowerCase();
                int id;
                String name;
                if (isNumber) {
                    id = Integer.parseInt(query.toString());
                    switch (queryType) {
                        case "item":
                            name = StringData.getItemStringById(id);
                            break;
                        case "quest":
                            name = StringData.getQuestStringById(id);
                            break;
                        case "mob":
                            name = StringData.getMobStringById(id);
                            break;
                        case "npc":
                            name = StringData.getNpcStringById(id);
                            break;
                        case "map":
                        case "field":
                            name = StringData.getMapStringById(id);
                            break;
                        default:
                            chr.chatMessage("Unknown query type " + queryType);
                            return;
                    }
                    if (name == null) {
                        chr.chatMessage(WorldName, "Cannot find " + queryType + " " + id);
                        return;
                    }
                    chr.chatMessage(WorldName, "Name: " + name);
                } else {
                    Map<Integer, String> map;
                    switch (queryType) {
                        case "equip":
                            map = StringData.getItemStringByName(query.toString(), false);
                            Set<Integer> nonEquips = new HashSet<>();
                            for (int itemId : map.keySet()) {
                                if (!ItemConstants.isEquip(itemId)) {
                                    nonEquips.add(itemId);
                                }
                            }
                            for (int itemId : nonEquips) {
                                map.remove(itemId);
                            }
                            break;
                        case "item":
                            map = StringData.getItemStringByName(query.toString(), false);
                            break;
                        case "quest":
                            map = StringData.getQuestStringByName(query.toString());
                            break;
                        case "mob":
                            map = StringData.getMobStringByName(query.toString());
                            break;
                        case "npc":
                            map = StringData.getNpcStringByName(query.toString());
                            break;
                        case "map":
                            map = StringData.getMapStringByName(query.toString());
                            break;
                        default:
                            chr.chatMessage("Unknown query type " + queryType);
                            return;
                    }
                    if (map.size() == 0) {
                        chr.chatMessage(WorldName, "No " + queryType + "s found for query " + query);
                        return;
                    }
                    TreeMap<Integer, String> sortedMap = new TreeMap<>(map);
                    for (Map.Entry<Integer, String> entry : sortedMap.entrySet()) {
                        id = entry.getKey();
                        name = entry.getValue();
                        if (queryType.equalsIgnoreCase("item")) {
                            Item item = ItemData.getEquipDeepCopy(id, false);
                            if (item == null) {
                                item = ItemData.getItemDeepCopy(id);
                            }
                            if (item == null) {
                                continue;
                            }
                        }
                        chr.chatMessage(WorldName, "Id: " + id);
                        chr.chatMessage(WorldName, "Name: " + name);
                    }
                }
            }
        }
    }

    @Command(names = {"getprojectiles", "projectiles"}, requiredType = Tester)
    public static class GetProjectiles extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] projectiles = new int[]{
                    2070000,
                    2060000,
                    2061000,
                    2330000
            };
            for (int projectile : projectiles) {
                Item item = ItemData.getItemDeepCopy(projectile);
                chr.addItemToInventory(item.getInvType(), item, false);
                item.setQuantity(1000);
                chr.write(WvsContext.inventoryOperation(true, false,
                        Add, (short) item.getBagIndex(), (byte) -1, 0, item));
            }
        }
    }

    @Command(names = {"mesos", "money"}, requiredType = Tester)
    public static class Mesos extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            long mesos = Long.parseLong(args[1]);
            chr.addMoney(mesos);
        }
    }

    @Command(names = {"nx", "setnx"}, requiredType = Tester)
    public static class NxCommand extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int nx = Integer.parseInt(args[1]);
            chr.addNx(nx);
        }
    }

    @Command(names = {"dp", "setdp"}, requiredType = Tester)
    public static class DpCommand extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int dp = Integer.parseInt(args[1]);
            User user = chr.getUser();
            user.setDonationPoints(dp);
        }
    }

    @Command(names = {"vp", "setvp"}, requiredType = Tester)
    public static class VpCommand extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int vp = Integer.parseInt(args[1]);
            User user = chr.getUser();
            user.setVotePoints(vp);
        }
    }


    @Command(names = {"goto"}, requiredType = Tester)
    public static class GoTo extends AdminCommand {
        public static void execute(Char chr, String[] args) {

            HashMap<String, Integer> gotomaps = new HashMap<>();
            gotomaps.put("ardent", 910001000);
            gotomaps.put("ariant", 260000100);
            gotomaps.put("amherst", 1010000);
            gotomaps.put("amoria", 680000000);
            gotomaps.put("aquaroad", 230000000);
            gotomaps.put("boatquay", 541000000);
            gotomaps.put("cwk", 610030000);
            gotomaps.put("edelstein", 310000000);
            gotomaps.put("ellin", 300000000);
            gotomaps.put("ellinia", 101000000);
            gotomaps.put("ellinel", 101071300);
            gotomaps.put("elluel", 101050000);
            gotomaps.put("elnath", 211000000);
            gotomaps.put("ereve", 130000000);
            gotomaps.put("florina", 120000300);
            gotomaps.put("fm", 910000000);
            gotomaps.put("future", 271000000);
            gotomaps.put("gmmap", 180000000);
            gotomaps.put("happy", 209000000);
            gotomaps.put("harbor", 104000000);
            gotomaps.put("henesys", 100000000);
            gotomaps.put("herbtown", 251000000);
            gotomaps.put("kampung", 551000000);
            gotomaps.put("kerning", 103000000);
            gotomaps.put("korean", 222000000);
            gotomaps.put("leafre", 240000000);
            gotomaps.put("ludi", 220000000);
            gotomaps.put("malaysia", 550000000);
            gotomaps.put("mulung", 250000000);
            gotomaps.put("nautilus", 120000000);
            gotomaps.put("nlc", 600000000);
            gotomaps.put("omega", 221000000);
            gotomaps.put("orbis", 200000000);
            gotomaps.put("pantheon", 400000000);
            gotomaps.put("pinkbean", 270050100);
            gotomaps.put("phantom", 610010000);
            gotomaps.put("perion", 102000000);
            gotomaps.put("rien", 140000000);
            gotomaps.put("showatown", 801000000);
            gotomaps.put("singapore", 540000000);
            gotomaps.put("sixpath", 104020000);
            gotomaps.put("sleepywood", 105000000);
            gotomaps.put("southperry", 2000000);
            gotomaps.put("tot", 270000000);
            gotomaps.put("twilight", 273000000);
            gotomaps.put("tynerum", 301000000);
            gotomaps.put("zipangu", 800000000);
            gotomaps.put("pianus", 230040420);
            gotomaps.put("horntail", 240060200);
            gotomaps.put("chorntail", 240060201);
            gotomaps.put("griffey", 240020101);
            gotomaps.put("manon", 240020401);
            gotomaps.put("zakum", 211042300);
            gotomaps.put("czakum", 280030001);
            gotomaps.put("pap", 220080001);
            gotomaps.put("oxquiz", 109020001);
            gotomaps.put("ola", 109030101);
            gotomaps.put("fitness", 109040000);
            gotomaps.put("snowball", 109060000);
            gotomaps.put("boss", 682020000);
            gotomaps.put("dojo", 925020001);
            gotomaps.put("pq", 910002000);
            gotomaps.put("h", 100000000);
            gotomaps.put("gollux", 863010000);
            gotomaps.put("lotus", 350060300);
            gotomaps.put("damien", 105300303);
            gotomaps.put("ursus", 970072200);
            gotomaps.put("pno", 811000008);
            gotomaps.put("cygnus", 271040000);
            gotomaps.put("ra", 105200000);
            gotomaps.put("goldenbeach", 914200000);
            gotomaps.put("ardentmill", 910001000);
            gotomaps.put("oz", 992000000);
            gotomaps.put("vj", 450001000);
            gotomaps.put("chu", 450002000);
            gotomaps.put("chuchu", 450002000);
            gotomaps.put("lach", 450003000);
            gotomaps.put("lachelein", 450003000);
            gotomaps.put("arcana", 450005000);
            gotomaps.put("morass", 450006130);
            gotomaps.put("esfera", 450007000);
            gotomaps.put("outpost", 450009000);
            gotomaps.put("moonbridge", 450009100);
            gotomaps.put("lab", 450011120);
            gotomaps.put("labyrinth", 450011120);
            gotomaps.put("limina", 450012000);
            gotomaps.put("runner", 993001000);
            gotomaps.put("lucid", 450004000);
            gotomaps.put("will", 450007240);
            gotomaps.put("gloom", 450009301);
            gotomaps.put("verushilla", 450011990);
            gotomaps.put("bm", 450012500);

            if (args.length == 1) {
                chr.chatMessage(Notice2, "List of locations: " + gotomaps.keySet());
            } else if (gotomaps.containsKey(args[1])) {
                Field toField = chr.getClient().getChannelInstance().getField(gotomaps.get(args[1]));
                Portal portal = chr.getField().getInfo().getDefaultPortal();
                chr.warp(toField, portal);
            } else if (args[1].equals("locations")) {
                chr.chatMessage(Notice2, "Use !goto <location>");
                StringBuilder sb = new StringBuilder();
                for (String s : gotomaps.keySet()) {
                    sb.append(s).append(",  ");
                }
                chr.chatMessage(Notice2, sb.substring(0, sb.length() - 2));
            } else {
                chr.chatMessage(Notice2, "Map does not exist.");
            }
        }
    }

    @Command(names = {"clearcache"}, requiredType = Admin)
    public static class ClearCache extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.getScriptManager().dispose(false);
            Server.getInstance().clearCache();
            chr.chatMessage("Cache has been cleared.");
        }
    }

    @Command(names = {"reloadscript", "reloadscripts", "rs"}, requiredType = Admin)
    public static class ReloadScripts extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            ScriptManagerImpl.clear();
            chr.chatMessage("Scripts have been cleared.");
        }
    }

    @Command(names = {"savemap"}, requiredType = Tester)
    public static class SaveMap extends AdminCommand {
        private static HashMap<String, Integer> quickmaps = new HashMap<>();

        public static void execute(Char chr, String[] args) {
            int mapid = chr.getFieldID();
            if (args.length < 1 && !args[1].equalsIgnoreCase("list")) {
                chr.chatMessage(BlackOnWhite, "Incorrect Syntax: !SaveMap <save/go> <key>");
                chr.chatMessage(BlackOnWhite, "To see the list of saved maps, use: !SaveMap list");
            }
            if (args[1].equalsIgnoreCase("save")) {
                String key = args[2];
                quickmaps.put(key, mapid);
                chr.chatMessage(BlackOnWhite, "[SaveMap] Map: " + mapid + " has been saved as key '" + key + "'.");
            } else if (args[1].equalsIgnoreCase("go")) {
                String key = args[2];
                if (quickmaps.get(key) == null) {
                    chr.chatMessage(BlackOnWhite, "[SaveMap] There is no map saved as key '" + args[2] + "'.");
                    return;
                }
                Field toField = chr.getOrCreateFieldByCurrentInstanceType((quickmaps.get(key)));
                Portal portal = chr.getField().getInfo().getDefaultPortal();
                chr.warp(toField, portal);
            } else if (args[1].equalsIgnoreCase("list")) {
                Set keys = quickmaps.keySet();
                chr.chatMessage(BlackOnWhite, "[SaveMap] " + quickmaps.size() + " saved maps.");
                for (Object maps : keys) {
                    chr.chatMessage(BlackOnWhite, "[SaveMap] Stored map: " + quickmaps.get(maps) + " as '" + maps + "'.");
                }
            } else {
                chr.chatMessage(BlackOnWhite, "Incorrect Syntax: !SaveMap <save/go> <key>");
                chr.chatMessage(BlackOnWhite, "To see the list of saved maps, use: !SaveMap list");
            }
        }
    }

    @Command(names = {"warriorequips"}, requiredType = Tester)
    public static class WarriorEquips extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] warEquips = new int[]{
                    1302000,
                    1312000,
                    1322000,
                    1402000,
                    1412000,
                    1422000,
                    1432000,
                    1442000,
                    1542000,
                    1232000,
                    1582000,
                    1353400,
                    1352500,
            };
            for (int warEquip : warEquips) {
                Item item = ItemData.getItemDeepCopy(warEquip);
                chr.addItemToInventory(item);
            }
        }
    }

    @Command(names = {"mageequips"}, requiredType = Tester)
    public static class MageEquips extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] mageEquips = new int[]{
                    1382000,
                    1372000,
                    1552000,
                    1252000,
                    1262000,
                    1353200,
            };
            for (int mageEquip : mageEquips) {
                Item item = ItemData.getItemDeepCopy(mageEquip);
                chr.addItemToInventory(item);
            }
        }
    }

    @Command(names = {"archerequips"}, requiredType = Tester)
    public static class ArcherEquips extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] archerEquips = new int[]{
                    1452000,
                    1462000,
                    1522000,
                    1352004,
                    1592000,
                    1353700,
            };
            for (int archerEquip : archerEquips) {
                Item item = ItemData.getItemDeepCopy(archerEquip);
                chr.addItemToInventory(item);
            }
        }
    }

    @Command(names = {"thiefequips"}, requiredType = Tester)
    public static class ThiefEquips extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] thiefEquips = new int[]{
                    1472000,
                    1332000,
                    1342000,
                    1242000,
                    1362000,
                    1352100
            };
            for (int thiefEquip : thiefEquips) {
                Item item = ItemData.getItemDeepCopy(thiefEquip);
                chr.addItemToInventory(item);
            }
        }
    }

    @Command(names = {"pirateequips"}, requiredType = Tester)
    public static class PirateEquips extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            int[] pirateEquips = new int[]{
                    1482000,
                    1353100,
                    1492000,
                    1222000,
                    1352600,
                    1532000,
                    1242000,
            };
            for (int pirateEquip : pirateEquips) {
                Item item = ItemData.getItemDeepCopy(pirateEquip);
                chr.addItemToInventory(item);
            }
        }
    }

    @Command(names = {"clearinv"}, requiredType = Tester)
    public static class ClearInv extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(Notice2, "Syntax Error: !ClearInv <Inventory Type> <Start Index> <End Index>");
                return;
            }
            InvType invType = InvType.getInvTypeByString(args[1]);
            if (invType == null) {
                chr.chatMessage("Please fill in a correct inventory type:  equip / use / etc / setup / cash");
                return;
            }
            short startIndex = Short.parseShort(args[2]);
            short endIndex = Short.parseShort(args[3]);
            for (int i = startIndex; i < endIndex; i++) {
                Item removeItem = chr.getInventoryByType(invType).getItemBySlot(i);
                if (removeItem != null) {
                    chr.consumeItem(removeItem, removeItem.getQuantity());
                }
            }
            chr.dispose();
        }
    }

    @Command(names = {"mobinfo"}, requiredType = Player)
    public static class MobInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Rect rect = new Rect(
                    chr.getPosition().deepCopy().getX() - 200,
                    chr.getPosition().deepCopy().getY() - 200,
                    chr.getPosition().deepCopy().getX() + 200,
                    chr.getPosition().deepCopy().getY() + 200
            );
            Mob mob = chr.getField().getMobs().stream().filter(m -> rect.hasPositionInside(m.getPosition())).findFirst().orElse(null);
            Char controller = chr.getField().getLifeToControllers().getOrDefault(mob, null);
            if (mob != null) {
                chr.chatMessage(SpeakerChannel, String.format("Object ID: %s | Template/Mob ID: %s | Level: %d | HP: %s/%s " +
                                        "| MP: %s/%s | Left: %s | PDR: %s | MDR: %s " +
                                        "| Controller: %s | Exp : %s | NX: %s",
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getObjectId()),
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getTemplateId()),
                                mob.getLevel(),
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getHp()),
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getMaxHp()),
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getMp()),
                                NumberFormat.getNumberInstance(Locale.US).format(mob.getMaxMp()),
                                mob.isLeft(),
                                mob.getPdr(),
                                mob.getMdr(),
                                controller == null ? "null" : chr.getName(),
                                mob.getForcedMobStat().getExp(),
                                mob.getNxDropAmount()
                        )
                );
            } else {
                chr.chatMessage(SpeakerChannel, "Could not find mob.");
            }
        }
    }

    @Command(names = {"mobskillinfo", "mobattackinfo"}, requiredType = Tester)
    public static class CheckMobSkillInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !mobskillinfo <mobTemplateId>");
                return;
            }

            var mob = MobData.getMobDeepCopyById(Integer.parseInt(args[1]));
            if (mob == null) {
                chr.chatMessage("Could not find mob " + args[1]);
                return;
            }

            chr.chatMessage("--Skills--");
            for (var mobSkill : mob.getSkills()) {
                chr.chatMessage("[%s] MobSkillID: %s (%s), slv: %s, doable: %s", mobSkill.getSkillIdx(), MobSkillID.getMobSkillIDByVal(mobSkill.getSkillID()), mobSkill.getSkillID(), mobSkill.getLevel(), mob.canUseSkill(mobSkill));
            }

            chr.chatMessage("--Attacks--");
            for (var attack : mob.getMobInfo().getAttacks()) {
                chr.chatMessage("[%s] DamR: %s", attack.getSkillIdx(), attack.getFixDamR());
            }
        }
    }


    @Command(names = {"npcinfo"}, requiredType = Player)
    public static class NpcInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Rect rect = new Rect(
                    chr.getPosition().deepCopy().getX() - 200,
                    chr.getPosition().deepCopy().getY() - 200,
                    chr.getPosition().deepCopy().getX() + 200,
                    chr.getPosition().deepCopy().getY() + 200
            );
            Npc npc = chr.getField().getNpcs().stream().filter(m -> rect.hasPositionInside(m.getPosition())).findFirst().orElse(null);
            Char controller = chr.getField().getLifeToControllers().getOrDefault(npc, null);
            if (npc != null) {
                chr.chatMessage(SpeakerChannel, String.format("Npc ID: %s | Template ID: %s | Left: %s | Pos: (%d, %d) " +
                                        "| Controller: %s | Script: %s",
                                NumberFormat.getNumberInstance(Locale.US).format(npc.getObjectId()),
                                NumberFormat.getNumberInstance(Locale.US).format(npc.getTemplateId()),
                                npc.isLeft(),
                                npc.getPosition().getX(),
                                npc.getPosition().getY(),
                                controller == null ? "null" : chr.getName(),
                                npc.getScripts().size() > 0 ? npc.getScripts().get(0) : "null"
                        )
                );
            } else {
                chr.chatMessage(SpeakerChannel, "Could not find mob.");
            }
        }
    }

    @Command(names = {"reactorinfo"}, requiredType = Player)
    public static class ReactorInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Rect rect = new Rect(
                    chr.getPosition().deepCopy().getX() - 200,
                    chr.getPosition().deepCopy().getY() - 200,
                    chr.getPosition().deepCopy().getX() + 200,
                    chr.getPosition().deepCopy().getY() + 200
            );
            Reactor reactor = chr.getField().getReactors().stream().filter(m -> rect.hasPositionInside(m.getPosition())).findFirst().orElse(null);
            if (reactor != null) {
                var reactorInfo = ReactorData.getReactorInfoByID(reactor.getTemplateId());
                chr.chatMessage(SpeakerChannel, String.format("Reactor ID: %s | Template ID: %s | Left: %s | Pos: (%d, %d) " +
                                        "| Script: %s",
                                NumberFormat.getNumberInstance(Locale.US).format(reactor.getObjectId()),
                                NumberFormat.getNumberInstance(Locale.US).format(reactor.getTemplateId()),
                                reactor.isLeft(),
                                reactor.getPosition().getX(),
                                reactor.getPosition().getY(),
                                reactorInfo == null ? "No info" : reactorInfo.getAction()
                        )
                );
            } else {
                chr.chatMessage(SpeakerChannel, "Could not find mob.");
            }
        }
    }

    @Command(names = {"getnpcsinrect", "getnpcs"}, requiredType = Tester)
    public static class GetNPCs extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Rect rect = GameConstants.MOB_CHECK_RECT;

            List<Life> lifeList = chr.getField().getLifesInRect(chr.getRectAround(rect));
            chr.chatMessage("NPCs around you:");
            for (Life life : lifeList) {
                if (life instanceof Npc) {
                    chr.chatMessage(life.toString());
                }
            }
        }
    }

    @Command(names = {"completequest"}, requiredType = Tester)
    public static class CompleteQuest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length <= 1) {
                chr.chatMessage("Usage: !completequest <startquestid> <endquestid?>");
                return;
            }

            int startId = Integer.parseInt(args[1]);
            int endId = startId;
            if (args.length >= 3) {
                endId = Integer.parseInt(args[2]);
            }

            for (int questId = startId; questId <= endId; questId++) {
                chr.getQuestManager().completeQuest(questId);
                chr.chatMessage("Completed quest " + questId);
            }
        }
    }

    @Command(names = {"removequest"}, requiredType = Tester)
    public static class RemoveQuest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.getQuestManager().removeQuest(Integer.parseInt(args[1]));
            chr.chatMessage("Removed quest " + args[1]);
        }
    }

    @Command(names = {"sethonor", "honor"}, requiredType = Tester)
    public static class SetHonor extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(SpeakerChannel, "Format: !sethonor <honor exp>");
                return;
            }
            int honor = Integer.parseInt(args[1]);
            chr.setHonorExp(honor);
            chr.write(WvsContext.characterHonorExp(honor));
        }
    }

    @Command(names = {"startquest"}, requiredType = Tester)
    public static class StartQuest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(SpeakerChannel, "Format: !startquest <quest id>");
                return;
            }
            Quest q = QuestData.createQuestFromId(Integer.parseInt(args[1]));
            if (q != null) {
                chr.getQuestManager().addQuest(q);
                chr.chatMessage("Started quest " + args[1]);
            } else {
                chr.chatMessage("Could not find quest with id " + args[1] + ", but still adding it.");
                chr.getScriptManager().startQuestNoCheck(Integer.parseInt(args[1]));
            }
        }
    }

    @Command(names = {"bypassskillcd", "ignoreskillcd", "bypasskillcd", "cd"}, requiredType = Tester)
    public static class BypassSkillCD extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.setSkillCDBypass(!chr.hasSkillCDBypass());
            if (chr.hasSkillCDBypass()) {
                for (var skillId : chr.getSkillCoolTimes().keySet()) {
                    chr.resetSkillCoolTime(skillId);
                }
            }
            chr.chatMessage(Notice2, "Skill Cooldown bypass: " + chr.hasSkillCDBypass());
            chr.dispose();
        }
    }

    @Command(names = {"toggledamagecap"}, requiredType = Tester)
    public static class ToggleDamageCap extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.chatMessage("Damage cap can't be removed by CTS anymore :(");
        }
    }

    @Command(names = {"shop"}, requiredType = Tester)
    public static class Shop extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            int shopId = 1011100;
            if (args.length > 1) {
                shopId = Integer.parseInt(args[1]);
            }
            chr.getScriptManager().openShop(shopId);
        }
    }

    // lie detector
    @Command(names = {"ld", "liedetector"}, requiredType = GameMaster)
    public static class LD extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 1) {
                chr.chatMessage(SpeakerChannel, "Not enough args! Use !ld <name> or !ld @me to test.");
                return;
            }

            String name = args[1];
            Char chrToLD = chr;

            if (!name.equals("@me")) {
                chrToLD = Server.getInstance().getWorldById(chr.getClient().getWorldId()).getCharByName(name);

                if (chrToLD == null) {
                    chr.chatMessage(SpeakerChannel, String.format("Character '%s' is not online.", name));
                    return;
                }
            }

            if (chrToLD.sendLieDetector(true)) {
                chr.chatMessage(SpeakerChannel, String.format("Sent lie detector to '%s'.", chrToLD.getName()));
            } else {
                chr.chatMessage(SpeakerChannel, "Lie detector failed.");
            }
        }
    }

    @Command(names = {"checkmap"}, requiredType = GameMaster)
    public static class CheckMap extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            var field = chr.getField();
            var chars = new StringBuilder();
            for (var aChar : field.getChars()) {
                chars.append(aChar.getName().toUpperCase())
                        .append("(")
                        .append(aChar.getOffenseManager().getTrust());
                if (aChar.getInstance() != null) {
                    chars.append(", I)");
                }
                chars.append("), ");
            }

            chr.chatMessage(chars.toString());
        }
    }

    @Command(names = {"dc"}, requiredType = GameMaster)
    public static class dc extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage(SpeakerChannel, "Not enough args! Use !dc <name>");
                return;
            }
            String name = args[1];
            Char dcChr = Server.getInstance().getWorldById(chr.getClient().getWorldId()).getCharByName(name);
            if (dcChr == null) {
                chr.chatMessage(SpeakerChannel, "target can't be found in world");
                return;
            }
            dcChr.write(WvsContext.returnToTitle());

            chr.chatMessage(SpeakerChannel, String.format("Character %s has been disconnected.", name));


        }
    }

    @Command(names = {"ban"}, requiredType = GameMaster)
    public static class Ban extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 5) {
                chr.chatMessage(SpeakerChannel, "Not enough args! Use !ban <name> <amount> <min/hour/day/week/month/year> <reason>");
                return;
            }
            String name = args[1];
            int amount = Integer.parseInt(args[2]);
            String amountType = args[3].toLowerCase();
            StringBuilder builder = new StringBuilder();
            for (int i = 4; i < args.length; i++) {
                builder.append(args[i] + " ");
            }
            String reason = builder.toString();
            reason = reason.substring(0, reason.length() - 1); // gets rid of the last space
            if (reason.length() > 255) {
                chr.chatMessage(SpeakerChannel, "That ban reason is too long.");
                return;
            }
            Char banChr = Server.getInstance().getWorldById(chr.getClient().getWorldId()).getCharByName(name);
            boolean online = true;
            if (banChr == null) {
                online = false;
                banChr = charDao.getByNameAndWorld(name, chr.getAccount().getWorldId());
                if (banChr == null) {
                    chr.chatMessage(SpeakerChannel, "Could not find that character.");
                    return;
                }
            }

            //Check if user is online somewhere in the server (could be char select too)
            User banUser = Server.getInstance().getUserById(banChr.getUserId());

            if (banUser == null) {
                online = false;
                banUser = userDao.getById(banChr.getUserId());
                if (banUser == null) {
                    chr.chatMessage("Could not find that user.");
                    return;
                }
            }

            LocalDateTime banDate = LocalDateTime.now();
            switch (amountType) {
                case "min":
                case "mins":
                    banDate = banDate.plusMinutes(amount);
                    break;
                case "h":
                case "hour":
                case "hours":
                    banDate = banDate.plusHours(amount);
                    break;
                case "d":
                case "day":
                case "days":
                    banDate = banDate.plusDays(amount);
                    break;
                case "w":
                case "week":
                case "weeks":
                    banDate = banDate.plusWeeks(amount);
                    break;
                case "month":
                case "months":
                    banDate = banDate.plusMonths(amount);
                    break;
                case "y":
                case "year":
                case "years":
                    banDate = banDate.plusYears(amount);
                    break;
                default:
                    chr.chatMessage(SpeakerChannel, String.format("Unknown date type %s", amountType));
                    break;
            }
            banUser.setBanExpireDate(FileTime.fromDate(banDate));
            banUser.setBanReason(reason);
            banUser.getOffenseManager().addOffense(reason, chr.getId());
            chr.chatMessage(SpeakerChannel, String.format("Character %s has been banned. Expire date: %s", name, banDate));

            if (online) {
                banChr.write(WvsContext.returnToTitle());
            } else {
                userDao.saveOrUpdate(banUser, null);
            }

            if (banUser.getClient() != null) {
                //If user is online on another character
                if (banUser.getClient().getAccount().getCurrentChr() != null) {
                    banUser.getClient().getAccount().getCurrentChr().write(WvsContext.returnToTitle());
                } else {
                    //If user is online on char select
                    banUser.getClient().write(WvsContext.returnToTitle());
                }
            }
        }
    }

    @Command(names = {"killmobs"}, requiredType = Tester)
    public static class KillMobs extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !killmobs <true/false (enable drops for killed mobs)> (<templateId>)");
                return;
            }

            Integer templateId = null;
            if (args.length >= 3) {
                templateId = Integer.parseInt(args[2]);
            }

            List<Mob> mobs = new ArrayList<>(chr.getField().getMobs());
            for (Mob mob : mobs) {
                if (templateId == null || templateId == mob.getTemplateId()) {
                    mob.die(Boolean.parseBoolean(args[1]));
                }
            }
        }
    }

    @Command(names = {"damagemobs"}, requiredType = Tester)
    public static class DamageMobs extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !damagemobs <damage>");
            }
            List<Mob> mobs = new ArrayList<>(chr.getField().getMobs());
            for (Mob mob : mobs) {
                mob.damage(chr, Long.parseLong(args[1]));
            }
        }
    }

    @Command(names = {"mobstat"}, requiredType = Tester)
    public static class MobStatTest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            List<Mob> mobs = new ArrayList<>(chr.getField().getMobs());
            if (mobs.size() > 0) {
                Mob mob = mobs.get(0);
                MobTemporaryStat mts = mob.getTemporaryStat();
                Option o = new Option();
                o.nOption = 1000;
                o.rOption = 145;
                o.slv = 1;
                o.tOption = 5;

                o.wOption = 1000;

                o.mOption = 1000;
                o.bOption = 1000;
                o.rOption = 1000;
                mts.addMobSkillOptionsAndBroadCast(MobStat.PCounter, o);
            } else {
                chr.chatMessage("Could not find a mob.");
            }
        }
    }

    @Command(names = {"fp", "findportal"}, requiredType = Tester)
    public static class FP extends AdminCommand { // FindPortal
        public static void execute(Char chr, String[] args) {
            if (args.length < 1) {
                chr.chatMessage(SpeakerChannel, "Invalid args. Use !findportal <id/name>");
                return;
            }
            Field field = chr.getField();
            Portal portal;
            String query = args[1];
            if (Util.isNumber(query)) {
                portal = field.getInfo().getPortalByID(Integer.parseInt(query));
            } else {
                portal = field.getInfo().getPortalByName(query);
            }
            if (portal == null) {
                chr.chatMessage(SpeakerChannel, "Was not able to find portal " + query);
                return;
            }
            chr.chatMessage(SpeakerChannel, "Portal Name: " + portal.getName());
            chr.chatMessage(SpeakerChannel, "Portal ID: " + NumberFormat.getNumberInstance(Locale.US).format(portal.getId()));
            chr.chatMessage(SpeakerChannel, "Portal target map: " + NumberFormat.getNumberInstance(Locale.US).format(portal.getTargetMapId()));
            chr.chatMessage(SpeakerChannel, "Portal position: " + portal.getX() + ", " + portal.getY());
            chr.chatMessage(SpeakerChannel, "Portal script: " + portal.getScript());
            chr.chatMessage(SpeakerChannel, ".");
            log.info(portal.getScript());
        }
    }

    @Command(names = {"showbuffs"}, requiredType = Tester)
    public static class showBuffs extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Set<Integer> buffs = new HashSet<>();
            for (List<Option> options : tsm.getCurrentStats().values()) {
                for (Option o : options) {
                    if (o.rOption != 0) {
                        buffs.add(o.rOption);
                    } else {
                        buffs.add(o.rOption);
                    }
                }
            }
            StringBuilder sb = new StringBuilder("Current buffs: ");
            for (int id : buffs) {
                String skillName = StringData.getSkillStringById(id) != null ? StringData.getSkillStringById(id).getName() : "Unknown Skill ID";
                sb.append(skillName).append(" (").append(id).append("), ");
            }
            chr.chatMessage(sb.toString().substring(0, sb.toString().length() - 2));
            sb = new StringBuilder("CTS: ");
            for (CharacterTemporaryStat cts : tsm.getCurrentStats().keySet()) {
                sb.append(cts.toString()).append(", ");
            }
            chr.chatMessage(sb.toString().substring(0, sb.toString().length() - 2));
        }
    }

    @Command(names = {"tohex"}, requiredType = Tester)
    public static class toHex extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            int arg = Integer.parseInt(args[1]);
            byte[] arr = new byte[4];
            arr[3] = (byte) ((arg >>> 24) & 0xFF);
            arr[2] = (byte) ((arg >>> 16) & 0xFF);
            arr[1] = (byte) ((arg >>> 8) & 0xFF);
            arr[0] = (byte) (arg & 0xFF);
            chr.chatMessage(Util.readableByteArray(arr));
        }
    }

    @Command(names = {"fromhex"}, requiredType = Tester)
    public static class fromHex extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length == 1) {
                return;
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 1; i < args.length; i++) {
                sb.append(args[i].trim());
            }
            String s = sb.toString();
            s = s.replace("|", " ");
            s = s.replace(" ", "");
            int len = s.length();
            int[] arr = new int[len / 2];
            for (int i = 0; i < len; i += 2) {
                arr[i / 2] = ((Character.digit(s.charAt(i), 16) << 4)
                        + Character.digit(s.charAt(i + 1), 16));
            }
            int num = 0;
            for (int i = 0; i < arr.length; i++) {
                num += arr[i] << (i * 8);
            }
            chr.chatMessage(Util.formatNumber("" + num));
        }
    }

    @Command(names = {"fromascii"}, requiredType = Tester)
    public static class FromAscii extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.chatMessage(Util.readableByteArray(args[1].getBytes()));
        }
    }

    @Command(names = {"toascii"}, requiredType = Tester)
    public static class ToAscii extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length == 1) {
                return;
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 1; i < args.length; i++) {
                sb.append(args[i].trim());
            }
            String s = sb.toString();
            s = s.replace("|", " ");
            s = s.replace(" ", "");
            byte[] arr = Util.getByteArrayByString(s);
            chr.chatMessage(new String(arr));
        }
    }

    @Command(names = {"fromhexbe", "hexbe"}, requiredType = Tester)
    public static class fromHexBE extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length == 1) {
                return;
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 1; i < args.length; i++) {
                sb.append(args[i].trim());
            }
            String s = sb.toString();
            s = s.replace("|", " ");
            s = s.replace(" ", "");
            long num = Long.parseLong(s, 16);
            chr.chatMessage("" + num);
        }
    }

    @Command(names = {"remote", "testremote"}, requiredType = Tester)
    public static class RemoteEnterFieldTest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Char other = chr.createCopy();
            chr.setCopy(other);
            chr.write(UserPool.userLeaveField(other));
            chr.write(UserPool.userEnterField(other));
        }
    }


    @Command(names = {"showfh", "showfootholds"}, requiredType = Tester)
    public static class ShowFootholds extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                Field field = chr.getField();
                int i = 0;
                for (Foothold fh : field.getInfo().getFootholds().values()) {
                    Drop drop1 = new Drop(0, 10);
                    drop1.setPosition(new Position(fh.getX1(), fh.getY1()));
                    drop1.setFh(fh.getId());
                    Drop drop2 = new Drop(0, 100);
                    drop2.setPosition(new Position(fh.getX2(), fh.getY2()));
                    drop2.setFh(fh.getId());
                    field.drop(drop1, drop1.getPosition());
                    field.drop(drop2, drop2.getPosition());
                }
            } else {
                var name = args[1];
                var position = chr.getPosition();
                if (args.length > 2) {
                    position.setX(Integer.parseInt(args[2]));
                    position.setY(Integer.parseInt(args[3]));
                }
                chr.write(FieldPacket.footholdAppear(name, true, position));
            }

        }
    }


    @Command(names = {"removedrops", "drops"}, requiredType = Tester)
    public static class RemoveDrops extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Set<Drop> drops = chr.getField().getDrops();
            drops.forEach(drop -> chr.getField().removeLife(drop));
        }
    }

    @Command(names = {"lookupreactor", "reactors"}, requiredType = Tester)
    public static class LookupReactor extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.getField().getReactors().forEach(reactor -> chr.chatMessage(reactor.toString()));
        }
    }

    @Command(names = {"spawnreactor", "reactor"}, requiredType = Tester)
    public static class SpawnReactor extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !reactor <id>");
                return;
            }
            var reactor = ReactorData.getReactorByID(Integer.parseInt(args[1]));
            reactor.setPosition(chr.getPosition().deepCopy());
            reactor.setFh(chr.getFoothold());
            chr.getField().spawnLife(reactor, chr);
        }
    }

    @Command(names = {"chuc", "starforce", "sf"}, requiredType = Tester)
    public static class StarForceEquip extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Not enough args! Usage: !sf <equip position in inventory> <star force>");
                return;
            }
            Item item = chr.getEquipInventory().getItemBySlot(Short.parseShort(args[1]));
            if (item == null) {
                chr.chatMessage("No item found in slot " + args[1]);
                return;
            }
            Equip equip = (Equip) item;
            equip.setChuc(Short.parseShort(args[2]));
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"openui", "ui"}, requiredType = Tester)
    public static class OpenUI extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Needs a UI id.");
                return;
            }
            chr.write(FieldPacket.openUI(Integer.parseInt(args[1])));
        }
    }

    @Command(names = {"af", "setaf"}, requiredType = Tester)
    public static class SetAF extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("!af <equip position> <amount>");
                return;
            }
            Equip equip = (Equip) chr.getEquipInventory().getItemBySlot(Short.parseShort(args[1]));
            equip.setArc(Short.parseShort(args[2]));
            equip.updateToChar(chr);
        }
    }

    @Command(names = {"bonusSkill"}, requiredType = Tester)
    public static class UseBonusSkill extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("!bonusSkill <SkillId>");
                return;
            }
            chr.write(UserLocal.userBonusAttackRequest(Integer.parseInt(args[1])));
        }
    }

    @Command(names = {"randAreaSkill"}, requiredType = Tester)
    public static class UseRandAreaSkill extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("!randAreaSkill <SkillId>");
                return;
            }
            chr.write(UserLocal.userRandAreaAttackRequest(Util.getRandomFromCollection(chr.getField().getMobs()), Integer.parseInt(args[1])));
        }
    }

    @Command(names = {"script"}, requiredType = Tester)
    public static class StartScriptTest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("!script <type> <name>");
                return;
            }
            ScriptType st = null;
            for (ScriptType type : ScriptType.values()) {
                if (type.toString().equalsIgnoreCase(args[1])) {
                    st = type;
                    break;
                }
            }
            if (st == null) {
                StringBuilder str = new StringBuilder();
                for (ScriptType t : ScriptType.values()) {
                    str.append(t.toString()).append(", ");
                }
                String res = str.toString().substring(0, str.length() - 2);
                chr.chatMessage(String.format("Unknown script type %s, known types: %s", args[1], res));
                return;
            }
            chr.getScriptManager().startScript(0, args[2], st);
        }
    }

    @Command(names = {"inspect"}, requiredType = Admin)
    public static class getEquippedInv extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            // best accidental shutdown prevention system ever invented
            if (args.length < 2) {
                chr.chatMessage("!inspect <TargetcharName>");
                return;
            }
            String name = args[1];
            Char targetChr = Server.getInstance().getWorldById(chr.getClient().getWorldId()).getCharByName(name);
            boolean online = true;
            if (targetChr == null) {
                targetChr = charDao.getByNameAndWorld(name, chr.getAccount().getWorldId());
                if (targetChr == null) {
                    chr.chatMessage(SpeakerChannel, "Could not find that character.");
                    return;
                }
            }
            User targetUser = targetChr.getUser();
            if (targetUser == null) {
                targetUser = userDao.getById(chr.getUserId());
            }
            Account targetAccount = targetChr.getAccount();
            if (targetAccount == null) {
                targetAccount = accountDao.getByCharId(chr.getId());
            }
            Map<String, Object> customBindings = new HashMap<String, Object>();
            customBindings.put("chr", targetChr);
            customBindings.put("acc", targetAccount);
            chr.getScriptManager().startScript(2007, "adminNpc", ScriptType.Npc, customBindings);
        }
    }

    @Command(names = {"shutdown"}, requiredType = Admin)
    public static class ShutdownServer extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            // best accidental shutdown prevention system ever invented
            if (args.length < 3 || !args[2].equalsIgnoreCase("YESSHUTDOWN")) {
                chr.chatMessage("no");
                return;
            }
            Server server = Server.getInstance();
            int mins = Integer.parseInt(args[1]);
            server.shutdown(mins);
        }
    }

    @Command(names = {"cancelshutdown"}, requiredType = Admin)
    public static class CancelShutdown extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Server server = Server.getInstance();
            server.cancelShutdown();
        }
    }

    @Command(names = {"broadcast", "br"}, requiredType = GameMaster)
    public static class BroadcastMsg extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !broadcast <msg>");
                return;
            }
            StringBuilder sb = new StringBuilder(String.format("[GM %s]:", chr.getName()));
            for (int i = 1; i < args.length; i++) {
                sb.append(" ").append(args[i]);
            }
            chr.getWorld().broadcastPacket(UserLocal.chatMsg(Notice, sb.toString()));
        }
    }

    @Command(names = {"skillinfo", "skillinfomode", "si"}, requiredType = Tester)
    public static class EnterSkillInfoMode extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.setSkillInfoMode(!chr.isSkillInfoMode());
            chr.chatMessage(AdminChat, "skill info: " + chr.isSkillInfoMode());
        }
    }

    @Command(names = {"debug", "debugmode"}, requiredType = Tester)
    public static class DebugMode extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.setDebugMode(!chr.isDebugMode());
            chr.chatMessage(AdminChat, "Debug mode: " + chr.isDebugMode());
        }
    }

    @Command(names = {"tp", "teleport"}, requiredType = Tester)
    public static class Teleport extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !tp <x> <y>");
                return;
            }
            int x = Integer.parseInt(args[1]);
            int y = Integer.parseInt(args[2]);
            chr.write(FieldPacket.teleport(new Position(x, y), chr));
        }
    }

    @Command(names = {"cleardrop", "cleardrops"}, requiredType = Tester)
    public static class ClearDrops extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Field field = chr.getField();
            Set<Drop> removeDrops = new HashSet<>(field.getDrops());
            for (Drop drop : removeDrops) {
                field.removeLife(drop);
            }
        }
    }

    @Command(names = {"nxtest", "testnx"}, requiredType = Tester)
    public static class NxTest extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            // just copy pasted from Mob::getNxDropAmount
            if (args.length < 3) {
                chr.chatMessage("Usage: !testnx <level> <hp>");
                return;
            }
            int level = Integer.parseInt(args[1]);
            long hp = Long.parseLong(args[2]);
            int base = (int) ((level / 2D) * (Math.pow(hp, (1 / 7D))));
            int max = base + (base / 10);
            chr.chatMessage("Min = %d, avg = %d, max = %d", base, (base + max) / 2, max);
        }
    }

    @Command(names = {"setdamageskin", "damageskin", "setds", "ds"}, requiredType = Tester)
    public static class SetDamageSkin extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 1) {
                chr.chatMessage("Usage: <damage skin id>");
                chr.chatMessage("[INFO] damage skin ids range from 1 to 219");
                return;
            }
            String dmgSkinIdxStr = args[1];
            if (!Util.isNumber(dmgSkinIdxStr)) {
                chr.chatMessage("Usage: <damage skin id>");
                chr.chatMessage("[INFO] damage skin ids range from 1 to 219");
                return;
            }
            int dmgSkinIdx = Integer.parseInt(dmgSkinIdxStr);
            QuestManager qm = chr.getQuestManager();
            Quest q = qm.getQuestById(QuestConstants.DAMAGE_SKIN);
            if (q == null) {
                q = QuestData.createQuestFromId(QuestConstants.DAMAGE_SKIN);
                qm.addQuest(q);
            }
            q.setQrValue(dmgSkinIdxStr);
            chr.setDamageSkin(dmgSkinIdx);
            chr.write(UserPacket.setDamageSkin(chr));
            chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
        }
    }

    @Command(names = {"testparty", "party"}, requiredType = Tester)
    public static class TestParty extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            int id = chr.getId() == 1 ? 2 : 1;
            Char other = charDao.getById(id);
            Party party = chr.getParty();
            if (other == null) {
                chr.chatMessage("Make a second character.");
                return;
            }
            if (party == null) {
                chr.chatMessage("Be in a party.");
                return;
            }
//            party.addPartyMember(other);
            chr.write(WvsContext.partyResult(PartyResult.userMigration(party, chr)));
        }
    }

    @Command(names = {"sendQRvalue", "qr"}, requiredType = Admin)
    public static class SendQRValue extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 3 || !Util.isNumber(args[1])) {
                chr.chatMessage("Usage: !qr <questid> <qrValue>");
                return;
            }
            int questId = Integer.parseInt(args[1]);


            QuestManager qm = chr.getQuestManager();
            Quest q = qm.getQuestById(questId);
            if (q == null) {
                q = QuestData.createQuestFromId(questId);
                qm.addQuest(q);
            }
            q.setQrValue(args[2]);
            chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
            chr.chatMessage(String.format("Sent QRValue with  QuestId %d, QrValue %s", questId, q.getQRValue()));
        }
    }

    @Command(names = {"amountonline", "playercount", "count", "online", "onlineamount"}, requiredType = Tester)
    public static class AmountOnline extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            int total = 0;
            StringBuilder sb = new StringBuilder();
            for (World w : Server.getInstance().getWorlds()) {
                chr.chatMessage(Notice, "----------------------");
                for (Channel c : w.getChannels()) {
                    total += c.getChars().size();
                    chr.chatMessage(Notice, "Channel %s: %d players.", c.getName(), c.getChars().size());
                }
            }
            chr.chatMessage(Notice, "Total: " + total);
        }
    }

    @Command(names = {"players", "onlineplayers"}, requiredType = Tester)
    public static class Players extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            StringBuilder sb = new StringBuilder();
            for (World w : Server.getInstance().getWorlds()) {
                chr.chatMessage(Notice, "----------------------");
                for (Channel c : w.getChannels()) {
                    StringBuilder chars = new StringBuilder();
                    for (Char aChar : c.getChars().values()) {
                        chars.append(aChar.getName().replace("l", "L"))
                                .append("(")
                                .append(aChar.getOffenseManager().getTrust());
                        if (aChar.getInstance() != null) {
                            chars.append(", I)");
                        }
                        chars.append("), ");
                    }
                    chr.chatMessage(Notice, "Channel %s: %s.", c.getName(),
                            chars.substring(0, chars.length() != 0 ? chars.length() - 2 : 0));
                }
            }
        }
    }

    @Command(names = {"mapplayers", ""}, requiredType = Tester)
    public static class MapPlayers extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            StringBuilder sb = new StringBuilder();
            for (World w : Server.getInstance().getWorlds()) {
                chr.chatMessage(Notice, "----------------------");
                for (Channel c : w.getChannels()) {
                    StringBuilder chars = new StringBuilder();
                    for (Char aChar : c.getChars().values()) {
                        if (aChar.getFieldID() == chr.getFieldID()) {
                            chars.append(aChar.getName().replace("l", "L"))
                                    .append("(")
                                    .append(aChar.getOffenseManager().getTrust());
                            if (aChar.getInstance() != null) {
                                chars.append(", I)");
                            }
                            chars.append("), ");
                        }
                    }
                    chr.chatMessage(Notice, "Channel %s: %s.", c.getName(),
                            chars.substring(0, chars.length() != 0 ? chars.length() - 2 : 0));
                }
            }
        }
    }

    @Command(names = {"ptinfo", "partyinfo"}, requiredType = Tester)
    public static class PartyInfo extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Party party = chr.getParty();
            if (party != null) {
                int i = 0;
                for (PartyMember pm : party.getPartyMembers()) {
                    if (pm == null) {
                        chr.chatMessage("Player %d: null", i);
                    } else {
                        chr.chatMessage("Player %d: name = %s, field = %d, channel = %d, online = %s",
                                i, pm.getCharName(), pm.getFieldID(), pm.getChannel(), pm.isOnline());
                    }
                    i++;
                }
            }
        }
    }

    @Command(names = {"warptoplayer", "warpto"}, requiredType = Tester)
    public static class WarpToPlayer extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !warpto <playername>");
                return;
            }
            String targetName = args[1];
            int worldID = chr.getClient().getChannelInstance().getWorldId().getVal();
            World world = Server.getInstance().getWorldById(worldID);
            Char targetChr = world.getCharByName(targetName);

            // Target doesn't exist
            if (targetChr == null) {
                chr.chatMessage(String.format("%s is not online.", targetName));
                chr.dispose();
                return;
            }

            Position targetPosition = targetChr.getPosition();

            Field targetField = targetChr.getField();
            if (targetChr.getChannel() != chr.getChannel()) {
                // change channel & warp
                int fieldId = targetChr.getFieldID();
                chr.setInstance(null);
                chr.changeChannelAndWarp(targetChr.getChannel(), fieldId);

            } else if (targetChr.getFieldID() != chr.getFieldID()) {
                // warp & teleport
                chr.setInstance(null);
                chr.warp(targetField);
                chr.write(FieldPacket.teleport(targetPosition, chr));
            } else {
                // teleport
                chr.write(FieldPacket.teleport(targetPosition, chr));
            }
        }
    }

    @Command(names = {"warptouser", "warpuser"}, requiredType = Tester)
    public static class WarpToUser extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !warpto <username>");
                return;
            }
            String targetName = args[1];
            int worldID = chr.getClient().getChannelInstance().getWorldId().getVal();
            World world = Server.getInstance().getWorldById(worldID);

            var userDb = userDao.getByName(targetName);
            var user = world.getUserById(userDb.getId());

            // Target doesn't exist
            if (user.getCurrentChr() == null) {
                chr.chatMessage(String.format("%s is not online.", targetName));
                chr.dispose();
                return;
            }

            Char targetChr = world.getCharByName(user.getCurrentChr().getName());


            Position targetPosition = targetChr.getPosition();

            Field targetField = targetChr.getField();
            if (targetChr.getChannel() != chr.getChannel()) {
                // change channel & warp
                int fieldId = targetChr.getFieldID();
                chr.setInstance(null);
                chr.changeChannelAndWarp(targetChr.getChannel(), fieldId);

            } else if (targetChr.getFieldID() != chr.getFieldID()) {
                // warp & teleport
                chr.setInstance(null);
                chr.warp(targetField);
                chr.write(FieldPacket.teleport(targetPosition, chr));
            } else {
                // teleport
                chr.write(FieldPacket.teleport(targetPosition, chr));
            }
        }
    }

    @Command(names = {"warpmap", "warpfield"}, requiredType = GameMaster)
    public static class WarpMap extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Incorrect usage! Usage: !warpmap <fieldId>");
                return;
            }

            var fieldId = Integer.parseInt(args[1]);

            var fieldInfo = FieldData.getFieldInfoById(fieldId);
            if (fieldInfo == null) {
                chr.chatMessage("Could not find field " + fieldId);
                return;
            }

            var chrs = new HashSet<>(chr.getField().getChars());
            for (var c : chrs) {
                c.warp(fieldId);
            }
        }
    }

    @Command(names = {"guildstat", "setguildstat"}, requiredType = Tester)
    public static class SetGuildStat extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            Guild guild = chr.getGuild();
            if (guild == null) {
                chr.chatMessage("Be in a guild first.");
                return;
            }
            GuildMember gm = guild.getMemberByChar(chr);
            if (gm == null) {
                chr.chatMessage("You are not a member of your guild.");
                return;
            }
            if (args.length < 4) {
                chr.chatMessage("Usage: !guildstat <level> <ggp> <igp>");
                return;
            }
            guild.setLevel(Integer.parseInt(args[1]));
            guild.setGgp(Integer.parseInt(args[2]));
            gm.setIgp(Integer.parseInt(args[3]));
            guild.updateToMembers();
        }

    }

    @Command(names = {"calcdamage", "calc"}, requiredType = Tester)
    public static class ShowDamageCalc extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.setShowDamageCalc(!chr.isShowDamageCalc());
            chr.chatMessage(Notice2, "Showing damage calculation is now %s.", chr.isShowDamageCalc() ? "on" : "off");
        }
    }

    @Command(names = {"pnpc"}, requiredType = GameMaster)
    public static class PNPC extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !pnpc <id>");
                return;
            }
            int id = Integer.parseInt(args[1]);
            Npc npc = NpcData.getNpcDeepCopyById(id);
            if (npc == null) {
                chr.chatMessage("Could not find an npc with that ID.");
                return;
            }
            Field field = chr.getField();
            Position pos = chr.getPosition();
            npc.setPosition(pos.deepCopy());
            npc.setCy(chr.getPosition().getY());
            npc.setRx0(chr.getPosition().getX() + 50);
            npc.setRx1(chr.getPosition().getX() - 50);
            npc.setFh(chr.getFoothold());
            npc.setNotRespawnable(true);
            if (npc.getField() == null) {
                npc.setField(field);
            }
            field.spawnLife(npc, null);
            log.debug("npc has id " + npc.getObjectId());

            DatabaseManager.executeInsert("INSERT INTO npc (npcid,mapid,x,y,cy,rx0,rx1,fh) VALUES (?,?,?,?,?,?,?,?)",
                    id,
                    field.getId(),
                    pos.getX(),
                    pos.getY(),
                    npc.getCy(),
                    npc.getRx0(),
                    npc.getRx1(),
                    npc.getFh());
        }
    }

    @Command(names = {"forcechase"}, requiredType = GameMaster)
    public static class ForceChase extends AdminCommand {
        public static void execute(Char chr, String[] args) {

            for (Mob m : chr.getField().getMobs()) {
                chr.getField().broadcastPacket(MobPool.forceChase(m.getObjectId(), false));
            }

        }
    }

    @Command(names = {"setcontroller"}, requiredType = GameMaster)
    public static class SetController extends AdminCommand {
        public static void execute(Char chr, String[] args) {

            String chrName = args[1];

            Char newController = chr.getField().getCharByName(chrName);
            if (newController == null) {
                chr.chatMessage("Character not found");
                return;
            }

            for (Mob m : chr.getField().getMobs()) {
                m.notifyControllerChange(newController);
                chr.getField().putLifeController(m, newController);
            }

        }
    }

    @Command(names = {"mobcontroller"}, requiredType = GameMaster)
    public static class MobController extends AdminCommand {
        public static void execute(Char chr, String[] args) {

            String chrName = args[1];

            for (Mob m : chr.getField().getMobs()) {
                Char controller = m.getField().getLifeToControllers().get(m);
                chr.chatMessage(m.getObjectId() + " : " + controller.getName());
            }

        }
    }

    @Command(names = {"charinfo", "cinfo"}, requiredType = Admin)
    public static class CharInfo extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length <= 1) {
                chr.chatMessage("Usage: !cinfo <character name>");
                return;
            }
            var targetname = args[1];
            World w = chr.getWorld();
            Char target = w.getCharByName(targetname);
            if (target == null) {
                chr.chatMessage("Could not find character.");
                return;
            }

            Map<BaseStat, Integer> tbs = target.getTotalBasicStats();
            chr.chatMessage(Notice2, String.format("%s(%d)", target.getName(), target.getId()));
            chr.chatMessage(Notice2, "Ping: %d, Str: %d (%d%%), Int: %d (%d%%), Dex: %d (%d%%), Luk: %d (%d%%), " +
                            "Att: %d (%d%%), Matt: %d (%d%%), HP: %d (%d%%), MP: %d (%d%%), AttSpeed: %d, EXP: %d%%, Mesos: %d%%, Drop: %d%%.",
                    target.getClient().getPing(),
                    tbs.get(BaseStat.str),
                    tbs.get(BaseStat.strR),
                    tbs.get(BaseStat.inte),
                    tbs.get(BaseStat.intR),
                    tbs.get(BaseStat.dex),
                    tbs.get(BaseStat.dexR),
                    tbs.get(BaseStat.luk),
                    tbs.get(BaseStat.lukR),
                    tbs.get(BaseStat.pad),
                    tbs.get(BaseStat.padR),
                    tbs.get(BaseStat.mad),
                    tbs.get(BaseStat.madR),
                    tbs.get(BaseStat.mhp),
                    tbs.get(BaseStat.mhpR),
                    tbs.get(BaseStat.mmp),
                    tbs.get(BaseStat.mmpR),
                    tbs.get(BaseStat.booster),
                    tbs.get(BaseStat.expR),
                    tbs.get(BaseStat.mesoR),
                    tbs.get(BaseStat.dropR)
            );
        }
    }

    @Command(names = {"bosscd"}, requiredType = Tester)
    public static class BossCd extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            Char target = chr;
            if (args.length > 1) {
                int targetId = Integer.parseInt(args[1]);
                Char o = chr.getWorld().getCharByID(targetId);
                if (o == null) {
                    chr.chatMessage("Could not find character.");
                    return;
                }
                target = o;
            }

            target.getAccount().getBossCooldowns().clear();
            target.chatMessage("Reset all boss cooldowns.");
        }
    }

    @Command(names = {"resetallbosscd", "allbosscd"}, requiredType = Admin)
    public static class ResetBossCd extends AdminCommand {
        public static void execute(Char chr, String[] args) {

            for (World w : Server.getInstance().getWorlds()) {
                for (Channel c : w.getChannels()) {
                    for (Char zChr : c.getChars().values()) {
                        zChr.getAccount().getBossCooldowns().clear();
                        zChr.chatMessage("Reset all boss cooldowns.");
                    }
                }
            }
        }
    }

    @Command(names = {"rp", "randomportal"}, requiredType = Tester)
    public static class RandomPortalTest extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            // 50% chance for inferno/yellow portal
            Foothold foothold = chr.getField().getInfo().getFootholdById(chr.getFoothold());
            Position position = foothold.getRandomPositionFromEdges(50);
            RandomPortal.Type portalType = Util.succeedProp(50)
                    ? RandomPortal.Type.PolloFritto
                    : RandomPortal.Type.Inferno;
            RandomPortal randomPortal = new RandomPortal(portalType, position, chr.getId());
            chr.getField().addLife(randomPortal);
            chr.write(RandomPortalPool.created(randomPortal));
        }
    }

    @Command(names = {"warpother"}, requiredType = GameMaster)
    public static class WarpOther extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Incorrect usage: !warpother <name> <field id to warp to>");
                return;
            }
            var name = args[1];
            var world = Server.getInstance().getWorldById(chr.getWorld().getWorldId().getVal());
            var other = world.getCharByName(name);
            if (other != null) {
                other.warp(Integer.parseInt(args[2]));
                chr.chatMessage("Warped other to %s", args[2]);
            } else {
                chr.chatMessage("%s is not online", name);
            }
        }
    }

    @Command(names = {"unstuck"}, requiredType = GameMaster)
    public static class Unstuck extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Incorrect usage: !unstuck <username>");
                return;
            }

            var user = userDao.getByName(args[1]);
            if (user == null) {
                chr.chatMessage("Could not find that user.");
                return;
            }

            Server.getInstance().removeUser(user);
        }
    }

    @Command(names = {"hide"}, requiredType = GameMaster)
    public static class Hide extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.setHidden(!chr.isHidden());
            chr.chatMessage("You are now %s.", chr.isHidden() ? "hidden" : "unhidden");
            Field field = chr.getField();
            if (chr.isHidden()) {
                chr.write(FieldPacket.adminResult(true));
                field.broadcastPacket(UserPool.userLeaveField(chr), chr);
            } else {
                chr.write(FieldPacket.adminResult(false));
                field.broadcastPacket(UserPool.userEnterField(chr), chr);
            }
        }
    }

    @Command(names = {"buffmap", "buffme"}, requiredType = Admin)
    public static class BuffMap extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            String path = "Effect/Direction23.img/effect2/";
            String effect = "5"; // Red Lightning Strike

            if (args.length < 3) {
                chr.chatMessage("Incorrect usage: !buffmap <base stat> <nValue>");
                return;
            }
            String stat = args[1];
            String val = args[2];

            if (!Util.isNumber(val)) {
                chr.chatMessage("nValue must be a number");
                return;
            }
            int value = Integer.parseInt(val);

            CharacterTemporaryStat cts = null;
            CharacterTemporaryStat cts2 = null;
            switch (stat) {
                case "pad":
                case "mad":
                    cts = IndiePAD;
                    cts2 = IndieMAD;
                    break;
                case "padr":
                case "madr":
                    cts = IndiePADR;
                    cts2 = IndieMADR;
                    break;
                case "fd":
                    cts = IndiePMdR;
                    break;
                case "ied":
                    cts = IndieIgnoreMobpdpR;
                    break;
                case "bdr":
                    cts = IndieBDR;
                    break;
                case "cr":
                    cts = IndieCr;
                    break;
                case "crDmg":
                    cts = IndieCrDmg;
                    break;
                case "exp":
                case "expr":
                    cts = IndieEXP;
                    effect = "10"; // Blue Lightning Strike
                    break;
                case "booster":
                    cts = IndieBooster;
                    effect = "10";
                    break;
            }

            if (cts == null) {
                chr.chatMessage(String.format("%s is not a valid base stat", stat));
                return;
            }

            path += effect;

            Field field = chr.getField();
            List<Char> chrs = Collections.singletonList(chr);
            if (args[0].equals("!buffmap")) {
                chrs = field.getChars();
            }

            for (Char c : chrs) {
                TemporaryStatManager tsm = c.getTemporaryStatManager();
                Option o = new Option();

                o.nOption = value;
                o.rOption = 80002601;
                o.tOption = 15 * 60;
                tsm.putCharacterStatValue(cts, o, true);
                if (cts2 != null) {
                    tsm.putCharacterStatValue(cts2, o, true);
                }
                tsm.sendSetStatPacket();

                c.write(UserPacket.effect(Effect.avatarOriented(path)));
                field.broadcastPacket(UserRemote.effect(c.getId(), Effect.avatarOriented(path)), c);
            }
        }
    }

    @Command(names = {"vp", "votepoints", "vote"}, requiredType = Tester)
    public static class VotePoints extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !vp <amount to add>");
            }

            int vp = Integer.parseInt(args[1]);
            chr.getUser().addVotePoints(vp);
        }
    }

    @Command(names = {"dp", "donationpoints"}, requiredType = Tester)
    public static class DonationPoints extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !dp <amount to add>");
            }

            int dp = Integer.parseInt(args[1]);
            chr.addNx(dp);
        }
    }

    @Command(names = {"idkboss", "idkboss"}, requiredType = Tester)
    public static class TrueHillaTest extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !idkboss <packet to send>");
            }

            int which = Integer.parseInt(args[1]);
            switch (which) {
                case 1:
                    var types = new ArrayList<Integer>();
                    types.add(1);
                    types.add(2);
                    types.add(3);
                    types.add(4);
                    chr.write(IdkBossFieldPacket.idkBossPacket_1(types));
                    break;
                case 2:
                    chr.write(IdkBossFieldPacket.idkBossPacket_2());
                    break;
                case 3:
                    chr.write(IdkBossFieldPacket.idkBossPacket_3());
                    break;
                default:
                    chr.chatMessage("Unk hilla packet " + which);
            }
        }
    }

    @Command(names = {"kaisercolour", "kaisercolor"}, requiredType = Tester)
    public static class ChangeKaiserColour extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !kaisercolour <main> <sub>");
                return;
            }
            var extern = Integer.parseInt(args[1]);
            var inner = Integer.parseInt(args[2]);
            chr.changeKaiserColour(extern, inner, false);
        }
    }

    @Command(names = {"obj", "testobj"}, requiredType = Tester)
    public static class TestObjVisible extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 3) {
                chr.chatMessage("Usage: !obj <tag> <visible>");
                return;
            }
            chr.write(MapLoadable.setMapTaggedObjectVisible(new MapTaggedObject(args[1], Integer.parseInt(args[2]) != 0)));
        }
    }

    @Command(names = {"runestone"}, requiredType = Tester)
    public static class TestRunestone extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            RuneStone runeStone = RuneStone.getRandomRuneStone(chr.getField());
            if (args.length > 1) {
                int val = Integer.parseInt(args[1]);
                RuneType runeType = RuneType.getByVal((byte) val);
                if (runeType == null) {
                    chr.chatMessage("Invalid RuneType");
                    chr.chatMessage("Spawning Random Rune instead");
                } else {
                    runeStone.setRuneType(runeType);
                }
            }
            chr.getField().setRuneStone(runeStone);
            chr.getField().broadcastPacket(FieldPacket.runeStoneAppear(runeStone));
        }
    }

    @Command(names = {"randomportal"}, requiredType = Tester)
    public static class TestRandomPortal extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            chr.spawnRandomPortal();
        }
    }

    @Command(names = {"obstacleatom", "oa"}, requiredType = Tester)
    public static class TestObstacleAtom extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length <= 4) {
                chr.chatMessage("Usage: !oa <hitboxrange> <vPerSec> <maxP> <type>");
                return;
            }

            var obstacleAtom = new ObstacleAtomInfo(Integer.parseInt(args[4]),
                    100,
                    chr.getPosition().add(new Position(0, -400)),
                    chr.getPosition(),
                    Integer.parseInt(args[2]),
                    0,
                    0,
                    0,
                    700,
                    Integer.parseInt(args[3]),
                    Integer.parseInt(args[1]),
                    400,
                    0
            );
            chr.getField().broadcastPacket(FieldPacket.createObstacle(
                    ObstacleAtomCreateType.NORMAL,
                    null,
                    null,
                    Collections.singleton(obstacleAtom)
            ));
        }
    }

    @Command(names = {"forceskill"}, requiredType = Tester)
    public static class ForceSkill extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length <= 3) {
                chr.chatMessage("Usage: !forceskill <mobid> <level> <slv>");
                return;
            }

            int mobId = Integer.parseInt(args[1]);
            int level = Integer.parseInt(args[2]);
            int slv = Integer.parseInt(args[3]);

            var life = chr.getField().getLifeByObjectID(mobId);
            if (!(life instanceof Mob)) {
                chr.chatMessage("Could not find mob.");
                return;
            }

            var mob = (Mob) life;
            var skill = mob.getSkillByMobSkillInfo(level, slv);
            if (skill != null) {
                mob.setForcedSkill(skill);
            } else {
                chr.chatMessage("Could not find skill (%d, %d) for mob template id %d.", level, slv, mob.getTemplateId());
            }
        }
    }

    @Command(names = {"weather", "weathereffect"}, requiredType = Tester)
    public static class TestWeatherEffect extends AdminCommand {
        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !weather <type>");
                return;
            }

            OutPacket outPacket = new OutPacket(OutHeader.WEATHER_EFFECT_NOTICE);

            outPacket.encodeString("This is a test text."); // Text
            outPacket.encodeInt(Integer.parseInt(args[1])); // Weather Notice Type
            outPacket.encodeInt(5000); // Duration in ms
            outPacket.encodeByte(1); // Forced Notice

            chr.write(outPacket);
        }
    }

    @Command(names = {"pull"}, requiredType = Admin)
    public static class PullScriptsTespiaRepository extends AdminCommand {

        public static void execute(Char chr, String[] args) {

            try {
                // exec batch file that git pulls from scripts tespia repository
                var batName = "Swordie_Tespia_Scripts_Pull.bat";
                File file = new File(ServerConstants.BAT_DIR + "/");
                Runtime.getRuntime().exec("cmd /c " + batName, null, file);

                // clear scripts
                ScriptManagerImpl.clear();

                // notify character of success
                chr.chatMessage(AdminChat, "Successfully Pulled from Swordie Tespia Scripts.");
                chr.chatMessage(AdminChat, "Cleared Scripts Cache");

            } catch (IOException e) {
                e.printStackTrace();

                // notify character of failure
                chr.chatMessage(AdminChat, "Failed to Pull from Swordie Tespia Scripts:");
                chr.chatMessage(AdminChat, e.getMessage());
            }
        }
    }

    @Command(names = {"rankings"}, requiredType = Tester)
    public static class RefreshRankings extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            RankingModule.refresh();
            chr.chatMessage(AdminChat, "Rankings refreshed");
        }
    }

    @Command(names = {"ssb", "changessb"}, requiredType = Admin)
    public static class ChangeSSB extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            var currentSsb = SSBConstants.CURRENT_SSB;

            if (args.length < 2) {
                chr.chatMessage("Usage: !ssb <num>");
                chr.chatMessage("Current SSB: #%s", currentSsb);
                return;
            }

            int newSsb = Integer.parseInt(args[1]);

            SSBConstants.CURRENT_SSB = newSsb;

            if (SSBConstants.getCurrentSSBInfo() == null) {
                SSBConstants.CURRENT_SSB = currentSsb;
                chr.chatMessage("Invalid SSB num (%d)! Put it back to %d.", newSsb, currentSsb);
            }
        }
    }

    @Command(names = {"checkban", "baninfo"}, requiredType = Admin)
    public static class CheckBan extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !checkban/baninfo <charname>");
                return;
            }

            var name = args[1];
            var other = charDao.getByNameAndWorld(name, chr.getAccount().getWorldId());

            if (other == null) {
                chr.chatMessage("Could not find char %s", name);
                return;
            }

            var user = userDao.getById(other.getUserId());
            if (user == null) {
                chr.chatMessage("Could not find user of char %s", name);
                return;
            }

            chr.chatMessage("[Char %s, User %s] Ban reason: %s, Ban expire date: %s", other.getName(), user.getName(), user.getBanReason(), user.getBanExpireDate());
        }
    }

    @Command(names = {"npcspecialaction"}, requiredType = Admin)
    public static class NpcSpecialAction extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 4) {
                chr.chatMessage("Usage: !npcspecialaction <npc template id> <special action name>");
                return;
            }
            var templateId = Integer.parseInt(args[1]);
            var action = args[2];
            var duration = Integer.parseInt(args[3]);

            for (var npc : chr.getField().getNpcs()) {
                if (npc.getTemplateId() == templateId) {
                    chr.write(NpcPool.npcSetSpecialAction(npc.getObjectId(), action, duration));
                }
            }
        }
    }

    @Command(names = {"sm", "surprisemission"}, requiredType = Admin)
    public static class SurpriseMissionCommand extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            var mission = chr.getSurpriseMission();
            if (mission != null) {
                SurpriseMissionModule.completeSurpriseMission(chr);
            } else {
                SurpriseMissionModule.startSurpriseMission(chr);
            }
        }
    }

    @Command(names = {"ownership"}, requiredType = Admin)
    public static class FieldOwnershipCommand extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            chr.chatMessage(chr.getField().getFieldOwnershipManager().toString());
        }
    }

    @Command(names = {"fieldevent"}, requiredType = Admin)
    public static class FieldeventCommand extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            var field = chr.getField();
            var arg = args[1];
            var timeS = Integer.parseInt(args[2]);

            switch (arg) {
                case "slime":
                    var bcse = new BlackCrescendoSlimeEvent(field, timeS);
                    bcse.setup();
                    break;
                case "gargoyle":
                    var dgge = new DarkGeminiGargoyleEvent(field, timeS);
                    dgge.setup();
                    break;
                case "wolf":
                    var dwe = new DarkWolfEvent(field, timeS);
                    dwe.setup();
                    break;
                case "flower":
                    var ife = new IllusionFlowerEvent(field, timeS);
                    ife.setup();
                    break;
                case "butterfly":
                    var sbe = new ShadowButterflyEvent(field, timeS);
                    sbe.setup();
                    break;
            }
        }
    }

    @Command(names = {"tag", "tagitem"}, requiredType = Admin)
    public static class TagItem extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !tag <equipPos>");
                return;
            }

            var itemPos = Integer.parseInt(args[1]);
            var item = chr.getEquipInventory().getItemBySlot(itemPos);
            if (item instanceof Equip equip) {
                equip.setOwner(chr.getName());
                equip.updateToChar(chr);
            } else {
                chr.chatMessage("Could not find item.");
            }
        }
    }

    @Command(names = {"fieldeffect"}, requiredType = Admin)
    public static class TestFieldEffect extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 2) {
                chr.chatMessage("Usage: !fieldeffect <type> <string> <string2> <string3> <arg1> <arg2> <arg3> <arg4> <arg5> <arg6> <arg7> <arg8> <arg9> <arg10> <string4>");
                return;
            }

            chr.write(FieldPacket.fieldEffect(FieldEffect.of(Integer.parseInt(args[1]), args[2], args[3], args[4], args[5], Integer.parseInt(args[6]), Integer.parseInt(args[7]), Integer.parseInt(args[8]), Integer.parseInt(args[9]), Integer.parseInt(args[10]), Integer.parseInt(args[11]), Integer.parseInt(args[12]), Integer.parseInt(args[13]), Integer.parseInt(args[14]), Integer.parseInt(args[15]))));
        }

    }

    @Command(names = {"actionbar"}, requiredType = Admin)
    public static class ActionBar extends AdminCommand {

        public static void execute(Char chr, String[] args) {
            if (args.length < 1) {
                chr.chatMessage("Usage: !actionbar <type>");
                return;
            }
            chr.getScriptManager().setActionBar(true, ActionBarType.getByVal(Integer.parseInt(args[1])));
        }

    }
}
