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
    cm.hideNpc(9000393);
    cm.hideNpc(9400496);
    cm.hideNpc(9400495);
    cm.hideNpc(9400427);
    cm.hideNpc(9001157);
    cm.hideNpc(9001155);
    cm.hideNpc(9310111);
    cm.hideNpc(9400428);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;