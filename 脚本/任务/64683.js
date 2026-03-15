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
            cm.sendNormalTalk("我的朋友们是有点吵吧……但他们还是非常善良的……请你理解一下吧", 4, 9400962, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……嗯……嗯……\r\n#b(比起其他家伙来说，这人的状态特别低落呢……)#k", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("。……（啊呜啊呜）……\r\n……你也要吃吗……？\r\n#b（拿出正在吃的零食。）#k\r\n\r\n#L1##b吃#k#l\r\n#L0##b不吃#k#l", 4, 9400962)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……哦……是啊……谢谢……", 2, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……庆典就是要享受美食才行……这么美丽的夜晚，如果没有好吃的零食不就是太可惜了吗……？", 4, 9400962, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("天空被晕染得十分美丽……因此也难以分辨白天和黑夜……\r\n不知道什么时候是吃饭的时间，那只要肚子饿了就吃吗……？", 4, 9400962, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……但是也许是因为沉浸在了庆典气氛中……吃了又吃，还是胃口大开……\r\n总感觉一整天都在吃吃吃呢……", 4, 9400962, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(不止是感觉，好像就是如此吧)#k", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……所以……你对#b[昼夜1+1]#k活动感兴趣吗？\r\n其实也不是什么很伟大的东西……", 4, 9400962, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("在冒险岛世界持续巨大的日蚀期间……据说日夜的界限已经变得模糊……\r\n也就是说……#b每天的界限变得模糊了……#k", 4, 9400962, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("每天都能进行的#b每日任务#k当然以每天为标准……这个界限已经比较模糊了……\r\n但有时候也会出现#b几天的奖励一次性发放或者发放了平常无法获得的奖励的情况#k…… ", 4, 9400962, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("无论如何都无法分辨白天和黑夜……应该是出了什么问题吧……？\r\n虽然在出现日蚀的时候，为了迎合庆典的气氛，适当地宣传了一下活动……", 4, 9400962, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……所以……这次庆典我负责的活动是这个。名字叫做#b[昼夜1+1]#k\r\n虽然没能像其他朋友一样准备什么华丽盛大的活动……但是如果每天都想要获得实实在在的每日任务奖励，那就和我一起吧。", 4, 9400962, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……选择由你来做……如果想参加我准备的活动，那在每周要选择的活动中选择#b#e[昼夜1+1]活动就行了……#k\r\n那……我肚子又饿了，所以就先走了……", 4, 9400962, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setNumberForQuestInfo(500831, "tuto3", 1);
                                                                    cm.forceCompleteQuest(64683);
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