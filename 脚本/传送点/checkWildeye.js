function start() {
    if (cm.getPlayer().getInventory(cm.getInvType(-1)).findById(1003036) == null) {
        cm.playerMessage(5, "The stench is too powerful.");
        cm.warp(105050400);
        return true
    }
    return false
};