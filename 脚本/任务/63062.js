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
            cm.sendNormalTalk("歇了太久，身体都搞坏了，没以前那么灵活了。", 4, 9400210, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b…………", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好久没这么活动筋骨，出出汗，真爽。", 4, 9400212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#h0#，从你的眼神我能看出来你觉得很对不起我们。你的确有错。之前你故意保持夜晚的状态，然后自己跑去了其他世界，对吗？", 4, 9400214, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b我觉得这地方的人很需要休息。每天都在反反复复地战斗，很累……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("上次我也跟你说过，对我们来说，战斗是生活的乐趣也是种荣耀。站在你的立场上或许难以理解。", 4, 9400212, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b现在我明白了，你们是在战斗中享乐。是我太幼稚，只按自己的标准来考虑事情，剥夺了你们的快乐。", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们也一样。我们没想过这段时间你天天战斗是否快乐。既然大家都有错，这回就彼此原谅吧！哈哈", 4, 9400210, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(63062);
                                            cm.gainExp(635200);
                                            cm.updateInfoQuest(63062, "End=1;Start=1;exp=1");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63062.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("歇了太久，身体都搞坏了，没以前那么灵活了。", 4, 9400210, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b…………", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好久没这么活动筋骨，出出汗，真爽。", 4, 9400212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#h0#，从你的眼神我能看出来你觉得很对不起我们。你的确有错。之前你故意保持夜晚的状态，然后自己跑去了其他世界，对吗？", 4, 9400214, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b我觉得这地方的人很需要休息。每天都在反反复复地战斗，很累……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("上次我也跟你说过，对我们来说，战斗是生活的乐趣也是种荣耀。站在你的立场上或许难以理解。", 4, 9400212, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b现在我明白了，你们是在战斗中享乐。是我太幼稚，只按自己的标准来考虑事情，剥夺了你们的快乐。", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们也一样。我们没想过这段时间你天天战斗是否快乐。既然大家都有错，这回就彼此原谅吧！哈哈", 4, 9400210, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(63062);
                                            cm.gainExp(635200);
                                            cm.updateInfoQuest(63062, "End=1;Start=1;exp=1");
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
};