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
            cm.sendNormalTalk_Bottom("#h0#，紧急任务。虽然不清楚你能不能帮上忙，但现在的情况很紧急，哪怕是起到很小的作用也行。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("详细情况我们见面再说吧。\r\n\r\n#b（前往屋顶看看吧。）#k", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32747, "");
                    cm.updateInfoQuest(32720, "sms=31");
                    cm.dispose()
                }
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
            cm.sendNormalTalk_Bottom("所有人都到齐了吗？那么我就开始说了。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_ForcedFlip10(1, 97);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#把大家聚在这里，不是为别的，而是因为有关命运之转学生新传闻的事。", 37, 1530070, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("新传闻？", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("你们原来想的都错了. ", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("事实上, 命运之转学生是个男生, 而且嘴唇长得很厚. ", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("如果神兽集团的独生女不和命运之转学生接吻的话, 这所学校就会面临倒闭的. ", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("这种传说不是很奇怪吗？这也太具体了吧？", 37, 1530120, false, true);
                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam")
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("没错，而且嘴唇比较厚的转校生不就是那个家伙吗？", 37, 1530100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("上次找到屋顶上的，那个奇怪的大块头？", 37, 1530090, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这么说来，从一开始就是那家伙故意放出的传闻？就是为了引人注意？", 37, 1530080, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("不是的，我个人觉得……不像是单纯想引人注意，肯定还有别的什么目的。", 37, 1530070, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceCompleteQuest(32747);
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
    }
};