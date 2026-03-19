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
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400590, "oid=7537697", -1000, 120, 4, -1050, -950, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537697", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7537698", -1150, 120, 3, -1200, -1100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7537698", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
      cm.npc_SetForceMove("oid=7537697", 1, 600, 100);
      cm.npc_SetForceMove("oid=7537698", 1, 600, 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3500);
        cm.effect_NormalSpeechBalloon("回到斯库亚斯后最好快点道歉？", 0, 0, 0, 3000, 9400590, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_NormalSpeechBalloon("什…什么？", 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3500);
            cm.effect_NormalSpeechBalloon('还装作不知道？', 0, 0, 0, 3000, 9400590, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9400666, "oid=7537731", 400, 120, 13, 350, 450, 1, true, false);
              cm.npc_SetSpecialAction("oid=7537731", 'summon', 0, 0);
              cm.npc_SetSpecialAction("oid=7537731", "jumpattack", 0, 0);
              cm.sendNewEffects(17, [3000, 1000, 2000, 400, 140]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这…这是？！芬……。芬里斯！？芬里斯怎么会到这里？！", 37, 9400590, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#b芬里斯？！', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#芬里斯？！", 37, 9400597, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#b往后退！', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                          cm.sendNewEffects(19, [0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
                            cm.warp(867202700, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceStartQuest(64123, '');
                            cm.npc_LeaveField("oid=7537697");
                            cm.npc_LeaveField("oid=7537697");
                            cm.npc_LeaveField("oid=7537698");
                            cm.npc_LeaveField("oid=7537698");
                            cm.npc_LeaveField("oid=7537731");
                            cm.npc_LeaveField("oid=7537731");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;