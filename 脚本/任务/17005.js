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
            cm.sendNormalTalk_Illus("好了，那我现在告诉你一些有关正式贸易的情况吧。开始贸易之后，可以先设定目的地。", 9390220, 5, false, true, 1)
        } else {
            if (status === a++) {
                cm.openUI(554);
                cm.sendNormalTalk_Illus("有蓝色标记的地区是可以进行贸易的地区。", 9390220, 5, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus("虽然现在还只能去 [多尔切]地区，但是随着贸易次数的增多，能去的地区也会变多的。", 9390220, 5, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus("只要将鼠标放在贸易区上方，就能看到贸易区信息了。先试着移动到[多尔切]地区吧？", 9390220, 5, true, false, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(865000100, 0)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17005.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("恭喜你完成了第一次出航~！每次贸易，提皮斯都会陪你一起出航的。", 1, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了第二次出航，请再次跟我搭话吧。", 1, 9390220, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17005);
                    cm.dispose()
                }
            }
        }
    }
};