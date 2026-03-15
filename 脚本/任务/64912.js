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
            cm.sendNormalTalk_Bottom("#h0#！你怎么突然出现了！吓我一跳……\r\n你没受伤吧？", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我没事。但是情况好像比想象中严重。", 56, 9401071, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是什么让工厂重新运作的……", 36, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b赛恩#k……就是之前那个#b中央电脑#。", 56, 9401071, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("他看起来和以前大不相同……好像是，自动强化了一样。", 56, 9401071, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("赛恩……？这怎么可能！", 36, 9401071, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("为什么？", 56, 9401071, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("因为赛恩……怎么说呢。他只是个简单的程序。\r\n虽然包含了一些人工智能，但他只能接受指令并简单地执行。", 36, 9401072, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("克拉尼亚制造他，并彻底使他无法做出判断。\r\n机器……产生#b自我意识#k的话，是一件很让人头疼的事情。", 36, 9401072, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("但是……他跟我说话了啊？", 56, 9401071, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("说话？不是录音吗？\r\n他说什么……？", 36, 9401072, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("说自己也是使拟真机器人痛苦的罪魁祸首……\r\n再次运转工厂，改造工作人员，让他们感受痛苦……制造无数兵器是自己的#b赎罪#k之路。", 56, 9401071, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("他还说，要主宰人类世界，以防再发生那样的事情。", 56, 9401071, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("怎么会……\r\n#b赛恩#k相同水平的电脑连感受#b感情#k的功能都没有！", 36, 9401071, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("这只是我的片面之词……\r\n怎么说他呢，好像是一种#b觉醒#k。", 36, 9401072, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这种事不是没有先例。#b人工智能#k自己学习感情，最后拥有#b自我#k。", 36, 9401072, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("那样的话岂不是需要很大的能量……他在废弃的工厂中到底做了什么？", 36, 9401071, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("残骸。丢弃的……", 36, 9401086, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("什么？", 36, 9401071, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("吸取。在那里。散发出的能量。悲伤、恐惧、孤独……还有庞大。", 36, 9401086, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("不会消失的。绝对。拟真机器人本体就算被破坏。也会不断出现……在那里……无法阻拦。", 36, 9401086, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("换句话说，那是这家伙的#b粮食#k啊。\r\n需要调查一下#b丢弃的拟真机器人残骸#k了。", 36, 9401071, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("分析内部隐藏的#b电路板#k后，就能知道如何切断能量……也就是#b阻止赛恩#k的方法了。", 36, 9401072, 1, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("工厂内的#b所有机器#k都是赛恩制造的，所以应该会拥有相同的#b电路板#k。\r\n#h0#，好像需要那个东西。", 36, 9401072, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("请交给我。", 56, 9401071, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceStartQuest(64912, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64912.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#h0#，你带来了！你果然值得信赖！\r\n来，让我看看……", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("天啊……", 36, 9401072, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("匹比，和我想的一样呢？", 36, 9401071, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯。", 36, 9401072, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("怎么了？电路板中有什么？", 56, 9401071, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我们完蛋了。", 36, 9401072, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(64912);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                    cm.gainItem(4036642, -30);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};