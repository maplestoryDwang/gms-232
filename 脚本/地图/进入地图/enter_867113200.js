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
      var O = cm.getNumberFromQuestInfo(63091, 'SunState');
      for (var V = 0; V <= 9; V++) {
        cm.afterlandChangeMapObject("SunObj" + V, 1, O == V ? 1 : 0, 0, 0, 0, 0, 0);
      }
      cm.dispose();
      if (!cm.isQuestFinished(63027)) {
        if (cm.getNumberFromQuestInfo(63091, "BestWarrior") == 0) {
          cm.warp(867113201, 0, true);
        } else {
          cm.setMobImage("SoundEff.img/PL_AfterLand/clear_day", 200);
          cm.updateInfoQuest(63027, "reward=1;first=1");
          cm.forceCompleteQuest(63027);
          cm.gainExp(635200);
          cm.updateInfoQuest(63027, "reward=1;exp=1;first=1");
          cm.forceStartQuest(63028, '');
          cm.updateInfoQuest(63028, "start=1");
          cm.warp(867113202, 4, true);
        }
      } else {
        cm.effect_Text(["#fn黑体##fs30#异逝界\r\n#fs20#勇士之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
      }
      if (cm.isQuestFinished(63028) && !cm.isQuestFinished(63030)) {
        cm.addPopupSay(9400205, 4000, "现在大家都在休息耶？\r\n去打听钥匙的事吧。", '', 0);
        cm.updateInfoQuest(63029, "speak=2");
      } else {
        if (cm.isQuestActive(63034)) {
          cm.openNpc('异逝界_勇士之地挑战');
        } else {
          if (cm.isQuestFinished(63055) && cm.getQuestStatus(63059) == 0) {
            cm.updateInfoQuest(63059, 'start=1');
            cm.warp(867113204, 1, true);
          } else if (cm.getNumberFromQuestInfo(63098, "turn") >= 3 && cm.getQuestStatus(63062) == 0) {
            cm.warp(867113208, 1, true);
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;