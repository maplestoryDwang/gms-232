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
            cm.updateInfoQuest(26011, "");
            cm.updateInfoQuest(500833, "");
            cm.forceCompleteQuest(64703);
            cm.forceCompleteQuest(62417);
            cm.forceStartQuest(9571, "0");
            cm.forceStartQuest(31190, "0");
            cm.forceStartQuest(42102, "0");
            cm.forceStartQuest(7621, "");
            cm.sendNormalTalk("修炼得如何？嗯……60级了……虽然还不够，不过比起当初把你刚从冰窟里挖出来的那个状态要强百倍了。像这样下去，很快你就能恢复从前的实力了。", 0, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("不过，你得先回#b#m140000000##k一趟。你的#b#p1201001##k又出现了奇怪的反应。似乎是有什么话要对你说。说不定能唤醒你的能力也说不定，赶紧回去一趟吧。", 0, 1201000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不管怎样，拥有意识的武器还是很厉害的，某个方面来看，那家伙有种很神圣的感觉。如果不听它的，它就会呜呜哭……啊，这种话可一定要对长矛保密。我可不想让它吵得更凶。", 0, 1201000, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.forceStartQuest(21300, "");
                        cm.warp(140000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21300.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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