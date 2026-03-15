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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28756.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你干掉#r#o9400802##k了？！我就知道你有这能耐！", 0, 9201050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("遗憾的是，外星人有个很好用的物质克隆器，分分钟就能造出个#r#o9400802##k。呃，分分钟夸张了，几小时吧。总之，我们可以利用这段时间！", 0, 9201050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("根据蛋头们所说，物质是无法被完全摧毁或是凭空创造的。所以说，如果你能一遍又一遍地摧毁#r#o9400802##k，它们最终就没有原料能拿来造它了！", 0, 9201050, true, true)
                } else {
                    if (status === a++) {
                        cm.addNumberForQuestCustomData(28792, 1);
                        cm.forceCompleteQuest(28756);
                        cm.gainExp(70000);
                        cm.gainItem(4001832, 10);
                        cm.dispose()
                    }
                }
            }
        }
    }
};