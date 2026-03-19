var status = -1;
var selectionLog = [];
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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/bird", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530140, "oid=36176825", 30, 20, 1, -20, 80, 0, true, false);
      cm.npc_SetSpecialAction("oid=36176825", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs26#后一个月的一天清晨\r\n#fs14#2年级教室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=36176825", 1, 50, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=36176825", -1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=36176825", 1, 50, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Voice2.img/Friends/CH2_06/1", 100);
                    cm.effect_NormalSpeechBalloon("……没有人吧? ", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                      cm.effect_Voice("Voice2.img/Friends/CH2_06/2", 100);
                      cm.effect_NormalSpeechBalloon("哈哈……太好了. 这次我一定要成功……", 1, 0, 0, 3500, 1530140, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("如果可以用语言来形容这封信的话, 那就是充满魔力的信……\r\n信中包含着被禁止了千年之久的俘获女人芳心的魔法. \r\n\r\n可以说这是我废寝忘食地研究爱情小说所得出的最终结果吧? ", 1);
                          cm.effect_Voice("Voice2.img/Friends/CH2_06/3", 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("letter", "Map/Effect2.img/spinOff1/letter3", 0, 1500, 0, 0, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哈哈，读了这样一封蕴含着一个纯真少年心意的信之后，相信没有哪个女生会不为之动容。", 37, 1530140, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH2_06/4", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("等着我吧，奥尔卡。我不会让你再有哭泣的时候。因为我就是那个为你擦去眼泪的男人。哈哈哈哈哈……", 37, 1530140, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH2_06/5", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 1500, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=36176825", 1, 440, 120);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 454, 58);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(6500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=36176825", 'lovelove', -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=36176825", "loveshy", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("呼……我怎么又不知不觉紧张起来了. ", 0);
                                                cm.effect_Voice("Voice2.img/Friends/CH2_06/6", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("别紧张, 这个女人马上就是你的了. 别紧张, 别紧张……", 1);
                                                  cm.effect_Voice("Voice2.img/Friends/CH2_06/7", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……所以这次另一个哥哥突然间……", 37, 1530180, false, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH2_06/8", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("真的吗？真是太强了。", 37, 1530240, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH2_06/9", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("呃……又是这些碍事的家伙！诶，不管了。", 37, 1530140, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH2_06/10", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(1530549, "oid=36197111", 622, 20, 2, 572, 672, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=36197111", "summon", 0, 0);
                                                              cm.setNpcSpecialActionReset("oid=36176825");
                                                              cm.npc_SetForceMove("oid=36176825", -1, 570, 280);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              cm.effect_NormalSpeechBalloon("#b奥尔卡, 我……我……我爱你！#k", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                                                    cm.playSoundEffDirectly("Ambience.img/bird");
                                                                    cm.npc_LeaveField("oid=36176825");
                                                                    cm.npc_LeaveField("oid=36176825");
                                                                    cm.npc_ChangeController(1530180, "oid=36198569", 550, 20, 2, 500, 600, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=36198569", "summon", 0, 0);
                                                                    cm.npc_ChangeController(1530240, "oid=36198570", 300, 20, 1, 250, 350, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=36198570", "summon", 0, 0);
                                                                    cm.npc_ChangeController(1530270, "oid=36198571", 400, 20, 1, 350, 450, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=36198571", 'summon', 0, 0);
                                                                    cm.npc_ChangeController(1530280, "oid=36198572", 500, 20, 1, 450, 550, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=36198572", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(1530130, "oid=36199690", 692, 20, 2, 642, 742, 1, true, false);
                                                                      cm.npc_SetSpecialAction("oid=36199690", 'summon', 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 50, 534, 58);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1601);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("又是信……？", 37, 1530130, false, true);
                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_06/11", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("……这次该不会又是威胁信吧……？", 37, 1530180, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_06/12", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("怎，怎么会！你把奥尔卡当成什么人了？", 37, 1530130, true, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_06/13", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("奥尔卡是那种积怨很深的人吗？为什么非得让奥尔卡成为坏人？", 37, 1530130, true, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_06/14", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("嗯？……哈哈哈，是呢？我也真是的！", 37, 1530180, true, true);
                                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_06/15", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("怎么可能又是威胁信？这次一看就知道是情书了。上面写了什么？", 37, 1530180, true, true);
                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_06/16", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.setAmbience("Ambience.img/crow", 100, 60);
                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer("letter", "Map/Effect2.img/spinOff1/letter4", 0, 1500, 0, 0, 12, 4, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("…………", 37, 1530180, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("…………", 37, 1530130, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#fs30#啊啊呃~~！！！", 37, 1530130, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_06/17", 100);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.forceStartQuest(32770, '');
                                                                                                        cm.forceCompleteQuest(32770);
                                                                                                        cm.dispose();
                                                                                                        cm.warp(330002206, 1);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;