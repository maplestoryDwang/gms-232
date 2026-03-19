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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005102, "oid=388535", 739, 281, 5, 689, 789, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388535", "summon", 0, 0);
      cm.npc_ChangeController(3005120, "oid=388536", 555, 280, 5, 505, 605, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=388536", 'summon', 0, 0);
      cm.npc_ChangeController(3005121, "oid=388537", 469, 280, 4, 419, 519, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=388537", "summon", 0, 0);
      cm.npc_ChangeController(3005104, 'oid=388538', 656, 273, 5, 606, 706, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388538", "summon", 0, 0);
      cm.Npc_Fadeout("oid=388538", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 800, 0, 655, -100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 655, 286);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#格兰蒂斯纳林村", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice6.img/lara/2/Female/0", 100);
                cm.sendNormalTalk_Bottom("#face0#到底要说几遍才能消气啊？", 37, 3005102, false, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/2/Female/1", 100);
                  cm.sendNormalTalk_Bottom("#face0#我们只是告诉你时机而已。", 37, 3005120, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/2/Female/2", 100);
                    cm.sendNormalTalk_Bottom("#face0#好吧，我是生怕你这家伙又忘了交利息。", 37, 3005121, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.Npc_Fadeout('oid=388538', 255, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/2/Female/3", 100);
                        cm.sendNormalTalk_Bottom("#face0#话说你的那、那些……都是什么啊？", 37, 3005120, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/2/Female/4", 100);
                          cm.sendNormalTalk_Bottom("#face0#……#fc0xFFbfbfbf#（就是说啊，为什么会在我附近？）", 37, 3005102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/15/Female/24", 100);
                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/2/Female/5", 100);
                                cm.sendNormalTalk_Bottom("#face1#你们连元素灵都不知道的吗？", 37, 3005102, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/2/Female/6", 100);
                                  cm.sendNormalTalk_Bottom("#face1#要小心不能激怒了那些元素灵，\r\n虽然它们平时看来温顺，可一旦发起火来，比自然灾害还要可怕。", 37, 3005102, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/2/Female/7", 100);
                                    cm.sendNormalTalk_Bottom("#face0#你、你说元素灵？这些平时从不现身的生灵怎么会？", 37, 3005120, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/2/Female/8", 100);
                                      cm.sendNormalTalk_Bottom("#face0#你、你这是又打算骗我们吧？你这只狡猾的狼！", 37, 3005121, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/2/Female/9", 100);
                                        cm.sendNormalTalk_Bottom("#face1#啊，是吗？要是你信不过，要不要亲眼见证一下？", 37, 3005102, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice6.img/lara/2/Female/10", 100);
                                          cm.sendNormalTalk_Bottom("#face0#还、还是先走吧！", 37, 3005120, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/2/Female/11", 100);
                                            cm.sendNormalTalk_Bottom("#face0#你等着瞧！臭狼！", 37, 3005121, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=388536", 0, 1000);
                                              cm.Npc_Fadeout("oid=388537", 0, 1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/2/Female/12", 100);
                                                cm.sendNormalTalk_Bottom("#face0#一帮蠢货……", 37, 3005102, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("Voice6.img/lara/2/Female/13", 100);
                                                  cm.sendNormalTalk_Bottom("#face0#该办的事已经忙完了，你们也各自离开吧。", 37, 3005102, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=388535", 1, 200, 100);
                                                    cm.npc_SetForceMove('oid=388538', 1, 200, 100);
                                                    cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 1052, 286);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/2/Female/14", 100);
                                                        cm.sendNormalTalk_Bottom("#face0#……都让你别跟过来了。", 37, 3005102, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice6.img/lara/15/Female/25", 100);
                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip('oid=388535', -1);
                                                              cm.effect_Voice("Voice6.img/lara/2/Female/15", 100);
                                                              cm.sendNormalTalk_Bottom("#face0#……话说你们为什么会来这里？", 37, 3005102, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice6.img/lara/2/Female/16", 100);
                                                                cm.sendNormalTalk_Bottom("#face0#我最后一次看到元素灵的时候……", 37, 3005102, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice6.img/lara/2/Female/17", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#格里，你瞧瞧这个。", 37, 3005106, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice6.img/lara/2/Female/18", 100);
                                                                      cm.sendNormalTalk_Bottom("#face0#这些小家伙是元素灵。", 37, 3005106, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("Voice6.img/lara/2/Female/19", 100);
                                                                        cm.sendNormalTalk_Bottom("#face0#平时都很难遇到呢，神奇吧？", 37, 3005106, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/2/Female/20", 100);
                                                                            cm.sendNormalTalk_Bottom("#face0#切……一无是处的记忆……", 37, 3005102, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("Voice6.img/lara/2/Female/21", 100);
                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（话说这次又该上哪儿筹钱呢？）", 37, 3005102, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice6.img/lara/2/Female/22", 100);
                                                                                cm.sendNormalTalk_Bottom("#face1#啊，是有这个办法。", 37, 3005102, true, true, 1);
                                                                              } else if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.setStandAloneMode(false);
                                                                                cm.npc_LeaveField("oid=388535");
                                                                                cm.npc_LeaveField("oid=388536");
                                                                                cm.npc_LeaveField("oid=388537");
                                                                                cm.npc_LeaveField("oid=388538");
                                                                                cm.dispose();
                                                                                cm.warp(993165505, 0, true);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}