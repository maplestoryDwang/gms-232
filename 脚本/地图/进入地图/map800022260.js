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
      if (cm.getNumberFromQuestInfo(58748, "underCover") < 6) {
        cm.sendNormalTalk_Bottom("先去其他地方看看。", 57, 0, false, true);
      } else {
        cm.updateInfoQuest(58748, "underCover=7");
        cm.curNodeEventEnd(true);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(true, false, true);
        cm.sendNormalTalk_Bottom("这是无头鬼的房间……", 57, 0, false, true);
        cm.curNodeEventEnd(true);
      }
    } else {
      if (status === V++) {
        if (cm.getNumberFromQuestInfo(58748, "underCover") < 6) {
          cm.warp(800022240, 0, false);
          cm.dispose();
        } else {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没想到她长得那么可怕，却喜欢可爱的东西……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.sendNormalTalk_Bottom("唔……这味道……好像有股很好闻的香味散发出来……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("床旁边有本翻开的账本！", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("亡灵队长5万金币聚餐费……12万金币聚餐费……生日宴2亿金币……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……看起来没啥要紧的……总之先拿上。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("书架上有没有什么线索呢……", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这个！是黑色圣水配方！！", 57, 0, false, true);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.askMenu_Bottom("好像有人来了。要不要把配方带走？\r\n#L0#带走配方。#l\r\n#L1#放弃。#l", 37, 9111008);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                  } else {
                                    if (status === V++) {
                                      cm.updateInfoQuest(58752, "aKey=1;bKey=2");
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(4);
                                        cm.sendNormalTalk_Bottom("看样子我只能带走配方。", 57, 0, false, true);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else if (status === V++) {
                                            cm.eventSKill(0);
                                            cm.warp(800022007, 0, false);
                                            cm.setInGameDirectionMode(false, true, false);
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
  }
}