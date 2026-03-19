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
    cm.getTopMsgFont("在地下通道的尽头，有通往黑魔法师研究室的门。", 3, 20, 8, 0, 0);
    cm.dispose();
  }
}