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
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58750, "underCover=1");
      cm.setPartner(1, 9111012, 80011301, 0);
      cm.spawnMobLimit(9400038, 1, -285, -28, 1);
      cm.sendNormalTalk_Bottom("(我必须在不被警卫发现的情况下走到那里。)", 57, 0, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}