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
    cm.spawnMobLimit(8240011, 1, 384, 60, 100);
    cm.spawnMobLimit(8240011, 1, 637, 60, 100);
    cm.spawnMobLimit(8240011, 1, 821, 60, 100);
    cm.spawnMobLimit(8240011, 1, 596, -5, 100);
    cm.spawnMobLimit(8240011, 1, 748, -5, 100);
    cm.spawnMobLimit(8240011, 1, 897, -5, 100);
    cm.spawnMobLimit(8240011, 1, 1239, 60, 100);
    cm.spawnMobLimit(8240011, 1, 1334, -5, 100);
    cm.npc_ChangeController(1540472, "oid=34373", 1559, 60, 10, 1509, 1609, 1, false, 0, false);
    cm.npc_ChangeController(1540472, "oid=34374", 329, 60, 5, 279, 363, 0, false, 0, false);
    cm.npc_ChangeController(1540473, "oid=34375", 754, -5, 18, 741, 804, 1, false, 0, false);
    cm.npc_ChangeController(1540473, 'oid=34376', -195, 60, 3, -245, -145, 1, false, 0, false);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.cameraSwitch_PushSwitchMoveToPos(1300, 20, 3000);
    cm.addPopupSay(1540451, 2000, "黑色之翼的机械士兵居然到了这里……!", "Voice3.img/BlackHeaven/nh/16", 0);
    cm.spawnMobLimit(8240011, 1, -5, 60, 100);
    cm.spawnMobLimit(8240011, 1, -119, 60, 100);
    cm.spawnMobLimit(8240011, 1, 76, -3, 100);
    cm.spawnMobLimit(8240011, 1, 154, -3, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;