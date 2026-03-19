function enter() {
    if (cm.isQuestFinished(40004)) {
        cm.warp(321001200, 0, false)
    } else {
        cm.playerMessage(-1, "不打倒所有影子骑士团，就无法继续前进。");
        cm.playerMessage(5, "不打倒所有影子骑士团，就无法继续前进。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("哈啊……哈啊……全部打倒吗……真的已经到了不可挽回的地步了……", 45, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/98", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face11#不管用什么方法，都要唤醒那个女子！", 45, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/99", 100)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(40004, "");
                    cm.forceStartQuest(40004, "001001003");
                    cm.forceCompleteQuest(40004);
                    cm.forceCompleteQuest(40900);
                    cm.dispose()
                }
            }
        }
    }
};