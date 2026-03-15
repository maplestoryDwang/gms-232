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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("唉唉…慢啦，太慢啦。不好意思啊，我看你是真没那个天赋，就算再怎么修炼也学不会双刀的。", 0, 1057000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…我都说的这么过分了，你怎么还那么淡定啊？真是个有趣的家伙！喂，红雅！快出来，我碰到一个很有意思的家伙呢！", 0, 1057000, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(2603);
                    cm.gainExp(50);
                    cm.npc_ChangeController(1057001, "oid=1096059", -880, 141, 36, -930, -830, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=1096059", "summon", 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};