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
            cm.sendNormalTalk_Bottom("#face0#考尔保很危险。必须赶紧回去……", 37, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                    cm.sendNormalTalk_Bottom("烟气开始不断冒出来了。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#咳……喂，这到底是什么？炸弹？生化兵器？？", 37, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（嘟嘟囔囔）", 37, 3004008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#什么？都不是？", 37, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#喷出来的气体……如果和污染的海水发生化学反应…… \r\n海水就会变成酸性物质……还会沸腾起来……", 37, 3004008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("酸性物质？沸腾？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#咕嘟咕嘟……然后扑哇…………", 37, 3004008, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#威力呢？由于海水量很多，所以如果被稀释…… ", 37, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#这个程度……绝对可以……和所有荒蛮终点站的海水发生反应……", 37, 3004008, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#咳，你说的如果都是事实，那么荒蛮终点站 ……", 37, 3004000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.warp(940203210, 0)
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
            cm.sendNormalTalk_Bottom("#face0#（嘟嘟囔囔）", 37, 3004008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什，什么？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(28462236);
                    cm.forceCompleteQuest(37118);
                    cm.gainItem(4036494, -50);
                    cm.dispose()
                }
            }
        }
    }
};