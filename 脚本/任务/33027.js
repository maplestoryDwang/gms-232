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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_ForcedFlip10(2, 4);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("原来你不是普通的实习老师啊。", 57, 1530202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这是我想说的话。", 37, 1530200, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_09/1", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("与动物对话，在休息时间偷偷狩猎怪物的学生……绝不是普通的学生。", 37, 1530200, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_09/2", 100)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("！！你……究竟是什么人？", 57, 1530202, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我只是实习老师而已。", 37, 1530200, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH5_09/3", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不要撒谎！", 57, 1530202, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#没有啊，在过去的那几周，我真的只是实习老师而已。就像你真的是这学校的转校生一样。", 37, 1530200, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH5_09/4", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("但是戏总有收场的那一天。既然目的已经达成，现在演员们该退场了吧。", 37, 1530200, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH5_09/5", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("通过这段时间对你的观察，我搜集到了很多材料。", 37, 1530200, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH5_09/6", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom(" 你来自其他世界。还有，你正在处理这个城市发生的奇怪事情。我说的没错吧？", 37, 1530200, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH5_09/7", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("好奇怪……莉莉分明洗去了大家对我的记忆，为什么魔法对你行不通呢？", 57, 1530202, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你认为这一切都是偶然吗？", 37, 1530200, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH5_09/8", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("门不是仅凭一方的意志就能开启的。如果有人想要将门开启，在另一面应该会有人为其开门吧。", 37, 1530200, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH5_09/9", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我们应该还会再见面吧。这个，是我送你的离别礼物。", 37, 1530200, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH5_09/10", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(33027, "");
                                                                            cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                cm.effect_Text(["#r#fn黑体##fs26#乌贼之闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0])
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                    cm.effect_Voice("Voice2.img/Friends/Narration_01/6", 100);
                                                                                    cm.effect_Text(["#fn黑体##fs16#这是外貌出众的人创造出的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0])
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("这是怎么回事？闹事者被召唤出来了？！", 57, 1530202, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                            cm.forceStartQuest(33036, "");
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
            cm.sendNormalTalk_Bottom("你来啦。我生活的地方怎么样？", 37, 1530000, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#b（应该怎么回答呢？）#k\r\n#b#L0#那里还不错。#l  \r\n#b#L1# 生活在那里好痛苦。#l", 32, 1530001)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("原来如此。我找你来……是因为我想回到原来的地方了。", 37, 1530000, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我之前很讨厌学校。我认为除了学校之外，待在什么地方都很好。", 37, 1530000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但是停留在这里的这段时间我发现……一味地逃避现实是行不通的。", 37, 1530000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("感谢你之前代替我过学校生活。虽然有些晚，但现在我想回到我原来的位置了。", 37, 1530000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(33022);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};