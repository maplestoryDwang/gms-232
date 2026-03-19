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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_复合图片动画(["Map/Effect3.img/Lacheln/Sense/002", "animation", '', 'lucid'], [1, 1, 0, 0, 0, 0, 0, 1]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face6#哈，哈哈，啊哈哈。", 37, 3003272, false, true);
        cm.effect_Voice("Voice3.img/Lucid/E2/0", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face6#就好像某个压住我的重物突然消失了一样……", 37, 3003272, true, true);
          cm.effect_Voice("Voice3.img/Lucid/E2/1", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6#啊啊…… 这就是他的能力吗？我感觉他的力量充斥了我的全身……", 37, 3003272, true, true);
            cm.effect_Voice("Voice3.img/Lucid/E2/2", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#哈，哈哈，啊哈哈。", 37, 3003272, true, true);
              cm.effect_Voice("Voice3.img/Lucid/E2/3", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#没错，我一直在等待这一刻，我重生的一刻。", 37, 3003272, false, true);
                cm.effect_Voice("Voice3.img/Lucid/E2/4", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#……现在我所描绘的梦境将变成现实！", 37, 3003272, true, true);
                  cm.effect_Voice("Voice3.img/Lucid/E2/5", 128);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/Lucid/lusi", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/lucid_spine", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(8500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly1", 200);
                      cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly2/buterfly", "animation", '', ''], [1, 0, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose();
                        cm.warp(450003000, 0, true);
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