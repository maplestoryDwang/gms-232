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
            cm.sendNormalTalk("现在试着用技能去攻击怪物吧。把技能添加到快捷栏中，使用起来会更加方便。只要把想要使用的技能用鼠标拖放到快捷栏里就行。", 1, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你去用#r元素斩#消灭#b5个#o9300731##k吧。", 1, 1102102, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20837, "");
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.spawnMobLimit(9300731, 1, -364, -6, 100);
                    cm.effect_OnUserEff("UI/tutorial.img/8");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20837.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("用元素斩击消灭掉怪物了吗？非常好。嗯，好的，现在你好像可以成为修炼骑士了。", 1, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在基本训练全部结束了。只要通过简单的测试，你就能成为修炼骑士了。我马上把你送到考场去。一定要好好考哦～不及格就得重新接受教育！", 1, 1102102, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20837);
                    cm.dispose();
                    cm.warp(130030106, 0, false)
                }
            }
        }
    }
};