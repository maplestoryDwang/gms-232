var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 910400200) {
    if (!cm.isQuestActive(32249)) {
      cm.dispose();
      return;
    }
  } else {
    cm.dispose();
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("需要通过次元传送口移动到万神殿吗？", 0, 1520011);
    } else if (status === V++) {
      cm.npc_LeaveField("oid=1226864");
      cm.dispose();
      cm.warp(400000001, 1, false);
    }
  }
}