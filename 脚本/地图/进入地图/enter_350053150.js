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
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;act5=350053150");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540493, "oid=284790145", -460, -567, 5, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790145", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=284790145", "awaking", -1, 1);
      cm.npc_ChangeController(1540493, "oid=284790148", 100, -530, 8, 50, 150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790148", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790150", 170, -530, 8, 120, 220, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790150", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790151", 210, -530, 8, 160, 260, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790151", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790153", 310, -530, 8, 260, 360, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790153", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790154", 470, -530, 9, 420, 520, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790154", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790155", 520, -530, 9, 470, 570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790155", "summon", 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790157", 650, -530, 10, 600, 700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790157", 'summon', 0, 0);
      cm.npc_ChangeController(1540493, "oid=284790159", 700, -530, 10, 650, 750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284790159", "summon", 0, 0);
      cm.npc_setForceFlip("oid=284790145", 1);
      cm.npc_setForceFlip("oid=284790148", -1);
      cm.npc_setForceFlip("oid=284790150", 1);
      cm.npc_setForceFlip("oid=284790151", 1);
      cm.npc_setForceFlip("oid=284790153", -1);
      cm.npc_setForceFlip("oid=284790154", -1);
      cm.npc_setForceFlip("oid=284790155", 1);
      cm.npc_setForceFlip("oid=284790157", -1);
      cm.npc_setForceFlip("oid=284790159", 1);
      cm.npcMove(1540493, 240, 40, 1000);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.npc_ChangeController(1540490, "oid=284791157", -460, -530, 1, -510, -410, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=284791157", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom('哼！原来在这里啊。', 37, 1540490, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=284790145", -1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_NormalSpeechBalloon('!!!!', 1, 0, 0, 1000, 1, 240, 60, 0, 4, 1540493, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=284790145");
              cm.npc_setForceFlip("oid=284790145", 1);
              cm.npcMove(1540493, 640, 0, 2000);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("给我站住！", 37, 1540490, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=284791157", 1, 200, 200);
                  cm.npc_SetForceMove("oid=284790148", -1, 150, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=284790148", "attack", -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240084/Attack1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=284791157", "fall2", 1620, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=284790148");
                        cm.inGameDirectionEvent_AskAnswerTime(1220);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=284791157", "down2", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("呃……气死我了……", 37, 1540490, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#如果我还有力量，那些家伙……", 37, 1540490, true, true);
                            } else {
                              if (status === V++) {
                                cm.askMenu_Bottom("#face1##fs20##g奥尔卡没有了力量。我该怎么办呢？#k#fs17#\r\n#L1#安慰奥尔卡#l\r\n#L2#替她摧毁智能机器人#l", 37, 1540490);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("奥尔卡，你没事吧？", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, -40, 20, 0, 4, 1540490, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("什么！干嘛！不要你管。", 37, 1540490, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('…………', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哼，你不想离开这里吗？\r\n如果要从这里离开，需要用到管道碎片。", 37, 1540490, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("（看来要我出马了。必须从那些智能机器人那里找回管道。）", 57, 0, true, true);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(350053200, 0, true);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=284790145");
                                              cm.npc_LeaveField("oid=284790145");
                                              cm.npc_LeaveField("oid=284790148");
                                              cm.npc_LeaveField("oid=284790148");
                                              cm.npc_LeaveField("oid=284790150");
                                              cm.npc_LeaveField("oid=284790150");
                                              cm.npc_LeaveField("oid=284790151");
                                              cm.npc_LeaveField("oid=284790151");
                                              cm.npc_LeaveField("oid=284790153");
                                              cm.npc_LeaveField("oid=284790153");
                                              cm.npc_LeaveField("oid=284790154");
                                              cm.npc_LeaveField("oid=284790154");
                                              cm.npc_LeaveField("oid=284790155");
                                              cm.npc_LeaveField("oid=284790155");
                                              cm.npc_LeaveField("oid=284790157");
                                              cm.npc_LeaveField("oid=284790157");
                                              cm.npc_LeaveField("oid=284790159");
                                              cm.npc_LeaveField("oid=284790159");
                                              cm.npc_LeaveField("oid=284791157");
                                              cm.npc_LeaveField("oid=284791157");
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;