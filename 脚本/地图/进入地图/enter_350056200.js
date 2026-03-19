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
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.updateInfoQuest(33213, "area=D3_Z57;x=2;y=2");
    cm.updateInfoQuest(33214, 'ul=16000');
    cm.openUI(254);
    cm.spawnMobLimit(8240087, 1, -2220, 777, 37);
    cm.spawnMobLimit(8240088, 1, -2220, 777, 37);
    cm.spawnMobLimit(8240088, 1, -2220, 777, 37);
    cm.spawnMobLimit(8240087, 1, -1920, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1920, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1920, 777, 37);
    cm.spawnMobLimit(8240087, 1, -1620, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1620, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1620, 777, 37);
    cm.spawnMobLimit(8240087, 1, -1320, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1320, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1320, 777, 37);
    cm.spawnMobLimit(8240087, 1, -1020, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1020, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1020, 777, 37);
    cm.spawnMobLimit(8240087, 1, -720, 777, 37);
    cm.spawnMobLimit(8240088, 1, -720, 777, 37);
    cm.spawnMobLimit(8240088, 1, -720, 777, 37);
    cm.spawnMobLimit(8240087, 1, -420, 777, 37);
    cm.spawnMobLimit(8240088, 1, -420, 777, 37);
    cm.spawnMobLimit(8240088, 1, -420, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1578, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1578, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1578, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1404, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1404, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1404, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1720, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1720, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1720, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1752, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1752, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1752, 777, 37);
    cm.spawnMobLimit(8240088, 1, -623, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1390, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1390, 777, 37);
    cm.spawnMobLimit(8240088, 1, -1390, 777, 37);
    cm.spawnMobLimit(8240087, 1, -4, 777, 37);
    cm.spawnMobLimit(8240088, 1, 555, 777, 37);
    cm.spawnMobLimit(8240087, 1, -101, 777, 37);
    cm.spawnMobLimit(8240088, 1, -15, 777, 37);
    cm.spawnMobLimit(8240088, 1, -15, 777, 37);
    cm.spawnMobLimit(8240088, 1, -15, 777, 37);
    cm.spawnMobLimit(8240088, 1, 94, 777, 37);
    cm.spawnMobLimit(8240088, 1, 94, 777, 37);
    cm.spawnMobLimit(8240088, 1, 94, 777, 37);
    cm.spawnMobLimit(8240110, 1, -168, 777, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;