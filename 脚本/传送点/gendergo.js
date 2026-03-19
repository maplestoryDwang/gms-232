function start() {
    if (cm.getPlayer().getGender() == 0) {
        cm.warp(670010200, "male01")
    } else {
        cm.warp(670010200, "female01")
    }
};