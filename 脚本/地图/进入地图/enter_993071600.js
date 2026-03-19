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
    cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;skip=5;dir600=end;skip2=3");
    cm.obstacleFallRepeat(5, "敦凯尔_眩晕魔星", "敦凯尔_沉默魔星", 5);
    cm.dispose();
  }
}