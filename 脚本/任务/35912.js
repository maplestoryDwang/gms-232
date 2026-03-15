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
            cm.sendNormalTalk_Bottom("#face6#不是全都逃走了吗？你为什么会在这里？", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#勇士……你带在身上的东西,我看到了。\r\n那个东西……跟村外的废墟有什么关系吗？", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那又怎样？", 36, 1013358, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#我们卡鲁帕害怕废墟。\r\n因为会听到轰隆隆……咣当当的奇怪声音。", 36, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#怪声越来越严重,但我们卡鲁帕能做的事情……\r\n就是虔诚地举行祭典。", 36, 1013350, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#谁也不想去弄清楚废墟中到底发生了什么事。\r\n因,因为害怕。", 36, 1013350, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#呃啊……光是想想,就浑身发抖。\r\n但,但是总不能一直这样下去。", 36, 1013350, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#必须有人……站出来,解决这件事。\r\n但是我太害怕了……勇士,你看上去好像很强……", 36, 1013350, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#所以,你到底想说什么？", 36, 1013358, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#啊,我……我想说的是……\r\n那个……嗯……要是你不嫌弃我是个笨蛋,又很胆小……", 36, 1013350, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#勇士,请你带我去一起去进行调查！", 36, 1013350, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哦,你又能帮上什么忙呢？", 36, 1013358, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#那,那个……我也能帮上忙。虽然我不擅长战斗……\r\n但是对村子周围的地形很熟悉。", 36, 1013350, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#还有……我认识一个长得有点奇怪,但很聪明的朋友……", 36, 1013350, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那个人……叫高尔根。他是个怪人,一直在村外观察废墟。\r\n他的爱好是收集各种奇怪的东西。", 36, 1013350, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.askAcceptDecline_Bottom("#face0#去找那个家伙,说不定能知道一些有用的东西。\r\n嗯……我可以把你介绍给高尔根。", 36, 1013350, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##b(虽然不喜欢跟人同行,但还是跟过去看看吧。\r\n说不定可以获得什么情报。)#k", 36, 1013358, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face6#我最讨厌跟人在一起。调查结束之后,不许再缠着我。", 36, 1013358, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#啊,你的意思是……愿意带我一起去,是吗？\r\n谢谢你,勇士。我会尽量不给你添麻烦的。", 36, 1013350, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(35912);
                                                                                        cm.gainExp(1785);
                                                                                        cm.gainExp(33);
                                                                                        cm.askAcceptDecline_Bottom("#face2#好的,我马上把你带到高尔根那里去。\r\n请跟我来,嘿嘿。向着高尔根家,出发～！", 36, 1013350, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceStartQuest(35913, "");
                                                                                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h1;17=h0;09=h0;19=h0");
                                                                                            cm.setPartner(1, 1013350, 80002700, 0);
                                                                                            cm.OnStartNavigation(100051030, 0, "", 35913);
                                                                                            cm.dispose();
                                                                                            cm.warp(100051021, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35912.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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