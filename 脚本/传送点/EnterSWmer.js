function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.isQuestActive(24079)) {
                cm.warp(910510400, 0, false);
                cm.sendNormalTalk("我正在等你……双弩精灵。", 0, 1033225, false, true)
            } else {
                cm.warp(105000000, 0);
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是谁？为什么给我写信？", 2, 1033225, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("听说你是精灵中只有极少数人才会使用的双弩枪的高手，是拥有很强力量的人……我想证实那个传闻是不是真的。", 0, 1033225, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(会不会是和黑色之翼有关的人呢？不管怎样，不能听了那样的话而逃避……为精灵的荣誉而战吧！)", 2, 1033225, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("真正的强者，应该不会逃避挑战吧？让我们决一胜负吧！", 0, 1033225, true, true)
                        } else {
                            if (status === a++) {
                                cm.spawnMobLimit(9300431, 1, 650, 236, 100);
                                cm.npc_LeaveField("oid=41808201");
                                cm.npc_LeaveField("oid=41808201");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};