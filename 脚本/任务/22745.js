var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("就算再怎么握紧双拳，流动的水依然会从手指尖流走。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("想要承载精神，就需要与之相匹配的容器。", 37, 1531004, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("你不会是要我真的拿个容器来吧？", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo_Bottom("#face0#我的意思是让你锻炼身体，具体的事情交给我就好！", 36, 1531003)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("你去和内罗谈谈吧。\r\n\r\n#b(在达到30级之前，留在这里修炼吧。)", 37, 1531004, false, true)
                        } else {
                            if (status === b++) {
                                cm.forceStartQuest(22745, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22745.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("我在你身上感受到了与从前所不同的强大，\r\n不过现在也才踏出了第一步而已。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("有一件事我想问你，\r\n#h0#，你已经比从前更强大了，应该可以回答我了。", 37, 1531004, true, true)
            } else {
                if (status === b++) {
                    cm.askMenu_Bottom("你认为是什么让人变得强大了呢？\r\n#b\r\n#L1#天生的能力#l\r\n#L2#慎重的判断力#l\r\n#L3#努力#l", 37, 1531004)
                } else {
                    if (status === b++) {
                        cm.updateInfoQuest(22745, "choice=" + c + ";done=1");
                        if (c == 1) {
                            cm.sendNormalTalk_Bottom("我认为还是天生的能力，\r\n如果我没有念力技能，就不可能成长得这么迅速。", 37, a, false, true);
                            cm.playerMessage(5, "霸气已经成长到了显而易见的地步. ")
                        } else {
                            if (c == 2) {
                                cm.sendNormalTalk_Bottom("我明白你想说什么，\r\n慎重的判断力才能保证持续的成长，对吧？", 37, a, false, true);
                                cm.playerMessage(5, "洞察力已经成长到了显而易见的地步. ")
                            } else {
                                cm.sendNormalTalk_Bottom("我明白你想说什么，\r\n为了变强是需要持续不断地努力的，对吧？", 37, a, false, true);
                                cm.playerMessage(5, "意志已经成长到了显而易见的地步. ")
                            }
                        }
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("……你是这么想的吗。", 37, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("不管是什么都没有正确答案，\r\n你所感受到的只是属于你的答案而已。", 37, 1531004, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("从下一步开始，你要确定自己修炼的方向，\r\n等你日后变得更强了，我们再见。", 37, 1531004, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("谢谢，狼大叔。", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face2#……啊，还有，很抱歉我刚开始见到你的时候把你当成狗了。", 37, a, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("…………", 37, 1531004, true, false)
                                            } else {
                                                if (status === b++) {
                                                    cm.forceCompleteQuest(22745);
                                                    cm.gainExp(12500);
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
};