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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401283, "oid=2256130", -300, 440, 6, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256130", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=2256130", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 7, 500]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5##b（……可恶，让他给跑了……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.Npc_Fadeout("oid=2256130", 255, 1000);
              cm.npc_SetForceMove("oid=2256130", 1, 150, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#墨玄大侠！你没事吧？", 37, 9401283, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face7##b……让他给跑了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#应该还没走多远，我马上开始追踪！", 37, 9401283, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5##b我、我必须变得更强……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#那种天上掉馅饼的事情，往往不是什么好事。\r\n请别太自责。", 37, 9401283, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#大侠！在痕迹消失之前，我必须马上追上去看看！\r\n一会儿再联系你！", 37, 9401283, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2256130", 1, 500, 200);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(14, [0, 2000, 1000]);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(19, [0]);
                                  } else if (status === V++) {
                                    cm.forceCompleteQuest(65973);
                                    cm.npc_LeaveField("oid=2256130");
                                    cm.dispose();
                                    cm.warp(260020610, 0, false);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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