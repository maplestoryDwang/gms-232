var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1450, 65);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001346, 'oid=722422', -2800, 30, 34, -2850, -2750, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=722422", "summon", 0, 0);
            cm.npc_ChangeController(3001310, 'oid=722423', -1370, 30, 17, -1420, -1320, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=722423', "summon", 0, 0);
            cm.npc_ChangeController(3001311, "oid=722424", -1300, 30, 16, -1350, -1250, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=722424", "summon", 0, 0);
            cm.npc_ChangeController(3001316, 'oid=722425', -1900, 50, 22, -1950, -1850, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=722425", "summon", 0, 0);
            cm.npc_ChangeController(3001315, "oid=722426", -1965, 50, 22, -2015, -1915, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=722426", "summon", 0, 0);
            cm.npc_ChangeController(3001317, "oid=722427", -2030, 50, 23, -2080, -1980, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=722427", "summon", 0, 0);
            cm.npc_ChangeController(3001318, "oid=722428", -2095, 50, 30, -2145, -2045, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=722428", "summon", 0, 0);
            cm.npc_ChangeController(3001319, "oid=722429", -2160, 50, 3, -2210, -2110, 0, true, 0, false);
            cm.npc_SetSpecialAction('oid=722429', "summon", 0, 0);
            cm.Npc_Fadeout("oid=722425", 0, 0);
            cm.Npc_Fadeout("oid=722426", 0, 0);
            cm.Npc_Fadeout("oid=722427", 0, 0);
            cm.Npc_Fadeout("oid=722428", 0, 0);
            cm.Npc_Fadeout("oid=722429", 0, 0);
            cm.npc_ChangeController(3001308, "oid=722430", -1220, 30, 14, -1270, -1170, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=722430', 'summon', 0, 0);
            cm.npc_ChangeController(3001307, 'oid=722431', -1150, 30, 13, -1200, -1100, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=722431', 'summon', 0, 0);
            cm.Npc_Fadeout("oid=722430", 0, 0);
            cm.Npc_Fadeout('oid=722431', 0, 0);
            cm.teachSkill(150001016, -1, 0);
            cm.teachSkill(150001021, 1, 1);
            cm.forceCompleteQuest(34900);
            cm.sendNormalTalk_Bottom("#face4#这边！快！", 37, 3001354, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
              cm.npc_SetForceMove("oid=722423", -1, 150, 150);
              cm.npc_SetForceMove("oid=722424", -1, 150, 150);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#莫里奥！希娜！", 37, 3001307, false, true, 1);
              } else {
                if (status === V++) {
                  cm.Npc_Fadeout("oid=722430", 255, 500);
                  cm.Npc_Fadeout("oid=722431", 255, 500);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, -1350, 65);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.npc_setForceFlip("oid=722423", 1);
                        cm.npc_setForceFlip('oid=722424', 1);
                        cm.inGameDirectionEvent_AskAnswerTime(30);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#小伙伴们！", 37, 3001310, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=722430", -1, 150, 150);
                            cm.npc_SetForceMove("oid=722431", -1, 150, 150);
                            cm.sendNormalTalk_Bottom("#face2#大家都平安无事啊！", 37, 3001308, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#迪恩！卡尼里恩！", 37, 3001354, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#你是哪位？莫非是……伊利温！？", 37, 3001307, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#以后再跟你解释。先行动要紧。", 37, 3001354, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#太可怕了……呼哧呼哧……", 37, 3001310, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#别哭，打起精神来！", 37, 3001311, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#快，没时间了！快！", 37, 3001354, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("孩子们！你们都活着！", 37, 3001362, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=722425", 255, 500);
                                            cm.Npc_Fadeout('oid=722426', 255, 500);
                                            cm.Npc_Fadeout("oid=722427", 255, 500);
                                            cm.Npc_Fadeout("oid=722428", 255, 500);
                                            cm.Npc_Fadeout("oid=722429", 255, 500);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.npc_setForceFlip("oid=722423", -1);
                                              cm.npc_setForceFlip('oid=722424', -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -1850, 65);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("大家都在一起啊！太好了！", 37, 3001363, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#大家全都成功逃脱啦！", 37, 3001354, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('不过……校长呢！？', 37, 3001361, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#face3#……', 37, 3001354, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#听说阿加特大人……去世了！", 37, 3001310, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#什么！？这是真的吗！？？？？", 37, 3001307, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#怎么会……这……不可能！", 37, 3001308, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#……", 37, 3001311, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#……", 37, 3001354, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#(绝不能让阿加特大人白白牺牲……快……逃出阿叙隆！)", 37, 3001354, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那个！是水晶门！", 37, 3001354, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1500, 900, -2800, 30);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#那是我在上课时看到的水晶门吗？看起来好危险啊！！！", 37, 3001310, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#出去就能逃离这了！快！跟我来！", 37, 3001354, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.forceStartQuest(34819, '');
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.forceCompleteQuest(34819);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                      } else if (status === V++) {
                                                                                        cm.updateInfoQuest(34819, 'exp=1');
                                                                                        cm.gainExp(10711);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField('oid=722422');
                                                                                        cm.npc_LeaveField("oid=722423");
                                                                                        cm.npc_LeaveField("oid=722424");
                                                                                        cm.npc_LeaveField("oid=722425");
                                                                                        cm.npc_LeaveField("oid=722426");
                                                                                        cm.npc_LeaveField("oid=722427");
                                                                                        cm.npc_LeaveField('oid=722428');
                                                                                        cm.npc_LeaveField("oid=722429");
                                                                                        cm.npc_LeaveField('oid=722430');
                                                                                        cm.npc_LeaveField("oid=722431");
                                                                                        cm.dispose();
                                                                                        cm.warp(940202033, 0, true);
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