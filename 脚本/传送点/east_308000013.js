function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.isQuestActive(37810)) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        cm.sendNormalTalk_Bottom("现在还无法移动。", 56, 0, false, true, 1);
        cm.dispose();
      }
    } else {
      if (status === R++) {
        cm.sendNormalTalk_Bottom("#face0#永远守护圣瑞尼亚吧……", 36, 2570104, false, true, 1);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face0#什么……？", 36, 2570101, true, true, 1);
        } else {
          if (status === R++) {
            cm.sendNormalTalk_Bottom("#face0#事情的发展正如那家伙所说。", 36, 2570104, true, true, 1);
          } else {
            if (status === R++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === R++) {
                cm.sendNormalTalk_Bottom("……。", 56, 0, false, true, 1);
              } else {
                if (status === R++) {
                  cm.sendNormalTalk_Bottom("世界上没有永恒的事物，恶魔也一样。", 56, 0, true, true, 1);
                } else {
                  if (status === R++) {
                    cm.sendNormalTalk_Bottom('这场战争早晚会结束。', 56, 0, true, true, 1);
                  } else {
                    if (status === R++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === R++) {
                        cm.inGameDirectionEvent_Monologue("话刚出口，我就后悔了。", 1);
                      } else {
                        if (status === R++) {
                          cm.effect_Voice("Voice6.img/Library/kel/11-01-kel.mp3", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === R++) {
                            cm.inGameDirectionEvent_Monologue("迟早……这两个字里", 0);
                          } else {
                            if (status === R++) {
                              cm.effect_Voice("Voice6.img/Library/kel/11-02-kel.mp3", 100);
                              cm.inGameDirectionEvent_Monologue("比起希望，更多的是充满不安。", 0);
                            } else {
                              if (status === R++) {
                                cm.effect_Voice("Voice6.img/Library/kel/11-03-kel.mp3", 100);
                                cm.inGameDirectionEvent_Monologue("比起喜悦，我先感受到了焦躁。", 1);
                              } else {
                                if (status === R++) {
                                  cm.effect_Voice("Voice6.img/Library/kel/11-04-kel.mp3", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === R++) {
                                    cm.inGameDirectionEvent_Monologue("其他团员也可能有同样的想法", 0);
                                  } else {
                                    if (status === R++) {
                                      cm.effect_Voice("Voice6.img/Library/kel/11-05-kel.mp3", 100);
                                      cm.inGameDirectionEvent_Monologue("所有人都噤声了。", 0);
                                    } else if (status === R++) {
                                      cm.forceJoinEvent("圣瑞尼亚的骑士_清怪7");
                                      cm.dispose();
                                      cm.effect_Voice("Voice6.img/Library/kel/11-06-kel.mp3", 100);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
                                      cm.getTopMsgFont("你必须消灭区域内的所有怪物，才能进入下一个关卡。", 3, 20, 20, 0, 0);
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