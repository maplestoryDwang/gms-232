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
      cm.npc_ChangeController(9401056, "oid=201086", -168, 70, 6, -168, -68, 4, true, 0, false);
      cm.npc_ChangeController(9401056, "oid=201087", 137, 73, 7, 53, 137, 5, true, 0, false);
      cm.npc_ChangeController(9401057, "oid=201088", 487, 74, 4, 399, 499, 4, true, 0, false);
      cm.npc_ChangeController(9401057, "oid=201089", -481, 64, 14, -509, -409, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401030, "oid=39231252", -750, -280, 15, -800, -700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39231252", 'summon', 0, 0);
      cm.npc_ChangeController(9401042, "oid=39231253", -800, -280, 15, -850, -750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39231253", 'summon', 0, 0);
      cm.npc_ChangeController(9401044, "oid=39231254", -850, -280, 17, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39231254", "summon", 0, 0);
      cm.npc_ChangeController(9401068, "oid=39231255", -900, -280, 17, -950, -850, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39231255", 'summon', 0, 0);
      cm.npc_ChangeController(9401127, "oid=39231256", -550, -280, 15, -600, -500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39231256", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(12, [5000, -150, -100, 0, 0]);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呀哈哈哈，好！空气好极了～～ ", 37, 9401033, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b还好你看上去心情不错。", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯～也不必非要这样！那我们走吧，我会证明我真正的价值，呀哈哈哈", 37, 9401033, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.eventSKill(0);
                      cm.dispose();
                      var O = cm.getEventManager('深渊远征队_教程8');
                      O.startInstance(cm.getPlayer());
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=39231252");
                      cm.npc_LeaveField("oid=39231252");
                      cm.npc_LeaveField("oid=39231253");
                      cm.npc_LeaveField("oid=39231253");
                      cm.npc_LeaveField("oid=39231254");
                      cm.npc_LeaveField("oid=39231254");
                      cm.npc_LeaveField("oid=39231255");
                      cm.npc_LeaveField("oid=39231255");
                      cm.npc_LeaveField("oid=39231256");
                      cm.npc_LeaveField("oid=39231256");
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