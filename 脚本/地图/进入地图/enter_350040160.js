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
      cm.npc_ChangeController(1540502, "oid=22227844", -30, 40, 5, -80, 20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22227844", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=22227845", -80, 40, 4, -130, -30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22227845", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=22227846", -110, 40, 4, -160, -60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22227846", 'summon', 0, 0);
      cm.npc_ChangeController(1540650, "oid=22227847", 300, 1, 36, 250, 350, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=22227847", "summon", 0, 0);
      cm.npc_ChangeController(1540651, "oid=22227848", 160, 1, 36, 110, 210, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=22227848", "summon", 0, 0);
      cm.npc_ChangeController(1540652, "oid=22227849", 380, 40, 9, 330, 430, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=22227849", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 190, 61);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好了，终于完成了！\r\n现在只要插入识别芯片……", 37, 1540651, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
              cm.userSetFieldFloating(350040160, 20, 30, 20);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(350040160, 0, 0, 0);
                cm.sendNormalTalk_Bottom("#face1#刚刚怎么回事？\r\n我总感觉很熟悉……难道……", 37, 1540503, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=22227847", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……放屁的人？', 37, 1540650, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
                        cm.npc_setForceFlip("oid=22227849", 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 1000, 1587, 61);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(350040160, 20, 30, 20);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 760, 1, 1, 0, 1, 1, 0]);
                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                            cm.npc_ChangeController(1540654, "oid=22228238", 760, 53, 16, 710, 810, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=22228238", 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                            cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 860, 53, 1, 0, 1, 1, 0]);
                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                              cm.npc_ChangeController(1540654, "oid=22228239", 860, 53, 20, 810, 910, 1, false, 0, false);
                              cm.npc_SetSpecialAction("oid=22228239", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 960, 53, 1, 0, 1, 1, 0]);
                                cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                cm.npc_ChangeController(1540654, "oid=22228240", 960, 53, 19, 910, 1010, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=22228240", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1060, 53, 1, 0, 1, 1, 0]);
                                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                  cm.npc_ChangeController(1540654, "oid=22228271", 1060, 53, 18, 1010, 1110, 1, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=22228271", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1160, 53, 1, 0, 1, 1, 0]);
                                    cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                    cm.npc_ChangeController(1540654, "oid=22228272", 1160, 53, 23, 1110, 1210, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=22228272", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1260, 53, 1, 0, 1, 1, 0]);
                                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                      cm.npc_ChangeController(1540654, "oid=22228273", 1260, 53, 24, 1210, 1310, 1, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=22228273", 'summon', 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1360, 53, 1, 0, 1, 1, 0]);
                                        cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                        cm.npc_ChangeController(1540654, "oid=22228275", 1360, 53, 25, 1310, 1410, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=22228275", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1460, 53, 1, 0, 1, 1, 0]);
                                          cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                          cm.npc_ChangeController(1540654, "oid=22228287", 1460, 53, 26, 1410, 1510, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=22228287", 'summon', 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1560, 53, 1, 0, 1, 1, 0]);
                                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                            cm.npc_ChangeController(1540654, "oid=22228288", 1560, 53, 27, 1510, 1610, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=22228288", 'summon', 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1660, 53, 1, 0, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                              cm.npc_ChangeController(1540654, "oid=22228289", 1660, 53, 28, 1610, 1710, 1, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=22228289", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1760, 53, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                cm.npc_ChangeController(1540654, "oid=22228290", 1760, 53, 30, 1710, 1810, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=22228290", "summon", 0, 0);
                                                cm.userSetFieldFloating(350040160, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#r发现目标。消灭。\r\n发现目标。消灭。#k", 37, 1540654, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 190, -119);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 200, 0);
                                                          cm.sendNormalTalk_Bottom("队长！避难处被发现了！\r\n必须准备好应对攻击！！", 37, 1540502, false, true);
                                                        } else if (status === V++) {
                                                          cm.updateInfoQuest(33200, "failCount=7;underAttack=1;androidHelmet=3");
                                                          cm.forceCompleteQuest(33204);
                                                          cm.playerMessage(5, "请在限制时间内保护防御处. ");
                                                          cm.dispose();
                                                          cm.warp(350040170, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;