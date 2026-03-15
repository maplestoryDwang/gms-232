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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("嗯……小可爱啊，\r\n现在就剩下最后一块宝玉，\r\n那刚巧是最难对付的#g猜忌宝玉#k啊。", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这个嘛，反正一直以来都回收得很顺利，那这次应该也不会有什么大问题吧？\r\n不是有我在呢嘛？对宝玉气息有共鸣的超能者！", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不啊，#g猜忌宝玉#k是最……危险的了。\r\n想要解决猜忌宝玉，有件事一定要记住。", 37, 2074105, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你说和其他宝玉不一样？哪里不一样？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("所谓的猜忌其实啊……", 37, 2074105, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fs25##r着火啦！着火啦啊啊啊啊", 37, 2074136, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("怎么了？发生什么事情了？", 37, 2074105, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(30448, "gExpCheck=1");
                                        cm.forceStartQuest(30448, "");
                                        cm.forceCompleteQuest(30448);
                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.setInGameDirectionMode(false, true, false);
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("嗯……小可爱啊，\r\n现在就剩下最后一块宝玉，\r\n那刚巧是最难对付的#g猜忌宝玉#k啊。", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这个嘛，反正一直以来都回收得很顺利，那这次应该也不会有什么大问题吧？\r\n不是有我在呢嘛？对宝玉气息有共鸣的超能者！", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不啊，#g猜忌宝玉#k是最……危险的了。\r\n想要解决猜忌宝玉，有件事一定要记住。", 37, 2074105, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你说和其他宝玉不一样？哪里不一样？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("所谓的猜忌其实啊……", 37, 2074105, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fs25##r着火啦！着火啦啊啊啊啊", 37, 2074136, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("怎么了？发生什么事情了？", 37, 2074105, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(30448, "gExpCheck=1");
                                        cm.gainExp(198883);
                                        cm.forceStartQuest(30448, "");
                                        cm.forceCompleteQuest(30448);
                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.setInGameDirectionMode(false, true, false)
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