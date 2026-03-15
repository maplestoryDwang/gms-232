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
            cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#这个杀千刀的家伙……说是要找怪物，结果就跑来这种地方？\r\n我非把他踩扁了不可！？", 36, 3001651, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face11#啧啧……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face10#看来我们老人家是不太懂啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#不，不知道什么？", 36, 3001651, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face10#要想抓鱼就得下海，要想抓兔子就得上山，\r\n要想了解传闻，当然还是得去酒馆吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……还，还挺像样的。", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（……虽说这些都是在书上看到过的内容。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#不过……那边那些人会随随便便就告诉我们传闻吗？", 36, 3001651, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#我自有方法，这种时候当然要靠那个了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#别，别说这些了，你倒是说得具体点。", 36, 3001651, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom("#face9#就叫“越忙越要多绕绕弯路”作战计划！\r\n躲在酒馆后面，偷听那些客人……都聊些什么。", 36, 3001674 + cm.getPlayer().getGender())
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#和内容比起来，这名字未免有些太宏大了吧。", 36, 3001651, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face9#总之你也表示同意吧？我们还是赶紧实行第一个作战计划吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#切……放肆无礼……那个什么所谓的师父一定也没少吃苦头吧。", 37, 3001651, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(39514, "");
                                                                    cm.OnStartNavigation(410000200, 1, "3001602", 39514);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39514.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(993160127, 0, false);
            cm.dispose()
        }
    }
};