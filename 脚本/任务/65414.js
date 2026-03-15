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
            cm.sendNormalTalk("新型冠状病毒肺炎疫情期间，请岛民务必加强自我防范意识~", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("新型冠状病毒肺炎流行期间，管管非常担心岛民的健康安全啊。为了避免交叉感染，请广大岛民尽量减少外出，一定要保护好自己和家人的健康安全。若出现任何感冒、发热、咳嗽、胸闷等情况，请不要贸然前往人流聚集地，应及时就医并在途中注意个人防护。\r\n在这个非常时期，管管希望大家能坚持#r佩戴口罩，勤洗手、 勤通风，避免前往人群密集场所；避免接触野生家禽、家畜等。同时，请岛民一定要加强自我锻炼，合理休息，保证充足的睡眠才能提高免疫力#k哦。\r\n\r\n现在，管管就为每人发放口罩一只~", 0, 9010000)
            } else {
                if (status === a++) {
                    cm.gainItem(1012700, 1);
                    cm.forceCompleteQuest(65414);
                    cm.sendNormalTalk("虽然这只口罩在现实中没什么作用，但是希望大家每每在游戏中看到这只口罩就能想起管管叮嘱的话~你们的健康，比什么都重要！", 5, 9010000, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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