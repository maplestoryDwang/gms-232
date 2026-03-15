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
            cm.sendNormalTalk_Bottom("#h0#，辛苦你了。\r\n呼……我已经拜托#p9310541#医生去对僵尸进行分析了。他在看到僵尸后非常震惊。\r\n不过他说会好好进行分析，那现在我们只能等结果出来了。", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我要把目前为止所调查的内容写成报道。这一切真是多亏了#h0#你啊。", 37, 9310535, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然在调查有关僵尸的事情上我还没有取得什么重大收获！但是我以后还会继续调查这些怪异事件，并会将真相告诉人们。我是不会停止取材的！", 37, 9310535, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("#h0#，这段时间真是太感谢你了。我厚着脸皮让你做这做那，真是不好意思！\r\n#b#L0#下次有事，还来找我吧。#l \r\n#L1#以后不要再找我了。#l", 37, 9310535)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("真的吗？说话算话！那我们下次再见吧！", 37, 9310535, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(62140);
                                cm.updateInfoQuest(62140, "chk=1");
                                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
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