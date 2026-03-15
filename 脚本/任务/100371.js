var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100371, "start");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.sendNormalTalk("#e#h0##n！\r\n欢迎来到#b#e满月鬼怪夜市#n#k！", 4, 9062229, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这里有许多特别又新奇的物品！只要拥有\r\n#b#e#i2630976:# #t2630976##n#k，就可以享受夜市的各种活动！", 4, 9062229, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#e#i2630976:# #t2630976#…………？#n#k\r\n\r\n在夜市中只能使用#e#b鬼怪铜币#n#k吗？\r\n可我没有鬼怪铜币呢。", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("诶咦……！你没有#b#e#i2630976:# #t2630976##n#k？\r\n你想空着口袋就来夜市中玩乐吗？", 4, 9062229, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那该如何获得#b#e#i2630976:# #t2630976##n#k呢？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("鬼怪铜币可以从#r#e鬼怪棒#n#k中获得！\r\n这样看来原来你没有鬼怪棒呀！", 4, 9062229, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("那我就将#r#e鬼怪棒#n#k借给你，还请你帮我个忙！", 4, 9062229)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(80002852, 0, -1);
                                        cm.teachSkill(80002852, 1, 0);
                                        cm.teachSkill(80002852, 1, 0);
                                        cm.updateInfoQuest(100372, "count=0;prob=40;date=200416;max=0;coin=0");
                                        cm.updateInfoQuest(100374, "maxCount=0");
                                        cm.openUIWithOption(3, 80002852);
                                        cm.playerMessage(5, "获得了[盖子的鬼怪棒]技能。");
                                        cm.playerMessage(5, "现在开始前往等级范围怪物出现的地方，即可使用鬼怪棒。");
                                        cm.sendNormalTalk("你愿意帮忙真是太好了！\r\n其实最近夜市中有#b#e冒险岛世界的怪物#n#k潜入，偷东西吃！", 4, 9062229, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("但是大家都忙着处理夜市的事情，没法\r\n教训怪物们。\r\n\r\n所以麻烦你带着我的#e#r鬼怪棒#n#k，\r\n#b去教训一下怪物们。", 4, 9062229, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("嗯……那该如何从#r#e鬼怪棒#n#k中获得#b#e#i2630976:# #t2630976##n#k呢？", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("哈哈！我正准备告诉你呢！\r\n\r\n这个棒子中住着一个叫做#r#e叮咚#n#k的#b#e小鬼#n#k！\r\n叮咚也因为怪物们偷走了自己爱惜的零食，压抑了好久情绪！", 4, 9062229, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#r#e叮咚#n#k只有开心的时候才会出现！\r\n然后丢下 #b#e#i2630976:# #t2630976##n#k之后就会消失！\r\n用鬼怪棒#b#e教训怪物后#n#k叮咚就会高兴的出现！", 4, 9062229, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("偶尔叮咚特别兴奋，就会洒下许多#b#e#i2630976:# #t2630976##n#k！\r\n我把它称作#r#e叮咚时间#n#k！\r\n这是获得铜币的大好机会，加油吧！", 4, 9062229, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("但是#r#e叮咚时间#n#k并不常出现！\r\n叮咚非常#b#e善变#n#k，随心情而出现……\r\n只有运气好才能遇见！", 4, 9062229, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("所以，随身携带鬼怪棒\r\n\r\n#r#e#fs17#应该就可以和叮咚亲近一些了吧？#n#k", 4, 9062229, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("那我就将#e鬼怪棒技能#n交给你！\r\n教训#r#e等级范围怪物#n#k，收集#b#e鬼怪铜币#n#k吧~\r\n\r\n#r", 4, 9062229, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(100371, "start=1");
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

function action1(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("诶咦！！这些讨厌的怪物家伙们\r\n又偷走了夜市的食物！\r\n\r\n#L0# 了解盖子的#r#e鬼怪棒#k#n。#l\r\n#L1# #e#b了解已经获得的鬼怪铜币#k#n。#l\r\n#L2# 没有什么想了解。#l\r\n", 4, 9062229)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("带上#e#r鬼怪棒#n#k，教训#b#e等级范围怪物#n#k，就可以获得#b#e#i2630976:# #t2630976##n#k啦！", 4, 9062229, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("这个棒子里住着叫做#r#e叮咚#n#k的#b#e小鬼#n#k！\r\n叮咚也因为怪物们偷走了自己爱惜的零食，压抑了好久情绪！", 4, 9062229, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#r#e叮咚#n#k只有开心的时候才会出现！\r\n然后丢下 #b#e#i2630976:# #t2630976##n#k之后就会消失！\r\n用鬼怪棒#b#e教训怪物后#n#k叮咚就会高兴的出现！", 4, 9062229, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("偶尔叮咚特别兴奋，就会洒下许多#b#e#i2630976:# #t2630976##n#k！\r\n我把它称作#r#e叮咚时间#n#k！\r\n这是获得铜币的大好机会，加油吧！", 4, 9062229, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是#r#e叮咚时间#n#k并不常出现！\r\n叮咚非常#b#e善变#n#k，随心情而出现……\r\n只有运气好才能遇见！", 4, 9062229, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("所以，随身携带鬼怪棒\r\n\r\n#r#e#fs17#应该就可以和叮咚亲近一些了吧？#n#k", 4, 9062229, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("前往有等级范围怪物的狩猎场，就可以激活#e鬼怪棒 \r\n技能#n！\r\n\r\n教训#r#e等级范围怪物#n#k，收集#b#e鬼怪铜币#n#k啊~\r\n#r", 4, 9062229, true, true);
                                status = -1
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
        cm.sendNormalTalk("原来你想知道目前获得的#b#e#i2630976:# #t2630976##n#k呀！\r\n\r\n目前获得的鬼怪铜币数量 : #e#r" + cm.getNumberFromQuestInfo(100372, "coin"), 4, 9062229, false, true);
        status = -1
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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