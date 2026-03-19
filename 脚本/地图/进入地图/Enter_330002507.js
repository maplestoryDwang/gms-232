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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530210, "oid=38844485", 597, 49, 2, 547, 647, 0, false, false);
      cm.npc_SetSpecialAction("oid=38844485", "summon", 0, 0);
      cm.npc_ChangeController(1530250, "oid=38844486", 540, 49, 2, 490, 590, 0, false, false);
      cm.npc_SetSpecialAction("oid=38844486", "summon", 0, 0);
      cm.npc_ChangeController(1530256, "oid=38844487", 490, 49, 1, 440, 540, 0, false, false);
      cm.npc_SetSpecialAction("oid=38844487", "summon", 0, 0);
      cm.npc_ChangeController(1530256, "oid=38844488", 420, 49, 1, 370, 470, 0, false, false);
      cm.npc_SetSpecialAction("oid=38844488", 'summon', 0, 0);
      cm.npc_ChangeController(1530300, "oid=38844489", 350, 49, 1, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=38844489", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=38844490", 300, 49, 1, 250, 350, 0, true, false);
      cm.npc_SetSpecialAction("oid=38844490", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=38844491", 250, 49, 1, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=38844491", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=38844492", 200, 49, 1, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=38844492", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=38844493", 687, 49, 2, 637, 737, 1, true, false);
      cm.npc_SetSpecialAction("oid=38844493", 'summon', 0, 0);
      cm.npc_ChangeController(1530070, "oid=38844494", -66, 49, 1, -116, -16, 0, true, false);
      cm.npc_SetSpecialAction("oid=38844494", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 500, 58);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(233);
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
              cm.sendNormalTalk_Bottom("#fs25#不行。", 37, 1530370, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844486"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844487"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844488"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844489"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844490"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844491"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38844492"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你们这些家伙，哪有学生和老师约会的！你们不要再欺负实习老师了！！", 37, 1530370, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("闪……闪开！妨碍约会的恶狼老师快闪开！", 37, 1530250, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你要不要尝尝恶狼老师的毛栗子？", 37, 1530370, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……呃……", 37, 1530250, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("总之，约会禁止！禁止，你们这些家伙！不要再吵吵嚷嚷了！", 37, 1530370, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 34, 58);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4387);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("呼……事情最终变成了这样。不过这结果也是理所当然的。", 37, 1530070, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不要装作你早已料到……", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(330002508, 0);
                                      cm.inGameDirectionEvent_ForcedFlip(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;