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
            cm.askMenu_Bottom("要是你不忙的话，能不能帮我一个忙呢？\r\n#b#L0#请讲。#l \r\n#L1#我很忙。#l", 37, 9310535)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("我对于撰写报道非常有自信，可是独自一人取材非常辛苦。所以呢……如果……你有时间的话，你愿意和我一起揭开发生在上海的这些怪异事件的真相吗？", 37, 9310535)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真的吗？呀吼！不准反悔哦！", 37, 9310535, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么，现在应该先去对最先发生怪异事件的上海外围进行调查！", 37, 9310535, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62134, "");
                            cm.sendNormalTalk_Bottom("给我提供线索的人说，在僵尸出现之前，上海外围的动物就已经变疯了。\r\n 请你前往上海外围，消灭#o9600301#、#o9600303#、#o9600307#后，分别采集1个它们的样本吧！", 37, 9310535, true, false)
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
            cm.sendNormalTalk_Bottom("啊，这就是那些动物的样本吗？", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(62134, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.forceCompleteQuest(62134);
                cm.sendNormalTalk_Bottom("辛苦你了！我先要拍一张照片，写报道的时候要用。请等一下哦……", 37, 9310535, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};