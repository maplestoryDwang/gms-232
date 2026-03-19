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
      cm.effect_REPEAT("Effect/Direction16.img/effect/terrorOfBlack0/0", 1, 1, 0, 0, 0);
      cm.effect_REPEAT("Effect/Direction16.img/effect/terrorOfBlack1/0", 1, 1, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("当时的我......并不关心黑魔法师的目的, 以及冒险岛世界会被他变成什么样子。", 0);
          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene2/0", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("只是......我很痛惜在他那毫无意义的行为下白白牺牲的无辜生命。所以我......", 0);
            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene2/1", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("我当时决定, 就算黑魔法师结束了一切, 我也要尽量做好准备, 使生命复苏。", 1);
              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene2/2", 100);
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
                    cm.effect_REPEAT("Effect/Direction16.img/effect/createTower0/0", 1, 1, 0, 0, 0);
                    cm.effect_REPEAT("Effect/Direction16.img/effect/createTower1/0", 1, 1, 0, 0, 0);
                    cm.effect_REPEAT("Effect/Direction16.img/effect/createTower2/0", 1, 1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("那个准备正是......", 0);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene3/0", 100);
                          cm.inGameDirectionEvent_Monologue("在海底建造一座塔, 那样即使世界灭亡, 生命也会有一个栖息之所。", 0);
                          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene3/1", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("建造一座塔要比想象的耗费更多的力量。为了不被黑魔法师以及高智商的生灵破坏, 只能选择在这里, 世界尽头的深水之中建造。", 0);
                            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene3/2", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("而且, 还要把低智商的动物们带到塔里, 并且重现它们曾经的生存环境, 这也是十分吃力的。因此, 作为生命超越者的我的力量减弱了很多, 不过, 我并不在意。", 1);
                              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene3/3", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else if (status === V++) {
                                cm.warp(992000040, 1);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;