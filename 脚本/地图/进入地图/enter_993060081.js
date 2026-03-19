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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_Hero9(0, 2000);
      cm.inGameDirectionEvent_AskAnswerTime(2300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.fieldEffect_Hero9(80, 1000);
        cm.setAmbience("Ambience.img/gravity", 200, 60);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -80);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_BackgroundCanvas(5, 0, 0, 0, 0, 0, 0);
            cm.fieldEffect_BackgroundCanvas(1, 0, 0, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3300);
                cm.effect_Text(["#fn黑体##fs35#世界的尽头……世界的开始……"], [50, 2800, 7, 0, -50, 0, 4, 3, 300, 300]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4100);
                  cm.effect_Text(["#fn黑体##fs35#终于来到了悲惨而又神圣的真相的起点。"], [50, 3600, 7, 0, -50, 0, 4, 3, 300, 300]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3900);
                    cm.effect_Text(["#fn黑体##fs35#摆放在脚前的地毯，只不过是幻象……"], [50, 3400, 7, 0, -50, 0, 4, 3, 300, 300]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                      cm.effect_Text(["#fn黑体##fs35#打破认知之墙，进入真相之中吧。"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -80);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 255, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 255, 0, 0);
                                    cm.fieldEffect_取消复合图片动画('02', 1, 2000);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 50);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(4);
                                        cm.Hidden_background("core0", 1, 0, 0, 0);
                                        cm.Hidden_background('core1', 1, 0, 0, 0);
                                        cm.Hidden_background('core2', 1, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
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
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -240, 200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("（呃……可怕的意念在侵蚀着我的精神……这就是那个人的……）", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setAmbience("Ambience.img/gal_fire", 100, 60);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(993060081, 10, 10, 10);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(993060081, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.userSetFieldFloating(993060081, 10, 10, 10);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(993060081, 0, 0, 0);
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
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 50);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.userSetFieldFloating(993060081, 5, 5, 5);
                                                                            cm.sendNormalTalk_Bottom("（啊，空间正在崩溃。必须尽快离开这里……）", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                                                                        cm.dispose();
                                                                                        cm.warp(993060071, 0, false);
                                                                                        cm.setStandAloneMode(false);
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