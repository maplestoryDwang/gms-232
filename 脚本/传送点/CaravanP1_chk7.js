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
            cm.莫奈德_特效(null, [7, 6]);
            cm.onScriptMessage_莫奈德卷轴风格(9400589, "佩图尔一反常态地满脸心烦意乱的表情朝我走过来。\r\n“可汗村长并不是一开始就那样的，他从前是位很优秀的村长。”佩图尔叹息地说道。\r\n“他也不知道在目前情况下应该怎么做，所以才会执着于规矩，默许的法则之类的。我不要求你一定要理解他，只是觉得你该知道一下前因后果，所以跟你说这些。\r\n佩图尔似乎真的很惋惜可汗的变化。\r\n           #i4036367#\r\n#b\r\n#L0#向佩图尔表示理解。（C组友好度上升）#l\r\n#L1#说我能理解可汗。（C组友好度上升）#l\r\n#L2#说对此不感兴趣。（C组友好度下降，D组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 10, 0]);
        cm.sendNormalTalk_Bottom("#face0#你能理解我担忧可汗的心情吗？……", 37, 9400589, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#嗬嗬，谢谢你，其他人都认为我光会偏袒可汗。我一直在他们中间努力扮演协调者的角色……从另一方面来说……我觉得不管怎样，至少我得支持他……心里好复杂。", 37, 9400589, true, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 8);
                cm.monadForceMove("0", 0, 3000);
                cm.onSetBackEffect("0", 1, 0, 0, 0);
                cm.monadForceMove("1", 0, 3000);
                cm.onSetBackEffect("1", 1, 0, 0, 0);
                cm.monadForceMove("2", 0, 3000);
                cm.onSetBackEffect("2", 1, 0, 0, 0);
                cm.monadForceMove("3", 1, 3000);
                cm.onSetBackEffect("3", 1, 1, 0, 0);
                cm.useItem(2210210, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 10, 0]);
        cm.sendNormalTalk_Bottom("#face0#嗬嗬，谢谢你，其他人都认为我光会偏袒可汗。我一直在他们中间努力扮演协调者的角色……从另一方面来说……我觉得不管怎样，至少我得支持他……心里好复杂。", 37, 9400589, true, true)
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 8);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 1, 3000);
            cm.onSetBackEffect("3", 1, 1, 0, 0);
            cm.useItem(2210210, false);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, -10, -10]);
        cm.sendNormalTalk_Bottom("#face0#……是吗，抱歉我打扰你了。", 37, 9400589, false, true, 1)
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 8);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 1, 3000);
            cm.onSetBackEffect("3", 1, 1, 0, 0);
            cm.useItem(2210210, false);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
};