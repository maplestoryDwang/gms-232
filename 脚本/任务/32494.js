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
            cm.sendNormalTalk("我已经听说了你活跃的表现。因为突然出现的怪物，我正大伤脑筋呐。谢谢你帮了我大忙。", 0, 2232002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("以前，森林里也经常有三三两两的怪物出没。不过，现在出现的分明是现实中不存在的怪物。到底为何会出现那种恐怖的家伙，这真令人担心啊。", 0, 2232002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("听说你是从圣地来的？难道你是被派来帮助克里蒂亚斯的志愿军？", 0, 2232002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("很遗憾，我不是。不过，我是为了调查这里才来的。", 2, 2232002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你是为了调查克里蒂亚斯到底是个什么地方才来的？你到底在说什么？这里可是#b圣地女皇阿莉亚#k亲自访问过的地方。", 0, 2232002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("圣地女皇，“阿莉亚”？可现在的圣地女皇是“希纳斯”。", 2, 2232002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你到底在说些什么？为了对抗黑魔法师，阿莉亚女皇前几天才刚刚展开过会谈……。希纳斯？怎么突然换女皇了？真想不通到底是什么原因。", 0, 2232002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(不过，为了对抗黑魔法师的侵略，女皇正在获得支持。从这点上看，两者是一致的。不过……，我总觉得时间段有点错位。)", 2, 2232002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("……总之，你最好先到村里的其他人那里打听打听。毕竟村里有很多见多识广的人，说不定可以为你解释现在的情况。对了，我正好有事委托比阿特丽斯老师帮我调查。你顺便帮我转交一下东西，可以吗？", 0, 2232002)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32494, "");
                                                cm.OnStartNavigation(241000110, 0, "", 32494);
                                                cm.sendNormalTalk("这是仪容队长道斯托夫刚刚给我的金属。听说是从徘徊于附近的怪物的战利品中获得的。不过现在好像还无法使用。因此，我正想拜托魔法大学的教授#b比阿特丽斯老师#k进行调查。", 0, 2232002, false, true);
                                                cm.gainItem(4033934, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("她应该在魔法大学的前面。你进入这旁边的传送口，就能达到村庄的市场。然后往右走就会看到一条叫做#b魔法大学岚哈因#k的街道。比阿特丽斯老师是一个博学多才的人，她应该可以为你解答疑问。", 0, 2232002, true, false)
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