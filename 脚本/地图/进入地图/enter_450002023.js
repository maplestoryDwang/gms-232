var status = -1;
function action(f, E, e) {
  status++;
  cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
  cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
  cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
  cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
  cm.dispose();
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {} else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;