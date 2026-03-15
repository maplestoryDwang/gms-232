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
            cm.sendNormalTalk("你好，我是#m220000000#的卫兵#p2041004#。有什么可以帮你的吗？嗯？#o9300390#吗？！", 0, 2041004, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("嘘！你是怎么知道#o9300390#的事情的？谁也不知道他是守卫秘密仓库的看守……呵呵，好吧，我就把#o9300390#的情况告诉你吧。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp", 0, 2041004)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不久前，#o9300390#遭到袭击，受了重伤。#r因此就没人守卫秘密仓库了。小偷趁这个机会溜了进来#k。虽然不知道是什么宝物……但事情很严重。", 0, 2041004, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……呵，为，为什么摆出这么可怕的表情？谢谢你对小偷的事情表示愤慨，但这件事情你帮我保密！", 0, 2041004, true, false);
                        cm.gainExp(28135);
                        cm.forceStartQuest(22595, "");
                        cm.forceCompleteQuest(22595);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22595.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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