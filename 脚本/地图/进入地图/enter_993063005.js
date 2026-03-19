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
      cm.npc_ChangeController(3003779, "oid=276981", 814, 206, 19, 764, 864, 1, false, 0, false);
      cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我第一次来这里……以前有过这种地方吗？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("通往这边的路，明明是被墙挡住了的……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 650);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("有光从缝隙漏出来？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("得先把这个树根挖出来。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_QTE(2);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(10, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                              cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h2");
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                            } else {
                              if (status === V++) {
                                cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h1");
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_QTE(2);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                      cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h2");
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else {
                                      if (status === V++) {
                                        cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h1");
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("再试一次应该就能把这些树根挖出来了。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_QTE(2);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                  cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h3");
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/1to2disappear", 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h0");
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_tothe2nd/0", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('这里……', 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('能从这儿走吗？', 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                                        cm.sendNormalTalk_Bottom("走……这条路对吗……？", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            cm.effect_Voice("Voice4.img/BM2/H_effect/1_3", 60);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("有人……有惨叫声！", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("快点！拜托一定要来得及……", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h4");
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/1to2appear", 200);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h0;15=h1;09=h0;79=h1");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                          cm.forceCompleteQuest(35710);
                                                                                                          cm.gainExp(341342713);
                                                                                                          cm.dispose();
                                                                                                          cm.warp(450011500, 0, false);
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
                }
              }
            }
          }
        }
      }
    }
  }
}