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
            cm.sendNormalTalk("#h0#！我急需#h0#你的帮助。", 4, 3003751, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("出什么事了？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("最近我在调查冒险岛世界的过程中，发现了许多#r异常现象#k。", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("异常现象？", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk(" #r次元缝隙#k出现在了冒险岛世界和格兰蒂斯。#b变成幽灵的怪物#k纷纷从裂缝中跑了出来。", 4, 3003751, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("！！！", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("问题是我们压根没办法预测次元缝隙的出现位置。", 4, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("要想给每个地方都分点人手，现有的联盟士兵人数远远不够……", 4, 3003751, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这么说，就算亲自到冒险岛世界去也没有什么用……", 16, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("请听我把话说完。", 4, 3003751, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……", 16, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("虽然无法阻止次元裂缝的生成，但是可以#b将已生成的次元缝隙强制召唤到指定位置#k。", 4, 3003751, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……", 16, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("你是说……让我强行召唤次元缝隙，消灭里面的怪物吗……？", 16, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你很了解嘛，#h0#。我整天处理联盟事务就够头疼的了，幸亏有你这个荣耀特攻队的成员能帮忙啊。", 4, 3003751, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.askYesNo("给你，这是#s80002779# #r追踪钟摆#k。\r\n拿着它去#b等级范围怪物#k所在地收集次元碎片，就可以召唤次元缝隙了。\r\n明白了吗？", 4, 3003751)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.teachSkill(80002779, 0, -1);
                                                                            cm.teachSkill(80002779, 1, 0);
                                                                            cm.teachSkill(80002779, 1, 0);
                                                                            cm.forceCompleteQuest(100306);
                                                                            cm.updateInfoQuest(100308, "kill=0");
                                                                            cm.updateInfoQuest(100308, "piece=0;kill=0");
                                                                            cm.openUIWithOption(3, 80002779);
                                                                            cm.playerMessage(5, "获得了[追踪钟摆]技能。");
                                                                            cm.playerMessage(5, "现在去等级范围怪物所在的地方，画面上方就会出现追踪钟摆。");
                                                                            cm.sendNormalTalk("那就拜托你了。幸亏有你在，不然我都不知道该怎么处理这混乱不堪的情况了。", 4, 3003751, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100306.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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