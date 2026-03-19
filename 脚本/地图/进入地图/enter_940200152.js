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
      cm.npc_ChangeController(3003273, "oid=1798312", 0, 0, 15, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=1798312", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=1798312");
      cm.npc_SetSpecialAction("oid=1798312", "sleep2", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -50, 150);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -50, 300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 300);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1798312");
                        cm.npc_SetSpecialAction("oid=1798312", "awake", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2300);
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
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 300);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=1798312");
                                  cm.npc_SetSpecialAction("oid=1798312", "awake2", -1, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.fieldEffect_ProcessOnOffLayer("lucid", "Map/Effect3.img/Lacheln/episode", 0, 1000, 0, 0, 0, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_Voice("SoundEff.img/heart", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('lucid', '', 2, 500, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#哈啊… 哈啊… 皮肤感觉凉飕飕的…这是现实… 那么刚才的那些…", 37, 3003272, false, true);
                                        cm.effect_Voice("Voice3.img/Lucid/E4/0", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#肯定是梦境。如果是梦境的话，应该一切都会按照我的意愿发生啊…怎么会…", 37, 3003272, true, true);
                                          cm.effect_Voice("Voice3.img/Lucid/E4/1", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#……", 37, 3003272, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face6#啊，原来是这样。", 37, 3003272, true, true);
                                              cm.effect_Voice("Voice3.img/Lucid/E4/2", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face6#呼，呼呼。", 37, 3003272, true, true);
                                                cm.effect_Voice("Voice3.img/Lucid/E4/3", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#哈哈，哈，啊哈哈。", 37, 3003272, true, true);
                                                  cm.effect_Voice("Voice3.img/Lucid/E4/4", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#没错，噩梦啊，即便你把我吞噬也无妨。", 37, 3003272, true, true);
                                                    cm.effect_Voice("Voice3.img/Lucid/E4/5", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#…但现在还不到时候。等到我伟大的主君--黑魔法师回心转意… 在此之前，你们能乖乖地按照我的心意去做吗？", 37, 3003272, true, true);
                                                      cm.effect_Voice("Voice3.img/Lucid/E4/6", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#在全世界都被美梦萦绕之前… 庆典必须持续下去。", 37, 3003272, true, true);
                                                        cm.effect_Voice("Voice3.img/Lucid/E4/7", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 200);
                                                          cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", 'animation', '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=1798312");
                                                            cm.dispose();
                                                            cm.warp(450003000, 0, true);
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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