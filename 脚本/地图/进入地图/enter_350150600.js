var status = -1;
var selectionLog = [];
function action(X, K, l) {
  if (status == 0 && X == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = l;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else {
    if (status === j++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/wind", 100, 60);
      cm.onSetMapObjectCreateLayerMore("HofM_04", 2, 'animation', 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 1900, -190);
      cm.curNodeEventEnd(true);
    } else {
      if (status === j++) {
        cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n冒险岛英雄\r\n#fs28#- 接下来的故事", 1);
      } else {
        if (status === j++) {
          cm.sendNormalTalk_Bottom("#face3#米乐，就是那里。", 37, 1540805, false, true);
        } else {
          if (status === j++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/theme30", 100);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 5000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === j++) {
              cm.inGameDirectionEvent_PushScaleInfo(18000, 1000, 18000, 1525, 50);
            } else {
              if (status === j++) {
                cm.sendNormalTalk_Bottom("#face3#弗里德留给我们的，肯定就藏在这个沙漠的什么地方。", 37, 1540805, false, true, 1, 6000);
              } else {
                if (status === j++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                } else {
                  if (status === j++) {
                    cm.sendNormalTalk_Bottom("#face3#我们一定要在这里找到。\r\n#b注视之神，阿布拉克萨斯#k的遗迹！", 37, 1540805, false, true, 1, 6000);
                  } else {
                    if (status === j++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === j++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 4000, 0);
                        cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/HofM_logo/logo_cn", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/logo2", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                      } else {
                        if (status === j++) {
                          cm.fieldEffect_ProcessOnOffLayer("mark", "Map/Effect2.img/HofM/toBeContinued", 0, 2500, 0, 0, 16, 4, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else if (status === j++) {
                          cm.inGameDirectionEvent_SetHideEffect(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                          cm.onActionBarResult(6, -1);
                          cm.mapleHeroBecomeNpc(-1, 1);
                          cm.warp(913050010, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;