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
            cm.sendNormalTalk("呵呵……所以，太阳与月亮、黑暗与光明、还有影子与亮光……\r\n综合了这一切的永恒又伟大的力量--#b[日冕风暴]#k，你有兴趣了解一下吗？", 4, 9400960, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……抱歉……能不能用简单点的说法……？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真是的……看来这对于你们这种凡人来说，实在是太困难的概念了。这点我要向你道歉。", 4, 9400960, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("首先，我还是来一次正式的自我介绍吧。\r\n我的名字叫#p9400960#，说起我这个人，我身为战胜了掌管黑暗的邪恶睡神修普诺斯，从这永恒的禁锢--睡眠中解放的第一位先知，负责引导像你这样被选择的人参与到太阳和日冕的伟大事业中来。", 4, 9400960, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……啊……是的……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("自古以来，遮蔽光明的黑暗就是在永恒安息的彼岸诱惑我们的一切……但是光明将会回归，战胜黑暗，所以被月亮遮蔽的太阳所散发出的日冕正是预告着光明终将到来的标志。", 4, 9400960, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……\r\n#b(还是不要试图理解了，先睡一会再听听吧。)#k", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("如果凝聚这样的日冕之力后，印刻在你的灵魂上，你就会超越平凡人的界限，领悟这个冒险岛世界的太阳之法则，获得#r强大的力量与智慧#k，在永恒的黑暗中击退诱惑你的黑暗气息！", 4, 9400960, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#r强大的力量与智慧#k？", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没错。象征着不断复活的永恒的光明与力量，在黑暗中依旧闪耀的日冕！\r\n#b日冕风暴#k技能凝聚了那美丽光辉的力量，不仅能让你今后的敌人感受到#r无法抵抗的巨大力量与威压#k，还能使你内心深处#r高洁的品格#k觉醒。", 4, 9400960, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……抱歉……但是能不能概括一下……", 2, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("呵呵……看来你也还没理解永恒光明的到来啊。简单来说，\r\n #b就是在爆发时，每次对周围怪物使用范围攻击#k\r\n就能提供#b技能经验值增益#k\r\n。", 4, 9400960, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("哎呀，这可真是……这么常见的技能刚才你怎么就没想起来呢？哈哈哈哈……所以说绝不能放松警惕啊。\r\n我赋予你的这伟大力量，#b日冕风暴#k中隐藏着不同于平常能力的#r特殊效果#k。", 4, 9400960, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("这个#b经验值增益可以#r#e叠加多次#k#n，是不是很惊人！\r\n使用1次技能时可能只是微不足道的经验值增益，但你如果叠加#b50次#k的话，会怎么样呢？\r\n积少成多，集腋成裘，说不定能获得#r最多450%的惊人数值#k的经验值增益哦？\r\n\r\n哈哈哈……！！看来你已经提起兴趣了啊！", 4, 9400960, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你感兴趣吗？这也是理所当然的！\r\n方法很简单，今后每周选择活动时，#b#e选择我准备的[日冕风暴]活动就行了。#n#k只要这么做，你就能在一周内获得前所未有的#b强大#k智慧的能力。呵呵呵……", 4, 9400960, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setNumberForQuestInfo(500831, "tuto1", 1);
                                                                        cm.forceCompleteQuest(64682);
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