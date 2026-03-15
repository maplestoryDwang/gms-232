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
            cm.sendNormalTalk("你好，#e#ho##n！暴风成长！可以获得1+2升级福利的#e#r极限斗燃项目#n#k目前正在进行中。", 0, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("到极限斗燃项目进行的#b2020年 3月 31日 晚上11点59分#k为止，#e每个账号只有1个#n#b新创建的角色#k可以获得极限斗燃效果。", 0, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("指定为极限斗燃角色的角色从10级开始，每次升级时可以获得#b#e额外成长2级#n#k的福利。\r\n#r（最高可以成长到200级。）", 0, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("此外，在极限斗燃活动时间，通过#b#e只有极限斗燃角色可以获得的额外福利#n#k，在200级之后也能继续顺利成长。", 0, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e第一个福利！\r\n即使未完成先行任务，也可以执行#n#b5转：艾尔达的召唤#k任务。\r\n#r（即使立即执行，未完成的任务也不会自动完成。）", 0, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e第二个福利！\r\n#n200～209级之间每升1级，发放#b5个#t1712001:##k。\r\n\r\n#e第三个福利！\r\n#n210～220级之间每升1级，发放#b3个#t2438141:##k。", 0, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("为了帮助大家快速成长，还会发放如下礼物。请马上化作#r不灭的火焰#k，挑战火速成长吧。\r\n\r\n#e<礼物目录>#n\r\n\r\n#i2439178:##b #t2439178#\r\n#i3700530:##b#t3700530#\r\n#i2439179:##b #t2439179#\r\n#i2433444:# #t2433444#\r\n#i2433509:# #t2433509#（包含在传说秘密箱子中）\r\n#i2433510:# #t2433510#（包含在传说秘密箱子中）\r\n#i1004404:# #t1004404#（包含在传说秘密箱子中）\r\n#i1102799:# #t1102799#（包含在传说秘密箱子中）\r\n#i1052893:# #t1052893#（包含在传说秘密箱子中）\r\n#i2439170:# #t2439170#（包含在传说秘密箱子中）\r\n#i2435742:# #t2435742#", 0, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/16909.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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