package net.swordie.ms.handlers;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.BroadcastMsg;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.jobs.JobManager;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Login;
import net.swordie.ms.connection.packet.MapLoadable;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.CashItemType;
import net.swordie.ms.enums.CharNameResult;
import net.swordie.ms.enums.LoginType;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.loaders.ForbiddenWordsData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.MapTaggedObject;
import net.swordie.orm.dao.AccountDao;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static net.swordie.ms.enums.InvType.EQUIPPED;

/**
 * Created on 4/28/2017.
 */
public class LoginHandler {
    private static final Logger log = LogManager.getRootLogger();

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final AccountDao accountDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    private static final Lock userLoggedInLock = new ReentrantLock();

    @Handler(op = InHeader.PERMISSION_REQUEST)
    public static void handlePermissionRequest(Client c, InPacket inPacket) {
        var locale = inPacket.decodeByte();
        var version = inPacket.decodeInt();
        var versionAndMinorVersion = inPacket.decodeShort(); // xxxyy (x=major, y=minor)
        var minorVersion = versionAndMinorVersion % 100;

        if (locale != ServerConstants.LOCALE || version != ServerConstants.VERSION || !String.valueOf(minorVersion).equalsIgnoreCase(ServerConstants.MINOR_VERSION)) {
            log.info(String.format("Client %s has an incorrect version.", c.getIP()));
            c.close();
        }
    }

    @Handler(op = InHeader.APPLY_HOTFIX)
    public static void handleApplyHotfix(Client c, InPacket inPacket) {
        var clientLength = inPacket.decodeInt();
        File dataWz = new File(ServerConstants.RESOURCES_DIR + "/Data.wz");
        byte[] data = new byte[0];
        try {
            data = Files.readAllBytes(dataWz.toPath());
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (data.length == clientLength) {
            // client has latest version
            data = new byte[0];
        }
        c.write(Login.sendHotfix(data));
    }

    @Handler(ops = {InHeader.WORLD_INFO_REQUEST, InHeader.WORLD_LIST_REQUEST})
    public static void handleWorldListRequest(Client c, InPacket inPacket) {
        if (c.getAccount() != null) {
            c.setAccount(null);
            c.setUser(null);
        }
        // Map.wz\Obj\login.img\WorldSelect
        // Maybe grab this from wz
        String[] bgs = new String[]{
/*                "15st",
                "16thNewtro",
                "2019haste",
                "2019holloween",
                "2019rollingHouse",
                "2019tactical",
                "6000Event",
                "Adventure",
                "adventurePathfinder",
                "Bard",
                "Beautyroid3",
                "borderless",
                "crown",
                "default",
                "doNothing",
                "GGGShow",
                "GL_Dokkaebi",
                "glory",
                "haste",
                "isekai",
                "NatureTale",
                "PL_Beautyroid",
                "PL_Beautyroid2",
                "signboard",
                "WorldUnite",
                "zero",*/

                // "rise",
                "adele"
        };
        c.write(MapLoadable.setMapTaggedObjectVisible(Collections.singleton(
                new MapTaggedObject(String.format("%s", Util.getRandomFromCollection(bgs)), true)
        )));
        for (World world : Server.getInstance().getWorlds()) {
            c.write(Login.sendWorldInformation(world, null));
        }
        c.write(Login.sendWorldInformationEnd());
    }

    @Handler(op = InHeader.WVS_CRASH_CALLBACK)
    public static void handleWvsCrashCallback(Client c, InPacket inPacket) {
        if (c.getChr() != null) {
            c.getChr().setChangingChannel(false);
        }
    }

    @Handler(op = InHeader.SERVER_STATUS_REQUEST)
    public static void handleServerStatusRequest(Client c, InPacket inPacket) {
        c.write(Login.sendWorldInformationEnd());
    }

    @Handler(op = InHeader.WORLD_STATUS_REQUEST)
    public static void handleWorldStatusRequest(Client c, InPacket inPacket) {
        byte worldId = inPacket.decodeByte();
        c.write(Login.sendServerStatus(worldId));
    }

    @Handler(op = InHeader.SOME_CHANNEL_INFO_REQUEST)
    public static void handleUnk219_181(Client c, InPacket inPacket) {
        c.write(Login.someChannelInfoResult());
    }

    @Handler(op = InHeader.SELECT_WORLD)
    public static void handleSelectWorld(Client c, InPacket inPacket) {
        inPacket.decodeByte();
        var worldId = inPacket.decodeByte();
        var channelId = inPacket.decodeByte() + 1;
        byte type = inPacket.decodeByte();
        if (type == 0) {
            c.write(WvsContext.returnToTitle());
            return;
        }
        String token = inPacket.decodeString();
        int userId = Server.getInstance().getUserIdFromAuthToken(token, true);
        byte[] machineID = inPacket.decodeArr(16);
        int idk = inPacket.decodeInt();
        byte idk2 = inPacket.decodeByte();
        byte idk3 = inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();

        // Server restart check
        if (Server.getInstance().isInShutdown()) {
            c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage(
                    String.format("Server is restarting, so you cannot enter." +
                                    " (%d minutes remaining).",
                            Server.getInstance().getMinutesRemaining()
                    ))));
            c.write(Login.selectCharacterResult(LoginType.TempBlocked));
            return;
        }

        byte code = 0; // success code
        User user;
        boolean localIP = c.getIP().equalsIgnoreCase("127.0.0.1");
        if (localIP && userId == 0) {
            userId = 1;
            user = userDao.getById(userId);
            if (Server.getInstance().isUserLoggedIn(user)) {
                userId = 2;
            }
            user = userDao.getById(userId);
            if (Server.getInstance().isUserLoggedIn(user)) {
                userId = 3;
            }
            user = userDao.getById(userId);
            if (Server.getInstance().isUserLoggedIn(user)) {
                userId = 1;
            }
        }
        if (userId != 0) {
            user = userDao.getById(userId);
            if (user == null) {
                c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("Cannot find user. Try restarting the client and try again.")));
                c.write(Login.selectCharacterResult(LoginType.TempBlocked));
                return;
            }

            try {
                userLoggedInLock.lock();
                if (Server.getInstance().isUserLoggedIn(user)) {
                    var loggedInUser = Server.getInstance().getUserById(userId);
                    if (loggedInUser == null) {
                        loggedInUser = Server.getInstance().getUserFromTransfer(userId);
                    }
//
                    if (loggedInUser.isClientDisconnected()) {
                        var msg = "You were logged in, logging you out.";
                        loggedInUser.dropClient();
                        user.unstuck(false);
                        Server.getInstance().removeUser(loggedInUser);
                        c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage(msg)));
                        c.write(Login.selectCharacterResult(LoginType.TempBlocked));
                    } else {
                        c.write(Login.selectCharacterResult(LoginType.AlreadyConnected));
                    }
                    return;
                } else if (user.getBanExpireDate() != null && !user.getBanExpireDate().isExpired()) {
                    String banMsg = String.format("You have been banned. \r\nReason: %s \r\nExpire date: %s",
                            user.getBanReason(), user.getBanExpireDate().toLocalDateTime());
                    c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage(banMsg)));
                    c.write(Login.selectCharacterResult(LoginType.TempBlocked)); // Shows no message, but unstucks ui
                    return;
                }

                Account acc = user.getAccountByWorldId(worldId);
                if (acc == null) {
                    acc = new Account(user, worldId);
                    user.addAccount(acc);
                    accountDao.saveOrUpdate(user, acc, null); // assign id
                }
                c.setUser(user);
                c.setAccount(acc);
                user.setCurrentAcc(acc);
                user.setClient(c);
                acc.setUser(user);
                c.setChannel(channelId);
                Server.getInstance().addUser(user);
                user.setLastAliveAck(System.currentTimeMillis());
            } finally {
                userLoggedInLock.unlock();
            }

        } else {
            c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("Invalid login token. Please relogin to get a new token.")));
            c.write(Login.selectCharacterResult(LoginType.TempBlocked));
            return;
        }

        c.setWorldId(worldId);
        c.setChannel(channelId);
        c.setMachineID(machineID);

        c.write(Login.selectWorldResult(c.getUser(), c.getAccount(), code, Server.getInstance().getWorldById(worldId), true));
        c.write(Login.sendAccountInfo(user));
        c.write(Login.setPhysicalWorldId(worldId));
    }

    @Handler(op = InHeader.CHECK_DUPLICATE_ID)
    public static void handleCheckDuplicatedID(Client c, InPacket inPacket) {
        String name = inPacket.decodeString();
        CharNameResult code;
        if (!GameConstants.isValidName(name)) {
            code = CharNameResult.Unavailable_Invalid;
        } else {
            code = charDao.getByNameAndWorld(name, c.getWorldId()) == null ? CharNameResult.Available : CharNameResult.Unavailable_InUse;
        }
        c.write(Login.checkDuplicatedIDResult(name, code.getVal()));
    }

    @Handler(op = InHeader.CREATE_NEW_CHARACTER)
    public static void handleCreateNewCharacter(Client c, InPacket inPacket) {
        Account acc = c.getAccount();
        String name = inPacket.decodeString();
        int keySettingType = inPacket.decodeInt();
        int eventNewCharSaleJob = inPacket.decodeInt();
        int curSelectedRace = inPacket.decodeInt();

        CharNameResult code = null;
        var loginJob = JobConstants.LoginJob.getLoginJobById(curSelectedRace);
        if (loginJob.getFlag() == JobConstants.LoginJob.JobFlag.DISABLED.getFlag()) {
            c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("This job is currently disabled.")));
            code = CharNameResult.Unavailable_Invalid;
        }

        JobConstants.JobEnum job = loginJob.getBeginJob();

        short curSelectedSubJob = inPacket.decodeShort();
        byte gender = inPacket.decodeByte();
        byte skin = inPacket.decodeByte();

        byte itemLength = inPacket.decodeByte();
        int[] items = new int[itemLength]; //face, hair, markings, skin, overall, top, bottom, cape, boots, weapon
        for (int i = 0; i < itemLength; i++) {
            items[i] = inPacket.decodeInt();
        }
        int face = items[0];
        int hair = items[1];
        if (!ItemData.isStartingItems(items) || skin > ItemConstants.MAX_SKIN || skin < 0
                || (face < ItemConstants.MIN_FACE || face > ItemConstants.MAX_FACE && (face < ItemConstants.MIN_FACE_2 || face > ItemConstants.MAX_FACE_2))
                || (hair < ItemConstants.MIN_HAIR || hair > ItemConstants.MAX_HAIR && (hair < ItemConstants.MIN_HAIR_2 || hair > ItemConstants.MAX_HAIR_2))) {
            c.getUser().getOffenseManager().addOffense("Tried to add items unavailable on char creation.");
            code = CharNameResult.Unavailable_CashItem;
        }

        if (!GameConstants.isValidName(name) || ForbiddenWordsData.isForbiddenIGN(name)) {
            code = CharNameResult.Unavailable_Invalid;
        } else if (charDao.getByNameAndWorld(name, c.getWorldId()) != null) {
            code = CharNameResult.Unavailable_InUse;
        } else if (acc.getCharacters().size() >= ServerConstants.MAX_CHARACTERS) {
            code = CharNameResult.Unavailable_Invalid;
            c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("You are already at the maximum amount of characters on this world.")));
        }

        if (code != null) {
            c.write(Login.checkDuplicatedIDResult(name, code.getVal()));
            return;
        }

        int jobId = job.getJobId();

        Char chr = new Char(acc, name, keySettingType, eventNewCharSaleJob, jobId,
                curSelectedSubJob, gender, skin, face, hair, items);
        chr.setUserId(acc.getUser().getId());

        List<FuncKeyMap> fkms = new ArrayList<>();

        int keymaps = JobConstants.isBeastTamer(jobId) ? BeastTamer.KEYMAPS : 1;

        for (int i = 0; i < keymaps; i++) {
            fkms.add(FuncKeyMap.getDefaultMapping(keySettingType));
        }

        chr.setFuncKeyMap(fkms);

        // default quick slot keys
        chr.setQuickslotKeys(Arrays.asList(42, 82, 71, 73, 29, 83, 79, 81, 2, 3, 4, 5, 16, 17, 18, 19, 6, 7, 8, 9, 20,
                30, 31, 32, 10, 11, 33, 34, 37, 38, 49, 50));
        charDao.saveOrUpdate(acc, chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        if (curSelectedRace == JobConstants.LoginJob.DUAL_BLADE.getJobType()) {
            cs.setSubJob(1);
        }
        cs.setCharacterId(chr.getId());
        cs.setCharacterIdForLog(chr.getId());
        cs.setWorldIdForLog(acc.getWorldId());

        for (int i : chr.getAvatarData().getAvatarLook().getHairEquips()) {
            Equip equip = ItemData.getEquipDeepCopy(i, false);
            if (equip != null && equip.getItemId() >= 1000000) {
                equip.setBagIndex(ItemConstants.getBodyPartFromItem(
                        equip.getItemId(), chr.getAvatarData().getAvatarLook().getGender()));
                chr.addItemToInventory(EQUIPPED, equip, true);
            }
        }
        JobManager.getJobById(jobId, chr).setCharCreationStats(chr);

        Equip codex = ItemData.getEquipDeepCopy(1172000, false);
        codex.setInvType(EQUIPPED);
        codex.setBagIndex(BodyPart.MonsterBook.getVal());
        chr.addItemToInventory(EQUIPPED, codex, true);

        if (curSelectedRace == 15) { // Zero hack for adding 2nd weapon (removing it in hairequips for zero look)
            Equip equip = ItemData.getEquipDeepCopy(1562000, false);
            equip.setBagIndex(ItemConstants.getBodyPartFromItem(
                    equip.getItemId(), chr.getAvatarData().getAvatarLook().getGender()));
            chr.addItemToInventory(EQUIPPED, equip, true);
        }

        chr.setLocation(ServerConstants.MAX_CHARACTERS); // so new characters are appended to the end

        acc.addCharacter(chr);
        acc.applyCompletedAccountQuests(chr);

        charDao.saveOrUpdate(chr);

        c.setAuthorized(true); // character is immediately allowed to login

        c.write(Login.createNewCharacterResult(LoginType.Success, chr, true));

    }

    @Handler(op = InHeader.DELETE_CHARACTER)
    public static void handleDeleteCharacter(Client c, InPacket inPacket) {
        Account acc = c.getAccount();
        if (acc != null) {
            String pic = inPacket.decodeString();
            int charId = inPacket.decodeInt();

            Char chr = acc.getCharById(charId);
            if (chr != null) {
                acc.removeChar(chr);
                c.write(Login.sendDeleteCharacterResult(charId, LoginType.Success));
            } else {
                c.write(Login.sendDeleteCharacterResult(charId, LoginType.UnauthorizedUser));
            }
        }
    }

    @Handler(op = InHeader.CLIENT_ERROR)
    public static void handleClientError(Client c, InPacket inPacket) {
        if (c.getChr() != null) {
            c.getChr().setChangingChannel(false);
        }
        c.close();
        if (inPacket.getData().length < 8) {
            log.warn(String.format("Error: %s", inPacket));
            return;
        }
        short type = inPacket.decodeShort();
        String type_str = "Unknown?!";
        if (type == 0x01) {
            type_str = "SendBackupPacket";
        } else if (type == 0x02) {
            type_str = "Crash Report";
        } else if (type == 0x03) {
            type_str = "Exception";
        }
        int errortype = inPacket.decodeInt();
        short data_length = inPacket.decodeShort();

        int idk = inPacket.decodeInt();

        short op = inPacket.decodeShort();

        OutHeader opcode = OutHeader.getOutHeaderByOp(op);
        var chrName = c.getChr() == null ? "-" : c.getChr().getName();
        ErrorLogger.logAsClientError(String.format("[%s | Error %s] (%s / %d) Data (%s): %s", chrName, errortype, opcode, op, data_length, inPacket));
        if (opcode == OutHeader.TEMPORARY_STAT_SET || opcode == OutHeader.REMOTE_SET_TEMPORARY_STAT) {
            if (opcode == OutHeader.TEMPORARY_STAT_SET) {
                inPacket.decodeInt();
                inPacket.decodeInt();
            } else {
                // remote
                inPacket.decodeInt();
            }
            for (int i = 0; i < CharacterTemporaryStat.length; i++) {
                int mask = inPacket.decodeInt();
                for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                    if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                        ErrorLogger.logAsClientError(String.format("[Error %s] Contained stat %s", errortype, cts.toString()));
                    }
                }
            }
        } else if (opcode == OutHeader.USER_ENTER_FIELD) {
            inPacket.decodeLong();

            inPacket.decodeInt();
            inPacket.decodeInt();

            inPacket.decodeInt();
            inPacket.decodeString();
            inPacket.decodeString();

            inPacket.decodeInt();
            inPacket.decodeString();
            inPacket.decodeShort();
            inPacket.decodeByte();
            inPacket.decodeShort();
            inPacket.decodeByte();
            inPacket.decodeInt();
            inPacket.decodeInt();

            inPacket.decodeByte();

            inPacket.decodeInt();
            inPacket.decodeInt();
            inPacket.decodeInt();
            inPacket.decodeByte();
            inPacket.decodeInt();

            for (int i = 0; i < CharacterTemporaryStat.length; i++) {
                int mask = inPacket.decodeInt();
                for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                    if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                        ErrorLogger.logAsClientError(String.format("[Error] Contained stat %s", cts.toString()));
                    }
                }
            }

            inPacket.decodeArr(28);
            var job = inPacket.decodeShort(); // job
            inPacket.decodeShort(); // subJob
            inPacket.decodeInt(); // Chuc
            inPacket.decodeInt(); // Af
            if (JobConstants.isZero(job)) {
                new AvatarLook(true).decode(inPacket);
                new AvatarLook(true).decode(inPacket);
            } else {
                new AvatarLook(true).decode(inPacket);
            }
            inPacket.decodeInt(); // driver
            inPacket.decodeInt(); // passenger
            inPacket.decodeInt(); // unk
            inPacket.decodeInt(); // unk

            var loop = inPacket.decodeInt();
            for (int i = 0; i < loop; i++) {
                inPacket.decodeInt();
                inPacket.decodeInt();
            }

            inPacket.decodeInt(); // ChocoCount
            inPacket.decodeInt(); // ActiveEffectItemID
            inPacket.decodeInt(); // MonkeyEffectItemID
            var activeNickItemID = inPacket.decodeInt(); // ActiveNickItemID

            var bool = inPacket.decodeByte(); // new 188
            if (bool != 0) {
                inPacket.decodeString();
            }

            if (activeNickItemID == 3700623) {
                // CUser::DecodeCustomTitle
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeString();
                inPacket.decodeLong();
            }

            inPacket.decodeInt(); // Damage Skin
            inPacket.decodeInt(); // Prem Damage Skin
            inPacket.decodeInt(); // nUnitDamageSkin?
            inPacket.decodeString(); // dmgSkin Name
            inPacket.decodeString(); // premDmgSkin Name

            inPacket.decodeInt(); // something, dunno
            inPacket.decodeInt(); // DemonWingID
            inPacket.decodeInt(); // KaiserWingID
            inPacket.decodeInt(); // KaiserTailID
            inPacket.decodeByte(); // new 209
            inPacket.decodeInt(); // CompletedSetItemID
            inPacket.decodeShort(); // FieldSeatID

            var chairId = inPacket.decodeInt();
            ErrorLogger.logAsClientError(String.format("[Error] User sat on chair: %d", chairId));
        } else if (opcode == OutHeader.CASH_SHOP_CASH_ITEM_RESULT) {
            byte cashType = inPacket.decodeByte();
            CashItemType cit = CashItemType.getResultTypeByVal(cashType);
            ErrorLogger.logAsClientError(String.format("[Error %s] CashItemType %s", errortype, cit == null ? "Unknown" : cit.toString()));
        } else if (opcode == OutHeader.REMOTE_SET_ACTIVE_PORTABLE_CHAIR) {
            var chrId = inPacket.decodeInt();
            var chairId = inPacket.decodeInt();
            ErrorLogger.logAsClientError(String.format("[Error] User sat on chair: %d", chairId));
        } else if (opcode == OutHeader.REMOTE_MELEE_ATTACK) {
            inPacket.decodeInt();
            inPacket.decodeByte();
            inPacket.decodeByte();
            inPacket.decodeInt();
            inPacket.decodeInt();

            var skillId = inPacket.decodeInt(); // normally only if slv > 0, but usually there's a skill that e38s
            log.error("SkillId: " + skillId);

        }
    }

    @Handler(op = InHeader.PRIVATE_SERVER_PACKET)
    public static void handlePrivateServerPacket(Client c, InPacket inPacket) {
        if (inPacket.getUnreadAmount() == 4) { // hack to ignore another non-game op that throws you a bunch of random bytes
            c.write(Login.sendAuthResponse((OutHeader.PRIVATE_SERVER_PACKET.getValue()) ^ inPacket.decodeInt()));
        }
    }

    @Handler(op = InHeader.CHAR_SELECT_NO_PIC)
    public static void handleCharSelectNoPic(Client c, InPacket inPacket) {
        var user = c.getUser();
        if (!Util.isNullOrEmpty(c.getUser().getPic())) {
            user.getOffenseManager().addOffense("Tried logging in without pic while having a pic");
            return;
        }

        int characterId = inPacket.decodeInt();
        String mac = inPacket.decodeString();
        String somethingElse = inPacket.decodeString();

        String pic = inPacket.decodeString();
        c.getUser().setPicAndHash(pic);
        // Update in DB
        userDao.saveProperties(c.getUser());

        if (!user.hasCharWithId(characterId)) {
            user.getOffenseManager().addOffense("Tried logging on invalid char id " + characterId);
            c.write(Login.selectCharacterResult(LoginType.UnauthorizedUser));
            return;
        }

        if (user.getBanExpireDate() != null && !user.getBanExpireDate().isExpired())
        {
            log.error(String.format("[CharId: %d] Logged in while being banned.", characterId));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }

        byte worldId = c.getWorldId();
        int channelId = c.getChannel();

        if (c.getAccount().hasCharacter(characterId)) {
            Channel channel = Server.getInstance().getWorldById(worldId).getChannelById(channelId);
            Server.getInstance().removeCharsByUser(user);
            c.getUser().setCurrentChr(c.getAccount().getCharById(characterId));
            var world = Server.getInstance().getWorldById(worldId);
            world.getChannelById(channelId).addClientInTransfer(null, channel, characterId, c);
            c.write(Login.selectCharacterResult(LoginType.Success, (byte) 0, channel.getPort(), characterId, world));
        } else {
            c.write(Login.selectCharacterResult(LoginType.UnauthorizedUser));
            user.getOffenseManager().addOffense("Tried logging on invalid char id " + characterId + " on world " + worldId);
        }
    }

    @Handler(ops = {InHeader.CHAR_SELECT, InHeader.SELECT_CHARACTER})
    public static void handleCharSelect(Client c, InPacket inPacket) {
        int characterId = inPacket.decodeInt();
        String name = inPacket.decodeString();
        byte worldId = c.getWorldId();
        int channelId = c.getChannel();

        var user = c.getUser();

        var world = Server.getInstance().getWorldById(worldId);
        var channel = world.getChannelById(channelId);

        if (user.getBanExpireDate() != null && !user.getBanExpireDate().isExpired())
        {
            log.error(String.format("[CharId: %d] Logged in while being banned.", characterId));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }

        if (c.isAuthorized() && c.getAccount().hasCharacter(characterId) && !Server.getInstance().isInTransfer(user) && !user.isInGame()) {
            loginCharacterAndTransfer(c, characterId, user, world, channel);
        }
        // if anything is wrong, the 2nd pwd authorizer should return an error
    }

    private static void loginCharacterAndTransfer(Client c, int characterId, User user, World world, Channel channel) {
        Server.getInstance().removeCharsByUser(user);
        c.getUser().setCurrentChr(c.getAccount().getCharById(characterId));
        c.getUser().setCurrentWorld(world);
        channel.addClientInTransfer(null, channel, characterId, c);
        c.write(Login.selectCharacterResult(LoginType.Success, (byte) 0, channel.getPort(), characterId, world));
    }

    @Handler(ops = {InHeader.SELECT_CHARACTER_AFTER_CREATE})
    public static void handleSelectCharacterAfterCreate(Client c, InPacket inPacket) {
        int charId = inPacket.decodeInt();
        var online = inPacket.decodeByte() != 0;
        var hardwareId = inPacket.decodeString();
        var hardwareId2 = inPacket.decodeString();

        byte worldId = c.getWorldId();
        int channelId = c.getChannel();
        var world = Server.getInstance().getWorldById(worldId);
        var channel = world.getChannelById(channelId);

        var user = c.getUser();

        if (user.getBanExpireDate() != null && !user.getBanExpireDate().isExpired())
        {
            log.error(String.format("[CharId: %d] Logged in while being banned.", charId));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }

        if (c.isAuthorized() && c.getAccount().hasCharacter(charId)) {
            loginCharacterAndTransfer(c, charId, c.getUser(), world, channel);
        }
    }

    @Handler(op = InHeader.CHECK_SPW_REQUEST)
    public static boolean handleCheckSpwRequest(Client c, InPacket inPacket) {
        boolean success = false;
        User user = c.getUser();
        Account account = c.getAccount();
        int picEncodingType = inPacket.decodeInt();
        /* hardcoded 0, could change the encoding of pic in further patches . In 202.2 I think it did some weird things
        per encoding type + length. Got reverted in 202.3 though.
           */
        String pic = inPacket.decodeString();
        int charId = inPacket.decodeInt();
        boolean invisible = inPacket.decodeByte() != 0;
        String mac = inPacket.decodeString();
        String hwid = inPacket.decodeString();
//        int userId = inPacket.decodeInt();
        // after this: 2 strings indicating pc info. Not interested in that rn
        if (!Util.isStringBCrypt(user.getPic())) {
            user.setPicAndHash(user.getPic());
        }

        success = true;
        c.setAuthorized(success);
        return success;
    }

    @Handler(op = InHeader.CHANGE_SPW_REQUEST)
    public static void handleChangeSpwRequest(Client c, InPacket inPacket) {
        User user = c.getUser();
        String currentPic = inPacket.decodeString();
        String newPic = inPacket.decodeString();
        if (BCrypt.checkpw(currentPic, user.getPic())) {
            user.setPicAndHash(newPic);
            userDao.saveProperties(user);
        } else {
            c.write(Login.selectCharacterResult(LoginType.IncorrectPassword));
        }
    }

    @Handler(op = InHeader.AUTH_FAILURE)
    public static void handleAuthFailure(Client c, InPacket inPacket) {
        byte step = inPacket.decodeByte();
        int errorCode = inPacket.decodeInt();
        log.error(String.format("Auth failure! Login step %d, errorCode %d.", step, errorCode));
    }

    @Handler(op = InHeader.EXCEPTION_LOG)
    public static void handleExceptionLog(Client c, InPacket inPacket) {
        var lenOrSomething = inPacket.decodeInt();
        var strLen = inPacket.decodeArr(lenOrSomething);
        String str = inPacket.decodeString();
        if (!str.contains("]")) {
            var toLog = String.format("[%d] Exception log (ignore first 6 bytes of data): %s", lenOrSomething, str);
            log.error(toLog);
            ErrorLogger.logAsClientError(toLog);
            return;
        }
        String packet = str.split("[]]")[1].substring(12); // skip everything up until the opcode
        byte[] fullPacketArr = Util.getByteArrayByString(packet);
        short op = (short) ((fullPacketArr[0] & 0xFF) + ((fullPacketArr[1] & 0xFF) << 8));
        byte[] packetData = new byte[fullPacketArr.length - 2];
        System.arraycopy(fullPacketArr, 2, packetData, 0, packetData.length);
        OutHeader header = OutHeader.getOutHeaderByOp(op);
        ErrorLogger.logAsClientError(String.format("[%d] Exception log: [%s], %d/0x%X\t| %s", lenOrSomething, header, op, op, Util.readableByteArray(packetData)));
        if (header == OutHeader.TEMPORARY_STAT_SET || header == OutHeader.REMOTE_SET_TEMPORARY_STAT
                || header == OutHeader.USER_ENTER_FIELD) {
            inPacket = new InPacket(packetData);
            if (header == OutHeader.REMOTE_SET_TEMPORARY_STAT) {
                inPacket.decodeInt(); // chr id
            } else if (header == OutHeader.TEMPORARY_STAT_SET) {
                inPacket.decodeInt();
                inPacket.decodeInt();
            }
            else if (header == OutHeader.USER_ENTER_FIELD) {
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeString();
                inPacket.decodeString(); // parent name, deprecated
                // guild
                inPacket.decodeString();
                inPacket.decodeShort();
                inPacket.decodeByte();
                inPacket.decodeShort();
                inPacket.decodeByte();
                // end guild
                inPacket.decodeByte();
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeByte();
            }
            for (int i = 0; i < CharacterTemporaryStat.length; i++) {
                int mask = inPacket.decodeInt();
                for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                    if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                        log.error(String.format("Contained stat %s", cts.toString()));
                    }
                }
            }
        }
    }

    @Handler(op = InHeader.VIEW_CHANNEL_REQUEST)
    public static void handleViewChannelRequest(Client c, InPacket inPacket) {
        byte idk = inPacket.decodeByte();
        int worldId = inPacket.decodeInt();
        World world = Server.getInstance().getWorldById(worldId);
        if (world != null) {
            c.write(Login.viewChannelResult(LoginType.Success, worldId));
        } else {
            c.write(Login.viewChannelResult(LoginType.Unknown, worldId));
        }

    }

    @Handler(op = InHeader.CHAR_POSITION_CHANGE)
    public static void handleCharPositionChange(Client c, InPacket inPacket) {
        User user = c.getUser();
        Account acc = c.getAccount();
        if (acc == null) {
            return;
        }
        inPacket.decodeInt(); // accID
        if (inPacket.decodeByte() != 0) {
            int size = inPacket.decodeInt();
            for (int i = 0; i < size; i++) {
                int charId = inPacket.decodeInt();
                Char chr = acc.getCharById(charId);
                if (chr == null) {
                    user.getOffenseManager().addOffense("Tried to change order of a Char that is not linked to their account.");
                } else {
                    chr.setLocation(i);
                }
            }

            accountDao.updateLocation(acc);
        }
    }

    @Handler(op = InHeader.ALIVE_ACK)
    public static void handleAliveAck(Client c, InPacket inPacket) {
        if (c.isWaitingForAliveAck()) {
            c.setPing((System.currentTimeMillis() - c.getLastPingTime()) / 2);
        }
        if (c.getUser() != null) {
            c.getUser().setLastAliveAck(System.currentTimeMillis());
        }
        c.resetUnackedPings();
    }

    @Handler(op = InHeader.LOGOUT_WORLD)
    public static void handleLogoutWorld(Client c, InPacket inPacket) {
        var user = c.getUser();
        if (user != null) {
            if (!Server.getInstance().isInTransfer(user)) {
                Server.getInstance().removeUser(user);
            }
        }
    }
}
