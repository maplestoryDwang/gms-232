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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062215");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2676510", 3417, -101, 19, 3367, 3467, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2676510", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#现在我只需要等待这些湖水流进帝国就好了。", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2676510", -1, 300, 100);
          cm.inGameDirectionEvent_AskAnswerTime(4200);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=2676510");
            cm.npc_LeaveField("oid=2676510");
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
              cm.updateInfoQuest(61369, "1=1;2=1;3=1;4=1");
              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
            } else if (status === V++) {
              cm.eventSKill(0);
              cm.warp(610062220, 0, true);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}