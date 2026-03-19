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
      cm.npc_ChangeController(3003659, "oid=275762", -868, 419, 6, -918, -818, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275763', -769, 419, 6, -819, -719, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275764", -668, 419, 6, -718, -618, 0, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275765', -589, 419, 6, -639, -539, 0, true, 0, false);
      cm.npc_ChangeController(3003656, "oid=275766", 25, 419, 6, -25, 75, 0, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275767", 779, 447, 1, 729, 829, 1, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275768", 936, 447, 2, 912, 986, 1, true, 0, false);
      cm.npc_ChangeController(3003694, 'oid=275769', -274, 419, 6, -324, -224, 0, false, 0, false);
      cm.npc_ChangeController(3003668, "oid=275770", 1084, 447, 2, 1034, 1134, 1, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275771", 1232, 447, 2, 1182, 1282, 1, true, 0, false);
      cm.npc_ChangeController(3003695, "oid=275772", -355, 419, 6, -405, -305, 0, false, 0, false);
      cm.npc_ChangeController(3003696, "oid=275773", -428, 419, 6, -478, -378, 0, false, 0, false);
      cm.npc_ChangeController(3003698, "oid=275774", -498, 447, 14, -548, -478, 0, false, 0, false);
      cm.npc_ChangeController(3003697, "oid=275775", -167, 159, 0, -217, -117, 0, false, 0, false);
      cm.npc_ChangeController(3003651, "oid=275776", -86, 419, 6, -136, -36, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 196, -260);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#几小时后，神秘河上空"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我们正在经过埃斯佩拉的大本营所在的地方。\r\n……所有的一切都已经消失的无影无踪。", 37, 3003651, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#稍后将会离开埃斯佩拉上空。\r\n前面是……极思之境，月桥。", 37, 3003651, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#联盟把从埃斯佩拉通往黑太阳的路口\r\n命名为月桥。", 37, 3003651, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
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
                          cm.fieldEffect_PlayBGM("Bgm49/WarCloud", 0, 0);
                          cm.playSoundEffDirectly("Ambience.img/blizzard_soft");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 196, 400);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("月桥……", 57, 0, false, true);
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
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 170, 500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#低靡的士气好像又高涨起来了。\r\n凯琳，距离目的地还远吗？", 37, 3003651, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_start", 100);
                                                  cm.npc_ChangeController(3003682, "oid=2201574", 217, 430, 3, 167, 267, 1, false, 1000, false);
                                                  cm.npc_SetSpecialAction("oid=2201574", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#白色之矛，这里是诺特勒斯号。\r\n浓雾阻挡了前路。", 37, 3003673, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3003651, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM1_mist/0", 0, 1000, 0, -80, 1, 4, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这是……预言中提到的黄昏的气息……", 37, 3003651, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#敌人从迷雾中出现了。\r\n看上去好像不太容易进入。", 37, 3003673, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2201574");
                                                                    cm.npc_LeaveField("oid=2201574");
                                                                    cm.sendNormalTalk_Bottom("#face1#在前方的迷雾中可以感觉到强烈的意念。\r\n最好先停下来，确认一下情况。", 37, 3003674, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#南哈特，现在这里观察一下敌人的动态。", 37, 3003656, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#是，女皇陛下。那就在此稍事休整，对周围进行一下调查。", 37, 3003651, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.forceStartQuest(35611, '');
                                                                                  cm.forceCompleteQuest(35611);
                                                                                  cm.gainExp(85793345);
                                                                                  cm.updateInfoQuest(35611, "d30=1;d74=1;medal=1;d1=1");
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
                                                                                        cm.warp(450009100, 0, false);
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