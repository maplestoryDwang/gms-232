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
            cm.sendNormalTalk_Bottom("哦，谢谢你能这么快就赶来。看来你已经不记得嵩山镇了吧……真是不知道外面的世界发生了怎样的变化。这里还是没变，一草一木，都还是原来的样子。", 37, 9310049, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但是，最近村子里开始流传一些不祥的传闻。说什么有鬼怪出现，偷走了童鞋，这不是童话里才有的故事吗？", 37, 9310049, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我一开始也不相信……但是，我在树林里亲眼看见了披头散发的九尾狐。", 37, 9310049, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我们不能就这么束手待毙，所以我给保护嵩山镇的嵩山少林寺送了几次信，但都被盗贼中途抢走了，这可怎么办？", 37, 9310049, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("我希望你能帮我从盗贼手里抢回书信，交给我的老友--#r嵩山少林寺的方丈大师#k。这样的话，我们应该就能知道如何应对现在这个情况了。你能帮帮我们吗？", 37, 9310049)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("谢谢你，希望你回来的时候能带来好消息。", 37, 9310049, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(62001, "");
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
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
            cm.sendNormalTalk_Bottom("你带来了#b#p9310049##k的书信啊。", 37, 9310053, false, true)
        } else {
            if (status === a++) {
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.sendNormalTalk_Bottom("这……妖怪居然都已经到了嵩山镇。嗯……嗯……问题很严重啊……", 37, 9310053, true, false)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(62001);
                    cm.gainItem(4034635, -1);
                    cm.dispose()
                }
            }
        }
    }
};