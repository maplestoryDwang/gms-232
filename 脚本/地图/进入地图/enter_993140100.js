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
  } else if (status === V++) {
    if (cm.isQuestFinished(39815) && !cm.isQuestFinished(39816)) {
      cm.npc_ChangeController(3004431, "oid=776864", -590, -50, 20, -640, -540, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=776864", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=776865", -500, -50, 19, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=776865", 'summon', 0, 0);
      cm.npc_ChangeController(3004435, "oid=776866", -134, -50, 15, -184, -84, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=776866", 'summon', 0, 0);
      cm.npc_ChangeController(3004436, "oid=776867", -50, -50, 2, -100, 0, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=776867", "summon", 0, 0);
      cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h0;07=h1;17=h1;08=h1;09=h0;19=h1");
    }
    cm.dispose();
  }
}