var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("要是随便乱碰……不知道会发生什么事。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……推了门，还试着打破它，但却纹丝不动。应该没关系吧？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("回到#b#m450006240:##k，去问问#b#p3003469:##k关于#r#p3003475:##k的事情吧。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34237, "");
                        cm.dispose();
                        cm.warp(450006240, 0, true)
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
        if (status == a++) {
            cm.updateInfoQuest(34245, "71=h1;75=h0;69=h1");
            cm.sendNormalTalk_Bottom("呼呼……终于到了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#怎么这么慢？", 36, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("发现了奇怪的东西。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#奇怪的东西？", 36, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("发现了一扇以前没见过的奇怪的门。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("研究员，你知道封锁区那扇紧闭着的门是怎么回事吗？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#封锁区的门？", 36, 3003481, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我找到了一扇门，但是打不开，所以就回来了。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……没听说过有那扇门啊。但是……", 36, 3003481, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#听说他们把过去引起可怕事件的反魔力石碎片全部聚集在一起，封印在了城堡的某个地方。", 36, 3003481, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽然不能肯定那扇门是否通往那里……但你一说，我就想起了那个。", 36, 3003481, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("反……魔力石……\r\n#fc0xFFAAAAAA#（……差点就闯大祸了！不能把想要把门打破的事情说出来……）", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face13#嗯……门吗……", 36, 3003480, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face13#她不会是通过那扇门移动到了下一地区吧？", 36, 3003480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("嗯，应该不是。门上到处都是蜘蛛网和灰尘，好像没有人到那附近去过。", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……不管怎样，不知道那扇门后面是什么东西，最好不要随便靠近。", 36, 3003481, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#好吧！现在让我们回到正题吧？", 36, 3003480, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(34237);
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
};