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
    cm.spawnMobLimit(9601340, 1, -400, 71, 100);
    cm.spawnMobLimit(9601340, 1, -265, 74, 100);
    cm.spawnMobLimit(9601340, 1, -106, 70, 100);
    cm.spawnMobLimit(9601339, 1, 39, 68, 100);
    cm.spawnMobLimit(9601339, 1, 142, 73, 100);
    cm.spawnMobLimit(9601339, 1, 255, 74, 100);
    cm.npc_ChangeController(9401140, "oid=205323", -531, 70, 11, -581, -481, 1, false, 0, false);
    cm.addPopupSay(9401029, 3000, "呃呃……先是迪格，又是食石者，这感觉真奇怪。好像有某种软乎乎的东西来了，它又似乎在喷射碎片……", '', 0);
    cm.addPopupSay(9401029, 3000, "那、那里！那里有人！", '', 0);
    cm.addPopupSay(0, 3000, "#b哪里？！", '', 0);
    cm.addPopupSay(9401029, 3000, "那边尽头！快去救救他们吧！", '', 0);
    cm.updateInfoQuest(64768, "dir=1;chk1=1");
    cm.dispose();
  }
}