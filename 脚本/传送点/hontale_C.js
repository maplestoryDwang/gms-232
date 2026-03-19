function start() {
    var a = cm.getPlayer().getEventInstance();
    if (a.getProperty("choiceCave") == null) {
        cm.getPlayer().message(5, "酒流 悼奔捞 急琶登瘤 臼疽嚼聪促.");
        return false
    }
    if (a.getProperty("choiceCave").equals("0")) {
        cm.allPartyWarp(240050300, false)
    } else {
        cm.allPartyWarp(240050310, false)
    }
    return true
};