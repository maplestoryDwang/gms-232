var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4339", -101, 192, 30, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302105, "oid=4340", 87, 382, 15, 37, 137, 0, false, false);
      cm.npc_ChangeController(1302106, "oid=4341", 422, 382, 8, 372, 472, 1, false, false);
      cm.npc_ChangeController(1302107, "oid=4342", -88, 382, 4, -138, -38, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4343", 248, 382, 6, 198, 298, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_ChangeEquipment([1004160]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("……呃, 看上去真的和大海盗很像！", 1, 0, 0, 2000, 1302100, 9897148);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("我, 我还以为是大海盗呢！", 1, 0, 0, 2000, 1302106, 9897148);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("要……要是长着喙的话, 就真的一模一样了.", 1, 0, 0, 2000, 1302108, 9897148);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("要, 要是腿再细一点的话, 简直就是一模一样！", 1, 0, 0, 2000, 1302105, 9897148);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("用布制作成翅膀的话, 一定没人能分辨得出来！", 1, 0, 0, 2000, 1302107, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_PlayMusic("Field.img/flowervioleta/wind");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 0, 9897148);
                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302100, 9897148);
                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302105, 9897148);
                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302106, 9897148);
                    cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 1302107, 9897148);
                    cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302108, 9897148);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("嗯, 果然不行吗? ", 1, 0, 0, 2000, 1302100, 9897148);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("是的, 总觉得这个有点……", 1, 0, 0, 2000, 1302108, 9897148);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("确实好像有点勉强.", 1, 0, 0, 2000, 1302105, 9897148);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("哎呀, 那我们的碧欧蕾塔怎么办！", 1, 0, 0, 2000, 1302100, 9897148);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                              cm.effect_NormalSpeechBalloon("请交给我吧！我会打听清楚的！", 1, 0, 0, 2000, 1302107, 9897148);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("哦, 警卫队长！有什么好消息吗? ", 1, 0, 0, 2000, 1302100, 9897148);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_NormalSpeechBalloon("应该以盖还盖, 以孢子还孢子！", 1, 0, 0, 2000, 1302107, 9897148);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.effect_NormalSpeechBalloon("我去劫持大海盗！", 1, 0, 0, 2000, 1302107, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("……嗯? ", 1, 0, 0, 2000, 0, 9897148);
                                      cm.effect_NormalSpeechBalloon("……嗯? ", 1, 0, 0, 2000, 1302100, 9897148);
                                      cm.effect_NormalSpeechBalloon("……嗯? ", 1, 0, 0, 2000, 1302106, 9897148);
                                      cm.effect_NormalSpeechBalloon("……嗯? ", 1, 0, 0, 2000, 1302105, 9897148);
                                      cm.effect_NormalSpeechBalloon("……嗯? ", 1, 0, 0, 2000, 1302108, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else if (status === V++) {
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.inGameDirectionEvent_ChangeEquipment([0]);
                                        cm.dispose();
                                        cm.warp(106030000, 0, true);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;