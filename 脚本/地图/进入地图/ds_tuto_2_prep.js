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
    cm.npc_ChangeController(2159309, 'oid=923623', 550, 50, 5, 500, 600, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=923623", 'summon', 0, 0);
    cm.setSessionValue("arkyrim0", '923623');
    cm.forceCompleteQuest(23205);
    cm.forceStartQuest(23204, '');
    cm.teachSkill(30010166, 1, 1);
    cm.teachSkill(30011167, 1, 1);
    cm.teachSkill(30011168, 1, 1);
    cm.teachSkill(30011169, 1, 1);
    cm.teachSkill(30011170, 1, 1);
    cm.dispose();
  }
}