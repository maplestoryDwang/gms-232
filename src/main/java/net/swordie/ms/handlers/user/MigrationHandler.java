package net.swordie.ms.handlers.user;

import net.swordie.ms.Server;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.HyperTPRock;
import net.swordie.ms.client.character.damage.DamageSkinType;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.skills.TownPortal;
import net.swordie.ms.client.friend.result.FriendResult;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.NpcData;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.TransferInfo;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.shop.cashshop.CashShop;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Collection;
import java.util.HashMap;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static net.swordie.ms.enums.ChatType.Notice2;

public class MigrationHandler {

    private static final Logger log = LogManager.getLogger();

    private static final Lock transferLock = new ReentrantLock();
    private static final long STATE_WAIT_TIMEOUT = 120000; // 2 minutes

    @Handler(op = InHeader.MIGRATE_IN)
    public static void handleMigrateIn(Client c, InPacket inPacket) {
        int worldId = inPacket.decodeInt();
        int charId = inPacket.decodeInt();
        byte[] machineID = inPacket.decodeArr(16);

        int channelId;
        Client oldClient;
        User user;
        synchronized (transferLock) {
            var info = Server.getInstance().getTransferInfo(charId, worldId);
            if (info == null) {
                // someone connecting without us expecting them to
                log.error(String.format("[CharId: %d] Logged in without having a transfer.", charId));
                c.close();
                return;
            }

            synchronized (info.getState()) {
                try {
                    while (info.getState().getState() != TransferInfo.State.Removed) {
                        info.getState().wait(STATE_WAIT_TIMEOUT); // 2 locks is intended
                        if (info.getState().getState() != TransferInfo.State.Removed) {
                            // We timed out
                            log.error(String.format("[CharId: %d] Timed out while waiting for state change.", charId));
                            c.close();
                            return;
                        }
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

            channelId = info.getNewChannel().getChannelId();
            oldClient = info.getClient();
            if (!oldClient.hasCorrectMachineID(machineID) || !oldClient.getIP().equals(c.getIP())) {
                log.error(String.format("[CharId: %d] Logged in without having the correct ip or hwid.", charId));
                c.write(WvsContext.returnToTitle());
                return;
            }
            user = oldClient.getUser();

            if (user.getBanExpireDate() != null && !user.getBanExpireDate().isExpired())
            {
                log.error(String.format("[CharId: %d] Logged in while being banned.", charId));
                c.write(WvsContext.returnToTitle());
                c.close();
                return;
            }

            // Only remove transfer after we added the user, so there's no 'gap'
            Server.getInstance().addUser(user);
            user.setInGame(true);
            Server.getInstance().getWorldById(worldId).getChannelById(channelId).removeClientFromTransfer(charId);
            info.setState(TransferInfo.State.Complete);
        }

        c.setMachineID(machineID);
        c.setOldChannel(oldClient.getOldChannel());
        c.setUser(user);
        Account acc = oldClient.getAccount();
        c.setAccount(acc);
        c.setChannel(channelId);
        c.setWorldId((byte) worldId);
        c.setChannelInstance(Server.getInstance().getWorldById(worldId).getChannelById(channelId));
        Char chr = oldClient.getChr();
        if (chr == null || chr.getId() != charId) {
            chr = acc.getCharById(charId);
        }
        chr.setChangingChannel(false);
        user.setCurrentChr(chr);
        user.setCurrentAcc(acc);
        chr.setAccount(acc);
        chr.setUser(user);
        chr.setClient(c);
        acc.setCurrentChr(chr);
        chr.initBeforeWarp();
        c.setChr(chr);
        c.getChannelInstance().addChar(chr);
        chr.setInstance(null);

        Field field = chr.getOrCreateFieldByCurrentInstanceType(chr.getFieldID() <= 0 ? 100000000 : chr.getFieldID());

        if (Server.OPCODE_ENCRYPTION) {
            c.sendOpcodeEncryption();
        }


        if (chr.getHP() <= 0) { // automatically revive when relogging
            chr.heal(chr.getMaxHP() / 2, false, true);
        }
        if (chr.getPartyID() != 0) {
            Party party = c.getWorld().getPartybyId(chr.getPartyID());
            if (party == null || !party.hasPartyMember(chr.getId())) {
                chr.setPartyID(0);
            } else {
                chr.setParty(party);
            }
        }

        // blessing has to be split up, as adding skills before SetField is send will crash the client
        chr.initBlessingSkillNames();


        chr.warp(field, true);

        if (chr.getSurpriseMission() != null) {
            SurpriseMissionModule.showSurpriseMissionToClient(chr, chr.getSurpriseMission());
        }

        chr.setOnline(true); // v195+: respect 'invisible login' setting

        chr.write(Login.sendUiPermissions());
        chr.initBlessingSkills();
        c.write(WvsContext.updateEventNameTag(new int[]{}));
        if (chr.getGuild() != null) {
            chr.setGuild(chr.getClient().getWorld().getGuildByID(chr.getGuild().getId()));
        }

        if (chr.getFuncKeyMap() != null && chr.getFuncKeyMap().size() > 0) {
            if (JobConstants.isBeastTamer(chr.getJob())) {
                c.write(FuncKeyMappedMan.beastTamerFuncKeyMappedManInit(chr.getFuncKeyMap()));
            } else {
                c.write(FuncKeyMappedMan.funcKeyMappedManInit(chr.getFuncKeyMap().get(0)));
            }
        }

        c.write(FieldPacket.quickslotInit(chr.getQuickslotKeys()));
        chr.initPetPotions();
        if (chr.getFamiliarCodexManager() != null) {
            chr.getFamiliarCodexManager().initQuestsForSlots();
        }

        chr.setBulletIDForAttack(chr.calculateBulletIDForAttack());

        if (!chr.isInCashShop()) {
            c.write(WvsContext.friendResult(FriendResult.loadFriends(chr.getAllFriends())));
            c.write(WvsContext.macroSysDataInit(chr.getMacros()));
            c.write(UserLocal.damageSkinSaveResult(DamageSkinType.Req_SendInfo, null, chr));
        }

        acc.getMonsterCollection().init(chr);
        chr.getOffenseManager().setChr(chr);
        chr.getJobHandler().giveHyperAfBuff();
        chr.doHackFixes();
        chr.getUnionRaid().updateTotalDamageDone(chr, true);
        c.requestResolution();

        if (chr.getQuestManager().getQuestById(QuestConstants.POWER_CRYSTAL_QUEST) == null) {
            chr.getScriptManager().startQuestNoCheck(QuestConstants.POWER_CRYSTAL_QUEST);
        }
        chr.getQuestManager().getQuestById(QuestConstants.POWER_CRYSTAL_QUEST).setQrValue("count=" + chr.getAccount().getRemainingEntries(DailyEntry.PowerCrystal) +";max=" + QuestConstants.POWER_CRYSTAL_WEEKLY_COUNT +";type=2");
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(chr.getQuestManager().getQuestById(QuestConstants.POWER_CRYSTAL_QUEST))));


        if (!chr.isInit()) {
            LinkSkillsModule.initLinkSkills(acc, chr);

            chr.login();

            chr.setInit(true);
        }
    }

    @Handler(op = InHeader.USER_TRANSFER_FIELD_REQUEST)
    public static void handleUserTransferFieldRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (inPacket.getUnreadAmount() == 0) {
            // Coming back from the cash shop

            chr.getAvatarData().getCharacterStat().setPosMap(chr.getPreviousFieldID());
            chr.setInCashShop(false);
            chr.setChangingChannel(true);
            c.getChannelInstance().addClientInTransfer(c.getChannelInstance(), c.getChannelInstance(), chr.getId(), c);
            c.write(ClientSocket.migrateCommand(true, (short) c.getChannelInstance().getPort()));
            return;
        }

        byte fieldKey = inPacket.decodeByte();
        int targetField = inPacket.decodeInt();
        String portalName = inPacket.decodeString();
        int x = inPacket.decodeShort();
        int y = inPacket.decodeShort();

        var field = chr.getField();
        var fieldInfo = field.getInfo();
        if (portalName != null && !"".equals(portalName)) {
            Portal portal = fieldInfo.getPortalByName(portalName);
            if (portal == null) {
                chr.chatMessage("This portal seems to lead to nowhere...");
                log.error(String.format("Could not find portal %s, fieldId %s", portalName, field.getId()));
                return;
            }
            if (!portal.getEnabled()) {
                return;
            }
            if (portal.getScript() != null && !portal.getScript().equals("")) {
                chr.getScriptManager().startScript(portal.getId(), portal.getScript(), ScriptType.Portal);
            } else {
                Field toField = chr.getOrCreateFieldByCurrentInstanceType(portal.getTargetMapId());
                if (toField == null) {
                    return;
                }
                Portal toPortal = toField.getInfo().getPortalByName(portal.getTargetPortalName());
                if (toPortal == null) {
                    toPortal = toField.getInfo().getPortalByName("sp");
                }
                chr.warp(toField, toPortal);
            }
        } else if (chr.getHP() <= 0) {
            // Character is dead, respawn request
            inPacket.decodeByte(); // always 0
            byte tarfield = inPacket.decodeByte(); // ?
            byte reviveType = inPacket.decodeByte();
            int returnMap = fieldInfo.getReturnMap();
            switch (reviveType) {
                // so far only got 0?
            }

            // buff freezer logic
            var buffProtector = chr.getBuffProtectorItem();
            if (buffProtector != null) {
                chr.setBuffProtector(true);
                chr.consumeItem(buffProtector);
                chr.write(UserLocal.setBuffProtector(buffProtector.getItemId(), true));
            } else {
                chr.getTemporaryStatManager().removeAllStats();
            }

            int deathcount = chr.getDeathCount();
            if (deathcount > 0) {
                deathcount--;
                chr.setDeathCount(deathcount);
                chr.write(UserLocal.deathCountInfo(deathcount));
                chr.write(FieldPacket.teleport(chr.getPosition(), chr));
                if(FieldConstants.isAlwaysRespawnInReturnMap(chr.getFieldID())) {
                     chr.warp(chr.getOrCreateFieldByCurrentInstanceType(returnMap));
                }
            } else {
                if (chr.getInstance() != null) {
                    chr.getInstance().removeChar(chr);
                }
                if (chr.getTransferField() == targetField && chr.getTransferFieldReq() == chr.getField().getId()) {
                    Field toField = chr.getOrCreateFieldByCurrentInstanceType(chr.getTransferField());
                    if (toField != null && chr.getTransferField() > 0) {
                        chr.warp(toField);
                    }
                    chr.setTransferField(0);
                    return;
                } else {
                    returnMap = fieldInfo.getForcedReturn();
                    if (returnMap >= 999999999) {
                        returnMap = fieldInfo.getReturnMap();
                    }
                    chr.warp(chr.getOrCreateFieldByCurrentInstanceType(returnMap));
                }
            }
            chr.heal(chr.getMaxHP(), false, true);
            chr.setBuffProtector(false);
            if (chr.getJobHandler() != null) {
                chr.getJobHandler().handleRevive();
            }
        } else if (chr.getTransferField() == targetField && chr.getTransferFieldReq() == chr.getField().getId()) {
            Field toField = chr.getOrCreateFieldByCurrentInstanceType(chr.getTransferField());
            if (toField != null && chr.getTransferField() > 0) {
                chr.warp(toField);
            }
            chr.setTransferField(0);
        }
    }

    @Handler(op = InHeader.USER_PORTAL_SCRIPT_REQUEST)
    public static void handleUserPortalScriptRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        byte portalID = inPacket.decodeByte();
        String portalName = inPacket.decodeString();
        Portal portal = chr.getField().getInfo().getPortalByName(portalName);
        String script = portalName;
        if (portal != null) {
            portalID = (byte) portal.getId();
            script = "".equals(portal.getScript()) ? portalName : portal.getScript();
            chr.getScriptManager().startScript(portalID, script, ScriptType.Portal);
        } else {
            chr.chatMessage("Could not find that portal.");
        }
    }

    @Handler(op = InHeader.USER_PORTAL_TELEPORT_REQUEST)
    public static void handleUserPortalTeleportRequest(Char chr, InPacket inPacket) {
        byte portalID = inPacket.decodeByte();
        String portalName = inPacket.decodeString();
        Portal portal = null;
        Field field = chr.getField();
        if (field != null && field.getInfo() != null) {
            portal = chr.getField().getInfo().getPortalByName(portalName);
        }

        Events.onPortalTeleportRequest(chr, portal);
    }

    @Handler(op = InHeader.USER_TRANSFER_CHANNEL_REQUEST)
    public static void handleUserTransferChannelRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        byte channelId = (byte) (inPacket.decodeByte() + 1);

        //If player not in any channel
        if(!Server.getInstance().isUserLoggedIn(c.getUser())){
            c.close();
        }

        if (c.getWorld().getChannelById(channelId) == null) {
            chr.chatMessage("Could not find that world.");
            return;
        }
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.MigrateLimit.getVal()) > 0
                || channelId < 1 || channelId > c.getWorld().getChannels().size()) {
            chr.dispose();
            return;
        }

        chr.changeChannel(channelId);
    }

    @Handler(op = InHeader.USER_MIGRATE_TO_CASH_SHOP_REQUEST)
    public static void handleUserMigrateToCashShopRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();

        if ((field.getInfo().getFieldLimit() & FieldOption.MigrateLimit.getVal()) > 0) {
            chr.dispose();
            return;
        }

        chr.getOffenseManager().punishLieDetectorEvasion(false);
        chr.setPreviousFieldID(chr.getFieldID());
        Events.onWarp(chr, field, null);
        chr.getField().removeChar(chr);
        chr.getAvatarData().getCharacterStat().setPosMap(-1);

        if (chr.getParty() != null) {
            Party party = chr.getParty();
            PartyMember pm = party.getPartyMemberByID(chr.getId());
            pm.updateInfoByChar(chr);
            party.broadcastMigration();
        }

        chr.setInCashShop(true);
        // No changeChannel = true, as we're not actually migrating

        CashShop cs = Server.getInstance().getCashShop();
        c.write(Stage.setCashShop(chr, cs));
        c.write(CCashShop.loadLockerDone(chr.getAccount()));
        c.write(CCashShop.queryCashResult(chr));
        c.write(CCashShop.unk3());
        c.write(CCashShop.unk6());

        var map = new HashMap<Integer, Collection<Integer>>();
        map.put(ItemConstants.SURPRISE_STYLE_BOX, SSBConstants.getCurrentSsbItemIds());
        c.write(WvsContext.cashShopPreviewInfo(map));
    }

    @Handler(op = InHeader.USER_MAP_TRANSFER_REQUEST)
    public static void handleUserMapTransferRequest(Char chr, InPacket inPacket) {
        byte mtType = inPacket.decodeByte();
        byte itemType = inPacket.decodeByte();

        MapTransferType mapTransferType = MapTransferType.getByVal(mtType);
        switch (mapTransferType) {
            case DeleteListRecv: //Delete request that's received
                int targetFieldID = inPacket.decodeInt();
                HyperTPRock.removeFieldId(chr, targetFieldID);
                chr.write(WvsContext.mapTransferResult(MapTransferType.DeleteListSend, itemType, chr.getHyperRockFields()));
                break;

            case RegisterListRecv: //Register request that's received
                targetFieldID = chr.getFieldID();
                Field field = chr.getField();
                if (field == null || (field.getInfo().getFieldLimit() & FieldOption.TeleportItemLimit.getVal()) > 0) {
                    chr.chatMessage("You may not warp to that map.");
                    chr.dispose();
                    return;
                }
                HyperTPRock.addFieldId(chr, targetFieldID);
                chr.write(WvsContext.mapTransferResult(MapTransferType.RegisterListSend, itemType, chr.getHyperRockFields()));
                break;

        }
    }

    @Handler(op = InHeader.USER_FIELD_TRANSFER_REQUEST)
    public static void handleUserFieldTransferRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.TeleportItemLimit.getVal()) > 0
                || (field.getInfo().getFieldLimit() & FieldOption.MigrateLimit.getVal()) > 0
                || (field.getInfo().getFieldLimit() & FieldOption.PortalScrollLimit.getVal()) > 0
                || !field.isChannelField()) {
            chr.chatMessage("You may not warp to that map.");
            chr.dispose();
            return;
        }
        int fieldID = inPacket.decodeInt();
        if (fieldID == 7860) {
            chr.warp(GameConstants.ARDENTMILL);
        } else if (fieldID == 26015) {
            chr.warp(GameConstants.GUILD_BASE);
        }
    }

    @Handler(op = InHeader.MAKE_ENTER_FIELD_PACKET_FOR_QUICK_MOVE)
    public static void handleMakeEnterFieldPacketForQuickMove(Char chr, InPacket inPacket) {
        int templateID = inPacket.decodeInt();
        if (chr == null) {
            return;
        }
        Field field = chr.getField();
        QuickMoveInfo qmi = GameConstants.getQuickMoveInfos().stream().filter(info -> info.getTemplateID() == templateID).findFirst().orElseGet(null);
        if (qmi == null) {
            chr.dispose();
            chr.getOffenseManager().addOffense(String.format("Attempted to use non-existing quick move NPC (%d).", templateID));
            return;
        }
        if (qmi.isNoInstances() && field.isChannelField()) {
            chr.dispose();
            chr.getOffenseManager().addOffense(String.format("Attempted to use quick move (%s) in illegal map (%d).", qmi.getMsg(), field.getId()));
            return;
        }
        Npc npc = NpcData.getNpcDeepCopyById(templateID);
        String script = npc.getScripts().get(0);
        if (script == null) {
            script = String.valueOf(npc.getTemplateId());
        }
        chr.getScriptManager().startScript(npc.getTemplateId(), templateID, script, ScriptType.Npc);

    }

    @Handler(op = InHeader.ENTER_TOWN_PORTAL_REQUEST)
    public static void handleEnterTownPortalRequest(Char chr, InPacket inPacket) {
        int chrId = inPacket.decodeInt(); // Char id
        boolean town = inPacket.decodeByte() != 0;

        Field field = chr.getField();
        TownPortal townPortal = field.getTownPortalByChrId(chrId);
        if (townPortal != null) {       // TODO Using teleports, as grabbing the TownPortalPoint portal id is not working
            if (town) {
                // townField -> fieldField
                Field fieldField = townPortal.getChannel().getField(townPortal.getFieldFieldId());

                chr.warp(fieldField); // Back to the original Door
                chr.write(FieldPacket.teleport(townPortal.getFieldPosition(), chr)); // Teleports player to the position of the TownPortal
            } else {
                // fieldField -> townField
                Field returnField = townPortal.getChannel().getField(townPortal.getTownFieldId()); // Initialise the Town Map,

                chr.warp(returnField); // warp Char
                chr.write(FieldPacket.teleport(townPortal.getTownPosition(), chr));
                if (returnField.getTownPortalByChrId(chrId) == null) { // So that every re-enter into the TownField doesn't spawn another TownPortal
                    returnField.broadcastPacket(WvsContext.townPortal(townPortal)); // create the TownPortal
                    returnField.addTownPortal(townPortal);
                }
            }
        } else {
            chr.dispose();
            log.warn("Character {" + chrId + "} tried entering a Town Portal in field {" + field.getId() + "} which does not exist."); // Potential Hacking Log
        }
    }

    @Handler(op = InHeader.USER_MIGRATE_AUCTION_REQUEST)
    public static void handleUserMigrateAuctionRequest(Char chr, InPacket inPacket) {
        if (chr.getField().getInfo().isTown()) {
            chr.sendToAuctionHouse();
        } else {
            chr.getOffenseManager().addOffense("Tried to go to the auction house without being in a town.");
            chr.dispose();
        }
    }

    @Handler(op = InHeader.DIMENSIONAL_MIRROR_WARP_REQUEST)
    public static void handleDimensionalMirrorWarpRequest(Char chr, InPacket inpacket) {
        int tick = inpacket.decodeInt();
        int ID = inpacket.decodeInt();
        if (ID >= 500) {
            ID = ID - 500 + 13;
        }
        if (DimensionalMirrorType.values()[ID].getReqLv() > chr.getLevel()) {
            chr.chatMessage(Notice2, "You haven't reached the required level yet.");
            chr.dispose();
            return;

        }
        if (DimensionalMirrorType.values()[ID].getQuestID() != 0 && !chr.getQuestManager().hasQuestCompleted(DimensionalMirrorType.values()[ID].getQuestID())) {
            chr.chatMessage(Notice2, "You haven't finished the required quest yet.");
            chr.dispose();
            return;
        }
        int toMap = DimensionalMirrorType.values()[ID].getWarpTo();
        Field toField = chr.getClient().getChannelInstance().getField(toMap);
        if (toField == null || !chr.getField().getInfo().isTown()) {
            chr.chatMessage("Can only warp from a town.");
            chr.dispose();
            return;
        }
        chr.warp(toField);
    }

    @Handler(op = InHeader.AUCTION_LEAVE_REQUEST)
    public static void handleAuctionLeaveRequest(Char chr, InPacket inPacket) {
        var c = chr.getClient();
        chr.getAvatarData().getCharacterStat().setPosMap(chr.getPreviousFieldID());
        chr.setInAuctionHouse(false);
        chr.setChangingChannel(true);
        chr.setLastAuctionCriteria(null);
        c.getChannelInstance().addClientInTransfer(c.getChannelInstance(), c.getChannelInstance(), chr.getId(), c);
        chr.write(ClientSocket.migrateCommand(true, (short) c.getChannelInstance().getPort()));
    }

    @Handler(op = InHeader.USER_TRANSFER_FREE_MARKET_REQUEST)
    public static void handleTransferFreeMarketRequest(Char chr, InPacket inPacket) {
        byte toChannelID = (byte) (inPacket.decodeByte() + 1);
        int fieldID = inPacket.decodeInt();
        if (chr.getWorld().getChannelById(toChannelID) != null && GameConstants.isFreeMarketField(fieldID)
                && GameConstants.isFreeMarketField(chr.getField().getId())) {
            Field toField = chr.getClient().getChannelInstance().getField(fieldID);
            if (toField == null) {
                chr.dispose();
                return;
            }
            int currentChannelID = chr.getClient().getChannel();
            if (currentChannelID != toChannelID) {
                chr.changeChannelAndWarp(toChannelID, fieldID);
            } else {
                chr.warp(toField);
            }
        }

        inPacket.decodeInt(); // tick
    }

    @Handler(op = InHeader.USER_CLIENT_RESOLUTION_RESULT)
    public static void handleUserClientResolutionResult(Client c, InPacket inPacket) {
        int resolutionTypeVal = inPacket.decodeShort();
        ResolutionType resolutionType = ResolutionType.getByVal(resolutionTypeVal);
        if (resolutionType != null) {
            c.setResolution(resolutionType);
        }
    }
}
