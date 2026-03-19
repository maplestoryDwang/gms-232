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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("SoundEff.img/ArcaneRiver/night", 200, 60);
      cm.emotion(7, 50000);
      cm.inGameDirectionEvent_OneTimeAction(25, 30000);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.effect_NormalSpeechBalloon("嗯…来了多少个...", 1, 0, 0, 1500, 0, cm.getPlayer().getId());
              cm.OverlapScreenDetail19(0, 1500, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 446, 281);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1500);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/smallB"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.fieldEffect_PlayBGM("Bgm46.img/ClockTowerofNightmare", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("真是奇怪... 怎么浑身乏力...", 1, 0, 0, 1500, 0, cm.getPlayer().getId());
                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", "animation", '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.playVideoByScript("Lucid.avi");
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(450003000, 0, true);
                              cm.setInGameDirectionMode(false, true, false);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;