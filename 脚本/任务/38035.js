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
            cm.sendNormalTalk("如果可以的话，你在这儿逗留的期间能不能帮我个忙？我是说在调查冒险岛世界目前状况的过程中顺便帮个忙。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#r妖精学院艾利涅#k发生了问题，你没接到相关的帮助请求吗？先解决那边的问题怎么样？", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38035, "");
                    cm.forceStartQuest(38035, "");
                    cm.forceCompleteQuest(38035);
                    cm.gainExp(5000);
                    cm.openUI(202);
                    cm.sendNormalTalk("#r妖精学院艾利涅#k可以通过冒险岛向导UI快捷地到达。如果再有什么需要帮助的，到时再联系你吧。", 0, 1012100, true, false);
                    cm.dispose()
                }
            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38035.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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