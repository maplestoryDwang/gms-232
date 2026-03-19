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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.Hidden_background('0', 1, 0, 0, 0);
      cm.Hidden_background('1', 1, 0, 0, 0);
      cm.Hidden_background('2', 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -264, -10);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#啊，骑士……你说大哥约你去尖塔见面！？", 36, 3001963, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#他很久没到据点来了……", 36, 3001962, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#会不会是大哥准备了惊喜礼物？", 36, 3001962, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#好期待也有我们的礼物啊，嘿嘿……", 36, 3001963, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(来信的人，原来不是杰罗姆。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm53/TheWallsofTragedy", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/bell3", 100);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#呵呵……你在找谁呀，阿黛尔？", 36, 3001956, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice2.img/adele/present/J/Female/1", 100);
                                cm.sendNormalTalk_Bottom("#face2#找你有事的人是我。", 36, 3001956, true, true, 1);
                                cm.effect_Voice("Voice2.img/adele/present/J/Female/2", 100);
                              } else {
                                if (status === V++) {
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
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -3, -186);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                                              cm.npc_ChangeController(3001956, "oid=11580953", 230, -30, 5, 180, 280, 1, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=11580953", 'summon', 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.onSetBackEffect('0', 1, 257, 0, 0);
                                                cm.onSetBackEffect('1', 1, 257, 0, 0);
                                                cm.onSetBackEffect('2', 1, 257, 0, 0);
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
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -28, -10);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(她既是我的老朋友兼同僚……也曾背叛了我。\r\n事到如今，她来找我究竟有何目的？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_Voice("Voice2.img/adele/present/J/Female/3", 100);
                                                            cm.sendNormalTalk_Bottom("#face2#在之前的舞会上，我们不是约好再见面嘛。", 36, 3001956, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#看你的眼神，似乎想起我是谁了。", 36, 3001956, true, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/J/Female/4", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#而且你确实变强了不少。", 36, 3001956, true, true, 1);
                                                                cm.effect_Voice("Voice2.img/adele/present/J/Female/5", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#不过，还不到能与我交手的程度……", 36, 3001956, true, true, 1);
                                                                  cm.effect_Voice("Voice2.img/adele/present/J/Female/6-1", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#还欠点火候。", 36, 3001956, true, true, 1);
                                                                    cm.effect_Voice("Voice2.img/adele/present/J/Female/6-2", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face6#说说你有什么事吧。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                      cm.effect_Voice("Voice2.img/adele/present/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#啊，今天叫你来……是有事想让你帮帮忙。", 36, 3001956, true, true, 1);
                                                                        cm.effect_Voice("Voice2.img/adele/present/J/Female/8", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#至于是什么事，你很快就会知道的。", 36, 3001956, true, true, 1);
                                                                          cm.effect_Voice("Voice2.img/adele/present/J/Female/9", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -271, -10);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/seal/0/0"], [0, 0, 0, 1, 1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/seal/0/1"], [0, 0, 0, 1, -1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/1/black out_smog", "black out_smog", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_MoveAction(4);
                                                                                  cm.sendNormalTalk_Bottom("#face0#咳……", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face7#这是之前那种封印魔法……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                      cm.effect_Voice("Voice2.img/adele/present/J/Female/10", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_Hero9(0, 1000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                            cm.fieldEffect_Hero9(100, 500);
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
                                                                                                    cm.warp(993162057, 0, false);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=11580953");
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}