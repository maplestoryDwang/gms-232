var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getStringFromQuestInfo(37703, 'dir') !== "end") {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.Hidden_background("flower_dog0", 1, 1, 0, 0);
      cm.Hidden_background("flower_dog1", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -589, 69);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -211, -145);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 363, -145);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(6000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('这里的蘑菇好大啊。', 57, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -20, -10);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好像什么都没有……", 57, 0, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("要在往里面走一点吗……", 57, 0, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/grass", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/grass", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/grass", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/grass", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(3004732, "oid=1859879", 101, 108, 1, 51, 151, 1, true, 1000, false);
                                                        cm.npc_SetSpecialAction("oid=1859879", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                                                cm.updateInfoQuest(37700, "00=h1;02=h1;26=h0");
                                                                cm.npc_LeaveField("oid=1859879");
                                                                cm.updateInfoQuest(37703, 'dir=end');
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