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
            cm.askYesNo("你想了解更多关于阿库旁多的事情？", 0, 9390203)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("阿库旁多在很久之前就和我们共同存在了。实际上，虽然以前我们说不上是往来关系，但至少是中立关系。", 32, 9390203, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然现在凯梅尔兹成为贸易发达的国家，但以前这里主要以渔业为主。不知从何时开始，这里通过贸易变得富有，开发了首都桑凯梅尔兹，还建了运河。", 32, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("从那时开始，阿库旁多就开始敌对我们。大概他们认为是我们破坏了他们生活的地方。总之，之后他们就少数人聚集在一起开始袭击旅行者和商人。", 32, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("所以，我们这次想要教训下阿库旁多那些家伙。", 32, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b(就是这个！！)#k\r\n统帅，请把我也编入阿库旁多讨伐团吧。", 56, 9390203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？这不是你国家的事情，你为什么打算参与呢？", 32, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b友。邦。国。家#k。的事情就是我的事情，这是冒险岛世界的传统。", 56, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯……。感谢你的好意，但……", 32, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("爸爸，不……统帅！#h0#……拥有出众的实力。我能保证。他肯定会给我们带来帮助的。让他和我们在一起怎么样？", 36, 9390202, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你认为我们弱到需要借助别人的力量了吗？", 32, 9390203, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我不是那个意思……", 36, 9390202, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你快去讨伐阿库旁多那些家伙吧。", 32, 9390203, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("是…我知道了。", 36, 9390202, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(17625, "");
                                                                    cm.sendNormalTalk_Bottom("你是叫#h0#吧…很感谢你的好意，但我不想让外人插手我们共和国的事情。希望你能谅解。", 32, 9390203, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17625.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("统帅，我不是轻视凯梅尔兹的实力。只是，作为#b莱文的朋友#k，我想出点力而已。请你再考虑下吧。", 2, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……既然你都这么说了……好吧，那就这样吧。看来是我想得太多了。请你现在就去追上莱文吧。他应该还没跑多远。希望你帮助那孩子一起击退阿库旁多吧。", 0, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("而且，这个也请你拿着吧。这能帮助你。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1052799# #t1052799#\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n530255 exp", 0, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17625);
                        cm.sendNormalTalk("莱文应该在#b#m865020000##k。你快去找他吧。", 0, 9390203, true, true);
                        cm.gainItem(1052799, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};