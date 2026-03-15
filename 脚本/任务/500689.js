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
            cm.sendNormalTalk("#b#h0##k老师！你好。", 4, 9062164, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哦……？#b短中分勇士#k？！", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嘿嘿，原来你还记得我啊。这段时间我不在，你是不是很孤单啊？哈哈哈！", 4, 9062164, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("…………。\r\n很高兴见到你，但是你怎么又来这里了？", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我在冒险岛世界探险的这段时间里，发现冒险岛世界的人们有着各种各样的搭配。\r\n我也想那样搭配……但是我对搭配完全一窍不通。", 4, 9062164, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("所以我就又来找老师了！\r\n从现在开始你就是我的#b#e搭配老师#n#k！\r\n#b老师#k请帮帮我吧！\r\n#e作为参考#n，这是我给老师准备的礼物！\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#e<1课时>#n\r\n#i1122215:# #b#t1122215:#1个（7天）#k\r\n#e<谜题 1>#n\r\n#i2630438:# #b#t2630438:#1个（7天）#k\r\n#e<2课时>#n\r\n#i2630442:# #b#t2630442:#1个（7天）#k\r\n#e<3课时>#n\r\n#i2049447:# #b#t2049447:#1个（7天）#k\r\n#e<4课时>#n\r\n#i2439869:# #b#t2439869:#3个（7天）#k\r\n#e<谜题 2>#n\r\n#i2630439:# #b#t2630439:#1个（7天）#k\r\n#e<5课时>#n\r\n#i2434288:# #b#t2434288:#1个（7天）#k\r\n#e<6课时>#n\r\n#i2711001:# #b#t2711001:#5个（7天） #k\r\n#e<7课时>#n\r\n#i2049710:# #b#t2049710:#1个（7天）#k\r\n#e<谜题 3>#n\r\n#i2631248:# #b#t2631248:#1个（7天） #k\r\n#e<8课时>#n\r\n#i2436782:# #b#t2436782:#2个（7天）#k\r\n#e<9课时>#n\r\n#i2048731:# #b#t2048731:#1个（7天）#k\r\n#e<10课时>#n\r\n#i3018330:# #b#t3018330:#1个（永久）#k\r\n#e<谜题 4>#n\r\n#i2631249:# #b#t2631249:#1个（7天）#k", 4, 9062164)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(500689, "");
                                    cm.forceCompleteQuest(500689);
                                    cm.sendNormalTalk("谢谢！我会以不变的初心努力学习的！\r\n\r\n#r#e※注意※#n#k\r\n课程#e共10次#n。\r\n课程将从#b2020年1月1日#k开始#b每天开放一个#k。\r\n所有课程#r每个世界只能进行1次#k。", 4, 9062164, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500689.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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