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
      cm.npc_ChangeController(1530140, "oid=36206891", 400, 20, 1, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=36206891", "summon", 0, 0);
      cm.npc_ChangeController(1530303, "oid=36206892", 260, 20, 1, 210, 310, 0, false, false);
      cm.npc_SetSpecialAction("oid=36206892", 'summon', 0, 0);
      cm.npc_ChangeController(1530270, "oid=36206893", 750, 20, 3, 700, 800, 0, true, false);
      cm.npc_SetSpecialAction("oid=36206893", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=36206894", 890, 20, 3, 840, 940, 0, true, false);
      cm.npc_SetSpecialAction("oid=36206894", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=36206895", 1150, 20, 3, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=36206895", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=36206891", "shy", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 800, 19);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2586);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("老师都那么警告你们了，居然又发生了威胁信事件？看来我们中间一定藏着穷凶极恶的学生！要是被抓到的话可就不是休学那么简单了，这次要让他直接退学，你们知道了吧！", 37, 1530370, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 120, 612, 19);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2069);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("退……退学……? ！", 0, 1, 0, 2500, 1530140, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("老师，退学的惩罚实在太轻了。应该把他送到警察局去，不是吗？", 37, 1530270, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("警……警察……? ！", 0, 1, 0, 2500, 1530140, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("没错，这事儿怎么说都该被判个无期徒刑。", 37, 1530280, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                            cm.effect_NormalSpeechBalloon("无……无期徒刑……? ！", 0, 1, 0, 2500, 1530140, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=36206891"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                              cm.effect_NormalSpeechBalloon('……呃呃呃！', 0, 0, 0, 1200, 1530140, cm.getPlayer().getId());
                              cm.effect_Voice("Voice2.img/Friends/CH2_03/16", 100);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=36206891", "die", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                cm.effect_NormalSpeechBalloon("#fs9#……咕噜！", 0, 0, 0, 2500, 1530140, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=36206893", -1);
                                  cm.npc_setForceFlip("oid=36206894", -1);
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=36206893"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=36206894"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("老师，弗朗西斯又昏倒了！！", 37, 1530270, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_03/18", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.npc_setForceFlip("oid=36206893", 0);
                                        cm.npc_setForceFlip("oid=36206894", 0);
                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                        cm.dispose();
                                        cm.warp(330000100, 0);
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