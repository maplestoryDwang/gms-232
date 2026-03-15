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
            cm.sendNormalTalk_Bottom("噢，来自异界的勇士，\r\n#r魔王皮洛克#k的暴行是越来越变本加厉了……\r\n他不但绑架了我们的公主，甚至还开始掠夺蕴含#b新复古能量#k的王国的#b各种宝物#k。", 36, 9062172, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果不能阻止#r魔王皮洛克#k和他手下那些#r迷你皮洛克#k的掠夺，我们王国的力量将会进一步减弱。\r\n我们拥有的新复古能量将被掠夺殆尽。	", 36, 9062172, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("要想完全击败#r魔王皮洛克#k，你必须觉醒为#b新复古英雄#k……但在此之前，至少可以#b暂时阻止#k他们的掠夺。", 36, 9062172, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("你愿意助我们一臂之力，阻止#b魔王皮洛克#k的掠夺吗？", 36, 9062172, 3)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(100244, "point=0");
                            cm.updateInfoQuest(500727, "record=0");
                            cm.updateInfoQuest(500727, "coinCount=0;record=0");
                            cm.sendNormalTalk_Bottom("多谢！\r\n利用#b位于村庄尽头的飞艇#k下方的传送口，就可以去到#r魔王皮洛克#k藏身处。", 36, 9062172, false, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("给#r魔王皮洛克#k和#r迷你皮洛克#k造成伤害时，可以根据伤害的程度获得#b新复古币#k。", 36, 9062172, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("详细内容等你来找我，我们再细说。\r\n拜托了。", 36, 9062172, true, false, 3)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(100244);
                                        cm.dispose()
                                    }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100244.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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