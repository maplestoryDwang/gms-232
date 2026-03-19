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
  } else {
    if (status === V++) {
      cm.forceStartQuest(34750, '');
      cm.updateInfoQuest(34749, "enter=1");
      cm.setPartner(1, 3002020, 80002360, 0);
      cm.sendNormalTalk_Bottom("#face11#好了！必须把我们看到的事情，告诉村里的大人们！", 36, 3002110, false, true);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;