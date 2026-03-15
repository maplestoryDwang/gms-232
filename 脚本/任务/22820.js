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
            cm.sendNormalTalk_Bottom("圣地来信了，好像是很重要的内容。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("圣地的话……", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("是冒险岛世界的#b女皇#k所在的地方，\r\n看来你的名声也挺响的嘛。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("哦，那难道是地位很高的人吗？\r\n也对，我是在冒险岛世界上表现得挺活跃的。", 37, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.askYesNo_Bottom("你最好亲自去看看信的内容。\r\n如果你答应，我就可以立刻送你去这里。", 36, 1531004)
                        } else {
                            if (status === b++) {
                                cm.forceStartQuest(22820, "");
                                cm.dispose();
                                cm.warp(101020400, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22820.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
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
            cm.sendNormalTalk_Bottom("这就是那封信。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("嗯，让我看看。", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_Monologue("黑魔法师的威胁日渐严重,  \r\n为此我认为,  光靠我们骑士团是很难对付的……", 0)
                    } else {
                        if (status === b++) {
                            cm.inGameDirectionEvent_Monologue("我们要借助冒险岛世界诸多勇士的力量和智慧. ", 1)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_Monologue("超能力者,  虽然你到底是什么人我还无从得知,  \r\n但是你的强大和正义之举已经传遍了整个冒险岛世界. ", 0)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_Monologue("希望你能助我们一臂之力,  \r\n为了对抗黑魔法师,  我们需要你的力量. \r\n\r\n-希纳斯女皇", 1)
                                } else {
                                    if (status === b++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("哎哟，希纳斯？\r\n难道就是那个希纳斯吗？", 37, a, false, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("你知道希纳斯女皇吗？", 37, 1531004, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face2#你说是女皇？那个希纳斯？\r\n噗哈哈！", 37, a, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("这么说来，你曾经说过冒险岛世界和我们世界有着紧密的因果关系吧。", 37, a, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("#face2#我在隔壁学校曾经见过几次，\r\n我们世界的希纳斯分明……", 37, a, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                                    cm.sendNormalTalk_Bottom("什么？两个学校的会议？", 37, 1530060, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#没错，\r\n而且不是普通会议，而是大规模会议。", 37, a, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#每次都只组织小规模的会议多腻啊？\r\n神兽国际学校X私立英才学校，我们打算开个疯狂派对，怎么样？", 37, a, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你当学校是什么？\r\n怎么能接受这样的提议……", 37, 1530070, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#哎哟，#h0#，这个想法真的不错呢！\r\n既然如此，要是能有华丽的照明和音乐就更棒了。", 37, 1530060, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#哦，这个点子不错，\r\n我来负责邀请夜店DJ和特邀歌手。", 37, a, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("我喜欢那个歌手，\r\n最早是在街边卖唱，后来还登上了公告牌榜单的，那个名字叫什么来着，甘……甘……", 37, 1530060, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#DJ 甘迪？\r\n只要给我很熟的哥哥啊。打个电话就能邀来。", 37, a, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#好的！地点最好是野外泳池，\r\n天这么热，这样就可以随时跳入水中了。", 37, 1530060, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#哈哈，这个点子可真是赞爆了呢？\r\n不过会有能开这种派对的泳池吗？", 37, a, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#哎哟，没关系的，\r\n买个水上公园就可以了。", 37, 1530060, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#希纳斯小姐，\r\n预算……", 37, 1530070, true, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#南哈特，别担心，\r\n最近我出于兴趣爱好投资了黑色之翼娱乐公司，股价长了百分之三百呢，卖了那个就行了。", 37, 1530060, true, true)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#哈哈，这么火辣，很不错啊？", 37, a, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#呵呵呵，你过奖了。", 37, 1530060, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#…………", 37, 1530070, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.eventSKill(0);
                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#……好吧，没想到你和我这么聊得来。\r\n这个世界的希纳斯好像还挺一本正经的。", 37, a, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.askYesNo_Bottom("怎么样，现在就立刻前往吧？\r\n#b(答应就自动前往)", 36, 1531004)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.setNumberForQuestCustomData(913050010, "101020400");
                                                                                                                                                    cm.forceStartQuest(1507, "");
                                                                                                                                                    cm.forceCompleteQuest(22820);
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(913050000, 0, false)
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