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
      cm.setNumberForQuestCustomData(867200400, 867236000);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.monadForceMove("pink", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400690, "oid=7550901", -1150, -240, 11, -1200, -1100, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550901", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7550902", 15, -185, 47, -35, 65, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550902", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7550903", 180, -185, 48, 130, 230, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550903", "summon", 0, 0);
      cm.npc_ChangeController(9400666, "oid=7550904", -310, -70, 30, -360, -260, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550904", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550904", "flame", -1, 0);
      cm.npc_ChangeController(9400672, "oid=7550905", -810, 80, 19, -860, -760, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550905", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550905", "attack1", -1, 0);
      cm.npc_ChangeController(9400642, "oid=7550906", -900, 80, 19, -950, -850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550906", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=7550906", "attack1", -1, 0);
      cm.npc_ChangeController(9400602, "oid=7550907", -670, 80, 20, -720, -620, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550907", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=7550907", "attack1", -1, 0);
      cm.npc_ChangeController(9400621, "oid=7550908", -620, 80, 21, -670, -570, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550908", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550908", 'attack1', -1, 0);
      cm.npc_ChangeController(9400599, "oid=7550909", -560, 80, 21, -610, -510, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550909", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550909", 'attack1', -1, 0);
      cm.npc_ChangeController(9400641, "oid=7550910", -455, 80, 21, -505, -405, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550910", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=7550910", "attack1", -1, 0);
      cm.npc_ChangeController(9400596, "oid=7550911", -260, 80, 22, -310, -210, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550911", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550911", "attack1", -1, 0);
      cm.npc_ChangeController(9400674, "oid=7550912", -40, 60, 23, -90, 10, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550912", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550912", "attack1", -1, 0);
      cm.npc_ChangeController(9400675, "oid=7550913", 100, 60, 40, 50, 150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7550913", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550913", "attack1", -1, 0);
      cm.npc_ChangeController(9400583, "oid=7550914", 260, 50, 42, 210, 310, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550914", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550914", "attack1", -1, 0);
      cm.npc_ChangeController(9400590, "oid=7550915", 310, 50, 42, 260, 360, 1, true, false);
      cm.npc_SetSpecialAction("oid=7550915", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7550915", 'attack1', -1, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 20, -160]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack1", 100);
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402301/Skill2", 100);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2100, 0);
        cm.inGameDirectionEvent_OneTimeAction(5, 5000);
        cm.npc_SetSpecialAction("oid=7550903", "skill", -1, 0);
        cm.npc_SetSpecialAction("oid=7550902", "attack1", -1, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack2", 100);
          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402301/Skill2", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400242/Attack1", 100);
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402310/Attack1", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400245/Attack2", 100);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402311/Attack1", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400242/Attack3", 100);
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402312/Attack1", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400249/Skill2", 100);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402305/Attack2", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400250/Attack7", 100);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402308/Attack1", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400246/Attack2", 100);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402309/Attack1", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400246/Skill1", 100);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402313/Attack1", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400251/Attack6", 100);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402317/Attack1", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                            cm.userSetFieldFloating(867235900, 2, 2, 2);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.fieldEffect_PlayBGM("BgmPL2.img/Appearance", 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack2", 100);
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402301/Skill2", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400242/Attack1", 100);
                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402310/Attack1", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9400245/Attack2", 100);
                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402311/Attack1", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("雾……雾中黑影！！！！！！！！！！！！！！！！！！！", 37, 9400596, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("雾中黑影翻过城墙了！！！！！！！！！！！！！！！！！！", 37, 9400596, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(867235900, 0, 0, 0);
                                            cm.monadForceMove("pink", 1, 5000);
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.sendNewEffects(17, [2000, 2000, 1000, -900, -450]);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=7550901", 1, 450, 70);
                                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack7", 128);
                                                cm.npc_SetSpecialAction("oid=7550901", "attack1", -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(5500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b……凯恩，你和艾丽卡快去避一避！艾伊纳尔也是！", 56, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(17, [500, 1000, 2000, -690, 120]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402310/Skill1", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#我再也不会逃避了！", 37, 9400602, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402316/Attack1", 100);
                                                          cm.sendNewEffects(17, [500, 2000, 2000, 220, 120]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402312/Attack1", 100);
                                                              cm.sendNormalTalk_Bottom("#face1#我会与你一起奋战……直到最后一刻！", 37, 9400583, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402308/Attack1", 100);
                                                                cm.sendNormalTalk_Bottom("#face1#……你说我们已经无路可逃了？我留下来可不是因为想跟你合作，别想多了。", 37, 9400590, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNewEffects(19, [0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(14, [5000, 2000, 1000, 0, 0]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b大家快躲开！！！！", 56, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.updateInfoQuest(64140, "dir=1");
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.updateInfoQuest(64201, "event1_camera=0;event1_wall=0");
                                                                          cm.updateInfoQuest(64202, "event2_camera=0;event2_wall=0");
                                                                          cm.dispose();
                                                                          cm.openNpc(0, "副本_莫奈德_Act3_Boss");
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