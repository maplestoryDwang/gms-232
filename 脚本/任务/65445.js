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
            cm.sendNormalTalk_Bottom("#face1##h0#,，谢谢你这段时间对艾米的帮助。现在艾米还没恢复，所以我替她向你道谢。", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b没什么，我也觉得很有趣。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#啊对了，还有这个……", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#艾米整理咖啡店的时候，说把剩下的东西送给帮助她的人。代替薪水……", 37, 9400921, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(65445);
                            cm.updateInfoQuest(501024, "end=1;start=1;obj=2;man=1");
                            cm.playerMessage(-1, "[我的小屋]管家选购中追加了<海滨露台小屋>。");
                            cm.sendNormalTalk_Bottom("#b这是？", 57, 0, true, true);
                            cm.gainItem(2631801, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#这是凯尼斯为艾米制作的图纸，看来他真的相信艾米可以经营一家像样的咖啡店吧。但很可悲的是现在……", 37, 9400921, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b嗯……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#听说最近很流行家庭咖啡店，所以我们也打算在家里布置漂亮的桌椅，畅饮艾米特制果汁，一起享受闲暇时光。如果#h0#也布置家庭咖啡店的话，一定要邀请我们啊。", 37, 9400921, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b一定会的。", 57, 0, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65445.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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