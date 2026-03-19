var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage12");
  if (V === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(em);
    return;
  }
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_Monologue("#fs40#B - 12 F", 0);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_Monologue("#fs20#地下12层的地形极其复杂。", 0);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_Monologue("这里处处隐藏着陷阱，而且位置还会不时发生变化，所以路过时一定要小心。", 1);
            } else {
              if (status === O++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 800, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else if (status === O++) {
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.curNodeEventEnd(true);
                cm.setStandAloneMode(false);
                startMap(em);
              } else {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage12", "start");
  cm.getMap().getWeatherEffectNotice("躲开陷阱，跳跃障碍，跑到出口吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;