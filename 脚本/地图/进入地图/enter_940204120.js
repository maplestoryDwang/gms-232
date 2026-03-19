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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.useItem(2210205, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3002120, "oid=35099201", -930, 50, 2, -980, -880, 1, true, false);
      cm.npc_SetSpecialAction("oid=35099201", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#啊～好困～", 37, 3002120, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -971, 194);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=35099201", "sleepy", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#所以你就突然让他跳#b狐狸舞#k？", 37, 3002120, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你，不会只是想恶作剧吧？", 37, 3002120, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#不，不是的！我只是想确认一下自己的变身术练得怎么样了。", 37, 3002110, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face15#身为肩负着村子安全的#b尖耳守备队长#k，\r\n锻炼其他人是我的义务！", 37, 3002110, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#好吧好吧～你有理。\r\n狐神真是疼爱你～玛鲁～真好～", 37, 3002120, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face15#是啊，真好！嘿嘿！", 37, 3002110, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=35099201", 'sleepy', 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#啊～眼皮在打架了～", 37, 3002120, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=35099201", 1, 120, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=35099201", 0, 1500);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face12#西诺！你去哪！", 37, 3002110, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.dispose();
                                                cm.warp(940204140, 0);
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