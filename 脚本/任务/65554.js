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
            cm.sendNormalTalk("你好, #b#h0##k!", 0, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你有听说过关于冒险岛世界即将出场的#b#e新角色#n#k的消息吗？", 0, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("感觉..有点懂了", 2, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("果然! 消息传的飞快啊! 新角色就是~!  #r#e御剑骑士#k#n！！.", 0, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("所以#b卡珊德拉#k准备了#b#e阿黛尔预创#k#n 活动~", 0, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#b#e<MapleStory阿黛尔预创>#k#n", 0, 9010010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("参与发放简单无比! \r\n现在立刻到#b#e角色选择画面创建御剑骑士#k#n的话,就等于#b#e参与了活动!#k#n", 0, 9010010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("若参加预创，提前预约时间截止后，在#e领取阿黛尔预创礼物期间#n登录，可领取提前预约礼物！\r\n\r\n\r\n#e#b   < #t2631947# >#k\r\n\r\n- #i2630513# #t2630513# 300个\r\n- #i2434267# #t2434266#\r\n- #i2434267# #t2434267#\r\n- #i2434268# #t2434268#\r\n- #i2434269# #t2434269#\r\n- #i2450144# #t2450144# 3个\r\n- #i2048724# #t2048724# 1个\r\n- #i2049703# #t2049703#\r\n- #i1213037# #t1213037#", 0, 9010010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("但是 #b#e提前创建结束日之前删除了御剑骑士角色的话 #e#r就等于取消了活动参与#n#k,要注意哦.", 0, 9010010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n#e#b※ 御剑骑士提前创建期间#k\r\n\r\n - 2020年 6月 23日 上午07点 ~ 2020年 6月 30日 晚上11点59分#n\r\n", 0, 9010010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n#e#b※奖励领取时间#k\r\n\r\n -2020年7月1日上午0点~2020年7月7日晚上11点59分#n\r\n", 0, 9010010, true, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65554.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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