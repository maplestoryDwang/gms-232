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
            if (cm.getPlayer().getMapId() != 450005400) {
                cm.warp(450005400, 0, true);
                cm.askAcceptDecline_Bottom("看来飞鱼回来了！快去看看吧！\r\n", 56, 3003422);
                cm.dispose()
            } else {
                cm.sendNormalTalk_Bottom("飞鱼啊！你回来了！", 56, 0, false, true)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#咕！！！", 36, 3003409, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("森林重新恢复平衡后，神秘河的流动好像也正常了。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("好，那赶快乘坐飞鱼前往下一地区吧？\r\n#b（接受时将自动移动。）", 56, 3003422)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34249, "");
                            cm.forceCompleteQuest(34249);
                            cm.dispose();
                            cm.warp(940204000, 0, true)
                        }
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