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
      cm.npc_ChangeController(3001955, "oid=434288", 89, 1, 5, 39, 139, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3001957, "oid=6667120", -99, -10, 4, -149, -49, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667120", "summon", 0, 0);
      cm.npc_ChangeController(3001980, "oid=6667121", -600, -10, 4, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667121", "summon", 0, 0);
      cm.npc_ChangeController(3001980, "oid=6667122", -408, -10, 4, -458, -358, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667122", 'summon', 0, 0);
      cm.npc_ChangeController(3001980, "oid=6667123", -326, -10, 4, -376, -276, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667123", "summon", 0, 0);
      cm.npc_ChangeController(3001980, "oid=6667124", 234, -10, 5, 184, 284, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667124", "summon", 0, 0);
      cm.npc_ChangeController(3001980, "oid=6667125", 328, -10, 5, 278, 378, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667125", 'summon', 0, 0);
      cm.npc_ChangeController(3001959, "oid=6667126", -159, -5, 4, -209, -109, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6667126", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -10);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Text(["#fn黑体##fs18#另一边，尖塔", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#王国的命运……不是你能左右的，你没那个权利。", 36, 3001954, false, true, 1);
              cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#这么说……难道你有吗？", 36, 3001957, true, true, 1);
                cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#说到底，你也是垂涎那王位，才想逞英雄，不是吗？\r\n想把我赶下台，当上里斯托尼亚的王！", 36, 3001957, true, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#我绝不会容忍发生那种事情的……我花了多少努力才走到今天。\r\n怎么可能放任你仅凭血统就抢走我的位置？", 36, 3001957, true, true, 1);
                    cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6667120", 1, 90, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword1", 100);
                        cm.npc_SetSpecialAction("oid=6667120", "special1", -1, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#(冰冷的刀尖已逼近了我的脖子。\r\n一切都要结束了吗……眼前忽然觉得有些晕眩。)", 36, 3001954, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#如果……你能听见我殷切的祈祷。", 36, 3001954, false, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#请回应我吧，阿黛尔……", 36, 3001954, true, true, 1);
                                cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#！？", 36, 3001957, false, true, 1);
                                    cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 594, -832);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion8", 100);
                                                  cm.userSetFieldFloating(993162044, 10, 10, 10);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(993162044, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#！？", 36, 3001959, false, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/6', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -635, -437);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/boom", 100);
                                                                    cm.userSetFieldFloating(993162044, 10, 10, 10);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(993162044, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -10);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/3/white out_light", "white out_light", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face6#杰罗姆！", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                    cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=6667123", "special6", -1, 0);
                                                                                          cm.npc_SetSpecialAction("oid=6667121", "special6", -1, 0);
                                                                                          cm.npc_SetSpecialAction("oid=6667122", "special6", -1, 0);
                                                                                          cm.npc_SetSpecialAction("oid=6667124", "special6", -1, 0);
                                                                                          cm.npc_SetSpecialAction("oid=6667125", "special6", -1, 0);
                                                                                          cm.npc_ChangeController(3001981, "oid=6671395", -600, -10, 4, -650, -550, 0, false, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=6671395", 'summon', 0, 0);
                                                                                          cm.npc_ChangeController(3001982, "oid=6671396", -408, -10, 4, -458, -358, 0, false, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=6671396", "summon", 0, 0);
                                                                                          cm.npc_ChangeController(3001981, "oid=6671397", -326, -10, 4, -376, -276, 0, false, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=6671397", 'summon', 0, 0);
                                                                                          cm.npc_ChangeController(3001982, "oid=6671398", 234, -10, 5, 184, 284, 1, false, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=6671398", "summon", 0, 0);
                                                                                          cm.npc_ChangeController(3001981, "oid=6671399", 328, -10, 5, 278, 378, 1, false, 0, false);
                                                                                          cm.npc_SetSpecialAction("oid=6671399", "summon", 0, 0);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -491, -186);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=6667126", -1, 5, 180);
                                                                                              cm.npc_SetForceMove("oid=6667120", -1, 5, 180);
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/adele", 100);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/adele/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, -486, 29);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#里斯托尼亚王国大王子杰罗姆的契约骑士，阿德莱德，", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                            cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/11', 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face6#应主君的召唤……\r\n前来救驾。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                              cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/12", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#……", 36, 3001957, false, true, 1);
                                                                                                                  cm.effect_Voice("Voice2.img/adele/present/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.forceCompleteQuest(39639);
                                                                                                                      cm.gainExp(9556);
                                                                                                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                                                                      cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h1;59=h0;q=3");
                                                                                                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h1;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                                                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h1;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h1;19=h0;37=f;47=h0");
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.warp(410000352, 0, false);
                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                              cm.npc_LeaveField("oid=6667120");
                                                                                                                              cm.npc_LeaveField("oid=6667121");
                                                                                                                              cm.npc_LeaveField("oid=6667122");
                                                                                                                              cm.npc_LeaveField("oid=6667123");
                                                                                                                              cm.npc_LeaveField("oid=6667124");
                                                                                                                              cm.npc_LeaveField("oid=6667125");
                                                                                                                              cm.npc_LeaveField("oid=6667126");
                                                                                                                              cm.npc_LeaveField("oid=6671395");
                                                                                                                              cm.npc_LeaveField("oid=6671396");
                                                                                                                              cm.npc_LeaveField("oid=6671397");
                                                                                                                              cm.npc_LeaveField("oid=6671398");
                                                                                                                              cm.npc_LeaveField("oid=6671399");
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