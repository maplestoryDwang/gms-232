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
            cm.sendNormalTalk("还记得封印石吧？之前被黑色之翼那帮家伙抢走，后来又找回来的那个东西。当初制作封印石的目的不就为了“将受到破坏的大陆恢复原样”吗？", 0, 1520035, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对，的确是！那么，用那个封印石真的可以将冒险岛恢复原样吗？", 4, 1520034, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("若是为了拯救冒险岛的话，赫丽娜也肯定会同意的。", 4, 1520036, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过有人知道如何使用那个封印石吗？", 4, 1520037, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那个的话……", 4, 1520034, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个的话，好像连赫丽娜都不知道……对吧。既然如此，那就去找找制作封印石的当事人吧。", 0, 1520035, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("当事人？", 16, 1520035, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是的，就是那些#b英雄#k。反正大家也回到了冒险岛世界，一起去寻找他们，然后询问如何使用不就行了嘛。", 0, 1520035, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("居然还有这种办法啊。不过，该问哪个英雄呢？听说一共有五位英雄呐。", 4, 1520037, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我们不也正好五个人嘛。大家分头寻找吧。问到消息后，再到这里集合。怎么样？", 4, 1520034, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我是魔法师，那我就去找魔法师英雄。", 4, 1520037, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("那我就去找飞侠英雄吧。", 4, 1520036, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("我是战士……战士英雄应该是战神吧？", 4, 1520034, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("数百年前还没有海盗，所以身为海盗的你是负责寻找最后的英雄－－夜光法师就行了吧。", 0, 1520035, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("那么，我去找弓箭手英雄双弩精灵 就行了吧？", 16, 1520035, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("很好，那么，大家各自收集到情报后，再到这里碰面吧。", 0, 1520035, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("再来的时候，只要和明珠港的坤叔叔说话，他就会送你去冒险岛的。", 1, 1520035, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(32365, "");
                                                                                cm.forceCompleteQuest(32320);
                                                                                cm.gainExp(175000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32320.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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