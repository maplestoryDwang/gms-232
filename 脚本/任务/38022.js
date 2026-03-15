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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38022.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38022.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    if (cm.getMap().getNumMonsters() > 0) {
        cm.playerMessage(-1, "必须消灭掉所有怪物，继续向神殿深处前进。");
        cm.playerMessage(5, "剩余怪物数量：" + cm.getMap().getNumMonsters() + "");
        cm.dispose();
        return
    }
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.forceForfeitQuest(38903);
            cm.sendNormalTalk("没事吧？受伤了吗？", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("浑身都很疼！这里也疼，那里也疼。还有这里！", 1, 3002103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过好像一点伤痕也没有啊。", 3, 3002103, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("本，本来内伤就要比外伤更疼！隐月，你这个傻瓜！我先走了！", 1, 3002103, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(38022, "");
                            cm.forceStartQuest(38022, "clear");
                            cm.forceCompleteQuest(38022);
                            cm.gainExp(5000);
                            cm.sendNormalTalk("…………到底我又做错了什么。生气的话至少也应该说说理由吧。而且，一个人走的话也很危险。不过…………幸好没受伤。", 3, 3002103, true, true)
                        } else {
                            if (status === a++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.dispose();
                                cm.warp(410000000, 0, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};