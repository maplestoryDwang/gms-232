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
            cm.forceStartQuest(23050, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23050.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你成功地破坏掉了黑色之翼的新武器！哈哈哈哈！你果然是个了不起的家伙！我说过我的眼睛绝不会错！没有什么比弓箭手的眼睛更亮的了！我就知道你一定可以做到！反抗者中有你这样的人，我感到很自豪！", 0, 2159111, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("要是可以的话，我很想向#p2154009#炫耀一下……不过要是他带着手下来的话，逃走的时候可能会很麻烦。我们赶紧回到地下本部去吧。我马上使用#t4032740#！好了，一……二……三！", 0, 2159111)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23050);
                    cm.gainItem(4032743, -1);
                    cm.dispose();
                    cm.warp(310010000, 0, false)
                }
            }
        }
    }
};