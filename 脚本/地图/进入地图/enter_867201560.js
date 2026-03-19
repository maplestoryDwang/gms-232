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
    cm.setPartner(1, 9400580, 80011692, 0);
    cm.Hidden_background("ice01", 0);
    cm.Hidden_background('ice02', 0);
    cm.Hidden_background("ice03", 0);
    cm.forceCompleteQuest(64078);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;