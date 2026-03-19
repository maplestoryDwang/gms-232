var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var O = V == null ? null : V.getProperty("stage" + parseInt('06'));
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
          cm.inGameDirectionEvent_Monologue("#fs40#B - 06 F", 0);
        } else {
          if (status === b++) {
            cm.inGameDirectionEvent_Monologue("是#fs20#地下6层的#fs28#绿水灵#fs20#。它们原本是多么可爱的家伙啊......", 0);
          } else {
            if (status === b++) {
              cm.inGameDirectionEvent_Monologue("它们也变得很残暴。我之前做的事情好像最终都失去了意义。", 0);
            } else {
              if (status === b++) {
                cm.inGameDirectionEvent_Monologue("很遗憾，能请你击败它们吗？击败300只左右，我应该就可以打开通往下一层的门。", 0);
              } else {
                if (status === b++) {
                  cm.inGameDirectionEvent_Monologue("对了, 如果你看到巨型绿水灵, 也不要惊慌。因为那只是它们聚成的一团。", 1);
                } else {
                  if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 800, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else if (status === b++) {
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.curNodeEventEnd(true);
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
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  f.setProperty('stage' + parseInt('06'), 'start');
  cm.getWeatherEffectNotice('击退300只水灵吧。', 147, 15000, true);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;