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
            cm.askMenu("下面要怎么做？是先扶我出去？还是先搬我的金银财宝？\r\n#b#L0#先扶#p9400216#出去。#l\r\n#L1#先搬运金银财宝。#l", 4, 9400216)
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.sendNormalTalk("不行，我……我还是觉得有点不放心。", 4, 9400216, false, true);
                    cm.dispose();
                    return
                }
                cm.forceStartQuest(63070, "");
                cm.updateInfoQuest(63070, "end=0");
                cm.getMap().spawnReactorIfNotExist(8659072, 0, 838, 69, 0, "q63070_reactor1");
                cm.afterlandChangeMapObject("q63070Pen_in", 1, 0, 1000, 0, 0, 0, 0);
                cm.afterlandChangeMapObject("q63070Pen_out_pos", 1, 1, 1000, 0, 0, 0, 0);
                cm.sendNormalTalk("那我就听你的先出去。你送我出去后，一定要把金银财宝给我搬过来！", 4, 9400216, false, true)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63070.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("帮，帮我一把，谢了。", 4, 9400216, false, true);
            cm.dispose()
        }
    }
};