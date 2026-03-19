var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
      cm.npc_ChangeController(2570101, "oid=38016462", 2175, -4, 1, 2125, 2225, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38016462", 'summon', 0, 0);
      cm.npc_ChangeController(2570102, "oid=38016463", 1700, 64, 19, 1650, 1750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38016463", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=38016464", 1870, 0, 9, 1820, 1920, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38016464", 'summon', 0, 0);
      cm.npc_ChangeController(2570104, "oid=38016465", 1560, -40, 18, 1510, 1610, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38016465", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=38016466", 1789, 57, 19, 1739, 1839, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38016466", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38016462", "sit", -1, 1);
      cm.npc_SetSpecialAction("oid=38016463", "sit", -1, 1);
      cm.npc_SetSpecialAction("oid=38016464", 'sit', -1, 1);
      cm.npc_SetSpecialAction("oid=38016466", "sit", -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 2247, -24);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1760, 50);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 2000, 7000, 2242, 50);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(8400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face0#团长。', 36, 2570101, false, true, 1);
              cm.effect_Voice("Voice6.img/Library/hadin/12-01-hadin.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("怎么回事？", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这场战斗……还有多久才会结束呢？", 36, 2570101, false, true, 1);
                      cm.effect_Voice("Voice6.img/Library/hadin/12-03-hadin.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……。", 56, 0, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这回可能是最后一次。", 56, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("或者……也可能还剩下百余次。", 56, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570101, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("很难过吗？", 56, 0, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#在非战斗人员中，曾经有个小女孩。", 36, 2570101, true, true, 1);
                                      cm.effect_Voice("Voice6.img/Library/hadin/12-07-hadin.mp3", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我在第一次战斗中救下了她，但之后……", 36, 2570101, true, true, 1);
                                        cm.effect_Voice("Voice6.img/Library/hadin/12-08-hadin.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("(我们改变了路线……。)", 56, 0, false, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/hadin/12-9-hadin.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#三十五次。这是我们没能救出孩子的次数。", 36, 2570101, false, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/hadin/12-10-hadin.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#我脑海中总是不住地想，\r\n在那35次期间，每次发生了什么事情。", 36, 2570101, false, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/hadin/12-11-hadin.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#我现在已经很适应与恶魔交战了……", 36, 2570101, false, true, 1);
                                                        cm.effect_Voice("Voice6.img/Library/hadin/12-12-hadin.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#但我不知道我能否适应这件事。", 36, 2570101, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/Library/hadin/12-13-hadin.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('(习惯……。)', 56, 0, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction25.img/Dlep6/ilust/9", 0, 2000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#老师……", 36, 2570107, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice6.img/Library/prince/14-21-prince.1.mp3", 100);
                                                                          cm.setAccountQuestInfo(252, "count=40511;T=20210420232720");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("面对哈丁的提问，我沉默了。", 0);
                                                                              cm.effect_Voice("Voice6.img/Library/kel/12-16-kel.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("因为我想不到用什么话来反驳他。", 0);
                                                                                cm.effect_Voice("Voice6.img/Library/kel/12-17-kel.mp3", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("我唯一能做的……只有沉默……", 1);
                                                                                  cm.effect_Voice("Voice6.img/Library/kel/12-18-kel.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("沉默……是啊，当时我……", 1);
                                                                                      cm.effect_Voice("Voice6.img/Library/kel/12-19-kel.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/6/0", 0, 1200, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/6/2", 0, 1200, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##r王位簒夺者的下场#k无非这两种之一。", 36, 2570107, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#要么死，要么成为国王。", 36, 2570107, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction25.img/Dlep6/ilust/6/1", 0, 2000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#老师，我……", 36, 2570107, false, true, 1);
                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/03-32-prince.2.mp3", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('……。', 56, 0, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.npc_ChangeController(2570134, "oid=38024946", 2507, 32, 26, 2457, 2557, 1, false, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=38024946", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(2570134, "oid=38024947", 2580, 8, 24, 2530, 2630, 1, false, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=38024947", "summon", 0, 0);
                                                                                                          cm.npc_ChangeController(2570134, "oid=38024948", 2641, 47, 17, 2591, 2691, 1, false, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=38024948", "summon", 0, 0);
                                                                                                          cm.npc_setForceFlip("oid=38016462", 1);
                                                                                                          cm.npc_setForceFlip("oid=38016463", 1);
                                                                                                          cm.npc_setForceFlip("oid=38016464", 1);
                                                                                                          cm.npc_setForceFlip("oid=38016465", 1);
                                                                                                          cm.npc_setForceFlip("oid=38016466", 1);
                                                                                                          cm.npc_SetSpecialAction("oid=38016462", "attack", -1, 1);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2350, 50);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#有敌人来袭。", 36, 2570101, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_Voice("Voice6.img/Library/ed/12-24-ed.mp3", 100);
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, 1790, 50);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=38016464", 'attack', -1, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=38016466", "attack", -1, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetSpecialAction("oid=38016463", "attack", -1, 1);
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#真是要疯了……", 36, 2570103, false, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.effect_Voice("Voice6.img/Library/ryan/12-25-ryan.mp3", 100);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue("大家轮流地暂时合眼休息了一会儿，但没起到太大的帮助。", 0);
                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/12-26-kel.mp3", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("这就犹如，给在沙漠中干渴濒死的旅人舌头上", 0);
                                                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/12-27-kel.mp3", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_Monologue('滴下区区一滴水珠。', 1);
                                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/12-28-kel.mp3", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_Monologue("虽说随时涌来的恶魔也是个问题", 0);
                                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/12-29-kel.mp3", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue("但比起这个，真正在折磨我们的", 0);
                                                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/12-30-kel.mp3", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_Monologue('是那太阳……', 1);
                                                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/12-31-kel.mp3", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2242, 50);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_Monologue("那太阳不停地跟着我们，照得我们根本无法安眠。", 1);
                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/12-32-kel.mp3", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 2000, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                            cm.forceCompleteQuest(37810);
                                                                                                                                                            cm.updateInfoQuest(37810, "exp=1");
                                                                                                                                                            cm.gainExp(5872020);
                                                                                                                                                            cm.npc_LeaveField("oid=38016462");
                                                                                                                                                            cm.npc_LeaveField("oid=38016463");
                                                                                                                                                            cm.npc_LeaveField("oid=38016464");
                                                                                                                                                            cm.npc_LeaveField("oid=38016465");
                                                                                                                                                            cm.npc_LeaveField("oid=38016466");
                                                                                                                                                            cm.npc_LeaveField("oid=38024946");
                                                                                                                                                            cm.npc_LeaveField("oid=38024947");
                                                                                                                                                            cm.npc_LeaveField("oid=38024948");
                                                                                                                                                            cm.dispose();
                                                                                                                                                            cm.warp(308000015, 0, false);
                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}