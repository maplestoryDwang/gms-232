var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(37707)) {
    action37707(f, E, e);
  } else {
    cm.dispose();
  }
}
function action37707(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm54/MushbudForest", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -37, -90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004732, "oid=1860174", 354, 86, 23, 304, 404, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1860174", "summon", 0, 0);
        cm.setNPC_Fadein(3004705, 1);
        cm.setNPC_Fadein(3004704, 1);
        cm.setNPC_Fadein(3004725, 1);
        cm.setNPC_Fadein(3004724, 1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
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
              cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 970, -90);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(8000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这里就是我们的村子。不过村民并不是太多。", 37, 3004732, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 615, 70);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#卡斯特，上面那个小家伙就是这次新诞生的吗？", 36, 3004744, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯，这次是条可爱的小狗……上面？？？", 36, 3004732, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                } else {
                                  if (status === V++) {
                                    cm.effect_NormalSpeechBalloon('汪汪！！', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004705, null, cm.getPlayer().getId());
                                    cm.npc_setForceFlip("oid=1860174", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=0"], [0, 354, 100, 1, 0, 1, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=1860174", "special2", 10000, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 390, -33);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_NormalSpeechBalloon('汪汪！！', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004705, null, cm.getPlayer().getId());
                                                cm.sendNormalTalk_Bottom("#face0#快……快从那儿下来，芒泰尔！！！掉下来会受伤的！", 36, 3004732, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗯？它长着翅膀，应该没事吧？", 36, 3004744, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#至少要像我的一样，才称得上是翅膀。那么点东西能叫翅膀吗！", 36, 3004732, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('嗯……卡斯特……？', 56, 0, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#等一下。我先把芒泰尔弄到安全的……！", 36, 3004732, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setNpcSpecialActionReset("oid=1860174");
                                                          cm.npc_SetForceMove("oid=1860174", -1, 100, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else if (status === V++) {
                                                                        cm.setStandAloneMode(false);
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h1;04=h1;05=h1;26=h0;81=h1;36=h0;37=h0");
                                                                        cm.updateInfoQuest(37700, "00=h0;01=h0;02=h0;03=h1;04=h1;05=h1;26=h0;81=h0;36=h0;37=h0");
                                                                        cm.forceCompleteQuest(37707);
                                                                        cm.gainExp(11264558);
                                                                        cm.npc_LeaveField("oid=1860174");
                                                                        cm.dispose();
                                                                        cm.warp(450015060, 0, false);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}