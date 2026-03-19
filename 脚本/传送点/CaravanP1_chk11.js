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
            cm.onScriptMessage_莫奈德卷轴风格(9400590, "巴特勒刚走，斯洛克就来了。他可能听见了我和巴特勒的谈话，脸上挂着讥笑。\r\n“刚才那只怪物……就那只裹着暴风雪和冰霜袭来的怪物！我好像知道他的来历。”他就像在说什么秘密一样小声嘀咕。\r\n“白雪人！那明显是白雪人。我在卡夫塔佩战斗中也见过这种怪物。他总会巧妙地避开火焰。白雪人也怕火！哼哼，所以我给他起了个名字，叫冰霜白雪人！怎么样？很贴切吧？！”他兴高采烈地说了一会儿，又再次观察我的表情，似乎觉得我不相信他。\r\n“我在这片雪原上猎了数十年的白雪人，你别不把我的话当回事。”\r\n           #i4036367#\r\n#b\r\n#L0#“你盯着暴风雪就行。”（B组友好度下降）#l\r\n#L1#谢谢他提供的信息。（B组友好度上升）#l\r\n#L2#“我也早已猜到了。”（B组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -10, 0, 0])
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#嘿！你这个人真是！", 37, 9400590, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#以后我再也不会提醒你了，你自己想办法吧。", 37, 9400590, true, true, 1)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 12);
                    cm.monadForceMove("0", 0, 3000);
                    cm.onSetBackEffect("0", 1, 0, 0, 0);
                    cm.monadForceMove("1", 1, 3000);
                    cm.onSetBackEffect("1", 1, 1, 0, 0);
                    cm.monadForceMove("2", 0, 3000);
                    cm.onSetBackEffect("2", 1, 0, 0, 0);
                    cm.monadForceMove("3", 0, 3000);
                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                    cm.useItem(2210208, false);
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
        cm.addNumberForQuestInfo(64007, "happy1", 15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 15, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#我给你传授个小秘诀，你遇到白雪人的话，务必紧贴着他战斗。", 37, 9400590, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#他们的皮毛很厚，在远处根本伤不了他们，对我这种弓箭手来说，算是遇上对手了。", 37, 9400590, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#记住喽！", 37, 9400590, true, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 12);
                    cm.monadForceMove("0", 0, 3000);
                    cm.onSetBackEffect("0", 1, 0, 0, 0);
                    cm.monadForceMove("1", 1, 3000);
                    cm.onSetBackEffect("1", 1, 1, 0, 0);
                    cm.monadForceMove("2", 0, 3000);
                    cm.onSetBackEffect("2", 1, 0, 0, 0);
                    cm.monadForceMove("3", 0, 3000);
                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                    cm.useItem(2210208, false);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -10, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#你吹牛吧！你对白雪人知道什么？！", 37, 9400590, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#以后我再也不会提醒你了，你自己想办法吧。", 37, 9400590, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 12);
                cm.monadForceMove("0", 0, 3000);
                cm.onSetBackEffect("0", 1, 0, 0, 0);
                cm.monadForceMove("1", 1, 3000);
                cm.onSetBackEffect("1", 1, 1, 0, 0);
                cm.monadForceMove("2", 0, 3000);
                cm.onSetBackEffect("2", 1, 0, 0, 0);
                cm.monadForceMove("3", 0, 3000);
                cm.onSetBackEffect("3", 1, 0, 0, 0);
                cm.useItem(2210208, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};