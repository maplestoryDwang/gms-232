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
      cm.npc_ChangeController(3004437, "oid=374240", -53, 109, 1, -103, -17, 4, true, 0, false);
      cm.npc_ChangeController(3004437, 'oid=374241', 25, 109, 2, 23, 75, 4, true, 0, false);
      cm.npc_ChangeController(3004435, "oid=374242", 574, 109, 2, 524, 624, 5, true, 0, false);
      cm.npc_ChangeController(3004436, "oid=374243", 480, 109, 2, 430, 530, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.sendNormalTalk_Bottom("#face1#切奇！切奇！你没事吧？！", 37, 3004435, false, true);
        cm.effect_Voice("Voice5.img/CH2/Hawkeye/3", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#没事……啊，我只是暂时昏过去了。", 37, 3004436, true, true);
          cm.effect_Voice("Voice5.img/CH2/Checky/9", 128);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#怎么回事啊？", 37, 3004436, false, true);
                cm.effect_Voice("Voice5.img/CH2/Checky/10", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#城墙被炸塌了。你正巧就在城墙底下。", 37, 3004435, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Hawkeye/4", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这可真糟糕。不过……我们已经消灭大部分敌军，总有办法……", 37, 3004436, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Checky/11", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#……我们消灭的只是潜伏在此的分遣队。", 37, 3004435, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Hawkeye/5", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#什么？', 37, 3004436, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Checky/12", 128);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect/7"], [1000000, 1978, -173, 1, 100, 1, 1, 0]);
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1663, -129);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我的老天爷啊……", 37, 3004436, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.warp(993141020, 0, false);
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