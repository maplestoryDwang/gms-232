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
            cm.sendNormalTalk("我们的交易就到此结束了。你已经获得了需要的所有东西。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，谢谢你按照约定履行交易。但是我还需要一样东西。", 2, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么东西？如果是不靠谱的东西，我可不能答应。你不觉得我已经做了很大让步了吗？", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不是别的，我需要用灯笼里的力量举行仪式，所以得找一个安静且不妨碍别人的地方。最好是能够容纳魔法力量的地方。你是魔法图书馆馆长，应该知道吧？", 2, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("倒是有一个地方。以前是叫做黑色之翼的组织使用的，现在已经废弃了。那里应该能满足你的要求。它就在你之前抓火混种石头人去过的#b石人寺院 : 石人寺院入口右方的尽头#k，应该很好找。别忘了，#b双击重生灯笼#k，就能到达附近。", 0, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯，那我走了。对了，走之前把你的书童璐璐还给你。以我现在对黑暗力量的掌控程度，应该可以复活这孩子。", 2, 1032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("谢谢你还记得这件事。看来你的本性还没有完全被邪恶力量侵蚀掉。", 0, 1032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊，汉斯大人！我，好害怕。呜啊呜啊。", 5, 1032208, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("璐璐！太好了。", 1, 1032001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("在你离开之前，我有一句话要说。黑暗力量远比你想象的危险。希望你能好好的控制。", 1, 1032001, true, false)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.forceStartQuest(25584, "");
                                                    cm.warp(100040000, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25584.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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