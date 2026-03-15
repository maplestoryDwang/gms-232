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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n圣诞节过得愉快吗？", 4, 1012108, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n卡米拉面包房这次准备了特别的活动！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("\r\n骑着巧克力水灵跳跃！\r\n你想参加\r\n\r\n#b#e<甜蜜粘稠巧克力水灵>#k#n吗？", 4, 1012108)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n我来说明一下#b#e<甜蜜粘稠巧克力水灵>#k#n！", 4, 1012108, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n那是骑着巧克力水灵跳高的\r\n#b#e小游戏活动#k#n！", 4, 1012108, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n从#b#e上午10点到午夜#n#k，点击#b#e每小时45分#n#k\r\n出现的邀请信，就能参加活动。", 4, 1012108, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n不过#e#b每天只能参加1次#k#n，请一定要记得参加！", 4, 1012108, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n骑着巧克力水灵在5秒内连续跳跃时，\r\n#e#b跳跃力会每次提升10%#k#n。", 4, 1012108, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n请跳到高处，获取可以提升倾向的圣诞节巧克力、金币、蛋糕装饰材料和蛋糕粉！", 4, 1012108, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n在<甜蜜粘稠巧克力水灵>中获得的巧克力\r\n累计达到150个时，我还会送你#b#e巧克力水灵骑宠#n#k！", 4, 1012108, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(100155, "totalC=0");
                                                    cm.updateInfoQuest(100155, "totalC=0;start=1");
                                                    cm.forceCompleteQuest(100155);
                                                    cm.sendNormalTalk("\r\n\r\n#e#fc0xFFAAAAAA#- 巧克力水灵进行时间：45分（上午10点～午夜）\r\n- 参加限制：每天1次#k#n", 5, 1012108, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100155.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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