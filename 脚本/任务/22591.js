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
            cm.sendNormalTalk("几百年前……冒险岛世界还有很多玛瑙龙……还有很多喜爱玛瑙龙的人……我们和你的朋友弗里德希望这两个不同的种族可以一同生活下去。", 0, 1205000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("玛瑙龙拥有强大的力量，但却有着不完整的灵魂……而人类的力量虽然很弱，但却拥有强大的意志……我们把两个种族的意志结合了起来，诞生了龙神……我们希望通过这种方式让人类和玛瑙龙共存。", 0, 1205000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是这种希望被#r黑魔法师#k打破了。", 0, 1205000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#b(黑魔法师？！黑色之翼说为了冒险岛的和平而想复活的人，不就是黑魔法师吗！？)", 2, 1205000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("但是这种希望被#r黑魔法师#k打破了。", 0, 1205000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#b(黑魔法师？！黑色之翼说为了冒险岛的和平而想复活的人，不就是黑魔法师吗！？)", 2, 1205000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("与其慢慢跟你说，我想还是让你亲眼看到会更快一些……#b我会把你送进我的记忆之中#k。把你送进我记忆的一个片段，几百年前和黑魔法师战斗之前，弗里德和我对话时的那段记忆……", 0, 1205000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(22591, "");
                                        cm.setStandAloneMode(true);
                                        cm.dispose();
                                        cm.warp(900030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22591.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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