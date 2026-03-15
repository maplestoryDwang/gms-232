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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2614.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.npc_LeaveField("oid=2062");
            cm.npc_LeaveField("oid=2065");
            cm.forceCompleteQuest(2614);
            cm.gainExp(993);
            cm.sendNormalTalk("打扫好了吗？谢谢！这样就不会被爷爷唠叨了。啊，对了，我得去谢谢达克鲁大叔。", 0, 1052103, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(2000006, 10);
                cm.gainItem(2000002, 10);
                cm.sendNormalTalk("嗯？达克鲁大叔是什么样的人？当然是好人啦。他经常派像你这样的人去帮助别人。此外，达克鲁大叔还非常关心废弃都市的孩子们。我一直都很感激他，废弃都市的其他孩子应该也一样。", 0, 1052103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b（内拉的调查结束了。还有谁呢？红雅说的人是……美发店的钱老板，还有后街吉姆吗……？）", 2, 1052103, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（先去调查后街吉姆吧。）", 2, 1052103, true, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(103000000, 1, "1052002", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};