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
      cm.npc_ChangeController(9400609, "oid=7537485", -600, -150, 43, -650, -550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537485", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7537486", -1060, 50, 38, -1110, -1010, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537486", "summon", 0, 0);
      cm.npc_ChangeController(9400590, "oid=7537487", -400, 50, 52, -450, -350, 1, true, false);
      cm.npc_SetSpecialAction("oid=7537487", "summon", 0, 0);
      cm.sendNewEffects(17, [2000, 1000, 2000, -600, -120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('#b那是？！', 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#独眼触须怪？怎么会飞在天上？", 37, 9400590, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b我们得过去看看！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNewEffects(19, [0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/eyeeyeportal", 128);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else if (status === V++) {
                  cm.forceCompleteQuest(64158);
                  cm.forceCompleteQuest(64121);
                  cm.removeAll(4036372);
                  cm.warp(867201690, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=7537485");
                  cm.npc_LeaveField("oid=7537485");
                  cm.npc_LeaveField("oid=7537486");
                  cm.npc_LeaveField("oid=7537486");
                  cm.npc_LeaveField("oid=7537487");
                  cm.npc_LeaveField("oid=7537487");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;