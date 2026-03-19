var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1302101, "oid=19478184", -300, 197, 15, -350, -250, 1, true, false);
      cm.npc_SetSpecialAction("oid=19478184", "summon", 0, 0);
      cm.npc_SetForceMove("oid=19478184", 1, 150, 100);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.effect_NormalSpeechBalloon("碧欧蕾塔公主！", 1, 0, 0, 2000, 0, 9897148);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_SetForceMove("oid=19478184", -1, 5, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("求你把我放下！", 1, 1, 0, 2000, 1302101, 9897148);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=19478184", 'letitgo', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=19478184", "mushroom", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2100);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=19478184", 1, 300, 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.playerMessage(-1, "在限定时间内避开掉落的蘑菇！");
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=19478184");
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.scheduleWarpTask(60, 106031310, 1);
                cm.obstacleFallRepeat(5, '蘑菇城_大蘑菇', "蘑菇城_小蘑菇", 3);
                cm.dispose();
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