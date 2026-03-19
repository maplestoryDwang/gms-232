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
            cm.onScriptMessage_莫奈德卷轴风格(9400583, "“敌人来袭！大家快去躲避！”吉莉让村民们躲到后方，然后自己往前冲。“……天啊！”一句短暂的惊呼，吉莉停下了脚步。我走到她身边，眼前看见个奇怪的毒团。吉莉像念咒一样反复念叨着。“……我能行，我能行。”说完她迈步向怪物冲去。\r\n           #i4036367#\r\n#b\r\n#L0#跟着吉莉去消灭怪物。（全体友好度上升）#l\r\n#L1#保护村民们。（B组友好度上升，人数减少）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 5, 5, 5]);
        cm.sendNormalTalk_Bottom("前往#m867200940#。", 35, 0, false, true)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.warp(867200940, 0);
            for (var a = 2210207; a <= 2210211; a++) {
                cm.dispelBuff(a)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64006, "man", -20);
        cm.莫奈德_特效(null, [6, -20, -10, -1, -7, -2]);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 5, 0, 0]);
        cm.sendNormalTalk_Bottom("虽然消灭了怪物，可吉莉伤得很重。", 37, 9400585, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("至今为止都是吉莉把守前阵，可接下来她没法负责了。", 37, 9400585, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("还有……一同作战的士兵中也有几位不幸阵亡。", 37, 9400585, false, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 10);
                    cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
                    cm.useItem(2210210, false);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
};