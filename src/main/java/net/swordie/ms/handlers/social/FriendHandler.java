package net.swordie.ms.handlers.social;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.client.friend.FriendFlag;
import net.swordie.ms.client.friend.FriendType;
import net.swordie.ms.client.friend.result.FriendResult;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.FriendDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;

public class FriendHandler {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final FriendDao friendDao = (FriendDao) SworDaoFactory.getByClass(Friend.class);

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.LOAD_ACCOUNT_ID_OF_CHARACTER_FRIEND_REQUEST)
    public static void handleLoadAccountIDOfCharacterFriendRequest(Client c, InPacket inPacket) {
//        c.write(WvsContext.loadAccountIDOfCharacterFriendResult(c.getChr().getFriends()));
    }

    @Handler(op = InHeader.FRIEND_REQUEST)
    public static void handleFriendRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        byte type = inPacket.decodeByte();
        FriendType ft = Arrays.stream(FriendType.values()).filter(f -> f.getVal() == type).findFirst().orElse(null);
        if (ft == null) {
            chr.chatMessage("Unknown friend request type.");
            log.error(String.format("Unknown friend request type %d", type));
            return;
        }
        Char other;
        boolean online;
        switch (ft) {
            case FriendReq_SetFriend:
                String name = inPacket.decodeString();
                other = c.getWorld().getCharByName(name);
                online = true;
                if (other == null) {
                    other = charDao.getByNameAndWorld(name, c.getWorldId());
                    if (other == null) {
                        c.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                        return;
                    }
                    online = false;
                }
                String groupName = inPacket.decodeString();
                String memo = inPacket.decodeString();

                if (memo.length() > 1000 || !Util.isValidString(memo)) {
                    chr.getUser().getOffenseManager().addOffense("Tried to say a message that is too long or invalid.", 1000, memo.length());
                    return;
                }

                boolean account = inPacket.decodeByte() != 0;
                String nick = "";
                if (account) {
                    nick = inPacket.decodeString();
                    if (nick.equalsIgnoreCase("") && nick.length() < 100) {
                        nick = name;
                    }
                }
                if (!online) {
                    chr.chatMessage("That person is currently not online.");
                    return;
                }
                Friend friend = new Friend();
                friend.setFriendID(other.getId());
                friend.setGroup(groupName);
                friend.setMemo(memo);
                friend.setName(name);
                friend.setFriendAccountID(other.getUserId());
                if (account) {
                    friend.setNickname(nick);
                    friend.setFlag(FriendFlag.AccountFriendOffline);
                    chr.getUser().addFriend(friend);
                } else {
                    chr.addFriend(friend);
                    friend.setFlag(FriendFlag.FriendOffline);
                }
                Friend otherFriend = new Friend();
                otherFriend.setFriendID(chr.getId());
                otherFriend.setName(chr.getName());
                otherFriend.setFriendAccountID(chr.getUserId());
                otherFriend.setGroup("Default Group");
                if (account) {
                    otherFriend.setNickname(chr.getName());
                    otherFriend.setFlag(FriendFlag.AccountFriendRequest);
                    other.getUser().addFriend(otherFriend);
                } else {
                    otherFriend.setFlag(FriendFlag.FriendRequest);
                    other.addFriend(otherFriend);
                }
                c.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_Done, name)));
                c.write(WvsContext.friendResult(FriendResult.loadFriends(chr.getAllFriends())));
                other.write(WvsContext.friendResult(
                        FriendResult.friendInvite(otherFriend, account, chr.getLevel(), chr.getJob(), chr.getSubJob())));
                break;
            case FriendReq_AcceptFriend:
                int friendID = inPacket.decodeInt();
                online = true;
                Char requestor = c.getWorld().getCharByID(friendID);
                if (requestor == null) {
                    requestor = charDao.getById(friendID);
                    online = false;
                    if (requestor == null) {
                        c.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                        return;
                    }
                }
                friend = chr.getFriendByCharID(friendID);
                friend.setFlag(online ? FriendFlag.AccountFriendOnline : FriendFlag.AccountFriendOffline);
                if (online) {
                    friend.setChannelID(requestor.getChannel());
                    otherFriend = requestor.getFriendByCharID(chr.getId());
                    otherFriend.setChannelID(c.getChannel());
                    otherFriend.setFlag(FriendFlag.AccountFriendOnline);
                    requestor.write(WvsContext.friendResult(FriendResult.updateFriend(otherFriend)));
                    requestor.chatMessage(String.format("%s has accepted your friend request!", chr.getName()));
                }
                c.write(WvsContext.friendResult(FriendResult.updateFriend(friend)));
                if (!online) {
                    charDao.saveOrUpdate(requestor);
                }
                break;
            case FriendReq_AcceptAccountFriend:
                int userId = inPacket.decodeInt();
                User userRef = c.getWorld().getUserById(userId);
                User myUser = chr.getUser();
                online = true;
                if (userRef == null) {
                    online = false;
                    userRef = userDao.getById(userId);
                    if (userRef == null) {
                        chr.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                        return;
                    }
                }
                friend = myUser.getFriendByUserID(userId);
                friend.setFlag(online ? FriendFlag.AccountFriendOnline : FriendFlag.AccountFriendOffline);
                otherFriend = userRef.getFriendByUserID(myUser.getId());
                otherFriend.setFlag(FriendFlag.AccountFriendOnline);
                otherFriend.setChannelID(chr.getChannel());
                if (online) {
                    requestor = userRef.getCurrentChr();
                    friend.setChannelID(requestor.getChannel());
                    requestor.chatMessage(String.format("%s has accepted your account friend request!", chr.getName()));
                    requestor.write(WvsContext.friendResult(FriendResult.updateFriend(otherFriend)));
                } else {
                    friendDao.saveOrUpdate(otherFriend);
                }
                c.write(WvsContext.friendResult(FriendResult.updateFriend(friend)));
                break;
            case FriendReq_DeleteFriend:
                friendID = inPacket.decodeInt();
                friend = chr.getFriendByCharID(friendID);
                if (friend == null) {
                    chr.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                    return;
                }
                other = c.getWorld().getCharByID(friendID);
                online = true;
                if (other == null) {
                    online = false;
                    other = charDao.getById(friendID);
                }
                otherFriend = other == null ? null : other.getFriendByCharID(chr.getId());
                if (other != null) {
                    other.removeFriend(otherFriend);
                }
                if (online) {
                    other.write(WvsContext.friendResult(FriendResult.deleteFriend(otherFriend)));
                }
                other.removeFriendByID(chr.getId());
                chr.removeFriend(friend);
                chr.write(WvsContext.friendResult(FriendResult.deleteFriend(friend)));
                charDao.saveOrUpdate(other);
                charDao.saveOrUpdate(chr);
                break;
            case FriendReq_DeleteAccountFriend:
                int otherUserId = inPacket.decodeInt();
                userRef = chr.getUser();
                friend = userRef.getFriendByUserID(otherUserId);

                if (friend == null) {
                    chr.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                    return;
                }

                online = true;
                User otherUser = c.getWorld().getUserById(otherUserId);
                if (otherUser == null) {
                    otherUser = userDao.getById(otherUserId);
                    online = false;
                }

                if (otherUser == null) {
                    // User deleted their acc
                    userRef.removeFriend(friend);
                    chr.write(WvsContext.friendResult(FriendResult.deleteFriend(friend)));
                    userDao.saveOrUpdateFriends(userRef);
                } else {
                    otherFriend = otherUser.getFriendByUserID(chr.getUserId());
                    otherUser.removeFriend(otherFriend);
                    if (online) {
                        otherUser.getCurrentChr().write(WvsContext.friendResult(FriendResult.deleteFriend(otherFriend)));
                    }
                    userRef.removeFriend(friend);

                    userDao.saveOrUpdateFriends(userRef);
                    userDao.saveOrUpdateFriends(otherUser);
                    chr.write(WvsContext.friendResult(FriendResult.deleteFriend(friend)));
                }
                break;
            case FriendReq_RefuseFriend:
                friendID = inPacket.decodeInt();
                friend = chr.getFriendByCharID(friendID);
                if (friend == null) {
                    chr.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                    return;
                }
                chr.write(WvsContext.friendResult(FriendResult.deleteFriend(friend)));
                chr.removeFriend(friend);
                other = c.getWorld().getCharByID(friendID);
                if (other == null) {
                    other = charDao.getById(friendID);
                    if (other == null) {
                        return;
                    }
                    other.removeFriendByID(chr.getId());
                    charDao.saveOrUpdate(other);
                } else {
                    other.write(WvsContext.friendResult(FriendResult.deleteFriend(other.getFriendByCharID(chr.getId()))));
                    other.removeFriendByID(chr.getId());
                }
                break;
            case FriendReq_RefuseAccountFriend:
                otherUserId = inPacket.decodeInt();
                userRef = chr.getUser();
                friend = userRef.getFriendByUserID(otherUserId);
                if (friend == null) {
                    chr.write(WvsContext.friendResult(FriendResult.message(FriendType.FriendRes_SetFriend_UnknownUser)));
                    return;
                }
                chr.write(WvsContext.friendResult(FriendResult.deleteFriend(friend)));
                userRef.removeFriend(friend);
                otherUser = c.getWorld().getUserById(otherUserId);
                if (otherUser == null) {
                    otherUser = userDao.getById(otherUserId);
                    if (otherUser == null) {
                        return;
                    }
                    otherUser.removeFriend(otherUserId);
                    userDao.saveOrUpdateFriends(otherUser);
                } else {
                    other = userRef.getCurrentChr();
                    other.write(WvsContext.friendResult(FriendResult.deleteFriend(other.getFriendByCharID(chr.getId()))));
                    otherUser.removeFriend(chr.getId());
                }
                break;
            case FriendReq_ModifyAccountFriendGroup:
                otherUserId = inPacket.decodeInt();
                friend = chr.getUser().getFriendByUserID(otherUserId);
                if (friend != null) {
                    friend.setGroup(inPacket.decodeString());
                    chr.write(WvsContext.friendResult(FriendResult.updateFriend(friend)));
                }
                break;
            case FriendReq_ModifyFriend:
                account = inPacket.decodeByte() != 0;
                friendID = inPacket.decodeInt();
                otherUserId = inPacket.decodeInt();
                friend = account ? chr.getUser().getFriendByUserID(otherUserId) : chr.getFriendByCharID(friendID);
                friend.setNickname(inPacket.decodeString());
                friend.setMemo(inPacket.decodeString());
                chr.write(WvsContext.friendResult(FriendResult.updateFriend(friend)));
                break;
            default:
                chr.chatMessage(String.format("Unhandled friend request type %s", ft.toString()));
                log.error(String.format("Unhandled friend request type %s", ft.toString()));
                break;
        }
    }
}
