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
            cm.sendNormalTalk("呵呵……你好啊，#h0#？庆典氛围充满了冒险岛世界，提起活动，不能少了我卡珊德拉吧？", 4, 9400966, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("充满日全食的神秘气息的#b日冕庆典#k，这次我卡珊德拉还是一如既往地准备了活动！\r\n名字叫做#b[旋转吧！鸿运转盘箱！]#k！！！", 4, 9400966, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("大家为了迎接#b日冕庆典#k都在尽情享受庆典，看起来有很多勇士都为了获得更多的日蚀之力在专心累积#b日冕积分#k啊？b所以我卡珊德拉准备了#e免！费！#n发放#b日冕积分#k的活动！", 4, 9400966, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("参与方法很简单！你看到我身边的这个#b转盘#k了吗？\r\n#b如果出现了黑色，就是你赢了#k，如果出现白色就是我赢。\r\n黑色和白色出现的概率是#e50:50#n，怎么样，很公平吧？", 4, 9400966, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b( ……真的吗……？我本来就有点怀疑……)#k", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你能领取的积分量在你#r每次赢的时候就会增加到两倍#k！\r\n  #b1胜：20 日冕积分#k\r\n  #b2连胜：40 日冕积分#k\r\n  #b3连胜：80 日冕积分#k\r\n#b ……#k", 4, 9400966, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("当然了，只有在#e赢、的、使、候#n哦，呵呵……", 4, 9400966, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你问输了会怎么样？这个问题很好！\r\n你输掉的一瞬间，所有#e可以领取的日冕积分就会初始化为0。哈哈哈哈！", 4, 9400966, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("等下，你的表情为什么是这样的啊？我也要生存啊？\r\n别担心！就算你输了，在#b每天领取一次积分之前#k随时都能再次挑战哦！", 4, 9400966, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("当然，你可别想着胡乱地转动转盘哦！\r\n转盘#b每30分钟只能转动1次#k，不管赢不赢，如果还想要转动转盘，那就在#b30分钟后#k 再来找我吧！", 4, 9400966, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("是选择轻松地拿到1胜，然后拿走#b20日冕积分#k，还是选择累积连胜获得#b好运#k，完全取决于你。试试你的运气和判断吧！", 4, 9400966, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("而且请记住，日冕积分在#b每个世界每天只能领取1次#k哦！\r\n来，那么~如果做好了心理准备，就来转动一下转盘吧？", 4, 9400966, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(64687);
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