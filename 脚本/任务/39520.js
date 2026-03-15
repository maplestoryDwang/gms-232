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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（卡琳解释了委托内容，据说从不久前开始，村庄附近的寺院里\r\n总会丢失会发光的东西。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（然后从几天前开始，寺院的修行者也开始失踪，\r\n委托者表示两起事件之间可能有关联。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face7#你说这两个事件有关联？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#这些……等你亲自见过委托人之后自然就知道了，\r\n啊，委托人就是那座寺院的#b#p3001606##k。", 36, 3001652)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#他可能在#r#m410000230##k，去那里应该能见到他，\r\n希望你能顺利解决事件，嘻嘻~！", 36, 3001652, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(39520, "");
                                cm.OnStartNavigation(410000230, 0, "", 39520);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39520.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊……这条项链是我们修行者的象征。", 36, 3001661, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face11#真是一条璀璨夺目的奢华项链，\r\n任凭我怎么看，这东西都好像和修行不太搭呢！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哈哈……这并不是单纯的装饰，\r\n来，能看到吧……", 36, 3001661, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face12##fc0xFFbfbfbf#（我仔细看了看修行者的项链，上面是我的画像呢，\r\n呼……这样算是长得不错的吧？）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我们寺院汇集了多位村民的心愿，\r\n若是收下了这份迫切，就理应承担起相应的责任。", 36, 3001661, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#脸就是灵魂的镜子，千万要记得经常审视自己，不能忘了身为修行者的本分。\r\n这个闪烁的饰品就蕴含这样的意义。", 36, 3001661, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#正是因为东西珍贵，才不能被夺走，\r\n那些被抓走的修行者也是同样的道理。", 36, 3001661, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#责任感啊……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这种心态相当耿直，不像生活在那什么地方的某人。", 36, 3001651, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（哟呵，行动当然比心意更重要！）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这倒不像是那个光有张嘴皮子的家伙会说的话。", 36, 3001651, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我绝不会轻饶你……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#啊，不知不觉就说多了呢，\r\n那我就给你解释一下事件吧。", 36, 3001661, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(39520);
                                                                cm.gainExp(392);
                                                                cm.gainExp(609);
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