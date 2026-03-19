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
      cm.npc_ChangeController(1540663, "oid=35953", 789, -246, 37, 739, 839, 5, true, 0, false);
      cm.npc_ChangeController(1540664, "oid=35954", 162, 7, 36, 112, 212, 4, true, 0, false);
      cm.npc_ChangeController(1540665, "oid=35955", 583, 58, 10, 533, 633, 5, true, 0, false);
      cm.npc_ChangeController(1540446, "oid=35956", -138, 58, 3, -188, -88, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040100");
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      if (cm.isQuestActive(33202)) {
        cm.getTopMsgFont("配件可以从避难处的左边地图中获得. ", 3, 20, 20, 0);
      } else if (cm.isQuestActive(33203)) {
        cm.getTopMsgFont("配件可以从避难处的右边地图中获得. ", 3, 20, 20, 0);
      }
      if (cm.isQuestFinished(33202) && cm.getNumberFromQuestInfo(33200, "androidHelmet") == 1) {
        cm.setNumberForQuestInfo(33200, "androidHelmet", 2);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;