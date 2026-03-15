var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === v++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2267, 0);
      } else {
        if (status === v++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 2399, -17);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === v++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("都别说了，准备好了就冲进去。", 56, 0, false, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("我们的任务是……", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === v++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === v++) {
                      cm.effect_NormalSpeechBalloon('守护圣瑞尼亚！！', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570001, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("守护圣瑞尼亚！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570002, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("守护圣瑞尼亚！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570003, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("守护圣瑞尼亚！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570004, null, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("守护圣瑞尼亚！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570005, null, cm.getPlayer().getId());
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else if (status === v++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.forceStartQuest(37807, '');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#有人受伤吗？", 36, 2570105, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#大部分是轻伤，大伙儿都没事。", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#王子殿下怎么样？", 36, 2570101, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#伤口很深。\r\n看这样子……是几个小时之前造成的。", 36, 2570104, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 2570102, true, true, 1);
            } else if (status === v++) {
              cm.dispose();
              cm.warp(308090009, 0, false);
            }
          }
        }
      }
    }
  }
}