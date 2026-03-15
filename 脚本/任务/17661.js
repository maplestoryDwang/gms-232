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
            cm.sendNormalTalk("莱文先让心情平复下来。", 2, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对，你说得对。我太激动了。谢谢你，多亏你让我恢复了理智。", 0, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("首先，想想接下来我们该怎么做。", 0, 9390236)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17661, "");
                        cm.sendNormalTalk_Bottom("现在留给我们的任务有两个。首先为了洗脱罪名我们得找到真正的罪犯。还有搜救特来敏小姐。", 32, 9390236, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("所以说……虽然对#h0#感到抱歉，但是我想先搜救特来敏小姐。当然你的罪名我貌似也摆脱不了干系。但是我还是认为应该先搜救特来敏小姐。", 32, 9390236, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("并不是非要你与我同行。从现在起我们从头行动也没关系", 32, 9390236, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯……不对，这两件事好像有很多的相关联的地方。", 56, 9390236, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("有关联？你是说使节团的暗杀和特来敏小姐绑架事件有关联吗？", 32, 9390236, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我也不太确定。但是绑走克莱尔的家伙们和使节团尸体旁边的家伙们穿着同样的衣服。所以救出克莱尔说不定也能找到为我们洗脱罪名的办法。", 56, 9390236, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17661.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("好吧！谢谢了！那么赶紧去找特来敏小姐吧。", 0, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("就往那些家伙消失的方向慢慢地搜寻过去吧。那些家伙如果知道她的身份的话，是不会轻易伤害她的。", 2, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好吧。那些家伙消失的方向好像还得往森林里面去呢。", 0, 9390236, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17661);
                        cm.dispose()
                    }
                }
            }
        }
    }
};