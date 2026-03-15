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
            cm.sendNormalTalk("你好，#h0#。", 4, 3003751, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("出什么事了？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("次元封印破裂后，分散的#b尼罗塔遗迹#k出现在各个区域。", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因此，尼罗塔教团为了寻找有关\r\n#b尼罗塔之力#k的线索，决定要调查遗迹。", 4, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("有关#b尼罗塔之力#k的线索，对联盟来说也是重要的信息。", 4, 3003751, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("联盟方面打算与尼罗塔教团合作，共同调查#b尼罗塔遗迹#k。", 4, 3003751, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("所以我想要拜托你这位荣耀特攻队队员。\r\n可以帮忙探索#b尼罗塔遗迹#k吗，#h0#？", 4, 3003751)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(80002801, 0, -1);
                                        cm.teachSkill(80002801, 1, 0);
                                        cm.teachSkill(80002801, 1, 0);
                                        cm.forceCompleteQuest(100328);
                                        cm.openUIWithOption(3, 80002801);
                                        cm.playerMessage(5, "获得了[探索尼罗塔遗迹]技能。");
                                        cm.sendNormalTalk("谢谢你，#h0#。\r\n\r\n你去#b等级范围怪物#k所在地，\r\n就能见到准备开始探索的#b尼罗塔祭司#k了。\r\n\r\n#fNpc/9062200.img/stand/0#", 5, 3003751, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n为了让尼罗塔祭司能够集中精力展开探索，\r\n请消灭#b等级范围怪物#k吧吧，#h0#。", 5, 3003751, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n完成探索，尼罗塔遗迹就会出现。\r\n在遗迹附近通过#bNPC/采集键#k，可以获得#b尼罗塔之力#k。\r\n#r（※在左上方的小地图中通过#fMap/MapHelper.img/minimap/eventNerota#图标显示。）#fReactor/9939038.img/0/15#", 5, 3003751, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n可以查看以下尼罗塔之力。\r\n#b（查看尼罗塔之力后，可以获得下列增益之一。）#k\r\n\r\n#e[尼罗塔之力：祝福]#n\r\n- 尼罗塔的祝福珠将在1分钟内生成，\r\n拿到珠子即可获得#b荣耀点数#k\r\n\r\n#i2630823# #i2630822#", 5, 3003751, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n#e[尼罗塔之力：经验]#n\r\n- 2分钟内#b额外经验值获得量+100%#k\r\n\r\n#e[尼罗塔之力：庇护]#n\r\n- 1分钟内每10秒发动1次尼罗塔之庇护\r\n  #b攻击周围的怪物#k", 5, 3003751, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("那就拜托你了。", 5, 3003751, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100328.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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