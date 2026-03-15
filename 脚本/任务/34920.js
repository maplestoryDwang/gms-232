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
            cm.sendNormalTalk_Bottom("#face2#到此结束↗ 你去帮着修理防具或临时住所吧↗", 36, 3001509, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#喔，你到#m402000600#左边去找维依。喔，虽然让人冒火，但他也是我的家人，耶～", 36, 3001509, 1, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34920, "");
                    cm.OnStartNavigation(402000600, 1, "3001402", 34920);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34920.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#哎呀，我在附近感觉到了奇怪的电波……位置……就在……附近……呃……", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#（说决定帮避难处做事，有什么需要就尽管说。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#嗯……明白了，叽勒。对了，刚才看到的一定要跟妮雅队长和其他人保密。嗯……那个……我刚才在偷懒，叽勒。", 36, 3001510, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#当，当然，我同意必须先重建避难处。但是……我们不能一直这样生活下去，叽勒……", 36, 3001510, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#现在唯一的希望……就是找到原来乘坐的那艘船，叽勒。利用这个电波……叽，叽勒。", 36, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#但，但是现在必须先从最着急的事情做起。连你都来帮忙了，叽，叽勒楞……", 36, 3001510, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(34920);
                                    cm.gainExp(734);
                                    cm.updateInfoQuest(34920, "exp=1");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};