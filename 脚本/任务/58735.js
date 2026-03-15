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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58735.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58735.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##h0#，辛苦你了。你带回金之五行了吗？", 37, 9111000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是的……这是金之五行。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#谢谢你，真的非常感谢。旁边那个跟你一起来的男人是谁？", 37, 9111000, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("\r\n#L0#他是我的同伴。#l\r\n#L1#他是妖鬼。#l", 56, 0)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(58710, "1=6;2=15");
                            cm.teachSkill(80011294, -1, 0);
                            cm.getTopMsgFont("棘鬼记住了你的话。", 3, 20, 8, 0, 0);
                            cm.sendNormalTalk_Bottom("他是我在寻找五行的途中遇到的同伴，帮了我很多忙。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#姐姐！我来介绍吧。棘鬼是妖鬼！", 37, 9111001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#什么？……你说什么……？你竟敢把妖怪带来这里……？", 37, 9111000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("(糟糕！这个怎么能直说啊……) ", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#棘鬼不是普通的妖怪。是他帮助我们弄到了金之五行。", 37, 9111001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你……说去散步是骗我的。你到底有没有脑子啊？哦？要是这途中！又晕倒了怎么办……", 37, 9111000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我到底是为了谁才这么厚着脸皮拜托别人！！", 37, 9111000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#对不起姐姐……可是……", 37, 9111001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#别说了，我不想听你的解释。以后你哪儿也不准去。现在马上给我回祠堂。还有#h0#你！", 37, 9111000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("额，……你说……巫女。", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#以后请你看着竹野子，不要让她出去乱跑。", 37, 9111000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#还有，跟你一起来的妖鬼……我可以让他留下来，条件是帮我监视竹野子。", 37, 9111000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#啊……啊啊！好，没问题。哈哈，以后请多多关照哦。", 37, 9111011, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(58735);
                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
                                                                                cm.forceStartQuest(58702, "appear");
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
};