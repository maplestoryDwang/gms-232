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
            cm.sendNormalTalk_Bottom("#face6#(呃,怪物的力量沿着左臂……席卷了全身。呃,心脏……好像要炸开了……啊……)", 37, 3001501, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face6#(神智正在变得模糊……为什么？那个事件之后……我难道没能完全控制住怪物的力量吗……)\r\n\r\n#b(接受时切换地图。)", 37, 3001501, 1)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(34903, "map", cm.getMapId());
                    cm.dispose();
                    cm.warp(940205800, 0, false)
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34903.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face6#呼……呼呼……果然就像那家伙说的,力量涌上来了……这个……那家伙,幽灵拥有的力量……真是混乱……", 37, 3001501, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6#这种力量……是窥视禁地的……代价吗？根源……可以想到的只有那时的那个意识……", 37, 3001501, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#哈……哈……他说我的情况比较特殊。难道……是因为阿尔贝打断了仪式？", 37, 3001501, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6#……啊,不知道。知道答案的……只有那个家伙吗？虽然让人不太爽,但只能……等待再次与他见面了。", 37, 3001501, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "15500=10;15510=30;15511=80");
                            cm.forceCompleteQuest(34903);
                            cm.gainItem(1143100, 1);
                            cm.playerMessage(5, "获得了<深渊之中>勋章。");
                            cm.playerMessage(-1, "获得了<深渊之中>勋章。");
                            cm.forceCompleteQuest(34908);
                            cm.changeJob(15511);
                            cm.openUI(2);
                            cm.openUIWithOption(3, 155110000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};