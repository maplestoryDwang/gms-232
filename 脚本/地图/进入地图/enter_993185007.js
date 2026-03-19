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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background('blacksub2', 1, 0, 0, 0);
      cm.Hidden_background('blacksub1', 1, 0, 0, 0);
      cm.npc_ChangeController(3004854, 'oid=678753', -590, 495, 5, -640, -540, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=678753', 'summon', 0, 0);
      cm.Npc_Fadeout("oid=678753", 0, 1);
      cm.npc_ChangeController(3004850, "oid=678754", -395, 495, 5, -445, -345, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=678754', 'summon', 0, 0);
      cm.npc_ChangeController(3004851, "oid=678755", -520, 495, 5, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=678755", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, -212);
      cm.onSetMapObjectMove('ship1', [1, 0, 0]);
      cm.onSetMapObjectMove("ship2", [1, 0, 0]);
      cm.onSetMapObjectMove("ship3", [1, 0, 0]);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -490, 542);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('BlackOut', "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Ambience.img/WSappear_loop", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("有的人会烹制美味绝伦的番茄浓汤，", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("有的人曾经用鱼叉捕到超大的枪鱼。", 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("有的人梦想成为三胞胎的父母", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("有的人……在为没能还尽的欠债唉声叹息。", 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue('然而……', 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("各人的梦想，各人的希望，各人的忧虑，到底有什么意义。", 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/whale/skeleton", '1', '', '01'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                              cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("这黑黢黢的怪物……", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("在大海面前……", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("全都，只不过是尘埃……", 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=678754", 'special6', -1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_取消复合图片动画('01', 1, 4000);
                                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("SoundEff.img/sellas/lightOff", 100);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("啊，灯……亮了。", 56, 0, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#大家……都平安吧……？", 36, 3004851, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#好像是……", 36, 3004850, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("SoundEff.img/sellas/lightOff", 100);
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
                                                            cm.Hidden_background("blacksub1", 1, 1, 0, 0);
                                                            cm.Hidden_background("sub", 1, 0, 0, 0);
                                                            cm.Hidden_background("subani3", 1, 0, 0, 0);
                                                            cm.Hidden_background("subani2", 1, 0, 0, 0);
                                                            cm.Hidden_background('subani1', 1, 0, 0, 0);
                                                            cm.Npc_Fadeout("oid=678753", 255, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#……？！", 36, 3004850, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#你……你怎么……", 36, 3004850, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#休麦……？你怎么了？", 36, 3004851, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#你怎么……？！", 36, 3004850, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=678753");
                                                                          cm.fieldEffect_PlayBGM("Bgm55/SinkingThings", 0, 0);
                                                                          cm.sendNormalTalk_Bottom("哎，你们看外面……！！", 56, 0, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -490, 563);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.onSetMapObjectMove("ship1", [1, 255, 100]);
                                                                                cm.onSetMapObjectMove("ship2", [1, 255, 100]);
                                                                                cm.onSetMapObjectMove('ship3', [1, 255, 100]);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -490, 563);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Hidden_background("blacksub1", 1, 0, 0, 0);
                                                                                  cm.npc_LeaveField("oid=678754");
                                                                                  cm.npc_LeaveField("oid=678755");
                                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                  cm.Hidden_background('blacksub2', 1, 1, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, -533, -30);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(16000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 8000, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face1#这是……那天的。", 36, 3004850, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#氧气……。", 36, 3004850, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Sellas/effect/0", 0, 1000, 0, 0, 2000, 4, 0, 0, 0, 0, -1);
                                                                                            cm.sendNormalTalk_Bottom("#face1#要检查……仪表盘……", 36, 3004850, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("休麦？休麦！", 56, 0, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#感觉……无法……呼吸……", 36, 3004850, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#之前的碰撞，八成会给气压系统……造成问题……", 36, 3004850, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#休麦！！你打起精神来！仪表盘没有异常！", 36, 3004851, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                      cm.setAmbience("SoundEff.img/sellas/breath", 125, 60);
                                                                                                      cm.sendNormalTalk_Bottom("#face2#休麦！！", 36, 3004851, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Sellas/effect/1", 0, 1000, 0, 0, 2000000, 4, 0, -1, 1, -1, 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.dispose();
                                                                                                        cm.warp(993185008, 0, false);
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}