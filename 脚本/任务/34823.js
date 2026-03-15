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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -80, -120)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(3001314, "oid=669426", 330, 0, 3, 280, 380, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669426", "summon", 0, 0);
                cm.npc_ChangeController(3001315, "oid=669427", 400, 0, 3, 350, 450, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669427", "summon", 0, 0);
                cm.npc_ChangeController(3001310, "oid=669428", 5, 0, 3, -45, 55, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669428", "summon", 0, 0);
                cm.npc_ChangeController(3001308, "oid=669429", 75, 0, 3, 25, 125, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669429", "summon", 0, 0);
                cm.npc_ChangeController(3001307, "oid=669430", 145, 0, 3, 95, 195, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669430", "summon", 0, 0);
                cm.npc_ChangeController(3001311, "oid=669431", 265, 0, 3, 215, 315, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669431", "summon", 0, 0);
                cm.npc_ChangeController(2491009, "oid=669432", -400, 0, 3, -450, -350, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=669432", "summon", 0, 0);
                cm.npc_ChangeController(2491007, "oid=669433", -475, 0, 3, -525, -425, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=669433", "summon", 0, 0);
                cm.npc_ChangeController(3000149, "oid=669434", -175, 0, 3, -225, -125, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=669434", "summon", 0, 0);
                cm.Npc_Fadeout("oid=669432", 0, 0);
                cm.Npc_Fadeout("oid=669433", 0, 0);
                cm.Npc_Fadeout("oid=669434", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(100)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -3, -5);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.inGameDirectionEvent_AskAnswerTime(100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_ForcedFlip10(1, 60);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("好，下面我来说说有关次元移动的事情。", 37, 3000003, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#搞什么啊？", 37, 3000002, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.Npc_Fadeout("oid=669432", 255, 800);
                                            cm.Npc_Fadeout("oid=669433", 255, 800);
                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你们刚才明明说只是路过一下啊？", 37, 3000000, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#按照跟贝尔德大人之前的约定，现在马上就能脱离万神殿了。", 37, 3001354, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#在那期间也给了我很大帮助。", 37, 3000149, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(800, 0, 1500, 800, -80, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.Npc_Fadeout("oid=669434", 255, 800);
                                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#帮助狂龙战士？什么意思？", 37, 3000002, false, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#是的，多亏了这些朋友，我才能轻松启动次元传送口。", 37, 3000149, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那些家伙该不会又再打什么鬼主意吧……", 37, 3000002, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#怎么会呢，孩子们看上去都很善良呢。", 37, 3000003, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1200, 0, 1500, 1200, 440, 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("好，各位可以通过那边的次元传送口进行次元移动了。", 37, 3000003, false, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("虽然我们生活在“格兰蒂斯”次元，但谁也不知道那边次元究竟是什么样的……", 37, 3000003, false, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("可能会有危险，一定要小心。还有，希望你能找到阻止达尔莫尔的那样东西……", 37, 3000149, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
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
                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                            cm.npc_LeaveField("oid=669432");
                                                                                                                            cm.npc_LeaveField("oid=669433");
                                                                                                                            cm.npc_LeaveField("oid=669434");
                                                                                                                            cm.npc_LeaveField("oid=669428");
                                                                                                                            cm.npc_LeaveField("oid=669431");
                                                                                                                            cm.npc_LeaveField("oid=669430");
                                                                                                                            cm.npc_LeaveField("oid=669429");
                                                                                                                            cm.npc_LeaveField("oid=669426");
                                                                                                                            cm.npc_LeaveField("oid=669427");
                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.forceStartQuest(34823, "");
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
            cm.sendNormalTalk("难道，长老斯坦……？", 2, 1012003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么冒险家？哦，你们的翅膀挺华丽的嘛？", 0, 1012003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那个像球一样的东西又是什么？看来你不是这个地区的人吧？", 0, 1012003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们来自名为“格兰蒂斯”的其他次元，对这里的情况一无所知。如果方便，能问你几个问题吗？", 2, 1012003, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu("好，你想问什么？\r\n#b#L0# 关于长老斯坦#l\r\n#L1# 关于射手村#l\r\n#L2# 关于冒险岛世界#l\r\n#L3# 关于格兰蒂斯和平民翼人#l\r\n#L4# 关于平民翼人古代神之圣所#l\r\n#L5# 没有问题了。#l", 0, 1012003)
                        } else {
                            if (status === a++) {
                                switch (b) {
                                    case 0:
                                        status = 3;
                                        cm.sendNormalTalk("你说我吗？我是射手村的长老。", 0, 1012003, false, true);
                                        break;
                                    case 1:
                                        status = 3;
                                        cm.sendNormalTalk("射手村？你们现在所在的不就是射手村吗？这里是金银岛的众多村庄之一，可以说是冒险岛世界中最具代表性的村庄了。", 0, 1012003, false, true);
                                        break;
                                    case 2:
                                        status = 3;
                                        cm.sendNormalTalk("你不知道冒险岛世界？哇～看来你真是从其他次元来的啊？冒险岛世界就是我们现在所在的这个世界。海底的水下世界、矿山村埃德尔斯坦、沙漠地带的阿里安特、万年积雪的冰峰雪域……冒险岛世界里有着各种各种的村庄。", 0, 1012003, false, true);
                                        break;
                                    case 3:
                                        status = 3;
                                        cm.sendNormalTalk("平民……什么玩意儿？我好像在哪里听说过格兰蒂斯……哦，对了，我记得那是诺巴们所生活的地方！不过平民翼人这个名字倒是头一次听说啊！", 0, 1012003, false, true);
                                        break;
                                    case 4:
                                        status = 3;
                                        cm.sendNormalTalk("不知道那个古代神之圣所说的是哪位神呢。听说从神木村可以去时间女神伦娜的神殿，可是……村内事务太忙了，我到现在还一次都没去过呢。不过，反正伦娜是冒险岛世界的女神……不是平民翼人的神吧？", 0, 1012003, false, true);
                                        break;
                                    default:
                                        cm.sendNormalTalk("虽然不知道能不能帮上忙，不过我会替你祈祷的。希望你能尽快找到需要的物品。", 0, 1012003, false, true);
                                        break
                                }
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#真是没想到！？现在怎么办？", 37, 3001307, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#那老头，好像对古代水晶和古代神之圣所一无所知……？", 37, 3001311, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4#嗯。看来没有想象中那么容易找到了。", 37, 3001354, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#不如我们分头找吧。", 37, 3001354, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#幸好有课上制作好的水晶门，那我们在那里会面，交换情报吧。", 37, 3001354, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#水晶门内部可使用#b返回避难所#k技能入场。", 37, 3001300, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#好！这里就作为我们探险队的据点吧！", 37, 3001307, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#这么点事有什么可兴奋的！冷静点吧你。", 37, 3001311, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#如果找到有关古代神之圣所的线索，我马上联系你！", 37, 3001310, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#好，我也要努力打听消息了。", 37, 3001308, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那么……我们的首个探险地选在哪里好呢？呵呵！", 37, 3001307, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#综合目前搜集的情报来看，推荐你使用次元传送口前#b奥斌#k提到的#b金海滩#k。", 37, 3001300, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#嗯，听起来还不错。那快走吧。", 37, 3001354, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(34823);
                                                                                        cm.updateInfoQuest(34823, "maple=1;exp=1");
                                                                                        cm.gainExp(7498);
                                                                                        cm.getPlayer().levelUp();
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