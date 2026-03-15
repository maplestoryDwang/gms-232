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
            cm.sendNormalTalk("女仆！\r\n你有没有看到#b苏菲莉亚#k？\r\n我有话要对#b苏菲莉亚#k说！", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#h0#。\r\n果然是发生什么了事情。\r\n小姐她哭着回自己房间去了。\r\n还锁了门……", 4, 9062244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那什么……就是吧。", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, false);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs24#对女仆讲述了有关忧郁的假面的真面目和牺牲。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs24#以及苏菲莉亚崩溃的原因。", 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.sendNormalTalk("原来发生了这样的事。\r\n我可怜的小姐。自始至终没有领悟#b父亲的爱#k，就和主人分开了。", 4, 9062244, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("所以女仆，我们要帮助苏菲莉亚才行。\r\n这个#b人偶#k， 是苏菲莉亚的父亲身中诅咒也要坚持完成的，我们要把这个#b人偶#k拿给她看才行。", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("啊……主人就是为了做这个，一直把自己锁在房间里。", 4, 9062244, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("对。就是这个#b人偶#k。\r\n如果将苏菲莉娅的父亲和这个#b人偶#k的事，和为了保护#b苏菲莉亚而牺牲的真相#k一起告诉苏菲莉娅的话，说不定苏菲莉亚的#b心意会有所改变#k。", 2, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("按#h0#所说……这样一来，小姐有可能会感受到#b父亲的爱#k……", 4, 9062244, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("没时间了，先到舞会会场去吧。", 4, 9062244, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我负责劝小姐，然后带她去舞会会场。\r\n她打小就很听我的话。", 4, 9062244, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(100458, "");
                                                                    cm.OnStartNavigation(993175400, 0, "pt_go993175560", 0);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100458.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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