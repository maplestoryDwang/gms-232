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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31823.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗯，你搜集到用作情报费的獠牙了吗？", 0, 3001004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这獠牙挺不错啊，能派上用场。情报就装在这个信封里，你搜集各种情报后，拿去交给#p3001002#老头就行。嘿嘿，情报不止一个，其他的下次再交易啦。下次你再用发报机联系我。", 0, 3001004, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(31823);
                    cm.forceCompleteQuest(31575);
                    cm.gainExp(186000);
                    cm.gainItem(4033579, -50);
                    cm.dispose()
                }
            }
        }
    }
};