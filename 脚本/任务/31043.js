var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你想搜集到所有的饰品吗？那你最好暂时留在这里，接受我的委托……既可以获得礼物，又可以让自己变得更强。有你暂时陪着我的话，我也不会感到寂寞。", 0, 2162000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("怎么样？你想听一下有关每日任务的说明吗？", 0, 2162000)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, true, true);
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2162000.img/stand/0#    每日任务：兼职园艺师\r\n\r\n\r\n#fs18#                  在玫瑰花园中的所有行动都会被记录为分数。\r\n\r\n#fn黑体#                  - 消灭普通怪物：3分\r\n                  - 让玫瑰盛开/解放灵魂：10分\r\n                  - 消灭黄金蜜蜂：25分\r\n                  - 消灭城堡石头人王：50分", 1)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2162000.img/stand/0#    每日任务：兼职园艺师\r\n\r\n\r\n#fs18##fn黑体 ExtraBold#Tip 1 : #fn黑体#每日任务每天可以执行三次。要求获得的分数会逐渐提高，奖励也会逐渐增加。\r\n\r\n#fn黑体 ExtraBold#Tip 2 : #fn黑体#前一天积累的分数会在第二天初始化。\r\n\r\n#fn黑体 ExtraBold#Tip 3 : #fn黑体#队员们的活动会被计入分数，因此组队的话可以更快地完成。", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#i2432206#    奖励：玫瑰花园箱子\r\n\r\n#fs14##fnDotum#开启箱子，可以在以下道具中随机获得一种。\r\n-------------------------------------------------------------------------\r\n装备类：#fs18##fn黑体 ExtraBold##fs18##i1113089# #t1113089#     #i1032227# #t1032227#     #i1122274# #t1122274#\r\n\r\n#fs14##fnDotum#硬币类：#fs18##fn黑体 ExtraBold##i4310010# #t4310010#\r\n\r\n#fs14##fnDotum#消耗类：#fs18##fn黑体 ExtraBold##i2001504# #t2001504#     #i2001505# #t2001505#     #i2001556# #t2001556#\r\n               #i2001528# #t2001528#     #i2001531# #t2001531#\r\n\r\n#fs14##fnDotum#卷轴：#fs18##fn黑体 ExtraBold##i2049117# #t2049117#     #i2049400# #t2049400#", 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.forceCompleteQuest(31043);
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
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose();
            cm.forceCompleteQuest()
        }
    }
};