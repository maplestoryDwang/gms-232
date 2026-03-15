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
            cm.sendNormalTalk("嗨！#b#h0#!#k\r\n\r\n真的好久不见！", 4, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为兼备#r#e战力与韧性#n#k的勇士而准备的新挑战！\r\n\r\n那就是#e#b#fs20#战术性接力！\r\n\r\n#n#k#fs12#战术性接力#r#e新的Ver.2#n#k回归啦！", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e战术性接力#n是 \r\n\r\n每天通关 #b#e9个关卡的#k#n活动!", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("一个人做就不叫接力了吧?\r\n#b#e战术性接力#k#n是账号内 #b#e相同服务器里的角色#k#n一起接力的活动!\r\n\r\n\r\n#e<规则>#n\r\n- 单个角色 #r每天只能通过1个关卡#k \r\n- 9个关卡要按 #r顺序进行#k", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("各个关卡是由 #e#b固定任务#n#k组成的!\r\n另外，为了战略性玩法,还有 #b#e额外奖励条件#n#k!\r\n\r\n\r\n#e<额外奖励条件>#n\r\n- 职业条件 : #r用特定职业#k通关\r\n- 等级条件 : #r用200级以上#k的角色通关", 4, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("通关关卡时 #b#e可获得分数#n#k!\r\n满足额外奖励条件时还能获得 #b#e额外分数#n#k!\r\n\r\n\r\n#e<可获得分数>#n\r\n- 通关关卡时默认获得#r50分#k\r\n- 满足职业条件时 #r获得10分#k\r\n- 满足等级条件 #r获得20分#k", 4, 9010010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("吼吼.守规则的同时还要拿高分 \r\n#r#e就要用多个角色#n#k并且 #b#e战术性的运用#n#k才可以的吧?", 4, 9010010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("怎样？要挑战#b#e战术性接力#k#n试试吗？", 4, 9010010)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(500886, "s1=0;s2=0;s3=0");
                                            cm.updateInfoQuest(500887, "s4=0;s5=0;s6=0");
                                            cm.updateInfoQuest(500888, "s7=0;s8=0;s9=0");
                                            cm.updateInfoQuest(500889, "s1=0;s2=0;s3=0;s4=0;s5=0;s6=0;s7=0;s8=0;s9=0");
                                            cm.updateInfoQuest(500890, "s1=0;s2=0;s3=0;s4=0;s5=0;s6=0;s7=0;s8=0;s9=0");
                                            cm.forceCompleteQuest(500884);
                                            cm.updateInfoQuest(100417, "mp=0;participate=0;date=" + cm.getNowTimeString("yyMMdd"));
                                            cm.updateInfoQuest(500885, "date=" + cm.getNowTimeString("yyMMdd") + ";state=0;total=0;current=1");
                                            cm.sendNormalTalk("每天通关#r#e第3、6、9关卡#n#k后，就会获得\r\n#b#e每日奖励#n#k！\r\n另外我们还准备了可以累积通关分数的#e#b分数奖励#n#k！", 5, 9010010, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("每天通关关卡可以获得#e#r每日奖励#n#k！\r\n\r\n#e#b<关卡3通关奖励>#n#k\r\n  #i2438644:# #t2438644:# 1个\r\n  #i2450167:# #t2450167:# 2个\r\n\r\n\r\n#e#b<关卡6通关奖励>#n#k\r\n  #i2630571:# #t2630571:# 1个\r\n  #i2450167:# #t2450167:# 2个\r\n\r\n\r\n#e#b<关卡9通关奖励>#n#k\r\n  #i2631180:# #t2631180:# 1个\r\n  #i2450167:# #t2450167:# 2个", 5, 9010010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我们还准备了达到累计分数后可以获得的#r#e分数奖励#n#k！\r\n\r\n#e#b<累计分数达到1000分奖励>#n#k\r\n  #i2630017:# #t2630017:# 1个\r\n\r\n\r\n#e#b<累计分数达到2000分奖励>#n#k\r\n  #i2631181:# #t2631181:# 1个\r\n\r\n\r\n#e#b<累计分数达到3000分奖励>#n#k\r\n  #i3018463:# #t3018463:# 1个\r\n\r\n\r\n#e#b<累计分数达到4000分奖励>#n#k\r\n  #i2439869:# #t2439869:# 5个", 5, 9010010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("我们还准备了达到累计分数后可以获得的#r#e分数奖励#n#k！\r\n\r\n#e#b<累计分数达到5000分奖励>#k#n\r\n  #i2730004:# #t2730004:# 10个\r\n\r\n\r\n#e#b<累计分数达到6000分奖励>#k#n\r\n  #i2630512:# #t2630512:# 20个\r\n\r\n\r\n#e#b<累计分数达到7000分奖励>#k#n\r\n  #i2439660:# #t2439660:# 1个\r\n\r\n\r\n#e#b<累计分数达到8000分奖励>#k#n\r\n  #i2439869:# #t2439869:# 15个\r\n\r\n\r\n#e#b<累计分数达到9000分奖励>#k#n\r\n  #i2439869:# #t2439869:# 25个", 5, 9010010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#r#e完美通关#n#k所有关卡后将获得酷炫的礼物！\r\n\r\n\r\n\r\n#e#b<累计分数达到10000分奖励>#k#n\r\n #i2048724:# #t2048724:# 1个 \r\n #i3018464:# #t3018464:# 1个", 5, 9010010, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("好了！让我来告诉你9个关卡和加成条件！\r\n展现你#b#e帅气的战力与韧性#n#k吧！", 5, 9010010, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.openUI(1209);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500884.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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