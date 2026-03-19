var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage22");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 22 F\r\n\r\n#fs22#好好踩被云遮住的踏板，一定要通过才行。\r\n\r\n如果踩空掉下来的话……，想都觉得可怕？\r\n\r\n万一掉落的话我会帮助你再次挑战的。别担心。", 30000);
        } else {
          if (status === O++) {
            cm.sendNextSNoESC("#b（要问问看这次是不是免费的吗？）");
          } else {
            if (status === O++) {
              cm.sendNextSNoESC("#b（还是算了，就这样吧……）");
            } else {
              if (status === O++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 3000, -800);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
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
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage22", "start");
  cm.getMap().getWeatherEffectNotice("小心翼翼地踏着云朵跑到出口去吧。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.起源之塔_22F陷阱();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;