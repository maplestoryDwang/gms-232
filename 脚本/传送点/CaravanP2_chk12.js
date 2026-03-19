function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 1, 3000);
            cm.onSetBackEffect("2", 1, 1, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210209, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400587, "“前方有人！”可汗大声喊道。远处有一群人正朝大篷车队伍走来。他们过来的路上有怪物徘徊，看起来很危险。“我们得救救他们！”一旁的艾丽卡喊道。\r\n           #i4036367#\r\n#b\r\n#L0#发信号叫他们不要过来。（C组友好度下降）#l\r\n#L1#去消灭怪物。（C组友好度增加，人数增加）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy3", -15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, -15, 0]);
        cm.sendNormalTalk_Bottom("#face0#不行！那些人和怪物的距离越来越近了。", 37, 9400580, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#他们好像没发现怪物！我们得快点去救他们！", 37, 9400580, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h #！你在考虑什么？快行动起来！", 37, 9400580, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200980#。", 35, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200980, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy3", 15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 15, 0]);
        cm.莫奈德_特效(null, [6, 40, 10, 10, 10, 1]);
        cm.sendNormalTalk_Bottom("前往#m867200980#。", 35, 0, false, true)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.warp(867200980, 0);
            for (var a = 2210207; a <= 2210211; a++) {
                cm.dispelBuff(a)
            }
        }
    }
};