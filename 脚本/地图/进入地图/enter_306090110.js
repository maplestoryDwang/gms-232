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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', "mark"], [1, 1, 1, 900000, 0, 0, 0, 1]);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.npc_ChangeController(2550000, "oid=1774856", 1829, -130, 3, 1779, 1879, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1774856", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1790, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("SoundEff.img/DLep4/war2", 50, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("我比任何人都清楚……", 0);
          cm.effect_Voice("Voice3.img/DLep4/m/m_1.mp3", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("再也没法阻止末日的到来了。", 0);
            cm.effect_Voice("Voice3.img/DLep4/m/m_2.mp3", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue('', 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("就算如此，我也没法放下剑", 0);
                cm.effect_Voice("Voice3.img/DLep4/m/m_3.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("是因为欠了这个世界太多吗……", 0);
                  cm.effect_Voice("Voice3.img/DLep4/m/m_4.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('', 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 4000, 0);
                      cm.fieldEffect_PlayBGM("Bgm48.img/WayBackHome", 0, 0);
                      cm.playSoundEffDirectly("SoundEff.img/DLep4/war2");
                      cm.inGameDirectionEvent_Monologue("握着剑柄的手再怎么用力", 0);
                      cm.effect_Voice("Voice3.img/DLep4/m/m_5.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("再也直不起身子……", 0);
                        cm.effect_Voice("Voice3.img/DLep4/m/m_6.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("我这才醒悟过来，一切都结束了。", 0);
                          cm.effect_Voice("Voice3.img/DLep4/m/m_7.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue('', 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2550005, "oid=1775056", 1642, -130, 13, 1592, 1692, 0, false, 500, false);
                                cm.npc_SetSpecialAction("oid=1775056", 'summon', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("拦住……敌人……", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("可以……停下了。", 37, 2550005, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("烽火已经启动了。你胜利了。", 37, 2550005, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 20, 4, 1, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, -20, 5, 7, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("masking_up2", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 20, 4, 1, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("masking_down2", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, -20, 5, 7, 1);
                                              cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep4/6/0", 0, 5000, 0, 0, 2, 4, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/DLep4/6/1", 0, 5000, 0, 0, 3, 4, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("\t\t\t\t\t \t\t         你叫什么名字？", 0);
                                                  cm.effect_Voice("Voice3.img/DLep4/n/n_1.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue('', 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("                                        「柳德……」", 0);
                                                      cm.effect_Voice("Voice3.img/DLep4/n/n_2_sub2.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue('', 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("                                      辛苦了，柳德。", 0);
                                                          cm.effect_Voice("Voice3.img/DLep4/n/n_3.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue('', 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("                              就这样，我的一生结束了。", 0);
                                                                cm.effect_Voice("Voice3.img/DLep4/o/o_1.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue('', 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue(" \t\t\t\t\t\t我的名字，就这样悄无声息地，", 0);
                                                                    cm.effect_Voice("Voice3.img/DLep4/o/o_2.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue(" \t\t\t\t\t\t\t  消失在了漫天飞雪之中。", 0);
                                                                      cm.effect_Voice("Voice3.img/DLep4/o/o_3.mp3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue('', 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\t\t\t\t  英雄们啊……后面的事情就交给你们了。", 0);
                                                                            cm.effect_Voice("Voice3.img/DLep4/o/o_4.mp3", 100);
                                                                            cm.updateInfoQuest(49010, "QET=sBuTe5TN1QE$");
                                                                            cm.updateInfoQuest(49010, "QET=sBuTe5TN1QE$");
                                                                            cm.updateInfoQuest(49010, "QET=sBuTe5TN1QE$");
                                                                            cm.forceStartQuest(49010, '');
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("\t\t\t\t\t\t\t 希望我们的死不要白费……", 0);
                                                                              cm.effect_Voice("Voice3.img/DLep4/o/o_5.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue('', 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('masking_up', '', 1, 8000, 0, 140, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 1, 8000, 0, -140, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_up2", '', 1, 8000, 0, 270, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("masking_down2", '', 1, 8000, 0, -270, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                  } else if (status === V++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(306090120, 0, true);
                                                                                    cm.eventSKill(0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=1774856");
                                                                                    cm.npc_LeaveField("oid=1774856");
                                                                                    cm.npc_LeaveField("oid=1775056");
                                                                                    cm.npc_LeaveField("oid=1775056");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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