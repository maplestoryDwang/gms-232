function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "只要是具备资格的人, 我可以立刻将他送到其想去的地方. 当然这只针对具备资格的人……你想去哪里? \r\n";
            d += "#b#L0# 神录的过去#l\r\n";
            if (cm.isQuestFinished(3505)) {
                d += "#b#L1# 冻结的过去#l\r\n"
            }
            if (cm.isQuestFinished(3512)) {
                d += "#b#L2# 燃烧的过去#l\r\n"
            }
            if (cm.isQuestFinished(3519)) {
                d += "#b#L3# 破碎的回廊#l\r\n"
            }
            cm.askMenu(d, 0, 2140004)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(270010000, 0, false)
                } else {
                    if (b == 1) {
                        cm.warp(270020000, 0, false)
                    } else {
                        if (b == 2) {
                            cm.warp(270030000, 0, false)
                        } else {
                            if (b == 3) {
                                cm.warp(270040000, 0, false)
                            }
                        }
                    }
                }
                cm.dispose()
            }
        }
    }
};