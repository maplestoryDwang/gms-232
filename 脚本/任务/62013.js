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
            cm.sendNormalTalk_Bottom("人类世界确实有很多漂亮的东西呢。尤其是#r童鞋#k，看到如此可爱玲珑的鞋子，我就忍不住想要得到一双！", 37, 9310577, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("所以，你才偷童鞋？", 57, 9310577, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("居……居然说我偷！我只不过是在孩子们睡着的时候稍微借来穿穿，然后想在天亮之前还回去。", 37, 9310577, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过……正当我兴高采烈地穿着鞋到处走时，鞋子却不知不觉给丢了！", 37, 9310577, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("希望你能帮我找到#r童鞋#k，并归还给主人。我估计鞋子应该落在我去过的地方了。", 37, 9310577, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("你能做到的吧？", 37, 9310577)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b童鞋#k应该落在#r#m701210180##k的石塔附近。", 37, 9310577, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("找到鞋子后，请你帮我还给#r#m701210000##k的#p9310580#。", 37, 9310577, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(62013, "");
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
            cm.sendNormalTalk_Bottom("#fs20#啊！这是我的鞋子，昨晚被#r可怕妖怪#k偷走了！", 37, 9310580, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#r可怕妖怪#k？你见过妖怪？", 57, 9310580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯！！#r长有一百多个角的可怕妖怪#k！", 37, 9310580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("虽然我没见到过……可人们都这么说！而且，妖怪会把所穿鞋子尺寸与它相符的孩子抓走……太可怕了。", 37, 9310580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不过，世界上也有一些不可怕的善良的妖怪。这双鞋就是它出于好奇才带走的，它拜托我把鞋子还给原来的主人，还说再也不会瞎捣蛋了。所以你不必害怕。", 57, 9310580, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("(#p9310577#听到这个消息会非常高兴吧。那么快点去 #m701220350#吧。)", 37, 9310580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                    cm.forceCompleteQuest(62013);
                                    cm.gainItem(4034657, -1);
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                    cm.dispose();
                                    cm.warp(701220351, 0)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};