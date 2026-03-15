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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40060.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("好吧，准备完了，把你们找到的代理祭物交给我。现在开始我就要做分散诅咒的仪式了。你们也要注意点。", 33, 2411010, false, true);
            cm.gainItem(4033805, -1);
            cm.gainItem(4033806, -1)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Magatia/alceCircle", 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……好了，幼龙的身上的诅咒已经分散到三个祭物里去了。但是诅咒又想重新回到身上！而且力量很大，不能维持多久！", 33, 2411010, false, true);
                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/hontale/0", 1, 1, 1, 0, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("现在该轮到你们了！快解除幼龙身上的诅咒！", 33, 2411010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("时间之力……", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("回到主人身上吧！", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayFieldSound("phantom/skaia", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/hontale/0", 1, 0, 0, 0, 0)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(40060, "");
                                        cm.forceCompleteQuest(40060);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.gainExp(808000);
                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                        cm.dispose();
                                        cm.warp(321190350, 0, false)
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