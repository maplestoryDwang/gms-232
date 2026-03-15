var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face13#如果她经过了这里，一定会留下什么痕迹……", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……喂，江？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#应该不会没有痕迹啊……到底在哪儿呢……", 36, 3003480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#fs22#江！#fs16#", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#啊，吓了我一跳。", 36, 3003480, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("别光一个人闷头想，跟我说说嘛。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#这里应该会留下她的痕迹。\r\n问题是在哪里才能找到那个痕迹。", 36, 3003480, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("为了前往下一地区的线索，必须找到塔纳的痕迹。\r\n而为了找到那种痕迹，又必须寻找其他线索吗？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#没错，我们要找到线索的线索。", 36, 3003480, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("……我们真的能到下一地区去吗……？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#先试试看吧。总比什么都不做好。\r\n只要努力去寻找，就一定会有进展。", 36, 3003480, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face13#在那天的特鲁埃博没能找到痕迹。\r\n但是她已经去了莫拉斯。", 36, 3003480, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#到她原来所在的研究室去看看吧。那里也许可以找到什么线索。", 36, 3003480, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你先出发吧！我马上就跟过去。", 36, 3003480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(34233, "");
                                                                    cm.updateInfoQuest(34245, "71=h1;75=h0;69=h0");
                                                                    cm.OnStartNavigation(450006240, 1, "3003471", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face13#那里是她停留最久的地方。留下的记忆一定最强烈。", 37, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#或者，她已经离开了这里。", 37, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这里……禁止闲杂人等入内。", 37, 3003481, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [1000, 0, -120, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.gainSkillBuff(80000514);
                            cm.sendNormalTalk_Bottom("你是谁！", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(34233);
                                cm.updateInfoQuest(34271, "02=h0;20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
                                cm.updateInfoQuest(34245, "71=h1;75=h0;69=h1");
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                cm.dispose();
                                                cm.warp(940204302, 0, true);
                                                cm.setStandAloneMode(false);
                                                cm.setInGameDirectionMode(false, true, false)
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