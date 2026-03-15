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
            cm.sendNormalTalk_Bottom("#face2#哎呀，电波又消失了，叽勒……可能是因为沙暴比刚才更强了，叽勒……", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#刚才明明一起把周围清理干净了啊……怎么办？这次还需要我帮忙吗？", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哎呀，它们的旋风好像更强了……不过只能试试看了。", 36, 3001510, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#好吧……你能去周围消灭掉#b50只#k#b#o2400357##k吗，叽勒？", 36, 3001510)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我要更加集中精力寻找电波。清理周围的事情就拜托了，叽，叽勒楞……", 36, 3001510, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34931, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34931.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#啊，还好终于又捕捉到了电波。趁这个空档，我们快走吧，叽勒。大家跟我来。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#哦！哦！有妨碍者挡住了去路！完了！\r\n哦！哦！我们是勇敢的猎人！我们做到了！耶～", 36, 3001509, 1, 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                    cm.forceCompleteQuest(34931);
                    cm.gainExp(7360);
                    cm.updateInfoQuest(34931, "exp=1");
                    cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h1;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                    cm.dispose();
                    cm.warp(402090005, 0, false)
                }
            }
        }
    }
};