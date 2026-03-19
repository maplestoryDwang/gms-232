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
      if (cm.getNumberFromQuestInfo(58748, "underCover") >= 6) {
        cm.sendNormalTalk_Bottom("这里已经搜查过了，再去其他地方看看。", 57, 0, false, true);
      } else {
        cm.curNodeEventEnd(true);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(true, false, true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
        cm.curNodeEventEnd(true);
      }
    } else {
      if (status === V++) {
        if (cm.getNumberFromQuestInfo(58748, "underCover") >= 6) {
          cm.warp(800022240, 0, false);
        } else {
          cm.updateInfoQuest(58748, "underCover=6");
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这是鵺的房间吗……？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("乱糟糟的……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("有幅描绘了一个桀骜不驯孩子的画像。", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这里堆的该不会全都是肖像画吧……？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("地上堆的书大部分都是“鵺福音”。这书是在这里生产的吗……？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                  cm.sendNormalTalk_Bottom("呃！太邋遢了！！！", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.askMenu_Bottom("不管是那沓画像，还是书堆，我好歹得翻找一下。\r\n#L0#画像。#l\r\n#L1#书堆#l", 37, 9111008);
                                  } else {
                                    if (status === V++) {
                                      cm.updateInfoQuest(58752, "aKey=1");
                                      cm.sendNormalTalk_Bottom("咦？这里有本书看起来不太一样……", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("是日记本！趁还没人过来，快离开房间吧。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 700);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else if (status === V++) {
                                            cm.eventSKill(0);
                                            cm.warp(800022240, 0, false);
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