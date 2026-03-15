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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -930, 190)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -932, 165);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("难道……", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/novasmile1", 100);
                            cm.sendNormalTalk_Bottom("#face0#咳咳……", 37, 3003766, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction20.img/effect/BM2_novaSmile/0", 0, 500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("可是报警器没有响。也没有任何人联系我。", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("是都来不及用吗……？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#请等一下。", 37, 3003766, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#什么都做不了的无能者。就算拼命蹬腿也只是在原地挣扎的可怜虫。", 37, 3003766, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("你在说什么……其他人怎么样了！", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这段时间你都做什么了？\r\n拼命挣扎让大家接二连三的消失？", 37, 3003766, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#大家因为相信你才来到这里，连旁边的区区一个人都救不了，还想要去拯救世界？", 37, 3003766, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("你说的太过分了！消失的人我一定会去找……", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#因为你的一句话，就相信并跟着你一路走来的人怎么办？\r\n因恐惧瑟瑟发抖的那些被留下的人呢？", 37, 3003766, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("果然是你对他们下的手！前面消失的两个人，还有在迷宫里消失的人！\r\n他们都是遭到了你的毒手，不是吗？！", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#不……都是因为#r“你”#k。", 37, 3003766, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你说……什么？", 57, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#是你把大家带到这里的。是你让大家走散的。是你把大家逼入绝境的。", 37, 3003766, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#大家都捧着你，你真以为自己很能耐了？\r\n连旁边的人都救不了的你？", 37, 3003766, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("你给我……闭嘴！", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#不管你怎么挣扎……都无法逃脱……\r\n#b因为你已经深陷泥淖了……#k", 37, 3003766, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#为了逃离而拼命挣扎，只会让你陷得更深，更快被吞噬。", 37, 3003766, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊，你什么都不做，也不会有任何改变。", 37, 3003766, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("吵死了！我……", 57, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##r因为无能又懦弱的你在这里什么都做不了！#k", 37, 3003766, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("闭嘴！！！！！！！！！！", 57, 0, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h4;09=h0");
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/novadisappear", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h6;09=h0");
                                                                                                                                                                        cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h6;15=h1;09=h0");
                                                                                                                                                                        cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0");
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/novasmile2", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("呼哧……呼哧……", 57, 0, false, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("啊？", 57, 0, false, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("我……我攻……攻击了他……？不……不是的……", 57, 0, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("消失了？", 57, 0, false, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("这是……现实……？还是幻影……？", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("到底……发生什么事了……", 57, 0, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("……只剩……我……一个人了吗……？这里……？", 57, 0, false, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1##h0#……救救我们……", 37, 3003767, false, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                            cm.setAmbience("SoundEff.img/BM2/voiceBstand", 100, 60);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/22"], [0, -730, 140, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2600)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/23"], [0, -730, 140, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2800)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.playSoundEffDirectly("SoundEff.img/BM2/voiceBstand");
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm49/SecretLabyrinth", 0, 0);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
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
                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                cm.forceCompleteQuest(35709);
                                                                                                                                                                                                                                                                cm.gainExp(170671356);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35709.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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