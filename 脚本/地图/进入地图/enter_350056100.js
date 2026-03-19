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
    cm.updateInfoQuest(33246, "count=1");
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.updateInfoQuest(33213, "area=D3_Z57;x=3;y=2");
    cm.updateInfoQuest(33213, "area=D3_Z57;x=1;y=2");
    cm.updateInfoQuest(33214, "ul=2000");
    cm.updateInfoQuest(33214, "ul=12000");
    cm.openUI(254);
    cm.spawnMobLimit(8240110, 1, -2145, 777, 1);
    cm.spawnMobLimit(8240086, 1, -4198, 777, 36);
    cm.spawnMobLimit(8240089, 1, -4198, 777, 36);
    cm.spawnMobLimit(8240089, 1, -4198, 777, 36);
    cm.spawnMobLimit(8240086, 1, -3898, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3898, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3898, 777, 36);
    cm.spawnMobLimit(8240086, 1, -3598, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3598, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3598, 777, 36);
    cm.spawnMobLimit(8240086, 1, -3298, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3298, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3298, 777, 36);
    cm.spawnMobLimit(8240086, 1, -2998, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2998, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2998, 777, 36);
    cm.spawnMobLimit(8240086, 1, -2698, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2698, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2698, 777, 36);
    cm.spawnMobLimit(8240090, 1, -3916, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3916, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3916, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3916, 777, 36);
    cm.spawnMobLimit(8240090, 1, -3647, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3647, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3647, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3647, 777, 36);
    cm.spawnMobLimit(8240090, 1, -3790, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3790, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3790, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3790, 777, 36);
    cm.spawnMobLimit(8240090, 1, -3713, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3713, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3713, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3713, 777, 36);
    cm.spawnMobLimit(8240090, 1, -3031, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3031, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3031, 777, 36);
    cm.spawnMobLimit(8240089, 1, -3031, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2276, 777, 36);
    cm.spawnMobLimit(8240086, 1, -2406, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2204, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2378, 777, 36);
    cm.spawnMobLimit(8240090, 1, -2938, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2938, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2938, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2938, 777, 36);
    cm.spawnMobLimit(8240090, 1, -2588, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2588, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2588, 777, 36);
    cm.spawnMobLimit(8240089, 1, -2588, 777, 36);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;