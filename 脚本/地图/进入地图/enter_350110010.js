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
    cm.npc_ChangeController(1540795, "oid=56827", -10, 399, 1, -60, 40, 1, false, 0, false);
    cm.updateInfoQuest(33915, "act1=350110010");
    cm.mapleHeroSetList([4]);
    cm.setNumberForQuestCustomData(33900, 4);
    cm.showMapleHero();
    cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
    cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;