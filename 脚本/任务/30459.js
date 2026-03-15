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
            cm.sendNormalTalk("#b(读了小可爱的信。)", 16, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你好！我是小可爱，小可爱小可爱小可爱哟~！\r\n#b#h0##k这段时间过得可好啊？", 4, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("离开童话村还没有多长时间，我已经开始想念了呢，勇士也是如此吧？", 4, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不知你可还记得我之前说过的话？我不是说过要将我们经历过的事情写成书嘛，你不会已经忘了吧？", 4, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("所以我啊！真的写了本书，哇！是不是很厉害？看来我身上惊人的能力可不止一两个呢，你看到的时候可不要太过吃惊哦。", 4, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这本书的初版将由我！本人！亲自交给勇士，你就看看吧。啊，读后感等你以后来赫丽奥斯塔图书馆再给我就行。", 4, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你问我在说什么？我现在正在旅行，这是我第一次去看看图书馆之外的世界，这个世界上真的有很多神奇的事物啊。", 4, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……在我看过、感觉过、思考过许多东西之后，总有一天我会重新回到图书馆的，你可要做好心理准备哦，你的读后感我到时候会来听的。", 4, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("对了，谢谢你，真的，这本书，是我为勇士写的书，你可一定要看完啊，知道了吧？", 4, 2074100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我好想念威兹大叔啊，还有童话村，还有勇士，还有，鬼怪……", 4, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("也许在旅途的路上我们会偶然相逢吧？嘿嘿，那……就下次再见咯，勇士，再见~！\r\n\r\n-小可爱小可爱小可爱哟", 4, 2074100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(30459, "");
                                                        cm.forceCompleteQuest(30459);
                                                        cm.gainItem(4161092, 1);
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