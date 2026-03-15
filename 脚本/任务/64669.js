var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(500827, "q4Count") > 0) {
        start1(c, b, a)
    } else {
        start0(c, b, a)
    }
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("……一来教室就困了。要不来睡一会儿？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你……", 4, 9100029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("？？？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那里睡脸朦胧的你，有话要跟你说。", 4, 9100029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我是帝国军第203航空魔导大队的大队长谭雅·冯·提古雷查夫少校！", 4, 9100029, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("既然我做了风纪委员长，为了不让大家忘记纪律，我决定定期发放任务。也不是什么难事，去执行200次连续击杀即可。#b#h0##k。我以风纪委员长的身份命令你，现在立刻实施200连续击杀！", 4, 9100029)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64669, "");
                                    cm.startQuestClock(1, 64669, 600000);
                                    cm.sendNormalTalk("时限是10分钟。", 4, 9100029, false, true)
                                } else {
                                    if (status === a++) {
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

function start1(d, c, b) {
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
            cm.sendNormalTalk("(啊~ 天气真好。难怪这么困…)", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("还在犯困啊，要开始今天的任务了。去完成200次连续击杀！给我打起精神。\r\n#r", 4, 9100029)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(64669, "");
                    cm.startQuestClock(1, 64669, 600000);
                    cm.sendNormalTalk("时限是10分钟。", 4, 9100029, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64669.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这么快就达成200连续击杀了吗？", 4, 9100029, false, true)
        } else {
            if (status === a++) {
                cm.addNumberForQuestInfo(500827, "q4Count", 1);
                cm.setNumberForQuestInfo(500827, "q4Set", 2);
                cm.forceCompleteQuest(64669);
                cm.endQuestClock(1, 64669);
                cm.sendNormalTalk("非常不错。你如果是帝国的人的话，我真想立刻收你为己用。作为你认真服从命令的回报，我会送你个礼物。#n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#b#i2630962:# #t2630962:##k", 4, 9100029, true, false)
            } else {
                if (status === a++) {
                    cm.gainItem(2630962, 1);
                    cm.dispose()
                }
            }
        }
    }
};