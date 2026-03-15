var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#快去寻找她的痕迹吧。\r\n最后一次见到她的地方是斜塔，最好到那里去看看！", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#你想现在出发吗？\r\n#r（接受时立即移动。）#k", 36, 3003480)
            } else {
                if (status === a++) {
                    if (d > 0) {
                        cm.dispose();
                        cm.warp(940204300, 0)
                    } else {
                        cm.sendNormalTalk_Bottom("啊！稍等一下！", 56, 0, false, true)
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face13#你不想去找她吗？快点！", 36, 3003480, true, true);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};