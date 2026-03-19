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
      if (cm.getQuestStatus(39801) == 0 || cm.isQuestFinished(39802)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3004433, "oid=504383", -300, -40, 5, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504383", 'summon', 0, 0);
      cm.npc_ChangeController(3004431, "oid=504384", -118, -40, 5, -168, -68, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504384", 'summon', 0, 0);
      cm.npc_ChangeController(3004435, "oid=504385", 290, -40, 6, 240, 340, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=504385", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=504386", -400, -40, 5, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=504386', 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=504387", -460, -40, 5, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=504387", "summon", 0, 0);
      if (cm.isQuestFinished(39801)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -134, -898);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("SoundEff.img/cernium2/seawave", 100, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, -134, -189);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6000);
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
                        cm.updateInfoQuest(39800, "01=h1;11=h1");
                        cm.sendNormalTalk_Bottom("#face0#若我们真是渡过了东海，这里应该是格兰蒂斯吧？", 37, 3003675, false, true);
                        cm.effect_Voice("Voice5.img/CH2/Checky/1", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是的。我也是第一次来到大陆。", 37, 3004431, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Idea/1", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#大陆？", 37, 3003675, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Checky/2", 128);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/10", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                  cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction23.img/illust2/11", 0, 1000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#人们常常把黑海上空所有的星星统称格兰蒂斯。", 37, 3004431, false, true);
                                    cm.effect_Voice("Voice5.img/CH2/Idea/2", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#但严格来说，格兰蒂斯这个名字是指位于黑海正中央的#b中心星辰#k。", 37, 3004431, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Idea/3", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust2/12", 0, 700, 0, 0, 4, 4, 0, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust2/12", 0, 700, 0, 0, 4, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#因为该地像冒险岛世界一样，由许多种族和国家组成，所以称为#b大陆#k。", 37, 3004431, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Idea/4", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#喔……我原来都不知道。", 37, 3003675, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Checky/3", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#像万神殿，赫里希安，荒蛮终点站，贝勒狄等围绕在大陆周围的星星，被称为格兰蒂斯的月亮。", 37, 3004431, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Idea/5", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/13", 0, 700, 0, 0, 5, 4, 0, -1, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/13", 0, 700, 0, 0, 5, 4, 0, -1, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#原来如此，头顶上的星星被称为月亮，我们脚下的大地，是格兰蒂斯大陆。", 37, 3003675, false, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Checky/4", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                                        cm.sendNormalTalk_Bottom("#face0#王子殿下。非常抱歉。我们似乎有点脱离预选坐标。", 37, 3004437, false, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Knight/1", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#嗯？这，这可不妙。敌人估计也发觉我们穿越空间而来的事了……", 37, 3004433, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/1", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#各位，请尽快赶往会合地点吧。", 37, 3004433, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/2", 128);
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
                                                                                } else if (status === V++) {
                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                  cm.eventSKill(0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.updateInfoQuest(39800, "01=h0;11=h1;26=h1");
                                                                                  cm.forceCompleteQuest(39801);
                                                                                  cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                  cm.OnStartNavigation(410000520, 0, "east00", 39802);
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