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
            cm.sendNormalTalk_Bottom("我名为剑斗。听说在天空之城附近出现了一些可疑人士，射手村的赫丽娜又让我直接来见斯皮罗纳你，所以我才会来到这里。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哦……你是赫丽娜介绍来的？对了，你所说的可疑人士究竟是些什么样的人啊？", 37, 2032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("他们的服装风格和我差不多，不过都是以黑色为主色调……这类衣服在冒险岛非常少见，如果曾经见过他们，应该不难记住。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#看来你是找对人了。没错，你说的这些人确实出现在了这一带。不过，我并不清楚他们究竟是什么来头。反倒是听说，在金银岛新出现了一个非常可靠的冒险者，这个人说的应该就是你吧。如何呢，你要不要亲自调查一下这些人呢？", 37, 2032001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#他们……是不是正在准备进行某种仪式啊？在他们之中，还有一个和你的着装打扮完全相同的黑衣长发男人。", 37, 2032001, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这个人……难道是明智光秀！？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我也不知道他们会在那边停留多久。如果你想知道他们是什么人，最好尽快赶过去。", 37, 2032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.OnStartNavigation(200050001, 0, "in00", 0);
                                        cm.forceStartQuest(57133, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57133.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo_Bottom("#face0#好了，你有没有得出什么结论呢？", 37, 2032001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("果不其然，这次的阴谋也和织田军有关。但和之前不同的是，这一次他们是运用阴阳术对魔物们造成了间接的影响，所以魔物身上没有留下丝毫的痕迹。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，你是不是认识那些穿着黑色衣服、打扮得好像兔子一样的人啊？他们似乎正和织田军的阴阳师一起在进行着仪式……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#穿着黑色衣服，打扮得好像兔子一样的人！？这些人可是黑色之翼的手下啊。黑色之翼是个企图让暗黑魔法师复活的邪恶组织。也就是说，黑色之翼与织田军联手了？这下可糟糕了。", 37, 2032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("看来，我也要尽快将这件事告诉给伙伴们知道才行。谢谢你帮了我这么多。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哼，你还挺懂礼貌的嘛。我也要谢谢你，感谢你帮忙击退了那些在我家附近引发问题的家伙。好了，你也要多加小心啊。", 37, 2032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(57133);
                                    cm.gainExp(5531);
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