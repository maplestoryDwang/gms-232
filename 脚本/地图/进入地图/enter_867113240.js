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
    if (cm.isQuestActive(63031)) {
      cm.playerMessage(5, "远处能看见有一只戴着闪亮项链的蝙蝠怪。");
      cm.addPopupSay(9400205, 4000, "那边好像见到一只戴着闪亮项链的蝙蝠怪呢？！", '', 0);
      cm.spawnMobLimit(9402055, 1, -180, -207, 1);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;