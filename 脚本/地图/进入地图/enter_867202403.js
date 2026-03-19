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
      cm.npc_ChangeController(9400636, "oid=7536637", -530, -70, 1, -580, -480, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536637", "summon", 0, 0);
      cm.npc_ChangeController(9400596, "oid=7536638", -400, -70, 1, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536638", "summon", 0, 0);
      cm.npc_ChangeController(9400597, "oid=7536639", -150, -70, 1, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536639", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536640", -80, -70, 1, -130, -30, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536640", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7536637", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7536638", "attack1", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=7536639", -1, 50, 30);
        cm.npc_SetForceMove("oid=7536640", -1, 50, 30);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=7536637");
          cm.setNpcSpecialActionReset("oid=7536638");
          cm.inGameDirectionEvent_AskAnswerTime(250);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=7536637", 1);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_NormalSpeechBalloon("什么？！看什么！？", 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
                cm.effect_NormalSpeechBalloon("怎么？！我们不能来这里啊？！", 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                  cm.effect_NormalSpeechBalloon("我说什么了吗？看你们在训练，觉得很神奇。", 0, 0, 0, 2000, 9400636, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                    cm.effect_NormalSpeechBalloon('…咳咳！', 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=7536638", -1);
                      cm.npc_setForceFlip("oid=7536637", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=7536638", -1, 100, 50);
                        cm.npc_SetForceMove("oid=7536637", -1, 80, 30);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b这不难。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7536637", 1);
                            cm.npc_setForceFlip("oid=7536638", 1);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b把我当做跳出水面的一条鱼，然后全力向我扔枪吧！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#…啊啊？！", 37, 9400597, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("对 #h0# 啊？", 37, 9400599, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#b对！那么开始了！', 57, 0, true, true);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(867202440, 0);
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