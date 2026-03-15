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
            cm.sendNormalTalk_Bottom("#face0#剑斗。事出紧急，所以特意写信通知于你。我们在监视冒险岛的邪恶组织黑色之翼的时候，突然发现了在和黑色之翼干部接触的人里，有一个衣着打扮与剑斗非常相似的人。", 37, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这个男人个子很高，身材很是瘦弱，还梳着一头长发，不知道剑斗你是否认识……对了，这个男人手里的剑比剑斗你手中的更长。不知道这个人是否就是剑斗你所提到的织田军士兵呢？", 37, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我们所看到那个男人和黑色之翼干部接触的地点，正是剑斗你也非常熟悉的石人寺院门口那座可疑的建筑物。目前，我还在继续进行调查这个情况。不过觉得这件事应该通知剑斗你一声，所以才特意写信给你。　——赫丽娜", 37, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("拿着一把长剑的男人？难道是明智光秀！？看来我也必须尽快赶往石人寺院才行！", 16, 0)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57129, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57129.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你到底是什么人啊？为什么要莫名其妙地冲进别人家里，还在这里胡作非为啊？", 37, 9130067, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("明明是你先攻过来的嘛。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#谁让你连门也不敲，就直接闯进别人家里来啊！我这可是正当防卫！为什么最近突然跑来这么多擅闯民宅的人啊？而且还一个比一个厉害……呜呜……难道我连自己的私生活都保障不了了吗？难道我从此就要一直过上这样的生活了吗？", 37, 9130067, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那什么……对不住。其实是来到这里的道路实在太过曲折，我一直想找人问路，但却找不到能够问路的人。所以才没有想太多，就直接闯了进来。先不说这个了。我有事情想要问你……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#怎么了，你想问什么啊？只要是我的知道的，就肯定会回答你。所以答完之后你就快点离开吧。反正要是我不肯回答，你肯定又要欺负我了对吧？肯定又要胖揍我一顿对吧？", 37, 9130067, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("（这家伙到底在说什么啊……这样一个人真的会是什么邪恶组织的干部吗？）", 57, 9130067)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我听说，有一个衣着打扮和我非常相似的男人也来过这里。你能不能给我说说这个男人的情况？比如他到底是什么人，又是为了什么事而来到这里的。", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我就知道，你是要问那个长相帅气的家伙啊。我也是第一次见到他呢。他突然提出说，想要和我们黑色之翼联手。还说他自己掌握着一支武士部队，选择联手能够让我们互惠互利。", 37, 9130067, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("然后呢，你接受他的提议了吗？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我在组织里不过是个中层管理人员而已。这方面的事情不可能我自己一个人说了算。所以我就把这件事报告给了我们的头领。那家伙还提议说，希望能够与我们的头领直接见面……哼，但是我怎么可能让头领见到那么帅气的家伙啊！", 37, 9130067, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那个男人有没有自报姓名？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我记得……他好像是叫明什么的。明秀光光？嗯，差不多就是这么一个名字吧……", 37, 9130067, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("什么！！！是不是明智光秀？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#啊，对对对，就是叫这么个名字。那家伙的长相和说话口气实在是太让人不爽了。好了，我所知道的就只有这么多。是否要按照那家伙的提议，和他一起联手，就全凭我们的头领说了算了。我也不知道头领会做出怎样的决定。毕竟我在组织里不过是个中层管理人员而已。你要问的就这么多了吧？好了，没事就回去吧，拜托你快走吧！", 37, 9130067, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("如果我说，想要直接与你的头领见面……", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#开什么玩笑啊！不行，绝对不行！这个无论你说什么都不行！不行就是不行！", 37, 9130067, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……那就没办法了。好了，那我就先走了。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(57129);
                                                                                cm.dispose();
                                                                                cm.warp(100040000, 8, false)
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
                }
            }
        }
    }
};