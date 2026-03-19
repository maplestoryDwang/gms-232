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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 150, -30);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001556, 330000000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(76);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530065, "oid=21008387", 80, -30, 3, 30, 130, 1, true, false);
          cm.npc_SetSpecialAction("oid=21008387", 'summon', 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=21008387"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("原来传说中的巴士就长这个样子啊……真神奇。", 37, 1530060, false, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_06/1", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                      cm.effect_Voice("Field.img/flowervioleta/appear", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                        cm.effect_Voice("Field.img/flowervioleta/appear", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=21008387", 1, 300, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                          cm.effect_Voice("Voice2.img/Friends/CH1_06/2", 100);
                                          cm.effect_NormalSpeechBalloon("啊哈！", 0, 0, 0, 1500, 1530065, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                            cm.effect_Voice("Field.img/flowervioleta/appear", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Field.img/flowervioleta/appear", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=21008387", -1, 330, 300);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH1_06/3", 100);
                                                                                  cm.effect_NormalSpeechBalloon("啊哈！", 0, 0, 0, 1500, 1530065, cm.getPlayer().getId());
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 180, -30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 8000, 150, -30);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 150, 100, -30);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(333);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      cm.effect_NormalSpeechBalloon("……你没事吗? ", 1, 0, 0, 1500, 0, cm.getPlayer().getId());
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("哎呀！真好玩！！原来乘坐游乐机是这种感觉啊？我还从来没玩过呢。", 37, 1530060, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH1_06/4", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("别站在那儿，坐下来不是更好吗？", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("哎呀，我坐在不是我预定的位置也行吗？真神奇！", 37, 1530060, true, true);
                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH1_06/5", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b（这姑娘为什么自己生活的世界的常识还要问我……？）#k", 57, 0, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(330002109, 0);
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
                        }
                      }
                    }
                  }
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