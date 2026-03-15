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
            cm.sendNormalTalk("好了，两位！现在就要移动到圣物的内心世界了。顺便提醒二位，如同#p2400008#寻找时间之力的能力一样，#p2400007#拥有寻找空间的能力。", 32, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("从这个神殿移动到镜世界，不是想去就能去的！都是事先要标好坐标点的！……啊，抱歉，我时间拖的太久了，只是突然想说明一下而已……", 32, 2400007, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("那么，我们就移动到圣物的内心世界了？点接受就会移动。", 32, 2400007)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(40062, "");
                        cm.forceStartQuest(40062, "");
                        cm.dispose();
                        cm.getPlayer().setGender(1);
                        cm.onZeroInfo(199);
                        cm.warp(321190510, 3, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40062.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗯……我输了，果然神之子就是不一样。", 32, 2400009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("真好玩。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我也觉得。嗯……看来你喜欢用大剑，那我就变成大剑吧。", 32, 2400009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("使用得好的话，可以发挥更强大的力量。", 32, 2400009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那么，我就把你送出去了。", 32, 2400009, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(1706000);
                                cm.forceCompleteQuest(40062);
                                cm.dispose();
                                cm.warp(320000000, 3, false)
                            }
                        }
                    }
                }
            }
        }
    }
};