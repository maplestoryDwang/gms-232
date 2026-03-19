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

function action(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
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
            cm.onScriptMessage_莫奈德卷轴风格(9400583, "凯恩一回来就去找艾丽卡，守着艾丽卡的吉莉朝我走过来说，“辛苦了。”\r\n“看来凯恩很欣赏你哦，#h0#。照平时的话，他总是把保护艾丽卡学者放在最首位，现在却愿意出马协助你。”\r\n我看着吉莉，眼神在问你怎么那么了解他。\r\n“我是凯恩粉丝俱乐部的首任会长哦，而且现在还是。”吉莉面带羞涩，却语气大方地说道。\r\n“我很喜欢从前那个稳重又充满超凡魅力的凯恩，但我觉得他现在的模样更接地气。”\r\n也不管我有没有问，吉莉自顾自地说了一大堆凯恩的事，直到其他骑士叫她，才停下话头。完了还给我抛来个‘你现在了解凯恩了吧’的眼神。\r\n           #i4036367#\r\n#b\r\n#L0#响应她说凯恩很棒。( - ) #l\r\n#L1#说不管她介绍再多，我都无法了解凯恩。( - ) #l\r\n#L2#说凯恩太过活泼，有时令人感到有负担。( - )#l")
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#原来你是这么看我的……我不会忘记的。	", 37, 9400582, false, true)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(64006, "Ec", 15);
                    cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
                    cm.useItem(2210210, false);
                    cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
};