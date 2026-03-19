function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.isQuestActive(65986)) {
        cm.dispose();
        cm.warp(875003063, 0, false);
      } else {
        if (cm.isQuestActive(65937)) {
          cm.dispose();
          cm.warp(875001000, 0, false);
        } else {
          if (cm.isQuestActive(65926)) {
            var w = "#fn#";
            w += "#fs15#我现在应该……\r\n";
            w += "#L0##b继续消灭木杂碎#l\r\n";
            w += "#L1##b回到玄山派#l\r\n";
            cm.askMenuS_Bottom(w);
          } else if (cm.getQuestStatus(65935) > 0) {
            cm.warp(875000011, 2, false);
            cm.dispose();
          } else {
            cm.warp(875000010, 2, false);
            cm.dispose();
          }
        }
      }
    } else {
      if (status === R++) {
        switch (x) {
          case 0:
            cm.dispose();
            cm.startQuestScript(3003758, 65926);
            break;
          case 1:
            cm.dispose();
            cm.warp(875000000, 0, false);
            break;
        }
      }
    }
  }
}