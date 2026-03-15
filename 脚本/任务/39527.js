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
            cm.sendNormalTalk_Bottom("#face7#无脸怪就是之前在你肚子里的那个家伙？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#不是怪物，是那家伙落下的包里有什么东西。", 36, 3001651, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（那个#k#b#p3001634##k#fc0xFFbfbfbf#？刚刚#k#fc0xFFbfbfbf##p3001609#在#k#r#m410000200##k\r\n#fc0xFFbfbfbf#铁柱家门口走之前落下了，不如去调查看看？)#k", 36, 3001674 + cm.getPlayer().getGender())
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（里面肯定都是些微不足道的赃物……\r\n当真会有和饕餮有关的东西吗？）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(39527, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39527.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(拾起无脸怪掉落的背包，查看了里面的东西，\r\n那里面全都是偷来的驱邪人偶。)", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#这个人偶……不就是那个德高望重的俊秀法师分发给大家的人偶嘛？说是会帮忙抵挡厄运，\r\n这里面为什么会有怪物的气息……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这种人偶是家家户户都会挂的吗？\r\n难怪我在整个村里都感受到了气息，原来就是这个啊………。", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#所以你知道怪物在哪儿？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这……只要找到当事人自然就能知晓了。", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face7#为什么……到底为什么会在寺院里做出这种勾当……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 2);
                                        cm.fieldEffect_Hero9(0, 2000);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                            cm.setAmbience("Ambience.img/bell2", 200, 60);
                                            cm.fieldEffect_Hero9(100, 1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            cm.effect_Text(["#fn黑体##fs18#此刻，俊秀法师的寺院"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0])
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#不出所料……果然和这座寺院有关。", 36, 3001653, false, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/1", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#！？", 36, 3001653, true, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/2", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#看来不知从哪儿飞进来一只苍蝇呢。", 36, 3001661, true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/3", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#老实点，反正你很快就会沦为俊秀法师的养分……", 36, 3001661, true, true);
                                                            cm.effect_Voice("Voice5.img/hoyoung/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/4", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.playSoundEffDirectly("Ambience.img/bell2");
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm53/CheongUn", 0, 0);
                                                                            cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                                                            cm.forceCompleteQuest(39527);
                                                                            cm.gainExp(373);
                                                                            cm.gainExp(3013);
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.eventSKill(0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
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
};