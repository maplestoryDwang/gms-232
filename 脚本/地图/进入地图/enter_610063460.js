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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063460");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2726612", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2726612", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9201566, "oid=2726685", -1490, 842, 1, -1540, -1440, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2726685", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2726686", -1350, 842, 1, -1400, -1300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2726686", 'summon', 0, 0);
        cm.npc_ChangeController(9201566, "oid=2726687", -1308, 772, 3, -1358, -1258, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2726687", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2726688", -1114, 772, 3, -1164, -1064, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2726688", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2726689", -1146, 842, 1, -1196, -1096, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2726689", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("出什么事了？他们为什么会在这儿？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#其实，把你杀掉更干脆。", 37, 9201539, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#虽然我怀疑你不会理解我们，但我还是决定试一试。", 37, 9201539, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你这人真是够纠结的……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else if (status === V++) {
                    cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                    cm.dispose();
                    cm.eventSKill(0);
                    cm.openNpc("克拉齐亚_第三幕_战斗5");
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2726612");
                    cm.npc_LeaveField("oid=2726612");
                    cm.npc_LeaveField("oid=2726685");
                    cm.npc_LeaveField("oid=2726685");
                    cm.npc_LeaveField("oid=2726686");
                    cm.npc_LeaveField("oid=2726686");
                    cm.npc_LeaveField("oid=2726687");
                    cm.npc_LeaveField("oid=2726687");
                    cm.npc_LeaveField("oid=2726688");
                    cm.npc_LeaveField("oid=2726688");
                    cm.npc_LeaveField("oid=2726689");
                    cm.npc_LeaveField("oid=2726689");
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