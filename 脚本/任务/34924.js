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
            cm.sendNormalTalk_Bottom("#face0#（看到避难处周边的水晶之后，突然恢复了一部分记忆。那也许是我们的希望。）", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#你是说……要是把那个叫动力源的东西装上去，就能像船一样使用了吗……", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#虽然听上去有点难以置信……但世界这么大，有这样的东西存在也不奇怪。", 36, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……这也许是我们所剩不多的希望之一……", 36, 3001508, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#我们会找找看，那个叫动力源的东西……你也会跟我们一起找，对吧？\r\n#b（接受时，移动到#m402000614#。）#k", 36, 3001508)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好吧，在这种时候，就应该去找擅长找东西的朋友帮忙了。", 36, 3001508, 0, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……我会带着维依到有水晶的地方去。我们在那里碰头。", 36, 3001508, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h1;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                        cm.forceStartQuest(34924, "");
                                        cm.dispose();
                                        cm.warp(402000614, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34924.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#维依，看到那个空着的地方了吧？必须在那里装上一个叫动力源的东西，这艘船才能启动。", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……", 36, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#叽勒，叽勒楞……我走近一点，试着捕捉电波，叽，叽勒楞……", 36, 3001510, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#嗯……拜托……一定要找到……今天的占卜结果不坏……应该没问题吧……", 36, 3001508, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#啊，虽然很微弱，但我感知到了某种电波。和这里的电波完全相反的另一种电波……", 36, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#叽，叽勒，但奇怪的是，电波好像分散在各处。也许是因为探测器太旧了，叽勒。", 36, 3001510, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#有的在很近的地方……有的在很远的地方，叽，叽勒楞……嘿，嘿，就只能感测到这些了……", 36, 3001510, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(34924);
                                        cm.gainExp(1997);
                                        cm.updateInfoQuest(34924, "exp=1;e1=1");
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
};