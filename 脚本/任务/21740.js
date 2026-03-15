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
            cm.sendNormalTalk("你回来了，英雄。在#m200000000#的事情办得怎么样？确实是和黑色之翼有关吧？为什么表情这么凝重？说来听听。", 8, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（讲述有关#m200000000#的封印石的事情。）#k", 2, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯。#m200000000#也有封印石啊……这倒是很重要的一个情报。虽说被抢走了很可惜……啊，我倒不是在怪你。没想到黑色之翼这次是有备而来啊。", 8, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……", 2, 1002104, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("振作精神！对，就是这样。#p1201000#这次又解读出来了#b新技能#k。你去#b#m140000000#见见#p1201000#吧#k，正好连#m200000000#的消息也一起带过去。", 0, 1002104)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21740, "");
                                cm.sendNormalTalk("#p1201000#也是事件的相关人，而且对于英雄曾经生活过的那个年代，没有人比#p1201000#更了解，所以应该经常和#b#p1201000#共享情报#k，有事情最好也找他商量。", 0, 1002104, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(140000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21740.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊，很久不见了。战神。这段时间修炼得还好吧？正好我发现了新的技能想叫你回来呢……你回来的正是时候！", 8, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（对#p1201000#讲述有关天空之城封印石的事情。）#k", 2, 1201000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("天空之城封印石啊……原来如此，这下可以肯定黑色之翼的目标果然是封印石，而且封印石不止一个。这是一个很重要的情报。", 8, 1201000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过封印石被抢走了……", 2, 1201000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("黑色之翼从很早之前就已经开始做准备了。这么看来，我们能得到#t4032323#，已经是万幸了。现在对你而言，学习技能更重要。", 0, 1201000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21740, "");
                                cm.forceCompleteQuest(21740);
                                cm.gainExp(7604);
                                cm.sendNormalTalk("现在最重要的就是让你立刻变得强大起来。关于封印石，有我和特鲁大叔关注着呢，战神你还是专心训练吧。", 0, 1201000, false, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};