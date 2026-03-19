var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction16.img/effect/sealBlack0/0", 1, 1, 0, 0, 0);
      cm.effect_REPEAT("Effect/Direction16.img/effect/sealBlack1/0", 1, 1, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("不管怎样, 黑魔法师最终还是被封印了, 对吧? ", 0);
          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene4/0", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("而且, 据说我的真身为了恢复力量, 已经将自己封印。在鲁塔比斯......", 0);
            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene4/1", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("我觉得我的行为非常愚蠢。作为一个思念体, 我根本就没资格也没理由去判断真身的想法。。", 0);
              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene4/2", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("自那以后我便和我所建造的生命之塔一起在这里度过了很长的时间。", 1);
                cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene4/3", 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                      cm.effect_REPEAT("Effect/Direction16.img/effect/dTower/0", 1, 1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("在这么长的时间里, 塔里也发生了很大的变化。", 0);
                          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene5/0", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("首先......仅凭我一个思念体的力量很难抵抗将怪物们变得残暴的黑魔法师的力量。", 0);
                            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene5/1", 100);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(992000060, 0);
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