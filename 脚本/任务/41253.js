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
            cm.sendNormalTalk("你快振作点！", 2, 2460002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯嗯……到底发生什么事情了？", 0, 2460002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你到底在便当里做了什么手脚？为什么吃过的人全都倒下去了！", 2, 2460002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("只是用了蝙蝠怪的指甲、僵尸蘑菇的盖子、火独眼兽的眼睛……", 0, 2460002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你怎么能把这种东西放到食品里边，为什么！这个女人太危险了，到底她害了多少人了？", 2, 2460002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("莫非，真的是因为我做的便当，罗密欧才晕倒的吗？怎么会有这种事情……啊，不对，现在不是这种时候！赶紧把这个药交给#b罗密欧#k吧，顺便告诉#b罗密欧#k实在是对不起……让他忘了我这种女人吧。呜呜。", 0, 2460002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41253, "");
                                    cm.forceStartQuest(41253, "");
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41253.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk("(给倒地的罗密欧服用了药)", 0, 2460003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("唔……唔唔……", 0, 2460003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好点了吗？你是还活着吧？", 2, 2460003, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41269, "");
                        cm.forceStartQuest(41269, "");
                        cm.forceCompleteQuest(41269);
                        cm.sendNormalTalk("到，到底发生什么事情了……啊，那个便当……呕呕，味道实在是太可怕了！", 0, 2460003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("朱丽叶那女人并不是想用便当来……杀人，她只是不会做料理而已。而且她还说忘了像她这样的女人。", 2, 2460003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……说什么傻话！不就是个便当嘛，只要是她做的便当，吃一百次我都愿意。死亡什么的怎么可能让我们俩分……", 0, 2460003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("先把这位救起来之后，再说吧。", 2, 2460003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊，对了，师傅！", 0, 2460003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(给犹泰服用了药)", 4, 2460004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("呃……呃……呃呃……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4310085# #t4310085#15个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/7/0# 200000金币\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 3900000 exp", 4, 2460004, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(41270);
                                                    cm.forceCompleteQuest(41253);
                                                    cm.gainExp(3900000);
                                                    cm.sendNormalTalk("师傅，你还好吧？", 0, 2460003, true, true);
                                                    cm.gainItem(4009061, -10);
                                                    cm.gainItem(4009062, -10);
                                                    cm.gainItem(4310085, 15)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("嗯？出什么事了吗？我什么事情也没有？嘻嘻嘻~", 4, 2460004, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("是嘛，看你脸色不是很好啊。真的没问题吗？", 2, 2460003, true, false)
                                                        } else {
                                                            if (status === a++) {
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
        }
    }
};