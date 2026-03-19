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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 1022, 179);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(700);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530060, "oid=20323784", 107, 100, 15, 57, 157, 1, true, false);
          cm.npc_SetSpecialAction("oid=20323784", "summon", 0, 0);
          cm.npc_ChangeController(1530360, "oid=20323785", -123, 100, 17, -173, -73, 0, false, false);
          cm.npc_SetSpecialAction("oid=20323785", "summon", 0, 0);
          cm.npc_ChangeController(1530552, "oid=20323786", -118, -300, 41, -168, -68, 0, false, false);
          cm.npc_SetSpecialAction("oid=20323786", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs26#清晨, 神兽国际学校"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这里正是#b神兽国际学校#k……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……？有人在这儿。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, -78, 179);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5996);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#怎么办，金司机……？我的手帕被风刮跑了。", 37, 1530060, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("别担心，那个才1万元，再买块新的就是了。", 37, 1530360, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我从小受到的教育可是一分钱都不能浪费的。", 37, 1530060, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b（这么看来，这个世界的1万元算是小钱喽。话说回来，那个小姑娘怎么有些眼熟呢？）#k", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(330000005, 0);
                                cm.forceStartQuest(32712, '');
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.forceCompleteQuest(32712);
                                cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;