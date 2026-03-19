var status = -1;
function action(f, E, e) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var O = V == null ? null : V.getProperty("stage" + parseInt('01'));
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 01 F\r\n\r\n是#fs22#地下一层的#fs27#古代绿水灵。#fs22#\r\n\r\n据说现在已经灭绝了，不过从前，它们曾像花蘑菇一样繁盛兴旺。\r\n\r\n第一层可以通过积累冲击量来突破，也可以通过猎杀300个古代绿水灵突破。", 30000);
        } else {
          if (status === b++) {
            cm.sendNextSNoESC("#b（什么是冲击量呢……要不要问问？）");
          } else {
            if (status === b++) {
              cm.sendNormalTalk("#b冲击量是什么？！#k", 17, 2540000, false, true);
            } else {
              if (status === b++) {
                cm.sendNormalTalk("由于当时那些古代绿水灵也是非常柔软, 为了保持古代绿水灵们的形态, 第1层内被布下了结界。那个结界可以#b吸收一定比率的加害于古代绿水灵的冲击量#k, 因此那些古代绿水灵才得以保持它们原来的形态。", 1, 2540000, true, true);
              } else {
                if (status === b++) {
                  cm.sendNormalTalk("如果对绿水灵造成的冲击超过那个结界的极限，通往2层的门便会立即打开。或者……你也可以抓住100只左右等我帮你打开。随便你怎么选择。", 1, 2540000, true, true);
                } else {
                  if (status === b++) {
                    cm.sendNormalTalk("#b那么, 如果绿水灵受到超出极限的冲击, 是不是就会马上全部死亡呢? #k", 17, 2540000, true, true);
                  } else {
                    if (status === b++) {
                      cm.sendNormalTalk("这是我做的结界，它会帮助绿水灵立刻恢复，维持形态。所以你可以放心大胆地发挥出力量。", 1, 2540000, true, true);
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
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage" + parseInt('01'), 'start');
  cm.getMap().getWeatherEffectNotice("请打猎怪物或者积累5千万以上的伤害！", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;