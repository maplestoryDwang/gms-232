var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (em == null) {
    cm.warp(867201760, 0);
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.Hidden_background("pt00", 0);
    cm.setPartner(1, 9400646, 80011692, 0);
    cm.spawnMobLimit(9402238, 1, -750, 404, 3);
    cm.spawnMobLimit(9402238, 1, -650, 404, 3);
    cm.spawnMobLimit(9402242, 1, -550, 404, 1);
    cm.spawnMobLimit(9402238, 1, -450, 404, 3);
    cm.playerMessage(-1, "消灭怪物并进入森林深处吧 ");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;