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
            cm.askMenu("\r\n#b#ho##k，你好！有什么事吗？\r\n\r\n#L0# 我把蛋糕弄丢了。#l\r\n#L1##r 我已经收集齐蛋糕材料了。#l", 4, 1012108)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose();
                    if (cm.haveItem(3018281)) {
                        cm.sendNormalTalk("\r\n嗯……？你好像有蛋糕啊！", 5, 1012108, false, false)
                    } else {
                        cm.sendNormalTalk("\r\n给，这是#i3018281:# #e#t3018281:##n#k！\r\n希望你能做出一个漂亮的蛋糕！", 5, 1012108, true, false);
                        cm.gainItem(3018281, 1)
                    }
                } else {
                    cm.askYesNo("\r\n确定已经收集到全部材料了吗？一旦结束任务，就无法再获得蛋糕材料了！", 1012108)
                }
            } else {
                if (status === a++) {
                    cm.sendOk("好的，请保存好你的#b甜蜜绵软蛋糕#k！")
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest();
                        cm.forceStartQuest(100136);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100140.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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