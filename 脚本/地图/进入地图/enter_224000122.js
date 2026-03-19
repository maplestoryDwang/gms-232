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
    if (cm.isQuestFinished(30410)) {
      cm.addPopupSay(2074100, 3000, "#face2#右边的船上好像有什么东西在动！", '', 0);
    } else {
      cm.addPopupSay(2074100, 3000, "#face2#那个！\r\n右边有清朝艄公！", '', 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;