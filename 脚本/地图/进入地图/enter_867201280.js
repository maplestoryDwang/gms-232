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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400580, "oid=5390620", 50, 445, 2, 0, 100, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390620", "summon", 0, 0);
      cm.npc_ChangeController(9400595, "oid=5390621", 120, 445, 2, 70, 170, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390621", "summon", 0, 0);
      cm.npc_ChangeController(9400675, "oid=5390622", -250, 445, 1, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=5390622", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=5390623", -460, 345, 28, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=5390623", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=5390624", -350, 170, 11, -400, -300, 0, true, false);
      cm.npc_SetSpecialAction("oid=5390624", 'summon', 0, 0);
      cm.npc_ChangeController(9400675, "oid=5390625", 85, 10, 8, 35, 135, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390625", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=5390626", 375, 30, 19, 325, 425, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390626", 'summon', 0, 0);
      cm.npc_ChangeController(9400674, "oid=5390627", 340, 290, 14, 290, 390, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390627", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=5390628", 365, 445, 2, 315, 415, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390628", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=5390629", 600, 445, 2, 550, 650, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390629", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=5390630", 575, 235, 18, 525, 625, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390630", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=5390631", 750, 340, 12, 700, 800, 1, true, false);
      cm.npc_SetSpecialAction("oid=5390631", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.npc_SetSpecialAction("oid=5390620", "fear", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=5390622", "skill1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=5390629", "skill1", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=5390624", "skill1", 0, 1);
            cm.npc_SetSpecialAction("oid=5390626", "skill1", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 2000, 70, 450);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#b艾丽卡？', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=5390625", 'skill1', 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=5390628", "skill1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=5390623", "skill1", 0, 1);
                        cm.sendNormalTalk_Bottom("#b你怎么会在这里？", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b在我消灭怪物的时候，你就待在上面吧！", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.playerMessage(-1, "消灭区域内的所有怪物，救出艾丽卡吧");
                            cm.updateInfoQuest(64072, "chk1=1");
                            cm.npc_LeaveField("oid=5390622");
                            cm.npc_LeaveField("oid=5390622");
                            cm.npc_LeaveField("oid=5390623");
                            cm.npc_LeaveField("oid=5390623");
                            cm.npc_LeaveField("oid=5390624");
                            cm.npc_LeaveField("oid=5390624");
                            cm.npc_LeaveField("oid=5390625");
                            cm.npc_LeaveField("oid=5390625");
                            cm.npc_LeaveField("oid=5390626");
                            cm.npc_LeaveField("oid=5390626");
                            cm.npc_LeaveField("oid=5390627");
                            cm.npc_LeaveField("oid=5390627");
                            cm.npc_LeaveField("oid=5390628");
                            cm.npc_LeaveField("oid=5390628");
                            cm.npc_LeaveField("oid=5390629");
                            cm.npc_LeaveField("oid=5390629");
                            cm.npc_LeaveField("oid=5390630");
                            cm.npc_LeaveField("oid=5390630");
                            cm.npc_LeaveField("oid=5390631");
                            cm.npc_LeaveField("oid=5390631");
                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else if (status === V++) {
                              cm.setInGameDirectionMode(false, true, false);
                              cm.spawnMobLimit(9402244, 1, -250, 402, 100);
                              cm.spawnMobLimit(9402242, 1, -460, 309, 100);
                              cm.spawnMobLimit(9402243, 1, -350, 133, 100);
                              cm.spawnMobLimit(9402244, 1, 85, -27, 100);
                              cm.spawnMobLimit(9402243, 1, 375, 214, 100);
                              cm.spawnMobLimit(9402243, 1, 340, 248, 100);
                              cm.spawnMobLimit(9402242, 1, 365, 402, 100);
                              cm.spawnMobLimit(9402243, 1, 600, 402, 100);
                              cm.spawnMobLimit(9402242, 1, 575, 191, 100);
                              cm.spawnMobLimit(9402242, 1, 750, 299, 100);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;