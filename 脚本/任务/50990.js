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
            cm.sendNext("其实，#b妖精字院艾利涅#k里正在发生巨大骚乱。和魔法密林不同的是，妖精字院艾利涅所在的地方是人类不能进入的妖精之地。因此，那里仍然还保持着妖精之地最初的样子。可最近，好像有一个#r人类魔法师#k进到了那里。")
        } else {
            if (status == a++) {
                cm.sendNextPrev("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此，得去弄清楚事情的真相才行。勇士你去的话，肯定能够应对这种状况。那么请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。")
            } else {
                if (status == a++) {
                    cm.askYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。")
                } else {
                    if (status == a++) {
                        cm.sendNext("好吧，我现在马上就送你去潘喜那边。祝你好运！")
                    } else {
                        if (status == a++) {
                            cm.forceStartQuest(32155, "");
                            cm.forceCompleteQuest(50990);
                            cm.OnStartNavigation(101030000, 1, "1040002", 32155);
                            cm.warp(101030000, 0);
                            cm.dispose()
                        }
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};