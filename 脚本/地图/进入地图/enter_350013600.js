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
      cm.npc_ChangeController(1540458, "oid=211944069", -15, 40, 1, -65, 35, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944069", 'summon', 0, 0);
      cm.npc_ChangeController(1540459, "oid=211944070", 40, 40, 1, -10, 90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944070", 'summon', 0, 0);
      cm.npc_ChangeController(1540526, "oid=211944071", 95, 40, 1, 45, 145, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=211944071", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=211944072", 150, 40, 1, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944072", 'summon', 0, 0);
      cm.npc_ChangeController(1540450, "oid=211944073", 205, 40, 1, 155, 255, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944073", 'summon', 0, 0);
      cm.npc_ChangeController(1540452, "oid=211944074", 315, 40, 1, 265, 365, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944074", "summon", 0, 0);
      cm.npc_ChangeController(1540525, "oid=211944075", 370, 40, 1, 320, 420, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211944075", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.onHireTutorById(0, 80001600, 350013500);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("原来如此……黑色天堂就是用来摧毁冒险岛世界的#r飞船#k啊……!", 37, 1540525, 0, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我们必须想想对策. ", 37, 1540452, 1, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们不知道敌人的飞船会从哪里发动攻击, 我会先让各个村庄做好防御准备. ", 37, 1540451, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不, 这样是不够的. ", 37, 1540450, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我们要让所有人知道联盟非常强大. \r\n如果敌人从空中来, 我们就要在空中迎接他们. ", 37, 1540450, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呃……这么一来, 我们必须抓紧时间. \r\n我有一个计策. ", 37, 1540451, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_KinesisEXP(10755400);
                      cm.forceCompleteQuest(33142);
                      cm.gainExp(10755400);
                      cm.playerMessage(5, "获得了500声望. ");
                      cm.updateInfoQuest(33120, "honor=1");
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=211944072", -1, 50, 100);
                        cm.npc_SetForceMove("oid=211944073", -1, 100, 100);
                        cm.npc_SetForceMove("oid=211944074", -1, 110, 100);
                        cm.npc_SetForceMove("oid=211944075", -1, 150, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 180);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=211944071");
                              cm.npc_LeaveField("oid=211944072");
                              cm.npc_LeaveField("oid=211944073");
                              cm.npc_LeaveField("oid=211944070");
                              cm.npc_LeaveField("oid=211944069");
                              cm.npc_LeaveField("oid=211944074");
                              cm.npc_LeaveField("oid=211944075");
                              cm.inGameDirectionEvent_SetHideEffect(1);
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.setAmbience("Ambience.img/hospital", 80, 60);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 55, 0, 0, 0, 2500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === V++) {
                                    cm.playSoundEffDirectly("Ambience.img/hospital");
                                    cm.setAmbience("Ambience.img/horrorpiano", 100, 60);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 530, -20);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 530, -20);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                    cm.effect_NormalSpeechBalloon("斯乌……", 1, 0, 0, 3000, 1, 50, 0, 0, 4, 1540515, null, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.playSoundEffDirectly("Ambience.img/horrorpiano");
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                          cm.dispose();
                                                          cm.warp(350013601, 0, true);
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