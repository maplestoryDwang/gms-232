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
            cm.sendNormalTalk_Bottom("#face2#你听说了吗，就快到下个村庄了！真是太好了，大篷车队伍的气氛也变得活跃一些了。", 37, 9400580, false, true);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#把不熟悉的指挥工作做得这么好，辛苦你了，#h0#。", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(64033);
                    cm.dispose();
                    cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                    cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                    cm.warp(867200502, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};