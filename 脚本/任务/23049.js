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
            cm.forceStartQuest(23049, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23049.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你成功地破坏掉了黑色之翼的新武器！哈哈……真不敢相信！连我都没有做到的事情，你竟然做到了！你真是个了不起的家伙！有你这样的反抗者，我为你感到自豪！", 0, 2159110, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("啊，不，现在不是说这些的时候……发现新武器被破坏之后，#p2154009#很快就会带着手下到这里来。我们必须在这之前逃出去！我要马上使用地下本部#t4032740#了！好了，一……二……三！", 0, 2159110)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23049);
                    cm.gainItem(4032743, -1);
                    cm.dispose();
                    cm.warp(310010000, 0, false)
                }
            }
        }
    }
};