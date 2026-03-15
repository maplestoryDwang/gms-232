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
            if (cm.getMapId() != 867147000) {
                cm.sendNormalTalk_Bottom("#b（回到远征队本部，寻找可以收编的队员吧。）", 56, 0, false, true);
                cm.dispose();
                return
            }
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#b（我来看看……）", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNewEffects(17, [1000, 1000, 2000, -50, -50])
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（他看上去是一个经验丰富的战士……应该会对初期战斗力有所帮助。）", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNewEffects(17, [500, 2000, 2000, -230, 150])
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b（他的性格好像很开朗，伙伴之间当然最好能够心意相通。） ", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(17, [500, 2000, 2000, 360, 50])
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b（他好像是个新手，太稚嫩了。）", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b（好的，与他们俩对话看看吧。）", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(19, [0])
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.openNewUI(1, "UIAbyssExpeditionManangementButton");
                                                                        cm.forceStartQuest(64761, "");
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

function stage0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b你好吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呵呵呵，你好吗！", 36, 9401035, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b请问你找到伙伴了吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这个朋友，还真是豪～爽！我还是第一次见到这样跳过客套话，直接提问题的家伙。呵呵呵", 36, 9401035, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b很抱歉，我失礼了，我不久前刚来到这里，所以可能是有些心急了。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("说什么失礼呀～大家都这么忙，当然长话短说才好。哈哈哈哈。", 36, 9401035, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抱歉，我正在等待一个朋友。虽然他比约定好的日子晚了一些，但对于男人来说，最重要的就是义气！不是吗！", 36, 9401035, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b原来如此，真可惜。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呵呵，这也是一种缘分，要喝一杯吗？哦，我可不是说喝酒，而是喝蛋白质营养剂。马上不是有很多地方要用上肌肉嘛！", 36, 9401035, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b谢谢你的好意，但还是不用了。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("好的，下次再见。", 36, 9401035, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b（……真可惜，与其他人对话看看吧。）", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(64761, "NpcSpeech=94010351");
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

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b你好吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗨YO！", 36, 9401049, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("跟我搭话的朋友，我一直在关注着你-YO！", 36, 9401049, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b啊……（性格好像和外表不太一样。）", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你想对我说什么？", 36, 9401049, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b请问你找到伙伴了吗？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呜哦！果然-心情真棒！", 36, 9401049, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嘿，对不起，我不能和你同行YO。", 36, 9401049, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b什么？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你看上去就像漫天飞舞的蒲公英一样稚嫩YO", 36, 9401049, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我的队长必须是个身强力壮的man~~~！You know身强力壮？", 36, 9401049, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b（……看来这个人也不行。现在剩下的是……）", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(64761, "NpcSpeech=94010351/94010492");
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

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b你好。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呜哇哇？你现在是在跟我说话吗？我……我太激动了！终于！", 36, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b什么？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你是想选择我作为伙伴吧？是这样吧？", 36, 9401029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b（……这个闪闪发光的眼神真是让人无法拒绝。）", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我是莫妮卡！魔法师！我会使用圣箭术，还有……我特别聪明！", 36, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呃嗯，你怀疑的目光会让我非常难过。请听我说，目前深渊已经被探索到地下9层，所发现的怪物有喜欢挖掘土地的深渊迪格，吃掉眼前一切的食石者，还有克里弗，眼下我们对它的了解不深，只知道它拥有许多条腿和会发光的身体！", 36, 9401029, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("乘坐升降机即可进入深渊，根据指挥等级不同，可以下至指定层。你……还是新手哦？那么你可以下至地下3层！哦哦，不用担心。要是我成为了远征队队员，就会努力快快成长，让我们进入更下层，真的！", 36, 9401029, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b你可以慢点说，没关系，稍微喘口气！", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哈啊，哈啊……", 36, 9401029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你今天是第一次来到这里吧？我来到远征队本部已经有几周的时间了，但是大家都说我太稚嫩，不愿意和我成为伙伴……嘁，对于冒险，年龄有什么重要的？我拥有的是年轻朝气！还有永不熄灭的热情！", 36, 9401029, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("请问该怎么称呼你……", 36, 9401029, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b啊，我叫#h0#。", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#h0#！连名字都这么帅气。#h0#会接受我成为……伙伴的吧？", 36, 9401029, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b（我该怎么办？他看上去懂得许多关于深渊的知识……）", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("（亮晶晶的眼神）", 36, 9401029, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b（实在无法避开那充满期待和希望的眼神。）", 56, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b好！你愿意和我同行吗？", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("哇啊啊啊！太好了！呼唔，呼唔！我现在不是在做梦吧？", 37, 9401029, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b嗯，对于深渊，我还不太了解，还请你多多帮助我。", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("当然了！相信我吧。", 37, 9401029, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.updateInfoQuest(64755, "mCount=1");
                                                                                                cm.forceCompleteQuest(64761);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};