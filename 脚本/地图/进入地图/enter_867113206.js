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
      cm.updateInfoQuest(63028, "end=1;start=1");
      cm.updateInfoQuest(63029, "speak=1");
      cm.forceCompleteQuest(63028);
      cm.forceCompleteQuest(63029);
      cm.gainExp(952800);
      cm.updateInfoQuest(63028, "end=1;start=1;exp=1");
      cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
      cm.setMobImage("SoundEff.img/PL_AfterLand/clear_night", 200);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(63088, "sit");
      cm.npc_ChangeController(9400238, "oid=23104530", 343, 80, 6, 293, 393, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23104530", 'summon', 0, 0);
      cm.npc_ChangeController(9400239, "oid=23104531", 565, 80, 7, 515, 615, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23104531", "summon", 0, 0);
      cm.npc_ChangeController(9400240, "oid=23104532", -251, 80, 4, -301, -201, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23104532", "summon", 0, 0);
      cm.npc_ChangeController(9400241, "oid=23104533", -752, 80, 2, -802, -702, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23104533", "summon", 0, 0);
      cm.npc_ChangeController(9400242, "oid=23104534", -613, 80, 3, -663, -563, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23104534", 'summon', 0, 0);
      cm.npc_ChangeController(9400232, "oid=23104535", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23104535", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("噢！进入夜晚了！", 37, 9400210, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.setQuestCustomData(63088, "stand");
            cm.npc_SetForceMove("oid=23104532", 1, 350, 200);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=23104533", 1, 750, 300);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower"], [0, 0, 23104532, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("祝贺你成为最强勇士~！", 37, 9400240, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower"], [0, 0, 23104533, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("祝贺你成为最强勇士！", 37, 9400241, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(867113200, 1, true);
                            cm.setStandAloneMode(false);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=23104530");
                            cm.npc_LeaveField("oid=23104530");
                            cm.npc_LeaveField("oid=23104531");
                            cm.npc_LeaveField("oid=23104531");
                            cm.npc_LeaveField("oid=23104532");
                            cm.npc_LeaveField("oid=23104532");
                            cm.npc_LeaveField("oid=23104533");
                            cm.npc_LeaveField("oid=23104533");
                            cm.npc_LeaveField("oid=23104534");
                            cm.npc_LeaveField("oid=23104534");
                            cm.npc_LeaveField("oid=23104535");
                            cm.npc_LeaveField("oid=23104535");
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