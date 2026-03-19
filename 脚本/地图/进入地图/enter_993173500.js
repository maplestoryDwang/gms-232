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
    cm.updateInfoQuest(100346, "girl=0;ptmsg=0;man=0;saved=0;attmsg=0;boy=0;woman=0");
    cm.updateInfoQuest(100347, 'bomb=0');
    cm.dispose();
  }
}