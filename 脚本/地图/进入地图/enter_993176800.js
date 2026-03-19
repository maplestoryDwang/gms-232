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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("Ambience.img/ruin", 200, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5000);
          cm.effect_Text(["#fn黑体##fs18#阴暗的黑蘑古森林中的某处", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                        } else {
                          if (status === V++) {
                            cm.effect_Text(["#fn黑体##fs30##fc0xFF8C8C8C#还不够……", ''], [100, 3000, 4, 0, 0, 1, 4, 3, 500, 500, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                          } else {
                            if (status === V++) {
                              cm.effect_Text(["#fn黑体##fs30##fc0xFF8C8C8C#不够，这么点还……", ''], [100, 3000, 4, 0, 0, 1, 4, 3, 500, 500, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(7000);
                            } else {
                              if (status === V++) {
                                cm.effect_Text(["#fn黑体##fs30##fc0xFF8C8C8C#必须变得更大、更强……", ''], [100, 3000, 4, 0, 0, 1, 4, 3, 500, 500, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(10000);
                              } else {
                                if (status === V++) {
                                  cm.effect_Text(["#fn黑体##fs30##fc0xFFA50000#只有那样……才能像那个东西一样使用……", ''], [150, 4500, 4, 0, 0, 1, 4, 3, 500, 500, 0, 0]);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.playSoundEffDirectly("Ambience.img/ruin");
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
                                            cm.dispose();
                                            cm.warp(450002025, 0, false);
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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