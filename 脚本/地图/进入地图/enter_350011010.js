var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1540446, "oid=32535", -576, 156, 1, -626, -526, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350011010");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540502, "oid=12962416", 43, 146, 2, -7, 93, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12962416", 'summon', 0, 0);
      cm.npc_ChangeController(1540503, "oid=12962417", 191, 146, 3, 141, 241, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12962417", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=12962418", -80, 146, 2, -130, -30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12962418", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, 210);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你明明晚出了啊。\r\n你这骗子一样的家伙。", 37, 1540502, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("骗子一样的家伙？\r\n你刚刚说我是骗子一样的家伙？", 37, 1540503, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("抱歉，我说得有些过分了。", 37, 1540502, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我可不是像骗子一样的家伙。\r\n我就是骗子。嘻嘻嘻！", 37, 1540503, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=12962418", 1, 490, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=12962417", 1);
                          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 175, 146);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3700);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(350011010, 0, 10, 1000);
                              cm.sendNormalTalk_Bottom("如果继续等哥哥们争论下去，天都要亮了。", 37, 1540504, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=12962418", "spin", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_Voice("Weapon.img/spear/Attack", 100);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=12962418");
                                  cm.npc_LeaveField("oid=12962418");
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 500, -70, 326);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=12962417", -1);
                                      cm.sendNormalTalk_Bottom("……就是说，你早就应该听我的话。", 37, 1540502, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=12962416", 1, 380, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=12962417", 1);
                                          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 175, 146);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=12962416", 'spin', -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_Voice("Weapon.img/spear/Attack", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=12962416");
                                                cm.npc_LeaveField("oid=12962416");
                                                cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1-\r\n#fs28#黑色之翼的黑幕", 1);
                                                          cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=12962417", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
                                                              cm.updateInfoQuest(33151, "onBoard=1");
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.userSetFieldFloating(350011010, 0, 10, 1000);
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