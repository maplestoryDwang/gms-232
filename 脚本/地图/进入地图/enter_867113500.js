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
    cm.dispose();
    if (cm.getNumberFromQuestInfo(63098, "FirstEnter4") == 0) {
      cm.setNumberForQuestInfo(63098, "FirstEnter4", 1);
      cm.warp(867113501, 0, true);
    } else {
      cm.effect_Text(["#fn黑体##fs35#异逝界\r\n#fs20#童心之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
    }
    if (!cm.isQuestFinished(63072) && cm.getNumberFromQuestInfo(63071, "wall") >= 5) {
      cm.updateInfoQuest(63072, 'Start=1');
    }
    cm.afterlandChangeMapObject('rainbow', 1, cm.isQuestFinished(63085) ? 1 : 0, 0, 0, 0, 0, 0);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;