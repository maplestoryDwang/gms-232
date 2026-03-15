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
            cm.sendNormalTalk_Bottom("呃……奥尔卡……（自言自语地说着什么）……", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你还好吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不好……我受到了很深的伤害。根本无法抚平的深深的伤害……", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                            cm.sendNormalTalk_Bottom("呃啊……黑暗正在将我吞噬……", 37, 1530140, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这家伙又开始说奇怪的话了……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#h0#，小心！他这次不是在胡说八道！", 37, 1530030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                                            cm.forceStartQuest(32789, "");
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                cm.effect_Text(["#r#fn黑体##fs26#单恋闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0])
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                    cm.effect_Voice("Voice2.img/Friends/Narration_01/3", 100);
                                                    cm.effect_Text(["#fn黑体##fs16#因付出的真心无法得到回报, 所造就的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0])
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("呃，结果还是出现了，闹事者！必须将它消灭才行，#h0#！", 37, 1530030, false, true)
                                                    } else {
                                                        if (status === a++) {
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
            cm.sendNormalTalk_Bottom("我还以为是谁呢……你有什么事吗，跟踪狂？", 37, 1530130, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我都说了，那是个误会……总之，我有话要和你说。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("有话说？", 37, 1530130, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("给，这是你的跟踪狂写给你的最后一封信。你的回答到屋顶上去和他说吧。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#等等，你不是女生嘛……女生之间还送什么情书，这不是很奇怪吗？不对，应该这也太奇怪了……吧？", 37, 1530130, true, true);
                            cm.effect_NormalSpeechBalloon("!!", 1, 0, 0, 2000, 1530136, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#呃，不管怎样，我们认识的时间还这么短……这是不是有点太突然了！哪有你这么不顾及别人感受的？奥尔卡也是需要时间考虑的啊……那样的话说不定还会对你产生点意思呢！因为奥尔卡就是这样……", 37, 1530130, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……我看你是误会了吧？这是1年级的一个叫弗朗西斯的朋友让我转交给你的。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.setAmbience("Ambience.img/wind", 100, 60);
                                        cm.setAmbience("Ambience.img/crow", 100, 60);
                                        cm.sendNormalTalk_Bottom("#face0#………………", 37, 1530130, true, true);
                                        cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530136, cm.getPlayer().getId())
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#……\r\n\r\n#b（奥尔卡的表情突然间变得阴冷起来。怎么回事呢？）#k", 37, 1530130, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("那我就先走了。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32787, "");
                                                    cm.forceCompleteQuest(32787);
                                                    cm.playSoundEffDirectly("Ambience.img/crow");
                                                    cm.playSoundEffDirectly("Ambience.img/wind");
                                                    cm.gainItem(4030041, -1);
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
};