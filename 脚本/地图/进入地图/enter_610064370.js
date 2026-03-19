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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064370");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2753025", -772, 195, 1, -822, -722, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753025", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2753026", -863, 195, 2, -913, -813, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753026", "summon", 0, 0);
      cm.npc_ChangeController(9201566, "oid=2753027", -146, 195, 8, -196, -96, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753027", "summon", 0, 0);
      cm.npc_ChangeController(9201567, "oid=2753028", 165, 195, 10, 115, 215, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753028", 'summon', 0, 0);
      cm.npc_ChangeController(9201580, "oid=2753029", 350, 195, 47, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2753029", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=2753025", 1, 400, 200);
      cm.npc_SetForceMove("oid=2753026", 1, 400, 200);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2753027", -1, 20, 200);
        cm.inGameDirectionEvent_QTE(7);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(9, 0);
          cm.npc_SetSpecialAction("oid=2753027", "hurt", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=2753027");
            cm.npc_LeaveField("oid=2753027");
            cm.npc_SetForceMove("oid=2753025", 1, 200, 200);
            cm.npc_SetForceMove("oid=2753026", 1, 200, 200);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
            cm.inGameDirectionEvent_AskAnswerTime(3200);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2753028", -1, 30, 200);
              cm.inGameDirectionEvent_QTE(3);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(5, 0);
                cm.npc_SetSpecialAction("oid=2753028", "hurt", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2753028");
                  cm.npc_LeaveField("oid=2753028");
                  cm.npc_SetForceMove("oid=2753025", 1, 200, 200);
                  cm.npc_SetForceMove("oid=2753026", 1, 200, 200);
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(3200);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2753029", -1, 50, 200);
                    cm.inGameDirectionEvent_QTE(4);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(9, 0);
                      cm.npc_SetSpecialAction("oid=2753029", "hurt", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2753029");
                        cm.npc_LeaveField("oid=2753029");
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("纳瑞坎的手下太多了！\r\n真不敢相信他们还有那么多人……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("现在再把它们全部消灭是不是有点太晚了。", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2753025", 1, 400, 150);
                                cm.npc_SetForceMove("oid=2753026", 1, 400, 150);
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1");
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                  } else if (status === V++) {
                                    cm.eventSKill(0);
                                    cm.warp(610064380, 0, true);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=2753025");
                                    cm.npc_LeaveField("oid=2753025");
                                    cm.npc_LeaveField("oid=2753026");
                                    cm.npc_LeaveField("oid=2753026");
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