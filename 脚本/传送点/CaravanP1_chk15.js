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
            cm.onScriptMessage_莫奈德卷轴风格(9400587, "佩图尔在村民中间穿行，告诉大家即将抵达目的地。村民们脸上露出重拾希望的神情。\r\n“即将到达的村庄是阿布鲁地区与我们交流最活跃的村子。”可汗走过来说道。\r\n“到时他们会给我们提供房屋和热汤。”他严肃的脸上也浮现出一丝期待的神色。\r\n           #i4036367#\r\n#b\r\n#L0#多亏大家的帮助，才能顺利到达。（全体友好度上升）#l\r\n#L1#这讨厌的任务总算要结束了。（全体友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 20, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 30, 0, 100);
        cm.莫奈德_特效(null, [8, 10, 10, 20, 30]);
        cm.sendNormalTalk_Bottom("#face0#……你谦虚了，应该说我们大家托#h0#你的福，才能顺利走到这里。", 37, 9400587, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#村民们都很信任你。相比我这个和他们同甘共苦了数十年的村长，他们却更依赖你这个刚认识不过一天的新朋友，真让我心里不是滋味……尽管如此，我还是得尽到自己的职责。", 37, 9400587, true, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 16);
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
                cm.莫奈德_特效("听说就快到了！", [1, 0, 3000]);
                cm.莫奈德_特效("看那边？！是那边吗？有烟气升起来！估计在做晚饭呢！", [1, 1, 3000], 2);
                cm.莫奈德_特效("太好了，能赶在暴风雪袭来之前到达……", [1, 1, 3000], 4);
                cm.莫奈德_特效("暴风雪的速度也好像慢了许多！可惜我们的房子……已经……", [1, 0, 3000], 6);
                cm.莫奈德_特效("房子可以再盖，大家平平安安地才最重要。", [1, 0, 3000], 8);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, -10, -10, -10, -10]);
        cm.sendNormalTalk_Bottom("#face0#……这段旅途麻烦你了。不过我们马上能到目的地了。辛苦你再坚持最后一段路吧。", 37, 9400587, false, true)
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 16);
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
            cm.莫奈德_特效("听说就快到了！", [1, 0, 3000]);
            cm.莫奈德_特效("看那边？！是那边吗？有烟气升起来！估计在做晚饭呢！", [1, 1, 3000], 2);
            cm.莫奈德_特效("太好了，能赶在暴风雪袭来之前到达……", [1, 1, 3000], 4);
            cm.莫奈德_特效("暴风雪的速度也好像慢了许多！可惜我们的房子……已经……", [1, 0, 3000], 6);
            cm.莫奈德_特效("房子可以再盖，大家平平安安地才最重要。", [1, 0, 3000], 8);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
};