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
      cm.dispelBuff(80002228);
      cm.Hidden_background("guide", 1, 0, 0, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.playVideoByScript("arcana2.avi");
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -385, -1030);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(4000, 1500, 4000, -385, -530);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2430, 230);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -2730, 230);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                        cm.inGameDirectionEvent_MoveAction(4);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -980, 29);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -580, 29);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('额，嗯……', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这，这是哪里……到底是哪里……", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana/5", 0, 900, 0, 0, 12, 4, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我只记得被一道巨大的光之漩涡卷了进去……", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 900, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                cm.sendNormalTalk_Bottom("啊，哎哟，看来掉下来的时候稍微伤到了腰。", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -730, 29);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("这片森林可真是寂静，一点动静都感觉不到。", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -530, 29);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("难道没人住在这片森林吗？", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom('嗯？', 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, -300, 29);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.onSetBackEffect("guide", 1, 1, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("这道光是怎么回事？", 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 100, 29);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("好像在将我向某个地方引呢，我要不跟过去看看？", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 1500);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else if (status === V++) {
                                                                                                cm.dispose();
                                                                                                cm.warp(940200205, 0, true);
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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