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
      cm.npc_ChangeController(3001341, 'oid=255833', 1599, 79, 22, 1549, 1649, 1, false, false);
      cm.npc_ChangeController(3001342, "oid=255834", 1821, 79, 21, 1771, 1871, 1, false, false);
      cm.npc_ChangeController(3001321, "oid=255835", 2091, 79, 20, 2041, 2141, 0, true, false);
      cm.npc_ChangeController(3001322, 'oid=255836', 2170, 79, 25, 2120, 2220, 1, true, false);
      cm.npc_ChangeController(3001321, "oid=255837", 3418, 79, 38, 3368, 3468, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001378, "oid=638651", 800, 30, 10, 750, 850, 0, false, false);
      cm.npc_SetSpecialAction('oid=638651', "summon", 0, 0);
      cm.npc_ChangeController(3001379, "oid=638652", 440, 30, 6, 390, 490, 0, false, false);
      cm.npc_SetSpecialAction("oid=638652", 'summon', 0, 0);
      cm.npc_ChangeController(3001380, 'oid=638653', 1250, 30, 14, 1200, 1300, 0, false, false);
      cm.npc_SetSpecialAction("oid=638653", "summon", 0, 0);
      cm.npc_ChangeController(3001381, 'oid=638654', 1600, 30, 22, 1550, 1650, 0, false, false);
      cm.npc_SetSpecialAction("oid=638654", "summon", 0, 0);
      cm.npc_ChangeController(3001306, "oid=638655", 1320, 30, 15, 1270, 1370, 0, true, false);
      cm.npc_SetSpecialAction("oid=638655", "summon", 0, 0);
      cm.npc_ChangeController(3001306, "oid=638656", 1370, 30, 16, 1320, 1420, 0, true, false);
      cm.npc_SetSpecialAction("oid=638656", 'summon', 0, 0);
      cm.npc_ChangeController(3001313, "oid=638657", 1440, 30, 16, 1390, 1490, 0, true, false);
      cm.npc_SetSpecialAction("oid=638657", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=638651", "dot", -1, 1);
      cm.npc_SetSpecialAction('oid=638652', 'dot', -1, 1);
      cm.npc_SetSpecialAction('oid=638653', 'dot', -1, 1);
      cm.npc_SetSpecialAction('oid=638654', "dot", -1, 1);
      cm.effect_Text(["#fn黑体##fs18#几个小时前，阿叙隆"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction('oid=638651', "open", 0, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=638655", -1);
                cm.npc_setForceFlip('oid=638656', -1);
                cm.npc_setForceFlip("oid=638657", -1);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=638655"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=638656"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=638657"], [0, 0, -20, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#门……怎么打开了呢？", 37, 3001306, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3001372, "oid=639086", 1052, 4, 12, 1002, 1102, 0, true, false);
                    cm.npc_SetSpecialAction("oid=639086", 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3001372, "oid=639269", 1002, 4, 12, 952, 1052, 0, true, false);
                      cm.npc_SetSpecialAction("oid=639269", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3001372, 'oid=639270', 952, 4, 11, 902, 1002, 0, true, false);
                        cm.npc_SetSpecialAction("oid=639270", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3001372, 'oid=639271', 902, 4, 11, 852, 952, 0, true, false);
                          cm.npc_SetSpecialAction("oid=639271", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3001372, "oid=639327", 702, 4, 7, 652, 752, 0, true, false);
                            cm.npc_SetSpecialAction("oid=639327", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3001372, "oid=639406", 652, 4, 7, 602, 702, 0, true, false);
                              cm.npc_SetSpecialAction("oid=639406", 'summon', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3001372, "oid=639407", 602, 4, 8, 552, 652, 0, true, false);
                                cm.npc_SetSpecialAction("oid=639407", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3001372, "oid=639415", 552, 4, 8, 502, 602, 0, true, false);
                                  cm.npc_SetSpecialAction("oid=639415", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#幽、幽灵冲过来了！！", 37, 3001306, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#察觉到了？怎么会？！", 37, 3001313, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#冷静点！只要关上门，敌人就没法攻过来……", 37, 3001313, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3001309, "oid=639457", 800, 4, 10, 750, 850, 0, true, false);
                                          cm.npc_SetSpecialAction("oid=639457", 'summon', 0, 0);
                                          cm.sendNormalTalk_Bottom("#face2#这是真的吗？", 37, 3001309, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#戴尔斯？", 37, 3001313, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=638652", "open", 0, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=638653", "open", 0, 1);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=638654", "open", 0, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#门……", 37, 3001313, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#背叛……吗？！！", 37, 3001313, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#这是打算让民族灭亡吗！到底为什么？！！", 37, 3001313, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#哼，与其让民族被你这种工程师玩弄于股掌之中\r\n倒不如我亲手毁掉。", 37, 3001309, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#还愣着干什么。给我干掉他们！", 37, 3001309, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove('oid=639086', 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639269", 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639270", 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639271", 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639327", 1, 500, 100);
                                                                cm.npc_SetForceMove('oid=639406', 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639407", 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=639415", 1, 500, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.setStandAloneMode(false);
                                                                  cm.dispose();
                                                                  cm.warp(940202029, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                } else {
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