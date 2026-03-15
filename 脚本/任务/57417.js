var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Illus("神那，你辛苦了。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("实在抱歉，我明明接受了帮忙准备法术的任务，却因为自己的独断专行而跑了出去。元就大人。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("神那就和这里的其他人一样，并不是我的家臣，而是志同道合的伙伴。只要你根据自己的判断，做出自己认为是对的事情，我是不会对你们横加指责的。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("你能这么说我就放心多了。对了，我在战场上找到了这个东西。从这个莫名其妙的东西里，我能感觉到非同小可的气息。不知道可不可以麻烦元就大人帮忙一起调查一下这到底是什么东西呢？")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("这是白狐的尾巴吗？说来还真是奇怪。在其他参加奇袭任务的武士之中，也有人拿回了与这个相同的白狐尾巴。")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("这之间到底有着怎样的关系呢……不知你们两位是不是已经有了什么推测？")
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev_Illus("你们说的什么阴阳道和气息，我完全是一窍不通。我就只会帮忙看看刀枪的好坏而已。", 9130009)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev_Illus("啊哈哈，其实谦信你对酒的造诣也很深嘛。对不住了毛利大人，我也完全推测不出这狐狸尾巴究竟是什么来头。", 9130000)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Illus("嗯，既然这样，就让我们先把目前收集到的狐狸尾巴聚集到一起，然后再来仔细研究吧。")
                                        } else {
                                            cm.forceStartQuest();
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

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Illus("嗯？你们干嘛都这么惊讶地看着我？哦，这不是神那吗？本能寺的任务辛苦你了。听说你很是努力呢。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("土御门……这到底是怎么回事啊？为什么你会变成狐狸尾巴的模样？", 9130008)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("狐狸尾巴？你们到底在说什么啊。我是在进行本能寺攻略战的时候，突然被一团光芒包裹，然后就失去意识了。等再醒过来的时候，就看到你们一个个都来跟我大眼瞪小眼。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("(其实，我是第一个到达“这边”这个世界的。为了避免在找到五星之子和联合军之前就被织田军给找到，我才幻化成了狐尾的模样。但这一点应该没必要告诉他们吧。)")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("(果不其然，正是织田军先一步发现了我。幸好联合军找到了所有狐狸尾巴，不然肯定要出大事了……)")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("(神那，你怎么看？这家伙明显是在装傻充愣吧？)", 9130081)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrevS("（确实，他明显是在隐瞒着什么，但也没有必要去揭穿吧。）")
                                } else {
                                    cm.forceCompleteQuest();
                                    cm.gainExp(2223);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};