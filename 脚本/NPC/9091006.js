function start() {
    cm.askYesNo("你确定离开这里吗？")
}

function action(c, b, a) {
    if (c == 1) {
        cm.warp(272020110, 0)
    }
    cm.dispose()
};