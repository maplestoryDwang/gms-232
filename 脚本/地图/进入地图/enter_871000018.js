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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 150, 295);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400932, "oid=19759124", 200, 295, 12, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759124", "summon", 0, 0);
      cm.npc_ChangeController(9400934, "oid=19759125", 460, 295, 15, 410, 510, 1, true, false);
      cm.npc_SetSpecialAction("oid=19759125", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 300, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs20#稍后……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.updateInfoQuest(64625, "wolf=1");
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=19759125", -1, 100, 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#怎么样？！", 37, 9400925, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400932, 6711706);
                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 6711706);
                        cm.sendNormalTalk_Bottom('#b嗯……', 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#很……很帅气！", 37, 9400923, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……真的吗？", 37, 9400925, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b……比刚才好多了。", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=19759125"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face1#太好了！", 37, 9400925, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……现在去村子里吧。", 37, 9400923, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(19, [0]);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.warp(871000019, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=19759124");
                                      cm.npc_LeaveField("oid=19759125");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;