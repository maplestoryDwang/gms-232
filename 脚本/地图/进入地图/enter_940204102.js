var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.fieldEffect_PlayBGM("Bgm36.img/sadfoxvillage", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3002110, "oid=35262675", -744, -337, 25, -794, -694, 1, true, false);
      cm.npc_SetSpecialAction("oid=35262675", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=35262675", 'sit', -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(6000, 1500, 6000, -660, -250);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
          cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3002110, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face10#有我一个人……就够了……", 37, 3002110, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face11#但是……为了增强守备队的力量，必须招募队员！", 37, 3002110, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/plane/leafplane", "animation", '', 'leafplane'], [0, 0, 1, 0, 0, 0, 0, 1]);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#狐神！", 37, 3002110, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#请让愿意成为尖耳守备队员的某个人收到这封信吧！", 37, 3002110, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#可以成为我朋友的某个人……", 37, 3002110, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(410000110, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;