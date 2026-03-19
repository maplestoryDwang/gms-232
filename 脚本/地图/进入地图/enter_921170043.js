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
    cm.playerMessage(5, "去击退塔尔加和斯卡利昂。");
    cm.spawnMobLimit(9101092, 1, -165, -46, 100);
    cm.spawnMobLimit(9101093, 1, 177, -46, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;