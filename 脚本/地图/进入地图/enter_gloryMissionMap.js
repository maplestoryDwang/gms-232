var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
var maps = [100020200, 102020300, 101030000, 400010400, 103030100, 105030400, 200020000, 211040100, 230010300, 260010400, 261010101, 221023100, 401020400, 240020100, 220010000, 250010400, 224000120, 240040520, 251010100];
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
    if (cm.getMapId() == maps[cm.getNumberFromQuestInfo(500799, "index")] && cm.getNumberFromQuestInfo(500799, "state") == 1) {
      cm.onSetBackEffect("gloryMission", 1, 1, 0, 0);
      cm.OnStartNavigation(200020000, 0, "gloryMission", 0);
    }
    cm.dispose();
  }
}