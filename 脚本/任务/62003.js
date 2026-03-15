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
            cm.sendNormalTalk_Bottom("这……妖怪已经到了嵩山镇，大事不妙啊！", 37, 9310053, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("郑长老说，#b#p9310053##k知道村子里发生那些怪事的原因。不过，这里的情况看上去更糟……这是怎么回事？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("其实，在很久之前，藏经阁里的妖怪解除了封印。那时，我们少林寺虽然成功地重新封印了妖怪，但偶尔还是会有妖怪逃出去袭击村民。", 37, 9310053, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("即便如此，在我的佛珠和人们的祈祷作用下，事情都很快得到了解决。", 37, 9310053, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("可是最近，有无数妖怪解开了封印，从这里逃了出去。在我看来，还是藏经阁出了问题。你看到我的身后了吗？妖怪们的气息就像烟雾一样到处蔓延。", 37, 9310053, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("百闻不如一见。你去大雄宝殿看看吧。", 37, 9310053, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(62003, "");
                                    cm.dispose()
                                }
                            }
                        }
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
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 6);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 6);
            cm.sendNormalTalk_Bottom("你的脸色看上去不太好啊。这可怎么办……我希望你能在这里多留一会，帮助我们消灭妖怪。", 37, 9310053, false, true)
        } else {
            if (status === a++) {
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.sendNormalTalk_Bottom("现在单凭我们自己的力量已经有些吃力了。请你去和负责消灭妖怪的#b#p9310046##k见面，一起寻找消灭妖怪的方法吧。", 37, 9310053, true, false)
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest();
                    cm.dispose()
                }
            }
        }
    }
};