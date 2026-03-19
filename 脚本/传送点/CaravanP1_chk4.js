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
            cm.莫奈德_特效(null, [7, 6]);
            cm.onScriptMessage_莫奈德卷轴风格(9400590, "殿后的斯洛克再次走上前来，从他脸上的表情很难看出究竟是好消息还是坏消息。\r\n“真是老天保佑，暴风雪的速度减慢了。”\r\n传达完毕的斯洛克转身要走，忽然又回头说道。\r\n“暴风雪和大篷车队伍已经稍微拉开了距离，可以放宽心了。”，“我一般不太在意其他人……但你是这支队伍的领导者，还是别太急躁得好’\r\n           #i4036367#\r\n#b\r\n#L0#“我会自己看着办的。”（B组友好度下降）#l\r\n#L1#“你盯着暴风雪就行。”（B组友好度下降）#l\r\n#L2#“多谢忠告，还有！谢谢你帮我们观察暴风雪的动态。”（B组友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -10, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#你是听不进别人的意见啊，还是说，这得分人。", 37, 9400590, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#以后我再不会给你提建议了。", 37, 9400590, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 5);
                cm.useItem(2210209, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -10, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#你是听不进别人的意见啊，还是说，这得分人。", 37, 9400590, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#以后我再不会给你提建议了。", 37, 9400590, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 5);
                cm.useItem(2210209, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 10, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#……看来你会成为不错的领导者，至少比可汗村长，或那个趾高气扬的巴特勒要好得多。", 37, 9400590, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#像你这样爱多管闲事的家伙就该当管事的。", 37, 9400590, true, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 5);
                cm.useItem(2210209, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};