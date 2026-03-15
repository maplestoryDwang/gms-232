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
            cm.inGameDirectionEvent_ForcedFlip10(1, 117);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("你来啦。你就是那个传闻中的转校生？我听说你第一天入学就跟人打架，还把对方打得#r昏迷不醒#k。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不是的，这件事我已经解释过很多次了，那人不是被我打昏的……", 57, 1530076, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你不用狡辩，大家都知道了。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你的名字是#b#h0##k。\r\n你的座右铭是#b< " + cm.getStringFromQuestInfo(32724, "m") + " >#k……我也都已经知道了。还真是就连座右铭也和你的名字一样古怪。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("只要是发生在这所学校的事，我可以比任何人都快速地获得情报。因为这就是我#b南哈特#k作为学生会长的任务。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 1030, 62)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            cm.effect_Text(["#fn黑体##fs26#南哈特, 神兽国际学校 学生会长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.sendNormalTalk_Bottom("最近关于你的传闻好像已经在学生们之间传得沸沸扬扬的了。说什么是传说中的转校生……不过提醒你一下，我对什么传说啊、命运啊这些不合逻辑的话可是完~全不相信。", 37, 1530070, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我虽然不知道你是为了什么目的才转到这所学校来的，不过对于你的一举一动，我会随时关注的。如果你想加害希纳斯小姐，我更是不会放过你。", 37, 1530070, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("根据校规第3条第6项内容，我要对你略施处罚，就罚你打扫卫生吧。最近总是会出现一些奇怪的#r灰尘#k或者#r灰突突的痕迹#k什么的。", 37, 1530070, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("你知道咱们学校一共有4层楼吧？你就去把#b3楼走廊#k、#b4楼走廊#k还有#b屋顶#k打扫一下吧……", 37, 1530070, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("那么，等你把#b三个地方#k都打扫干净之后再来找我吧。\r\n\r\n#b（上楼去寻找可以打扫的地方吧）#k", 37, 1530070, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(32732);
                                                                                        cm.forceStartQuest(32733, "");
                                                                                        cm.forceStartQuest(32734, "");
                                                                                        cm.forceStartQuest(32735, "");
                                                                                        cm.forceStartQuest(32758, "");
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

function end(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_ForcedFlip10(1, 117);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("你来啦。你就是那个传闻中的转校生？我听说你第一天入学就跟人打架，还把对方打得#r昏迷不醒#k。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不是的，这件事我已经解释过很多次了，那人不是被我打昏的……", 57, 1530076, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你不用狡辩，大家都知道了。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你的名字是#b#h0##k。\r\n你的座右铭是#b< " + cm.getStringFromQuestInfo(32724, "m") + " >#k……我也都已经知道了。还真是就连座右铭也和你的名字一样古怪。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("只要是发生在这所学校的事，我可以比任何人都快速地获得情报。因为这就是我#b南哈特#k作为学生会长的任务。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 1030, 62)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            cm.effect_Text(["#fn黑体##fs26#南哈特, 神兽国际学校 学生会长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.sendNormalTalk_Bottom("最近关于你的传闻好像已经在学生们之间传得沸沸扬扬的了。说什么是传说中的转校生……不过提醒你一下，我对什么传说啊、命运啊这些不合逻辑的话可是完~全不相信。", 37, 1530070, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我虽然不知道你是为了什么目的才转到这所学校来的，不过对于你的一举一动，我会随时关注的。如果你想加害希纳斯小姐，我更是不会放过你。", 37, 1530070, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("根据校规第3条第6项内容，我要对你略施处罚，就罚你打扫卫生吧。最近总是会出现一些奇怪的#r灰尘#k或者#r灰突突的痕迹#k什么的。", 37, 1530070, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("你知道咱们学校一共有4层楼吧？你就去把#b3楼走廊#k、#b4楼走廊#k还有#b屋顶#k打扫一下吧……", 37, 1530070, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("那么，等你把#b三个地方#k都打扫干净之后再来找我吧。\r\n\r\n#b（上楼去寻找可以打扫的地方吧）#k", 37, 1530070, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(32732);
                                                                                        cm.forceStartQuest(32733, "");
                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                        cm.forceStartQuest(32734, "");
                                                                                        cm.forceStartQuest(32735, "");
                                                                                        cm.forceStartQuest(32758, "");
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
};