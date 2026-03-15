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
            cm.sendNormalTalk("已经到……11点50分了……", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("舞会开始前，要为苏菲莉亚完成这个#b人偶#k才行。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("幸好忧郁的假面已经做得差不多了……\r\n只要去#b人偶房2#k再找一些#i4036621##b#t4036621##k就行了。", 2, 0)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, false);
                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.setStandAloneMode(true);
                        cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/startEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.effect_Text(["#fn黑体##fs20#2020 Haunted Mansion", "NewItem"], [100, 5000, 4, 0, 90, 1, 4, 3, 300, 150, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.effect_Text(["#fn黑体##fs60#Episode.5", "NewItem"], [100, 4000, 4, 0, 170, 1, 4, 3, 300, 150, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2300)
                                } else {
                                    if (status === a++) {
                                        cm.effect_Text(["#fn黑体##fs25#假面绅士", "NewItem"], [100, 3000, 4, 0, 200, 1, 4, 3, 300, 150, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
                                            cm.forceStartQuest(100457, "");
                                            cm.OnStartNavigation(993175400, 0, "pt_go993175500", 0);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100457.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("好的。这样子剪掉然后贴上去……", 2, 0)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100457);
                cm.sendNormalTalk("好了。\r\n怎么搞的，都已经这个时间了……？\r\n要快去找#b苏菲莉亚#k才行……", 2, 0, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4036621, -10);
                    cm.sendNormalTalk("#b女仆#k会不会知道什么呢？\r\n要去问一问了。", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(993175400, 2, false)
                    }
                }
            }
        }
    }
};