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
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 1, 3000);
            cm.onSetBackEffect("3", 1, 1, 0, 0);
            cm.useItem(2210210, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400588, "郁兰走过来，将用纸仔细裹着的两小块肉推到我面前。“我没胃口，给你吃……”我想还给她，她却摇摇头说，“这是述拉大婶给的，我也就只能送你这个……”郁兰一脸害羞地丢下句谢谢就跑了。\r\n           #i4036367#\r\n#b\r\n#L0#吃郁兰给的肉。（D组友好度下降）#l\r\n#L1#假称是分粮后剩余的肉，还给述拉。（C组有好的上升，D组友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 0, -10]);
        cm.sendNormalTalk_Bottom(".....从卡夫塔佩出发以来，郁兰就没吃过任何东西。", 37, 9400591, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("她每次都把自己那份食物分给孩子们，或是负伤者。", 37, 9400591, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("所以我才把我的食物分给她……谁知连这点食物也给#h #你吃了。我不怨你，#h #，只是……我很担心郁兰的身子挺不住。", 37, 9400591, true, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 7);
                    cm.useItem(2210210, false);
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
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 10, 15]);
        cm.sendNormalTalk_Bottom("真的吗？啊，谢谢你，谢谢……", 37, 9400591, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("也不知我这么收下应不应该，太感谢你了……", 37, 9400591, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不瞒你说，郁兰从昨天离开卡夫塔佩之后，就没吃过任何东西。虽然我把我的食物分了她一点，但那肯定不够……谢谢你……", 37, 9400591, true, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 7);
                    cm.useItem(2210210, false);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
};