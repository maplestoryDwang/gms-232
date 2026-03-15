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
            cm.sendNormalTalk_Bottom("#face1#呃啊,走开！快走开！\r\n像这样…… 木森林虫总是过来捣乱,根本没办法把罗盘碎片捡起来。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#勇士,勇士,要想把罗盘碎片捡起来,\r\n必须先解决掉这些烦人的虫子。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face1#消灭掉一些,周围应该就会安静一点……\r\n你能去教训#b30个#k左右的#r#o2300205##k吗？", 36, 1013350, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35918, "");
                        cm.gainExp(390);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35918.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#哇,这么快就把周围清理干净啦。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#现在它们的气势好像也没那么嚣张了。\r\n好了,我去把罗盘碎片捡起来。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35918);
                    cm.gainExp(1818);
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h1;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h1;23=h1;14=h0;24=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                    cm.setPartner(1, 1013350, 80002700, 0);
                    cm.OnStartNavigation(100051032, 1, "1013313", 35919);
                    cm.sendNormalTalk_Bottom("#face2#嘿嘿,第一个碎片回收完成！现在还剩两个碎片。\r\n我们快去寻找其他的罗盘碎片吧～！", 36, 1013350, true, true, 1);
                    cm.dispose()
                }
            }
        }
    }
};