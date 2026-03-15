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
            cm.sendNormalTalk("喂……", 16, 9112006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咦？你好像不是亡灵……你有什么事？", 4, 9112006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("跟你打听一下，我对鵺有点好奇。\r\n鵺的真实身份到底是什么？", 16, 9112006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我奉劝你一句，你在其它亡灵面前最好称呼#b鵺大人#k。\r\n这地方大多数的亡灵都很信奉鵺大人~", 4, 9112006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊！我知道了……", 16, 9112006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("鵺大人是亡者窟的神。\r\n他为了救赎众亡灵，用洞悉死亡的双眼降服了冥府魔神，重生降临在这片土地上。", 4, 9112006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("他是不是……给你们展示了什么神迹……？你们为什么那么狂热地信奉他？", 16, 9112006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们不但见过他的神迹，还亲身经历过。\r\n通过大人亲手发放的黑色圣水之力，以及“涅槃日”活动，我们亲眼见证了被超度的喜悦。", 4, 9112006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……黑色圣水和升天……？", 16, 9112006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("是的。你很难相信吧。我们刚开始的时候也跟你一样。", 4, 9112006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("啊……谢谢你。多亏了你，让我更了解鵺大人了。", 16, 9112006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不客气。等你死后，就来找鵺大人吧。再见……", 4, 9112006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……这个鵺，果然很可疑。", 16, 9112006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(58741);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58741.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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