var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(3003659, 'oid=354383', 1576, 190, 12, 1526, 1626, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=354384", -548, 190, 11, -551, -498, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=354385", -905, 190, 15, -955, -855, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=354386", -1607, 190, 14, -1657, -1557, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=354387", 878, 190, 13, 828, 928, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=354388", -1251, 190, 16, -1301, -1201, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onSetMapObjectMove('attack', [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971130", -1500, 193, 1, -1550, -1450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971130", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971131", -1150, 193, 2, -1200, -1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971131", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971132", -800, 193, 3, -850, -750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971132", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971133", -450, 193, 4, -500, -400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971133", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971134", 450, 193, 6, 400, 500, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971134", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971135", 800, 193, 7, 750, 850, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971135", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971136", 1150, 193, 7, 1100, 1200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971136", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=1971137", 1500, 193, 8, 1450, 1550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1971137", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 500, 0, 0, -300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm50/TheWorld’sEnd", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("决战当天，神秘河尽头的泰涅布里斯", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#r近乎神之人与凡人的战争#k於此揭幕最终章。", 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#发射！", 37, 3003750, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("开炮！！！", 37, 3003758, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(993110781, 10, 10, 6);
                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 700, 0);
                        cm.npc_SetSpecialAction("oid=1971130", "special", -1, 1);
                        cm.npc_SetSpecialAction("oid=1971137", "special", -1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=1971131", "special", -1, 1);
                          cm.npc_SetSpecialAction("oid=1971136", "special", -1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=1971132", "special", -1, 1);
                            cm.npc_SetSpecialAction("oid=1971135", "special", -1, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=1971133", "special", -1, 1);
                              cm.npc_SetSpecialAction("oid=1971134", "special", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.monadForceMove("giantHit1", 1, 0);
                                cm.setAmbience("SoundEff.img/BM3/boomb", 80, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("联盟展开了殊死之战。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("为了守护赖以生存的世界。", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("他们曾试图反抗神祇般的存在。", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("来了！所有人趴下！！！", 37, 3003758, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.onSetMapObjectMove("attackAll", [1, 100, 0]);
                                            cm.onSetMapObjectMove("attackAll", '1', [2, 0]);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_attack", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(993110781, 50, 50, 1);
                                              cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM3_giant2/skeleton", "animation", '', 'intro'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1700);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("联军伤亡惨重。", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("有的人感到身陷绝境，无力回天。", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("而其他人则牙关紧咬，伺机待发。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("他们在等待决定性的时刻来临。", 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(993110780, 0, false);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.npc_LeaveField("oid=1971130");
                                                              cm.npc_LeaveField("oid=1971131");
                                                              cm.npc_LeaveField("oid=1971132");
                                                              cm.npc_LeaveField("oid=1971132");
                                                              cm.npc_LeaveField("oid=1971133");
                                                              cm.npc_LeaveField("oid=1971133");
                                                              cm.npc_LeaveField("oid=1971134");
                                                              cm.npc_LeaveField("oid=1971134");
                                                              cm.npc_LeaveField("oid=1971135");
                                                              cm.npc_LeaveField("oid=1971135");
                                                              cm.npc_LeaveField("oid=1971136");
                                                              cm.npc_LeaveField("oid=1971136");
                                                              cm.npc_LeaveField("oid=1971137");
                                                              cm.npc_LeaveField("oid=1971137");
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