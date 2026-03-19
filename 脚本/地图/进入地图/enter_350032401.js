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
      cm.npc_ChangeController(1540614, "oid=22451973", 10, 0, 31, -40, 60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451973", "summon", 0, 0);
      cm.npc_ChangeController(1540615, "oid=22451974", 10, 60, 58, -40, 60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451974", "summon", 0, 0);
      cm.npc_ChangeController(1540616, "oid=22451975", 10, 120, 86, -40, 60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451975", "summon", 0, 0);
      cm.npc_ChangeController(1540628, "oid=22451976", -200, 60, 55, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451976", "summon", 0, 0);
      cm.npc_ChangeController(1540627, "oid=22451977", -350, -50, 6, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451977", 'summon', 0, 0);
      cm.npc_ChangeController(1540642, "oid=22451978", -350, 200, 107, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451978", 'summon', 0, 0);
      cm.npc_ChangeController(1540643, "oid=22451979", -350, 0, 29, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451979", "summon", 0, 0);
      cm.npc_ChangeController(1540644, "oid=22451980", -350, 120, 81, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451980", 'summon', 0, 0);
      cm.npc_ChangeController(1540645, "oid=22451981", -350, -50, 6, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451981", "summon", 0, 0);
      cm.npc_ChangeController(1540646, "oid=22451982", -350, 200, 107, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22451982", "summon", 0, 0);
      cm.npcMove(1540645, 0, -80, 0);
      cm.npcMove(1540646, 0, 80, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1000, 130);
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
            cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 150, 130);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=22451973", 1, 180, 150);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 270);
              cm.npc_SetForceMove("oid=22451974", 1, 90, 100);
              cm.npc_SetForceMove("oid=22451975", 1, 180, 150);
              cm.npc_SetForceMove("oid=22451976", 1, 150, 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#终于要出击了！", 37, 1540614, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哈哈！好开心啊，不是吗？", 37, 1540615, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#大家打起精神。\r\n在敌人涌过来之前，我们先迂回前进吧。", 37, 1540616, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=22451977", 1, 260, 130);
                      cm.npc_SetForceMove("oid=22451978", 1, 240, 130);
                      cm.npc_SetForceMove("oid=22451979", 1, 240, 130);
                      cm.npc_SetForceMove("oid=22451980", 1, 260, 130);
                      cm.npc_SetForceMove("oid=22451981", 1, 240, 130);
                      cm.npc_SetForceMove("oid=22451982", 1, 260, 130);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我们去引开那边的飞船。\r\n大家一定要注意安全。", 37, 1540452, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 150, 110);
                        } else {
                          if (status === V++) {
                            cm.npcMove(1540628, 20, 0, 1500);
                            cm.npcMove(1540627, 20, 20, 1500);
                            cm.npcMove(1540642, 20, -20, 1500);
                            cm.npcMove(1540643, 20, 20, 1500);
                            cm.npcMove(1540644, 20, -20, 1500);
                            cm.npcMove(1540645, 20, 20, 1500);
                            cm.npcMove(1540646, 20, -20, 1500);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 150, 130);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=22451976", -1);
                                cm.npc_setForceFlip("oid=22451977", -1);
                                cm.npc_setForceFlip("oid=22451978", -1);
                                cm.npc_setForceFlip("oid=22451979", -1);
                                cm.npc_setForceFlip("oid=22451980", -1);
                                cm.npc_setForceFlip("oid=22451981", -1);
                                cm.npc_setForceFlip("oid=22451982", -1);
                                cm.npcMove(1540628, -700, 0, 2500);
                                cm.npcMove(1540627, -700, -200, 2500);
                                cm.npcMove(1540642, -700, 200, 2500);
                                cm.npcMove(1540643, -800, -150, 2500);
                                cm.npcMove(1540644, -800, 150, 2500);
                                cm.npcMove(1540645, -700, -150, 2500);
                                cm.npcMove(1540646, -700, 150, 2500);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们最好分散前进，以防引起敌人的注意吧？", 37, 1540614, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这个想法不错。大家快动起来！", 37, 1540616, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#好了，让我们来玩玩吧？\r\n各位，祝你们好运！", 37, 1540615, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 1000, 1500, 150, 110);
                                      } else {
                                        if (status === V++) {
                                          cm.npcMove(1540614, -20, 20, 1500);
                                          cm.npcMove(1540615, -20, 0, 1500);
                                          cm.npcMove(1540616, -20, -20, 1500);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 150, 130);
                                          } else {
                                            if (status === V++) {
                                              cm.npcMove(1540614, 400, -150, 2000);
                                              cm.npcMove(1540615, 400, 0, 2000);
                                              cm.npcMove(1540616, 400, 150, 2000);
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.openNpc("黑色天堂_Act3_激战长空");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;