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
            cm.sendNormalTalk_Bottom("#face0#嗯……那就只能找找看了……既然这样，最好组建一支探索队。", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#成员是维依、巴克巴克……以及……", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#哎呀，我不想跟那个家伙一起去，叽勒……叽勒楞……", 36, 3001510, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……如果愿意的话，亚克，希望你也能加入探索队。", 36, 3001508, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（在稍微远离避难处的地方找到了过去的记忆。如果继续找，说不定可以找到其他记忆。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我愿意加入探索队。", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#好的，必须先做好探索的准备。我们回避难处去吧。啊，维依，你检查一下探测器。", 36, 3001508, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(34925, "");
                                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                        cm.npc_LeaveField("oid=144060616");
                                        cm.dispose();
                                        cm.warp(402000600, 3, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34925.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#嗯……好了，首先，备用粮、武器和防具我想拜托商队的其他人去办。", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#亚克，你负责的是……探索准备。和维依、巴克巴克一起……他们俩就拜托了。", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你先去见见维依然后再去帮巴克巴克做好准备。全部完成之后，再重新集合。", 36, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34925);
                        cm.gainExp(2819);
                        cm.updateInfoQuest(34925, "exp=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};