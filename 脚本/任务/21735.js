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
            cm.sendNormalTalk("#t4032323#我已经找到了。你看，呵呵呵。#i4032323#", 8, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("！！……你怎么找到的？！", 2, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("上次被人偶师攻击后，我动员了所有的情报网搜遍了整个金银岛。我怎么可能坐以待毙？一定要抢在他们前面找到他们想要的东西……也算是报了上次一箭之仇。", 0, 1002104)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过，黑色之翼的家伙们已经认识我了，我再拿着这个恐怕不太安全。英雄大人拿着它走来走去，弄丢了也不好……要不还是交给#b#p1201000##k保管吧。", 1, 1002104, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4032323, 1);
                            cm.sendNormalTalk("#m140000000#岛上一直都只有#m140000000#一族生活。为了不让其他人类接近，他们在岛上设置了各种咒术。黑色之翼要想找到他们恐怕没那么容易。请把这个交给#p1201000#。", 1, 1002104, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我打算以后不再让你去做收集情报的工作了，你现在已经对冒险岛有了一定的了解，现在也是时候自己去积累经验了吧？", 1, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("不过我打算集中全力，去收集与黑色之翼相关事件的情报，更何况，#b关于那个封印石也有必要继续打听，如果有什么消息，我会联系你的#k。日后再见，英雄。\r\n#b（接受时前往里恩）#k", 0, 1002104)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.forceStartQuest(21735, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21735.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("黑色之翼的动向，我已经从真相叔叔那里听说了。听说前不久还被他们袭击了一次……你还好吧？咦？这个……这就是#t4032323#吗？没想到真相叔叔果然比那些家伙们早一步找到#t4032323#。", 0, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("不知道这颗宝石到底有什么用……只知道这个东西肯定和黑魔法师有关。既然那些家伙在找这个东西，我们一定要保护好这个东西。看来不论发生什么，你都要不断地变得更强，才行。", 0, 1201000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("黑色之翼……他们的阴谋还没有结束。特鲁大叔拜托你继续调查黑色之翼。也请你继续你的修炼吧。", 0, 1201000, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(4032323, -1);
                        cm.sendNormalTalk("好久不见了，英雄。这段时间等级上升很快嘛？看来你确实很拼命地在修炼啊。很勤奋。有点英雄的架势了。#p1201000#也会为你开心的吧？", 0, 1002104, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对了，现在不是说这些的时候。我觉得光在金银岛搜集情报似乎情报面太窄，为了拓宽情报面，我已经开始在奥西利亚大陆展开搜索。一开始就选择了#b#m200000000##k，没想到那里果然有问题。", 0, 1002104, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("在神秘岛大陆的#m200000000#，好像正在发生着什么非比寻常的事。虽然不同于人偶师出现的时候，但总感觉这种奇怪的氛围一定和黑色之翼有关。怎么样，好久没遇到过这么大的事件了。会不会很激动呢？", 0, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("那么你准备好了吗？#b#e如果你接受的话，我就马上将你送往#m200000000##k#n，你找到#p2012012#，向他询问发生在#b#m200000000#的奇怪事情…………#k是怎么回事就行了。", 0, 1002104)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(6037);
                                        cm.forceStartQuest(21735, "");
                                        cm.forceCompleteQuest(21735);
                                        cm.forceStartQuest(21736, "");
                                        cm.dispose();
                                        cm.warp(200000000, 0, false)
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