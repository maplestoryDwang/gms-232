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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm48.img/Memory", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 652, 55);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.Hidden_background("core1", 1, 1, 0, 0);
        cm.Hidden_background("core2", 1, 1, 0, 0);
        cm.Hidden_background("core3", 1, 1, 0, 0);
        cm.Hidden_background("coreEff", 1, 0, 0, 0);
        cm.npc_ChangeController(3001510, "oid=144443137", 450, 90, 9, 400, 500, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144443137", 'summon', 0, 0);
        cm.npc_ChangeController(3001514, "oid=144443138", 350, 90, 9, 300, 400, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443138", "summon", 0, 0);
        cm.npc_ChangeController(3001515, "oid=144443139", 270, 90, 9, 220, 320, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443139", "summon", 0, 0);
        cm.npc_ChangeController(3001516, "oid=144443140", 210, 90, 9, 160, 260, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443140", "summon", 0, 0);
        cm.npc_ChangeController(3001508, "oid=144443141", 850, 90, 10, 800, 900, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=144443141", "summon", 0, 0);
        cm.npc_ChangeController(3001517, "oid=144443142", 950, 90, 10, 900, 1000, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443142", "summon", 0, 0);
        cm.npc_ChangeController(3001518, "oid=144443143", 1150, 90, 14, 1100, 1200, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443143", "summon", 0, 0);
        cm.npc_ChangeController(3001519, "oid=144443144", 1000, 90, 10, 950, 1050, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443144", "summon", 0, 0);
        cm.npc_ChangeController(3001520, "oid=144443145", 1050, 90, 10, 1000, 1100, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443145", "summon", 0, 0);
        cm.npc_ChangeController(3001521, "oid=144443146", 60, 90, 8, 10, 110, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443146", "summon", 0, 0);
        cm.npc_ChangeController(3001522, "oid=144443147", 1220, 90, 14, 1170, 1270, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144443147", "summon", 0, 0);
        cm.npc_ChangeController(3001511, "oid=144443148", 740, 90, 11, 690, 790, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=144443148", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_Text(["#fn黑体##fs18#另一方面，商队避难处"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#哎呀，探索队那边的信号中断了，叽勒……大家有危险，叽勒。", 37, 3001510, 0, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#哎，哎呀呀，怪物们的电波正在往这里聚拢。太强了，叽勒。", 37, 3001510, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#嗯……水晶还有很长一段时间才能启动……好吧，只能交给命运了。", 37, 3001508, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#明白了，叽勒。那就开始吧，叽，叽勒楞……", 37, 3001510, 1, 1);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=144443137", 1, 150, 180);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.Hidden_background("coreEff", 1, 1, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === V++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 652, 55);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=144443141");
                                cm.npc_LeaveField("oid=144443137");
                                cm.npc_LeaveField("oid=144443138");
                                cm.npc_LeaveField("oid=144443139");
                                cm.npc_LeaveField("oid=144443140");
                                cm.npc_LeaveField("oid=144443142");
                                cm.npc_LeaveField("oid=144443143");
                                cm.npc_LeaveField("oid=144443144");
                                cm.npc_LeaveField("oid=144443145");
                                cm.npc_LeaveField("oid=144443146");
                                cm.npc_LeaveField("oid=144443147");
                                cm.npc_LeaveField("oid=144443148");
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#但，但是亚克没跟我说该怎么启动。", 37, 3001508, 0, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#队长，聆听心灵的节奏……", 37, 3001509, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#嗯，嗯……好的，那，那就让我来试试……", 37, 3001508, 0, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#把我们带走吧，到朋友们那里去！", 37, 3001508, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 652, -700);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#阿尔贝，我想明白了。", 0);
                                                    cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n肮脏的手，", 0);
                                                      cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#注定无法拥抱心爱的人。", 0);
                                                        cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n计划被你发现的那天晚上，", 0);
                                                          cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#如果我不惜粉身碎骨，", 0);
                                                            cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/5', 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#坚持勇敢面对，", 0);
                                                              cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#现在的你，也许会是另外一个样子。", 1);
                                                                cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#后悔总是在我心头涌起。", 0);
                                                                  cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#不管如何努力，", 0);
                                                                    cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#都无法甩脱。", 0);
                                                                      cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n\r\n‘我会……去完成约定。’", 0);
                                                                        cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#看着消失在沙漠中的你背影，", 0);
                                                                          cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n\r\n\r\n我对自己说。", 1);
                                                                            cm.effect_Voice("Voice4.img/Ark/Mono/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/13", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else if (status === V++) {
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                      cm.warp(402000402, 0, false);
                                                                                      cm.eventSKill(0);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.dispose();
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}