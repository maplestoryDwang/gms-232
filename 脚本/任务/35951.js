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
            cm.sendNormalTalk("#h0#，你能稍微给我点时间吗？", 4, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（是什么事呢？）", 2, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("射手村附近好像发生了某种异常事件。请看这个。\r\n\r\n（南哈特拿出一张#i4001015# #r皱巴巴的纸#k给我看。）", 4, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("黑暗预言书？！", 2, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#i4001015#  #fn？？##e<黑暗预言书>#n \r\n\r\nx年x月x日，\r\n#r3个黑魔法师#k出现在了冒险岛世界。\r\n\r\n在荒凉的沙漠中发掘出了#r被诅咒的魔道书#k。\r\n用#r三个祭品#k为代价，将#r古代的怪兽#k从沉睡中唤醒……\r\n\r\n没有人能阻挡他们前进的脚步。", 2, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("3个黑魔法师……祭品……古代的怪兽？\r\n这，这好像是……", 2, 1101002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu("你怎么认为？\r\n#b\r\n#L0# 孩子们的恶作剧。#l\r\n#L1# 糟了。必须马上阻止！#l", 4, 1101002)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是的。不管是笔迹，还是插图，看上去都不像是真的。一定是谁的恶作剧吧。", 4, 1101002, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯？如果预言书是恶作剧，那为什么要找我呢？", 2, 1101002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("因为那是#e普通人#n很容易就会掉进去的陷阱。\r\n\r\n你想想看。如果我们不当回事，没有采取任何措施，但万一这个黑暗预言书是真的呢。要是#r字写得像狗啃一样的可怕的黑魔法师#k真的存在呢？", 4, 1101002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("字写得像狗啃一样的……可怕的黑魔法师……", 2, 1101002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("所以#h0#，你能到#b帕勒坦#k去一趟吗？这是联盟官方的派遣任务。", 4, 1101002, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("帕勒坦吗？", 2, 1101002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("文书中提到的地方就是#b古代遗迹帕勒坦#k。\r\n以你的能力，应该能轻松应对那一带出没的怪物。", 4, 1101002, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askYesNo("怎么样？你愿意接受任务吗？", 4, 1101002)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("那么，就送你到帕勒坦吧。\r\n\r\n(收到了#i2630358# #r#t2630358##k。)", 4, 1101002, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(35950, "00=h1");
                                                                            cm.forceStartQuest(35951, "");
                                                                            cm.dispose();
                                                                            cm.warp(100051010, 0)
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
            cm.updateInfoQuest(35948, "12=h0;13=h0;14=h0;15=h0;06=h0;16=h0;07=h0;17=h0;08=h0;09=h0;19=h0");
            cm.sendNormalTalk("不好了，不好了……", 4, 1013446, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("出什么事了？", 2, 1013400, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("孩子们消失了！！", 4, 1013446, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("孩子们？", 2, 1013400, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(35951);
                            cm.gainExp(713849);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};