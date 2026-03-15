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
            cm.sendNormalTalk("嗨！#b#h0##k！\r\n#b#e<妖精布洛的黄金马车>#k#n来啦！", 0, 9000029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n#b妖精布洛的黄金马车#k是每天哐哐！盖上签到图章，即可获得大量礼物的愉快任务！", 4, 9000029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n活动时间内登录游戏后，点击活动通知按钮即可打开#b#e<妖精布洛的黄金马车>#k#n 签到表！", 4, 9000029, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n活动时间内每天自动累积登录时间，积满#b60分钟#后就可以“哐！”地盖上签到图章！", 4, 9000029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n另外，#b周末一次可获得2个#k签到图章，千万不要错过哦！", 4, 9000029, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n不同签到天数的礼物如下！", 4, 9000029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e<完成9次签到>\r\n#b#i2631142:# #t2631142:##k#n\r\n\r\n\r\n#e<完成18次签到>\r\n#b#i2631821:# #t2631821:##k#n\r\n\r\n\r\n#e<完成27次签到>\r\n#b#i2631865:# #t2631865:##k#n\r\n\r\n\r\n#e<完成36次签到>\r\n#b#i2631141:# #t2631141:##k#n\r\n\r\n\r\n#e<完成45次签到>\r\n#b#i2631820:# #t2631820:##k#n\r\n\r\n\r\n#e<完成54次签到>\r\n#b#i2631143:# #t2631143:##k#n\r\n\r\n\r\n#e<完成63次签到>\r\n#b#i2631861:# #t2631861:##k#n", 4, 9000029, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n为了防止你忘记时间而错过签到，我准备了特别机会！\r\n让我来告诉你什么是#b#e<黄金图章>#k#n吧！", 4, 9000029, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n使用签到板的#b#e<黄金图章>#k#n后，消耗#b1800抵用券#k可以获得一次#b来不及完成的签到#k图章。", 4, 9000029, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n但你需要了解的是，黄金图章的#b可使用数量#k有所限制，不会多于#r前一天晚上12点前未完成的天数#k！", 4, 9000029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n黄金图章的使用#r无论是周几，都只能获得一个图章#k，不要忘记！", 4, 9000029, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n对啦！#e累计登录时间#n与#e奖励获取记录#n以#r冒险岛ID为单位#k进行，只有#r101级以上的角色#k可以累积登录时间，要注意这一点哦！", 4, 9000029, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n更加详细内容去冒险岛官网了解吧！", 4, 9000029, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#e#b<妖精布洛的黄金马车>#k#n\r\n\r\n\r\n#e※ 活动时间#n\r\n  - 2020年#r4月29日到6月23日晚上11时59分#k截止#k", 4, 9000029, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100431.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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