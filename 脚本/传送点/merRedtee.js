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
            if (cm.isQuestActive(24084)) {
                cm.warp(910510410, 0, false);
                cm.sendNormalTalk("你是双弩精灵吗？", 0, 1033228, false, true)
            } else {
                cm.playerMessage(-1, "里面什么都没有.");
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……？你是谁？重生火焰在哪里！", 2, 1033228, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("重生火焰？啊……你是上当了吗？嘻嘻嘻……真是个愚蠢的家伙。根本没那种东西！", 0, 1033228, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……那个叫红茶的人说……全都是假的吗！", 2, 1033228, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("听说你比看上去的要单纯，看来是真的。嘻嘻……不用再多说废话了吧？", 0, 1033228, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(24084, "");
                                cm.forceCompleteQuest(24084);
                                cm.spawnMobLimit(9300432, 1, 1050, -190, 100);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};