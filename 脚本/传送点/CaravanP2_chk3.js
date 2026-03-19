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
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "“吁！”远处传来驱马的喊声，紧跟着巴特勒就出现了。“运气不错。你挽回失误的机会到了。”他说发现一群聚集在雪原中央的花花象和野狼群。\r\n           #i4036367#\r\n#b\r\n#L0#和骑士们一起去打猎怪物。（A组友好度上升，食物增加）#l\r\n#L1#派骑士们去打猎。（A组友好度下降，食物增加）#l\r\n#L2#不补充食物，直接前往目的地。（A组友好度下降，D组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#队伍不能停太久。我给你3分钟，你要在3分钟内收集尽可能多的食物回来。", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("前往#m867200900#。", 35, 0, true, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(867200900, 0);
                for (var a = 2210207; a <= 2210211; a++) {
                    cm.dispelBuff(a)
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -15, 0, 100);
        cm.莫奈德_特效(null, [8, -15, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#希望你不仅仅只会发号施令。", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#骑士团，各自收集食物，3分钟后就离开！", 37, 9400581, false, true)
        } else {
            if (status === a++) {
                cm.addNumberForQuestInfo(64006, "food", 200);
                cm.莫奈德_特效(null, [5, 200]);
                player.getTopMsgByItem(2439032, "获得了粮食。粮食总共增加200。");
                cm.setNumberForQuestInfo(64006, "Ec", 4);
                cm.dispose();
                cm.useItem(2210208, false);
                cm.monadForceMove("0", 0, 3000);
                cm.onSetBackEffect("0", 1, 0, 0, 0);
                cm.monadForceMove("1", 1, 3000);
                cm.onSetBackEffect("1", 1, 1, 0, 0);
                cm.monadForceMove("2", 0, 3000);
                cm.onSetBackEffect("2", 1, 0, 0, 0);
                cm.monadForceMove("3", 0, 3000);
                cm.onSetBackEffect("3", 1, 0, 0, 0);
                cm.莫奈德_特效(null, [0, 2])
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -15, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -20, 0, 100);
        cm.莫奈德_特效(null, [8, -15, 0, 0, -20]);
        cm.sendNormalTalk_Bottom("#face0#什么？不补充食物就上路？和你昨天的选择差别真大。", 37, 9400581, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#你记住，没有一惯性的命令会降低他人对你的信任。", 37, 9400581, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 4);
                cm.dispose();
                cm.useItem(2210208, false);
                cm.monadForceMove("0", 0, 3000);
                cm.onSetBackEffect("0", 1, 0, 0, 0);
                cm.monadForceMove("1", 1, 3000);
                cm.onSetBackEffect("1", 1, 1, 0, 0);
                cm.monadForceMove("2", 0, 3000);
                cm.onSetBackEffect("2", 1, 0, 0, 0);
                cm.monadForceMove("3", 0, 3000);
                cm.onSetBackEffect("3", 1, 0, 0, 0);
                cm.莫奈德_特效(null, [0, 2])
            }
        }
    }
};