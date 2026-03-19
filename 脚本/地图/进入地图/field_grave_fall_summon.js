var status = -1;
var selectionLog = [];
function action(L, I, J) {
  if (status == 0 && L == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = J;
  var B = -1;
  if (status <= B++) {
    cm.dispose();
  } else {
    if (status === B++) {
      cm.obstacleFallRepeat(5, "黑色天堂_蓝色残骸", "黑色天堂_紫色残骸", 5);
      cm.dispose();
      switch (cm.getMapId()) {
        case 310070450:
          if (cm.isQuestActive(39152)) {
            cm.npc_ChangeController(2155118, 'tower3', 457, -605, 2, 407, 507, 1, false, 0, false);
            if (cm.getNumberFromQuestInfo(39152, "success") > 0) {
              cm.npc_SetSpecialAction("oid=tower3", "repaired", -1, 1);
            }
          }
          break;
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;