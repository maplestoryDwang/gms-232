var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getInfoQuest(34119);
  if ('1' === V) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34125, "370=2;380=1;390=2;310=2;320=2;330=2");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003113, "oid=2073286", -270, 165, 10, -320, -220, 0, true, false);
      cm.npc_SetSpecialAction("oid=2073286", "summon", 0, 0);
      cm.npc_ChangeController(3003112, "oid=2073287", 175, 165, 3, 125, 225, 1, true, false);
      cm.npc_SetSpecialAction("oid=2073287", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=2073286");
      cm.npc_SetSpecialAction("oid=2073286", "damaged", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 206);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.setAmbience("SoundEff.img/ArcaneRiver/waterfall", 200, 60);
          cm.sendNormalTalk_Bottom("现在只要从这里出去，就是出口了。幸好这里没有泥沼怪拦路。", 37, 3003112, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('好，这边……', 37, 3003112, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/cave/0", 200);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/cave/1", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/cave/2", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/cave/1", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("…停下！", 37, 3003113, false, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, 20, 106);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……不能往那边走！", 37, 3003113, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -300, 200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(500);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -50, 200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#ho#，相信我。这是陷阱，你不能跟着厉诺走。", 37, 3003113, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("找回记忆的泉水…… 我在那里找回了我失去的记忆，以及与厉诺有关的所有事情。", 37, 3003113, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("…我终于知道了我为什么一直想找回记忆！", 37, 3003113, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else if (status === V++) {
                                                  cm.updateInfoQuest(34119, '1');
                                                  cm.dispose();
                                                  cm.warp(450001300, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestFinished(34120)) {
        cm.warp(450001250, 0);
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(34125, "370=2;380=2;390=2;300=2;310=2;320=2;330=2");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003113, "oid=2073486", -175, 165, 11, -225, -125, 0, true, false);
      cm.npc_SetSpecialAction("oid=2073486", 'summon', 0, 0);
      cm.npc_ChangeController(3003112, "oid=2073487", 175, 165, 3, 125, 225, 1, true, false);
      cm.npc_SetSpecialAction("oid=2073487", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=2073486");
      cm.npc_SetSpecialAction("oid=2073486", "damaged", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 206);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.setNpcSpecialActionReset("oid=2073487");
          cm.npc_SetSpecialAction("oid=2073487", 'smile', 0, 1);
          cm.setNpcSpecialActionReset("oid=2073487");
          cm.npc_SetSpecialAction("oid=2073487", 'smile2', -1, 1);
          cm.sendNormalTalk_Bottom("#face0# 你还是活着回来了…… 那个时候就应该彻底把你除掉的…… 不过，没关系。", 37, 3003112, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0# 反正现在你们都是要死的人了…… 咳咳……", 37, 3003112, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3003144, "oid=2073489", 720, 140, 16, 670, 770, 1, false, false);
              cm.npc_SetSpecialAction("oid=2073489", "summon", 0, 0);
              cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 106);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0# 阿勒玛！好了，快吸收能量吧！", 37, 3003112, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啊，不可以…… #ho#！", 37, 3003113, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, 400, 106);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=2073489");
                      cm.npc_SetSpecialAction("oid=2073489", "attack", -1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall2", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("kao", "Map/Effect2.img/ArcaneRiver1/arma", 0, 1500, 0, -80, 0, 4, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 200);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#ho#！", 37, 3003113, false, true);
                          } else if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("kao", '', 2, 1500, 0, 0, 0, 0, 0);
                            cm.dispose();
                            cm.warp(450001340, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;