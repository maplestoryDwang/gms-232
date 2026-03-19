var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_Text(["#fn黑体##fs16##fn黑体#导演  #fn黑体#Hwang Sun Young"], [100, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
          cm.inGameDirectionEvent_AskAnswerTime(400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(200);
            cm.effect_Voice("UI.img/MenuDown", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(200);
              cm.effect_Voice("UI.img/MenuUp", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(200);
                cm.effect_Voice("UI.img/WorldmapOpen", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                  cm.effect_Voice("UI.img/MenuDown", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                    cm.effect_Voice("UI.img/MenuDown", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                      cm.effect_Voice("UI.img/MenuUp", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                        cm.effect_Voice("UI.img/MenuDown", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(200);
                          cm.effect_Voice("UI.img/MenuDown", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                              cm.effect_Text(["#fn黑体##fs16##fn黑体#编剧  #fn黑体#Jun Sang Min"], [100, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                  cm.effect_Voice("UI.img/MenuDown", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                    cm.effect_Voice("UI.img/MenuUp", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                      cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                        cm.effect_Voice("UI.img/MenuDown", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                          cm.effect_Voice("UI.img/MenuDown", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                            cm.effect_Voice("UI.img/MenuUp", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                cm.effect_Text(["#fn黑体##fs16##fn黑体#主演  #fn黑体##h0#"], [100, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          cm.effect_Voice("UI.img/MenuDown", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            cm.effect_Voice("UI.img/MenuDown", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                              cm.effect_Voice("UI.img/MenuUp", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(350011000, 0, true);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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