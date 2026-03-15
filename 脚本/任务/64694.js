var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [1000, 1000, 2000, -50, 320])
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9400932, "oid=1697720", 100, 300, 91, 50, 150, 1, true, false);
                cm.npc_SetSpecialAction("oid=1697720", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#米兰达~你在做什么？", 37, 9400923, false, true)
                } else {
                    if (status === a++) {
                        cm.npc_SetForceMove("oid=1697720", -1, 150, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=1697720"], [4000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#呃啊啊啊啊！！！！！！！！！！！！！！！", 37, 9400923, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.effect_NormalSpeechBalloon("呃啊啊啊啊！！！！！！！！！！！！！！！", 0, 0, 0, 2000, 9400932, 6711706);
                                        cm.npc_setForceFlip("oid=1697720", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetForceMove("oid=1697720", 1, 1000, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=1697720");
                                                cm.sendNormalTalk_Bottom("#b…？", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400924, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#果然……太恐怖了吗……", 37, 9400924, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b那是什么？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#万圣节装饰……你想看看……吗？", 37, 9400924, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b嗯，请让我看看吧。\r\n呃啊啊啊啊！（简直就像埋在地底数千年的木乃伊在万圣节时复活，进入南瓜幽灵的身体狂吃了一通其他南瓜，正要饭后小憩时恰好碰上刚从地狱飞回来，浑身沾满巧克力的蝙蝠，突然口吐白沫晕倒在地的样子！！太……太可怕了！！！) ", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#很可怕吗？", 37, 9400924, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b我、我觉得还好，但是会吓到艾丹和其他孩子吧……", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……要是把孩子们吓得哇哇大哭，万圣节派对就被毁了吧？", 37, 9400924, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b……（嗯……） ", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……我想为孩子们做点什么。", 37, 9400924, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.askMenu_Bottom("#face0#你说过其他村庄会给孩子们准备点心和糖果吧？#h0#，你知道怎么做糖果吗？\r\n#b#L0#我知道。#l\r\n#L1#我不知道。#l", 37, 9400924)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.askMenu_Bottom("#face0#原来如此……你知道需要什么原料吗？\r\n#b#L0#盐#l \r\n#L1#糖#l \r\n#L2#胡椒#l", 37, 9400924)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#糖……#h0#你能帮我找些糖回来吗？", 37, 9400924, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b当然，不过在哪里能找到糖……呢？", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400924, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b(听说射手村的明明女士很擅长做饭，去找她问问吧。) ", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#b米兰达，我去去就回！", 57, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.forceStartQuest(64694, "");
                                                                                                                        cm.OnStartNavigation(100000000, 1, "1012106", 0);
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
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.npc_LeaveField("oid=208226");
                                                                                                                                        cm.npc_LeaveField("oid=1696974");
                                                                                                                                        cm.npc_LeaveField("oid=1696975");
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
            cm.sendNormalTalk_Bottom("哎呀，瞧瞧谁来了！好久不见，你最近过得好吗？", 37, 1012106, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b你好，明明女士。我很好，刚从凯兰西亚过来。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("凯兰西亚！那可是个好地方。恭喜你终于定居下来了~勇士也需要一个休息的地方嘛。", 37, 1012106, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b谢谢你。嗯……明明女士，请问……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你有什么事吗，#h0#？别客气，尽管说吧~", 37, 1012106, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b明明女士，请问你这里有糖吗？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("糖？哈哈哈哈~~当然，你想要多少都行。你是打算开火做饭吗？\r\n#b#L0#解释事情缘由#l", 37, 1012106)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哦，你们想要做糖果啊。哦呵呵呵~那你就可找对人了。稍等，我这就去厨房给你拿糖。", 37, 1012106, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("给，拿着吧。记得要用中火熬糖，边熬边搅拌，煮到冒泡哦~", 37, 1012106, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("虽然只用糖也可以做出糖果，但是添加蜂蜜可以让糖果更加香甜，还有益于健康。可惜我这里没有蜂蜜，不然我就一起给你了。", 37, 1012106, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainItem(4036604, 10);
                                                    cm.askMenu_Bottom("另外，你可以从天空之城#m200030000#的#o4230122#，或克鲁瑟斯#m240091100#的#o8147005#处获得蜂蜜。#b\r\n#L0#我要去#m200030000#。#l\r\n#L1#我要去#m240091100#。#l", 37, 1012106)
                                                } else {
                                                    if (status === a++) {
                                                        if (b == 0) {
                                                            cm.OnStartNavigation(240091100, 0, "", 0)
                                                        } else {
                                                            cm.OnStartNavigation(200030000, 0, "", 0)
                                                        }
                                                        cm.sendNormalTalk_Bottom("要想做出美食，原料和手艺虽然必不可少，但是更重要的是要怀有一颗关爱他人的心。我相信#h0#和米兰达小姐一定能做出美味甜蜜的糖果。\r\n祝你们万圣节快乐~吼吼吼", 37, 1012106, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(64694);
                                                            cm.forceStartQuest(64695, "");
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
};