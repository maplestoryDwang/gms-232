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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.npc_ChangeController(2550017, "oid=1770041", -740, -329, 11, -790, -690, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1770041", "summon", 0, 0);
      cm.npc_ChangeController(2550006, "oid=1770042", -900, -329, 2, -950, -850, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1770042", "summon", 0, 0);
      cm.npcMove(2550006, 0, 10, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -850, -120);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom('我……我怎么……', 37, 2550017, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("都说死人是不能开口说话的，但其实不是哦。", 37, 2550006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("呵呵呵，来，说说吧。关卡一定有弱点的吧。", 37, 2550006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……我像是会告诉你的人吗？", 37, 2550017, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯，我明白。有些东西，就算死了也不能放弃。", 37, 2550006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不过嘛……\r\n绝望而死的人，心中一定会生出一条裂痕。", 37, 2550006, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(5500, 0, 1000, 5500, -850, -560);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm45/Army Of Fears Theme", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('啊啊啊……', 37, 2550017, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好了，现在能开始了？", 37, 2550006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 6000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else if (status === V++) {
                                    cm.eventSKill(0);
                                    cm.dispose();
                                    cm.warp(306090080, 0, true);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=1770041");
                                    cm.npc_LeaveField("oid=1770041");
                                    cm.npc_LeaveField("oid=1770042");
                                    cm.npc_LeaveField("oid=1770042");
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