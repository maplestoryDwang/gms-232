var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage44");
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs42#B - 44 F\r\n\r\n#fs22#地下44楼是一片游乐场，让怪物们可以奔跑游玩的游乐场。\r\n\r\n现在没有什么剩下的怪物了。毕竟站在侵入者的立场大概会认为要跨越这个地方是很困难的。\r\n\r\n不过你现在就像是起源之塔的侵入者。你到现在都做得很好，应该可以跨越的。", 30000);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
            cm.inGameDirectionEvent_PushMoveInfo(0, 750, 200, -800);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 750, 4000, -1500);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 750, 5000, 0);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_AskAnswerTime(6000);
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
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage44", 'start');
  var E = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), E.getX(), E.getY());
  cm.getMap().getWeatherEffectNotice('请突破至44楼吧。', 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;