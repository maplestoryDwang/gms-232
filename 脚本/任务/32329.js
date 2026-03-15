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
            cm.forceStartQuest(32366, "2");
            cm.sendNormalTalk("你好，哦，你是来到农庄的客人吗？", 0, 1520041, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是龙的主人，龙神吗？", 2, 1520041, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，我是龙神。从我嘴里说出……龙的主人这几个字总觉得有点不好意思。呵呵。", 0, 1520041, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这是什么话嘛，主人！你应该昂首挺胸地说出来！你可是我米乐唯一的主人啊！\r\n再说，已经有粉丝来找你了，主人……该怎么办？要不要练习一下签名呢？看来，我们也已经不知不觉成名人了呐！", 4, 1520042, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("米乐，你难不难为情啊……。啊，这是我的朋友，米乐。", 0, 1520041, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请多多指教！", 4, 1520042, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不过，你来找我有什么事情呢？难道……………………。", 0, 1520041, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("米，米乐虽然是龙，不过它和其他怪物不同！你杀了它也得不到什么东西！", 0, 1520041, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(告诉龙神不用担心米乐，同时还向他说明了冒险岛的情况。)", 2, 1520041, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("原来如此。黑魔法师复活的消息，之前我已从联盟那里得知了。可没想到他会破坏冒险岛。不过，这可怎么办呢？封印石并不是我制造的，而是数百年前的英雄……是先代龙的主人所造。", 0, 1520041, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("主人！说不定阿弗利埃会知道些什么。", 4, 1520042, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("啊，对！在雪龟岛上，沉睡着先代龙的主人的契约龙--阿弗利埃。阿弗利埃的话，应该知道有关封印石的事情。我马上去问问它。", 0, 1520041, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("龙神，不好啦！大事不好啦！", 4, 1013101, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("尤塔大哥？有什么事情吗？难道……这次，黑魔法师袭击了我们的农庄？！", 0, 1520041, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("?!?! 你说什么？！竟敢袭击主人的家？黑魔法师！不可饶恕的家伙！", 4, 1520042, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("你在说什么呀？袭击农庄的是你的龙！刚刚你们飞过来的时候吓到农场小猪了，现在它都逃走了！", 4, 1013101, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("啊哈，是嘛~ 真的是这样吗？", 4, 1520042, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("现在可不是听你说‘啊哈，真的是这样吗~’这种话的时候！它还太小，可能会迷路的。龙神瞧你干的好事，你去把它找回来吧。快呀！", 4, 1013101, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("呃，不过，我受#h0#之托，要去一趟雪龟岛……。", 0, 1520041, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("那等你找到小猪再去不就行了嘛！小猪受到了你们的惊吓，现在肯定躲在哪里吓得发抖呐。它不是很可怜吗？", 4, 1013101, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("知道了，知道了。我先找到小猪再去雪龟岛，这总行了吧。那个，#h0#，事已至此，可能需要耽搁3分钟。你能等我一会儿吗?", 0, 1520041, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.askMenu("(根据不同选择，可以获得不同的任务。但奖励相同。)#k\r\n#b#L0# 我替你找小猪。#l\r\n#b#L1# 我会等你回来。#l", 0, 1520041)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(32371, "2");
                                                                                                    cm.sendNormalTalk("首先得找到小猪，再去雪龟岛。不过好像需要#r3分钟#k的时间。详细的事情我去问问尤塔大哥，应该就能知道了。那么，我去咯。米乐，我们走！", 0, 1520041, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("嗯，主人！", 4, 1520042, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceStartQuest(32366, "1");
                                                                                                            cm.sendNormalTalk("那么，我去咯！", 0, 1520041, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceCompleteQuest(32329);
                                                                                                                cm.gainExp(150000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32329.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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