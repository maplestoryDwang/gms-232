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
  l == 1 ? status++ : status--;
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++)
    cm.dispose();
  else if (status === R++) {
    if (cm.getMapId() == 410002080) {
      if (cm.getMap().countMonsterById(8880614) > 0) {
        cm.askYesNoS_Bottom('还没打开宝箱，现在就离开这里吗？\r\n');
      } else {
        cm.askYesNoS_Bottom('现在要离开这里吗？\r\n');
      }
    } else {
      cm.askYesNoS_Bottom('还没击败塞伦，现在就离开这里吗？\r\n');
    }
  } else if (status === R++) {
    cm.warp(410000670, 4);
    cm.dispose();
  }
}