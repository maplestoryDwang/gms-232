var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1520064, "oid=275582", 698, -456, 59, 648, 748, 1, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.npc_ChangeController(1520019, "oid=1674267", -70, 30, 14, -120, -20, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=1674267", "summon", 0, 0);
            cm.npc_ChangeController(1520067, "oid=1674268", 860, 60, 18, 810, 910, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674268", "summon", 0, 0);
            cm.npc_ChangeController(1520065, "oid=1674269", 680, 60, 10, 630, 730, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674269", "summon", 0, 0);
            cm.npc_ChangeController(1520068, "oid=1674270", 740, 60, 12, 690, 790, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674270", "summon", 0, 0);
            cm.npc_ChangeController(1520066, "oid=1674271", 600, 60, 16, 550, 650, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1674271", "summon", 0, 0);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(30)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(30)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("找到了，变身术士!", 17, 1520019, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1674267"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("居然能进到这里？！你们到底是谁啊！", 1, 1520019, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("快把你偷走的封印石交出来！", 17, 1520019, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你们是来找封印石的？哼，一群乳臭未干的家伙！", 1, 1520019, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("呃啊！怎么办！真的是一个大叔啊！喂，#h0#，难道你真的把我和这个大叔搞混了？怎么会有这种事！", 1, 1520067, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("大，大叔？", 1, 1520019, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我的天，脸也不像，体型也完全不像嘛！你倒是说说看，我和那个大叔到底哪里像啊？气死我了！", 1, 1520067, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("你这家伙！我这可不是那种无聊的伪装。你竟敢把黑色之翼变身术士的实力当成小儿科！", 1, 1520019, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674267"], [800, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                            cm.npc_LeaveField("oid=1674267");
                                                            cm.npc_ChangeController(1520007, "oid=1674346", -70, 30, 14, -120, -20, 0, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=1674346", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1800)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("!!! 奥利维亚变成了两个人！", 1, 1520065, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("怎么样，你们这些臭家伙！这种程度的变身对我来说根本不算什么！", 1, 1520007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("………………呵呵，很好。你们大家都看见了吧？我不是说过嘛，有人变成我的样子。现在信了吧？怎么样？怎么样？你们现在没话说了吧？", 1, 1520067, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("哼。", 1, 1520068, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("(怪不得一个劲地大呼小叫，原来是故意引诱他变身啊。)", 17, 1520068, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("怎么办，#h0#。现在有两个奥利维亚啦！", 1, 1520065, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("(……而且还有没搞清状况的人啊。)", 17, 1520065, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("(总之，可以肯定的是，变身术士就是犯人。打倒变身术士吧。)", 17, 1520065, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("切，一帮小鬼，看来你们只会耍小聪明啊。反正一个个对付你们也太过麻烦，不如我送你们一起上西天吧！", 1, 1520007, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#h0#！危险！", 1, 1520065, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_MoveAction(1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1674268"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1674269"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1674270"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1674271"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674268"], [1200, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674269"], [1200, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674270"], [1200, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674271"], [1200, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.npc_LeaveField("oid=1674268");
                                                                                                            cm.npc_LeaveField("oid=1674269");
                                                                                                            cm.npc_LeaveField("oid=1674270");
                                                                                                            cm.npc_LeaveField("oid=1674271");
                                                                                                            cm.sendNormalTalk("切，居然有一个家伙没被命中啊。那就由我亲自解决你吧！", 1, 1520007, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("你对大家都做了什么？！", 17, 1520007, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("我只是让他们去了一个比较适当的地方。现在只剩下你孤零零的一个，你真是不走运啊……不过，现在可不是你担心别人的时候！", 1, 1520007, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1674267"], [800, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                                                                        cm.npc_LeaveField("oid=1674346");
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                        cm.playerMessage(-1, "请打倒变身术士！");
                                                                                                                        cm.forceStartQuest(32294, "");
                                                                                                                        cm.updateInfoQuest(32294, "baroque=1");
                                                                                                                        cm.spawnMobLimit(9300804, 1, -70, 64, 100);
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
                        }
                    }
                }
            }
        }
    }
};