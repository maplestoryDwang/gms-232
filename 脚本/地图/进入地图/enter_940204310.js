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
    cm.addPopupSay(0, 2500, "#face0#虽然是记忆中的存在……但还是很可怕。", '', 0);
    cm.addPopupSay(3003480, 2500, "#face13#存在，但又不存在的人。失去了灵魂的……", '', 0);
    cm.addPopupSay(3003480, 2500, "#face13#虽然不是实际的艾尔达，但是……我不想变成那个样子。", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;