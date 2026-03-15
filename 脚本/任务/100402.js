var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(1, "该活动是至尊版专享。");
        return
    }
    if (cm.getNumberFromQuestInfo(100402, "tuto") == 1) {
        start100402(c, b, a)
    } else {
        start2(c, b, a)
    }
}

function start100402(d, c, b) {
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
            cm.askMenu("你好！\r\n鬼屋游戏进行的如何？\r\n\r\n#L0# #e听说明。#n#l\r\n#L1# #e查看进行情况。#n#l", 0, 9062257)
        } else {
            if (status == a++) {
                switch (b) {
                    case 0:
                        cm.sendNormalTalk("每次完成章节返回时都会送你准备好的礼物！", 0, 9062257, false, true);
                        break;
                    case 1:
                        cm.sendNormalTalk("\r\n#e<章节 1>：" + (cm.getQuestStatus(100434) == 2 ? "已完成" : "未完成") + "#n\r\n#e<章节 2>：未完成#n\r\n#e<章节 3>：未完成#n\r\n#e<章节 4>：未完成#n\r\n#e<章节 5>：未完成#n", 0, 9062257, false, false);
                        cm.dispose();
                        break
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e<章节完成奖励>#n\r\n\r\n#e#b<第1章>#k\r\n#i2631137:# #i2631138:# #i2631134:# 万圣节伤害皮肤（选1）#n\r\n\r\n#e#b<第2章>#k\r\n#i3018460:# #t3018460:#（30天权） #n\r\n\r\n#e#b<第3章>#k\r\n#i1004910:# #i1050453:# #i1073193:#\r\n#i1004911:# #i1051520:# #i1073194:# 可口甜点套装30天权（选1 ）#n\r\n\r\n#e#b<第4章>#k\r\n#k\r\n#i2631136:# #t2631136:# #n\r\n\r\n#e#b<第5章>#k\r\n#i1004870:# #i1005267:# 万圣节帽子 (择1)#n", 0, 9062257, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("各章节按以下日程进行，请参考！琪琪！", 0, 9062257, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e<各章节开始日期>#n\r\n\r\n#e<第1章> : #b10月21日#k7:00之后#n\r\n#e<第2章> : #b10月23日#k0:00 之后#n\r\n#e<第3章> : #b10月26日#k0:00之后#n\r\n#e<第4章> : #b10月28日#k0:00之后#n\r\n#e<第5章> : #b10月30日#k0:00之后#n", 0, 9062257, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("更多详情内容可以去参考#e冒险岛官方主页#n即可！琪琪！", 0, 9062257, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e※ 活动时间#n\r\n\r\n  - 2020年#r10月21日 7:00 ~ 2020年11月03号 23:59#k为止#k", 0, 9062257, true, true)
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

function start2(d, c, b) {
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
            cm.sendNormalTalk("你好~！#b#h0##k！\r\n你听说那个消息了吗！？", 0, 9062257, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("....?", 2, 9062257, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("为迎接2020年的万圣节，鬼屋又再次回来了！", 0, 9062257, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("\r\n这可是挖出在鬼屋发生的各种神秘事件的绝佳机会！怎么样？有没有兴趣？琪琪！\r\n每次完成一个章节，我就会给你一个礼物！！", 0, 9062257)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(100402, "tuto=1");
                            cm.sendNormalTalk("哟吼~！#b#h0##k！我还以为你会很感兴趣呢~！", 0, 9062257, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("每次完成章节返回时都会送你准备好的礼物！", 0, 9062257, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e<章节完成奖励>#n\r\n\r\n#e#b<第1章>#k\r\n#i2631137:# #i2631138:# #i2631134:# 万圣节伤害皮肤（选1）#n\r\n\r\n#e#b<第2章>#k\r\n#i3018460:# #t3018460:#（30天权） #n\r\n\r\n#e#b<第3章>#k\r\n#i1004910:# #i1050453:# #i1073193:#\r\n#i1004911:# #i1051520:# #i1073194:# 可口甜点套装30天权（选1 ）#n\r\n\r\n#e#b<第4章>#k\r\n#k\r\n#i2631136:# #t2631136:# #n\r\n\r\n#e#b<第5章>#k\r\n#i1004870:# #i1005267:# 万圣节帽子 (择1)#n", 0, 9062257, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("各章节按以下日程进行，请参考！琪琪！", 0, 9062257, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#e<各章节开始日期>#n\r\n\r\n#e<第1章> : #b10月21日#k7:00之后#n\r\n#e<第2章> : #b10月23日#k0:00 之后#n\r\n#e<第3章> : #b10月26日#k0:00之后#n\r\n#e<第4章> : #b10月28日#k0:00之后#n\r\n#e<第5章> : #b10月30日#k0:00之后#n", 0, 9062257, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("更多详情内容可以去参考#e冒险岛官方主页#n即可！琪琪！", 0, 9062257, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#e※ 活动时间#n\r\n\r\n  - 2020年#r10月21日 7:00 ~ 2020年11月03号 23:59#k为止#k", 0, 9062257, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("琪琪！那等你准备好了再告诉我吧！", 0, 9062257, true, false)
                                                    } else {
                                                        if (status == a++) {
                                                            cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/10/23;accSum=985537;QuestCount=3;accCheck=201023153257527");
                                                            cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/10/23;accSum=961924;QuestCount=3;accCheck=201023153257527");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100402.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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