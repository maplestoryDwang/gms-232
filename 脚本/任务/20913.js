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
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0);
                cm.dispose();
                return
            } else {
                cm.sendNormalTalk("呃……又是#b冒险骑士团#k吗？呃……我就知道会这样！#r这次计划#k太操之过急了！我们花了很长时间才占领了#b#m310000000##k，我一个人怎么可能#r占领#m102000000#和#m100000000##k？可恶……没办法。既然#r那个人#k说需要这么做……", 0, 1104314, false, true)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("必须尽快#r搜集能源#k，送到#b#m310000000##k去才行……光靠那里的能源还不够……#b但是为什么我们搜集了这么多能源#k，却还是不够呢？ #p9075004#到底在做什么呢？啊啊啊！搞不懂！咦！妨碍者！必须#r先把你解决掉#k！", 0, 1104314, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20913, "");
                    cm.spawnMobLimit(9300740, 1, 697, 256, 100);
                    cm.npc_LeaveField("oid=1134881");
                    cm.npc_LeaveField("oid=1134882");
                    cm.npc_LeaveField("oid=1134883");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20913.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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