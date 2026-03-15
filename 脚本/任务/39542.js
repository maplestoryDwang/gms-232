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
            cm.askAcceptDecline_Bottom("#face0#根据从商店获得的情报，次元传送口就在万神殿，\r\n去万神殿的#r#m400000001##k处看看。", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#要想从这里去万神殿，需要经过一个叫荒蛮终点站的地方，\r\n有个家伙能将人从商业街送到荒蛮终点站……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(39542, "");
                    cm.OnStartNavigation(410000200, 1, "3001626", 39542);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39542.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#哇……这里就是次元传送口所在之处吗？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#确实如此，不过不知这位游人为何会来此地……\r\n你看起来并不像是诺巴或翼人，这么说难不成……", 36, 3000001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face10#好像就是你猜想的那个种族呢？\r\n总之我叫虎影，是个很风光的道士。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#近来虽然为了修炼而前往次元传送口的勇士日益增多，\r\n不过阿尼玛种族貌似还是头一次见呢。", 36, 3000001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#毕竟一般情况下都会隐瞒自己的特征，\r\n啊，说起来，该怎么做才能穿过次元传送口呢？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#就让我来告诉你，不过在此之前有件事我要确认一下。", 36, 3000001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#在你同意前往其他次元之前，我先看看你的内心世界，\r\n看看你更接近善还是恶。", 36, 3000001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face7#那要怎样才能知道！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#请让我集中注意力，只要一会儿就好。", 36, 3000001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（上了年纪的神官凝视着这边，\r\n当真用这个就能知道是好人还是坏人了吗！？）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#像这样用心去看就能看到。", 36, 3000001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……虽然你做事不择手段，\r\n但其实本质上是心存善念的。", 36, 3000001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（哎……万幸。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#啧啧……那个没大没小的家伙到底……", 36, 3001651, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那在我简单说明之后，就会送你去门那里，\r\n我还需要做一些准备工作，请稍后再来找我。", 36, 3000001, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(39542);
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
        }
    }
};