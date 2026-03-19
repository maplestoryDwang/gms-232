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
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "得知斯洛克走掉的消息的巴特勒得意洋洋地走上前来。“哼哼，野营果然是个错误的选择。”巴特勒提高音量，就像故意要让所有人听见似的继续说道。“要是当初不休息立刻出发，就不会发生这种事了。凡是选择都必伴随着责任，希望大家谨记。” 一些人在后悔自己的选择，一些人对斯洛克感到了背叛。\r\n           #i4036367#\r\n#b\r\n#L0#“没了食物，重新再收集就行。”（A组友好度下降，D组友好度上升）#l\r\n#L1#“在这冰天雪地里一个人是很难活下去的，他很快就会回来。”（A组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 10, 0, 100);
        cm.莫奈德_特效(null, [8, -5, 0, 0, 10]);
        cm.sendNormalTalk_Bottom("#face0#你说得对，食物没有了可以再找。", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#但没法保证啥时候能收集到，而且在这过程中还可能会有人受伤。", 37, 9400581, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你好好干。", 37, 9400581, true, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 2);
                    cm.monadForceMove("0", 1, 3000);
                    cm.onSetBackEffect("0", 1, 1, 0, 0);
                    cm.monadForceMove("1", 0, 3000);
                    cm.onSetBackEffect("1", 1, 0, 0, 0);
                    cm.monadForceMove("2", 0, 3000);
                    cm.onSetBackEffect("2", 1, 0, 0, 0);
                    cm.monadForceMove("3", 0, 3000);
                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                    cm.useItem(2210207, false);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#他回来的话，情况会有改变吗！食物已经没了。", 37, 9400581, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#再说了，就算他回来，这里也没人愿意接纳他。", 37, 9400581, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#事情已经无法挽回了。你还是想想办法在村民们饿得走不动之前赶紧解决吧。", 37, 9400581, true, true, 1)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 2);
                    cm.monadForceMove("0", 1, 3000);
                    cm.onSetBackEffect("0", 1, 1, 0, 0);
                    cm.monadForceMove("1", 0, 3000);
                    cm.onSetBackEffect("1", 1, 0, 0, 0);
                    cm.monadForceMove("2", 0, 3000);
                    cm.onSetBackEffect("2", 1, 0, 0, 0);
                    cm.monadForceMove("3", 0, 3000);
                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                    cm.useItem(2210207, false);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
};