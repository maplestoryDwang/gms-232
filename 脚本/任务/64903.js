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
            cm.sendNormalTalk_Bottom("#face1#啊，对了。你看到工地前面的那条岔路了吗？艾丹可能就在反方向的伐木区砍树呢。", 37, 9400922, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#也该到回来的时间了，可他们现在还没有回来，看来是人手不足啊。我们是不是要去帮他们啊？\r\n还有，如果你在找孩子的话，可以问问艾丹。", 37, 9400922, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#艾丹也来了？我知道了！#h0#，我们去找艾丹吧！", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64903, "");
                        cm.updateInfoQuest(64903, "portal=1");
                        cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                        cm.OnStartNavigation(871000055, 0, "out_871000055", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64903.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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