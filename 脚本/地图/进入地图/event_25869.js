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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000128, "oid=210353733", 1500, 0, 5, 1450, 1550, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=210353733", "summon", 0, 0);
        cm.npc_ChangeController(3000129, "oid=210353734", 1570, 0, 12, 1520, 1620, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=210353734", "summon", 0, 0);
        cm.npc_ChangeController(3000122, "oid=210353735", 1650, 0, 15, 1600, 1700, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=210353735", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/2"], [1200, 0, -120, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(484, 0);
            cm.inGameDirectionEvent_头顶图片(["Skill/6510.img/skill/65101100/effect"], [0, 0, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(270);
          } else {
            if (status === V++) {
              cm.effect_Voice("Skill.img/65101100/Use", 100);
              cm.npc_SetSpecialAction("oid=210353733", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=210353734", 'die1', 0, 1);
              cm.npc_SetSpecialAction("oid=210353735", "die1", 0, 1);
              cm.inGameDirectionEvent_头顶图片(["Skill/6510.img/skill/65101100/hit", "oid=210353733"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Skill/6510.img/skill/65101100/hit", "oid=210353734"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Skill/6510.img/skill/65101100/hit", "oid=210353735"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.effect_Voice("Skill.img/65101100/Hit", 100);
                cm.npc_LeaveField("oid=210353733");
                cm.npc_LeaveField("oid=210353733");
                cm.npc_LeaveField("oid=210353734");
                cm.npc_LeaveField("oid=210353734");
                cm.npc_LeaveField("oid=210353735");
                cm.npc_LeaveField("oid=210353735");
                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1600, 29);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(861);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3000122, "oid=210356860", 1250, 0, 2, 1200, 1300, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=210356860", "summon", 0, 0);
                    cm.npc_ChangeController(3000125, "oid=210356861", 1350, 0, 13, 1300, 1400, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=210356861", "summon", 0, 0);
                    cm.npc_ChangeController(3000134, "oid=210356862", 1450, 0, 5, 1400, 1500, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=210356862", 'summon', 0, 0);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/5"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3000128, "oid=210356970", 1300, 0, 4, 1250, 1350, 0, false, 0, false);
                      cm.npc_SetSpecialAction("oid=210356970", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3000129, "oid=210358490", 1350, 0, 13, 1300, 1400, 0, false, 0, false);
                        cm.npc_SetSpecialAction("oid=210358490", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=210356860", "die1", 0, 1);
                          cm.npc_SetSpecialAction("oid=210356861", 'die1', 0, 1);
                          cm.npc_SetSpecialAction("oid=210356862", 'die1', 0, 1);
                          cm.npc_SetSpecialAction("oid=210356970", "die1", 0, 1);
                          cm.npc_SetSpecialAction("oid=210358490", "die1", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=210356860");
                            cm.npc_LeaveField("oid=210356860");
                            cm.npc_LeaveField("oid=210356861");
                            cm.npc_LeaveField("oid=210356861");
                            cm.npc_LeaveField("oid=210356862");
                            cm.npc_LeaveField("oid=210356862");
                            cm.npc_LeaveField("oid=210356970");
                            cm.npc_LeaveField("oid=210356970");
                            cm.npc_LeaveField("oid=210358490");
                            cm.npc_LeaveField("oid=210358490");
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("作战成功了吗？返回#m400000000#吧。", 17, 0, false, true);
                            } else if (status === V++) {
                              cm.eventSKill(0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.dispose();
                              cm.warp(400000000, 0, false);
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