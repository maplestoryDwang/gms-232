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
            cm.sendNormalTalk_Bottom("#face2#根据设计图~ \r\n嗯~从#b2层某处的通风口#k进去就可以了~", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.sendNormalTalk_Bottom("#face2#啊，在呼叫！怎么办？要是不赶紧过去会被怀疑的……", 36, 2052009, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#没关系的，你去吧，宅宅。从现在起，我们几个可以自行解决的。", 36, 2052000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#没关系吗？实在是太抱歉了，叫我如何是好？", 36, 2052009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#你之前所给予的帮忙，就已经让我们感激不尽了。", 36, 2052001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#谢谢你，宅宅，这份恩惠我们不会忘记的。", 36, 2052003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#来，那就赶紧走吧。\r\n要是不赶紧收工回去，博士说不定会偷吃我的方便面的。", 36, 2052005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎哟，怎么会~博士会那么做吗？", 36, 2052003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#总之，祝你们万事顺利，朋友们。", 36, 2052009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo_Bottom("#face0#来，那我们就先去#b走廊204#k吧。", 36, 2052000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(3485, "");
                                                                    cm.fieldEffect_PlayBGM("Bgm47/DancesWithAliens", 0, 0);
                                                                    cm.OnStartNavigation(221030630, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#嗯，从这里进去就可以了吗？", 36, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯~设计图太过老旧，上面的字迹都看不太清了。", 36, 2052003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#直接进去看一看会不会更好呢？", 36, 2052002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#来，那谁去比较好呢？\r\n嗯，好吧，那就由我们一无是处的黑豹和……", 36, 2052000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#谁说我一无是处了！", 36, 2052005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我去，还不知道会做些什么事出来，我得去监视着。", 36, 2052002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#哼！傻瓜~", 36, 2052005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#蠢货~", 36, 2052002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.gainExp(3668312);
                                            cm.forceCompleteQuest(3485);
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
};