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
            cm.sendNormalTalk("必须在#p2159391#过来之前离开……应该去哪儿呢？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("到异次元去怎么样？刚才我听到了消息。说在一个名叫#m104020000#的地方，有#b通往异次元的门#k。", 4, 2159405, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("异次元？也许到了那里，#p2159391#就无法追过去了。去看看吧。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("怎么感觉比离开埃德尔斯坦的时候决定得更快了呢？", 4, 2159405, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("因为是第二次了，可能有点熟悉了。不过我不想总是这样逃来逃去。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我也一样。必须想想办法。要是你能超越之前的力量，变得更强，我们就能打败格里梅尔。", 4, 2159405, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("想法不错。但要想实现，恐怕还需要一些时间。总之，我们先到异次元去看看吧。", 16, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("好的，马上出发！", 4, 2159405, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(23651, "");
                                            cm.dispose();
                                            cm.warp(400000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这里就是万神殿啊。风景和冒险岛世界完全不同。人们都长着角和翅膀，真神奇。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("到了新的地方，要到周围转转看吗？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是谁？真可疑！", 4, 3000000, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(23651);
                        cm.gainExp(3000);
                        cm.dispose()
                    }
                }
            }
        }
    }
};