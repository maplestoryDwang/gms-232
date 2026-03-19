var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage09");
  if (V === "start" || V === 'clear') {
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
          cm.inGameDirectionEvent_Monologue("#fs40#B - 9 F", 0);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_Monologue("#fs20#啊, 那些家伙将道路截断了, 现在已经无法前往下一层!", 0);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_Monologue("虽然我已经将可以通往下一层的几个传送口连接起来, 可是居然也被那些家伙给搅乱了。", 0);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_Monologue("按顺序踩着传送口前进，就能到达通往下一层的传送口。", 1);
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
  f.setProperty("stage" + parseInt('09'), "start");
  cm.getMap().getWeatherEffectNotice("你只需要找到通往下一层的传送口，移动至下一层即可。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;