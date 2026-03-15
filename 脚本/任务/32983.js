var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.fieldEffect_PlayBGM("Bgm48/EveningPrimrose", 0, 0);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.SitOnDummyPortableChair(3018035, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                            cm.sendNormalTalk_Bottom("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，\r\n大眼青蛙卵一勺。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("隔水熬制后……\r\n最后加上……迎月花……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm33/ShadowKnight", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.npc_ChangeController(2560009, "oid=3587691", 1188, -150, 1, 1138, 1238, 1, false, 500, false);
                                        cm.npc_SetSpecialAction("oid=3587691", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呃啊！突然从哪里冒出来的？", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#退后，影牙！", 37, 2560003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Attack1", 100);
                                                        cm.npc_LeaveField("oid=3587691");
                                                        cm.npc_LeaveField("oid=3587691");
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#呃！", 37, 2560003, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("艾特！！", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face1#我没事。做好战斗准备，影牙！\r\n#b（接受时自动移动。）", 37, 2560003)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.playerMessage(5, "必须消灭掉扑过来的怪物。");
                                                                        cm.dispose();
                                                                        cm.openNpc("次元图书馆_Ep5_影子炼金术师_守卫")
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 883, -147);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.sendNormalTalk_Bottom("你没事吧，艾特？伤口……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face16#我就知道是这样。中和剂什么的全都是谎言。", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face16#等一下！你听到那个声音了吗？女孩的声音……", 37, 2560003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face16#到……神殿来？", 37, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（是我听到过的那个声音！）", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face16#我们到神殿去看看。必须直接确认一下。", 37, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#艾特一定是想到神殿去……\r\n他会以真相为诱饵，来利用你。", 37, 2560000, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#所以千万别相信他。", 37, 2560000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("（就像队长说的一样……！不，这……）", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("（反正中和剂也是假的。\r\n不知道。队长为什么要对我们说谎呢？）", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("（到底什么才是真相？）", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                cm.sendNormalTalk_Bottom("啊！迎月花……？！被它们采走了……", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face16#那个现在不需要了。", 37, 2560003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("什么？但是……", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face16#采走花的怪物反正已经逃走了。\r\n就算翻遍森林，也很难找到。", 37, 2560003, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#不，那种事情怎么都没关系。反正都是假的。", 37, 2560003, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("怎么都……没关系？当然，这个……\r\n成不了真的月亮……", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("但是……如果能想办法把剩下的花……", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("（等一下！我的手……这是怎么回事？）", 57, 0, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/2", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("（手一碰到花……#fs18##r影子诅咒？！#k）", 57, 0, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在别去管花了。我不是已经告诉你该去哪儿了吗？", 37, 2560003, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("（还是被诅咒了……）", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_Hero9(0, 1000);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fs18#我……不行了。", 57, 0, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face16#什么？", 37, 2560003, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("我们已经尽力了。我要回去了。", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 200);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face16#等，等一下，影牙。", 37, 2560003, false, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("随你的便。威胁我也没关系。揭发我也没关系。", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face16#干嘛突然这样。我不理解。", 37, 2560003, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("（队长说得对。不能怀疑使命。）", 57, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你反正只是想利用我。\r\n你颐指气使，为了知道你所谓的真相，对我呼来喝去。", 57, 0, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("所以我……（现在已经无法回头了吗？）", 57, 0, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip10(1, 150);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face16##fs18#对……对不起，影牙。", 37, 2560003, false, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("……什么？", 57, 0, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_Hero9(100, 1500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face11#我不是想利用你。", 37, 2560003, false, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face11#我觉得我们可以成为#b朋友#k……但是我搞砸了。", 37, 2560003, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#fs18#朋……友……？", 57, 0, false, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("真的吗？", 57, 0, false, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face16#我向你道歉。之前我不该威胁你，耍你玩。", 37, 2560003, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("就，就算是这样，我也不会到神殿去。", 57, 0, true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face16#当然。我不想强迫你。", 37, 2560003, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face16#我不会再胡来了。我们……先回村子里去吧。", 37, 2560003, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#我们不去神殿了。", 37, 2560003, true, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#fs18#朋……友……", 57, 0, false, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("我以为被抛弃了。我以为遭到了利用。", 0)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("就像，没能变成月亮而被抛弃的迎月花一样……", 1)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("但是……“朋友”这个词唤醒了我。", 0)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("", 0)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("和他的相遇……", 0)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("是我在这个充满了谎言的地方发现的……", 0)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("「唯一的真相」。", 0)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                                                                                                    cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                                                                                                                                                                                                                                                    cm.forceCompleteQuest(32983);
                                                                                                                                                                                                                                                                                    cm.updateInfoQuest(32983, "exp=1;clear=1");
                                                                                                                                                                                                                                                                                    cm.gainExp(1338067);
                                                                                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                                                                                    cm.warp(307000110, 0, false);
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
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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