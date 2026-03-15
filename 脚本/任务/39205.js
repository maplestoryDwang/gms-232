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
            cm.sendNormalTalk_Bottom("噢，强大的朋友！\r\n你去了哪里，我找了好久。我有事要拜托你。\r\n#b我丢了样东西，真的是很重要的东西。", 36, 2155104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#但是…我不记得那是什么了。\r\n我知道#b我丢了非常重要的东西#k，但我却不知道那是什么…\r\n如果找到那样东西，说不定对我恢复记忆有很大帮助。", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你还记得你#b第一次救我的那个地方#k吗？\r\n我猜想我可能在那里掉落了什么东西…\r\n但其他机器人不允许我到那里去。", 36, 2155104, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("不过，如果有你在那就不一样了。\r\n即使超级人造人再次出现，你也能轻易对付它们。\r\n你能和我一起去第一次发现我的地方吗？\r\n\r\n#g- 如果点击“是”，即可自动移动。", 37, 2155104)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("谢谢你，朋友。那我们立刻出发吧？\r\n瞒着其他机器人，这里…", 37, 2155104, false, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(310070154, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39205.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#呃呃呃…", 36, 2155121, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("差点就糟糕了。现在它的芯片还不完整，在这种状态下\r\n#b好像又承受了很大的负担。#k\r\n如果再晚点，说不定芯片就要烧焦了。如果那样的话…", 36, 2155125, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是不是会需要更多的时间才能被治疗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不…无论以什么方式，#b如果芯片因为超负荷而烧焦，那…#k\r\n那…如果说人类的心脏爆炸，那会怎么样？", 36, 2155125, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("会死。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我们也是一样。芯片烧焦和破碎是不同的。\r\n这个说明起来有点复杂，但…#b超负荷#k真的很危险。\r\n破碎的芯片只要修复就行了，但#b芯片如果熔化…那就完了。#k", 36, 2155125, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("所以，捡回来的就是这个？", 36, 2155125, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#g(拿着写有奇怪数字的铁板)", 36, 2155125, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯？这个我好像在哪里见过…\r\n是在哪里见过来着…", 36, 2155125, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#呃…我得想起来，拜托。\r\n我要回去…她的…\r\n啊…", 36, 2155121, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("哦嗬！请稍微忍耐下！\r\n你现在还不能思考太多东西。\r\n拜托你安静地待会儿，就像真正的笨蛋一样。", 36, 2155125, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#不过…\r\n啊…我的头…呼…\r\n我一定要回去…", 36, 2155121, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯……稍微休息一下就会没事的。\r\n拜托你多多照顾这位朋友。不知道为什么……看来不能把他独自待着了。", 36, 2155125, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(39205, "find=0");
                                                                cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;2q=1;3q=1;4q=1;5q=1;dqCount=1;story=1");
                                                                cm.forceStartQuest(39205, "");
                                                                cm.gainExp(60623436);
                                                                cm.updateInfoQuest(39205, "gExpCheck=1;find=0");
                                                                cm.forceCompleteQuest(39205);
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
};