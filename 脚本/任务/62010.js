var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("哦，正好来了一个支援者啊！事不宜迟！必须赶紧消灭那些妖怪，否则村子肯定会遭殃。情况紧急，情况紧急啊！你帮我消灭150只#r#o9600024##k和100只#r#o9600022##k吧！", 37, 9310047, false, true)
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("呼……多亏了你啊，那些暴走的妖怪终于消停了。请你重新和我说话吧。", 37, 9310047, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                cm.forceCompleteQuest(62010);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.dispose()
            }
        }
    }
};