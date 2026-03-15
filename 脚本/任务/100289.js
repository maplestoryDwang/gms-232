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
            cm.sendNormalTalk("你好，#ho#！\r\n#b暴风成长#k到#e200级#n，赠送#b暴风礼物#k到#e220级#n，\r\n目前我们正在进行#r#e极限斗燃+突破极限#k#n活动。", 0, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("到#b#e2020年3月31日晚间11时59分#k#n，#e每个账号都可以为1个#n\r\n#b新创建的角色#k应用极限斗燃效果。", 0, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("极限斗燃角色从10级开始最多达到200级时，\r\n每提升1级，都将#b#e额外成长2级#n#k。\r\n\r\n#r※超出200级，无法成长。#k", 0, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("还有，极限斗燃角色可通过荣耀提示，挑战\r\n开放截止到 #r#e2020年 2月 11日 晚上 11点 59分#k#n的#b#e突破极限#n#k。", 0, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("挑战#b突破极限#k，成长到#e220级#n吧！\r\n我们将奉上丰厚的礼物。\r\n\r\n#e<突破极限升级礼物>#n\r\n- #b201级~210级#k期间，每次提升等级时发放\r\n  #e10个#n#i1712001:#  #t1712001:#\r\n  #e3个#n#i2436078:#  #t2436078:#\r\n  #e2张#n#i2450134:#   #t2450134:#（15分钟）\r\n\r\n\r\n- #b211级~220级#k期间，每次提升等级时发放\r\n  #e20个#n#i2630437:#  #t2630437:#\r\n  #e5个#n#i2436078:# #t2436078:#\r\n  #e2张#n#i2450134:#   #t2450134:#（15分钟）", 0, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("另外完成#b突破极限任务#k后还将获得以下礼物。\r\n\r\n#e<突破极限任务礼物>#n\r\n- 完成205/210/215/220级#b突破极限任务时#k\r\n            #i2630646:##i2630647:##i2630648:##i2630649:#", 0, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("除突破极限之外，为了各位的成长，\r\n我们将为#b所有极限斗燃角色#k赠送以下礼物。\r\n\r\n#e<极限斗燃礼物>#n\r\n#i2439178:##b #t2439178#\r\n#i3700530:##b#t3700530#\r\n#i2439179:##b #t2439179#\r\n#i2433444:# #t2433444#\r\n#i2433509:# #t2433509# (包含在传说秘密箱子中)\r\n#i2433510:# #t2433510# (包含在传说秘密箱子中)\r\n#i1004404:# #t1004404# (包含在传说秘密箱子中)\r\n#i1102799:# #t1102799# (包含在传说秘密箱子中)\r\n#i1052893:# #t1052893# (包含在传说秘密箱子中)\r\n#i2439170:# #t2439170# (包含在传说秘密箱子中)\r\n#i2435742:# #t2435742#", 0, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那希望你现在就能成为#r不灭火焰#k，继续#r#e挑战极限#n#k。", 0, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#r#e※注意※#n#k\r\n1。突破极限#r只有极限斗燃角色#k可以参加。\r\n\r\n2。101级以上即可挑战突破极限任务。\r\n\r\n3。突破极限结束后，即便是极限斗燃角色也无法参加突破极限。\r\n\r\n4。突破极限升级礼物和任务奖励#r#e每个账号只能获得1次#n#k。", 0, 9010000, true, false)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100289.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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