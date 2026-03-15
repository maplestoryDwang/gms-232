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
            cm.sendNormalTalk_Bottom("料理已经完成了。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("那现在可以吃了吗？", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("不立刻屈服于自己当下的欲望也算是一种不错的修炼，\r\n若是执着于眼前的饥饿就看不到远方了。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face1#(咯吱咯吱咯吱)", 37, 1531003, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face2#…", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("……话说回来，汉斯晚了啊。\r\n看来我还是得和客人一起出去找找比较好。", 37, 1531004, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face1#(咯吱咯吱咯吱)", 37, 1531003, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("……这孩子一旦开始吃就什么都听不到。\r\n真是抱歉，你能去看看吗？", 37, 1531004, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.askYesNo_Bottom("你去找#b巨大的树#k的#b潘喜#k。\r\n估计他会知道汉斯的行踪。", 36, 1531004)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("你记住，#b巨大的树#k上的猫#b潘喜#k。", 37, 1531004, false, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.forceStartQuest(22743, "");
                                                    cm.effect_OnUserEff("UI/tutorial.img/11");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22743.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("喵喵，嗯？你是谁啊喵喵？", 36, 1040002, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#哈哈哈，搞什么啊你，\r\n这里难道是会说话的猫的天堂吗？", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("咳咳！这股味道……你不是#b这个世界的人类#k啊！", 36, 1040002, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face3#我也很想知道这到底是怎么一回事，\r\n那位叫汉斯的在哪儿啊？", 36, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("汉斯刚刚去了。", 36, 1040002, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face4#哎哟……怎么就。", 36, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("我，我不是那个意思！\r\n我的意思是他刚刚去了魔法师协会！你不是刚从那里过来吗？", 36, 1040002, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face2#搞什么，是这个意思啊？看来是我会错意了。", 36, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("话说回来，你能听我说两句吗？我们协会有个叫#b库迪#k的徒弟很有可能在森林里迷路了，我总觉得有点……", 36, 1040002, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face4#等下，这里魔法师的问题不归我管，\r\n我想赶紧回到原来的世界去。", 36, a, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("…………也对，就算我跟个异邦人说了，也不会帮我的忙的。", 36, 1040002, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("话说回来你这身衣服是什么鬼啊？实在是看不下去了，这个给你好吧？\r\n\r\n#b#i1082020#  #t1082020#", 36, 1040002, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.gainExp(4100);
                                                            cm.sendNormalTalk_Bottom("#face2#看上去好像还挺管用啊？谢谢啦。", 37, a, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.gainItem(1082020, 1);
                                                                cm.sendNormalTalk_Bottom("哼，没什么的。\r\n赶紧回到你所在的世界吧。", 37, 1040002, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.dispose();
                                                                    cm.forceCompleteQuest(22743);
                                                                    cm.warp(101020400, 0, false)
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