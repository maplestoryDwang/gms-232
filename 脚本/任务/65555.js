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
            cm.sendNormalTalk("是你啊～#b#ho##k！我一直在等你！", 0, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你参加了#r#eMapleStory阿黛尔预创建活动#k#n，所以我想把#b#e礼物箱#n#k送给你！", 0, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在这之前有一点必须注意！\r\n你应该已经知道了，预创建礼物#r#e每个账号只能领取一次#k#n！", 0, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("怎么样？你想用现在的角色领取吗？\r\n\r\n#e<礼物目录>\r\n#b#i2631947:# #t2631947#\r\n\r\n#r#e※ 注意：预创建礼物阿黛尔只能领取一次。", 0, 9010010)
                    } else {
                        if (status === a++) {
                            cm.setAccountQuestInfo(1108, "State=2");
                            cm.setAccountQuestInfo(1108, "State=2;cName=御剑菲娅");
                            cm.sendNormalTalk("礼物已经送给你了，快到背包中去确认一下吧！\r\n箱子存在#e使用时间#n，一定要及时使用！", 0, 9010010, false, false);
                            cm.gainItem(2631947, 1)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65555.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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