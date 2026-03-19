var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var O = V == null ? null : V.getProperty("stage" + parseInt('04'));
  if (O === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(V);
    return;
  }
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === b++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === b++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 04 F\r\n\r\n#fs22#这个......", 0);
        } else {
          if (status === b++) {
            cm.inGameDirectionEvent_Monologue("以中间的峡谷为中心, 要使右侧的峭壁和左侧的峭壁保持均衡!", 0);
          } else {
            if (status === b++) {
              cm.inGameDirectionEvent_Monologue("根据状态需要往返于左侧和右侧的峭壁消灭怪物, 以保持两侧的均衡。", 0);
            } else {
              if (status === b++) {
                cm.inGameDirectionEvent_Monologue("在越过峡谷时一定要小心不要跌落!", 1);
              } else if (status === b++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.setStandAloneMode(false);
                startMap(V);
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
  f.setProperty('stage' + parseInt('04'), "start");
  var E = cm.getMap().getPortal(2).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.getMap().getWeatherEffectNotice("请保持左右两侧怪物的平衡。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.起源之塔_4F陷阱();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;