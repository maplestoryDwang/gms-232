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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 420, 170]);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9401123, "oid=41520943", 170, 40, 3, 120, 220, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41520943", "summon", 0, 0);
        cm.npc_ChangeController(9401124, "oid=41520944", 200, 40, 3, 150, 250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41520944", "summon", 0, 0);
        cm.npc_ChangeController(9401126, "oid=41520945", 280, 40, 3, 230, 330, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41520945", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(9401050, "oid=41520946", 650, 40, 1, 600, 700, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=41520946", "summon", 0, 0);
        cm.npc_ChangeController(9401051, "oid=41520947", 700, 40, 1, 650, 750, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=41520947", 'summon', 0, 0);
        cm.npc_SetForceMove("oid=41520946", -1, 180, 100);
        cm.npc_SetForceMove("oid=41520947", -1, 170, 100);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("咳，咳呃……活下来了……活下来了…… ", 37, 9401050, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("谢谢你……咳呃呃……谢谢。", 37, 9401051, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b到底发生了什么？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……我都不知道我们在这里待了多久。", 37, 9401050, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("队长失踪之后……我们受到了暗影的袭击。", 37, 9401050, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呃呃呃！真是连想都不敢想。", 37, 9401051, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("奇怪的是，如果被暗影卷走，就会进入一个一个不知道是何处的地方，会因为找不到出口而徘徊许久。", 37, 9401050, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("队伍中有人受伤，粮食也用光了，本以为我们就快要死了……谢谢你，真的…… ", 37, 9401051, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那个……可能这个请求有点过分，但能不能请你帮忙找找我们队长呢？他手拿着#b鬼怪棒#k，长相奇怪，应该很容易就能认出来！", 37, 9401050, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("他与暗影一起瞬间消失得无影无踪。队长也不是第一次对付暗影了，怎么会就那样中招呢…… ", 37, 9401050, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("虽然现在没有什么能给你作为报酬，但我一定会报答你的。", 37, 9401050, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b当然，各位还是先回到本部去为好。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b我会陪着你们到出口。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.warp(867147030, 0, true);
                                      cm.npc_LeaveField("oid=41520943");
                                      cm.npc_LeaveField("oid=41520943");
                                      cm.npc_LeaveField("oid=41520944");
                                      cm.npc_LeaveField("oid=41520944");
                                      cm.npc_LeaveField("oid=41520945");
                                      cm.npc_LeaveField("oid=41520945");
                                      cm.npc_LeaveField("oid=41520946");
                                      cm.npc_LeaveField("oid=41520946");
                                      cm.npc_LeaveField("oid=41520947");
                                      cm.npc_LeaveField("oid=41520947");
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