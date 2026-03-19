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
  } else {
    if (status === V++) {
      var O = cm.getMapId() <= 105200500;
      var b = Math.floor(cm.getMapId() % 1000 / 100);
      var w = 7120110 + (b <= 2 ? 0 : 1) + (O ? 0 : 2);
      for (var V = 0; V < 20; V++) {
        var L = cm.getMap().getRandomFinePosition();
        cm.spawnMobLimit(w, 1, L.x, L.y, 20);
      }
      cm.playerMessage(-1, "必须消灭掉庭院中所有的小恶魔，才能移动到下一个场所。");
      if (cm.isQuestFinished(30019) && (cm.getMapId() == 105200300 || cm.getMapId() == 105200700)) {
        cm.hideNpc(1064007);
        cm.npc_ChangeController(1064009, "1064009", 906, 247, 1, true, false);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;