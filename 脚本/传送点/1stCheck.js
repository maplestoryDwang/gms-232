function start() {
    if (cm.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
        cm.getPlayer().message("'?″?' 淇??? ???? 瀵??? ?х虎????澶?.");
        return false
    } else {
        cm.warp(219000000, "in03");
        return true
    }
};