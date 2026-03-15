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
            cm.sendNormalTalk_Bottom("#face0#真是难以置信，就算再怎么累，居然向普通人寻求帮助。", 37, 9400581, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b……我觉得他们需要恢复体力的时间。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在现在这种紧急的战时情况下，松懈就等于失败。", 37, 9400581, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我年轻的时候，为了追击敌人，好几天不吃不睡。但是你们三餐都好好吃着，每天还能睡在火堆旁边，居然还敢说出这种话！我无法容忍。", 37, 9400581, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#本来我就因为在士兵间流传着在卡夫塔佩战斗时见到了巨大影子的传闻而头疼来着……", 37, 9400581, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b巨大的影子？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#是啊，你不会也害怕吧？", 37, 9400581, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b这是谁说的？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#之前在这里休息的士兵威尔森说的。这就说明他精神松懈到了那种程度了。你现在明白了吗？", 37, 9400581, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b(……又一个目击者！和他谈谈吧。) ", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0##h0#？", 37, 9400581, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b谢谢，巴特勒副团长。我先走了……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我还没说完呢，你去哪……", 37, 9400581, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(64065, "");
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
            cm.sendNormalTalk_Bottom("#b威尔森？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，#h0#！派遣团团长是不是骂了你……？都是因为我们，抱歉……", 37, 9400622, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b没有，巴特勒副团长说了关于“巨大的影子”的事情……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊！没有！那都是因为我太累了才会看见那种东西，真的！", 37, 9400622, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b啊……我也看到了类似的东西，你可以跟我说实话的。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不不，那真的是我的错觉。", 37, 9400622, true, true)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.setInGameDirectionMode(true, false, true);
                                    cm.npc_setForceFlip("oid=9400587", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetForceMove("oid=9400587", 1, 50, 50);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.sendNormalTalk_Bottom("#face0#……在居民中也有很多人说起那个影子。", 37, 9400587, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#人们把它叫做“雾中黑影”。虽然不知道那个是活着的……还是从地狱中冒出的烟雾形成的虚影……", 37, 9400587, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#但是大家都不愿相信它是真实存在的。", 37, 9400587, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……嗯……", 37, 9400622, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b……究竟……那个……", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#在现在这种情况下，我希望那是个幻影。因为现在还没人看到它的实体。", 37, 9400587, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#总是在刮着暴风雪……或者有烟雾的时候才能看到它。不过我也希望那只是人们在恐惧中……想象出来的幻影。如果那样的东西真的存在……", 37, 9400587, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b……（看来还得再调查下。) ", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(64020, "chk1=1;chk2=1;chk3=1");
                                                                            cm.forceCompleteQuest(64065);
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
};