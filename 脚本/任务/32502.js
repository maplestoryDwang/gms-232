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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32502.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("(看到一个穿着华丽衣服的少女，她看上去坐得很不舒服。和她说话吧。)", 0, 2232007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……！你，你是谁？我什么都不知道。", 0, 2232007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("等一下，虽然不知道你是谁，可你没有得到公主的允许就擅自靠近，真是无法原谅。", 4, 2232008, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32502);
                        cm.gainExp(5457600);
                        cm.dispose()
                    }
                }
            }
        }
    }
};