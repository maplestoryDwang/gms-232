var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var O = V == null ? null : V.getProperty('stage' + parseInt('08'));
  if (O === 'start') {
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
          cm.inGameDirectionEvent_Monologue("#fs40#B - 08 F", 0);
        } else {
          if (status === b++) {
            cm.inGameDirectionEvent_Monologue("是#fs20#地下8层的#fs28#火山虫#fs20#。勇士部落居然会有火山, 虽然会感到奇怪, 不过勇士部落在很早很早以前, 本是一片火山地带。", 0);
          } else {
            if (status === b++) {
              cm.inGameDirectionEvent_Monologue("勇士部落如今已经没有火山地带了吧？很遗憾，但他们如今很难在外面生存。你能去让他们火山中的熔岩降降温吗？这段期间我会去打开通往9层的门。", 0);
            } else {
              if (status === b++) {
                cm.inGameDirectionEvent_Monologue("哦, 对了。如果你被火山喷发物击中, 那将会非常痛苦, 所以一定要小心。", 1);
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
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  f.setProperty("stage" + parseInt('08'), "start");
  cm.getMap().getWeatherEffectNotice("希望你能消灭100个左右的火山虫。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;