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
            cm.sendNormalTalk("你来了，#p2410008#！那个……我之前的提议你考虑过吗？我们一起来改变影子骑士团！", 33, 2440003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…………", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我拒绝。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face2#为什么？对你又不是坏事！被追踪的生活……你不讨厌吗？改变了影子骑士团，就不用再被追了！我不知道你到底想要什么，但我这都是为了你好！", 33, 2440003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……虽然很感谢你，但是没有这个必要。", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face2#为什么？到底为什么？！这根本就没理由拒绝！", 33, 2440003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我已经和影子骑士团没有任何关系了……我现在也有了自己的伙伴，而且我也很满足，也不需要更多了。", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face2#但是，#p2410008#！好好想想看！你不用和我们称兄道弟！仅仅保持合作关系也可以……", 33, 2440003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我的名字……不叫#p2410008#。", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face2##p2410008#……", 33, 2440003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("这件事就这么结束了吧？……那么我先走了，希望以后见到的不是敌人。", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face1#不行！……不能就这么让你走掉。", 33, 2440003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(2410010, "oid=2833650", -187, 522, 1, -237, -137, 0, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2833650", "summon", 0, 0);
                                                            cm.npc_ChangeController(2410010, "oid=2833651", -87, 522, 11, -137, -37, 0, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2833651", "summon", 0, 0);
                                                            cm.npc_ChangeController(2410010, "oid=2833652", 381, 522, 3, 331, 431, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2833652", "summon", 0, 0);
                                                            cm.sendNormalTalk("#face7##p2440003#，你……这是干什么？", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face1#该死，我都已经说到这里了，还不能说服你，那我对他们的承诺不就全都无法实现了吗。", 33, 2440003, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face7#…………？", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face1#我以为你心肠很软，会马上答应……哈啊，如果#r能把你带回去，#p2410000#说要给我骑士团长的位置#k……", 33, 2440003, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("#face7#你……竟敢……欺骗我？！", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face1#看你这话说的？干嘛这么新奇……你这一辈子不都是被欺骗过来的吗？再多一次，又有何妨？只要被骗这最后一次，那该有多好啊。", 33, 2440003, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face11#……你，你以为我会就这么放过你吗？", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#face1#怎么可能，我只是有一点点信心而已。你还真以为我就只带这么点人过来啊？", 33, 2440003, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_LeaveField("oid=2833650");
                                                                                            cm.npc_LeaveField("oid=2833651");
                                                                                            cm.npc_LeaveField("oid=2833652");
                                                                                            cm.spawnMobLimit(9300767, 1, -187, 543, 100);
                                                                                            cm.spawnMobLimit(9300767, 1, -287, 543, 100);
                                                                                            cm.updateInfoQuest(40308, "");
                                                                                            cm.forceStartQuest(40308, "");
                                                                                            cm.npc_LeaveField("oid=2833534");
                                                                                            cm.spawnMobLimit(9300768, 1, 171, 543, 100);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40308.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face2#咳咳……", 33, 2440003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face3#你的人呢？都来了吗？你那微不足道的信心，看来一点用都没有呢？", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face0##p2410008#？对、对不起！是我错了！我只是一心想着你回到骑士团……！", 33, 2411028, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face2#打算强行把我带回去？", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face0#嗯！就、就是这样！所以，#p2410008#！我并不是想加害于你……", 33, 2411028, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face3#继续说，说得再好听也只不过是犬吠，但是我今天全都会听下去的。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face0#……#p2410008#！你就放过我这一次吧！我也实在是没办法了！因为威尔知道我和你很要好，所以才派我……！", 33, 2411028, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face3#不过，你刚才看起来挺带劲的嘛？还有没有其他借口？", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face0#我、我们不是很要好吗？！在骑士团是我们最要好……！放我过这一次吧，嗯？", 33, 2411028, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("…………", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face0#我求你了……求你了。嗯？#p2410008#……！", 33, 2411028, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face11#…………", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……我们走吧。", 41, 2400006, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("…………？", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("他绑架了武陵的人……交给武陵的话……他们应该会自行处理的。", 41, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("听说武陵的规则……特别的严格，说不定会永远关在监狱里。#p2400005#……你没必要杀了他。", 41, 2400006, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face11#但是不能留下后患。", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("嗯。不过……我不想那样。", 41, 2400006, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("为什么？", 41, 2400005, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#face10#只是……觉得#p2400005#不应该杀了他……", 41, 2400006, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("…………", 41, 2400005, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face10#不是曾经的……好友吗？", 41, 2400006, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("#face11#……可恶。", 41, 2400005, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceCompleteQuest(40308);
                                                                                                            cm.forceCompleteQuest(40933);
                                                                                                            cm.updateInfoQuest(41832, "desert=off;light=off;three=off;afrien=off;cave=off;west=off");
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.gainExp(13980000);
                                                                                                                cm.dispose();
                                                                                                                cm.warp(324000000, 8, false);
                                                                                                                cm.setInGameDirectionMode(false, true, false)
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