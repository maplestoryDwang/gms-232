var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(35976) > 0 && !cm.isQuestFinished(35977) && cm.getNumberFromQuestInfo(35977, "Boss") < 1) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
    cm.npc_ChangeController(1013421, 'oid=991', -181, -101, 1, -231, -131, 1, false, false);
    cm.npc_ChangeController(1013422, "oid=992", -298, -101, 1, -348, -248, 1, false, false);
    cm.npc_ChangeController(1013433, "oid=993", -38, 66, 5, -88, -6, 1, false, false);
    cm.npc_ChangeController(1013432, "oid=994", -740, 66, 4, -790, -690, 1, false, false);
    cm.npc_ChangeController(1013423, "oid=995", -476, -101, 1, -526, -426, 0, false, false);
    cm.hideNpc(1013449);
    cm.npc_ChangeController(1013449, "oid=7264106", -385, -225, 2, -435, -335, 0, false, true);
    cm.npc_SetSpecialAction("oid=7264106", "summon", 0, 0);
    cm.updateInfoQuest(35977, '');
    cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;32=h1;13=h0;33=h1;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h1;20=h0;01=h0;21=h1;02=h0;22=h1;03=h0;23=h1;04=h0;05=h0;06=h0;07=h0;27=h0;08=h0;28=h0;09=h0;29=h1");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;