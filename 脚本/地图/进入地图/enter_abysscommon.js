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
      if (cm.getMapId() == 867147400 && cm.isQuestFinished(64771) && cm.getNumberFromQuestInfo(64764, "talk") == 0) {
        cm.warp(867147015, 0, true);
        cm.updateInfoQuest(64764, "chk1=1;chk2=1;talk=1");
        return;
      }
      if (cm.getMapId() == 867147700 && cm.isQuestFinished(64773) && cm.getQuestStatus(64774) == 0) {
        cm.warp(867147017, 0, true);
        return;
      }
      if (cm.getMapId() == 867147800 && cm.isQuestFinished(64775) && cm.getQuestStatus(64776) == 0) {
        cm.warp(867147019, 0, true);
        return;
      }
      if (cm.getMapId() == 867148000 && cm.isQuestFinished(64778) && cm.getQuestStatus(64779) == 0) {
        cm.warp(867147021, 0, true);
        return;
      }
      if (cm.getMapId() == 867148300 && cm.isQuestFinished(64782) && cm.getQuestStatus(64783) == 0) {
        cm.warp(867147023, 0, true);
        return;
      }
      if (cm.getMapId() == 867148300 && cm.isQuestActive(64784)) {
        cm.warp(867147025, 0, true);
        return;
      }
      if (cm.getMapId() == 867148400 && cm.isQuestFinished(64784) && cm.getQuestStatus(64785) == 0) {
        cm.warp(867147027, 0, true);
        return;
      }
      if (cm.getMapId() == 867148400 && cm.isQuestActive(64786)) {
        cm.warp(867147028, 0, true);
        return;
      }
      if (cm.getQuestStatus(64771) > 0) {
        cm.onActionBarResult(5, 1013);
      }
      var O = cm.getNumberFromQuestInfo(64754, "time");
      cm.深渊远征队_更新倒计时();
      cm.scheduleWarpTask(O, 867147001, 3, false);
      cm.dispose();
    }
  }
}