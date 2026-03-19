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
            cm.onScriptMessage_莫奈德卷轴风格(9400582, "巴特勒刚离开，艾丽卡和凯恩就像等候已久似的走过来。艾丽卡给我递了凉水。“副团长又唠叨你了？”凯恩漫不经心地问。我把我和巴特勒的谈话内容告诉了他们。“你怎么答复他的？”看似不在意的艾丽卡眼睛一亮，开口问道。\r\n           #i4036367#\r\n#b\r\n#L0#“当然是打算跟你们同行。”（全体友好度上升）#l\r\n#L1#“我还没想好。”（B组友好度减少）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 5, 5, 5]);
        cm.sendNormalTalk_Bottom("#face2#太好了！跟你合作真的非常踏实。老实说咱们的目标也一样啊？就是拯救阿布鲁！", 37, 9400580, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#我们一定很快就能见到给你来信的老婆婆。我会帮你。", 37, 9400580, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你是因为喜欢我吧？", 37, 9400582, true, true)
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
        cm.addNumberForQuestInfo(64007, "happy1", -5, 0, 100);
        cm.莫奈德_特效(null, [8, 0, -5, 0, 0]);
        cm.sendNormalTalk_Bottom("#face0#嗯……咱们一起合作的话，彼此都能给对方很多帮助呢。", 37, 9400580, true, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#老实说咱们的目标都一样啊，就是拯救阿布鲁！", 37, 9400580, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#一起同行的话，我会积极帮助你找到给你来信的老婆婆。", 37, 9400580, true, true)
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
};