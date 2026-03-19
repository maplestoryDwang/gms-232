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
      cm.setMobImage("PL_MONAD.img/EP1/ACT2/monsterfootstep_loop", 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400690, "oid=7618418", 1500, 440, 33, 1450, 1550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7618418", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7618419", -350, 440, 32, -400, -300, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618419", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7618420", -250, 440, 32, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618420", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7618421", -150, 440, 32, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618421", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7618422", -50, 440, 32, -100, 0, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618422", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7618423", 20, 440, 32, -30, 70, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618423", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7618424", 100, 440, 32, 50, 150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618424", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7618425", 180, 440, 32, 130, 230, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618425", 'summon', 0, 0);
      cm.npc_ChangeController(9400675, "oid=7618426", 250, 440, 32, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618426", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7618427", 400, 440, 32, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618427", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7618428", 610, 440, 31, 560, 660, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618428", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=7618429", -280, 500, 9, -330, -230, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618429", "summon", 0, 0);
      cm.npc_ChangeController(9400675, "oid=7618430", -170, 500, 7, -220, -120, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618430", 'summon', 0, 0);
      cm.npc_ChangeController(9400641, "oid=7618431", -60, 500, 8, -110, -10, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618431", 'summon', 0, 0);
      cm.npc_ChangeController(9400667, "oid=7618432", 70, 500, 6, 20, 120, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618432", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7618433", 200, 500, 3, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618433", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7618434", 280, 500, 2, 230, 330, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618434", 'summon', 0, 0);
      cm.npc_ChangeController(9400675, "oid=7618435", 370, 500, 11, 320, 420, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618435", 'summon', 0, 0);
      cm.npc_ChangeController(9400666, "oid=7618436", 460, 500, 12, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618436", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7618437", 550, 500, 13, 500, 600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618437", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=7618438", 660, 500, 14, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618438", "summon", 0, 0);
      cm.npc_ChangeController(9400668, "oid=7618439", 730, 500, 16, 680, 780, 0, true, false);
      cm.npc_SetSpecialAction("oid=7618439", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7618418", 'attack1', -1, 0);
        cm.npc_SetForceMove("oid=7618419", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618420", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618421", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618422", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618423", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618424", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618425", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618426", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618427", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618429", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618430", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618431", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618432", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618433", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618434", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618435", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618436", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618437", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618428", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618438", 1, 200, 10);
        cm.npc_SetForceMove("oid=7618439", 1, 200, 10);
        cm.sendNewEffects(12, [0, 240, 320, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack4", 128);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b居然……这么多……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [10000, 1200, 320, 0, 0]);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402245/Attack2", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack5", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack2", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack7", 128);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack4", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402252/Attack2", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack1", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400580, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b（……雾中……黑影？\r\n这么说……它不是烟雾和雾气形成的假象……？）", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.updateInfoQuest(64020, "chk1=1;chk2=1;chk3=1;chk4=1");
                                        cm.forceCompleteQuest(64020);
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack5", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack2", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack4", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=7618418", "attack1", -1, 0);
                                              cm.warp(867201801, 1);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.updateInfoQuest(64085, "dir=2");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;