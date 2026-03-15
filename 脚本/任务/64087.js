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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64087.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(64087);
            cm.sendNormalTalk_Bottom("#b艾丽卡，拿着这个。", 57, 0, false, true);
            cm.gainItem(4036386, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这是什么？", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#难道……这是？", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#啊！透明的埃特金森的皮肤组织……？难道是因为我在森林里说的那些……？", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b希望这能有助于你的研究。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#真的谢谢你！其实我本来觉得就这么空手回到亚皮纳斯，有些不好意思，也有些遗憾。", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#虽然因为还有更重要的事情，所以没能说出口……但是真的没想到啊，我该怎么报答你呢？", 37, 9400580, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b不需要报答，这也不是什么困难的事情。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#真的？明明在森林里消灭冰霜巨人就很困难……", 37, 9400580, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b……艾丽卡能开心就好了。", 57, 0, true, true)
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
    }
};