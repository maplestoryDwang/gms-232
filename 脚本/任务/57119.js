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
            cm.sendNormalTalk_Bottom("#face0#剑斗，辛苦你了。", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("实在抱歉，我的力量还没有完全恢复，所以没能彻底击溃敌阵。真是不好意思。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#无妨，在我看来，剑斗你已经拼尽全力了。应该好好夸夸你才是呢。", 37, 9130006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("谢谢。对了，我在战场上发现了这么一个东西。从中散发着非同小可的气息……不知道这究竟是什么东西啊？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这是白狐的尾巴吗？说来还真是奇怪。在其他参加奇袭任务的武士之中，也有人拿回了与这个相同的白狐尾巴。", 37, 9130006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这之间到底有着怎样的关系呢……不知你们两位是不是已经有了什么推测？", 37, 9130006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你们说的什么阴阳道和气息，我完全是一窍不通。我就只会帮忙看看刀枪的好坏而已。", 37, 9130009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊哈哈，其实谦信你对酒的造诣也很深嘛。对不住了元就大人，我也完全推测不出这狐狸尾巴究竟是什么来头。", 37, 9130000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯，既然这样，就让我们先把目前收集到的狐狸尾巴聚集到一起，然后再来仔细研究吧。", 37, 9130006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(57119, "");
                                                cm.gainItem(4033277, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57119.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#嗯？你们干嘛都这么惊讶地看着我？哦，是剑斗啊。本能寺的任务辛苦你了。听说你战得非常神勇嘛。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#土御门……这到底是怎么回事啊？为什么你会变成狐狸尾巴的模样？", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#狐狸尾巴？你们到底在说什么啊。我是在进行本能寺攻略战的时候，突然被一团光芒包裹，然后就失去意识了。等再醒过来的时候，就看到你们一个个都来跟我大眼瞪小眼。", 37, 9130010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（其实，我是第一个到达“这边”这个世界的。为了避免在找到五星之子和联合军之前就被织田军给找到，我才幻化成了狐尾的模样。但这一点应该没必要告诉他们吧。）", 37, 9130010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（果不其然，正是织田军先一步发现了我。幸好联合军找到了所有狐狸尾巴，不然肯定要出大事了……）", 37, 9130010, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(57119);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};