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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -500, 70);
            cm.sendNewEffects(17, [0, 1000, 2000, -500, 100])
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你这么快就升阶了啊～～哎呀，我这个猎头真为你开心，眼泪都要流出来了，呜！", 37, 9401023, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b多亏了莫妮卡。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哦哦～～还这么谦虚，你这样的队长可真难得。", 37, 9401023, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#h0#，莫妮卡，拉尔夫。祝贺你们～～鼓掌！", 37, 9401023, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/eventEffect/CN_firework/0")
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("咳咳，咳咳……可能是因为好久没用了，所以烟有点大。", 37, 9401023, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b谢谢你，咳咳……", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我其实，咳咳……我其实是为了告诉你初级远征队队长可以使用的指挥技能，才在这里等着你。咳咳！哎哟，看来这个可不能再用了。", 37, 9401023, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b指挥技能吗？", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("是的，如果队长和队员之间只需要一个眼神就能体会，那自然是最好。不过随着队员的人数增多，总会有些局限性。所以我思考了许久可以让你们之间交流的方法。", 37, 9401023, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("现在进入深渊之后，可以看见中央地区下方所显示的[指挥技能]。", 37, 9401023, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那里由：可以整顿队员狩猎队列的[位置]技能；将所有队员召唤至当前位置的[集合]技能；可以集中攻击一个怪物的[瞄准]技能；还有可以提高队员士气的[口号]技能所构成。", 37, 9401023, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("各使用一次，你就可以找到感觉，哈哈。如果还有什么问题，你可以来找我或者马米，我们会在本部中。", 37, 9401023, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("好了好了，接下来……前往新一层探险吧！注意安全，希望你们度过愉快的时光。", 37, 9401023, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b（进入深渊的新一层。）", 56, 0, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNewEffects(19, [0])
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.eventSKill(0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.forceCompleteQuest(64771);
                                                                                                        cm.forceStartQuest(64772, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64771.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};