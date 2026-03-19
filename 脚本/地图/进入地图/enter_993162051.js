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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 101, 4);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我问你，你来这里有什么目的……", 36, 3000001, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#在次元传送口的另一端，有我要找的东西。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你寻觅的，是你的过去吗？", 36, 3000001, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face3#！？', 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#“打破沉默的的骑士，将循着光之足迹，抵达龙的领域。”", 36, 3000001, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是我前不久收到的神谕。", 36, 3000001, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是的，我在亚空间中漂浮了很长时间。\r\n直到不久前，才在里斯托尼亚王国再次醒来。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我谨慎地将这段时间的经历告诉了神官。\r\n其中包括我被抹去的记忆中隐瞒的真相，以及自己的猜测。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#面对过去，或许是件痛苦的事情。\r\n但能承受考验的人，会变得更加坚强。", 36, 3000001, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#异邦人，请给我点时间进行确认。\r\n我要确认下你的心中是否存在善良的意志……", 36, 3000001, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(上年纪的神官仔细端详了我。\r\n光这么看一眼，就能够辨别善恶吗？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……你的内心闪耀着高洁的精神。\r\n尽管在不义面前毫不手软，却不会随意伤害无辜之人。", 36, 3000001, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#异邦人，我允许你通过次元传送口。", 36, 3000001, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#在此之前，我要给你说明一下。", 36, 3000001, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.forceCompleteQuest(39633);
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else if (status === V++) {
                                                    cm.warp(400000001, 0, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
      }
    }
  }
}