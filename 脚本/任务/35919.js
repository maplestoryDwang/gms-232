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
            cm.sendNormalTalk_Bottom("#face1#勇士,勇士！找,找到罗盘碎片啦！\r\n但,但是……这里也有好多虫子！", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face1#呃啊,看来这次还得消灭掉一些虫子,周围才能安静一点！\r\n请你去教训#b30个#k左右的#r#o2300206##k！", 36, 1013350, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35919, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35919.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#哇,这次又这么快就解决啦。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#现在它们的气势好像也没那么嚣张了。\r\n好了,我去把罗盘碎片捡起来。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35919);
                    cm.gainExp(2727);
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h1;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h1;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.setPartner(1, 1013350, 80002700, 0);
                    cm.OnStartNavigation(100051034, 0, "", 35920);
                    cm.sendNormalTalk_Bottom("#face2#嘿嘿,第二个碎片回收完成！\r\n现在还剩下一个碎片。只要再跑一个地方就行了。", 36, 1013350, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#好了,我们去寻找最后的罗盘碎片吧～！", 36, 1013350, true, true, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};