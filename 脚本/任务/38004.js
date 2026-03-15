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
            cm.sendNext("现在你只要去拜见下狐狸神就行啦。狐狸神是我们尖耳狐狸族信奉的守护神。我们所有的尖耳狐狸都在狐狸神旁诞生，并受到狐狸神的庇护。既然你要在这个村子生活，当然要去拜见下狐狸神啦，对吧？", 3002005)
        } else {
            if (status == a++) {
                cm.sendNext("你自己去话可能迷路……嗯，让阿琅陪你去就行了。阿琅，你和隐月一起去拜见狐狸神。不要再外面瞎转悠啊！", 3002005)
            } else {
                if (status == a++) {
                    cm.askAcceptDecline("切，爷爷还以为我是小孩子吗？我自己会看着办的啦。哼，我先走一步。隐月你跟上来。你这个慢吞吞的家伙！", 3002000)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38004.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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