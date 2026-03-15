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
            cm.sendNormalTalk("我不是人类，我叫#o8105003#，是个没有感情的机器人。因此我感觉不到恐惧，所以适合在黑暗的地下坑道中负责警卫工作。", 0, 2154007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎么看都觉得你很像人类啊……？", 2, 2154007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是吗？但是我无法通过摄取食物获得能量，必须夺取他人的能量，转化为生物能量使用。简单地说，就是杀死其他生物，夺取能量。", 0, 2154007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(好像有点可怕……)#k", 2, 2154007, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("现在剩余的能量不多了，需要更换能量存储器。为了提高工作效率，在我站岗的时候，请你去帮我为能量存储器补充能量。", 0, 2154007)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(23961, "");
                                cm.forceStartQuest(23980, "0");
                                cm.sendNormalTalk("我把能量存储器交给你。请你补充满生物能量之后再还给我。打猎怪物，能量就会自动地流入能量存储器，变成生物能量。", 0, 2154007, false, false)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(4220178, 1);
                                    cm.sendNormalTalk("我需要确认一下能量存储器是否已经充满。确认完成。任务完成。", 0, 2154007, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(23961, "");
                                        cm.forceCompleteQuest(23961);
                                        cm.forceCompleteQuest(23980);
                                        cm.gainExp(102822);
                                        cm.sendNormalTalk("谢谢你。谢谢你帮我为备用能量存储器充满了能量。是的，备用能量存储器。站岗时使用的工作用能量存储器已经充满了。但是俗话说“有机会不抓住就是傻瓜”，所以我……", 0, 2154007, true, false)
                                    } else {
                                        if (status === a++) {
                                            cm.gainItem(4220178, -1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23961.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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