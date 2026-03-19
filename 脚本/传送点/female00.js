function start() {
    var a = cm.getPlayer().getGender();
    if (a == 1) {
        cm.warp(670010200, 4);
        return true
    } else {
        cm.getPlayer().dropMessage(5, "You cannot proceed past here.");
        return false
    }
};