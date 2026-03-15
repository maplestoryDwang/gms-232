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
            cm.sendNormalTalk_Bottom("#face0#多亏了#b#ho##k，黑魔法师被消灭了。\r\n世界再次获得了和平。", 36, 9063152, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#但是在他死后还有一些未解之谜，而且在几天前……", 36, 9063152, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我们又发现了他留下的可疑之处。\r\n我们正在集整个联盟的力量进行调查。", 36, 9063152, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#咻……但是单凭我们的力量\r\n还有很多无法解决的问题…….", 36, 9063152, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#总之，我们希望\r\n#b#ho##k能够帮助我们。", 36, 9063152, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0#请再次消灭还未消失的黑魔法师的残影。\r\n你能做到吗？\r\n\r\n#r ※ 该任务需要击败BOSS黑魔法师。通过BOSS等待队列或者经过巨人心脏就能前往黑暗神殿。#k\r\n ", 36, 9063152)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(35651, "");
                                    cm.updateInfoQuest(35650, "start=1;50=h1;51=h1");
                                    cm.sendNormalTalk_Bottom("#face0#好的。那么在#b#ho##k回来之前，\r\n我和汉斯会以这段时间的资料为基础进行研究的。", 36, 9063152, 0, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果你成功消灭了黑魔法师的残影，\r\n就请来现在我所在的深夜联盟会场。\r\n\r\n#r ※ 通过提示的“[创世武器]跟随黑魔法师的痕迹”任务就能前往南哈特所在的深夜联盟会场。#k", 36, 9063152, 1, 1)
                                    } else {
                                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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