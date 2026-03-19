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
    cm.setPartner(true, 3001251, 80002311, 0);
    cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;failC=1;2=1;3=1;5=1");
    cm.dispose();
  }
}