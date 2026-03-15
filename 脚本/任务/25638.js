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
            cm.askAcceptDeclineS("现在回到飞鱼丸那里去把。这段时间他想出加工水晶的办法了吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25638.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("找到水晶的材料了吗？", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("找是找到了，不过材质差了点。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我看看。嗯，应该凑合能用。虽然绿矿石的效果更好，但现在最重要的是快点完成。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("最近优秀的制作者们喜欢聚集在一起生活。听说有一个叫做匠人街的村庄。你带着材料，去问问能不能制作聚光的水晶。我会送你去匠人街，到了那里先去找村庄长老问问方法吧。", 1, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(25638);
                            cm.dispose();
                            cm.warp(910001000, 0, false)
                        }
                    }
                }
            }
        }
    }
};