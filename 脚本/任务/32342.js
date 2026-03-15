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
            cm.sendNormalTalk("是嘛。黑魔法师的封印解除前，站在封印前的冒险家是你啊。", 1, 1520046, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("黑魔法师向没有人的冒险岛发动攻击，看来此举是在向你报复啊，可以这么说吧？或者说，是向前来的所有冒险家，那些想要与自己对抗的所有人发出的警告。", 1, 1520046, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么，处在那种混乱中心的你，此时的心情如何？你之前说要将冒险岛恢复原样，先不管你能不能做到，你的意思就是要继续和黑魔法师对抗吧。", 1, 1520046, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu("那你到底有没有做好准备，与那个人对抗呢？\r\n#b#L0# 我已经做好心理准备了。#l\r\n#b#L1# 我还不知道。#l", 1, 1520046)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("真令我佩服。你何来如此决心呢？", 1, 1520046, false, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu("正义？还是复仇？\r\n#b#L0# 正义#l\r\n#b#L1# 复仇#l\r\n#b#L2# 两者都不是#l", 1, 1520046)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("正义啊，很好的理由。不过，没有强大力量的话，正义也就没有任何意义了。因此我得考验考验你，看看你是否拥有真正的力量去守护你的正义。", 1, 1520046, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.curNodeEventEnd(true);
                                        cm.setInGameDirectionMode(true, false, false);
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2100, -120)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(913)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2100)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_Direction("Effect/Direction3.img/adventureStory/Scene3", 0, 0, 0);
                                                    cm.fieldEffect_ScreenMsg("adventureStory/stillSkill/0");
                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 300, 2172, 198)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1086)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……什么嘛，你有没有厉害点的技能啊？", 1, 1520046, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("advStory/karma", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.sendNormalTalk("那就是我的技能……！！！", 17, 1520046, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("……哼。", 1, 1520046, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("玩笑就到此为止吧。不管你是否和黑魔法师战斗，反正这件事从头到尾都和我没关系。", 1, 1520046, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(32342, "");
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32342.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("看来，你的确不是在开玩笑。我为之前跟你开玩笑的事情表示抱歉，刚刚你不是有事问我吗？我现在就回答你。", 1, 1520046, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请告诉我有关封印石，有关将冒险岛恢复原样的方法吧。", 3, 1520046, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("封印石……。其实，真正制作出封印石的人是弗里德，其他人的力量只是起到辅助作用。原理以及正确的使用方法也只有那家伙知道。", 1, 1520046, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("就算收集到散落在各地的封印石也没有用，如果没有能够使用它们的人也是白费功夫。黑色之翼那帮家伙已经收集到了封印石，可到现在也没发生什么动静，这不就很好地证明了这点嘛！", 1, 1520046, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那就是说，就算拥有封印石也没有用吗？", 3, 1520046, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你想要知道封印石原理的话，除非弗里德能回来，或者，出现一位与那家伙的实力旗鼓相当的时间魔法大师才行……，不过这两种情况都难以实现。", 1, 1520046, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("………….", 3, 1520046, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("所以说，与其寻找封印石，还不如靠自己的力量让冒险岛恢复原貌。……看来我扯远了。那我先告辞了。", 1, 1520046, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("对了，那块布告从美观角度上来说，确实不怎么样，所以就让我收走吧。挂着这种东西，会给圣地的人们造成负担。", 1, 1520046, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(32342);
                                                cm.gainExp(250000);
                                                cm.npc_LeaveField("oid=637717");
                                                cm.dispose();
                                                cm.warp(130030006, 2, false)
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