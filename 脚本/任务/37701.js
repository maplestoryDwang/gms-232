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
            cm.sendNormalTalk_Bottom("#face0#你好，#h0#！喵呜！", 36, 3004735, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("找我有事吗……？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，那个嘛……", 36, 3004735, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("出什么问题了吗？", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呵呵呵，你还挺机灵的嘛，喵呜！\r\n应该是因为口味很奇怪，所以才会那么敏感吧。", 36, 3004735, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（那好像完全扯不上边吧……）", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#等见面再说吧。我还有事要拜托你。\r\n#r（接受时，立即移动。）#k", 36, 3004735, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那我等你！喵呜！", 37, 3004735, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(37701, "");
                                            cm.updateInfoQuest(37700, "26=h1");
                                            cm.dispose();
                                            cm.warp(993176800, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37701.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#哦，来了吗，#h0#！动作很快嘛，喵呜！", 36, 3004735, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#因为要绕过鲸山，我还以为会很久呢。", 36, 3004735, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那我就单刀直入了。", 36, 3004735, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(37701);
                        cm.gainExp(11264558);
                        cm.sendNormalTalk_Bottom("#face0#在啾啾村后面，在鲸山的另一边，有一片蘑菇们茂盛生长的森林。", 36, 3004735, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#因为距离很远，这里的居民们很少会去那里。", 36, 3004735, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#但是几天前……", 36, 3004735, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.setInGameDirectionMode(true, false, false);
                                    cm.setStandAloneMode(true);
                                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                    cm.setNPC_Fadein(3004726, 1);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#今天又是和平的一天，喵呜！", 37, 3004735, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=0"], [0, 469, 60, 1, 0, 1, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/sound", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(9000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#咦，这是什么声音……？", 37, 3004735, false, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                            cm.setNPC_Fadein(3004726, 0);
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm46/ChewChew MainTheme", 0, 0);
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
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.sendNormalTalk_Bottom("#face0#我还以为啾啾岛会整个沉掉呢！", 36, 3004735, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在虽然没事了……但居民们还是非常不安，喵呜！", 36, 3004735, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#所以我才会叫你过来。", 36, 3004735, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#希望你能去真香岛确认一下到底是谁发出了那种声音，\r\n以及在啾啾岛上会不会发生什么问题。", 36, 3004735, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.askAcceptDecline_Bottom("#face0#怎么样？你能帮我这个忙吗？", 36, 3004735, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那就拜托你了！\r\n如果需要我的帮助，就大声#b叫我的名字！#k喵呜！", 37, 3004735, false, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.forceStartQuest(37702, "");
                                                                                                                        cm.updateInfoQuest(37700, "26=h0");
                                                                                                                        cm.OnStartNavigation(450002025, 0, "out00", 37702);
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
                        }
                    }
                }
            }
        }
    }
};