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
            cm.sendNormalTalk_Bottom("#p9310053#到底在哪里呢？居然与[妖怪之书]一起消失了……而且还拥有了返老还童的力量！？他的消失，给人留下了太多的疑问。\n先返回#m701220000#，去找#p9310046#吧。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(62022, "");
                cm.dispose();
                cm.warp(701220500, 2)
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
            cm.sendNormalTalk_Bottom("真没想到#p9310053#竟然是那些妖怪的头目。亏我一直信任他，跟随他到现在。我真是瞎了眼啊。", 37, 9310046, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你没有必要自责。我现在倒是非常担心突然消失不见的#p9310053#。而且现在，这里还有很多妖怪出没。", 57, 9310046, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("多亏了你，问题才得以解决。真是太谢谢你了。剩下的事情就交给我们吧。只要我的[妖怪驱散秘药]能研究成功……！", 37, 9310046, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呃，我建议你还是不要进行那个研究了。总之，我只信赖#p9310046#。", 57, 9310046, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("对了，这里已经暂时由#p9310049#代替#p9310053#进行管理。他好像有话要对你说。", 37, 9310046, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                cm.forceCompleteQuest(62022);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};