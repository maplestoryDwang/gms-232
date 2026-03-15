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
            cm.askAcceptDecline_Bottom("#b……书信？", 57, 0)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("BgmPL2/FallenThings", 0, 0);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part1_0/op0", "0", "", "part1Op01"], [0, 0, 1, 0, 0, 0, 0, 1]);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/1", 128);
                        cm.inGameDirectionEvent_AskAnswerTime(5924);
                        cm.effect_Text(["#fn黑体##fs35#此地是位于冰峰雪域山脉另一面的阿布鲁盆地。"], [50, 5424, 7, 0, -50, 1, 4, 1, 300, 300])
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/2", 128);
                            cm.inGameDirectionEvent_AskAnswerTime(7820);
                            cm.effect_Text(["#fn黑体##fs35#我和我唯一的孙女相依为命，住在森林中的小屋。"], [50, 7320, 7, 0, -50, 1, 4, 1, 300, 300])
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/3", 128);
                                cm.inGameDirectionEvent_AskAnswerTime(4268);
                                cm.effect_Text(["#fn黑体##fs35#这地方虽然遍地冰雪，"], [50, 3768, 7, 0, -50, 1, 4, 1, 300, 300])
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/4", 128);
                                    cm.inGameDirectionEvent_AskAnswerTime(7064);
                                    cm.effect_Text(["#fn黑体##fs35#但承蒙祖先庇佑，是块余留着热气的祝福之地。"], [50, 5064, 7, 0, -50, 1, 4, 1, 300, 300])
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/5", 128);
                                        cm.effect_Text(["#fn黑体##fs35#从不久前开始，暖风不再吹来，"], [50, 3888, 7, 0, -50, 1, 4, 1, 300, 300]);
                                        cm.inGameDirectionEvent_AskAnswerTime(4888)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_取消复合图片动画("part1Op01", 0, 0);
                                            cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part1_1/op1", "0", "", "part1Op02"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/6", 128);
                                                cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                cm.effect_Text(["#fn黑体##fs35#怪物们开始发生诡异的变化，"], [50, 5392, 7, 0, -50, 1, 4, 1, 300, 300])
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_取消复合图片动画("part1Op02", 0, 0);
                                                    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part1_2/op2", "0", "", "part1Op03"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/7", 128);
                                                        cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                        cm.effect_Text(["#fn黑体##fs35#连我孙女也失踪了，现在生死不明。"], [50, 6472, 7, 0, -50, 1, 4, 1, 300, 300])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_取消复合图片动画("part1Op03", 0, 0);
                                                            cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/part1_3/op3", "0", "", "part1Op04"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/8", 128);
                                                                cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                cm.effect_Text(["#fn黑体##fs35#雪上加霜的是，乡亲们全都各奔东西，自寻生路，"], [50, 5008, 7, 0, -50, 1, 4, 1, 300, 300])
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/9", 128);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                    cm.effect_Text(["#fn黑体##fs35#压根儿不懂得互相体谅对方的难处，互相抚慰伤痛。"], [50, 4168, 7, 0, -50, 1, 4, 1, 300, 300])
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/10", 128);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                        cm.effect_Text(["#fn黑体##fs35#比外部的敌人更大的威胁正一步步朝我们逼近。"], [50, 7240, 7, 0, -50, 1, 4, 1, 300, 300])
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/11", 128);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(7500);
                                                                                cm.effect_Text(["#fn黑体##fs35#我抱着一丝微弱的希望寄出这封信，"], [50, 5248, 7, 0, -50, 1, 4, 1, 300, 300])
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/VoicePL.img/MONAD1_P1/12", 128);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                    cm.effect_Text(["#fn黑体##fs35#只盼着有人接到信，能来帮帮我们，"], [50, 4456, 7, 0, -50, 1, 4, 1, 300, 300])
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_取消复合图片动画("part1Op04", 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.askMenu_Bottom("#b（情况似乎非比寻常……）\r\n#L0#现在马上出发吧。先到冰峰雪域去。#l\r\n#L1#虽然想立刻动身，但情况不允许。稍后再出发吧。#l", 57, 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.dispose();
                                                                                                        if (b == 0) {
                                                                                                            cm.forceStartQuest(64154, "200000000");
                                                                                                            cm.playerMessage(5, "前往通往阿布鲁的路。");
                                                                                                            cm.forceStartQuest(64010, "");
                                                                                                            cm.updateInfoQuest(867200110, "" + cm.getMapId());
                                                                                                            cm.warp(867200100, 0)
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