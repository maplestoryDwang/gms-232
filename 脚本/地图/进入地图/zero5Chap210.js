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
      cm.npc_ChangeController(2460018, 'oid=27070', 728, -189, 40, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2460019, "oid=27071", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2460020, "oid=27072", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2460021, "oid=27073", 697, -410, 54, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2460022, "oid=27074", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2460023, "oid=27075", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400011, 'oid=27076', 417, -269, 37, 367, 467, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=27077", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27078", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.npc_ChangeController(2460024, "oid=2928978", 482, -240, 36, 432, 532, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2928978", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(让神官们给我们看看他们的手腕吧……)", 41, 2400005, false, true);
      } else if (status === V++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;