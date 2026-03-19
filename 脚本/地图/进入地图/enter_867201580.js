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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1031, 263);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400580, "oid=7611432", 1110, 300, 19, 1060, 1160, 1, true, false);
      cm.npc_SetSpecialAction("oid=7611432", 'summon', 0, 0);
      cm.npc_ChangeController(9400595, "oid=7611433", 1200, 300, 18, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7611433", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(38, 5000);
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
            cm.sendNormalTalk_Bottom("#face0##h0#！#h0#！", 37, 9400580, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你没事吧？恢复意识了吗？！", 37, 9400580, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#啊啊啊！！#h0#！吓死我了！", 37, 9400580, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊~~~啊！你可不能一个人死了，然后把我丢在这么危险的森林里啊！知道了吧？", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b咳，咳……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.emotion(8, 5000);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你不能死~！", 37, 9400580, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b我没死，咳咳，别担心。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b……谢谢你，艾丽卡。是艾丽卡救了我啊。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#在这个森林里，我们可是一条绳上的蚂蚱啊！一定要在一起！", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b我知道了，哈哈。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(17, [5000, 1000, 1000, -100, -700]);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#太阳在落山了。我们要不找个地方休息下吧？", 37, 9400580, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b好想法，先找地方休息下吧。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=7611432");
                                                cm.npc_LeaveField("oid=7611432");
                                                cm.npc_LeaveField("oid=7611433");
                                                cm.npc_LeaveField("oid=7611433");
                                                cm.setPartner(1, 9400580, 80011692, 0);
                                                cm.setPartner(1, 9400595, 80011701, 0);
                                                cm.sendNewEffects(19, [0]);
                                              } else if (status === V++) {
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.forceStartQuest(64080, '');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;