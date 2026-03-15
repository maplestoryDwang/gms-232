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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40304.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你打败了#o2600316#了？噢，你真了不起，果然是块神仙的料……但是你们不应该要成为超越者吗？为什么要成为神仙？", 32, 2440000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哎呦喂，对神仙不感兴趣就算了，干嘛还大喊大叫的。那么……你们还是要做超越者咯。这样的话我就要成为你们的力量……", 32, 2440000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但我还是厌倦了。我能在武陵这么无忧无虑的，干嘛还要和你们在一起。自己的力量靠自力来培养吧，我要在这里打个盹了……Zzzzzz……", 32, 2440000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(睡着了吗……这可怎么办？实在是无法说服他啊？要不我们直接绑架他？)", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊，我事先说好，我睡眠很浅的。可不会随便被人带走。Zzzzz……。", 32, 2440000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face7##b(吓、吓我一跳。他的耳朵这么灵啊？而且反应也很快……但是我们也不能放弃。该怎么办呢？)", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(耳朵那么灵敏……让他睡得更熟可不可以……？)", 44, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face3##b(更熟？给他灌药？话说回来，在第一个理论课程里，#p2440004#不是说需要药物就去找他吗……我们去找#p2440004#让他帮我们做睡眠药，然后直接把这家伙绑走吧。)", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face2##b(万一这个方法失败了，那么下一个……就用这个方法，#p2400006#？交头接耳……)", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(嗯，知道了。就这么做吧。)", 44, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face3##b(不能说服你，还能怎么办？嘿嘿嘿……你乖乖地跟我们走多好？这可不要怪我哦，#p2440000#，不~女神之泪。)", 44, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face3##b(好。那么我们快去找#b陈道人#k吧。)", 44, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.gainExp(2520000);
                                                            cm.forceCompleteQuest(40304);
                                                            cm.dispose();
                                                            cm.warp(324000000, 11, false)
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