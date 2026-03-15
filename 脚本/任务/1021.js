var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("哈喽, 小家伙~跟我聊聊啊？哈哈！我是专门为初来这里的冒险家们提供信息的教官，#p2000#。")
        } else {
            if (status == 1) {
                cm.sendNextPrev("你问我是谁指认我为教官的？呵呵，你的好奇心还挺多啊！不错不错~是我自己喜欢当教官的。")
            } else {
                if (status == 2) {
                    cm.askAcceptDecline("来。。。开个小玩笑怎么样？咦！")
                } else {
                    if (status == 3) {
                        if (cm.getPlayerStat("HP") >= 50) {}
                        if (!cm.haveItem(2010007)) {
                            cm.gainItem(2010007, 1)
                        }
                        cm.sendNext("是不是吓了一跳？HP跌到0就坏了。来，给你#r#t2010007##k，把它吃掉就会恢复了。你打开道具窗看看#I")
                    } else {
                        if (status == 4) {
                            cm.sendPrev("你要把我给你的#t2010007#全部吃掉，停滞在一个地方什么都不做HP也会恢复的。。。你恢复了全部的HP在跟我聊聊吧。#I")
                        } else {
                            if (status == 5) {
                                cm.forceStartQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            if (cm.getPlayerStat("HP") < 50) {
                cm.sendNext("嗨，你的HP还没有完全恢复，使用我给你的苹果来补充吧！快去试试!");
                cm.dispose()
            } else {
                cm.sendNext("消耗道具。。。怎么样？很简单吧？可以在右下角设定#b快捷键#k，你还不知道吧？哈哈~")
            }
        } else {
            if (status == 1) {
                cm.sendNextPrev("不错！学得很好应该给你礼物。这些都是在旅途中必需的，谢谢我吧！危机的时候好好使用。")
            } else {
                if (status == 2) {
                    cm.sendNextPrev("我能教你的只有这些了。有点儿舍不得也没办法，到了要离别的时候。路上小心，一路顺风啊！！！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp")
                } else {
                    if (status == 3) {
                        cm.gainExp(10);
                        cm.gainItem(2010000, 3);
                        cm.gainItem(2010009, 3);
                        cm.forceCompleteQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
};