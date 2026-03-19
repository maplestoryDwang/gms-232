function start() {
    var a = cm.getPlayer().getGender();
    if (a == 0) {
        cm.warp(670010200, 3);
        return true
    } else {
        cm.getPlayer().dropMessage(5, "You cannot proceed past here.");
        return false
    }
};