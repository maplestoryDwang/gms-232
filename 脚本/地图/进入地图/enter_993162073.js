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
      cm.npc_ChangeController(3001952, "oid=434379", -285, 20, 4, -335, -235, 4, true, 0, false);
      cm.npc_ChangeController(3001960, "oid=434380", -373, 20, 4, -423, -323, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -276, 12);
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
              cm.sendNormalTalk_Bottom("#face4#对于将来要成为国王的我，这句话是个警示。\r\n想做大事的人，自然不应该为小事纠结。", 36, 3001952, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#咘呜？", 36, 3001960, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#但是，我不想遵循别人制定好的答案。\r\n这种事即使不是国王，也能办到啊？", 36, 3001952, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#王是开辟道路者！这是我的座右铭。\r\n我决定选择别人没用过的办法。……最大程度地减少牺牲！", 36, 3001952, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年带着意气风发的微笑，拾起了宝石，\r\n然后将其扔进了旋转门的缝隙中。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#！？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 2);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/gateopen", 200);
                              cm.userSetFieldFloating(993162073, 5, 5, 5);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#这个可以暂时拖延时间。\r\n我们快趁机一起出去！", 36, 3001952, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(看来他要当国王的话不是在吹牛。\r\n开辟道路者为王……小不点口气不小。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
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
                                                cm.warp(993162026, 0, false);
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