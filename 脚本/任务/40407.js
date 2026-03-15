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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40407.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是……影子骑士团的作战报告书。好像记录了在埃德尔斯坦发生的事情……我来读下。", 41, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face11#……确认#r对象#k的洗脑状态。坚信自己是女神之泪，并且渴望着自由。执行下一阶段。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11#……已将准备好的对象投放至埃德尔斯坦。为了确保作战情况，绑架了村民。被绑架的村民名叫#p2450003#……", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#……对象的洗脑作用似乎减弱了，重新注入了#r洗脑药#k。本身的记忆似乎恢复了……", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face11#……确认了#r目标#k们已经进入了埃德尔斯坦。靠近的话，可能会被察觉，现在只需进行观察……", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11#出现了意料之外的事情。与目标接触的对象发生了爆炸。推测这是由于对象所拥有的#r假的时间之力和目标的力量发生冲突，而产生的副作用#k……", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("…………", 41, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face1#影子骑士团……他们到底对#p2450000#做了些什么？！", 41, 2400005, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(40407);
                                                    cm.forceCompleteQuest(40943);
                                                    cm.updateInfoQuest(41832, "rock=off;desert=off;three=off;light=off;afrien=off;bell=off;cave=off;west=off");
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.gainExp(21800400);
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
};