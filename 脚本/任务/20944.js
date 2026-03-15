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
            cm.sendNormalTalk("虽然有很多数据损坏了，但还是在其中找到了清晰的影像。一个穿着长袍的矮个子的影子……说到这里，应该可以知道是谁了吧？那就是#b人偶师#k弗朗西斯。那是在黑色之翼巢穴的前面，身为干部的他在那里出现并不是什么奇怪的事。", 0, 2159428, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是#b人偶师#k不从矿山正门进入，而是进入了一条岔路。到底是怎么回事呢？黑色之翼的干部，难道不应该从正门堂堂正正地进去吗？", 0, 2159428, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看来很有调查的价值。不过#b#ho##k，我知道你是位勇敢的人，但是这次的事情非常危险。", 0, 2159428, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("如果感觉有任何危险，请马上回来。明白了吗？如果准备好了，我马上把你送到秘密通道去。可以吗？\r\n\r\n#b#e（接受时，移动到秘密通道）#k#n", 0, 2159428)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("必须小心一点！", 1, 2159428, false, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(930030005, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20944.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(向布吉讲述了发生的一切)#k\r\n\r\n……原来如此。真是辛苦你了。你比我这个名义上的情报员做了更多的事情。哎呀，真让人嫉妒。", 0, 2159428, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不管怎样，#b#ho##k，你能安然回来，我感到很高兴。……也许你今后会做出超乎想象的大事来。\r\n\r\n作为冒险骑士团的一员，我很希望能看到你变得更强。", 0, 2159428, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("现在只剩下任务的最后一步——报告结果了。准备好了的话，我马上把你送到圣地去。准备好了吗？", 0, 2159428)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("下次再见，#b#ho##k！", 1, 2159428, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(20944);
                            cm.dispose();
                            cm.warp(130000000, 0, false)
                        }
                    }
                }
            }
        }
    }
};