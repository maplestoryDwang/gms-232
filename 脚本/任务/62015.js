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
            cm.sendNormalTalk_Bottom("嗯……#b#p9310577##k找了半天都找不到的鞋子，居然被你一下子就找到了，看来你是个挺聪明的人类呢。", 37, 9310579, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么……你应该也肯帮我一个忙的吧？", 37, 9310579, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你说吧。", 57, 9310579, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("你得先答应我才行！！在你答应我之前，我是不会告诉你任何细节的。", 37, 9310579)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("谢谢你。这是一个有关#r人类和妖怪的悲情故事#k。而那个主人公就是我。", 37, 9310579, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我在这里遇到了我生命中的男子。而且那个男子也爱我……他说#r能为我付出一切#k。", 37, 9310579, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这是不是很伟大啊？总……总之，希望你能帮我把这封信交给他。", 37, 9310579, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("现在，人们抓妖怪抓红了眼。我独自前往的话，非常危险。我怕他担心我，所以请你帮我把这封信交给他吧。", 37, 9310579, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom(" (向来冷漠的#b#p9310579##k居然也有这样的心意……不过，居然有人和妖怪相恋。真想看看那人的庐山真面目！)", 57, 9310579, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你前往#r#m701210130##k就能找到他。", 37, 9310579, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(62015, "");
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
            cm.sendNormalTalk_Bottom("你把信交给他了？他说了些什么？", 37, 9310579, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom(" (嗯……怎么办呢？如果实话实说，她肯定会受到不小的打击……)", 57, 9310579, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("他……他暂时无法摆脱别人对他的监视，所以他说暂时不能和你相见。他说#b#p9310579##k你现在也很危险，所以你#r决不能#k去找他！", 57, 9310579, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("果然，会担心我的人只有他了。下次遇见他，#r我一定要从后面紧紧抱住他！#k", 37, 9310579, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom(" (………………)", 57, 9310579, true, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 6);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 6);
                                cm.forceCompleteQuest(62015);
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