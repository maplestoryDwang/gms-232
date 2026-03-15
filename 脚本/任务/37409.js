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
            cm.sendNormalTalk_Bottom("#face0#有没有什么感觉？", 37, 3004431, false, true);
            cm.effect_Voice("Voice5.img/CH2/Idea/36", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这个嘛……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊！！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=533534");
                        cm.npc_LeaveField("oid=533534");
                        cm.npc_LeaveField("oid=533535");
                        cm.npc_LeaveField("oid=533535");
                        cm.npc_LeaveField("oid=533536");
                        cm.npc_LeaveField("oid=533536");
                        cm.dispose();
                        cm.warp(993141010, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37409.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -208, 173)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -135, 171);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#看起来即便有王子殿下作陪，我们也并非安全无虞啊。", 37, 3004431, false, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/42", 128)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哈哈……", 37, 3004433, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Carlyle/51", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#擅自触碰圣剑时被剑之守护者当场喝止，\r\n我们该不会就此被驱逐出去吧？", 37, 3004431, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Idea/43", 128)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……不会有事吧。塞伦大人并不是那么不通情理的人。", 37, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/52", 128)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯？你这话认真的吗？", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/44", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那个……嗯……其实我也不敢确定……\r\n就连我的继承权也说不定会到受影响……终归还是太轻率了吗……", 37, 3004433, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/53", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……什么？！", 37, 3004431, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/45", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哈哈，说笑而已。", 37, 3004433, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/54", 128)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(3004437, "oid=536841", -432, 150, 12, -482, -382, 0, true, 700, false);
                                                        cm.npc_SetSpecialAction("oid=536841", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#王子殿下，大事不好了。请您看看这个。", 37, 3004437, false, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Knight/8", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#这是……黑太阳之证物。", 37, 3004433, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("在此向圣地子民宣告。", 0);
                                                                            cm.effect_Voice("Voice5.img/CH2/Loland/31", 128)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("我们是#r黑太阳#k。违逆神明之人。", 1);
                                                                                cm.effect_Voice("Voice5.img/CH2/Loland/32", 128)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4##r黑太阳#k是不信神者的象征？难道……不，应该是巧合吧…… ", 37, 3004431, false, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Idea/46", 128)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("（好像并非只有我能用埃斯佩拉之剑使太阳升起。）", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("这片土地上已经许久没有出现过神明的足迹。", 0);
                                                                                                    cm.effect_Voice("Voice5.img/CH2/Loland/33", 128)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("至今以来，冒用神之名义所进行的所有虚伪行径，我们会尽数予以抵制。", 0);
                                                                                                        cm.effect_Voice("Voice5.img/CH2/Loland/34", 128)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("我们坚信#r神的消亡#k会使人类永享自由。", 1);
                                                                                                            cm.effect_Voice("Voice5.img/CH2/Loland/35", 128)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("在此最终警告诸位，立刻离开塞尔提乌。", 0);
                                                                                                                cm.effect_Voice("Voice5.img/CH2/Loland/36", 128)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("执迷不悟者，将与神的痕迹一并覆亡。", 1);
                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Loland/37", 128)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
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
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#路边到处都是，包括广场告示板，都被这东西贴满了。", 37, 3004437, false, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/CH2/Knight/9", 128)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#间谍们都开始光明正大地活动了吗？看来这场战争已经处于爆发的边缘。", 37, 3004433, true, true);
                                                                                                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/55", 128)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我们已将发现的壁报全数清理。\r\n现在正在寻查目击了张贴壁报者的市民。", 37, 3004437, true, true);
                                                                                                                                                cm.effect_Voice("Voice5.img/CH2/Knight/10", 128)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#我知道了。", 37, 3004433, true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/56", 128)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#还有……有几袋火焰祭司的#r黑火药#k不见了。", 37, 3004437, true, true);
                                                                                                                                                        cm.effect_Voice("Voice5.img/CH2/Knight/11", 128)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#火焰祭司说都是黎明祭司所为，现在闹得不可开交。", 37, 3004437, true, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/CH2/Knight/12", 128)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#嗯……", 37, 3004433, true, true);
                                                                                                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/57", 128)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我还有事要办，请容我先行告退。", 37, 3004433, true, true);
                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/58", 128)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我会向塞伦说明事情原委的，两位不必担心。", 37, 3004433, true, true);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/59", 128)
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
                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
                                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                        cm.forceCompleteQuest(37409);
                                                                                                                                                                                        cm.npc_LeaveField("oid=541081");
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
};