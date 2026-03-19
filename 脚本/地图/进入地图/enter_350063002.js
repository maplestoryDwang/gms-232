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
      cm.gainSkillBuff(80001630);
      cm.setAmbience("Ambience.img/warfare_far", 100, 60);
      cm.setAmbience("Ambience.img/flyingdeck_thunder", 80, 60);
      cm.userSetFieldFloating(350063002, 5, 5, 20);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(1540754, "oid=286686893", 988, 24, 6, 938, 1038, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286686893", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidA", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1540754, "oid=286688639", 888, 24, 6, 838, 938, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=286688639", "summon", 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidA", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1540755, "oid=286689881", 788, 24, 5, 738, 838, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=286689881", "summon", 0, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/AndroidB", 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('嘁，偏偏在这个时候！', 45, 1540490, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.setAmbience("Ambience.img/warning", 100, 60);
                cm.npc_SetSpecialAction("oid=286686893", "stand2", -1, 1);
                cm.npc_SetSpecialAction("oid=286688639", "stand2", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=286686893", "die1", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=286686893"], [0, 0, -50, 1, 0, 1, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=286688639", "die1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=286688639"], [0, 0, -50, 1, 0, 1, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=286686893");
                          cm.npc_LeaveField("oid=286686893");
                          cm.npc_LeaveField("oid=286688639");
                          cm.npc_LeaveField("oid=286688639");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1540666, "oid=286698956", 400, 24, 4, 350, 450, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=286698956", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=286698956", 1, 250, 140);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=286689881", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=286689881", 'die1', 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=286689881"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 1540666, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=286698956", "die1", 0, 1);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung2", "oid=286698956"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.playSoundEffDirectly("Ambience.img/warning");
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else if (status === V++) {
                                          cm.npc_LeaveField("oid=286689881");
                                          cm.npc_LeaveField("oid=286689881");
                                          cm.npc_LeaveField("oid=286698956");
                                          cm.npc_LeaveField("oid=286698956");
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.addPopupSay(1540499, 1000, "#face1#...", '', 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;