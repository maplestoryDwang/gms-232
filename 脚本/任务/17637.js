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
            cm.sendNormalTalk("首领，交给我的话，我就去击退普赛依。", 0, 9390262, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？你吗？你和阿库旁多战斗回来都还没过多久呢", 4, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(是的。说得对。)", 2, 9390262, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是海上贸易不是我们最核心的最重要的部分嘛", 0, 9390262, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("正因如此才更那个。当然你出色地阻挡了阿库旁多，但是普赛依跟阿库旁多小混混们可不一样。", 4, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(对的。莱文还需要再修炼修炼……)", 2, 9390262, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("可，可是……就是那样！我和#h0#一起去。#h0#的能力相当优秀一定能起到很大帮助的。", 0, 9390262, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(嗯？可是，这家伙干嘛连我也……！！)", 2, 9390262, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("又想借他人之手吗！！像你这样的家伙终究是没有发展可能的！！每次期待你会有所表现的时候就立刻让我感到失望！！", 4, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("(呃，怎么又是这种情况……吉尔伯特首领的话也有他的道理，可是这对我来说也是一个机会。)", 2, 9390262, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("首领，我和莱文一起去。", 2, 9390262, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("上一次也是接受了你的帮助。这次要凭我们自己的力量来完成。", 4, 9390203, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("上次我也说过了，虽然是友邦国家，但这次我作为莱文的朋友也想拜托你。", 2, 9390262, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("嗯……如果这么说的话让我考虑考虑。", 4, 9390203, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(17637, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17637.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("好吧，希望这次你也能助我们一臂之力。", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢。首领！", 4, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你可以借助他的力量，但不可依赖于他的力量。", 0, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好的，我会牢记的。我一定会凭我的力量打倒普赛依的。", 4, 9390202, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("太好了。莱文。谢谢。首领。", 2, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？这次就拜托你了。我还有很多事情要告诉你，准备好的话就跟我说。", 4, 9390202, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好，你拿着这个，这礼物给你是为了让我们一起好好加油。", 4, 9390202, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17637);
                                        cm.sendNormalTalk("莱文就拜托给你了。也许是因为还小所以好像有些欲望高胀。", 1, 9390203, true, true);
                                        cm.gainItem(1082608, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("请别担心。根据我一直在旁的观察来看，我觉得他一定能出色地完成任务的。", 3, 9390203, true, true)
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
};