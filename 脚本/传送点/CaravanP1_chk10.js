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
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "巴特勒再次骑着马走过来，他脸上的神色比最开始时稍微温和一些了。\r\n“当他们提名你当大篷车队伍的指挥者时，我真觉得那是对我的侮辱。虽然见过你在卡夫塔佩战斗的情景，但我对你的来历，身份和实力都不了解，会这样想也很正常。\r\n“不过一路观察下来，我发现他们没选错人。”\r\n巴特勒夸奖我与那些从小接受训练的亚皮纳斯骑士相比也毫不逊色。\r\n           #i4036367#\r\n#b\r\n#L0#感谢他的夸奖。( - ) #l\r\n#L1#询问亚皮纳斯的事。（A组友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#今后我会继续观察你，希望你会像今天一样用心。", 37, 9400581, false, true)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 0, 0, 0]);
        cm.onScriptMessage_莫奈德卷轴风格(9400581, "“亚皮纳斯？”巴特勒反问道，他似乎想确认一下我对亚皮纳斯了解多少。我点了点头。\r\n他说亚皮纳斯是集结了众多知识渊博又兼具洞察力的学者的组织，而他们这些骑士则负责保护学者们。\r\n巴特勒的语调中透露着自豪。\r\n           #i4036367#\r\n#b\r\n#L0#“真了不起。”（A组友好度上升）#l")
    } else {
        if (status === a++) {
            cm.addNumberForQuestInfo(64007, "happy0", 10, 0, 100);
            cm.莫奈德_特效(null, [8, 10, 0, 0, 0]);
            cm.setNumberForQuestInfo(64006, "Ec", 11);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
};