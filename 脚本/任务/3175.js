var status = -1;

function start(e, d, c) {
    (e == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.askYesNo("我在玫瑰花园里找到了含有雷昂和我的记忆的花谱。我们俩的手艺都不怎么好，做得不是很好看，不过做这个的时候我们真的很开心……好的，请你帮我把它交给雷昂。")
        } else {
            if (status == b++) {
                cm.sendNext("这是我们过去一起制作的#t4032837#，你把它给雷昂看看，告诉他我变成了幽灵，正在这里等他。那就拜托你了。请你再到#b接见室#k去一趟……")
            } else {
                if (status == b++) {
                    var a = cm.getQuestRecord(3175);
                    a.setStatus(1);
                    cm.getPlayer().updateQuest(a, true);
                    if (!cm.haveItem(4032837)) {
                        cm.gainItem(4032837, 1)
                    }
                    cm.warp(211070200, 1);
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
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