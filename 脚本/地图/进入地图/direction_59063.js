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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390385, "oid=2606981", 90, 100, 49, 40, 140, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606981", "summon", 0, 0);
      cm.npc_ChangeController(9390386, "oid=2606982", 140, 100, 49, 90, 190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606982", 'summon', 0, 0);
      cm.npc_ChangeController(9390387, "oid=2606983", 200, 100, 49, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606983", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("嗬~~~啊。坐船真是无聊唉……", 1, 9390336, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("怎么了,怎么了。你很疲惫吗?那就进去休息一会儿?", 1, 9390337, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你能不能给我安静点?", 1, 9390336, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(这些人都好奇怪啊……)", 3, 9390336, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_Tremble(1, 0, 30);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("呃?有什么事啊?!", 3, 9390336, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/0"], [1000, 0, -150, 1, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9390428, "oid=2606991", 200, 322, 3, 150, 250, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=2606991", "summon", 0, 0);
                          cm.npc_ChangeController(9390427, "oid=2606992", 111, 384, 47, 61, 161, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2606992", 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9390383, "oid=2606993", 500, 100, 51, 450, 550, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2606993", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("!!! 那只动物在干嘛？", 1, 9390336, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("嘿,老大!!这是什么情况?", 1, 9390383, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("啊啊，船有危险了！！维克特！文森特！快想想办法呀！！船好像破了！", 1, 9390336, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("(嗯？不过那个会说话的动物是什么玩意儿？好像可以用来赚钱！)", 1, 9390336, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Tremble(1, 0, 30);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/32"], [2000, 0, -150, 1, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_Tremble(1, 0, 30);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                              cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterC/0", 1, 1, 1, 0, 0);
                                            } else if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setStandAloneMode(false);
                                              cm.forceCompleteQuest(59063);
                                              cm.teachSkill(110000515, 1, 0);
                                              cm.gainExp(19112);
                                              cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterC/0", 1, 0, 0, 0, 0);
                                              cm.dispose();
                                              cm.warp(866000240, 0, false);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=2606981");
                                              cm.npc_LeaveField("oid=2606982");
                                              cm.npc_LeaveField("oid=2606983");
                                              cm.npc_LeaveField("oid=2606991");
                                              cm.npc_LeaveField("oid=2606992");
                                              cm.npc_LeaveField("oid=2606993");
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