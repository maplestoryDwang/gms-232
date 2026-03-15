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
            cm.sendNormalTalk_Bottom("#face0#已经准备得差不多了。别耽搁了,赶快前往下一地点寻找配件。", 37, 3001300, false, true, 1)
        } else {
            if (status === a++) {
                cm.effect_OnUserEff("UI/tutorial.img/illium/equip");
                cm.sendNormalTalk_Bottom("#face0#话说回来……我好久没离开家里了……还跑这么远……", 37, 3001351, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#呃呃……从没来过这种地方……呃呃……好可怕……", 37, 3001351, true, true, 1);
                    cm.forceStartQuest(34801, "");
                    cm.dispose()
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
            cm.forceCompleteQuest(34801);
            cm.updateInfoQuest(34801, "hunt1=1;exp=1");
            cm.sendNormalTalk_Bottom("#face0#你把所有配件都找到了！好，那就趁热打铁，前往下一个地区继续收集吧。", 37, 3001300, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(4036162, -10);
                cm.dispose()
            }
        }
    }
};