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
            cm.sendNormalTalk_Bottom("这里好像主要是看当天运势的。除此之外好像也能看爱情卦和友情卦……不过可信度不是很高的样子。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("友情卦！有意思。#h0#，咱们一起去试试吧？", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("太好了，那我们就一起去算一卦吧！\r\n\r\n#b（进占星店看看吧。）#k", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32744, "");
                        cm.dispose()
                    }
                }
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