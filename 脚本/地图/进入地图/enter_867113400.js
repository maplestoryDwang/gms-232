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
      if (cm.getQuestStatus(63045) == 0) {
        cm.warp(867113401, 1, true);
      } else {
        cm.effect_Text(["#fn黑体##fs35#异逝界\r\n#fs20#思索之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
      }
      if (cm.isQuestActive(63045)) {
        cm.addPopupSay(9400205, 4000, "从右边的传送口出去吧！", '', 0);
      }
      if (cm.isQuestFinished(63049) && !cm.isQuestFinished(63051)) {
        cm.updateInfoQuest(63049, "speak=2;exp=1");
        cm.addPopupSay(9400205, 4000, "#h0#，你想去其他地方的话，就跟我对话！", '', 0);
      }
      var O = cm.getNumberFromQuestInfo(63089, 'red');
      var b = cm.getNumberFromQuestInfo(63089, "blue");
      var w = cm.getNumberFromQuestInfo(63089, "green");
      if (O > 0) {
        cm.fieldEffect_BackgroundCanvas(4, 250, 100, 100, 100, 0, O);
      }
      if (b > 0) {
        cm.fieldEffect_BackgroundCanvas(4, 75, 150, 255, 100, 0, b);
      }
      if (w > 0) {
        cm.fieldEffect_BackgroundCanvas(4, 150, 210, 100, 100, 0, w);
      }
      cm.afterlandChangeMapObject("rainbow", 1, cm.isQuestFinished(63085) ? 1 : 0, 0, 0, 0, 0, 0);
      if (cm.isQuestActive(63078)) {
        cm.getMap().spawnReactorIfNotExist(8659073, 0, -130, 130, 0, "growTree01");
        cm.getMap().spawnReactorIfNotExist(8659074, 0, 88, 129, 0, "growTree02");
        cm.getMap().spawnReactorIfNotExist(8659075, 0, 236, 130, 0, "growTree03");
        cm.afterlandChangeMapObject("gT01_0", 1, cm.getNumberFromQuestInfo(63078, 'T1') == 0 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_0", 1, cm.getNumberFromQuestInfo(63078, 'T2') == 0 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT03_0", 1, cm.getNumberFromQuestInfo(63078, 'T3') == 0 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT01_1", 1, cm.getNumberFromQuestInfo(63078, 'T1') == 1 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('gT02_1', 1, cm.getNumberFromQuestInfo(63078, 'T2') == 1 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('gT03_1', 1, cm.getNumberFromQuestInfo(63078, 'T3') == 1 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT01_2", 1, cm.getNumberFromQuestInfo(63078, 'T1') == 2 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_2", 1, cm.getNumberFromQuestInfo(63078, 'T2') == 2 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT03_2", 1, cm.getNumberFromQuestInfo(63078, 'T3') == 2 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT01_3", 1, cm.getNumberFromQuestInfo(63078, 'T1') == 3 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_3", 1, cm.getNumberFromQuestInfo(63078, 'T2') == 3 ? 1 : 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT03_3", 1, cm.getNumberFromQuestInfo(63078, 'T3') == 3 ? 1 : 0, 0, 0, 0, 0, 0);
      } else {
        cm.afterlandChangeMapObject('gT01_0', 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_0", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('gT03_0', 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT01_1", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_1", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject('gT03_1', 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT01_2", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT02_2", 1, 0, 0, 0, 0, 0, 0);
        cm.afterlandChangeMapObject("gT03_2", 1, 0, 0, 0, 0, 0, 0);
        if (cm.isQuestFinished(63078)) {
          cm.afterlandChangeMapObject("gT01_3", 1, cm.getNumberFromQuestInfo(63077, "colorTree1") == 1 ? 0 : 1, 0, 0, 0, 0, 0);
          cm.afterlandChangeMapObject('gT02_3', 1, cm.getNumberFromQuestInfo(63077, "colorTree2") == 1 ? 0 : 1, 0, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("gT03_3", 1, cm.getNumberFromQuestInfo(63077, "colorTree3") == 1 ? 0 : 1, 0, 0, 0, 0, 0);
        } else {
          cm.afterlandChangeMapObject("gT01_3", 1, 0, 0, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("gT02_3", 1, 0, 0, 0, 0, 0, 0);
          cm.afterlandChangeMapObject("gT03_3", 1, 0, 0, 0, 0, 0, 0);
        }
      }
      cm.afterlandChangeMapObject("colorTree1", 1, cm.getNumberFromQuestInfo(63077, "colorTree1") == 0 ? 0 : 1, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('colorTree2', 1, cm.getNumberFromQuestInfo(63077, "colorTree2") == 0 ? 0 : 1, 0, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('colorTree3', 1, cm.getNumberFromQuestInfo(63077, "colorTree3") == 0 ? 0 : 1, 0, 0, 0, 0, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;