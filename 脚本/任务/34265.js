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
            cm.sendNormalTalk_Bottom("所以你的计划是什么？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#很简单。解开塔纳的束缚球，\r\n迅速使用瞬间移动石离开建筑就可以了。", 36, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#实验开始后，施展在城堡上的#b魔法干扰结界#k就会消失。", 36, 3003406, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("魔法干扰结界？还有这种东西。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#要是没有那个，早就被他们逃了。", 36, 3003406, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("然后呢？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#警备队马上就会冲过来，在这之前，赶快乘坐马车离开城堡吧。", 36, 3003406, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("连马车都准备好了？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face11#我第一次看到被关押的塔纳时，就开始准备这个计划了。\r\n马车当然事先就安排好了。", 36, 3003406, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("竟然有这种事……", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face8#那、那个……", 36, 3003406, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("算了，你不说我也知道。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face9#只剩下#b解开束缚球的钥匙#k了！\r\n据说在封锁区有一枚备用钥匙。", 36, 3003406, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#好，我去打开通往下一区域的门，\r\n你负责引开那帮怪物的视线。", 36, 3003406, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askYesNo_Bottom("#face0#等你消灭200只左右后，大门应该就能打开了。", 36, 3003406)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(34265, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#很好，完美。那接下来去找钥匙吧？", 37, 3003406, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#赶快前往#b封锁区4#k吧。", 37, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h1;35=h0;54=h1;18=h0;36=h0;28=h1;29=h1");
                    cm.forceCompleteQuest(34265);
                    cm.dispose()
                }
            }
        }
    }
};