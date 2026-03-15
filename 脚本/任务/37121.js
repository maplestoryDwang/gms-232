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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(3004024, "oid=7159853", 600, 113, 7, 550, 650, 1, true, false);
            cm.npc_SetSpecialAction("oid=7159853", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -35, 97);
            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -18, 100)
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
                        cm.sendNormalTalk_Bottom("#face1#那么真的结束了吗？我们还活着？", 37, 3004002, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是的，我们活下来了。不过让塞妮娅跑了。", 37, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#稍后她搭乘的飞艇将脱离卫星轨道。", 37, 3001259, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#那有什么关系！只要我们活着就行了。", 37, 3004002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#但是……这是什么声音？", 37, 3001259, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.setAmbience("SoundEff.img/ark/flare_ready", 75, 60);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove("oid=7159853", -1, 300, 150);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#咕噜！！", 37, 3004007, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3##fs20#这，这，这是怎么回事？", 37, 3004002, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("赫！！", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#若脱离指定的地点……就会发生#r爆炸#k。", 37, 3004008, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("据说……", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face2##fs18#这家伙浑身一股腥臭味！！！", 37, 3004002, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#咕噜！！善良的古鲁格咕噜！把东西还回来了咕噜！", 37, 3004007, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#咕噜～～！！", 37, 3004007, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#哈……哈哈……", 37, 3001259, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#这下好了，怎么了？", 37, 3004000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2##fs18#呃呃呃？！", 37, 3004002, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#但我拼命战斗并不是无用功。", 37, 3004000, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#看，这像什么？", 37, 3004000, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#这个……是贴在塞妮娅机器上的！！", 37, 3001259, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm47/MrHazard", 0, 0);
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#我特意看了看。\r\n塞妮娅走后，我打算用这个让装置停下。", 37, 3004000, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#但现在又没有必要让装置停下了……", 37, 3004000, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#啊啊，卫星轨道的拉宝拉请回答。", 37, 3004000, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#正在确认识别码，正在确认识别码。\r\n…………通过了。", 37, 3004015, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#拉宝拉？你刚说过传送器还可以用，对吧？", 37, 3004000, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是的，可以使用1次。", 37, 3004015, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#将净化装置传送至飞艇。", 37, 3004000, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好的，传送装置。", 37, 3004015, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.playSoundEffDirectly("SoundEff.img/ark/flare_ready");
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/teleport", 250);
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/2"], [0, 210, 170, 1, 0, 1, 1, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.npc_LeaveField("oid=7159853");
                                                                                                                                                            cm.npc_LeaveField("oid=7159853");
                                                                                                                                                            cm.npc_ChangeController(3004007, "oid=7160495", 200, 113, 4, 150, 250, 1, true, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=7160495", "summon", 0, 0);
                                                                                                                                                            cm.npc_ChangeController(3004007, "oid=7160496", 240, 113, 5, 190, 290, 1, true, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=7160496", "summon", 0, 0);
                                                                                                                                                            cm.npc_ChangeController(3004007, "oid=7160497", 280, 113, 5, 230, 330, 1, true, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=7160497", "summon", 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#咕噜？", 37, 3004007, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#天啊？这个怎么会在这里……", 37, 3004001, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#再见，塞妮娅。", 37, 3004000, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#哈哈……", 37, 3004001, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/0"], [0, -272, -185, 1, 0, 1, 1, 0]);
                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion4", 100);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.userSetFieldFloating(402000003, 10, 10, 50);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.userSetFieldFloating(402000003, 0, 0, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我，我们没死……呵呵。", 37, 3004002, false, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#呼呜……", 37, 3004000, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#照这样看，黑鸦侦探的案件日志算是有个漂亮的收尾。", 37, 3004000, true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#那本书……一定要给我。", 37, 3001259, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
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
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160495");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160495");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160496");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160496");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160497");
                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7160497");
                                                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm47/SavageTerminal", 0, 0);
                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h1;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;45=h1;36=h1;46=h1;37=h1;47=h0;38=h1;48=h0;39=h1;49=h0");
                                                                                                                                                                                                                                cm.forceStartQuest(37121, "");
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
            cm.sendNormalTalk_Bottom("#face0#呼，这次事件真让人虚惊一场。", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#咳咳……只要和你黑鸦扯上关系就准没好事！", 36, 3004002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#我不想指责你，但这次我真的深有同感。", 36, 3001259, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哈哈，结束就行了，不是吗？还有……", 36, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这次干得真漂亮，华生，不对……#h0#。", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#赠你一枚勋章，作为此次的奖励。怎么样，很酷吧！", 36, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#哇……真的……太帅气……真的……", 36, 3001259, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#咕噜咕噜！！", 36, 3004007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.playerMessage(5, "获得了<黑鸦侦探的荣誉助手>勋章。");
                                            cm.playerMessage(-1, "获得了<黑鸦侦探的荣誉助手>勋章。");
                                            cm.forceCompleteQuest(37122);
                                            cm.gainExp(9487412);
                                            cm.forceCompleteQuest(37121);
                                            cm.curNodeEventEnd(true);
                                            cm.setInGameDirectionMode(true, false, true);
                                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                            cm.setStandAloneMode(true);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.sendNormalTalk_Bottom("#face2#哎，下水道遇见的那个家伙最后到底是谁？", 37, 3001259, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我并不是没有猜到……", 37, 3004000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.dispose();
                                                                cm.warp(940203215, 0)
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