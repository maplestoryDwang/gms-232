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
      cm.npc_ChangeController(1052124, "oid=218913", -992, 419, 14, -1042, -992, 0, false, false);
      cm.npc_ChangeController(1052122, "oid=218914", -831, 419, 13, -881, -781, 1, false, false);
      cm.npc_ChangeController(1052204, "oid=218915", 86, 419, 7, 36, 136, 1, false, false);
      cm.npc_ChangeController(1052205, "oid=218916", 351, 419, 5, 301, 401, 1, false, false);
      cm.npc_ChangeController(1052202, 'oid=218917', 932, 419, 2, 882, 982, 1, false, false);
      cm.updateInfoQuest(34437, 'c0=1');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊！阿赫哥的签名会就要开始了！我们也赶紧去把，赶紧的！", 37, 1052227, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 500, -216, 419);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1513);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                  cm.effect_NormalSpeechBalloon("那个！", 0, 0, 0, 8000, 1, -450, 20, 0, 4, 1052204, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                    cm.effect_NormalSpeechBalloon('哥哥！我爱你！', 0, 0, 0, 8000, 1, -600, 5, 0, 4, 1052204, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                      cm.effect_NormalSpeechBalloon('感觉快要晕倒了！', 0, 0, 0, 8000, 1, -295, -5, 0, 4, 1052204, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon("呵呵，大家都准备好了吧？", 1, 0, 0, 8000, 1, 0, 0, 0, 4, 1052204, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/singerHyuk/0", 0, 1000, 0, 0, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("大家都尖叫起来~~~~~~~~！", 37, 1052204, false, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 200);
                                cm.sendNormalTalk_Bottom('啊！阿赫哥！！', 37, 1052227, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                  cm.dispose();
                                  cm.warp(910310501, 0);
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