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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Ambience.img/secretmissionbase", 0, 0);
      cm.npc_ChangeController(1540450, "oid=22394783", -110, 21, 2, -160, -60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22394783", 'summon', 0, 0);
      cm.npc_ChangeController(1540451, "oid=22394784", -180, 21, 2, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22394784", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=22394785", 20, 21, 2, -30, 70, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22394785", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=22394786", 80, 21, 3, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22394786", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=22394783", 'down', -1, 0);
      cm.npc_SetSpecialAction("oid=22394784", 'down', -1, 0);
      cm.npc_SetSpecialAction("oid=22394785", "down", -1, 0);
      cm.npc_SetSpecialAction("oid=22394786", "down", -1, 0);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 100);
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
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('呃……敌人的空袭？', 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("没想到他们会先攻打过来……我们遭到了突袭。", 37, 1540452, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呃呃……\r\n#h0#？赫丽娜？大家都还好吧？", 37, 1540450, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，拜托你立刻前往甲板，查看一下目前的情况。\r\n我担心船内的其他士兵的安危。", 37, 1540450, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗯。幸好我们都没有受重伤，你不用担心我们，快到甲板上去看看吧！", 37, 1540453, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
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
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 3-\r\n#fs28#激战苍穹", 1);
                                        cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else if (status === V++) {
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.effect_NormalSpeechBalloon("快到甲板上看看吧. ", 1, 0, 1, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;