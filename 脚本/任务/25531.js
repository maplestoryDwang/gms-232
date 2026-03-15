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
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("要想阻止黑暗力量的侵蚀，就必须找回光之力量。", 17, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("现在我体内的光之力量还未完全消失。所以黑暗力量试图支配我的时候，我还能有所抵抗。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("请相信我。静下心来，回想在欧罗拉学过的东西。均衡，和谐，还有意志……", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(25531);
                            cm.gainExp(762);
                            cm.inGameDirectionEvent_AskAnswerTime(900)
                        } else {
                            if (status === a++) {
                                cm.gainItem(2001502, 30);
                                cm.gainItem(2001506, 30);
                                cm.updateInfoQuest(25980, "normal=#0#;hard=#");
                                cm.sendNormalTalk("光明的力量再次环绕着我。现在我才能放下心来。我相信我能对抗黑暗的力量。", 17, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                } else {
                                    if (status === a++) {
                                        cm.getTopMsgFont("升级时就能提高能力值。快捷键 [S]/ 选择型[C]", 3, 20, 20, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.openUI(2);
                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25531.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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