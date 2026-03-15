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
            cm.sendNormalTalk_Bottom("#face0#真的非常感谢，#h0#。", 36, 3004754, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#有一天你突然出现，势如破竹地解决了所有问题……", 36, 3004754, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#而且……我还实现了一直以来的梦想……见到了瑞昂。", 36, 3004754, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，这一切都是托你的福。", 36, 3004754, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#给，这是我在寻找其他居民的时候找到的，因为觉得可能有用就收集了起来。", 36, 3004754, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然对我来说没什么用处，但是你也许……", 36, 3004754, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(37726);
                                    cm.gainExp(11264558);
                                    cm.sendNormalTalk_Bottom("#face0#希望能帮到你。\r\n经过一段时间就会消失，所以一定要尽快使用。\r\n(#i2630437# 神秘徽章 x 20个，无法交换，#r期限制：14天！#k）", 37, 3004754, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.gainItem(2630437, 20);
                                        cm.sendNormalTalk_Bottom("#face0#下次再来找我玩吧！我在这里等着你。", 37, 3004754, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(993176808, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37726.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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