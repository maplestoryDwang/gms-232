var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextS("异常变化，“这边”这个世界……这些听起来实在让人难以相信啊。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("不过我也知道，再怎么觉得难以相信，这也是事实。这个丘陵周围的景象虽然与日本相似，但却不是日本。因为我熟知日本的所有地方。", 9130081)
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("看来，正是因为我强行中断了仪式，才引发了这次的异常情况吧？如果我能更快地控制住兰丸，并早一步让仪式中断……不说这个了，不知道师父和樱乃姬现在怎么样了。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("不必太过自责，你已经拼尽了全力。先按照那个叫兼续的小子所说，前往新的据点去探探情况吧。", 9130081)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrevS("师父……姬儿……你们一定要平安无事啊……")
                        } else {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("没想到这里就是我们的新据点——#b#m807000000##k。负责统率部分联合军的毛利大人已经先一步到达“这边”这个世界，就是他率领着其他士兵在这里建起了据点。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("#b#m807000000##k……如鲜血般的红叶四处飘散……这名字还真够悲壮的。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev("哈哈，说来确实如此啊。好了，毛利大人应该就在阵地之内，先去见见他吧。我们也需要和他商量一下接下来的安排呢……")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("直江兼续大人，您接下来是怎么打算的？")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("我打算继续出去寻找谦信大人。大部分人都是在昏迷状态下到达“这边”这个世界的。说不定谦信大人会因此而陷入什么危险。而且，我实在无法忍耐这么长时间都见不到自己的主公。好了，那我就先告辞了。")
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest();
                                cm.gainItem(2001501, 100);
                                cm.gainItem(2001503, 100);
                                cm.gainItem(1003570, 1);
                                cm.gainItem(1052479, 1);
                                cm.gainItem(1082450, 1);
                                cm.gainItem(1072684, 1);
                                cm.gainItem(1552000, 1);
                                cm.gainExp(1242);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};