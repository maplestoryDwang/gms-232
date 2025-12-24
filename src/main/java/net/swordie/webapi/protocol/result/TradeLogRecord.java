package net.swordie.webapi.protocol.result;

import java.util.List;

public record TradeLogRecord(String uuid,
                             String character,
                             String timeOfTrade,
                             String charNameFrom,
                             String charNameTo,
                             String usernameFrom,
                             String usernameTo,
                             List<String> itemsFrom,
                             List<String> itemsTo,
                             StringBuilder moneyFrom,
                             StringBuilder moneyTo,
                             StringBuilder nxFrom,
                             StringBuilder nxTo,
                             String tradeType) {
}
