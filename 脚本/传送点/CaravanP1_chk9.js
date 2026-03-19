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
            cm.onScriptMessage_莫奈德卷轴风格(9400585, "“呃啊啊啊啊！是怪物啊！”这回是队伍前面发生了骚乱。没过一会儿，一名骑士面如土色地推开人群冲出来。\r\n“怪……怪物裹挟着暴风雪和冰霜出现，让四周都被冰霜覆盖了！”\r\n           #i4036367#\r\n#b\r\n#L0#和骑士们一起去讨伐怪物。（全体友好度上升）#l\r\n#L1#派骑士去讨伐怪物。（人数减少）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 6, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 3, 0, 100);
        cm.莫奈德_特效(null, [8, 10, 5, 6, 3]);
        cm.sendNormalTalk_Bottom("勇士你亲自出马，太好了！我这就去向副团长报告……", 37, 9400585, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("前往#m867200630#。", 35, 0, true, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(867200630, 0);
                for (var a = 2210207; a <= 2210211; a++) {
                    cm.dispelBuff(a)
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64006, "man", -20);
        cm.莫奈德_特效(null, [6, -20, -10, -1, -7, -2]);
        cm.sendNormalTalk_Bottom("我……我们和副团长一起参加了讨伐，可……一路节节败退！", 37, 9400585, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("再这样下去大家都会受伤惨重！快，快去支援！", 37, 9400585, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("前往#m867200630#。", 35, 0, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(867200630, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};