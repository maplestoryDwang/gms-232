function action(f, W, U) {
  var V = cm.getEventManager('组队任务_女神塔');
  if (V == null) {
    cm.dispose();
    return;
  }
  for (var w = 4001044; w < 4001064; w++) {
    cm.removeAll(w);
  }
  switch (cm.getMapId()) {
    case 920010100:
      cm.givePartyExp_PQ(120, 1);
      cm.warpParty(920011100);
      break;
    default:
      if (!cm.canHold(4001158, 1)) {
        cm.sendOk("背包内必须留出一个空间。");
        cm.dispose();
        return;
      }
      cm.gainItem(4001158, 1);
      cm.getPlayer().endPartyQuest(1203);
      cm.getPlayer().modifyCSPoints(1, 3000);
      cm.warp(200080101);
      cm.addTrait('意志', 50);
      cm.addTrait('魅力', 10);
      break;
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;