function enter() {
    cm.openScriptNpc()
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
            cm.莫奈德_特效(null, [0, 0]);
            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [0, 0, 0, 0, 0, 0]);
            cm.sendNormalTalk_Bottom("#face0#尽管中途经历了许多波折，好在终于到了。", 37, 9400583, false, true);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这全是凯恩和#h0#的功劳！", 37, 9400583, true, true)
            } else {
                if (status === a++) {
                    cm.monadEndingScene(-1, -1, null);
                    cm.forceCompleteQuest(64041);
                    cm.dispose();
                    cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                    cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                    cm.warp(867200552, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};