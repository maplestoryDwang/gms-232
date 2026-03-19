var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -88, 111);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#我们继续进行了各种方式的尝试", 0);
        } else {
          if (status === V++) {
            cm.effect_Voice("Voice6.img/Library/kel/10-01-kel.mp3", 100);
            cm.inGameDirectionEvent_Monologue("#fc0xFF000000#得到了几点领悟。", 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/Library/kel/10-02-kel.mp3", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#fc0xFF000000#首先，无论多快赶到，都#r救不了王子。#k", 0);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/Library/kel/10-03-kel.mp3", 100);
                  cm.inGameDirectionEvent_Monologue("#fc0xFF000000#王子的伤口，早在我们逆转时间之前就已经存在了。", 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/Library/kel/10-04-kel.mp3", 100);
                    cm.inGameDirectionEvent_Monologue("#fc0xFF000000#其次，无论恶魔能否说出诅咒，\r\n#r诅咒都会持续#fc0xFF000000#。 ", 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/Library/kel/10-05-kel.mp3", 100);
                      cm.inGameDirectionEvent_Monologue("#fc0xFF000000#第三，我们找到恶魔的时间拖得越长，那家伙就会变得#r越来越强大。#k ", 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/Library/kel/10-06-kel.mp3", 100);
                        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#第四，他的名字……", 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/Library/kel/10-07-kel.mp3", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#艾里葛斯·都纳米斯……", 36, 2570102, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/Library/ain/10-08-ain.1.mp3", 100);
                                  cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end");
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
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
    }
  }
}