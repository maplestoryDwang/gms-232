importPackage(java.lang);

function start() {
    if (cm.haveItem(4031013, 20)) {
        cm.getPlayer().setKeyValue("2ndJobTrialComplete", "1");
        cm.removeAll(4031013);
        cm.warp(100000000);
        var a = cm.getPlayer().getKeyValue("2ndTrialStartTime");
        cm.getPlayer().setKeyValue2("2ndJobTrialCompleteTime2", ((new Date().getTime() / 1000) - a) + "");
        return true
    } else {
        cm.getPlayer().message(5, "You have completed the mission.");
        return false
    }
};