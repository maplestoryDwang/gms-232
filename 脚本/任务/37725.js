var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 692, 109);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 860, 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.gainSkillBuff(80000268);
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
                                    cm.sendNormalTalk_Bottom("#face0#比刚才更大的花……", 36, 3004754, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊，这鬼地方真让人不舒服。", 36, 3004735, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（这里诞生的东西好像已经离开这里很久了。周围没有留下一丝痕迹。）", 56, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这朵花比刚才那朵大得多……一定也比刚才那个强得多吧？", 36, 3004754, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("也许……", 56, 0, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_NormalSpeechBalloon("吱……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004723, null, cm.getPlayer().getId());
                                                            cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（心里还是感觉忐忑不安。有人利用已经消失的怪物的艾尔达，制造出了其他的存在，并且试图操纵他们……）", 56, 0, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（刚才那个只是因为诞生没多久，无法很好地控制力量，但确实可以感觉到体内潜藏的力量。）", 56, 0, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（今后也许还会发生类似的事情。要是那些诞生出来的人成为我们的敌人……）", 56, 0, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#呃……我不想再待在这里了……", 36, 3004754, false, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我们快回去吧。帮其他人把恶心的纽扣摘下来！", 36, 3004754, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#回去的路上，别忘了带上姆皮。", 36, 3004754, true, true, 1)
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
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.askAcceptDecline_Bottom("#face0#好了，我们回村里去吧。\r\n#(接受时，立即移动.)#k", 36, 3004754, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（暂时不能告诉联盟……）", 57, 0, false, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（没办法，只能走一步看一步了。）", 57, 0, true, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.forceStartQuest(37725, "");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h2;03=h0;80=h1;23=h1;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;80=h1;23=h1;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;80=h1;23=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;80=h1;23=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;80=h0;23=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h2;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h2;81=h0;05=h2;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h2;81=h0;05=h2;82=h1;06=h0;26=h0;07=h0;27=h2;08=h0;09=h0;29=h0");
                                                                                                                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h2;81=h0;05=h2;82=h1;06=h0;26=h0;07=h0;27=h2;08=h0;28=h1;09=h0;29=h0");
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(450015060, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37725.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.fieldEffect_PlayBGM("Bgm54/MushbudForest", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 831, 48);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 463, -10)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
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
                                cm.sendNormalTalk_Bottom("#face0#哦……你就是我等待已久的命运中的另一半。", 36, 3004757, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不愧是等了我这么久的人，果然气度非凡。", 36, 3004756, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#没想到有这么多有趣的人，早知道就早点来看看了，喵呜！", 36, 3004735, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#刚才你说喵呜？", 36, 3004757, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#好像是喵呜。", 36, 3004756, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我很喜欢你。", 36, 3004757, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我也很喜欢。", 36, 3004756, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#呵呵，你们可以随时到啾啾村来玩。我会永远为你们敞开大门。大家就像邻居一样，不是吗！喵呜！", 36, 3004735, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那些家伙……是在演戏吗……瑞昂还挺配合的……", 56, 0, false, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#哈哈……", 36, 3004754, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（原来的皮埃尔做事也很积极……虽然不是什么美好的回忆。）", 56, 0, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（要是真的亲眼见到，也许又会想起过去的回忆，不知道会怎么样……）", 56, 0, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#卡斯特！让我们来一场舞会吧！", 36, 3004757, false, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#舞会时间终于到啦！", 36, 3004754, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction25.img/YumYumS/party/party", "animation", "", "3"], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（一定都会好起来的吧？）", 56, 0, false, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_取消复合图片动画("3", 100, 0);
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
                                                                                                                                                    cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h2;80=h0;23=h0;04=h2;81=h0;05=h2;82=h1;06=h0;26=h0;07=h0;27=h2;08=h0;28=h0;09=h0;29=h0");
                                                                                                                                                    cm.forceCompleteQuest(37725);
                                                                                                                                                    cm.gainExp(11264558);
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
};