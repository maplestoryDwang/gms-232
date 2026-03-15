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
            cm.sendNormalTalk_Bottom("你就是我的新弟子？嗯，虽然看上去有点弱，不过也没得选了！", 37, 9310046, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我可是熬了好几个夜晚才制作出了#i2434568#  #t2434568#，你能帮我进行一下测试吗？由于还没到完成阶段，因此需要进行很多测试才行。", 37, 9310046, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你到没人去的#b#m701210160##k那边试试吧。", 37, 9310046, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#b#m701210160##k是人们进行祭祀的神圣之地，而现在却成了一个灵魂乐园。你前往#b#m701210160##k，在那些怪物身上使用秘药吧。顺利的话，它们就会化作一缕青烟，消失殆尽。你能做到吧？", 37, 9310046)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这个……应该不会有副作用吧？", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(2434568, 1);
                                cm.sendNormalTalk_Bottom("这个嘛……我倒还没想过呢。好了，你快去吧，没时间磨蹭了！", 37, 9310046, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(62005, "");
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
            cm.sendNormalTalk_Bottom("秘药有效吗？", 37, 9310046, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("别说消灭妖怪了，那个药一下子引来了几十只妖怪！！", 57, 9310046, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，这个……我还以为这次能行呢。嗯……那要试试这个秘药吗……？？", 37, 9310046, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……(这不是驱散妖怪的秘药，而是聚集妖怪的秘药吧。回去找#b#p9310053##k吧。)", 57, 9310046, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                            cm.forceCompleteQuest(62005);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};