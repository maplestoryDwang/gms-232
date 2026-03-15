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
            cm.askAcceptDecline_Bottom("#face0#首先为制作造型物,请采集#b20个#k#i4036167# #b#t4036167##k！", 36, 3001305, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##i4036167##b#t4036167##k可在#r#o2400402##k那获得,一定别搞错了。\r\n好,我这就用魔法送你过去。平安回来哦。", 37, 3001305, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b回学院的时候,推荐使用冒险岛向导#k(快捷键：U)。", 37, 3001300, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.forceStartQuest(34808, "");
                        cm.warp(402000515, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34808.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#辛苦大家了！像今天这样,完成各自造型物的制作后,学期末在村庄广场展示即可。那下堂课见！", 37, 3001305, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#啊！这么看来,我还有个重要任务！", 37, 3001310, true, true, 1)
            } else {
                if (status === a++) {
                    cm.gainItem(4036167, -20);
                    cm.sendNormalTalk_Bottom("#face0#今天的小组活动真有趣！那我先走了。", 37, 3001310, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face9#嗯！下次见！", 37, 3001351, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#带你参加下一节课。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.setPartner(false, 3001310, 0, 0);
                                cm.OnStartNavigation(402000530, 0, "", 0);
                                cm.forceCompleteQuest(34808);
                                cm.updateInfoQuest(34808, "exp=1;d2=1");
                                cm.dispose();
                                cm.warp(402000522, 2, false)
                            }
                        }
                    }
                }
            }
        }
    }
};