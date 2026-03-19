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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1200, 17, -1427]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face13#听清了吗？现在很快就要开始作战了。", 37, 1540805, false, true);
        cm.effect_Voice("Voice3.img/HofM/ACT3/BR/1", 128);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face13#那就从现在开始吧，这里不是冒险岛世界，最好行动不要太过显眼。", 37, 1540805, false, true);
              cm.effect_Voice("Voice3.img/HofM/ACT3/BR/2", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('那可不行。', 37, 1540879, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT3/BR/3", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face17#什么？", 37, 1540805, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT3/BR/4", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face10#在这个世界，我的外貌也太过显眼了，这还叫我怎么秘密作战呢？", 37, 1540879, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT3/BR/5", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face12#幻影……没时间东张西望了，阿布拉克萨斯之眼确实就朝着那幢建筑物里面。", 37, 1540805, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT3/BR/6", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#别担心，这种事情我最在行。", 37, 1540879, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT3/BR/7", 128);
                      } else {
                        if (status === V++) {
                          cm.playSoundEffDirectly("Ambience.img/flyingdeck");
                          cm.fieldEffect_PlayBGM("Bgm45/Jazz For Dr Lim", 0, 0);
                          cm.sendNewEffects(17, [7000, 1200, 800, 17, 665]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(17, [3000, 800, 600, 1000, 665]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(5500);
                                  cm.effect_Text(["#fn黑体##fs18#浩瀚博物馆 #fs15##fn黑体#- 其他次元的城市"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(19, [1000]);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(350130200, 0, true);
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