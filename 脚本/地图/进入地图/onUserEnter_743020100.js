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
    cm.forceCompleteQuest(65463);
    cm.forceStartQuest(501015, '');
    cm.forceCompleteQuest(501015);
    cm.forceCompleteQuest(52401);
    cm.teachSkill(80011957, 1, 1);
    cm.teachSkill(5081023, -1, 0);
    cm.teachSkill(5080022, -1, 0);
    cm.teachSkill(5081003, -1, 0);
    cm.teachSkill(5081002, -1, 0);
    cm.teachSkill(5081020, -1, 0);
    cm.dispose();
    cm.warp(743030000, 0, false);
  }
}