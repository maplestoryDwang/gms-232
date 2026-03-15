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
            cm.sendNormalTalk("你来得正好，#e#h0##n。", 4, 3003751, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n你应该已经注意到了，最近冒险岛世界和格兰蒂斯频繁发生异常现象。\r\n我认为这些现象的产生都与#r古代神之力#k有关。", 4, 3003751, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n当然，联盟目前正在派人调查#r古代神之力#k。但为了以防万一，我们打算同时对冒险岛世界展开调查。", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b#h0##k的任务是使用#b荣耀特攻队勋章#k，调查#r古代神之力#k。", 4, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("我知道你很忙，但可以请你抽空参与一下任务吗？", 4, 3003751)
                        } else {
                            if (status === a++) {
                                cm.teachSkill(80002837, 0, -1);
                                cm.teachSkill(80002837, 1, 0);
                                cm.teachSkill(80002837, 1, 0);
                                cm.forceCompleteQuest(100352);
                                cm.updateInfoQuest(100352, "pt=0");
                                cm.openUIWithOption(3, 80002837);
                                cm.playerMessage(5, "获得了[荣耀特攻队勋章]技能。");
                                cm.playerMessage(5, "前往等级范围怪物所在处，就能发现荣耀特攻队勋章。");
                                cm.sendNormalTalk("\r\n谢谢。#h0#\r\n我来向你简单介绍一下#r荣耀特攻队勋章#k。", 4, 3003751, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n#r荣耀特攻队勋章#k是用来收集#b古代神之力#k的装置。\r\n在#r#e等级范围怪物所在的狩猎场#k#n中狩猎，\r\n会激活#b荣耀特攻队勋章#k，就可以收集#r古代神之力#k了。", 4, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n此外#b荣耀特攻队勋章#k还有一项功能，就是将古代神之力转换为荣耀特攻队的神圣气息。收集足够的古代神之力后，就能启动荣耀特攻队之光辉，获得特殊效果了。", 4, 3003751, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n发动荣耀特攻队之光辉后，#e会立即获得#b一定量的荣耀点数#k#n。在一定时间内消灭#e等级范围怪物时，将有有一定概率获得#b荣耀点数#k#n。", 4, 3003751, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n但是，在已发动荣耀特攻队之光辉的状态下离开该区域，或未激活荣耀特攻队勋章的情况下，持续效果将会消失，且在一定时间内无法收集古代神之力。", 4, 3003751, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n那就拜托你了。", 4, 3003751, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100352.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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