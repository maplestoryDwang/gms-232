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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -425, -100);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003272, "oid=1798229", -425, -160, 2, -475, -375, 1, true, false);
        cm.npc_SetSpecialAction("oid=1798229", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -720, -620);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5500);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 80, -170);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(10);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -400, -170);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这里是没有悲伤和孤单的梦之都。", 37, 3003272, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice3.img/Lucid/E3/0", 128);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -410, -100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#甜蜜的梦马上就会越过这神秘河畔，支配整个世界。", 37, 3003272, false, true);
                                                  cm.effect_Voice("Voice3.img/Lucid/E3/1", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#…我会守护好这里。虽然这违背了他的意愿。", 37, 3003272, true, true);
                                                    cm.effect_Voice("Voice3.img/Lucid/E3/2", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#黑魔法师，请你看看！这是路西德所描绘的新世界！", 37, 3003272, true, true);
                                                      cm.effect_Voice("Voice3.img/Lucid/E3/3", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(5000, 2000, 5000, -610, -100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 200);
                                                          cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", "animation", '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(450003000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;