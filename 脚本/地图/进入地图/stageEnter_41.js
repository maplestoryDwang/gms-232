var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage41");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 41 F\r\n\r\n#fs22#嗯……以前的这里可不是这个样子的，一定是发生了什么变化。\r\n\r\n这里曾经只是一个普通的森林，生活着各种生物，不过现在的道路变得极为复杂。\r\n\r\n等等。这里似乎还有陷阱。一看就知道不是那么容易通过的。\r\n\r\n走到这一步已经无法回头了。让我们奋力冲出这里吧。", 30000);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
            cm.inGameDirectionEvent_PushMoveInfo(0, 500, -400, -400);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(1750);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1300, -200);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 500, 2700, -700);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 500, 500, -700);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_AskAnswerTime(5500);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                          } else {
                            if (status === O++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else if (status === O++) {
                              cm.curNodeEventEnd(true);
                              cm.setInGameDirectionMode(false, true);
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
  f.setProperty("stage41", "start");
  cm.getMap().getWeatherEffectNotice("请小心越过障碍，向第41层突破吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;