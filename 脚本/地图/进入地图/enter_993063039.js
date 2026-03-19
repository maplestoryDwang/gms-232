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
      cm.updateInfoQuest(3674, "mobid=8880415");
      cm.updateInfoQuest(3674, "mobid=8880415;lasttime=2020/03/01 17:03:32");
      cm.updateInfoQuest(3674, "count=1;mobid=8880415;lasttime=2020/03/01 17:03:32");
      cm.updateInfoQuest(3674, "count=1;mobid=8880415;lasttime=2020/03/01 17:03:32;mobDead=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 21, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003773, "oid=2211851", -190, 220, 2, -240, -140, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2211851", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2211851", "off", -1, 1);
          cm.npc_ChangeController(3003771, "oid=2211852", 220, 220, 12, 170, 270, 1, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2211852", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2211852", 'stand', -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#这不可能！怎么会这样！！！", 37, 3003771, false, true);
              cm.effect_Voice("Voice4.img/BM2/H_perish/E/12_2", 128);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_Hero9(20, 1000);
                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahDie_spine/hillah", 'A', '', 'A'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/hillahdie", 100);
                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahDie_spine/hillah", 'AB', '', 'AB'], [0, 0, 1, 0, 0, 0, 0, 1]);
                      cm.inGameDirectionEvent_AskAnswerTime(3600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahDie_spine/hillah", 'B', '', 'B'], [0, 1, 1, 999999, 0, 0, 0, 1]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_Hero9(80, 1000);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#我……我的时间正在流逝！", 37, 3003771, false, true);
                            cm.effect_Voice("Voice4.img/BM2/H_perish/E/13_2", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#我的青春……我的美貌！！！！", 37, 3003771, true, true);
                              cm.effect_Voice("Voice4.img/BM2/H_perish/E/14_2", 128);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……真丑。", 37, 3003773, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face4#……', 37, 3003771, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#哈哈哈哈哈哈哈哈哈！", 37, 3003771, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#这是……我？", 37, 3003771, false, true);
                                          cm.effect_Voice("Voice4.img/BM2/H_add/3/1_1", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#哈哈哈哈哈哈哈哈哈！", 37, 3003771, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#不！！！！", 37, 3003771, false, true);
                                                cm.effect_Voice("Voice4.img/BM2/H_add/4/3_4", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#我……我得到承诺，我会永生的！", 37, 3003771, true, true);
                                                  cm.effect_Voice("Voice4.img/BM2/H_add/3/2_2", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#我会输给那些家伙……？", 37, 3003771, true, true);
                                                    cm.effect_Voice("Voice4.img/BM2/H_add/3/6_2", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#不会的！", 37, 3003771, false, true);
                                                        cm.effect_Voice("Voice4.img/BM2/H_add/3/3_4", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#怎么……？", 37, 3003771, true, true);
                                                          cm.effect_Voice("Voice4.img/BM2/H_add/3/4_1", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#结局不应该是这样的啊……？", 37, 3003771, true, true);
                                                            cm.effect_Voice("Voice4.img/BM2/H_add/3/5_2", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#别……别看我……", 37, 3003771, false, true);
                                                                    cm.effect_Voice("Voice4.img/BM2/H_perish/E/18_3", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#我……我费劲千辛万苦才走到这一步……", 37, 3003771, true, true);
                                                                      cm.effect_Voice("Voice4.img/BM2/H_add/3/7_3", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#结果落得这么个下场……？", 37, 3003771, true, true);
                                                                        cm.effect_Voice("Voice4.img/BM2/H_add/3/8_3", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#……", 37, 3003771, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#这幅样子……我活不下去……", 37, 3003771, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_取消复合图片动画('A', 0, 0);
                                                                                  cm.fieldEffect_取消复合图片动画('B', 0, 0);
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
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8880410/Die", 100);
                                                                                        cm.npc_SetSpecialAction("oid=2211852", 'die2', 1, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=2211852");
                                                                                          cm.npc_LeaveField("oid=2211852");
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("希拉…", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("无止境的欲望，就是这样的下场吗？", 57, 0, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("好丑……", 57, 0, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("啊……迷宫！", 57, 0, false, true);
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
                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.forceCompleteQuest(35730);
                                                                                                                      cm.gainExp(512014069);
                                                                                                                      cm.npc_LeaveField("oid=2211851");
                                                                                                                      cm.npc_LeaveField("oid=2211851");
                                                                                                                      cm.dispose();
                                                                                                                      cm.warp(450011660, 0, false);
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
          }
        }
      }
    }
  }
}