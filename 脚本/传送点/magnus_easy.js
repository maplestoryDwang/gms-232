function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("通过那个传送口，可以体验麦格纳斯模拟战。虽然和麦格纳斯真正的力量相差很多，但以诺巴目前的技术，这已经是极限了。", 4, 3001000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("要去进行和麦格纳斯的模拟战（简单模式）吗？\r\n#b<<麦格纳斯模拟战每天可通关一次>>\r\n<<可以以115以上玩家组成的队伍入场。>>", 4, 3001000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("为了最大限度地创建相似的环境，我们重现了暴君城堡。在那里可以进入王座。", 4, 3001000, false, true)
                } else {
                    if (status === a++) {
                        cm.warp(401060399, 0, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};