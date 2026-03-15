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
            cm.sendNormalTalk_Bottom("#face2#哎呀呀……好像是周围的旋风狐制造了沙暴，叽勒。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#叽，叽勒……如果沙暴能稍微小一点，应该可以捕捉到电波……", 36, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我去把周围清理一下。那样就能接收到电波了吧？这件事就交给我吧。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#好主意。好的……你能去消灭掉#b50只#k#b#o2400356##k吗，叽勒？", 36, 3001510)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我在这里寻找电波，其他商队成员会帮助你的，叽勒……", 36, 3001510, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#切，可恶，但是现在也没办法。大家快去消灭狐狸吧！", 36, 3001509, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34930, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34930.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊，又捕捉到电波了。必须趁这个机会，到#r沙暴地带2#k去。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.updateInfoQuest(34995, "00=h1;10=h1;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.forceCompleteQuest(34930);
                cm.gainExp(6870);
                cm.updateInfoQuest(34930, "exp=1");
                cm.OnStartNavigation(402000622, 0, "", 0);
                cm.dispose()
            }
        }
    }
};