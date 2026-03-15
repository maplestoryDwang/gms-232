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
            cm.sendNormalTalk_Bottom("啊……看来只能用最后的方法了，捕捉僵尸进行研究。", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过在那之前，有件事需要确认一下。#o9600313#和#o9600314#现在处于半人半僵尸的状态，我们有必要对它们进行调查。", 37, 9310535, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("请你消灭#o9600313#和#o9600314#各100只。如果中途发现可疑的地方，就立马告诉我！", 37, 9310535)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("很好。#o9600313#和#o9600314#可在#m701101030#和#m701103000#中找到，你应该知道这个吧？", 37, 9310535, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62138, "");
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("你找到什么可疑的内容了吗？", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62138);
                cm.updateInfoQuest(62138, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("啊……你什么也没发现啊……早知道，我就该跟着你去拍几张照片了。\r\n不过，僵尸到底还是很可怕啊……", 37, 9310535, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};