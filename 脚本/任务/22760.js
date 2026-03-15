var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("我是扫~把，\r\n我就是我，是不一样的扫~把，\r\n我今天的心情糟糟~哒。", 36, 1531026, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("更令人吃惊的是现在看到扫把会说唱已经都不觉得会惊讶了。", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#这是从前见习魔法师们做出来的魔法生物。\r\n是因为火独眼兽数量实在是太多才做出来的……", 36, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#有个叫埃尔文的哥哥在那边的世界看了奇怪的电视节目之后，回来就教了它一些奇奇怪怪的东西。\r\n就因为这样，它才会每天吟唱一些古怪的韵律。", 36, 1531003, true, true)
                    } else {
                        if (status === b++) {
                            cm.askYesNo_Bottom("我今天要怠慢工作！\r\n从今起禁止榨取劳动！\r\n希望有人能替我去消灭#b50个火独眼兽#k！\r\n\r\n#b#i1002072# #t1002072#", 36, 1531026)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#超能力者，你考虑得很对，\r\n反正我们也得修炼，就顺手一起做了呗。", 36, 1531003, false, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#b50只火独眼兽#k捕~猎！ \r\n那是你的锻~炼！\r\n这就是猫的语气~耶！", 36, 1531026, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#够了！！\r\n#b(捕猎50只火独眼兽后再回到扎鲁那里。)#k", 36, 1531003, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.forceStartQuest(22760, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22760.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("耶耶~这是感谢的表~示！我要送给你看~看！\r\n你装备它~时？你会非常厉~害！\r\n\r\n#b#i1002072# #t1002072#", 36, 1531026, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#头好痛啊。", 36, 1531003, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(22760);
                    cm.gainExp(8000);
                    cm.gainItem(1002072, 1);
                    cm.dispose()
                }
            }
        }
    }
};