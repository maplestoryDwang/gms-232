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
            cm.sendNormalTalk("哦？这是什么？\r\n\r\n（不知从哪里被大风刮来了一张花里胡哨的广告单，掉在了脚边。)", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n  #e※祝※   #b免费豪华观☆光大礼包中奖！！#k   ※贺※\r\n\r\n\r\n#n恭喜你，尊敬的顾客#h0#\r\n你获得了#e#r★超特级豪华观光大礼包#k#n！★ \r\n\r\n#e ◆ 别具风味的高级料理\r\n ◆ 无所不有的地区市场\r\n ◆ 碧波荡漾的翠绿色海洋#k#n等你享受！\r\n\r\n马上出发前往#e#b☆荒蛮终点站☆#k#n，来一场奢华的体验之旅吧！！\r\n\r\n#b#e							§§豪华观光§§", 4, 3004015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("豪华观光大礼包？免费中奖？！！", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("虽然有点可疑……要不去看看？\r\n\r\n #r（※ 接受后，将立即前往任务区域。）", 2, 3004030)
                    } else {
                        if (status === a++) {
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.dispose();
                            cm.warp(940203201, 0)
                        }
                    }
                }
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