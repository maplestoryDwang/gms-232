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
      cm.spawnMob(9300810, -230, 25);
      cm.spawnMob(9300810, 80, 25);
      cm.spawnMob(9300810, 490, 25);
      cm.spawnMob(9300810, 800, 25);
      cm.spawnMob(9300810, -200, -215);
      cm.spawnMob(9300810, 200, -215);
      cm.spawnMob(9300810, 600, -215);
      cm.spawnMob(9300810, -200, -455);
      cm.spawnMob(9300810, 200, -455);
      cm.spawnMob(9300810, 600, -455);
      cm.sendOkS("老虎？难道村子附近有老虎出没的传闻是真的吗？难道阿琅……先把#r#o9300810##k除掉再说。");
    } else if (status === V++) {
      cm.updateInfoQuest(38021, '');
      cm.forceStartQuest(38021, '');
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;