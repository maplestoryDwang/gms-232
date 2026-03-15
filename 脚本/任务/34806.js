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
            cm.sendNormalTalk_Bottom("#face1#你好,伊利温,上课感觉怎么样？", 36, 3001301, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊,阿加特大人！？", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#哈哈,吓到你了吧？通过点灯,可以进行远距离通话。", 37, 3001301, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不过啊,我听说今天的魔法战斗实习课上,你好像遇到点困难……", 37, 3001301, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#好吧……", 37, 3001351, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……学习魔法不是一蹴而就的事。", 37, 3001301, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#不如这样吧？这学期你和我一起练习操控水晶力量。算是一种#b特别活动#k吧？", 37, 3001301, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你说……特别……活动？", 37, 3001351, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#嗯。先好好上完这节课,下课后到我房间来吧。", 37, 3001301, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(34806, "item1=1");
                                                cm.forceStartQuest(34806, "");
                                                cm.sendNormalTalk_Bottom("#face2#下节课继续加油,我为你准备了一点药水。那待会见喽！", 37, 3001301, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainItem(2001502, 20);
                                                    cm.gainItem(2001506, 20);
                                                    cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3001351, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#(阿加特大人……这么忙还为我的事费心……)", 37, 3001351, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#(下课后去拜访阿加特大人吧。不过啊……今天还没过去……我就已经疲惫了……好想回家啊……)", 37, 3001351, true, true, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34806.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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