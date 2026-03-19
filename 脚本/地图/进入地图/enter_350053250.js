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
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, "graph");
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 1311, -286, 0, "wall");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, "light1");
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;act5=350053250");
      cm.npc_ChangeController(1540490, "oid=284816604", 13, -513, 7, -37, 63, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284816604", "summon", 0, 0);
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.sendNormalTalk_Bottom('塞好之后喊我。', 37, 1540490, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(350053300, 0, true);
      cm.npc_LeaveField("oid=284816604");
      cm.npc_LeaveField("oid=284816604");
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;