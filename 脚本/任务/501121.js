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
            cm.sendNormalTalk("你好呀, 最近怎么样 #h0#? 今天我也给你带来了特别的消息哦!", 0, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("最近冒险岛世界有一个团体备受瞩目, 你有听说过#b冒险岛探险队#k吗?\r\n\r\n#L0##b有所耳闻.#k#l\r\n#L1##b从未听说.#k#l", 0, 9010010)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("也是呢 哈? #h0#的打听消息的手段可厉害着呢!\r\n当然,冒险岛世界已经传的热火朝天了,谁都应该听说过才对!", 0, 9010010, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那么,你应该知道我要跟你讲的#b特别机会#k是什么吧? 嗯? 你不知道?", 0, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b特别的机会#k是什么? 哼哼哼... 听好了!\r\n#b冒险岛探险队#k正等待着 #h0# 这种有实力的勇士们的支援.\r\n对于提供帮助的勇士#b限定期间内#k会提供特别的礼物!", 0, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("需要做什么才能领取特别的礼物? 很简单! 只要听取#b冒险岛探险队#k探险队长的嘱托就可以!\r\n\r\n  #b - 达成目标 : #e岛屿依然掩藏在海市蜃楼之中……#n 任务完成\r\n  #b - 达成奖励 : #e#i2672147:# #t2672147:##n\r\n  #b - 达成期间 : #e2020年 08月 05号 09点 00分 ~ 2020年 08月 25号 23点 59分#n", 0, 9010010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这#b特别的机会#k将从 #e#r2020年 08月 05号 09点 00分维持到 2020年 08月 25号 23点 59分#n#k , 注意不要错失良机哦!", 0, 9010010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(501121, "");
                                        cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/501121.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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