var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage11");
  if (V === "start") {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, 'noHelp') == 1) {
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
          cm.inGameDirectionEvent_Monologue("#fs40#B - 11 F", 0);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_Monologue("#fs20#是花石头人。你从没在外面见过吧? 很悲哀, 因为据说它们也已经灭绝了。", 0);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_Monologue("即使它们去往外界, 也无法适应那发生了巨大变化的环境。", 0);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_Monologue("你去将它们消灭吧。在那过程中我会准备好让你通往第12层。", 1);
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
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage11", "start");
  cm.getMap().getWeatherEffectNotice("请消灭300个石头人。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;