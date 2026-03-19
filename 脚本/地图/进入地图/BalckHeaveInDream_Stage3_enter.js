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
      cm.onHireTutorById(0, 80001600, 350013200);
      cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540500, "oid=13008052", -2450, 50, 40, -2500, -2400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=13008052", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001600, 350013200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("从这边走。我也好久没到这里来了。\r\n这里的怪物果然也变多了。", 37, 1540500, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=13008052");
            cm.npc_LeaveField("oid=13008052");
            cm.setInGameDirectionMode(false, true, false);
            cm.onHireTutorById(1, 80001600, 350013300);
            cm.updateInfoQuest(33159, "map=300");
            cm.dispose();
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