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
            cm.sendNormalTalk_Bottom("看到你平安无事我很高兴，#h0#。", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你看起来好像不太高兴啊……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你说什么呢。\r\n这已经是开心的表情了。", 37, 1540451, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过，有一点希望你能记住。", 37, 1540451, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("封印石是用来抑制黑魔法师力量恢复的。\r\n这世界上仅剩的封印石用在了你的身上……", 37, 1540451, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("现在#r黑魔法师#k肯定会再次出现在这个世界。", 37, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("支撑这个世界和平的巨大保障已经消失了。", 37, 1540451, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("对此我还真的很抱歉……", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不，我也认为女皇的决定是正确的。\r\n即使没了封印石，但这个世界不是有了你这个保障吗？", 37, 1540451, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你的意思是你以后要随意使唤我。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哈哈……是这样吗？", 37, 1540451, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                                                        cm.forceCompleteQuest(33283);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33283.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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