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
      cm.npc_ChangeController(9400031, "oid=19785512", -60, 93, 2, -110, -10, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785512", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19785513", -130, 93, 2, -180, -80, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785513", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19785514", -200, 93, 1, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785514", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19785515", -270, 93, 1, -320, -220, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785515", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19785516", -320, 93, 1, -370, -270, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785516", "summon", 0, 0);
      cm.npc_ChangeController(9400036, "oid=19785517", 201, 93, 3, 151, 251, 1, true, false);
      cm.npc_SetSpecialAction("oid=19785517", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 0, 50);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetSpecialAction("oid=19785517", "die", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=19785517");
          cm.npc_SetSpecialAction("oid=19785517", 'down1', -1, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嘟嘟！！清醒一点！！嘟嘟！！", 37, 9400031, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("它似乎暂时昏迷了。看起来应该没事……", 37, 9400033, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#呜呜……嘟嘟，对不起……我没能早点找到你……呜呜……", 37, 9400031, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=19785512", 1, 130, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(3200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust3", 0, 1500, 0, 0, 14, 4, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                        cm.setNpcSpecialActionReset("oid=19785517");
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
                              cm.sendNormalTalk_Bottom("呱呱，呱呱呱呱，呱呱呱。", 37, 9400036, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你知道它在说什么吗？", 37, 9400035, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#嗯，它说谢谢我们来救它。", 37, 9400031, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("谢什么啊……而且，现在说谢谢还太早了，我们得快点去消灭APORD的余孽。", 37, 9400032, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是啊，我们还得快点找到灵灵和奈奈。", 37, 9400035, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2400);
                                      } else {
                                        if (status === V++) {
                                          cm.forceCompleteQuest(59729);
                                          cm.forceCompleteQuest(59730);
                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                          cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                        } else if (status === V++) {
                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                          cm.eventSKill(0);
                                          cm.warp(867111170);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
                                          cm.npc_LeaveField("oid=19785512");
                                          cm.npc_LeaveField("oid=19785513");
                                          cm.npc_LeaveField("oid=19785514");
                                          cm.npc_LeaveField("oid=19785515");
                                          cm.npc_LeaveField("oid=19785516");
                                          cm.npc_LeaveField("oid=19785517");
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