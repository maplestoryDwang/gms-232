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
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390382, "oid=2272417", -707, -600, 8, -757, -657, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272417", "summon", 0, 0);
      cm.npc_ChangeController(9390383, "oid=2272418", -641, -550, 5, -691, -591, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272418", "summon", 0, 0);
      cm.npc_ChangeController(9390384, "oid=2272419", -936, -550, 2, -986, -886, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272419", "summon", 0, 0);
      cm.npc_ChangeController(9390307, "oid=2272420", -788, -547, 3, -838, -738, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2272420", "summon", 0, 0);
      cm.npc_ChangeController(9390308, "oid=2272421", -856, -569, 2, -906, -806, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2272421", "summon", 0, 0);
      cm.npc_ChangeController(9390305, "oid=2272422", -908, -544, 2, -958, -858, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2272422", 'summon', 0, 0);
      cm.npc_ChangeController(9390304, "oid=2272423", -984, -573, 1, -1034, -934, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2272423", "summon", 0, 0);
      cm.sendNormalTalk("门已经关好了,怪物们再也无法进来了。\r\n那就赶紧下去狠狠的教训那些可恶的怪物们吧!", 3, 9390307, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect//BalloonMsg1/39"], [1500, -210, -30, 1, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我也要一起去!!!", 1, 9390307, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是,没错。我们也下去对付那些家伙们吧!", 1, 9390308, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg1/18"], [800, -280, -30, 1, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("不行,太危险!", 3, 9390308, false, true);
                    cm.spawnMobLimit(9390930, 1, 134, 28, 100);
                    cm.spawnMobLimit(9390927, 1, -49, 28, 100);
                    cm.spawnMobLimit(9390927, 1, 540, 28, 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("不要担心，#b#h0##k，别看我现在这样，我以前也梦想过要做一名战士！\r\n我来发挥下我的实力吧！", 1, 9390308, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=2272420");
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=2272421");
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=2272422");
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.spawnMobLimit(9390927, 1, 529, 28, 100);
                                cm.npc_LeaveField("oid=2272423");
                                cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -578, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1042);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9390307, "oid=2272481", -781, 1, 9, -831, -731, 0, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=2272481", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9390308, "oid=2272482", -900, -1, 9, -950, -850, 0, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=2272482", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(9390305, "oid=2272483", -1024, -1, 9, -1074, -974, 0, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=2272483", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(9390304, "oid=2272484", -1100, -1, 9, -1150, -1050, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=2272484", "summon", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.spawnMobLimit(9390930, 1, 134, 28, 100);
                                          cm.spawnMobLimit(9390927, 1, -49, 28, 100);
                                        } else if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.setStandAloneMode(false);
                                          cm.dispose();
                                          cm.warp(866134000, 0, false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=2272418");
                                          cm.npc_LeaveField("oid=2272417");
                                          cm.npc_LeaveField("oid=2272419");
                                          cm.npc_LeaveField("oid=2272481");
                                          cm.npc_LeaveField("oid=2272482");
                                          cm.npc_LeaveField("oid=2272483");
                                          cm.npc_LeaveField("oid=2272484");
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