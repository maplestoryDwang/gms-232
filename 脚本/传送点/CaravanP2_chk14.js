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
            cm.onScriptMessage_莫奈德卷轴风格(9400580, "“谢谢你，#h0#。多亏了你，难民们才能平安地加入大篷车队伍。听说他们的村子也遭到了怪物的袭击。他们说越往森林附近走，怪物越多，所以他们正在绕远路赶往斯巴乐缇。我觉得该把这情况告诉你，#h0#……”我点点头，谢谢她告诉我新的信息。艾丽卡似乎还有话要说。“……这些人都又累又饿。我们还有剩余的食物吗？”可汗在一旁听着我们的对话，听见食物二字，眉头皱得更紧了。“我们的村民也在忍饥挨饿。”“非常遗憾，我们没有食物可以分给他们……在目前情况下也没道理跟他们分享。大家都要生存，没办法。”艾丽卡一脸按捺着有话不说的表情看着我。\r\n           #i4036367#\r\n#b\r\n#L0#把剩下的食物全交给她。（B组友好度下降，食物减少）#l\r\n#L1#说不能给她。（C组友好度下降）#l\r\n#L2#说没有剩余的食物。（全体友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", -15, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -15, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#太好了！这些应该够他们所有人吃了。", 37, 9400580, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#也不知还有多少像他们一样的人……事态比预想的越来越严重了，真令人担心。幸好有#h0#同行。", 37, 9400580, true, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 15);
                cm.addNumberForQuestInfo(64006, "food", -25);
                cm.useItem(2210210, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.莫奈德_特效(null, [5, -25]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, -10, 0]);
        cm.sendNormalTalk_Bottom("#face0#真的不行吗……", 37, 9400580, false, true)
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 15);
            cm.useItem(2210210, false);
            cm.莫奈德_特效(null, [0, 2]);
            cm.莫奈德_特效(null, [5, -25]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, -5, -10, -10, -10]);
        cm.sendNormalTalk_Bottom("没……没有剩余的食物了？", 37, 9400591, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("离下个村庄还有很远啊……不对，万一下个村庄也……也发生了和对岸村庄相同的不幸……我们还有希望吗？", 37, 9400591, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 15);
                cm.useItem(2210210, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.莫奈德_特效(null, [5, -25]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};