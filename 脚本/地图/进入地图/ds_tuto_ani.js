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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      if (cm.getPlayer().getGender() == 0) {
        cm.playVideoByScript("DemonSlayer1.avi");
      } else {
        cm.playVideoByScript("DemonSlayer2.avi");
      }
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.dispose();
      cm.warp(931050000, 0, false);
    }
  }
}