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
        if (status === b++) {
            cm.sendNormalTalk_Bottom("只有等那个叫汉斯的人来了，我才能知道详细的情况说明是吧？\r\n要是我直接过去，是不是能够更快见到面啊？", 37, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("等待也是一种内心的修炼，\r\n你是害怕等待啊。", 37, 1531004, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("……？", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("……得准备晚餐了，要是客人也能搭把手我肯定会很开心的。", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.askYesNo_Bottom("#face0##ho#，汉斯估计不会花太久的。\r\n我们一起去收集#b鸟蛋#k吧，只要打猎#b麻雀#k就可以了。", 36, 1531003)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("打猎？好吧，那应该挺有趣的，也可以顺带去看看外面什么样，你也帮我介绍介绍。", 37, a, false, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face1#往#b右边#k走吧，鸟蛋超好吃的。\r\n亚乌也很擅长做菜。", 37, 1531003, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.forceStartQuest(22741, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22741.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("这里有你刚刚拿来的鸟蛋，这个你是怎么拿来的？", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("内罗，我好像需要翻译呢？\r\n这个狼大叔说的话我实在是听不懂是什么意思……", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("谁都可以轻松打破鸟蛋的蛋壳。\r\n这个蛋壳这么脆，只要很小的力量就能打破了。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("可你明明有非常强大的力量却并没有展露，而是带回了没有打破的蛋。", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("你的其他力量现在还办不到，\r\n不过如果继续这么充满了力量，会让这个脆弱的世界产生裂缝的。", 37, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("等下，让世界产生裂缝，那是什么意思？", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("这个你日后自会明白的。", 37, 1531004, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.forceCompleteQuest(22741);
                                        cm.gainExp(5400);
                                        cm.gainItem(4034600, -10);
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
};