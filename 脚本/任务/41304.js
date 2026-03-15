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
            cm.sendNormalTalk("事情做也做不完，看来今天也要熬夜了。", 0, 2470012, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明天的天气如何？", 2, 2470012, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("明天天气啊？明天……#r好像要下雨#k。\r\n#b#L0#说出罢工的消息。#l\r\n#b#L1#不说罢工的消息。#l", 0, 2470012)
                } else {
                    if (status === a++) {
                        if (b == 1) {
                            cm.dispose();
                            return
                        }
                        cm.updateInfoQuest(41304, "NpcSpeech=24700121");
                        cm.sendNormalTalk("这是绝对机密。明天开始要罢工了，玩具工人1让我转告大家。", 2, 2470012, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("真的吗？本来事情就很多，现在还压着一堆事情。现在马上准备罢工！", 0, 2470012, true, true)
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

function stage1(d, c, b) {
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
            cm.sendNormalTalk("早饭吃得很饱，但还是很饿。看来还是要吃点心了。", 0, 2470013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明天的天气如何？", 2, 2470013, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("明天天气啊？明天……#r好像要下雨#k。\r\n#b#L0#说出罢工的消息。#l\r\n#b#L1#不说罢工的消息。#l", 0, 2470013)
                } else {
                    if (status === a++) {
                        if (b == 1) {
                            cm.dispose();
                            return
                        }
                        cm.updateInfoQuest(41304, "NpcSpeech=24700121/24700132");
                        cm.sendNormalTalk("这是绝对机密。明天开始要罢工了，玩具工人1让我转告大家。", 2, 2470013, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("明天吗？啊啊，这一天终于来了。但是我也已经快撑不住了。", 0, 2470013, true, true)
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

function stage2(d, c, b) {
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
            cm.sendNormalTalk("你好？今天天气很好啊。", 0, 2470014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明天的天气如何？", 2, 2470014, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("明天的天气啊？明天的天气嘛……#r好像要下雪了#k。\r\n#b#L0#说出罢工的消息。#l\r\n#b#L1#不说罢工的消息。#l", 0, 2470014)
                } else {
                    if (status === a++) {
                        if (b == 0) {
                            cm.sendOkS("（等等，不太对劲……我再好好想想。）");
                            cm.dispose();
                            return
                        }
                        cm.sendNormalTalk("是嘛？我觉得明天天气会很晴朗。", 2, 2470014, false, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(41304, "NpcSpeech=24700121/24700132/24700143");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("喂喂，你小心点。被机器吸进去了可要受重伤的。", 0, 2470015, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明天的天气如何？", 2, 2470015, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("明天天气啊？明天……#r好像要下雨#k。\r\n#b#L0#说出罢工的消息。#l\r\n#b#L1#不说罢工的消息。#l", 0, 2470015)
                } else {
                    if (status === a++) {
                        if (b == 1) {
                            cm.dispose();
                            return
                        }
                        cm.updateInfoQuest(41304, "NpcSpeech=24700121/24700132/24700143/24700154");
                        cm.sendNormalTalk("这是绝对机密。明天开始要罢工了，玩具工人1让我转告大家。", 2, 2470015, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("罢工！我正等着罢工呢！这次一定要从黑心厂长卡胡那里把我们的权利给夺回来！", 0, 2470015, true, true)
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

function stage4(d, c, b) {
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
            cm.sendNormalTalk("很神奇吧？这样没日没夜地工作，机器却从来都没出过故障，我人都快累趴下了……", 0, 2470016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("明天的天气如何？", 2, 2470016, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("明天天气啊？明天……#r好像要下雨#k。\r\n#b#L0#说出罢工的消息。#l\r\n#b#L1#不说罢工的消息。#l", 0, 2470016)
                } else {
                    if (status === a++) {
                        if (b == 1) {
                            cm.dispose();
                            return
                        }
                        cm.updateInfoQuest(41304, "NpcSpeech=24700121/24700132/24700143/24700154/24700165");
                        cm.sendNormalTalk("这是绝对机密。明天开始要罢工了，玩具工人1让我转告大家。", 2, 2470016, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊啊，终于要罢工了。但是我都不知道我有没有力气参加罢工了。", 0, 2470016, true, true)
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