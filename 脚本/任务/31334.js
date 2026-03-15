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
            cm.sendNormalTalk("我从珂娜那里听说了。哎呀，真是麻烦你了。哈哈哈！\r\n总之谢谢你。我刚好因为怪物而头疼呢。对了，听珂娜说，你是来这里探险的……你想找什么东西呢？", 0, 2210000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你想听听故事吗？我可以随时告诉你。", 1, 2210000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("相信你应该听村长说过了，这里是我们哈夫林的探查现场。在岩壁巨人出现之前，这里就一直是探查现场。原来这里聚集着很多哈夫林，比现在多好几倍。", 1, 2210000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在探查什么东西？你可别吃惊。这里的山在动！在几百年的时间里，一点一点地在动。知道这一点的话，任何人都会感到好奇，不是吗？我从六岁开始一直到现在，从白色的毛变成灰色，都一直带领探查团员们在这里进行研究。", 1, 2210000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("但是有一天，那件事突然发生了。我们一直以为是山的东西，其实不是山。", 1, 2210000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我当时想这下完了。我还以为会发生大灾难，但没想到谁也没受伤。因为那个岩壁巨人动了一下之后，就再也没动了。他好像在张嘴说话，但是我们根本听不懂他在说什么。", 1, 2210000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("还有，那天之后出现了很多危险的怪物，探查队员们一个个地离开了，现在就只剩下这么几个人……怎么样？现在你明白了吗？", 1, 2210000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(31334, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31334.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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