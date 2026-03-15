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
            cm.sendNormalTalk_Bottom("#face6#啊，啊……我……没事……走吧，我们必须找到最后的动力源。", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face2#叽，叽勒……好吧。大家现在爬到上面去。", 36, 3001510)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#叽，叽勒……还好在上面感觉到的电波……嘿嘿，很稳定。", 36, 3001510, 0, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34935, "");
                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h1;06=h0;16=h0;07=h0;17=h0;09=h0");
                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h1;06=h0;16=h1;07=h0;17=h0;09=h0");
                        cm.dispose();
                        cm.warp(402090012, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34935.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#终于到了。啊，最后一个感受到电波的地方就是这里。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34935);
                cm.gainExp(7360);
                cm.updateInfoQuest(34935, "exp=1");
                cm.dispose()
            }
        }
    }
};