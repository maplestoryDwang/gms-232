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
            cm.monadForceMove("1", 1, 3000);
            cm.onSetBackEffect("1", 1, 1, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "“你见到那位给你来信的老婆婆后，有什么打算？”巴特勒试探地问道。我提醒他说老婆婆的信中写着请我帮助阿布鲁。他一脸满意说道，“那你会一直跟我们同行，直到解决该事态了。”\r\n           #i4036367#\r\n#b\r\n#L0#“会怎样还不好说。”（A组友好度下降）#l\r\n#L1#“应该是”（全体友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, 0, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#什么意思？你不跟我们一起吗？", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#我劝你同行不是为了我自己，只是为了那些信赖你的村民，你别误会。", 37, 9400581, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 11);
                cm.useItem(2210208, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 5, 5, 5]);
        cm.sendNormalTalk_Bottom("#face0#很好。你记住有很多村民都很信赖你。", 37, 9400581, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#我们亚皮纳斯会尽可能协助你，不用担心。", 37, 9400581, true, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 11);
                cm.useItem(2210208, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};