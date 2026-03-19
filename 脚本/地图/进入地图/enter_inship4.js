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
    cm.spawnMobLimit(8240049, 1, 983, 29, 100);
    cm.spawnMobLimit(8240013, 1, 1285, 60, 100);
    cm.spawnMobLimit(8240013, 1, 1049, 60, 100);
    cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.setPartner(1, 1540766, 80001602, 0);
    cm.cameraSwitch_PushSwitchMoveInfo("center", 3000);
    cm.addPopupSay(1540451, 2000, '快看那里!', "Voice3.img/BlackHeaven/nh/17", 0);
    cm.addPopupSay(1540453, 2000, "请出面迎战吧!", "Voice3.img/BlackHeaven/hel/9", 0);
    cm.spawnMobLimit(8240013, 1, 755, 60, 100);
    cm.useItem(2023401);
    cm.spawnMobLimit(8240013, 1, 939, 60, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;