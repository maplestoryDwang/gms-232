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
            cm.sendNormalTalk("噢噢！这是谁啊？居然能在这里见到，真的是让人高兴啊！你在日冕庆典玩的开心吗？", 4, 9400963, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我虽然也想放心享受节日，但我在这次节日中承担着#e非常~重要的职责#k。那就是#b节日的亮点！烟花秀时间#k！", 4, 9400963, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我本来不想故意显摆，但是我为了节日，在几个月的时间里绕着勇士部落岩山搜集火焰草，制作了烟花。虽然很辛苦，但是却很快乐！然而……", 4, 9400963, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("该死的沙漠巨人们总是袭击烟花仓库，抢走烟花，真是让人担心。可不能因为这些沙漠巨人而让这节日的#b亮点#k被毁掉啊！", 4, 9400963, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("你能帮我来完成大家都翘首以盼的节日亮点--#b烟花秀#k吗？我会给你很丰盛的奖励的。", 4, 9400963)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("谢谢你！我就特别允许你进入烟花仓库吧。", 4, 9400963, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我会在烟花秀开始前告诉你更详细的内容，你可以随时来找我！", 4, 9400963, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64685);
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