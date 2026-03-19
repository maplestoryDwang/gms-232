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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19786265", 460, 93, 7, 410, 510, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786265", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19786266", 280, 93, 7, 230, 330, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786266", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19786267", 390, 93, 7, 340, 440, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786267", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19786268", 570, 93, 7, 520, 620, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786268", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19786269", 640, 93, 7, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=19786269", "summon", 0, 0);
      cm.npc_ChangeController(9400037, "oid=19786270", -272, 93, 5, -322, -222, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786270", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=19786270", "down1", -1, 0);
      cm.npc_SetForceMove("oid=19786266", -1, 420, 250);
      cm.npc_SetForceMove("oid=19786267", -1, 430, 250);
      cm.npc_SetForceMove("oid=19786269", -1, 360, 250);
      cm.npc_SetForceMove("oid=19786268", -1, 350, 200);
      cm.npc_SetForceMove("oid=19786265", -1, 400, 250);
      cm.inGameDirectionEvent_AskAnswerTime(4200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust3", 0, 1500, 0, 0, 14, 4, 0);
          cm.inGameDirectionEvent_AskAnswerTime(5200);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
            cm.setNpcSpecialActionReset("oid=19786270");
            cm.npc_SetSpecialAction("oid=19786270", "down", -1, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
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
                    cm.sendNormalTalk_Bottom("奈奈！醒醒！你能认出我来吗？", 37, 9400032, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嘤……嘤……吭", 37, 9400037, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9400065, "oid=19786404", 80, 93, 6, 30, 130, 1, false, false);
                        cm.npc_SetSpecialAction("oid=19786404", 'summon', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#它应该是因为身体没力气了才会这样，没事的。", 37, 9400065, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#吭吭吭吭", 37, 9400037, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("它说谢谢我们救了它，但让我们赶紧去救和它一起被抓的灵灵。", 37, 9400065, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=19786269", -1, 100, 300);
                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#灵灵？！", 37, 9400035, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=19786266", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("看来灵灵确实也在这里，我们快去找灵灵吧。", 37, 9400032, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#快……快走吧……我们得快点见到灵灵……呜呜", 37, 9400035, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                          } else {
                                            if (status === V++) {
                                              cm.forceCompleteQuest(59732);
                                              cm.forceCompleteQuest(59733);
                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                              cm.updateInfoQuest(59764, "1=1");
                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                            } else if (status === V++) {
                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                              cm.eventSKill(0);
                                              cm.warp(867111290, 0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.setStandAloneMode(false);
                                              cm.npc_LeaveField("oid=19786265");
                                              cm.npc_LeaveField("oid=19786266");
                                              cm.npc_LeaveField("oid=19786267");
                                              cm.npc_LeaveField("oid=19786268");
                                              cm.npc_LeaveField("oid=19786269");
                                              cm.npc_LeaveField("oid=19786270");
                                              cm.npc_LeaveField("oid=19786404");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;