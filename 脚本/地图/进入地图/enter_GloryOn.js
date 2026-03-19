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
      if (cm.getNumberFromQuestInfo(39712, "dir") != 1) {
        cm.dispose();
        return;
      }
      cm.monadForceMove('p2', 0, 0);
      cm.monadForceMove('p1', 1, 0);
      cm.npc_ChangeController(9062194, "oid=357868", 796, 362, 102, 746, 846, 1, false, 0, false);
      cm.npc_ChangeController(3004201, "oid=357869", 1487, 339, 0, 1437, 1537, 0, false, 0, false);
      cm.npc_ChangeController(3004202, 'oid=357870', 2547, 385, 0, 2497, 2597, 0, false, 0, false);
      cm.npc_ChangeController(3004203, 'oid=357871', 2211, 372, 0, 2161, 2261, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(700);
          cm.effect_Voice("SoundEff/knock", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_Voice("SoundEff/knock", 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm50/SubterminalPoint", 0, 0);
              cm.sendNormalTalk_Bottom("#face1#师父！师父！", 37, 3004322, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#师父！", 37, 3004323, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#Cgray#最开始接触到那东西的时候……", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("#Cgray#我曾以为自己身处宇宙之中。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#Cgray#毕竟四面八方密布着不可尽数的点点繁星。", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust/3", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n#Cgray#但是，当我意识到那无数繁星便是他即将面临的未来之时。", 0);
                              cm.npc_ChangeController(3004210, 'oid=357872', 1628, 312, 0, 1578, 1678, 1, false, 0, false);
                              cm.npc_ChangeController(3004215, 'oid=357873', 1420, 327, 0, 1370, 1470, 0, false, 0, false);
                              cm.npc_ChangeController(3004216, "oid=357874", 1698, 329, 0, 1648, 1748, 1, false, 0, false);
                              cm.npc_ChangeController(3004204, "oid=357875", 877, 570, 144, 827, 927, 4, true, 0, false);
                              cm.npc_ChangeController(3004205, "oid=357876", 710, 359, 102, 660, 760, 4, true, 0, false);
                              cm.npc_ChangeController(3004211, 'oid=357877', 2667, 402, 0, 2617, 2717, 0, false, 0, false);
                              cm.npc_ChangeController(3004212, "oid=357878", 1828, 585, 0, 1778, 1878, 1, false, 0, false);
                              cm.npc_ChangeController(3004213, "oid=357879", 1735, 579, 0, 1685, 1785, 0, false, 0, false);
                              cm.npc_ChangeController(3004217, "oid=357880", 1775, 327, 0, 1725, 1825, 1, false, 0, false);
                              cm.npc_ChangeController(3004219, 'oid=357881', 1333, 330, 0, 1283, 1383, 0, false, 0, false);
                              cm.npc_ChangeController(3004218, "oid=357882", 1258, 329, 0, 1208, 1308, 0, false, 0, false);
                              cm.npc_ChangeController(3004220, "oid=357883", 3241, 386, 0, 3191, 3291, 1, false, 0, false);
                              cm.npc_ChangeController(3004220, "oid=357884", 974, 344, 0, 924, 1024, 1, false, 0, false);
                              cm.npc_ChangeController(3004220, 'oid=357885', 3171, 413, 0, 3121, 3221, 1, false, 0, false);
                              cm.npc_ChangeController(3004221, "oid=357886", 396, 549, 0, 346, 446, 0, false, 0, false);
                              cm.npc_ChangeController(3004221, "oid=357887", 2891, 626, 0, 2841, 2941, 1, false, 0, false);
                              cm.npc_ChangeController(3004224, "oid=357888", 473, 343, 0, 423, 523, 0, false, 0, false);
                              cm.npc_ChangeController(3004224, "oid=357889", 2115, 370, 0, 2065, 2165, 0, false, 0, false);
                              cm.npc_ChangeController(3004225, "oid=357890", 133, 549, 0, 83, 183, 0, false, 0, false);
                              cm.npc_ChangeController(3004225, 'oid=357891', 2589, 623, 0, 2539, 2639, 1, false, 0, false);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#Cgray#当我知晓这一切的未来最终都会以#r“失败”#k#Cgray#这#r结局#k#Cgray#告终时。", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#Cgray#我能够理解他的挫败感。", 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#师父！您没事吧？师父！！", 37, 3004323, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#……", 37, 3003923, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust/4", 0, 1000, 0, 0, 2, 4, 0, -1, 0, 0, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzBlack", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction23.img/illust/5", 0, 1000, 0, 0, 2, 4, 0, -1, 0, 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(3300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#Cgray#没错，他遭遇挫折也有我的原因。", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#            大世无界", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_Hero9(0, 1500);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else if (status === V++) {
                                                        cm.eventSKill(0);
                                                        cm.warp(993120000, 5, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.updateInfoQuest(39712, "dir=2");
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
        }
      }
    }
  }
}