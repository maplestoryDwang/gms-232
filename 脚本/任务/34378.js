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
            cm.updateInfoQuest(34379, "order=enbcdiflhkgmaj");
            cm.updateInfoQuest(34380, "count=0");
            cm.updateInfoQuest(34380, "count=0;region=3");
            cm.askYesNo(" #h0#，快来。谢谢你今天也答应了我的请求。\r\n\r\n#b#e#y34385##k#n\r\n#b#e#y34394##k#n\r\n#b#e#y34382##k#n\r\n", 0, 3003209)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34385, "");
                cm.forceStartQuest(34394, "");
                cm.forceStartQuest(34382, "");
                cm.forceStartQuest(34378, "");
                cm.sendNormalTalk("等你完成了所有请求，再来找我就可以了。\r\n不要忘了，一定要在#r#e子夜前#k#n回来。\r\n你可以查看#e#b任务信息栏#k#n，详细了解请求的内容", 0, 3003209, false, false)
            } else {
                if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34378.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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