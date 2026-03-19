var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302023, "oid=4374", 579, 155, 14, 529, 629, 1, false, false);
      cm.npc_ChangeController(1302101, "oid=4375", -363, 155, 4, -413, -313, 4, true, false);
      cm.npc_ChangeController(1302107, "oid=4376", 109, 155, 11, 59, 159, 1, false, false);
      cm.forceStartQuest(30082, '');
      cm.forceCompleteQuest(30059);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_PlayMusic("Field.img/flowervioleta/victory");
          cm.effect_NormalSpeechBalloon('我们胜利了！', 1, 0, 0, 2000, 1302107, 9897148);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("所有的一切, 全都是因为勇士的努力.", 1, 1, 0, 2000, 1302101, 9897148);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("啊, 这没什么……", 1, 0, 0, 2000, 0, 9897148);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("请不要把脸凑过来.", 1, 0, 1, 2000, 0, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("还好我们的城门很结实.", 1, 1, 0, 2000, 1302101, 9897148);
                } else {
                  if (status === V++) {
                    cm.forceForfeitQuest(30082);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_NormalSpeechBalloon('(笃笃笃)', 1, 0, 0, 1500, 1302101, 9897148);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("#r#e#fs20#(嘎嘣)", 0, 0, 0, 2000, 1302101, 9897148);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("城, 城门……城门被破坏掉了！", 1, 0, 0, 2000, 1302107, 9897148);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 400, 650, 138);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2219);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(1302118, "oid=16915773", 980, 147, 19, 930, 1030, 1, true, false);
                              cm.npc_SetSpecialAction("oid=16915773", "summon", 0, 0);
                              cm.npc_ChangeController(1302119, "oid=16915774", 880, 147, 18, 830, 930, 1, true, false);
                              cm.npc_SetSpecialAction("oid=16915774", "summon", 0, 0);
                              cm.npc_ChangeController(1302118, "oid=16915775", 780, 147, 17, 730, 830, 1, true, false);
                              cm.npc_SetSpecialAction("oid=16915775", "summon", 0, 0);
                              cm.npc_ChangeController(1302119, "oid=16915776", 680, 147, 16, 630, 730, 1, true, false);
                              cm.npc_SetSpecialAction("oid=16915776", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=16915773", -1, 250, 100);
                                cm.npc_SetForceMove("oid=16915774", -1, 250, 100);
                                cm.npc_SetForceMove("oid=16915775", -1, 250, 100);
                                cm.npc_SetForceMove("oid=16915776", -1, 250, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("敌人冲进来了！快点防守！", 1, 0, 0, 2000, 1302107, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("咦, 咦? 城门为什么坏了呢? ", 1, 1, 0, 2000, 1302101, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("那个女人到底是谁? ！", 1, 0, 1, 2000, 0, 9897148);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField("oid=16915773");
                                        cm.npc_LeaveField("oid=16915774");
                                        cm.npc_LeaveField("oid=16915775");
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.npc_LeaveField("oid=16915776");
                                        cm.dispose();
                                        cm.warp(106031002, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;