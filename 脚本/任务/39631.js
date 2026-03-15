var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#骑士，你也快要离开这里了吧。在此之前……\r\n我们要和你说一下我们调查的情况。", 36, 3001963, false, true, 1)
        } else {
            if (status === i++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === i++) {
                    cm.askMenu_Bottom("#face0#除了这期间大哥托我们调查的事情之外，\r\n我们还收集了一些对你今后冒险有帮助的信息。\r\n\r\n#b#L0# 格兰蒂斯介绍 #l　#L1# 高等翼人与平民翼人 #l　#L2# 次元传送口#l\r\n#L3# 冒险岛世界#l #L4# 万神殿的骚乱#l #L5# 高等翼人骑士#l #k#L99# 没有想问的#l", 37, 3001962, 1)
                } else {
                    var reactor = "action分支" + selectionLog[3];
                    eval(reactor)(mode, type, selection, i)
                }
            }
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("【格兰蒂斯古文献4号】", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("在格兰蒂斯，有无数颗星星。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("较广为人知的种族有：翼人，阿尼玛和诺巴。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("目前人数最多的种族是翼人。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("格兰蒂斯的超越者有如下三位。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("生命超越者吉伦·达尔莫尔，", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("时间超越者克罗尼卡，", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("光明超越者艾欧娜。", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("吉伦·达尔莫尔是高等翼人的神王。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("克罗尼卡由于违逆达尔莫尔的旨意，遭到幽禁，", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("据说目前住在编年史圣殿。", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("至于艾欧娜，没有任何人知道她的存在。", 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(吉伦·达尔莫尔……他就是在主君之后继位的神王，超越凡尘的存在。\r\n可是，我脑海中完全不记得这个人的名字和长相。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                        status = 1
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("【格兰蒂斯古文献29号】", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("很久很久以前，高等翼人与平民翼人原本是一家。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("在经历漫长的内战之后，才分裂为两股势力。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("战争正式打响的起点，", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("要从先代神王被平民翼人杀死之后开始。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("当战争的残酷达到极点的某一天，", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("高等翼人王子达尔莫尔忽然觉醒成了超越者，", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("紧接着，他就以压倒性的力量消灭了平民翼人。", 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(说到与平民翼人的漫长内战，难道我记忆中那场战争也是其中之一？\r\n因为敌我双方都长着同样的翅膀。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                        status = 1
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

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("通过次元传送口可以前往其他次元。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("据说当一个超越者取得其他超越者的力量时，就会出现次元传送口……", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("有传闻说，达尔莫尔就曾经通过了次元传送口。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("传说格兰蒂斯也有几处传送口。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("其中一处，就在万神殿的大神殿内部。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("该地与冒险岛世界相连……", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("—— 摘录自影子商团情报志", 1);
                                status = 1
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("冒险岛世界是与格兰蒂斯截然不同的另一个世界。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("据消息通所说，该地堪称冒险家的天堂。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("同样的，冒险岛世界也有光明、时间、生命超越者。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("身为光明超越者的黑魔法师，过去曾想毁灭该世界，", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("后来他被五名英雄给封印了。", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("不过，有传闻说他正试图再次苏醒。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("—— 摘录自影子商团情报志", 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(冒险家的天堂……看来是个适合修炼的场所。\r\n也许，我现在也是时候该去修炼一下了。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                    status = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("不久前，我在万神殿见到了一群外形怪异的小孩儿。", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("他们长着尖尖的耳朵，和奇怪的翅膀。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("该地的议会长大发雷霆，将他们赶了出去。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("他们来万神殿的原因，似乎是为了到次元传送口的另一头去。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("—— 摘自万神殿传闻", 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(有尖尖的耳朵，又长着翅膀，难道是翼人？\r\n而且还是一群……他们为什么要穿越次元？)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(据说次元传送口不止一处。\r\n可他们不去其他地方，非跑到万神殿去，肯定是有原因的。)", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(或许他们也像我一样，脱离了翼人族？\r\n他们说不定会对我的过去略知一二。)", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                    status = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.inGameDirectionEvent_Monologue("【格兰蒂斯古文献14号】", 0)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_Monologue("神王身边，总是跟着一批杰出的骑士。", 0)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_Monologue("然而，这个传统延续到先代神王，就忽然中断了。", 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("中断时间约莫是在先代神王去世之后。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("据说在那场事件中，损失了大部分的骑士……", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("但无论如何也找不到确切的解释。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("可以肯定的是，该事件的很多内容都被保密了。", 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(骑士团……或许与我有关。\r\n我必须通过他们进一步调查一下。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                    status = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function action分支99(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(从目前已知情况来看，我曾经是参加了内战的骑士。\r\n后来被平民翼人给封印了……)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(但除此以外，其余的还笼罩在迷雾之中……能依赖的，只有我的记忆。\r\n我要找找可能知道我过去的人。)", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39631);
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.setStandAloneMode(false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39631.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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