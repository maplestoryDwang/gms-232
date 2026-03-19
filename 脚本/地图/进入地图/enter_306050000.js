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
    cm.npc_ChangeController(2550115, 'oid=22132', 1217, 35, 4, 1167, 1267, 1, false, false);
    cm.npc_ChangeController(2500001, "oid=22133", 374, 455, 59, 324, 424, 1, false, false);
    cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
    cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
    cm.forceCompleteQuest(32692);
    cm.updateInfoQuest(32692, "enter=1");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;