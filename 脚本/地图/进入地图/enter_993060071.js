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
      cm.npc_ChangeController(3003659, "oid=275977", -1800, -480, 3, -1850, -1800, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275978", -1716, -480, 1, -1766, -1666, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275979', -1632, -480, 1, -1682, -1582, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275980", -1548, -480, 1, -1598, -1498, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275981", -2629, -508, 6, -2679, -2579, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275982', -2715, -508, 6, -2765, -2665, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275983", -3002, -508, 6, -3052, -2952, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275984", -2904, -508, 6, -2954, -2854, 0, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275985", -2364, -508, 6, -2414, -2314, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275986", -2813, -508, 6, -2863, -2763, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_loop", 0, 0);
      cm.setAmbience("Ambience.img/BM1_wave", 80, 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1494, -930);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003656, "oid=2304483", -2212, -524, 6, -2262, -2162, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2304483", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face0#那，那边……迷雾在消失！！\r\n乌云……渐渐散开了！！", 37, 3003659, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, -2212, -579);
              } else {
                if (status === V++) {
                  cm.effect_Text(["#fn黑体##fs18#此刻，白色之矛"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b#ho##k好像成功地摧毁了核心。\r\n但是为什么……", 37, 3003651, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2304483", 1, 260, 120);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -2010, -450);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#女皇陛下！？", 37, 3003651, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.playSoundEffDirectly("Ambience.img/BM1_wave");
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_RiserEdit", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -1900, -430);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我要到#b#ho##k那里去。", 37, 3003656, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#女皇陛下，那个……", 37, 3003651, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#现在能够承受那种强烈意念的人只有我。", 37, 3003656, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#face0#……', 37, 3003651, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……是，明白了。那我们在核心附近待命。", 37, 3003651, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2304483", 1, 660, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Text(["#fn黑体##fs18#片刻之后，巨大怪兽内部"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3##b#ho##k！！", 37, 3003656, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3##b#ho##k！！", 37, 3003656, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("（哈……终于好像清醒过来了。\r\n这个声音……是来……找我的吗 ……）", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3##b#ho##k，让我们赶快离开这里。\r\n呃……请抓住我的手。快！！", 37, 3003656, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("（希纳斯用一只手里的盾牌挡住了意念，\r\n另一只手扶着我，往核心外面走去。）", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("（看到光了。好像快到外面了。\r\n可以看到飞船正在向这边飞来……）", 57, 0, true, true);
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
                                                                                            cm.npc_LeaveField("oid=2304483");
                                                                                            cm.npc_LeaveField("oid=2304483");
                                                                                            cm.dispose();
                                                                                            cm.warp(993060073, 0, false);
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