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
            cm.sendNormalTalk("\r\n 你好，#h0#。小可爱波波来冒险岛世界玩啦～！波波喜欢交朋友，所以带来了一大堆礼物呢。", 4, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n多亏了波波，你可以在<冒险岛接力>活动期间累积游戏在线时间，时间进度条每转一圈，即可领取一份奖励。\r\n\r\n #r#e也就是说，只要你的MVP等级在青铜以上，#n#k就能领取礼物！", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n #e达成MVP青铜级以上！\r\n\r\n快速填充在线时间进度条！\r\n\r\n点击波波头像，打开礼物窗！\r\n\r\n最后一步，领取激活的奖励！！\r\n\r\n #r（每项奖励每个账号仅限领取1次。）#k#n", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n而且波波还知道一个诀窍，可以更快累积在线时间哦……！你真的不和波波一起玩嘛～？", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("\r\n (波波瞪着眼泪汪汪的大眼睛看着你…… )", 4, 9270160)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n波波已经兴奋起来了！与波波一起玩耍，填充在线时间进度条吧～#r<3#k。\r\n\r\n你可以通过星星提示中的波波，随时查看详情。", 5, 9010010, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(500865);
                                    cm.updateInfoQuest(500865, "start=1;date=20/02/05/09/39;grade=1;cname=" + cm.getPlayer().getName() + ";cid=" + cm.getPlayer().getId());
                                    cm.openUI(1897);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500865.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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