var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("你就是那个超能力者啊，\r\n我是魔法师协会的会长，我叫汉斯。", 37, 1531012, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#哎哟，真是万幸。\r\n跟爷爷好像能说得通。", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("很抱歉让你等我，\r\n为了对你所在的巨大陷坑进行后续处理，我稍微来晚了点。", 37, 1531012, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#……等下，你这是什么意思，爷爷？\r\n你说城市里出现了什么？", 37, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("就如我所说的一样，\r\n那个世界的白魔法师，让你的能力溢出，在城市里造出了巨大的陷坑。", 37, 1531012, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#……！！", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("你应该有很多事情都想知道吧，\r\n不管是什么尽管问我吧。", 37, 1531012, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L1#什么是魔法师协会？#l", 37, 1531012)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("数百年前，自从席卷了大陆邪恶黑魔法师的封印之后……冒险岛世界的魔法师们就醒悟了，\r\n而没有分辨力的魔法研究最终遭致了悲剧。", 37, 1531012, false, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#b(黑魔法师啊……看样子是类似这个世界的魔王吧。)", 37, a, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("自那之后，冒险岛世界的魔法师形成了可以互相分享自己的研究，并互相监视的组织，这便是魔法师协会。", 37, 1531012, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("我有几个首席弟子，你所见过的那个叫内罗的孩子也是其中之一。", 37, 1531012, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("自从你所生活的世界被发现之后，一直以来我们就非常留心关注着你们，而内罗就是观察你所生活的城市的魔法师。", 37, 1531012, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face2#老……老师，你刚刚可是相当自然地叫我内罗了啊！", 37, 1531003, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L2#为什么要带我来这里？#l", 37, 1531012)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("没办法了，如果你继续留在震源地，陷坑就会扩大到难以收拾的地步……", 37, 1531012, false, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("我不得已动员了魔法师协会的所有人力，紧急将你召唤到了此地，就在你被转移到这个世界的同时，陷坑也暂时停止了扩张。", 37, 1531012, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("如果你能够成长到足以控制自己力量的地步……你就可以回到自己所在的世界了，在此之前，希望你能够暂时留在这里。", 37, 1531012, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L3#你对我的能力有所了解吗？#l", 37, 1531012)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("其实对于我们而言，你的能力也是个问号，居然有种不直接碰触就可以移动物体的能力。", 37, 1531012, false, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("虽说在冒险岛世界，魔法很常见，但你曾经所在的那个世界却是个没有魔法的世界……这可不是相当神奇的事情嘛。", 37, 1531012, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("可以肯定的是，白魔法师可以让你的力量产生不稳定的暴走。", 37, 1531012, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("只不过在这一点上，我们可以帮忙，\r\n你在学校失去意识的时候，帮助你控制自己的不是别人，正是内罗。", 37, 1531012, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#咳咳，我的特长是束缚魔法，请叫我束缚魔法师内拉米迪奥内鲁尼亚。", 37, 1531003, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L4#白魔法师的真实身份和目的是？#l", 37, 1531012)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("白魔法师……相信你日后就会明白，他可是在数百年前的冒险岛世界闯下了难以挽回的祸事的大人物。", 37, 1531012, false, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你所在的世界和冒险岛世界有着奇妙的因果关系，也就是说这里所发生的事情和你所在世界的事情很相似。", 37, 1531012, true, true)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.sendNormalTalk_Bottom("如果你所在世界的白魔法师也有着那奇特的贪欲和人性……你所在的世界也完全有可能发生悲剧。", 37, 1531012, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L5#陷坑的破坏很严重吗？#l", 37, 1531012)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("这你日后亲自去看了会更好吧，你所在的城市目前是紧急状态，想要恢复城市，需要很长的时间。", 37, 1531012, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("但是因为陷坑里面违反了现有的物理规律，所以目前看来，连靠近都很困难。", 37, 1531012, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("已经有数千人失踪不见了，但是，那也只是字面上的失踪罢了，现在就下结论还为时过早。", 37, 1531012, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("你也不要自责，这并不是你的错，反而是我们有错，没能阻止白魔法师……", 37, 1531012, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L6#尤娜和杰还好吗？#l", 37, 1531012)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("他们没事，所幸，陷坑在到达你的居住地之前已经停止扩张了。", 37, 1531012, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("话说回来，他们似乎非常担心你的安危。", 37, 1531012, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.askMenu_Bottom("你更想知道什么呢？\r\n#b\r\n#L7#我没什么想要知道的了。#l", 37, 1531012)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === b++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("虽然你现在肯定很想立刻回去，但还不是时候。", 37, 1531012, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === b++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("如果在你尚不能完全操控自身力量的时候就回到了原先的世界，陷坑还会继续扩张的。", 37, 1531012, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === b++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("你就留在这里，壮大自己的力量吧，这就是你现在能做的事情。", 37, 1531012, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === b++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("这虽然没什么，还请你收下吧。\r\n你的鞋子看上去不太适合走在这里的草地上。\r\n\r\n#b#i1072019# #t1072019#", 37, 1531012, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === b++) {
                                                                                                                                                                                cm.forceCompleteQuest(22744);
                                                                                                                                                                                cm.gainExp(4700);
                                                                                                                                                                                cm.gainItem(1072019, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22744.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var f = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + f + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == b++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};