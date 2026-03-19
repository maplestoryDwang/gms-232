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
    cm.userSetFieldFloating(610064330, 5, 5, 5);
    cm.onCameraTilt(-2, 4000);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.dispose();
  }
}