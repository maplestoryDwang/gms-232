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
      cm.npc_ChangeController(3003656, "oid=275871", -244, 280, 2, -294, -194, 4, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275872", -62, 297, 12, -112, -12, 5, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275873', 230, 297, 13, 180, 280, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275874", 314, 297, 13, 264, 364, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275875", 398, 297, 13, 348, 448, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275876", 482, 297, 13, 432, 524, 5, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275877', -481, 297, 11, -531, -431, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275878", -567, 297, 11, -617, -517, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275879", -665, 297, 11, -715, -615, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275880", -756, 297, 11, -786, -706, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275881", -854, 297, 10, -904, -826, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -160, 230);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#此刻，白色之矛"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#女皇陛下，刚刚收到消息，被拖入迷雾的舰船……\r\n已经被安全救出。", 37, 3003651, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哈……真是万幸。", 37, 3003656, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……还有一个好消息。\r\n沿着这条路走的话，可以到达没有迷雾的地方。", 37, 3003651, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我认为在此之前，采取防御姿态顶住敌人的进攻，\r\n是当前的最好策略。", 37, 3003651, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#好的，那就按你说的办吧。\r\n大家尽可能保持好队形，稳步推进。", 37, 3003656, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 820, -300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                      cm.dispose();
                                      cm.warp(993060054, 0, false);
                                      cm.setStandAloneMode(false);
                                      cm.setInGameDirectionMode(false, true, false);
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