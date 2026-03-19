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
      cm.setAmbience("SoundEff.img/ArcaneRiver/night", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -5, 160);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003274, "oid=1797648", 2400, 180, 9, 2350, 2450, 0, true, false);
          cm.npc_SetSpecialAction("oid=1797648", 'summon', 0, 0);
          cm.npc_ChangeController(3003271, "oid=1797649", -200, 180, 2, -250, -150, 0, true, false);
          cm.npc_SetSpecialAction("oid=1797649", 'summon', 0, 0);
          cm.npc_ChangeController(3003275, "oid=1797650", 2850, 180, 10, 2800, 2900, 1, false, false);
          cm.npc_SetSpecialAction("oid=1797650", "summon", 0, 0);
          cm.npc_ChangeController(3003278, "oid=1797651", 2900, 180, 10, 2850, 2950, 1, true, false);
          cm.npc_SetSpecialAction("oid=1797651", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.npc_SetForceMove("oid=1797649", 1, 250, 160);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#…不管怎么样，我都不能放弃。", 37, 3003270, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=1797649", -1, 70, 160);
                cm.sendNormalTalk_Bottom("#face1#我本不应该犹豫，应该先说出来的… 那样的话，不知道会发生什么改变…", 37, 3003270, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#…拿出勇气吧。我要再次尝试说服她。还有些时间！", 37, 3003270, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=1797649", 1, 230, 160);
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 300, 160);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 2600, 160);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#双弩精灵！", 37, 3003274, false, true);
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
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2600, 260);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 2900, 260);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1797648", 1, 250, 160);
                                          cm.sendNormalTalk_Bottom("#face0#双弩精灵，请等一下！我还有话要对你说！", 37, 3003274, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3003271, "oid=1797698", 2350, -20, 8, 2300, 2400, 0, true, false);
                                              cm.npc_SetSpecialAction("oid=1797698", "summon", 0, 0);
                                              cm.sendNormalTalk_Bottom("如果你想跟去战场的话，还是不要再说了，这件事已经结束了。快回村子吧。", 37, 3003275, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错，我就是为了这件事来的。但是我… 我要一起去的理由是…", 37, 3003274, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 2800, 260);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=1797698", 1, 130, 160);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1797698"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那也没办法。", 37, 3003278, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('lucid', "Map/Effect3.img/Lacheln/episode3", 0, 1000, 0, -80, 0, 4, 1);
                                                              cm.sendNormalTalk_Bottom("赫丽娜，给，你把这个带着身上。", 37, 3003278, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#……", 37, 3003270, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#银槲之剑！", 37, 3003274, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('它会保护你的。', 37, 3003278, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#全都结束了… 银槲之剑… 连村子的宝物都给了赫丽娜…", 37, 3003270, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#我什么也不想说了… 我完全输了… 被抛弃了…", 37, 3003270, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#我讨厌这所有的一切！赫丽娜，村子，全部都讨厌！为什么都要妨碍我！", 37, 3003270, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer("lucid", '', 2, 500, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly0", 200);
                                                                              cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", 'animation', '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(450003000, 0, true);
                                                                                cm.setInGameDirectionMode(false, false, false);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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