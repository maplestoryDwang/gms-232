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
            cm.sendNormalTalk("就算是四处打听，也很难得到有关幻影的信息。本是个无比华丽的人怎么就突然之间就隐藏得无影无踪了呢。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("他是个神出鬼没的人，也难怪。想要找到什么蛛丝马迹实在是太难了。还不如在一个他可能去的地方守株待兔。对了，天空之城不是有#r幻影的秘密仓库#k嘛，要不要去看看？\r\n\r\n#r(接受任务后将马上移动到相关地图。)#k", 2, 1012100)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38051, "");
                    cm.forceStartQuest(38051, "");
                    cm.forceStartQuest(38906, "104020000");
                    cm.dispose();
                    cm.warp(200020001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38051.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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