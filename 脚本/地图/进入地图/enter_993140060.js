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
      if (!cm.isQuestActive(39815)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#同一时刻，黑太阳的秘密据点。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#已经是人去楼空了。", 37, 3004433, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/0", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#地上的粉末……", 37, 3004433, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#原来是#r黑火药#k。看来已经被转移到其他地方去了。", 37, 3004433, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#这里好像进行了试爆。到处都是烧焦的痕迹。", 37, 3004433, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#请看看这个。好像是一份很重要的文件。", 37, 3004431, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#这些家伙原来在与翼人军里应外合。", 37, 3004431, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#应该是准备在两个寺院里放置爆炸物，好让双方发生内讧。", 37, 3004431, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#确实如此，他们这几天就要行动了。我们得迅速应对。", 37, 3004433, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#等等，这是……？", 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/1", 0, 1000, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#羽毛……？", 37, 3004433, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else if (status === V++) {
                                        cm.eventSKill(0);
                                        cm.warp(993141015, 0, false);
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
}