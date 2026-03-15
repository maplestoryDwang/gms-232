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
            cm.sendNormalTalk_Bottom("#face0#对了，你为什么会跑到这里来呢？ ", 36, 3004653, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我……", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（拿出#b#i4036638# #r#t4036638##k，说明来这里的原因。）", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这个无线电发射机是贝尔大叔的东西。是他最心爱的东西……", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004653, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我要去看看贝尔大叔。\r\n把无线电发射机还给他，顺便商量一些事情。", 36, 3004652, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0#勇士，你也和我一起去吗？", 36, 3004652, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#拉索尔，见到#b贝尔#k之后，要有礼貌一点。\r\n别忘了他是我们所有人的恩人，是高贵的圣人。", 36, 3004653, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#收集点鼠肉带过去，他一定会很高兴。", 36, 3004653, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#好的，我记住了。", 36, 3004652, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004653, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我再说一遍，一定要恭敬点……", 36, 3004653, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好了，勇士，我们走吧！这边！（哒哒哒！）", 36, 3004652, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(37603, "");
                                                                cm.updateInfoQuest(37600, "02=h0");
                                                                cm.updateInfoQuest(37600, "02=h0;09=h1");
                                                                cm.OnStartNavigation(450014060, 1, "3004609", 37603);
                                                                cm.sendNormalTalk_Bottom("#face0#……", 36, 3004653, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("“贝尔”好像是刚才T-boy提到的人……到底是个什么样的人呢？", 56, 0, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#贝尔大叔吗？他和你一样是地上来的人。\r\n原来的故乡是一个叫#b好友世界#k的地方，但是和这座城市一起被吸到了这里。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("从好友世界来的……？\r\n但是刚才那位老人家为什么说他是恩人呢？", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那是过去#rT-boy#k第一次出现，把所有人驱离地面时的事情了。", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#贝尔大叔教会了其他人生存技能。\r\n大家能在这里重建家园，学会筹集粮食的方法，全都要感谢贝尔大叔。", 36, 3004652, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("生存技能？好友世界的人？", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你看这个。", 36, 3004652, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##b#i4036636# #r#t4036636##k\r\n\r\n作者：贝尔·葛朗斯   发行：生活出版社\r\n#fnNanum Gothic ExtraBold#作者寄语：对幸存者而言，最重要的不是技术，也不是知识。\r\n而是#b强烈的求生意志#k。", 36, 3004652, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊……", 56, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#所以遇到麻烦的时候，大家都会去找贝尔大叔。", 36, 3004652, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#至于我嘛……是因为别的原因。", 36, 3004652, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("别的原因？", 56, 0, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#等到了之后，我就会给你看。", 36, 3004652, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(37603);
                                                                cm.gainExp(8782820);
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
};