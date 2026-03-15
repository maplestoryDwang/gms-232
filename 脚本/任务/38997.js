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
            cm.sendNormalTalk("好的！我先来说明一下#b[缩地]#k这个技能。你要竖起耳朵听好！哎呀，我忘了隐月没有耳朵了。", 0, 3002101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("总之，#b[缩地]#k是可以快速移动或快速靠近敌人的技能。像隐月这么慢的话，根本连一只猎物都抓不到！", 0, 3002101, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好了，你来使用一些#b[缩地]#k试试。对了，把技能添加到快捷栏中使用，会更加方便。", 0, 3002101, true, true)
                } else {
                    if (status === a++) {
                        cm.playerMessage(-1, "请试着使用[缩地]技能。");
                        cm.updateInfoQuest(38997, "");
                        cm.forceStartQuest(38997, "");
                        cm.sendNormalTalk("怎么样？是不是快极了？使用这个技能的话无论是敌人还是猎物，都可以瞬间接近。", 4, 3002101, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("而且，在使用其他技能的过程中使用这一技能的话，将#b终止正在使用的技能#k并且#b移动#k！", 4, 3002101, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("隐月是个傻瓜，所以这么说的话应该不是很明白吧？", 4, 3002101, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我会教你如何在实战中使用，准备好的话就再和我说话吧！", 4, 3002101, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(38999, "1");
                                        cm.updateInfoQuest(38997, "");
                                        cm.forceStartQuest(38997, "");
                                        cm.forceCompleteQuest(38997);
                                        cm.gainExp(700);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38997.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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