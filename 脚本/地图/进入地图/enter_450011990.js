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
    if (cm.isQuestActive(35727)) {
      cm.addPopupSay(0, 2000, "声音是从右侧传过来的……过去看看吧……", '', 0);
    }
    cm.dispose();
  }
}