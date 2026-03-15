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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32516.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你是访问者吗？有何贵干？(伯纳德什么都不知道，和我热情地搭话。)", 0, 2232011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(冷静想一想的话，那个戴面具的人不是很可疑吗？一味相信可疑人物的话而做出这种事情，难道这也没关系吗？哎，该怎么办。)", 2, 2232011, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32516);
                    cm.gainExp(5457600);
                    cm.sendNormalTalk("啊，冷死我了！你这是干什么？", 0, 2232011, true, true);
                    cm.gainItem(4033941, -1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("伯纳德，怎么这么吵闹？", 4, 2232014, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不是的，#h0#突然把水往我身上……。", 0, 2232011, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("出什么事了~我还以为是不是黑魔法师又来侵略了呢。~", 4, 2232016, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这，骑士大人请用我的#i4033937#手帕。", 4, 2232017, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哎？这手帕明明是？", 2, 2232011, true, false)
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
};