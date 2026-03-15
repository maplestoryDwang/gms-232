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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵呵……你们果然是时间超越者。果然。长得和我想的一样，一样让人心情不好……。", 33, 2450000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("现在感受到的之间之力……还有，蓝色的头发。你就是第四个女神之泪啊。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("第四个吗？那就是说，已经有三个可怜的女神之泪落入你们的手中了。真可怜啊。", 33, 2450000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#……你到底想说什么？……虽然不知道你为什么要绑架别人，但那件事就这么算了吧。我不想过问你的人生。但现在你得跟我们一起走才行。", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我？我为什么要那么做？我并不想跟你们一起走……呵呵呵呵呵。就是因为那样我才把人绑到这电站里的。", 33, 2450000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11#……他和伍龚不太一样。", 41, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11#你想要做什么。老实说。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我说我不会跟你们走的。我为什么要放弃我自己的人生，而服从于你们呢？", 33, 2450000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#r再聚集些能量，我就能完全断绝与超越者之间的关系，做一个普通人了#k。呵呵呵呵……再聚集点能量就行了。", 33, 2450000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……什么？你要断绝和超越者之间的关系？", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("没错！我要摆脱你们！摆脱你们！呵呵呵……啊哈哈哈哈哈！", 33, 2450000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#b(……你精神不正常啊。)", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face10##b( 你觉得你可以断绝与超越者之间的关系，做一个普通人吗……？)", 41, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b(不清楚。但是既然和他无法沟通……我们还是先去找神官们聊聊吧。)", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face11#……先返回吧。但我们马上就会再来的。", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceCompleteQuest(40403);
                                                                            cm.forceCompleteQuest(40941);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.gainExp(14910200);
                                                                                cm.dispose();
                                                                                cm.warp(325090110, 2, false);
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