var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("你是怎么到这种地方来的？这里不是你这种小孩子该来的地方。", 2, 1064001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("鲁塔比斯是我很久以前创造的地方。", 0, 1064001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你创造了这里？你在说什么啊？", 2, 1064001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我是为了恢复力量，才在大陆的中心住了下来。但是现在这里充满了黑暗的气息，我再也受不了了。", 0, 1064001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("听不懂你在说些什么。你到底是谁？", 2, 1064001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我叫阿丽莎，人们都叫我#r世界树#k。", 0, 1064001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("世界树？你就是世界树？拥有生命力量的世界树？听说世界树在很久以前就消失了啊？", 2, 1064001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯，和黑魔法师战斗之后，我的力量变得很弱。为了恢复力量，我在这里沉睡。这里是大陆的中心，充满了生命的气息。", 0, 1064001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这么说，几百年来你一直在这里恢复力量？实在太让人吃惊了，让人有点不敢相信。我该不会是在做梦吧？", 2, 1064001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(30005, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk("如果你真的是世界树，为什么会被困在这里呢？既然鲁塔比斯是你创造的，那应该不会无法离开这里啊？", 3, 1064001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("都是那些家伙干的！", 1, 1064001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那些家伙？", 3, 1064001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在这里沉睡之前，我在周围设置了结界。但是不久前有一些人打破了结界，入侵了这里。由于结界被打破的冲击，我从沉睡中醒了过来，他们想把我抓走。", 1, 1064001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("入侵者是黑魔法师的手下吗？", 3, 1064001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我也不知道。他们全都披着斗篷，看不见脸。啊，对了，有个一只眼睛戴着眼罩的魔族男子好像是他们的队长。", 1, 1064001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ScreenMsg("rootabyss/demian");
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(一只眼睛戴着眼罩的魔族？到底是谁呢？)", 3, 1064001, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("他们发现我的力量还没有完全恢复，就把我封印在了这里，说要等我完全恢复力量之后再把我带走。", 1, 1064001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("把你封印在了这里？所以你才没办法出去吗？", 3, 1064001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯，我试了各种办法，但还是没办法出去。而且那些家伙在鲁塔比斯注入了黑暗力量。因为黑暗力量的影响，我现在一点力气都使不出……", 1, 1064001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("这样下去的话，在我完全恢复力量之前，黑暗就会把我吞噬掉。请你一定要帮帮我。我必须尽快离开这里。", 1, 1064001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(30005, "");
                                                            cm.forceCompleteQuest(30005);
                                                            cm.setStandAloneMode(false);
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
            }
        }
    }
};