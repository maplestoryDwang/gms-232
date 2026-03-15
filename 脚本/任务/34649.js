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
            cm.forceStartQuest(34649, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34649.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_Hero9(0, 2000);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.sendNormalTalk_Bottom("#face6#新世界……是啊……现在终于清醒点了。", 37, 3001270, false, true, 1)
            } else {
                if (status === a++) {
                    cm.effect_Voice("Voice3.img/cadena/Q8/Female/0", 128);
                    cm.sendNormalTalk_Bottom("#face6#难道我被麦格纳斯背叛了……看来，我的力量和修炼还很欠缺。", 37, 3001270, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.effect_Voice("Voice3.img/cadena/Q8/Female/1", 128);
                        cm.sendNormalTalk_Bottom("#face6#……看你肩膀不太舒服。难道被麦格纳斯伤到了？", 37, 3001270, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.effect_Voice("Voice3.img/cadena/Q8/Female/2", 128);
                            cm.sendNormalTalk_Bottom("#face6#不，这伤痕明明是在更糟之前留下的。那天受的伤……", 37, 3001270, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.effect_Voice("Voice3.img/cadena/Q8/Female/3", 128);
                                cm.updateInfoQuest(49018, "QET=8GOBCdN/1gE$");
                                cm.updateInfoQuest(49018, "QET=8GOBCdN/1gE$");
                                cm.updateInfoQuest(49018, "QET=8GOBCdN/1gE$");
                                cm.forceStartQuest(49018, "");
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/cadena_dir/9", 0, 900, 0, -80, 12, 4, 0, -1, 0, 0, 0);
                                    cm.sendNormalTalk_Bottom("#face11#那时候太弱小，不仅失去了父母兄弟，连自己也……", 37, 3001270, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.effect_Voice("Voice3.img/cadena/Q8/Female/4", 128);
                                        cm.sendNormalTalk_Bottom("#face11#在这个野蛮的世界，为了保护我自己和我拥有的一切……", 37, 3001270, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_Voice("Voice3.img/cadena/Q8/Female/5", 128);
                                            cm.sendNormalTalk_Bottom("#face11#……变得比敌人更强大，才是一切问题的答案。", 37, 3001270, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.effect_Voice("Voice3.img/cadena/Q8/Female/6", 128);
                                                cm.sendNormalTalk_Bottom("#face11#报仇的事我早就放下了。因为一切都回不去了。", 37, 3001270, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_Voice("Voice3.img/cadena/Q8/Female/7", 128);
                                                    cm.sendNormalTalk_Bottom("#face11#我唯一的目标就是让自己变强大，谁敢阻挡我，我就让他碎尸万段。", 37, 3001270, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_Voice("Voice3.img/cadena/Q8/Female/8", 128);
                                                        cm.sendNormalTalk_Bottom("#face9#……即便那过去萦绕心头的噩梦，让我备受折磨……", 37, 3001270, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_Voice("Voice3.img/cadena/Q8/Female/9", 128);
                                                            cm.sendNormalTalk_Bottom("#face9#呃啊，只要身上诺巴的象征……存在一天，我就无法突破自身的极限。", 37, 3001270, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.effect_Voice("Voice3.img/cadena/Q8/Female/10", 128);
                                                                cm.sendNormalTalk_Bottom("#face8#……呼呼，翅膀、犄角、尾巴太碍事了。如果能去除这些东西，身子就自由多了……", 37, 3001270, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.effect_Voice("Voice3.img/cadena/Q8/Female/11", 128);
                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face8#哎呀，呼呼呼……", 37, 3001270, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.effect_Voice("Voice3.img/cadena/Q8/Female/12", 128);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction19.img/effect/cadena_dir/10", 0, 900, 0, -80, 12, 4, 0, -1, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face12#呼、呼，我会记住……今天这份耻辱……呼……", 37, 3001270, false, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.effect_Voice("Voice3.img/cadena/Q8/Female/13", 128);
                                                                                    cm.sendNormalTalk_Bottom("#face12#每当消极懈怠的时候，这隐隐作痛的伤口……总会不断鞭策着我……", 37, 3001270, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.effect_Voice("Voice3.img/cadena/Q8/Female/14", 128);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face6#……好，就像支部长说的，我们要走向全新的世界。为了我，为了修炼之路……", 37, 3001270, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.effect_Voice("Voice3.img/cadena/Q8/Female/15", 128);
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceCompleteQuest(34649);
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.setStandAloneMode(false);
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