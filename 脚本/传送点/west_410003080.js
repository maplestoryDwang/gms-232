function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (cm.isQuestActive(38115)){
    if (status == 0 && l == 0) {
      cm.dispose();
      return;
    }
    l == 1 ? status++ : status--;
    selectionLog[status] = x;
    var i = -1;
    if (status <= i++)
      cm.dispose();
    else if (status === i++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(3005055, "oid=381151", -387, 262, 100, -437, -337, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=381151", "special", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
    } else if (status === i++) {
      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
      cm.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status == i++) {
      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -280, 262);
    } else if (status === i++) {
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
      cm.npc_ChangeController(3005054, "oid=381152", -285, 262, 100, -335, -235, 1, true, 1000, false);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
      cm.sendNormalTalk_Bottom("#face0#……", 36, 3004001, false, true);
    } else if (status == i++) {
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == i++) {
      cm.npc_LeaveField("oid=381151");
      cm.npc_LeaveField("oid=381152");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(false, true, false);
      cm.warp(410003000, 2, true);
      cm.dispose();
    }
  } else {
    cm.warp(410003000, 2, false);
    cm.dispose();
  }

}