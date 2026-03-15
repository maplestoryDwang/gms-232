var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(30012, "clear=false");
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status <= a++) {
            cm.sendNormalTalk("北侧的封印也解开了吗？", 0, 1064002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，现在所有的封印守护者都消灭掉了。你的封印也应该已经解开了。", 2, 1064002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我说怎么感觉身体变轻了。束缚着身体的黑暗气息已经完全感觉不到了！封印好像已经完全解开了！", 0, 1064002, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ScreenMsg("rootabyss/undo");
                        cm.forceStartQuest(30012, "");
                        cm.forceCompleteQuest(30012);
                        cm.gainExp(886000);
                        cm.effect_Voice("Field.img/rootabyss/undo", 100);
                        cm.dispose()
                    }
                }
            }
        }
    }
};