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
            cm.forceCompleteQuest(63066);
            cm.gainExp(317600);
            cm.updateInfoQuest(63066, "exp=1");
            cm.sendNormalTalk("哈！活过来了。这段时间你去哪了？", 4, 9400215, false, true);
            cm.gainItem(4034994, -10)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b我在到处寻找钥匙。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("钥匙？我给你的黄金呢，就为了找钥匙东奔西跑吗？\r\n如果你又把黄金搞丢了，我可以再……再分点给你。唉……你真是个可怜虫。", 4, 9400215, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#p9400215#，你像现在这样困在黄金城墙里，不吃不睡，幸福吗？你知道只要走出这道城墙，外面是个有着富饶的田野，温暖的阳光，还有芬芳的花朵开放的美丽世界吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我……我听说过……", 4, 9400215, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但你也知道，我不能抛下我的金银财宝出去。虽然我常常饿肚子，也很累，可是只要看着这些金银财宝，心里就觉得好幸福。", 4, 9400215, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(听#p9400215#这么说，他并没真正见过城墙外面的光景。要是他看见外面的美景，会不会稍微改变想法呢？)", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63066.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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