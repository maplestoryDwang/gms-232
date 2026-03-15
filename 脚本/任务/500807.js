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
            cm.sendNormalTalk("\r\n你来了，#b#h0##k。在你的帮助下，我们联盟和荣耀特攻队取得了长足的进步。", 0, 3004201, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("\r\n还有，你现在已经有足够资格成为荣耀特攻队的#b#e司令#n#k了。你准备好了吗？\r\n\r\n\r\n#e※ 完成该任务后，消耗#b2000个荣耀币#k，可在#r每个世界领取1次#k以下道具。\r\n\r\n#b#i2630693:# <#t2630693:#>#k#n", 0, 3004201)
            } else {
                if (status === a++) {
                    if (cm.getNumberFromQuestInfo(100296, "point") < 2000) {
                        cm.sendNormalTalk("\r\n#b#e荣耀币#n#k是你执行任务的证明，有了它才能晋升阶位。\r\n\r\n#r※ 升至司令阶需要消耗2000个荣耀币。", 0, 3004201, false, false);
                        cm.dispose();
                        return
                    }
                    cm.forceCompleteQuest();
                    cm.gainGloryEventPoint(-2000 * 100);
                    cm.setNumberForQuestInfo(500785, "lv", 5);
                    cm.teachSkill(80000614, -1, 0);
                    cm.teachSkill(80000615, 0, -1);
                    cm.teachSkill(80000615, 1, 1);
                    cm.teachSkill(80000615, 1, 0);
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                    cm.gainItem(2630693, 1)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/glory/gloryon", 0, 3000, 0, 0, 25, 4, 3, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那么，从现在起我任命你为荣耀特攻队的#r<司令>#k阶队员。#b#h0##k。", 37, 3004201, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/Result_Yut", 100);
                                                    cm.eventSKill(0);
                                                    cm.sendNormalTalk_Bottom("期待你之后在联盟和荣耀特攻队中的活跃表现，#b#h0##k。", 37, 3004201, false, true);
                                                    cm.effect_OnUserEff("Effect/CharacterEff.img/gloryonGradeup")
                                                } else {
                                                    if (status === a++) {
                                                        cm.dispose();
                                                        cm.warp(993120480, 0, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500805.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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