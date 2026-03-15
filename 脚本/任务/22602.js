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
            cm.sendNormalTalk("主人～你看，我又长大了。", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b哇，你怎么这么大了……啊！声音都变了。", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵～是吗？怎么样？很帅吧？", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b嗯！帅呆了！我之前也发现了，龙每次都会长很多。是因为会蜕皮，所以才会这样的吗？", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，新的鳞片长出来之后，就必须把原来的鳞片全部脱掉。人类的话……身体长大之后，就要做新衣服，就是这种感觉。", 0, 1013000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b好像因为是新长出来的鳞片，看上去非常闪亮。", 2, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嘿嘿，是吗？", 0, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(虽然个头长大了，但可爱的语气还是老样子……)", 2, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("但是主人，你看看这个。\r\n#i4032502#\r\n这是我脱下来的一片鳞片，只有它在闪闪发光。其他鳞片全都因为失去了力量而碎裂了。只有这个鳞片好像还保存着我的力量。这个东西应该能用来做什么吧？", 0, 1013000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b嗯？可以用来干什么呢？", 2, 1013000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("虽然人类没有角，没有鳞片，没有爪子，也不会喷火，但是人类可以制作有用的东西，不是吗？用它做材料制作东西，你说好不好？这是我的鳞片，所以非常坚硬。其中还含有我的力量，应该可以使主人的力量变得更强。", 0, 1013000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b哇，好像是的。米乐你真了不起！你什么时候变得这么聪明的！", 2, 1013000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("嘿嘿，我和你在一起这么久，对人类已经很了解了。这种事情是小意思。", 0, 1013000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askAcceptDecline("来，主人，这是我的鳞片。以你的力量，一定可以用它制作出很棒的东西。", 0, 1013000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(22602, "");
                                                                    cm.forceCompleteQuest(22602);
                                                                    cm.sendNormalTalk("#b(从#p1013000#那里获得了蓝色双角龙的鳞片。神奇的是，鳞片刚放到手里，就马上变成了#i1142156#。)", 2, 1013000, false, false)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.gainItem(1142156, 1);
                                                                        cm.forceStartQuest(29938, "");
                                                                        cm.forceCompleteQuest(29938);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22602.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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