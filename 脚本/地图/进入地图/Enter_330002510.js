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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530110, "oid=38913882", 502, 275, 34, 452, 552, 1, true, false);
      cm.npc_SetSpecialAction("oid=38913882", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=38913883", 432, 275, 34, 382, 482, 1, true, false);
      cm.npc_SetSpecialAction("oid=38913883", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 400, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(400);
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
              cm.inGameDirectionEvent_PushMoveInfo(0, 150, 500, 280);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1167);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=38913882"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("伊莉娜姐姐，那家伙叫什么来着？！", 37, 1530110, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=38913883", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('谁？', 37, 1530120, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("就是那家伙啊，经常和我们一起玩的……1年级……那个……我怎么就是想不起名字呢？", 37, 1530110, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你在说什么啊。哪有什么经常和我们一起玩的1年级学生啊？", 37, 1530120, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……是吗？也对，可能是我在做梦吧。", 37, 1530110, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("真无聊……我们还是去取修补的校服吧。", 37, 1530120, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=38913883", 0);
                                  cm.npc_SetForceMove("oid=38913883", -1, 800, 120);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=38913882", -1, 800, 120);
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1100, 280);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(330002512, 0);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;