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
            cm.sendNormalTalk_Bottom("噢，对！\r\n密码忘了。\r\n不过那密码简单得很，我估计你已经知道了。", 37, 9201537, false, true)
        } else {
            if (status === a++) {
                cm.askText("请输入潜意识阅读装置的密码。\r\n#r#e(提示：NLC的全称是？)#k", "", 9201538, 0, 1000)
            } else {
                if (status === a++) {
                    if (cm.getText().equals("新叶城") || cm.getText().equals("新叶都市") || cm.getText().equalsIgnoreCase("New Leaf City")) {
                        cm.forceCompleteQuest(61352);
                        cm.warp(610061240, 0, true)
                    } else {
                        cm.sendNormalTalk_Bottom("不对！你说错了！\r\n这么简单的问题都回答不出，你就\r\n别想靠近我的机器了。", 37, 9201537, false, false)
                    }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/61352.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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