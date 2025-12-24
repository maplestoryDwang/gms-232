package net.swordie.webapi.routes;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.client.User;
import net.swordie.ms.logging.TradeTransaction;
import net.swordie.ms.util.container.Tuple;
import net.swordie.orm.dao.TradeTransactionDao;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.result.TradeLogRecord;

import java.util.*;

@Path("/trades")
public class TradeLogRoute extends BaseResource {

    private static TradeTransactionDao dao = new TradeTransactionDao();
    private static UserDao userDao = new UserDao();
    public static Map<Integer, String> usernames = new HashMap<>(); // id -> name

    @GET
    @Path("/{name}")
    @Produces({MediaType.APPLICATION_JSON})
    public List<TradeLogRecord> getTradeLogs(
            @PathParam("name") String name,
            @QueryParam("byUsername") boolean byUsername,
            @QueryParam("accountTrades") boolean accountTrades,
            @HeaderParam(ApiConstants.TOKEN_HEADER) String token
    ) {
        var reqUser = authorize(token);
        if (reqUser == null || !reqUser.getAccountType().isGmOrAdmin()) {
            return List.of();
        }

        var user = byUsername ? userDao.getByName(name) : userDao.getByCharname(name);
        if (user == null) {
            throw new NotFoundException("Could not find any user with that name/character");
        }

        if (byUsername) {
            return map(user, dao.getByUsername(name));
        }

        if (!accountTrades) {
            return map(user, dao.getByCharname(name));
        }

        return map(user, dao.getByUsername(user.getName()));
    }

    private List<TradeLogRecord> map(User user, List<TradeTransaction> trades) {
        var records = new HashMap<UUID, TradeLogRecord>();
        for (var trade : trades) {
            if (!records.containsKey(trade.getUuid())) {
                var itemStr = getTradeItemString(trade);
                var moneyStr = new StringBuilder();
                if (trade.getMoney() > 0) {
                    moneyStr.append(trade.getMoney());
                }
                var itemList = new ArrayList<String>();
                itemList.add(itemStr);
                records.put(trade.getUuid(), new TradeLogRecord(
                        trade.getUuid().toString(),
                        user.hasCharWithId(trade.getCharacterIdFrom()) ? trade.getCharacterNameFrom() : trade.getCharacterNameTo(),
                        trade.getFileTime() == null ? "Unknown" : trade.getFileTime().toHumanString(),
                        trade.getCharacterNameFrom(),
                        trade.getCharacterNameTo(),
                        getUsername(trade.getUserIdFrom()),
                        getUsername(trade.getUserIdTo()),
                        itemList,
                        new ArrayList<>(),
                        moneyStr,
                        new StringBuilder(),
                        new StringBuilder("0"),
                        new StringBuilder("0"),
                        trade.getTradeTransactionType() == null ? "Unknown" : trade.getTradeTransactionType().name()
                ));
            } else {
                var record = records.get(trade.getUuid());
                var toIsFrom = record.charNameTo().equals(trade.getCharacterNameFrom());
                if (trade.getMoney() != 0) {
                    if (toIsFrom) {
                        record.moneyTo().append(trade.getMoney());
                    } else {
                        record.moneyFrom().append(trade.getMoney());
                    }
                } else {
                    if (toIsFrom) {
                        record.itemsTo().add(getTradeItemString(trade));
                    } else {
                        record.itemsFrom().add(getTradeItemString(trade));
                    }
                }
            }
        }

        var list = new ArrayList<>(records.values());
        list.forEach(r -> {
            if (r.moneyFrom().isEmpty()) {
                r.moneyFrom().append("0");
            }
            if (r.moneyTo().isEmpty()) {
                r.moneyTo().append("0");
            }
            if (r.nxFrom().isEmpty()) {
                r.moneyTo().append("0");
            }
            if (r.nxTo().isEmpty()) {
                r.nxTo().append("0");
            }
        });
        return list;
    }

    private static String getTradeItemString(TradeTransaction trade) {
        String itemStr;
        if (trade.getMoney() != 0) {
            itemStr = "";
        } else {
            itemStr = "%s".formatted(trade.getDescription());
        }
        return itemStr;
    }

    private static String getUsername(int userId) {
        if (usernames.containsKey(userId)) {
            return usernames.get(userId);
        }

        var user = userDao.getById(userId);
        String username = user == null ? "-" : user.getName();
        usernames.put(userId, username);

        return username;
    }
}
