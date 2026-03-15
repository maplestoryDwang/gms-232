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
            cm.sendNormalTalk_Bottom("我能做好吗？", 37, 2074123, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("要怎么做，做什么，哦……准备好稻草……不，\r\n要准备更好吃的大米……", 37, 2074123, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#难道你是……母胎单身？", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("母胎单身？那是什么意思啊？", 37, 2074123, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#啊，算了，\r\n哈……这该如何是好啊……", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#女孩子喜欢的有什么呢？", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("稻草？", 37, 2074123, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不对。", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("很多稻草？", 37, 2074139, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#不要这种。", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("哦……漂亮的稻……", 37, 2074123, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face6#花！花！是花啊！花！", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face5#可没有哪个女孩子会讨厌被送花的！\r\n来，赶紧拿些漂亮的花去表白吧。", 37, 2074100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("花？花……要从哪儿找……", 37, 2074123, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#那什么！！我们会给你送过去的！", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#我们会给你准备好的，你只要表白就好！明白了吧？\r\n啊哟……#b#h0##k，走吧，都快愁死我了。", 37, 2074100, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(30423, "");
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#来，拿着这个，去表白吧！赶紧的。", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哇……原来玫瑰花这么漂亮啊……\r\n就像是她呢……真的，谢谢了。", 37, 2074139, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那现在该轮到你去传递你的心意了。", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯，等一下，可不可以再给我一点心理准备的时间？\r\n呼……呼……", 37, 2074139, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(30423, "gExpCheck=1");
                            cm.forceStartQuest(30423, "");
                            cm.gainExp(483003);
                            cm.forceCompleteQuest(30423);
                            cm.inGameDirectionEvent_AskAnswerTime(400);
                            cm.gainItem(4034639, -20);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
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
};