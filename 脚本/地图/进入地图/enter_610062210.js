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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062210");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2676369", 3417, -101, 19, 3367, 3467, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2676369", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#这里是湖的尽头了……逆流而上。\r\n要出发吗？", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2676369", "attack", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=2676369");
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.warp(610062215, 0, true);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.npc_LeaveField("oid=2676369");
              cm.npc_LeaveField("oid=2676369");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}