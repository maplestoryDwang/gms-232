function start() {
    if (cm.isQuestActive(28753)) {
        if (cm.haveItem(4033191, 1)) {
            cm.warp(610040700, 0, false)
        } else {
            cm.sendOk("我得先找到#b#i610040700##z610040700##k才能离开这里！")
        }
    } else {
        cm.warp(600010300, 2)
    }
};