var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(63071, "wall") >= 5 && cm.getMapId() == 867113300) {
    cm.warp(867113302, 0, true);
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
      cm.dispose();
      if (cm.getNumberFromQuestInfo(63098, "turn") >= 3 && cm.getQuestStatus(63093) == 0) {
        cm.forceStartQuest(63093, "happy");
      }
      if (cm.isQuestActive(63068)) {
        cm.getMap().resetReactors();
        cm.getMap().spawnReactorIfNotExist(8659070, 0, 623, 68, 0, "q63068_reactor");
        cm.afterlandChangeMapObject("q63068_out_pos", 1, 1, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63068_in", 1, 0, 3000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63068_out", 1, 0, 0, 0, 0, 0, 0);
      } else if (cm.isQuestFinished(63068)) {
        cm.afterlandChangeMapObject("q63068_out_pos", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('q63068_in', 1, 0, 3000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63068_out", 1, 1, 3000, 0, 0, 0, 0);
      } else {
        cm.afterlandChangeMapObject("q63068_out_pos", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('q63068_in', 1, 1, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63068_out", 1, 0, 0, 0, 0, 0, 0);
      }
      if (cm.isQuestActive(63070)) {
        cm.getMap().resetReactors();
        if (cm.getNumberFromQuestInfo(63070, "end") == 0) {
          cm.getMap().spawnReactorIfNotExist(8659072, 0, 838, 69, 0, "q63070_reactor1");
          cm.afterlandChangeMapObject("q63070Pen_out", 1, 0, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070Pen_out_pos", 1, 1, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070_in", 1, 1, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070_out_pos", 1, 0, 1000, 0, 0, 0, 0);
        } else {
          cm.getMap().spawnReactorIfNotExist(8659071, 0, 910, 67, 0, "q63070_reactor2");
          cm.afterlandChangeMapObject("q63070Pen_in", 1, 0, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070Pen_out", 1, 1, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070Pen_out_pos", 1, 0, 0, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070_in", 1, 0, 1000, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("q63070_out_pos", 1, 1, 1000, 0, 0, 0, 0);
        }
        cm.afterlandChangeMapObject("q63070Pen_in", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_out", 1, 0, 0, 0, 0, 0, 0);
      } else if (cm.isQuestFinished(63070)) {
        cm.afterlandChangeMapObject("q63070Pen_in", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070Pen_out", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070Pen_out_pos", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_in", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_out", 1, 1, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_out_pos", 1, 0, 1000, 0, 0, 0, 0);
      } else {
        cm.afterlandChangeMapObject("q63070Pen_in", 1, 1, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070Pen_out", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070Pen_out_pos", 1, 0, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('q63070_in', 1, 1, 1000, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_out", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("q63070_out_pos", 1, 0, 1000, 0, 0, 0, 0);
      }
      cm.afterlandChangeMapObject("torch", 1, cm.getNumberFromQuestInfo(63072, "Start") == 0 && cm.getNumberFromQuestInfo(63090, "DnN") == 1 ? 1 : 0, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject("destroy", 1, cm.getNumberFromQuestInfo(63071, "wall") >= 5 ? 1 : 0, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject("flower", 1, cm.getNumberFromQuestInfo(63072, "Start") == 1 ? 1 : 0, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('q63103s', 1, cm.isQuestFinished(63103) ? 0 : 1, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('q63103e', 1, cm.isQuestFinished(63103) ? 1 : 0, 0, 0, 0, 0, 0);
      if (cm.getNumberFromQuestInfo(63098, "FirstEnter2") == 0) {
        cm.warp(867113301, 1, true);
      } else {
        cm.effect_Text(["#fn黑体##fs35#异逝界\r\n#fs20#财物之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
      }
      var O = cm.getNowTimeString(3);
      if (cm.getStringFromQuestInfo(63120, 'lastDate') != O && cm.getNumberFromQuestInfo(63120, "start") > 0) {
        cm.setStringForQuestInfo(63120, "lastDate", O);
        cm.setNumberForQuestInfo(63120, "start", 1);
        cm.setNumberForQuestInfo(63120, 'dayNR', 0);
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;