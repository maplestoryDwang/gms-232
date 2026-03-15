var status = -1;
var selectionLog = [];
var maps = [100020200, 102020300, 101030000, 400010400, 103030100, 105030400, 200020000, 211040100, 230010300, 260010400, 261010101, 221023100, 401020400, 240020100, 220010000, 250010400, 224000120, 240040520, 251010100];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("\r\n你好，#b#h0##k。\r\n我需要#b#h0##k你的帮助。", 4, 3004203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n听说冒险岛世界和格兰蒂斯到处都在#b#e发生异常现象#n#k。\r\n我想请#b#h0##k你去调查一下这些现象。", 4, 3004203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n混乱不堪的#r#e时空裂缝#n#k出现在了世界各地。它正在吸收周围的力量，不断变强。", 4, 3004203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n必须在时空裂缝凝聚更强的力量之前，#b调查时空裂缝#k，并#b消灭#k它。", 4, 3004203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n好在联盟方面\r\n调查时空裂缝内部时发现，\r\n只要消灭被时空裂缝吸收的#b#e所有怪物#k#n，\r\n裂缝很快就会#b#e失去力量#k#n。", 4, 3004203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#b#h0##k，我需要你消灭时空裂缝内部的怪物，关闭裂缝。", 4, 3004203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("你能帮忙调查一下发生在冒险岛世界和格兰蒂斯各处的#b#e调查异常现象#n#k吗？\r\n\r\n", 4, 3004203)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(500801, "special=0;record=00000000000000000000");
                                        var b = cm.rand(0, 19);
                                        cm.updateInfoQuest(500799, "complete=0;start=1;lastWeek=1;index=" + b + ";type=0;state=0");
                                        cm.forceCompleteQuest(100317);
                                        cm.sendNormalTalk("\r\n你每次完成时空裂缝调查后，\r\n我都会送你#e#r#i4310272:##t4310272##k#n和少许经验值，以表示感谢。", 4, 3004203, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n对了，有时你会发现比其他时空裂缝都要强大的裂缝，它的出现概率非常低。", 4, 3004203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n这个时空裂缝似乎存在了较长时间，力量相当强大……调查#b危险地区#k的时空裂缝时，将获得#r5倍荣耀币和经验值#k。", 4, 3004203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n据说，在拥有强大力量的时空裂缝中，偶尔会出现有一种#e#b黑色的怪物#n#k。这种怪物似乎是由时空裂缝吸收的力量孕育而成。", 4, 3004203, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n所有被派去调查的联盟成员中，只有一人发现了它的存在，也就是说它并不经常出现……联盟方面决定给这种怪物取名为#b#e混乱#n#k。", 4, 3004203, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("\r\n发现诞生于时空裂缝中的#e#b混乱#n#k，并消灭它，可以获得#r特殊奖励#k。", 4, 3004203, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("\r\n那么就拜托你完成#b#e荣耀每周任务#k#n了。\r\n\r\n\r\n#b※ 每周任务会在 #e每周星期三上午10点#n重置，\r\n  1周内可调查30个时空裂缝。\r\n#r(每周任务获得的荣耀不包含在每日硬币获得限制中。)#k", 4, 3004203, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.openUI(1241);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100317.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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