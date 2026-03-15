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
            cm.askAcceptDecline_Bottom("你愿意接收来自妖精学院艾利涅的委托吗？\r\n\r\n#r※“妖精学院艾利涅”是特殊主题副本，将为勇士提供符合相应等级的怪物和任务经验值，最高59级。", 36, 3003658)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("听闻妖精学院艾利涅现在正在发生巨大的骚乱，\r\n那里可是人类接触不到的妖精之地。", 36, 3003658, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("正因如此，才能原封不动地保留妖精之地洪荒之初的模样，\r\n不过最近貌似有个人类魔法师踏足此地。", 36, 3003658, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我虽然并不了解详情，可如若放任这种骚乱继续扩大下去，妖精和人类的关系\r\n势必会更加恶化，最好还是过去了解一下情况，看看能帮上什么忙。", 36, 3003658, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("相信勇士你一定能够明智地应对当前的状况，\r\n那你就先去找找在魔法密林附近#r北部森林#k里的潘喜吧。", 36, 3003658, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("不过你知道潘喜在哪儿吗？\r\n你自己一个人能找过去也行，不过要是不介意的话，我可以直接送你过去。", 36, 3003658)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这是个不错的决定，毕竟从这里到巨大的树还是挺远的。\r\n那我现在就送你去#b潘喜#k那里，祝你好运。", 36, 3003658, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32148, "1");
                                        cm.forceStartQuest(39575, "");
                                        cm.dispose();
                                        cm.warp(101030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39575.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("喵~呜，你就是为了解决妖精学院艾利涅所发生的\r\n骚乱而被邀请来的勇士喵？", 0, 1040002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("然后呢？", 3, 1040002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看起来倒是没有预想得那么厉害喵，\r\n不过毕竟是名声在外的勇士，那就姑且信上一回吧。", 0, 1040002, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32147, "1");
                        cm.forceCompleteQuest(39575);
                        cm.dispose()
                    }
                }
            }
        }
    }
};