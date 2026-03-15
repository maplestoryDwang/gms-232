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
            cm.sendNormalTalk_Bottom("#face0#你，很强！", 36, 3001511, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#嘻嘻，你只要帮我完成一个愿望就行！", 36, 3001511, 1, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#给我#b10个#k#i4036347# #b#t4036347##k！在前面的#o2400353#身上就有！", 36, 3001511)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#嘿嘿，至于用来干什么……那是秘密……", 36, 3001511, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34923, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34923.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你，是个好人！", 37, 3001511, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#嘿嘿，真漂亮……闪闪发光……这么多就够了。又有了……闪闪发光的石头……", 37, 3001511, 1, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34923);
                    cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                    cm.gainExp(1073);
                    cm.updateInfoQuest(34924, "e1=1");
                    cm.updateInfoQuest(34923, "exp=1");
                    cm.sendNormalTalk_Bottom("#face2#嘿嘿，让你也看看……闪闪发光……好了，跟我来。\r\n\r\n#b（移动到闪光的岩石所在的地方。）#k", 37, 3001511, 1, 1);
                    cm.gainItem(4036347, -10)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(402000614, 0, false)
                    }
                }
            }
        }
    }
};