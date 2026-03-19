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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540616, "oid=22508147", 0, -50, 8, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22508147", "summon", 0, 0);
      cm.npc_ChangeController(1540626, "oid=22508148", 600, 100, 55, 550, 650, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22508148", "summon", 0, 0);
      cm.npcMove(1540616, 0, -300, 0);
      cm.npcMove(1540626, 0, -700, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -30, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(350033001, 1, 1, 20);
          cm.npc_SetSpecialAction("oid=22508147", "fall2", -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm22.img/DespairOnDevil", 0, 0);
            cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我的手……", 37, 1540616, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#抓住我的手！", 37, 1540616, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##fs30#韩利泰！！！！", 37, 1540616, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                            cm.npcMove(1540616, 0, 200, 2000);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.npcMove(1540616, 0, 100, 2000);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#咳咳……你为什么做出这副表情？", 45, 1540615, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#没想到我最后见到的竟然是你这副可笑的表情……", 45, 1540615, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#该死，别说什么最后！", 37, 1540616, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#我们要一起活着回去！", 37, 1540616, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.userSetFieldFloating(350033001, 0, 0, 0);
                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, 510, 90);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(350033001, 3, 3, 20);
                                              cm.npcMove(1540626, 0, 750, 6000);
                                              cm.inGameDirectionEvent_AskAnswerTime(8000);
                                            } else {
                                              if (status === V++) {
                                                cm.userSetFieldFloating(350033001, 0, 0, 0);
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 2000, -30, 90);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(350033001, 1, 1, 20);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#你还记得吗？我们从小时候开始就一直在一起……", 45, 1540615, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#我们说要一起消灭恶党。", 45, 1540615, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#你是黄熊，我是绿虎……", 45, 1540615, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#……嗯，我记得。你这笨蛋。", 37, 1540616, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#呼呼……我还想亲眼看着黑色之翼被摧毁呢……", 45, 1540615, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion7", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22508147"], [0, 200, -10, 1, 0, 1, 0, 0]);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                      cm.userSetFieldFloating(350033001, 5, 5, 20);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -180, -170, 1, 0, 1, 0, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, 110, -80, 1, 0, 1, 0, 0]);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -230, -60, 1, 0, 1, 0, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, 70, -150, 1, 0, 1, 0, 0]);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -200, -80, 1, 0, 1, 0, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 130, -100, 1, 0, 1, 0, 0]);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, 100, -10, 1, 0, 1, 0, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 3000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 210, -100, 1, 0, 1, 0, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -180, -170, 1, 0, 1, 0, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -280, 20, 1, 0, 1, 0, 0]);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 230, -100, 1, 0, 1, 0, 0]);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                            cm.userSetFieldFloating(350033001, 15, 15, 10);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -100, -2, 1, 0, 1, 0, 0]);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -50, -20, 1, 0, 1, 0, 0]);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 70, -50, 1, 0, 1, 0, 0]);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -140, -170, 1, 0, 1, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -110, -150, 1, 0, 1, 0, 0]);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 170, 50, 1, 0, 1, 0, 0]);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -150, -70, 1, 0, 1, 0, 0]);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, 110, -100, 1, 0, 1, 0, 0]);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 210, -100, 1, 0, 1, 0, 0]);
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -150, 70, 1, 0, 1, 0, 0]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=22508147"], [0, 210, -100, 1, 0, 1, 0, 0]);
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung3", "oid=22508147"], [0, -150, 70, 1, 0, 1, 0, 0]);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                    cm.setNpcSpecialActionReset("oid=22508147");
                                                                                                                    cm.npc_LeaveField("oid=22508147");
                                                                                                                    cm.npc_LeaveField("oid=22508147");
                                                                                                                    cm.npc_LeaveField("oid=22508148");
                                                                                                                    cm.npc_LeaveField("oid=22508148");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                      cm.playSoundEffDirectly("Ambience.img/flyingdeck");
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.userSetFieldFloating(350033001, 0, 0, 0);
                                                                                                                      cm.dispose();
                                                                                                                      cm.warp(350033003, 0, true);
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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