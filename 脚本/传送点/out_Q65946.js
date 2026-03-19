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
      cm.askAcceptDecline_Bottom("#face4#还没清理完这里，现在就要离开吗？", cm.getPlayer().getGender() == 0 ? 9401275 : 9401276);
    } else if (status === R++) {
      cm.dispose();
      cm.warp(875001102, 0, false);
      cm.forceForfeitQuest(65946);
    }
  }
}