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
            cm.sendNormalTalk_Bottom("#face2#啊，对了！差点忘了一件事。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#白外星博士好像修理了新的UFO，又重新启用了。", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#嗯，应该没少花修理费吧……\r\n看样子外星人在预算这方面还真是大手笔啊，好羡慕。\r\n那什么，重要的不是这个。", 36, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#我听说那个超级惊人的(？)#b清扫机器人#k被改造了，\r\n名字叫什么来着……#b卡雄？#k", 36, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#你能不能去把它解决掉？\r\n要是能拿回点外星机器人的#b零件#k，应该还挺不错的。", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#要是你有兴趣，就挑战试试吧。\r\n#b白外星博士#k肯定在#bUFO内部的操纵室#k那里摩拳擦掌地等着呢。", 36, 2052006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("听说通过#b首领怪等待队列#k可以入场，博士！！", 36, 2052007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#哦，这么重要的情报？！", 36, 2052006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(3499);
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