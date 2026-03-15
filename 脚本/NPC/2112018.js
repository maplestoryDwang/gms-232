function action(f, W, U) {
  cm.removeAll(4001130);
  cm.removeAll(4001131);
  cm.removeAll(4001132);
  cm.removeAll(4001133);
  cm.removeAll(4001134);
  cm.removeAll(4001135);
  if (em != null) {
    var V = cm.getMapId() == 926100600 ? 4001160 : 4001159;
    if (!cm.canHold(V, 1)) {
      cm.sendOk("Please clear 1 ETC slot.");
      cm.dispose();
      return;
    }
    cm.gainItem(V, 1);
    if (em.getProperty("stage") === '2') {
      cm.getPlayer().modifyCSPoints(1, 5000);
      cm.gainExpR(140000);
    } else {
      cm.getPlayer().modifyCSPoints(1, 3500);
      cm.gainExpR(105000);
    }
  }
  cm.addTrait('意志', 25);
  cm.addTrait('感性', 1);
  cm.getPlayer().endPartyQuest(1205);
  cm.warp(cm.getMapId() == 926100600 ? 926100700 : 926110700, 0);
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;