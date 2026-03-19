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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, -300);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003272, "oid=1798176", -360, -470, 17, -410, -310, 0, true, false);
        cm.npc_SetSpecialAction("oid=1798176", "summon", 0, 0);
        cm.npc_ChangeController(3003283, "oid=1798177", 0, -520, 11, -50, 50, 0, false, false);
        cm.npc_SetSpecialAction("oid=1798177", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 0, -550);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#不用多久新世界就会展开。那是实现我和黑魔法师理想的时刻。", 37, 3003272, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#哈哈，我很期待你创造的新世界，那里会是什么样的呢？", 37, 3003272, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003272, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#…我什么都感受不到。", 37, 3003272, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#他的理想该不会是…", 37, 3003272, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("黑魔法师所展示的新世界里什么都没有。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("…甚至连黑魔法师自己都没有。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("为此，路西德在成为军团长之后，第一次决定违抗他。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("通过在神秘河畔创造永恒的热闹城市…", 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(940200142, 0);
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