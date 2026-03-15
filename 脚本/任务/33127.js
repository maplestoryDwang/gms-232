var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你好啊，#b#e#h0##k#n。我是摩柯，我一直在找你。", 4, 1540446, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不久前，我在梦中看见黑暗笼罩了冒险岛世界，而且最终你驱散了这黑暗。", 4, 1540446, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我认为这是一个预知未来的梦，冒险岛世界将要面临危险，而你最终拯救了冒险岛世界。", 4, 1540446, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("为了应对即将面临的危险，我决定为冒险岛联盟做事。你愿意和我一起帮助联盟吗？\r\n\r\n#b - 该内容与120级以后的剧情有关。\r\n - 如果点击“是”，自动移动。", 4, 1540446)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("请到#e联盟会场#n来找我。", 5, 1540446, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(33127);
                                cm.forceStartQuest(33130, "");
                                cm.dispose();
                                if (cm.getMapId() != 913050010) {
                                    cm.forceStartQuest(7998, cm.getMapId());
                                    cm.warp(913050010, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33127.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};