var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(s, x, e) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var G = -1;
  if (status <= G++) {
    cm.dispose();
  } else {
    if (status === G++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9130117, "oid=538233310", 767, 43, 14, 717, 817, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=538233310", "summon", 0, 0);
      cm.npc_ChangeController(9131005, "oid=538233311", 187, 47, 10, 137, 237, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=538233311", "summon", 0, 0);
      cm.sendNormalTalk_Illus_II("浓姬究竟去哪儿了？呃，看来是刚才的战斗中受伤了……", 9130106, 5, false, true, 9130106);
      cm.curNodeEventEnd(true);
    } else {
      if (status === G++) {
        cm.sendNormalTalk_Illus_II('嗯……？那是……？', 9130106, 5, true, true, 9130106);
      } else {
        if (status === G++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 550, 450, -5);
        } else {
          if (status === G++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === G++) {
              cm.sendNormalTalk_Illus_II("我没兴趣拿刀对着女孩子。你快点让开。", 9130117, 5, false, true, 9130117);
            } else {
              if (status === G++) {
                cm.sendNormalTalk_Illus_II("哼，无礼之徒。你知不知道我是谁？我可是斋藤道三的女儿，第六天魔王织田信长的夫人——浓姬。", 9131005, 5, true, true, 9131005);
              } else {
                if (status === G++) {
                  cm.sendNormalTalk_Illus_II("我再说最后一次。我没兴趣拿刀对着女孩子。你快点让开。", 9130117, 5, true, true, 9130117);
                } else {
                  if (status === G++) {
                    cm.sendNormalTalk_Illus_II("真是个狂妄的家伙。那就让我试试……你有没有自己说得那么厉害。", 9131005, 5, true, true, 9131005);
                  } else {
                    if (status === G++) {
                      cm.sendNormalTalk_Illus_II("剑斗在这的话……樱乃也在这里吗？", 9130106, 5, true, true, 9130106);
                    } else {
                      if (status === G++) {
                        cm.sendNormalTalk_Illus_II('我得帮忙才行。', 9130106, 5, true, true, 9130106);
                      } else {
                        if (status === G++) {
                          cm.npc_SetSpecialAction("oid=538233311", "step", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                        } else {
                          if (status === G++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14"], [0, -650, -100, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === G++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15"], [0, -700, -150, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === G++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16"], [0, -700, -150, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === G++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17"], [0, -100, -120, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === G++) {
                                    cm.npc_LeaveField("oid=538233311");
                                    cm.npc_LeaveField("oid=538233311");
                                    cm.npc_LeaveField("oid=538233310");
                                    cm.npc_LeaveField("oid=538233310");
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 550, 1081, -5);
                                  } else {
                                    if (status === G++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === G++) {
                                        cm.sendNormalTalk_Illus_II("这样就行了吧。", 9130106, 5, false, true, 9130106);
                                      } else {
                                        if (status === G++) {
                                          cm.sendNormalTalk_Illus_II('但那个光是……？', 9130106, 5, true, true, 9130106);
                                        } else {
                                          if (status === G++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 255, 255, 255, 2000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else if (status === G++) {
                                            cm.warp(811000008, 0, false);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceCompleteQuest(58910);
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