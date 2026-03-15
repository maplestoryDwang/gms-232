var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("我分析过你昨天对付的那些东西了，但实在是搞不清楚那是什么。\r\n最为接近的应该就是鬼、幽灵那一类的吧。", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("搞不清楚这一点确实有点可惜，不过应该能抓到一点线索吧，\r\n还有不管那是什么，有多少，我都会去对付的。", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("你这自信心倒是挺好的……\r\n你好像离我太近了，希望你能带着那只猫离我稍微远一点。\r\n它的脚掌……你是消过毒之后再摸的吧？呃……", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("还有，我是看你好像还挺喜欢那些奇怪的幽灵才告诉你的，\r\n我又发现了另一条和昨天相似的暗号。", 37, 1531001, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("好啊，那今天就再去看看吧？", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("等下，凯内西斯。\r\n在这之前我有话要说。", 37, 1531001, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#你，昨天的事情，你有些事情没有告诉我吧，\r\n虽然只是很短的片刻，但是我们的通信曾经断过，\r\n那时候我检测到你的ESP限制器有异常反应。", 37, 1531001, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.askMenu_Bottom("#face0#在学校里到底发生了什么事情？\r\n#b#L1#如实说出自己晕过去的事情#l\r\n#L2#说谎#l", 37, 1531001)
                                    } else {
                                        if (status === b++) {
                                            if (selectionLog[status] == 1) {
                                                cm.sendNormalTalk_Bottom("我一时失去了意识，而且我也无法控制自己的能力了，估计是因为我身体状态不是很好吧。", 37, a, false, true)
                                            } else {
                                                cm.sendNormalTalk_Bottom("没什么事情，你不同太担心的。", 37, a, false, true)
                                            }
                                        } else {
                                            if (status === b++) {
                                                if (selectionLog[status - 1] == 1) {
                                                    cm.sendNormalTalk_Bottom("#face0#如此说来可就危险了，今天最好还是不要出行……", 37, 1531001, true, true)
                                                } else {
                                                    cm.sendNormalTalk_Bottom("#face0#……真的吗？你不会对你的搭档说谎了吧？", 37, 1531001, true, true)
                                                }
                                            } else {
                                                if (status === b++) {
                                                    cm.curNodeEventEnd(true);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(true, false, true);
                                                    cm.setStandAloneMode(true);
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/news_01", 100);
                                                    cm.getTopMsgFont("新闻速报,  在都市MS镇地铁历史上,  ", 3, 20, 20, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                } else {
                                                    if (status === b++) {
                                                        cm.getTopMsgFont("这是第一次有来历不明的生物对所有居民发动攻击. ", 3, 20, 20, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.getTopMsgFont("目前正在发生,  请附近居民小心外出. ", 3, 20, 20, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face0##fs30#！！", 37, a, false, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/news_02", 100);
                                                                    cm.getTopMsgFont("再说一遍,  目前正在发生,  ", 3, 20, 20, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                        cm.getTopMsgFont("MS镇附近居民请小心外出. ", 3, 20, 20, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.setStandAloneMode(false);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.askMenu_Bottom("#face1#……凯内西斯，状况很危险，你还要去吗？\r\n#b#L1#我得去救出深陷危机的人们#l\r\n#L2#我要查出我能力的根源#l\r\n#L3#我要尽情享受我的能力#l", 37, 1531001)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.updateInfoQuest(22730, "done=" + c);
                                                                                if (c == 1) {
                                                                                    cm.addTrait("领导力", 50);
                                                                                    cm.sendNormalTalk_Bottom("你没听到吗？怪物现在正在明目张胆地攻击人，我得救出这些人。", 37, a, false, true)
                                                                                } else {
                                                                                    if (c == 2) {
                                                                                        cm.addTrait("洞察力", 50);
                                                                                        cm.sendNormalTalk_Bottom("怪物很可能跟我的能力有什么关系。我得查出我能力的根源。", 37, a, false, true)
                                                                                    } else {
                                                                                        cm.addTrait("感性", 50);
                                                                                        cm.sendNormalTalk_Bottom("你没听到吗？有怪物出现了，我要尽情享受我的能力了。", 37, a, false, true)
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……好吧，既然你执意如此，\r\n我也会尽可能地支援你的。", 37, 1531001, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#b(赶紧去地铁吧。)#k", 37, a, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1");
                                                                                            cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=0;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1");
                                                                                            cm.forceStartQuest(22730, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22730.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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