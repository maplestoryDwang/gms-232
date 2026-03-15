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
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
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
            cm.askAcceptDecline("恢复感情的药水？当然有。恢复感情的药水因为制作过程比较细腻，所以价格也偏贵了点。怎么样？你要买几个？", 0, 2480005)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41361, "NpcSpeech=24800051");
                cm.sendNormalTalk("天呐，#r卡奥#k这次可逮到了有责任感的人哦。不不，是我自言自语，别在意。让我看看，#r#t4033875##k……没了？", 0, 2480005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("也对，因为#t4033875#是照订单限量制作的。那么，这次也去弄些材料过来吧？我今天帮你帮到底了！只要拿回来#r40个#t4033874##k，我就免费送你#r#t4033875##k。", 0, 2480005, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41362, "");
                        cm.forceStartQuest(41362, "");
                        cm.dispose()
                    }
                }
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