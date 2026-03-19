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
      cm.npc_ChangeController(9330204, "oid=844065", 650, 3, 1, 600, 700, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=844065", "summon", 0, 0);
      cm.setSessionValue("Suha10", "844065");
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/mercedesInIce/merBalloon/5"], [500, 0, -100, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('秀禾!!!!', 3, 9330204, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('小姐', 1, 9330204, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.npc_SetSpecialAction("oid=844065", 'move', 0, 1);
                cm.npc_SetForceMove("oid=844065", -1, 250, 100);
                cm.sendNormalTalk("秀禾!为什么这么晚了呢?父亲在哪里?", 3, 9330204, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("吼吼，小姐.你必须要快点闪避。", 1, 9330204, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("有什么事呢！我做了恶梦心烦意乱的。这么急迫的表情。汗…", 3, 9330204, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("难道是血？哪里受伤了？父亲，父亲在哪里？", 3, 9330204, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("从现在起好好听我说。快点在这里躲好。", 1, 9330204, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不，父亲。我要找父亲。虽然不晓得有什么问题，", 3, 9330204, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("可是不是这样的情况。现在不能从正门走。快点从后门…", 1, 9330204, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("那么父亲应该会在大门!", 3, 9330204, true, true);
                              } else {
                                if (status === V++) {
                                  cm.emotion(5, 10000);
                                  cm.inGameDirectionEvent_MoveAction(2);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=844065", "move", 0, 1);
                                    cm.npc_SetForceMove("oid=844065", 1, 150, 100);
                                    cm.curNodeEventEnd(true);
                                    cm.sendNormalTalk("不行的!!", 1, 9330204, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("住手!我要先去找父亲!!", 3, 9330204, true, true);
                                    } else if (status === V++) {
                                      cm.npc_LeaveField('oid=844065');
                                      cm.dispose();
                                      cm.warp(743000100, 0, false);
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
}