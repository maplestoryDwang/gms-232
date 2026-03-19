var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(1540704, "oid=283977700", -2877, 267, 102, -2927, -2827, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=283977700", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=283977701", -2800, 267, 106, -2850, -2750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=283977701", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 500, -950, 241);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 400, -950, -400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 500, 500, -400);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 500, -1000);
                        } else {
                          if (status === V++) {
                            cm.addPopupSay(1540704, 1000, "呼呼~这么大啊. ", '', 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1969, -1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.addPopupSay(1540704, 1000, "进入的路在那边. ", '', 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1769, 244);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("格里梅尔那家伙……\r\n他的心这么大啊？", 37, 1540704, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("这里只不过是入口而已。\r\n黑色天堂是由数万个这样的空间构成的。", 37, 1540451, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("数万个？！\r\n啧，那家伙……他成功了。", 37, 1540704, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……。", 37, 1540451, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("话说，我们该不会要把这个地方全部翻找一遍吧？", 37, 1540704, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这怎么可能。最短路线已经在我脑海里了。", 37, 1540451, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我们要以最短路线，向着#b敌人的心脏部位#k前进。", 37, 1540451, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 5-\r\n#fs28#向着核心!", 1);
                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else if (status === V++) {
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=283977700");
                                                                cm.npc_LeaveField("oid=283977700");
                                                                cm.npc_LeaveField("oid=283977701");
                                                                cm.npc_LeaveField("oid=283977701");
                                                                cm.updateInfoQuest(33221, 'save=1');
                                                                cm.setPartner(1, 1540704, 80001632, 0);
                                                                cm.setPartner(1, 1540765, 80001601, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;