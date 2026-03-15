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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    if(cm.isQuestActive(62007) && !cm.haveItem(4034637, 1)){
      cm.sendOkS('找到了。');
      cm.gainItem(4034637, 1);
    }
    cm.dispose();
  }
}