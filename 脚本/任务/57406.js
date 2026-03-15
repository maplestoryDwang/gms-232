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
            cm.sendNormalTalk_Bottom("#face0#你的动作已经比刚才灵活了许多。但是，你还不能对自己的动作完全收放自如。来继续努力训练吧。", 37, 9130006, true, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#在我看来，你的动作已经比刚才灵活了不少。但是相信神那你一定不会满足于现状吧。如果你这么轻易就能满足于现状，也就没有办法成为深受大阴阳师春秋信赖的弟子了吧。好了，我们可以开始下一项训练了吧？", 37, 9130006)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57406, "");
                    cm.OnStartNavigation(807030200, 0, "", 0);
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
                cm.sendNormalTalk_Bottom("#face0#看到你的表情我就知道，你打得还不算痛快吧。但是，这已经是能在这个临时练兵所里进行的最后训练了。相信你也有所耳闻，我们现在人手和物资都严重短缺……还请你多多理解吧。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你剩下的力量，就只能在接下来的实践中进行恢复了。接二连三的训练一定很辛苦吧。你最好先去好好休息一下。接下来还有好几个任务想要拜托你呢。", 37, 9130006, true, true)
                } else {
                    if (status == a++) {
                        cm.gainExp(1242);
                        cm.forceCompleteQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
};