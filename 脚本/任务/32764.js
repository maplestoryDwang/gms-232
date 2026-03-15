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
            cm.sendNormalTalk_Bottom("我好长时间才来学校一次，竟然会有这种晴空霹雳……为什么会是我收到威胁信？我奥尔卡没做错过任何事啊！只是太过可爱、漂亮、机灵一些而已啊！难道说可爱、漂亮、机灵也有罪吗？", 37, 1530130, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("你问我都写了什么内容？哼，不知道！你拿去自己看看不就知道了吗？你马上给我查出来这信是谁写的。然后再给我好好教训他一顿，让他再不敢出现在我奥尔卡的周围！", 37, 1530130)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32764, "");
                    cm.sendNormalTalk_Bottom("#b（拿着信回到办公室的南哈特那里吧）#k", 56, 0, false, false);
                    cm.gainItem(4034163, 1);
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
            cm.sendNormalTalk_Bottom("你回来啦。这就是那封有问题的威胁信？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.sendNormalTalk_Bottom("虽然有些湿乎乎的……不过从表面看像是一封情书啊？不会是奥尔卡太过敏感了吧？", 37, 1530110, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_02/1", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("以她的性格完全有可能。", 37, 1530120, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH2_02/2", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这个嘛，看看内容应该就能知道了。小心点打开，别留下指纹。", 37, 1530070, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_02/3", 100)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("letter", "Map/Effect2.img/spinOff1/letter2", 0, 1500, 0, 0, 12, 4, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("天呐……太过分了。", 37, 1530110, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_02/4", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这真是太过分了。就算再讨厌奥尔卡也不至于写这样的信吧……", 37, 1530120, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH2_02/5", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("果然……这是不折不扣的威胁信啊。完全不是什么敏感反应。", 37, 1530070, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH2_02/6", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#决不能饶恕！\r\n我以爷爷的名义发誓，一定要查出那个跟踪狂的真实身份！", 37, 1530110, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH2_02/7", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#这人为什么突然念叨起爷爷来了……", 37, 1530120, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH2_02/8", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("letter", "", 2, 1000, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(32764, "");
                                                                cm.forceCompleteQuest(32764);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.gainItem(4034163, -1);
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
};