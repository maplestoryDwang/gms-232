var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestActive(39920) && cm.getNumberFromQuestInfo(39921, "dir") == 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
    if (cm.isQuestFinished(39917) && cm.getQuestStatus(39920) == 0) {
      cm.onSetMapObjectMove("cernium_sky_a", [1, 255, 1]);
      cm.onSetMapObjectMove("cernium_sky_c", [1, 255, 1]);
      cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 100, 0);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 255, 1]);
    } else {
      cm.onSetMapObjectMove("cernium_sky_a", [1, 0, 1]);
      cm.onSetMapObjectMove("cernium_sky_c", [1, 0, 1]);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 0, 1]);
    }
    if (cm.getQuestStatus(39920) > 0 && cm.getQuestStatus(39921) == 0) {
      cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 0, 1]);
    }
    cm.dispose();
  }
}
function action2(f, E, e) {
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
      cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 0, 1]);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Text(["#fn黑体##fs18#战争结束几天后。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.warp(410000810, 0, true);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.updateInfoQuest(39921, "dir=1");
            cm.dispose();
          }
        }
      }
    }
  }
}