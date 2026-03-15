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
            cm.sendNormalTalk_Bottom("#fs20##e#b天灵灵~地灵灵~~~太上老君~~快~~显~灵~~~嗨呀！#k", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("哈……累死我了。你拿好！这些僵尸驱散符是我倾注了所有力量写成的！\r\n你快去贴到那些僵尸身上吧。这次肯定能发挥效果，请拭目以待！", 37, 9310540)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你快去吧！外滩那里有很多僵尸，你把这10个符咒统统贴到僵尸身上，然后再回来吧。\r\n#fs20##e一定要把10个符咒都用上哦~~不用~~着急，慢慢地贴~！", 37, 9310540, false, true);
                    cm.gainItem(2270043, 10)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(62146, "");
                        cm.dispose()
                    }
                }
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
            cm.dispose();
            cm.warp(701100014, 2)
        }
    }
};