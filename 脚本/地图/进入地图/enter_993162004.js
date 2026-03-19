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
      if (cm.getQuestStatus(39651) > 0) {
        cm.dispose();
        return;
      }
      cm.teachSkill(80011957, 1, 1);
      cm.teachSkill(80002323, 0, -1);
      cm.teachSkill(80002323, 1, 1);
      while (cm.getLevel() < 10) {
        cm.getPlayer().levelUp();
      }
      cm.dispose();
    }
  }
}