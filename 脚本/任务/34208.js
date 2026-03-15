var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b#h0##k！\r\n我在这里和小鸡们一起制作面包！在这段时间内，希望你能去搜集可以做出#b色拉#k味道的材料！", 4, 3003151, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你只要前往五色花园，狩猎#b兰纳纳#k和#b幽纳纳#k，搜集#i4034944:##b#t4034944##k #i4034945:##b#t4034945##k就行了！", 4, 3003151, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果要做出足够~~穆托吃的食物，应该两种材料#b各需要30个#k，这样应该足够了吧？", 4, 3003151, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34208, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#b#ho#！#k\r\n你已经集齐材料啦？面包已经做好了…现在只要像这样混合，然后像这样放上去……", 0, 3003160, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好啦！现在#b" + cm.getInfoQuest(123999) + "" + cm.getInfoQuest(123998) + "" + cm.getInfoQuest(123997) + "三明治#k已经基本完成了！接下来试着制作肉…肉饼吧？请在我们#b哔比#k的帮助下，获得第一块肉饼吧！", 0, 3003160, true, false)
            } else {
                if (status === a++) {
                    cm.gainItem(4034944, -30);
                    cm.gainItem(4034945, -30);
                    cm.forceCompleteQuest(34208);
                    cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                    cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                    cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                    cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};