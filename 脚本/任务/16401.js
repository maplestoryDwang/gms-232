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
            cm.sendNormalTalk("\r\n你好！#b#h0##k！\r\n#e狩猎猛增#b<加速>#k活动#n又来了！", 4, 9010010, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b#e<加速>#n#k从#b2020年05月13日上午7时#k至#b05月26日晚上11时59分#k发生#b很多变化#k是名副其实能够#b令狩猎加速#k的活动！", 4, 9010010, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n\r\n都有什么变化呢～！", 4, 9010010, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b- #e精英怪物#n出现的#e更加#n频繁！\r\n- #e符文#n出现概率#e更高#n而且能够#e更加#n经常使用！\r\n- #e符文#n经验值效果变为双倍#e更加#n有效果！\r\n- #e突发任务#n每天通关次数#e更多#n变为双倍！\r\n- #e保罗&普利托#n出现频率#e更高#n！\r\n- #e火焰狼#n经验值变为1.5倍#e更加#n强大！\r\n- #eBOSS组队组建增益#n变为3倍，#e更加#n强大！", 4, 9010010, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n怎么样？听听都觉得狩猎唰唰加速了吧？\r\n\r\n不仅如此！\r\n活动期间可以执行#b#e6种每日任务#n#k?，\r\n每完成一次任务都可以获得#b#e<轻功箱>#n#k！", 4, 9010010, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n6个#b<轻功箱>#k中含有丰厚的#b奖励#k和#b加速器#k，每天都不要错过哦~！\r\n使用#b加速器#k后，可在100秒内#b额外#k#b召唤#k#b怪物#k，因此可以加速狩猎与成长！", 4, 9010010, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n还有1点！\r\n\r\n一天内完成了全部#e#b6种<每日加速任务>#n#k……\r\n嘿嘿……这还是等你自己亲自确认吧！", 4, 9010010, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(16401);
                                        cm.openUI(1251);
                                        cm.forceStartQuest(16403, "");
                                        cm.forceStartQuest(16404, "");
                                        cm.updateInfoQuest(16406, "count=0");
                                        cm.forceStartQuest(16406, "");
                                        cm.updateInfoQuest(16407, "count=0");
                                        cm.forceStartQuest(16407, "");
                                        cm.updateInfoQuest(16408, "");
                                        cm.forceStartQuest(16408, "");
                                        cm.updateInfoQuest(16409, "");
                                        cm.forceStartQuest(16409, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/16401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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