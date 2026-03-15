var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("南哈特？就是骑士团的谋士啊。他刚刚回到了主甲板。", 37, 1540554, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对了，你在回去的路上，能不能帮忙搜集#b饼干#k和#b星星糖#k啊？大家现在都在忙着回收粮食呢。", 37, 1540554, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33166, "");
                    cm.sendNormalTalk_Bottom("那就麻烦你了。\r\n#b(在回去的路上捕猎小偷麻雀，收集30个饼干、30个星星糖。)#k", 37, 1540554, true, false);
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
            cm.updateInfoQuest(33128, "act1=350013000;act2=350020120");
            cm.sendNormalTalk_Bottom("呼，这雾实在是太浓了。我曾经做过很长时间的海盗，但还从未见过这样的迷雾呢。", 37, 1540457, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你手里拿的是什么啊？饼干和星星糖？哈哈，没错。大家现在都在忙着回收粮食。", 37, 1540457, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然很感激，不过那些应该可以让#b#h0##k吃了。\r\n毕竟他耗费了相当于数十人的力量，理应吃掉那么多量吧？", 37, 1540457, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33166);
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
                        cm.forceCompleteQuest(33143);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        cm.dispose()
                    }
                }
            }
        }
    }
};