var status = -1;
var selectionLog = [];
function action(d, n, O) {
  if (status == 0 && d == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = O;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else {
    if (status === K++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, -400, -1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === K++) {
        cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n冒险岛英雄\r\n#fs28#- 接下来的故事", 1);
      } else {
        if (status === K++) {
          cm.sendNormalTalk_Bottom("#face3#来，大家都准备好了吗？", 37, 1540805, false, true, 1, 3000);
        } else {
          if (status === K++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/theme30", 100);
            cm.inGameDirectionEvent_PushScaleInfo(11000, 1000, 11000, 0, -1500);
          } else {
            if (status === K++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === K++) {
                cm.sendNormalTalk_Bottom("#face3#我们会在上空隐藏好身影的，\r\n不过透明之幕维持不了太长时间。", 37, 1540805, false, true, 1, 4000);
              } else {
                if (status === K++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === K++) {
                    cm.sendNormalTalk_Bottom("#face7#这么做是不错……\r\n不过非得穿这种衣服吗？", 37, 1540801, false, true, 1, 4000);
                  } else {
                    if (status === K++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === K++) {
                        cm.sendNormalTalk_Bottom("#face0#原先的衣服太过显眼了。\r\n我指的是在#b这里的世界#k。", 37, 1540805, false, true, 1, 4000);
                      } else {
                        if (status === K++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === K++) {
                            cm.inGameDirectionEvent_PushScaleInfo(8000, 1000, 8000, 0, 400);
                          } else {
                            if (status === K++) {
                              cm.inGameDirectionEvent_AskAnswerTime(7000);
                            } else {
                              if (status === K++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 4000, 0);
                                cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/HofM_logo/logo_cn", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/logo2", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                              } else if (status === K++) {
                                cm.dispose();
                                cm.onActionBarResult(6, -1);
                                cm.mapleHeroBecomeNpc(-1, 1);
                                cm.warp(913050010, 0, true);
                                cm.inGameDirectionEvent_SetHideEffect(0);
                                cm.setInGameDirectionMode(false, true, false);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;