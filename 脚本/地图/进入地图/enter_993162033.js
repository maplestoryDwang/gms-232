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
      cm.npc_ChangeController(3001924, "oid=434229", 1013, -167, 7, 979, 1079, 5, true, 0, false);
      cm.npc_ChangeController(3001924, "oid=434230", 35, -167, 3, -5, 45, 4, true, 0, false);
      cm.npc_ChangeController(3001924, "oid=434231", 649, -167, 6, 649, 731, 5, true, 0, false);
      cm.npc_ChangeController(3001924, 'oid=434232', 431, -167, 6, 391, 456, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1312, -170);
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
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(过去我来过这样的地方吗？\r\n……我感觉自己并不适合这种场合。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -1112, -170);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -330, -170);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(古城堡的残片，古书……全部都是很久以前的物品啊。\r\n主题好像叫“过去与未来”？)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#啊，那个……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.updateInfoQuest(39623, "dir=1");
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
                                          cm.warp(410000341, 0, false);
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