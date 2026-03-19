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
    cm.spawnMobLevel(9601662, 1, 25, 450, 82);
    cm.addPopupSay(9401280, 3000, "#face1#来吧！我要打败你！", '', 0);
    cm.dispose();
  }
}