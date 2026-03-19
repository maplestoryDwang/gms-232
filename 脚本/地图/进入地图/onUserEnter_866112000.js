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
      cm.sendNormalTalk("ok,老大!我的表演时刻再次来临!", 5, 9390302, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("准备好了的话，就可以出发！", 5, 9390302, true, true);
      } else if (status === V++) {
        cm.spawnMobLimit(9390928, 1, 461, 31, 5);
        cm.spawnMobLimit(9390928, 1, 561, 31, 5);
        cm.spawnMobLimit(9390928, 1, 661, 31, 5);
        cm.spawnMobLimit(9390928, 1, 761, 31, 5);
        cm.spawnMobLimit(9390928, 1, 861, 31, 5);
        cm.forceStartQuest(59013, '');
        cm.dispose();
      }
    }
  }
}