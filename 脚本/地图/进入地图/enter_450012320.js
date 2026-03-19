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
    cm.onSetMapObjectMove("attack", [1, 0, 0]);
    cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
    cm.monadForceMove("giantHit1", 0, 0);
    cm.monadForceMove("giantHit2", 0, 0);
    cm.monadForceMove("giantHit3", 0, 0);
    cm.monadForceMove("giantHit4", 0, 0);
    cm.monadForceMove("giantHit5", 0, 0);
    cm.monadForceMove("giantHit6", 0, 0);
    cm.monadForceMove("giantHit7", 0, 0);
    cm.monadForceMove('giantHit8', 0, 0);
    cm.monadForceMove("giantHit9", 0, 0);
    cm.monadForceMove("giantHit10", 0, 0);
    cm.dispose();
  }
}