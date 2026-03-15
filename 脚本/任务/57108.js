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
            cm.sendNormalTalk_Bottom("#face0#你的动作已经比刚才灵活了许多。但是，和你被称作晓之神圣的时候相比，还是差得很远啊。来继续努力训练吧。", 37, 9130006, true, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#在我看来，你的动作已经比刚才灵活了不少。但是相信剑斗你一定不会满足于现状吧。确实，以你的性格而言，肯定很难会对自己的实力感到满足吧。毕竟你是年纪轻轻就已经以晓之神圣的名号享誉全国的人。好了，我们可以开始下一项训练了吧？", 37, 9130006)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57108, "");
                    cm.OnStartNavigation(807030200, 0, "out00", 0);
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#感觉如何呢？", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#看来，你还是没能满足啊。但是，这已经是能在训练场里进行的最后训练了。相信你也有所耳闻，我们现在人手和物资都严重短缺……希望你能够理解。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#剩下的力量，就只能在接下来的实践中进行恢复了。接二连三的训练一定很辛苦吧。你最好先去好好休息一下。接下来还有好几个任务想要拜托你呢。", 37, 9130006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呼……总算是在元就大人帮忙准备的训练场里完成了所有训练，但身体还是有些不听使唤。现在，我不仅不知道姬儿身在何处，也对“这边”的情况一无所知。这样的我真的能在这里派上用场吗……", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("不行，满脑子负面思想只会阻碍我的前进。先来平静一下心绪，好好想想接下来应该做的事情吧。", 57, 0)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(57108);
                                cm.forceStartQuest(57109, "");
                                cm.gainExp(2000);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};