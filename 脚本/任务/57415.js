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
            cm.sendNormalTalk_Bottom("呼……都找了这么半天了，但还是什么也找不到。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是不是你看错了啊？现在根本就没法确定散发出这气息的东西一定掌握在织田军的手里吧？", 37, 9130081, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这个气息我们昨天还没有感觉到，但是今天却突然出现了。同一时间，织田军也出现了。这么一联想，应该可以确定东西就掌握在织田军的手中吧？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你说得倒也有几分道理。", 37, 9130081, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("总之，我们现在的搜索方法似乎有点问题。看来需要想个其他搜索办法出来才行。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(57414);
                                cm.sendNormalTalk_Bottom("是啊，我们确实搞错了。最低级的士兵手里怎么可能有能散发出如此强烈气息的东西。如果这样东西握在织田军的手里，那拿着它的人一定是指挥官级别，或是与之相似级别的人物。", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("继续深入敌阵吧。必须前往#b#m807020100##k，一边对付敌军中的武士，一边继续搜索。", 57, 0)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(57415, "");
                                        cm.OnStartNavigation(807020100, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("总算是找到了。如何呢，你有没有感觉到什么？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，绝对没错。气息就是从这条狐狸尾巴中散发出来的。不过，这到底是什么东西呢？其中散发出来的气息感觉如此熟悉……还带着一丝让人怀念的香味。", 37, 9130081, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这不会是小白你的尾巴吧？说不定是你被人追踪时候慌了神，才把尾巴给摘掉逃了出去……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你以为我是蜥蜴啊！？", 37, 9130081, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这里实在不适合我们继续思考下去了。先把这条尾巴带回本阵，再慢慢调查吧。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(57415);
                                cm.OnStartNavigation(807000000, 1, "9130008", 0);
                                cm.gainItem(4033274, -1);
                                cm.dispose();
                                cm.warp(807000000, 2)
                            }
                        }
                    }
                }
            }
        }
    }
};