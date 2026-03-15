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
            cm.sendNormalTalk("好的，让我们进入下一项修炼喵。刚才的修炼虽然只是热身运动，但是你的实力应该已经提高了一些喵。所以需要测定一下实力，不是吗喵？", 0, 1040002, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("喵～从现在开始，你要对付的是#r#o9100015##k喵。和刚才对付的#o2230100#不可同日而语喵。我会把你送到怪物所在的地方去，你去消灭#r30个#k，然后回来找我喵。你想挑战吗喵？", 0, 1040002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(2766, "000");
                    cm.sendNormalTalk("如果你在测试途中想要出来，只要重新和我对话就行了。那就祝你好运吧！", 1, 1040002, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(910100110, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2766.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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