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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk("好，那要开始第一个训练吗？从目前米哈尔的体力状态来看……去为训练生准备的演武场训练会比较合适。", 1, 1102000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("沿着这条路一直往左走，就是#b演武场入口#k，我在那里为米哈尔准备了训练用的怪物，就请去第一个修炼场吧。", 1, 1102000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在那里捕捉#b#e20个绿蘑菇#k#n就好，我会先去演武场入口站着的。", 1, 1102000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("对了，不知你用过属性和技能点数了吗？在正式开始训练之前，一定要确认一下。", 1, 1102000, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(900)
                        } else {
                            if (status === a++) {
                                cm.getTopMsgFont("升级之后，能力值会有所提升。快捷键[S]/选择型[C]", 3, 20, 20, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.getTopMsgFont("升级之后，技能等级会有所提升，技能还可以放入快捷栏。快捷键[K]", 3, 20, 20, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.openUIWithOption(3, 51001004);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("最开始放的技能比较适合用灵魂之刃。", 17, 1102000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(800)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_OnUserEff("UI/tutorial.img/8");
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.OnStartNavigation(130020000, 0, "", 0);
                                                            cm.forceStartQuest(20771, "");
                                                            cm.gainExp(3);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20771.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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