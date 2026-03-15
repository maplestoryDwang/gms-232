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
            cm.setInGameDirectionMode(true, false, false);
            cm.forceStartQuest(23709, "");
            cm.npc_ChangeController(2159418, "oid=1272223", 154, 25, 1, 104, 204, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1272223", "summon", 0, 0);
            cm.sendNormalTalk("维丽尔，你为什么到这里来？是来这里找什么东西的吧？还有，#p2154009#到底想干什么？", 3, 2159418, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……可耻的背叛者……不准随便叫#b父亲#k的名字！", 1, 2159418, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1140)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("父亲？#p2154009#是你的父亲？", 3, 2159418, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的。是格里梅尔制造出了机械人，他是我真正的父亲。", 1, 2159418, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个人绝不是父亲一样的人！我原来是埃德尔斯坦的普通孩子。有一天被#p2154009#抓走了，他清除了我的记忆，想把我改造成破坏性兵器。也许你……不，你原来一定也是人类。", 3, 2159418, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那又怎样？我的过去怎么样，又有什么关系。现在我是机械人#p2159391#，是#p2154009#唯一的成功作品#p2159391#！", 1, 2159418, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你觉的自己过去是什么人没什么关系吗？", 3, 2159418, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没错。因为我不像你一样，是个失败作品！", 1, 2159418, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("失败作品？", 3, 2159418, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("身为机械人，却被感情和记忆等不必要的东西困扰，做出了背叛父亲的行为，所以你是无可置疑的失败作品。\r\n但是父亲……父亲还是认为你非常特别，一直想把你找回来，所以好几次派我出来找你。他不让我把你完全破坏掉，让我把你尽可能完整地带回去，这就是父亲的命令！", 1, 2159418, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("我不能原谅你。身为失败作品，身为背叛者，却仍然被当成“特别的东西”！", 1, 2159418, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……这就是你讨厌我的原因吗？", 3, 2159418, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1272223"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("从很久以前开始，我就觉得你非常讨厌我。但是#p2300000#说这是不可能的，说你没有理由会讨厌我。因为你是没有感情的机械人。但是如果你讨厌我，说明你还有感情……", 3, 2159418, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("闭嘴！别胡说八道！\r\n今天虽然我失败了，但下次我绝不会原谅你。\r\n即使违背父亲的命令，即使会把你毁掉，我也会全力战斗！", 1, 2159418, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_SetSpecialAction("oid=1272223", "escape", 0, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(980)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_LeaveField("oid=1272223");
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#p2159391#不像你一样，想要成为人类。她极力否认自己残留有和人类一样的感情。", 3, 2159418, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("但是为什么呢？我觉得……虽然她说不想成为人类，但她那副认真的样子……比谁都更像人类。", 3, 2159418, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.gainExp(100000);
                                                                                                    cm.forceCompleteQuest(23709);
                                                                                                    cm.playerMessage(5, "获得了经验值100000。");
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(261000000, 20, false)
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23709.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.setInGameDirectionMode(true, false, false);
            cm.forceStartQuest(23709, "");
            cm.npc_ChangeController(2159418, "oid=1272223", 154, 25, 1, 104, 204, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1272223", "summon", 0, 0);
            cm.sendNormalTalk("维丽尔，你为什么到这里来？是来这里找什么东西的吧？还有，#p2154009#到底想干什么？", 3, 2159418, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……可耻的背叛者……不准随便叫#b父亲#k的名字！", 1, 2159418, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1140)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("父亲？#p2154009#是你的父亲？", 3, 2159418, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的。是格里梅尔制造出了机械人，他是我真正的父亲。", 1, 2159418, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个人绝不是父亲一样的人！我原来是埃德尔斯坦的普通孩子。有一天被#p2154009#抓走了，他清除了我的记忆，想把我改造成破坏性兵器。也许你……不，你原来一定也是人类。", 3, 2159418, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那又怎样？我的过去怎么样，又有什么关系。现在我是机械人#p2159391#，是#p2154009#唯一的成功作品#p2159391#！", 1, 2159418, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你觉的自己过去是什么人没什么关系吗？", 3, 2159418, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没错。因为我不像你一样，是个失败作品！", 1, 2159418, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("失败作品？", 3, 2159418, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("身为机械人，却被感情和记忆等不必要的东西困扰，做出了背叛父亲的行为，所以你是无可置疑的失败作品。\r\n但是父亲……父亲还是认为你非常特别，一直想把你找回来，所以好几次派我出来找你。他不让我把你完全破坏掉，让我把你尽可能完整地带回去，这就是父亲的命令！", 1, 2159418, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("我不能原谅你。身为失败作品，身为背叛者，却仍然被当成“特别的东西”！", 1, 2159418, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……这就是你讨厌我的原因吗？", 3, 2159418, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1272223"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("从很久以前开始，我就觉得你非常讨厌我。但是#p2300000#说这是不可能的，说你没有理由会讨厌我。因为你是没有感情的机械人。但是如果你讨厌我，说明你还有感情……", 3, 2159418, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("闭嘴！别胡说八道！\r\n今天虽然我失败了，但下次我绝不会原谅你。\r\n即使违背父亲的命令，即使会把你毁掉，我也会全力战斗！", 1, 2159418, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_SetSpecialAction("oid=1272223", "escape", 0, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(980)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_LeaveField("oid=1272223");
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#p2159391#不像你一样，想要成为人类。她极力否认自己残留有和人类一样的感情。", 3, 2159418, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("但是为什么呢？我觉得……虽然她说不想成为人类，但她那副认真的样子……比谁都更像人类。", 3, 2159418, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.gainExp(100000);
                                                                                                    cm.forceCompleteQuest(23709);
                                                                                                    cm.playerMessage(5, "获得了经验值100000。");
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(261000000, 20, false)
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