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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face10#女神一直等待着这一瞬间，就是为了将自己最后的一股力量转移给我们……啊。", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face10#我们在战斗中胜利的话，女神就会消亡…… 但是没有战斗或者战败的话…… 我们经历的所有事情都会变成一场空……？", 41, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face10#不战斗的方法…… 应该没有吧。因为女神也希望会那样……", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("…………", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face10#我们能…… 战斗吗？我们做好准备了吗？", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……#p2400005#。我们…… 打败威尔，拯救女神吧。", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("什么？但是那是不可能的事情啊。", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不对…… 我们可以做到。这样做的话…… (悄悄话)", 41, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face5#……原来如此。我们能救女神…… 能救她！好的…… 如果能救女神的话，我们没理由再犹豫了！击败威尔吧！并且前往冒险岛世界！", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face4#嗯！", 41, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(40800, "");
                                                    cm.forceStartQuest(40800, "");
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
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
            cm.sendNormalTalk("你们打败威尔了啊。……现在一切都结束了。镜世界即将崩溃…… 你们快准备吧。", 33, 2490002, false, true);
            cm.effect_Voice("Voice.img/Lune/12", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("即使在这样的情况下，能见到你们真的很开心。", 33, 2490002, true, true);
                cm.effect_Voice("Voice.img/Lune/13", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("黑魔法师是很强大的敌人……即使你们用尽全力战斗，还是会很吃力的。但我相信两位……看到的未来肯定和我看到的不同。", 33, 2490002, true, true);
                    cm.effect_Voice("Voice.img/Lune/14", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那，再见……", 33, 2490002, true, true);
                        cm.effect_Voice("Voice.img/Lune/15", 100)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40800, "");
                            cm.forceStartQuest(40800, "");
                            cm.forceCompleteQuest(40800);
                            cm.fieldEffect_PlayBGM("Bgm33.img/ShadowTemple", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/cygnus/back1/0"], [15000, 280, -105, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/text01/0"], [0, 280, -105, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(5000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/text02/0"], [0, 280, -105, 1, 0, 1, 1, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/text03/0"], [0, 280, -105, 1, 0, 1, 1, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(5000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("phantom/skaia", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(328090930, 0, false)
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