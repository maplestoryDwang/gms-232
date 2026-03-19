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
    cm.userSetFieldFloating(610064310, 3, 3, 10);
    cm.onCameraTilt(2, 4000);
    cm.playerMessage(-1, "你必须消灭所有怪兽才能前往下一区域。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/5");
    cm.dispose();
  }
}