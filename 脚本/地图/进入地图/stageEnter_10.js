var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage10");
  if (V === 'start') {
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
          cm.inGameDirectionEvent_Monologue("#fs40#B - 10 F", 0);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_Monologue("#fs20#第10层由一只巨大的蜘蛛守护着。", 0);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_Monologue("#fs20#蜘蛛会在各个地方制造茧蛹产下小蜘蛛，所以当你看见茧蛹后最好尽快消灭它。", 0);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_Monologue("#fs20#另外，当蜘蛛用蜘蛛丝包裹住身体时会反弹攻击，小心留意。", 0);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_Monologue("#fs20#你还要小心蛛毒以及你的移动速度是否减缓, 务必要谨慎作战。", 1);
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
}
function startMap(f) {
  f.setProperty("stage10", "start");
  cm.getMap().getWeatherEffectNotice("请击败巨型蜘蛛。", 147, 60000, 1);
  var E = f.getMonster(9309201);
  cm.getMap().spawnMonsterOnGroundBelow(E, new java.awt.Point(0, 0));
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;