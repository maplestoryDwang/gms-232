var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestActive(39813) && cm.getNumberFromQuestInfo(39813, "dir") == 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
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
      if (cm.isQuestActive(39814)) {
        cm.setPartner(1, 3004430, 80002825, 0);
      }
      if (cm.getNumberFromQuestInfo(39803, "dir") > 0) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004431, 'oid=511840', -470, -26, 19, -520, -420, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=511840', "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -485, 30);
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
              cm.sendNormalTalk_Bottom("#face0#打着收集情报的旗号，光明正大地四处游玩。", 37, 3004431, true, true);
              cm.effect_Voice("Voice5.img/CH2/Idea/20", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#今天是自由行动，#h0#大人也在城里四处看一看吧。\r\n不过，期间还请留意一下城市里都有哪些势力，以及相互之间的关系如何。", 37, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/21", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#还有，如果遇到需要帮助的人，要积极地向他们伸出援手。\r\n这样才好树立我们联盟的正面形象。", 37, 3004431, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Idea/22", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#请不要忘记。我们的目标是守卫#b圣地塞尔提乌#k，以及……", 37, 3004431, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Idea/23", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('确认古代神的力量。', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错。那么我们之后见面时再交换情报。", 37, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/24", 128);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(39803, 'dir=1');
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -283, -14);
      cm.npc_ChangeController(3004446, 'oid=558641', 260, -23, 13, 210, 310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=558641", "summon", 0, 0);
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
            cm.sendNormalTalk_Bottom('嗯？', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 300, -5);
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
                    cm.effect_NormalSpeechBalloon("…….", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004446, null, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这家伙有些奇怪。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove('oid=558641', 1, 120, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.Npc_Fadeout("oid=558641", 0, 1000);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("去哪儿了呢？我应该跟在他后面的。", 57, 0, false, true);
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