var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("嗨！关于#b#e<战术性接力>#k#n，你有什么好奇的吗？\r\n\r\n#L1# 我想了解#b接力规则#k与#b分数#k。#l\r\n#L2# 我想了解#b每日奖励#k。#l\r\n#L3# 我想了解#b分数奖励#k。#l\r\n#L4# 我想了解#b活动时间#k。#l\r\n#L5# 我没有什么想了解的了。#l\r\n", 4, 9010010)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e战术性接力#n是 \r\n\r\n每天通关 #b#e9个关卡的#k#n活动!", 4, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("一个人做就不叫接力了吧?\r\n#b#e战术性接力#k#n是账号内 #b#e相同服务器里的角色#k#n一起接力的活动!\r\n\r\n\r\n#e<规则>#n\r\n- 单个角色 #r每天只能通过1个关卡#k \r\n- 9个关卡要按 #r顺序进行#k", 4, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("各个关卡是由 #e#b固定任务#n#k组成的!\r\n另外，为了战略性玩法,还有 #b#e额外奖励条件#n#k!\r\n\r\n\r\n#e<额外奖励条件>#n\r\n- 职业条件 : #r用特定职业#k通关\r\n- 等级条件 : #r用200级以上#k的角色通关", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通关关卡时 #b#e可获得分数#n#k!\r\n满足额外奖励条件时还能获得 #b#e额外分数#n#k!\r\n\r\n\r\n#e<可获得分数>#n\r\n- 通关关卡时默认获得#r50分#k\r\n- 满足职业条件时 #r获得10分#k\r\n-满足等级条件 #r获得20分#k", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("吼吼.守规则的同时还要拿高分 \r\n#r#e就要用多个角色#n#k并且 #b#e战术性的运用#n#k才可以的吧?", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("展现你#b#e帅气的战力与韧性#n#k吧！", 4, 9010010, true, true);
                            status = -1
                        }
                    }
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("每天通关#r#e第3、6、9关#n#k后，可以获得\r\n#b#e每日奖励#n#k！", 5, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("通关每日关卡，领取#e#r每日奖励#n#k吧！\r\n\r\n#e#b<关卡3通关奖励>#n#k\r\n  #i2438644:# #t2438644:# 1个\r\n  #i2450167:# #t2450167:# 2个\r\n\r\n\r\n#e#b<关卡6通关奖励>#n#k\r\n  #i2630571:# #t2630571:# 1个\r\n  #i2450167:# #t2450167:# 2个\r\n\r\n\r\n#e#b<关卡9通关奖励>#n#k\r\n  #i2631180:# #t2631180:# 1个\r\n  #i2450167:# #t2450167:# 2个", 5, 9010010, true, true);
            status = -1
        }
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("收集通关分数与额外分数后，可以获得\r\n#b#e分数奖励#n#k！", 5, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("达到累计分数，领取#r#e分数奖励#n#k吧！\r\n\r\n#e#b<累计分数达到1000分奖励>#n#k\r\n  #i2630017:# #t2630017:# 1个\r\n\r\n\r\n#e#b<累计分数达到2000分奖励>#n#k\r\n  #i2631181:# #t2631181:# 1个\r\n\r\n\r\n#e#b<累计分数达到3000分奖励>#n#k\r\n  #i3018463:# #t3018463:# 1个\r\n\r\n\r\n#e#b<累计分数达到4000分奖励>#n#k\r\n  #i2439869:# #t2439869:# 5个", 5, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("达到累计分数，领取#r#e分数奖励#n#k吧！\r\n\r\n#e#b<累计分数达到5000分奖励>#k#n\r\n  #i2730004:# #t2730004:# 10个\r\n\r\n\r\n#e#b<累计分数达到6000分奖励>#k#n\r\n  #i2630512:# #t2630512:# 20个\r\n\r\n\r\n#e#b<累计分数达到7000分奖励>#k#n\r\n  #i2439660:# #t2439660:# 1个\r\n\r\n\r\n#e#b<累计分数达到8000分奖励>#k#n\r\n  #i2439869:# #t2439869:# 15个\r\n\r\n\r\n#e#b<累计分数达到9000分奖励>#k#n\r\n  #i2439869:# #t2439869:# 25个", 5, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#r#e完美通关#n#k所有关卡后领取吧！\r\n\r\n\r\n#e#b<累计分数达到10000分奖励>#k#n\r\n #i2048724:# #t2048724:# 1个 \r\n #i3018464:# #t3018464:# 1个 ", 5, 9010010, true, true);
                    status = -1
                }
            }
        }
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e<活动时间>#n\r\n\r\n#b2020年6月10日开始#k", 4, 9010010, false, true);
        status = -1
    }
}

function action分支5(d, c, b, a) {
    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100416.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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