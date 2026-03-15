var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      var w = "请选择目的地。\r\n#b#e#L0#废都地铁#r(注意：栖息有蝙蝠、幽灵等)#b#n#l";
      if (cm.getQuestStatus(1600) > 0 && !cm.isQuestFinished(1602)) {
        w += "\r\n#e#L10#维修中的地铁#l#n";
      }
      if (cm.isQuestFinished(34400)) {
        w += "\r\n#e#L1#废都塔#l#n";
      }
      cm.askMenu(w, 0, 1052007);
    } else {
      if (status === V++) {
        switch (U) {
          case 0:
            cm.dispose();
            cm.warp(103020100, 2, false);
            break;
          case 1:
            cm.dispose();
            cm.warp(103041000, 3, false);
            break;
          case 10:
            cm.dispose();
            cm.warp(931050400, 0);
            cm.forceStartQuest(1640, '');
            break;
        }
      }
    }
  }
}