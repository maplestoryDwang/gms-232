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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(2159369, "oid=23855715", -1050, -30, 8, -1100, -1000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=23855715", "summon", 0, 0);
        cm.npc_ChangeController(2159376, "oid=23855716", -1800, -30, 6, -1850, -1750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=23855716", "summon", 0, 0);
        cm.npc_SetForceMove("oid=23855715", -1, 300, 100);
        cm.inGameDirectionEvent_PushMoveInfo(0, 80, -1600, -34);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(6870);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/2", "oid=23855715"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(810);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那个爷爷是谁啊？好像不是村里人。", 1, 2159369, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/6", "oid=23855716"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(810);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(2159422, "oid=23857374", -1450, -30, 11, -1500, -1400, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=23857374", "summon", 0, 0);
                  cm.npc_ChangeController(2159422, "oid=23857375", -1350, -30, 12, -1400, -1300, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=23857375", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0", "oid=23855715"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(2159371, "oid=23857593", -1400, -30, 12, -1450, -1350, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=23857593", "summon", 0, 0);
                      cm.npc_LeaveField("oid=23855715");
                      cm.npc_LeaveField("oid=23857374");
                      cm.npc_LeaveField("oid=23857375");
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("呵呵……没想到在这种地方发现了。跑了这么多村庄，看来是值得的。", 1, 2159376, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/8", "oid=23855716"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=23855716", -1, 300, 100);
                            cm.npc_SetForceMove("oid=23857593", -1, 300, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(2159372, "oid=23857810", -500, -30, 19, -550, -450, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=23857810", "summon", 0, 0);
                              cm.npc_SetForceMove("oid=23857810", -1, 200, 100);
                              cm.inGameDirectionEvent_PushMoveInfo(0, 150, -950, -34);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(4335);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=23857810", 1, 1, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(90);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=23857810", -1, 1, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(90);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=23857810", 1, 1, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(90);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=23857810", -1, 1, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(90);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#h0#已经回家了吗？我还想把之前借的短剑还给他呢……", 1, 2159372, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("看来只能明天再说了。", 1, 2159372, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=23857810", 1, 100, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                            } else if (status === V++) {
                                              cm.npc_LeaveField("oid=23855716");
                                              cm.npc_LeaveField("oid=23857593");
                                              cm.npc_LeaveField("oid=23857810");
                                              cm.dispose();
                                              cm.warp(931060080, 0, false);
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