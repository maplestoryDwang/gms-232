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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -150, 115);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3002110, "oid=37881819", 15, -125, 38, -35, 65, 1, true, false);
          cm.npc_SetSpecialAction("oid=37881819", "summon", 0, 0);
          cm.sendNormalTalk_Bottom("#face14#快爬上去，快！", 37, 3002110, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_PushScaleInfo(2500, 1000, 2500, -150, -160);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(7);
              cm.inGameDirectionEvent_MoveAction(3);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(7);
                cm.inGameDirectionEvent_AskAnswerTime(90);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(90);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呼，真高啊。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3002124, "oid=37883507", -395, -460, 31, -445, -345, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883507", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883508", -531, -460, 30, -581, -481, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883508", 'summon', 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883509", -213, -460, 59, -263, -163, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883509", 'summon', 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883510", -80, -460, 34, -130, -30, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883510", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883511", -685, -90, 23, -735, -635, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883511", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883512", -580, -90, 24, -630, -530, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883512", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883513", -470, -90, 25, -520, -420, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883513", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883514", -350, -90, 27, -400, -300, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883514", "summon", 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883515", 168, -505, 54, 118, 218, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883515", 'summon', 0, 0);
                        cm.npc_ChangeController(3002124, "oid=37883516", 270, -505, 55, 220, 320, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=37883516", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face13#哇！这些家伙是怎么回事？", 37, 3002110, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face7#长得还挺可爱的！", 37, 3002110, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400256/Attack1", 100);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400256/Attack1", 100);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400256/Attack1", 100);
                              cm.npc_SetSpecialAction("oid=37883507", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883508", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883509", 'attack', 0, 1);
                              cm.npc_SetSpecialAction("oid=37883510", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883511", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883512", 'attack', 0, 1);
                              cm.npc_SetSpecialAction("oid=37883513", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883514", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883515", "attack", 0, 1);
                              cm.npc_SetSpecialAction("oid=37883516", "attack", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=37883507", 'stand2', -1, 1);
                                cm.npc_SetSpecialAction("oid=37883508", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883509", 'stand2', -1, 1);
                                cm.npc_SetSpecialAction("oid=37883510", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883511", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883512", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883513", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883514", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883515", "stand2", -1, 1);
                                cm.npc_SetSpecialAction("oid=37883516", "stand2", -1, 1);
                                cm.sendNormalTalk_Bottom("不……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("一点都不可爱……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face8#呃……", 37, 3002110, true, true);
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
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(940204180, 0);
                                            cm.setStandAloneMode(false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.playerMessage(5, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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