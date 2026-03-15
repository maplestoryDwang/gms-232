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
            cm.sendNormalTalk("我以前在这的时候，比睿山的深处有一个小祠堂。除了浓姬，谁也不能进去那里。", 4, 9130103, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我给浓姬的松山家族的信物应该就在那里。请你把那个拿回来。", 4, 9130103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("然后变身为我、剑斗还有神那，完成调查就行。", 4, 9130103, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("为了测试药水的稳定性，拜托你了！", 4, 9130103, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(58948, "clear=3");
                            cm.forceStartQuest(58913, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58913.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("谢谢你帮我找到松山家族的信物！", 4, 9130103, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("幸好魔王没有降临……不过她竟然迷失了自我，变成了妖怪。她……真是可怜。", 4, 9130103, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请你代替我阻止她。", 4, 9130103, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58913);
                        cm.sendNormalTalk("为了阻止浓姬，必须获得她所在的比睿山大殿的钥匙。", 4, 9130103, true, true);
                        cm.gainItem(4034130, -1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("她在逃跑时，把自己的分身留在了比睿山的小祠堂。从那个分身那里就能获得可以找到真正浓姬的钥匙。", 4, 9130103, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我在之前已经潜入到本阵，拿到了钥匙。和我对话的话，我会给你去往真浓姬的钥匙。", 4, 9130103, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("最好小心些，被妖魔附体的真浓姬不是很好对付。如果想要先练习下的话告诉我。我会把你传送到有浓姬分身的地方，以便你先练练手。", 4, 9130103, true, false)
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
};