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
      cm.updateInfoQuest(58748, "underCover=1");
      cm.spawnMobLimit(9400038, 1, -285, -28, 2);
      cm.spawnMobLimit(9400038, 1, 500, -28, 2);
      cm.cameraSwitch_PushSwitchMoveInfo("pt_undercover", 3000);
      cm.sendNormalTalk_Bottom("(我必须在不被警卫发现的情况下走到那里。)", 57, 0, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}