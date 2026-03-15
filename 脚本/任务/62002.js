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
            cm.sendNormalTalk_Bottom("现在不能进入少林寺。施主请下次再来……阿弥陀佛……", 37, 9310041, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等等！！我是受了嵩山镇的#b#p9310049##k委托，来转交书信的。只要进去和#b#p9310053##k见上一面就行。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("抱歉，现在少林寺不许任何人入内，这是#b#p9310053##k的命令。", 37, 9310041, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("请看看这里吧。连香炉都被妖怪给妖化了，寺庙一团糟。这么说来，你也不像是这里的人啊……嗯……", 37, 9310041, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这么一看，你长得有点像妖怪啊……？", 37, 9310041, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我哪里像妖怪！！！", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("啊……如果不是的话，那抱歉了。但是现在，少林寺不能相信任何人。如果你一定要见#b#p9310053##k……虽然很麻烦，但你必须让我相信你不是妖怪。可以吗？", 37, 9310041)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("请你消灭在周围捣乱的100个香炉。找到被香炉偷走的得道高僧之佛珠。传说佛珠只有在人类的手中才能发光。如果你将佛珠带来，我就能知道你是不是妖怪了。", 37, 9310041, false, true);
                                        cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("我之前还对你有所怀疑，对不起。现在这里的情况不妙，请进吧。", 37, 9310041, false, true)
        } else {
            if (status === a++) {
                cm.removeAll(4034636);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                cm.forceCompleteQuest(62002);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.dispose()
            }
        }
    }
};