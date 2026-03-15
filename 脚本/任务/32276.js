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
            cm.sendNormalTalk("尼哈沙漠的宝石是在盗贼公会发现，并要交给赫丽娜的东西。你敢偷那个东西，胆子可不小啊。黑暗领主已经下令一定要抓住你。", 0, 1520010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我不是小偷！你口口声声说别人是小偷，这不是很可笑嘛！", 4, 1520008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("居然如此诬陷我，不可原谅。我不是小偷，我是飞侠。", 0, 1520010, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu("我不是小偷呀，对吧，#h0#？那个时候偷走宝石的人不是我，对吧？\r\n#b#L0#犯人不是奥利维亚。#l\r\n#L1#犯人确实是奥利维亚。#l\r\n#L2#两位都冷静一下。#l", 5, 1520008)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哼，你想和那个小偷撇清关系吗？现在连你们到底是不是一伙的都还没搞清楚，我凭什么相信你的话呢？", 0, 1520010, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("总之得把你移送到盗贼公会。你老老实实跟我来。", 0, 1520010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("呃……如此顽固之人……！#h0#，拜托你了。你替我去找圣地的南哈特，从他那里拿来有关变身术士的证据吧。只要把那证据交给赫丽娜，她肯定就会相信我了。", 4, 1520008)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32276, "");
                                        cm.sendNormalTalk("拜托了，请你去找圣地的#b南哈特#k。我现在只相信你了！", 4, 1520008, false, false)
                                        if(cm.haveItem(4033885)) {
                                            cm.gainItem(4033885, -1);
                                        }

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