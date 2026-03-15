var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu_Bottom("\r\n#r请到<新复古桑拿>#k来！\r\n#L0# 给我介绍一下#b<新复古桑拿>#k。#l\r\n#L1# 请告诉我#b<新复古桑拿>#k今日的获得量。#l\r\n", 36, 9062174, 3)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n你好！#b#e#h0##n#k！", 36, 9062174, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n你有体验过我们王国的另一处名胜——#b<新复古桑拿>#k吗？", 36, 9062174, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n在热气腾腾的#b<新复古桑拿>#k里，有许多区域光是站在那里就能享受#b各种效果#k！", 36, 9062174, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#e\r\n- 白色区域：发放经验值 #r（105级以下无法获得）#k\r\n- 黄色区域：发放手技\r\n- 红色区域：发放领导力\r\n- 绿色区域：发放感性\r\n- 粉红色区域：发放魅力\r\n- 蓝色区域：发放意志\r\n- 紫色区域：发放洞察力\r\n#n", 132, 9062174, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("\r\n不过，在桑拿里待得太久也不好，反而会对健康有害！", 36, 9062174, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("\r\n各个效果每天可获得的最大值是有规定的，你自己参考下！", 36, 9062174, true, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("\r\n哎呀呀！差点儿忘了！", 36, 9062174, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("\r\n据说，新复古桑拿里喷出的神秘蒸汽具有神奇的作用，在桑拿里\r\n#r进行星之力强化时，15星之前的装备损坏率为0%#k！", 36, 9062174, true, true, 3)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("\r\n怎么样？还是得去看看吧？", 36, 9062174, true, true, 3)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("\r\n那我们在热腾腾的#b<新复古桑拿>#k见~", 36, 9062174, true, false, 3)
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
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n#e  ?  经验值：" + cm.getNumberFromQuestInfo(100256, "today") + "次 / 2880次\r\n  ?  领导力：" + cm.getNumberFromQuestInfo(100257, "today") + " / 500\r\n  ?  洞察力：" + cm.getNumberFromQuestInfo(100258, "today") + " / 500\r\n  ?  意志：" + cm.getNumberFromQuestInfo(100259, "today") + " / 500\r\n  ?  手技：" + cm.getNumberFromQuestInfo(100256, "today") + " / 500\r\n  ?  感性：" + cm.getNumberFromQuestInfo(100260, "today") + " / 500\r\n  ?  魅力：" + cm.getNumberFromQuestInfo(100261, "today") + " / 500", 132, 9062174, false, false, 3)
    } else {
        if (status === a++) {
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100264.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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