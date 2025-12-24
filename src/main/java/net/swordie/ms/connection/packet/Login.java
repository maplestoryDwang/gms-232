package net.swordie.ms.connection.packet;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.ServerStatus;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.UiPermission;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.LoginType;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.World;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

/**
 * Created by Sjonnie on 2/28/2017.
 */
public class Login {

    private static final Comparator<Char> LOCATION_COMPARATOR = (Char c1, Char c2) -> {
        int res;
        int c1id = c1.getId();
        int c1loc = c1.getLocation();
        int c2id = c2.getId();
        int c2loc = c2.getLocation();
        if (c1loc == c2loc) {
            res = Integer.compare(c1id, c2id);
        } else {
            res = Integer.compare(c1loc, c2loc);
        }
        return res;
    };

    public static OutPacket sendConnect(byte[] siv, byte[] riv) {
        OutPacket outPacket = new OutPacket();

        // 0xE
        outPacket.encodeShort(2 + (2 + ServerConstants.MINOR_VERSION.length()) + 4 + 4 + 2 + 1);
        outPacket.encodeShort(ServerConstants.VERSION);
        outPacket.encodeString(ServerConstants.MINOR_VERSION);
        outPacket.encodeArr(siv);
        outPacket.encodeArr(riv);
        outPacket.encodeShort(ServerConstants.LOCALE);
        outPacket.encodeByte(false);

        return outPacket;
    }

    public static OutPacket sendAliveReq() {
        return new OutPacket(OutHeader.ALIVE_REQ.getValue());
    }

    public static OutPacket sendAuthServer(boolean useAuthServer) {
        OutPacket outPacket = new OutPacket(OutHeader.AUTH_SERVER.getValue());
        outPacket.encodeByte(useAuthServer);
        return outPacket;
    }

    public static OutPacket sendHotfix(byte[] data) {
        OutPacket outPacket = new OutPacket(OutHeader.HOTFIX.getValue());

        if (data.length == 0) {
            outPacket.encodeByte(1);
        } else {
            outPacket.encodeArr(Util.toPackedInt(data.length));
            outPacket.encodeInt(data.length); // version maybe?
            outPacket.encodeArr(data);
        }

        return outPacket;
    }

    public static OutPacket sendWorldInformation(World world, Set<Tuple<Position, String>> stringInfos) {
        // CLogin::OnWorldInformation
        OutPacket outPacket = new OutPacket(OutHeader.WORLD_INFORMATION);

        outPacket.encodeByte(world.getWorldId().getVal());
        // if ^ is >= 0, always true
        outPacket.encodeString(world.getName());
        outPacket.encodeInt(0);
        outPacket.encodeInt(world.isReboot() ? 1 : 0);
        outPacket.encodeByte(0); // bNormal (0 or >1 = recommended)
        outPacket.encodeByte(world.getWorldState());
        outPacket.encodeByte(0); // new 227: enum for small emblem to the right (1~3)
        outPacket.encodeString(world.getWorldEventDescription());
        outPacket.encodeByte(world.isCharCreateBlock());
        outPacket.encodeByte(world.getChannels().size());
        for (Channel c : world.getChannels()) {
            outPacket.encodeString(c.getName());
            outPacket.encodeInt(c.getGaugePx());
            outPacket.encodeByte(c.getWorldId().getVal());
            outPacket.encodeByte(c.getChannelId());
            outPacket.encodeByte(c.isAdultChannel());
        }
        if (stringInfos == null) {
            outPacket.encodeShort(0);
        } else {
            outPacket.encodeShort(stringInfos.size());
            for (Tuple<Position, String> stringInfo : stringInfos) {
                outPacket.encodePosition(stringInfo.getLeft());
                outPacket.encodeString(stringInfo.getRight());
            }
        }
        outPacket.encodeInt(0); // some offset
        outPacket.encodeByte(false); // connect with star planet stuff, not interested

        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket sendWorldInformationEnd() {
        OutPacket outPacket = new OutPacket(OutHeader.WORLD_INFORMATION);

        outPacket.encodeByte(-1);

        // Advertisements
        int size = 0;
        outPacket.encodeByte(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeString(""); // http://maplestory.nexon.com/MapleStory/news/2016/login_Banner.html Striking images
            outPacket.encodeString(""); // http://maplestory.nexon.com/MapleStory/news/2016/login_Banner.html Address to move
            outPacket.encodeInt(5000);  // Time
            outPacket.encodeInt(310);  // width
            outPacket.encodeInt(60); // height
            outPacket.encodeInt(235); // x
            outPacket.encodeInt(538); // y
        }

        outPacket.encodeByte(false); // NotActiveAccountDlgFocus
        outPacket.encodeInt(-1); // lockAccount Connection count

        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket viewChannelResult(LoginType type, int worldId) {
        OutPacket outPacket = new OutPacket(OutHeader.SELECT_WORLD_BUTTON);

        outPacket.encodeByte(type.getValue());
        outPacket.encodeString("Banaan1"); // new 228
        outPacket.encodeInt(worldId);
        outPacket.encodeInt(0); // ignored

        return outPacket;
    }

    public static OutPacket sendAccountInfo(User user) {
        OutPacket outPacket = new OutPacket(OutHeader.ACCOUNT_INFO_RESULT);

        outPacket.encodeByte(0); // succeed
        outPacket.encodeString("Banaan3");

        outPacket.encodeInt(user.getId());
        outPacket.encodeByte(user.getGradeCode());
        outPacket.encodeInt(user.getAccountType().getVal());

        outPacket.encodeInt(user.getVipGrade());
        outPacket.encodeByte(user.getPurchaseExp());
        outPacket.encodeString(user.getName());
        outPacket.encodeByte(user.getnBlockReason());
        outPacket.encodeByte(0); // ?
        outPacket.encodeLong(user.getChatUnblockDate());
        outPacket.encodeString(user.getCensoredNxLoginID());

        outPacket.encodeLong(0);
        outPacket.encodeInt(0);
        outPacket.encodeLong(0);
        outPacket.encodeString(""); //v25 = CInPacket::DecodeStr(iPacket_1, &nAge);
        outPacket.encodeInt(0); // new 228

        outPacket.encodeString("");

        JobConstants.encode(outPacket);

        outPacket.encodeByte(0); // bIsBeginningUser
        outPacket.encodeInt(-1);
        outPacket.encodeByte(0);
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket sendUiPermissions() {
        OutPacket outPacket = new OutPacket(OutHeader.UI_PERMISSIONS);

        // just static for now
        outPacket.encodeInt(UiPermission.PERMISSIONS.size());
        int i = 1;
        for (var perm : UiPermission.PERMISSIONS) {
            outPacket.encodeInt(i++);
            outPacket.encode(perm);
        }

        return outPacket;
    }

    public static OutPacket sendServerStatus(byte worldId) {
        OutPacket outPacket = new OutPacket(OutHeader.SERVER_STATUS.getValue());
        World world = Server.getInstance().getWorldById(worldId);
        if (world != null && !world.isFull()) {
            outPacket.encodeByte(world.getStatus().getValue());
        } else {
            outPacket.encodeByte(ServerStatus.BUSY.getValue());
        }
        outPacket.encodeByte(0); // ?

        return outPacket;
    }

    public static OutPacket selectWorldResult(User user, Account account, byte code, World world,
                                              boolean burningEventBlock) {
        OutPacket outPacket = new OutPacket(OutHeader.SELECT_WORLD_RESULT);

        outPacket.encodeByte(code);
        outPacket.encodeString("Banaan2"); // new 228
        outPacket.encodeByte(false);
        outPacket.encodeInt(world.getWorldType().ordinal());
        outPacket.encodeInt(world.getWorldType().ordinal());
        outPacket.encodeInt(world.getWorldType().ordinal()); // new 228
        outPacket.encodeInt(account.getTrunk().getSlotCount());
        outPacket.encodeByte(burningEventBlock); // bBurningEventBlock
        outPacket.encodeByte(0); // idk, but != 0 disables selecting a character
        int reserved = 0;
        outPacket.encodeInt(reserved); // Reserved size

        outPacket.encodeFT(FileTime.fromType(FileTime.Type.ZERO_TIME)); // Reserved timestamp
        for (int i = 0; i < reserved; i++) {
            // not really interested in this
            FileTime ft = FileTime.fromType(FileTime.Type.ZERO_TIME);
            outPacket.encodeInt(ft.getLowDateTime());
            ft.encode(outPacket);
        }
        boolean isEdited = false;
        outPacket.encodeByte(isEdited); // edited characters

        List<Char> chars = new ArrayList<>(account.getCharacters());
        chars.sort(LOCATION_COMPARATOR);
        int orderSize = chars.size();
        outPacket.encodeInt(orderSize);
        for (Char chr : chars) {
            // order of chars
            outPacket.encodeInt(chr.getId());
        }

        outPacket.encodeByte(chars.size());
        for (Char chr : chars) {
            chr.getAvatarData().encode(outPacket);
        }

        outPacket.encodeByte(user.getPicStatus().getVal()); // bLoginOpt
        outPacket.encodeByte(false); // bQuerySSNOnCreateNewCharacter
        outPacket.encodeInt(ServerConstants.MAX_CHARACTERS);

        outPacket.encodeInt(0); // buying char slots
        outPacket.encodeInt(-1); // nEventNewCharJob

        // Start new 196, don't see anything different aside from the name change thing
        outPacket.encodeInt(30856928);
        outPacket.encodeInt(-1490133984);
        outPacket.encodeByte(1);

        outPacket.encodeByte(false);
        outPacket.encodeByte(false); // new 200
        outPacket.encodeByte(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(-80557060);

        outPacket.encodeInt(0);
        outPacket.encodeInt(1);

        return outPacket;
    }

    public static OutPacket checkDuplicatedIDResult(String name, byte code) {
        OutPacket outPacket = new OutPacket(OutHeader.CHECK_DUPLICATED_ID_RESULT);

        outPacket.encodeString(name);
        outPacket.encodeByte(code);

        return outPacket;
    }

    public static OutPacket createNewCharacterResult(LoginType type, Char chr, boolean returnToCharSelect) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_NEW_CHARACTER_RESULT);

        outPacket.encodeByte(type.getValue());
        if (type == LoginType.Success) {
            outPacket.encodeInt(chr.getAccount().getWorldId());
            chr.getAvatarData().encode(outPacket);
        }
        outPacket.encodeByte(returnToCharSelect);

        return outPacket;
    }

    public static OutPacket sendAuthResponse(int response) {
        OutPacket outPacket = new OutPacket(OutHeader.PRIVATE_SERVER_PACKET);

        outPacket.encodeInt(response);

        return outPacket;
    }

    public static OutPacket selectCharacterResult(LoginType type) {
        return selectCharacterResult(type, (byte) 0, 0, 0, null);
    }

    public static OutPacket selectCharacterResult(LoginType loginType, byte errorCode, int port, int characterId, World world) {
        OutPacket outPacket = new OutPacket(OutHeader.SELECT_CHARACTER_RESULT);

        outPacket.encodeByte(loginType.getValue());
        outPacket.encodeString("Banaan4");
        outPacket.encodeByte(errorCode);

        if (loginType == LoginType.Success) {
            outPacket.encodeArr(GameConstants.SERVER_IP);
            outPacket.encodeShort(port);

            outPacket.encodeInt(characterId); // new 196

            outPacket.encodeInt(world.getWorldType().ordinal()); // new 218
            outPacket.encodeInt(world.getWorldType().ordinal()); // new 218
            outPacket.encodeInt(world.getWorldType().ordinal()); // new 228

            outPacket.encodeInt(characterId);
            outPacket.encodeByte(0); // bAuthenCode
            outPacket.encodeInt(0); // ulArgument
            outPacket.encodeByte(20); // new 196
            outPacket.encodeInt(1000); // new 196
            outPacket.encodeByte(false);

            outPacket.encodeByte(2); // new 205
            outPacket.encodeLong(0); // maybe new 218?
            outPacket.encodeInt(0);
            outPacket.encodeInt(1);

            outPacket.encodeInt(0);
        }

        return outPacket;
    }

    public static OutPacket sendDeleteCharacterResult(int charId, LoginType loginType) {
        OutPacket outPacket = new OutPacket(OutHeader.DELETE_CHARACTER_RESULT);

        outPacket.encodeInt(charId);
        outPacket.encodeByte(loginType.getValue());
        if (loginType == LoginType.Success) {
            outPacket.encodeLong(0);
            outPacket.encodeLong(0);
        }


        return outPacket;
    }

    public static OutPacket sendAuthInfoRequest() {
        OutPacket outPacket = new OutPacket(OutHeader.AUTH_INFO_REQUEST);

        outPacket.encodeByte(0);
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket someChannelInfoResult() {
        OutPacket outPacket = new OutPacket(OutHeader.SOME_CHANNEL_REQUEST_RESULT);

        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(1);
            outPacket.encodeInt(21);
            outPacket.encodeInt(1);
            outPacket.encodeString("All");
        }

        return outPacket;
    }

    public static OutPacket setPhysicalWorldId(byte worldId) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_PHYSICAL_WORLD_ID);

        outPacket.encodeInt(worldId);

        return outPacket;
    }
}
