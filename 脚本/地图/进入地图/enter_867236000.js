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
  } else if (status === V++) {
    cm.teachSkill(80011562, -1, 0);
    cm.teachSkill(80011565, -1, 0);
    cm.teachSkill(80011561, -1, 0);
    cm.teachSkill(80011567, -1, 0);
    cm.teachSkill(80011641, -1, 0);
    cm.onActionBarResult(6, -1);
    cm.playerMessage(5, "赶紧去迎战雾中黑影吧。");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;