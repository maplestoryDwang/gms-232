var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(39804) && !cm.isQuestFinished(39805) && cm.getNumberFromQuestInfo(39803, "dir") == 0) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(39813) && cm.getNumberFromQuestInfo(39813, "dir") == 0) {
      action2(f, E, e);
    } else {
      if (cm.isQuestFinished(39815) && !cm.isQuestFinished(39816) && cm.getNumberFromQuestInfo(39816, "dir") == 0) {
        action3(f, E, e);
      } else if (cm.isQuestFinished(39901) && !cm.isQuestFinished(39902) && cm.getNumberFromQuestInfo(39902, "dir") == 0) {
        action11(f, E, e);
      } else {
        if (cm.isQuestActive(39814)) {
          cm.setPartner(1, 3004430, 80002825, 0);
        }
        if (cm.isQuestFinished(39815) && !cm.isQuestFinished(39816)) {
          cm.npc_ChangeController(3004431, 'oid=776864', -590, -50, 20, -640, -540, 0, true, 0, false);
          cm.npc_SetSpecialAction('oid=776864', 'summon', 0, 0);
          cm.npc_ChangeController(3004430, "oid=776865", -500, -50, 19, -550, -450, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=776865", "summon", 0, 0);
          cm.npc_ChangeController(3004435, "oid=776866", -134, -50, 15, -184, -84, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=776866", "summon", 0, 0);
          cm.npc_ChangeController(3004436, 'oid=776867', -50, -50, 2, -100, 0, 0, true, 0, false);
          cm.npc_SetSpecialAction('oid=776867', "summon", 0, 0);
        }
        if (cm.isQuestActive(39850)) {
          cm.fieldEffect_PlayBGM("Bgm53/HolyWar", 0, 0);
          cm.hideNpc(3004419);
          cm.hideNpc(3004421);
          cm.hideNpc(3004519);
          cm.hideNpc(3004403);
          cm.hideNpc(3004420);
          cm.hideNpc(3004422);
          cm.hideNpc(3004404);
          cm.hideNpc(3004452);
          cm.hideNpc(3004425);
          cm.hideNpc(3004407);
          cm.hideNpc(3004540);
          cm.hideNpc(3004520);
          cm.hideNpc(3004448);
          cm.hideNpc(3004521);
        }
        cm.Hidden_background("cernium_blacksmith", 1, cm.getQuestStatus(39906) > 0 && !cm.isQuestFinished(39910) ? 1 : 0, 0, 0);
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.Hidden_background("cernium_blacksmith", 1, cm.getQuestStatus(39906) > 0 && !cm.isQuestFinished(39910) ? 1 : 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004431, "oid=511840", 0, -26, 19, -200, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=511840", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -185, 30);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("其他人呢？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#以搜集情报为由，趁机游玩去了。", 37, 3004431, true, true);
              cm.effect_Voice("Voice5.img/CH2/Idea/20", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#今天是自由活动，你也去城里转转吧。\r\n给你个任务，你顺便去打探一下城里有哪些势力，以及他们的关系如何。", 37, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/21", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#还有，如果遇到需要帮忙的人，要积极伸出援手。\r\n我们必须尽快在百姓的心中树立联盟的正面形象。", 37, 3004431, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Idea/22", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#记住。我们的目的是保卫#b圣地塞尔提乌#k，以及……", 37, 3004431, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Idea/23", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("确认古代神的力量。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错。那你去忙吧，回头碰面交换情报。", 37, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/24", 128);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(39803, "dir=1");
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
function action2(f, E, e) {
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
      cm.Hidden_background("cernium_blacksmith", 1, cm.getQuestStatus(39906) > 0 && !cm.isQuestFinished(39910) ? 1 : 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 586, 35);
      cm.npc_ChangeController(3004446, "oid=558641", -331, 35, 16, -1000, 1000, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=558641", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
        cm.curNodeEventEnd(true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('嗯？', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -311, -5);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004446, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这家伙好可疑。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=558641", -1, 120, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.Npc_Fadeout("oid=558641", 0, 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这人去哪儿了？我得跟在他后面看看。", 57, 0, false, true);
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
                                    cm.updateInfoQuest(39813, "dir=1");
                                    cm.OnStartNavigation(410000760, 0, '', 39813);
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
function action3(f, E, e) {
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
      cm.Hidden_background("cernium_blacksmith", 1, cm.getQuestStatus(39906) > 0 && !cm.isQuestFinished(39910) ? 1 : 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm53/HolyWar", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -489, -120);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 90, 0, -85);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else if (status === V++) {
              cm.warp(cm.getMapId(), 0, true);
              cm.setInGameDirectionMode(false, false);
              cm.setStandAloneMode(false);
              cm.dispose();
              cm.updateInfoQuest(39816, "dir=1");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action11(f, E, e) {
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
      cm.Hidden_background("cernium_blacksmith", 1, cm.getQuestStatus(39906) > 0 && !cm.isQuestFinished(39910) ? 1 : 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -62, -566);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(50);
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
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, -62, -130);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Unknown9(0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else if (status === V++) {
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.updateInfoQuest(39902, "dir=1");
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