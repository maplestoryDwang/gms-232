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
            cm.dispose()
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
            cm.sendNormalTalk_Bottom("你找到我之前说起过的妖怪宝珠了吗？", 37, 9310597, false, true)
        } else {
            if (status === a++) {
                var e = cm.getQuest();
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                cm.forceCompleteQuest(e);
                cm.sendNormalTalk_Bottom("哦哦，原来是小巧玲珑又散发着美丽光泽的宝珠啊。这应该会对研究很有帮助的。", 37, 9310597, true, true);
                cm.gainItem(e - 62024 + 4034726, -1);
                cm.gainItem(2434666, 1);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.dispose()
            }
        }
    }
};