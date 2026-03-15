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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("好久不见了，双弩精灵。那天连招呼都没能和你打。自从那天我消失之后都发生了些什么事情，能详细和我说说吗？很抱歉一见面就问你这些。", 3, 2159480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那，那天？这，这个…………啊对了，我们这么久才见，那件事以后再说吧，先参观参观村子怎么样？你第一次来埃欧雷吧？", 1, 2159480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是啊，就像你说的，这里的确很美。别的家伙们也来过这儿吗？", 3, 2159480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呃，嗯！当然都来过了。你是最晚的。", 1, 2159480, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("原来如此。弗里德还说一定要来埃欧雷看看呢…………", 3, 2159480, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("弗，弗里德？当，当然！弗里德也来过了。当然了，你是最后一个嘛！你到底睡了多久啊？我们是一块入睡的，只有你睡到现在才醒？", 1, 2159480, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("…………弗里德也来过？", 3, 2159480, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是，是啊！对了，弗里德还说起过你呢。说你到底出了什么事怎么还不回来。这段时间发生什么事了吗？", 1, 2159480, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(弗里德来过这里？还若无其事地说起我？不可能。两件事都不可能。可是双弩精灵为什么要这么说呢？难道…………)", 3, 2159480, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("…………没，没什么。可是双弩精灵，你还记得吗？你和战神一起为我做的食物，不知为什么总是还想吃。就是那个带点辣味的绝品三明治。", 3, 2159480, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("当，当然！当然记得了，你那么喜欢的。当时你吃得那么香让我这个厨师很有成就感呢。", 1, 2159480, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("啊啊，我想起来了，你做的食物中还有一种味道很#e甜。的。#意大利面。因为我最讨厌甜食，所以当时吃一口就吐出来了，还一脸的哭相。", 3, 2159480, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("对，对啊！是有那么一回！啊哈哈，过了太长时间都有些记不清了！可能是因为我很喜欢吃甜的，所以放了很多糖。下次一定不做甜的给你吃，#r#e隐月#k#n。", 1, 2159480, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("…………你，是谁？", 3, 2159480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你怎么了，突然间，隐月。你变得很可怕。", 1, 2159480, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("你不是双弩精灵。双弩精灵根本不知道隐月这个名字。而且弗里德…………现在已经下落不明了，不可能出现在这个村子里。你是谁？快说为什么要假扮双弩精灵。", 3, 2159480, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("…………这么快就被你发现啦？比看起来厉害多了嘛？", 1, 2159480, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/lucid/0"], [0, -380, -45, 1, 0, 1, 1, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(38043, "");
                                                                                        cm.forceStartQuest(38043, "");
                                                                                        cm.forceForfeitQuest(38902);
                                                                                        cm.forceStartQuest(38904, "1");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_ChangeController(2159481, "oid=240635911", -380, -47, 2, -430, -330, 0, false, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=240635911", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("你要是待在我为你呈现的美梦当中多好啊。既然是来见双弩精灵的，就当是见过了然后离开不就行了？", 1, 2159481, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("那是精灵的耳朵。为什么精灵要假扮双弩精灵呢？你到底是谁。", 3, 2159481, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("这不是你该知道的。这段时间，埃欧雷可是有趣极了，都是因为你，我不得不结束这场游戏，所以我现在非常生气。通常，做梦时一旦意识到是做梦，那么也就到了梦醒的时候了。", 1, 2159481, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("今天的债我以后会来向你讨回的。到那时，我要让你见识见识什么才是无比可怕的噩梦。那么下次再见吧！", 1, 2159481, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=240635911", "remove", 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_LeaveField("oid=240635911");
                                                                                                                        cm.npc_LeaveField("oid=240635911");
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("也就是说到现在为止，所有的一切都是做梦了？那么，难道村子里的精灵也…………！", 3, 2159481, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(910150300, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38043.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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