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
            cm.sendNormalTalk_Bottom("#face0##b（和遗物接触后，古代之力进入了我的身体。\r\n……但同时也多了诅咒这个大问题。）#k", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6##b（好吧，事情都已经发生了，还能怎么办呢。\r\n后悔也没办法解决问题。还是应该保持一颗平常心。）#k", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0##b在开始调查之前，先来检查一下状态吧。\r\n集中精神，感觉身体内部发生的变化。）#k", 36, 1013358, 1)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(1073, "301=10");
                        cm.teachSkill(1298, 0, -1);
                        cm.teachSkill(1298, 1, 4);
                        cm.forceCompleteQuest(35903);
                        cm.openUI(1);
                        cm.sendNormalTalk_Bottom("#face0##b（受到诅咒之后，就能使用远古弓了。\r\n以后就用这个吧。）#k", 37, 1013358, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.openUIWithOption(3, 3010001);
                            cm.sendNormalTalk_Bottom("#face0##b（触碰遗物之后，获得了一些新技能。\r\n按基本键(K)，试着分配SP吧。常用的技能可以添加到快捷栏中。）#k", 37, 1013358, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.openUI(2);
                                cm.changeJob(301);
                                cm.gainItem(1592000, 1);
                                cm.gainItem(1353700, 1);
                                cm.sendNormalTalk_Bottom("#face0##b（接下来……用基本快捷键(S) / 选择型(C)分配AP吧。\r\n这段时间等级提升了，应该会有一些AP。）#k", 37, 1013358, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#好像已经准备好了。那就去周围……", 37, 1013358, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/mascapo", 100);
                                        cm.sendNormalTalk_Bottom("#face0#……我！", 37, 1013353, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……救我！", 37, 1013353, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#咕哎哎！", 37, 1013353, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#!?", 37, 1013358, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#那边传来了奇怪的声音。\r\n准备好之后，去确认一下发生了什么事吧。", 37, 1013358, true, true, 1);
                                                        cm.forceStartQuest(35933, "");
                                                        cm.forceCompleteQuest(35933);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35903.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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