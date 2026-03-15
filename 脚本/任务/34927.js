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
            cm.sendNormalTalk_Bottom("#face0#噔，噔！热情的爆破音。那是我的音乐……灵感的源泉，也是我的灵魂！", 36, 3001509, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哦，最重要的是炸弹！哦，探测之类的只不过是雕虫小技！", 36, 3001509, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#只，只要有炸弹，就能找到任何东西↗ 就，就算埋得再深↗", 36, 3001509, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#所以我要把最重要的事！最开心的事！搜集炸弹材料的事交给你↗ 从#r#m402000618##k的#o2400355#身上搜集……大约#b20个#k#i4036349# #b#t4036349##k！", 36, 3001509)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#炸，炸弹的材料非常危险！一定要小心！", 36, 3001509, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34927, "");
                                cm.OnStartNavigation(402000618, 0, "", 34927);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34927.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34927);
            cm.gainExp(4815);
            cm.updateInfoQuest(34927, "exp=1");
            cm.sendNormalTalk_Bottom("#face0#很好，用它可以制造出性能非常好的炸，炸，炸弹↗", 36, 3001509, 0, 1);
            cm.gainItem(4036349, -20)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#（维依和巴克巴克的事情全部搞定了。回到妮雅那里去吧。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};