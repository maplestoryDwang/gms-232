var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestActive(37801) && !cm.isQuestFinished(37801) && cm.getStringFromQuestInfo(37800, "dir00") !== 'end') {
    action1(f, E, e);
  } else {
    cm.dispose();
    cm.npc_ChangeController(2570001, "oid=23543", 157, -141, 91, 107, 207, 1, false, 0, false);
    cm.npc_ChangeController(2570002, 'oid=23544', -158, -197, 36, -208, -108, 0, false, 0, false);
    cm.npc_ChangeController(2570003, 'oid=23545', -230, -64, 39, -280, -180, 0, false, 0, false);
    cm.npc_ChangeController(2570004, "oid=23546", 64, -63, 61, 14, 114, 1, false, 0, false);
    cm.npc_ChangeController(2570005, "oid=23547", -370, -11, 25, -420, -320, 0, false, 0, false);
    cm.npc_ChangeController(2570006, "oid=23548", 238, 165, 8, 188, 288, 1, false, 0, false);
    cm.npc_ChangeController(2500001, "oid=23549", -531, -7, 22, -581, -481, 1, false, 0, false);
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1, -312);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face0##fs20##r猎魔？！#k", 36, 2570121, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm55/TheKnightOfSharenian", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#往那边赶！ ", 36, 2570101, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/7/0", 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#还有五只往西边去了！！", 36, 2570103, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#喂，瑞恩！！你差点儿打到我了！！", 36, 2570105, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#抱歉，抱歉。哇啊！我都说抱歉了！", 36, 2570103, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#魁，魁格？！你没事吧？", 36, 2570102, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……好疼。", 36, 2570104, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#噶！！！", 36, 2570132, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#吱吱吱吱！！！", 36, 2570132, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#说什么猎魔……\r\n不就是田鼠嘛……。", 36, 2570123, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -56, -162);
                                        } else {
                                          if (status === V++) {
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
                                                  cm.sendNormalTalk_Bottom("#face4#呼哧呼哧……！团长……团长！！", 36, 2570103, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(2570103, "oid=37854667", -230, -75, 39, -280, -180, 0, true, 700, false);
                                                    cm.npc_SetSpecialAction("oid=37854667", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.sendNormalTalk_Bottom('嗯？', 56, 0, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#莫非……你没看见？", 36, 2570103, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("(好像没看到……)", 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#刚才……！那些恶魔……在团长旁边……", 36, 2570103, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#刚才不是跑出去一大群#b田鼠#k嘛！", 36, 2570103, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(2570101, "oid=37854955", 157, -157, 91, 107, 207, 1, true, 700, false);
                                                                cm.npc_SetSpecialAction("oid=37854955", "summon", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face6#团长！", 36, 2570101, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#刚才有没有看到二十只左右的田鼠往这边涌来？", 36, 2570101, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(2570105, "oid=37855086", -370, -37, 25, -420, -320, 0, true, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=37855086", "summon", 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face0#快说快说！事情怎么样了？！", 36, 2570105, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_ChangeController(2570102, "oid=37855209", -158, -222, 36, -208, -108, 0, true, 700, false);
                                                                            cm.npc_SetSpecialAction("oid=37855209", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我也赶进去十只左右！\r\n它们应该不会溜出来吧？", 36, 2570102, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(2570104, "oid=37855568", 64, -82, 61, 14, 114, 1, true, 700, false);
                                                                                  cm.npc_SetSpecialAction("oid=37855568", "summon", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#任务是失败了？还是成功了？", 36, 2570104, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……。", 56, 0, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("好像……失败了。目前来说。", 56, 0, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#额……", 36, 2570103, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=37854667", "sit", -1, 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#哈啊……", 36, 2570101, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetSpecialAction("oid=37854955", "sit", -1, 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#呵……", 36, 2570102, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetSpecialAction("oid=37855209", "sit", -1, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#咳……", 36, 2570105, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=37855086", "sit", -1, 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……？", 36, 2570104, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Unknown9(0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                  cm.updateInfoQuest(37800, "dir00=end");
                                                                                                                  cm.updateInfoQuest(37800, "04=h1;dir00=end");
                                                                                                                  cm.updateInfoQuest(37800, "01=sit;04=h1;dir00=end");
                                                                                                                  cm.updateInfoQuest(37800, "01=sit;02=sit;04=h1;dir00=end");
                                                                                                                  cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;04=h1;dir00=end");
                                                                                                                  cm.updateInfoQuest(37800, "01=sit;02=sit;03=sit;04=h1;05=sit;dir00=end");
                                                                                                                  cm.npc_LeaveField("oid=1133663");
                                                                                                                  cm.npc_LeaveField("oid=1133665");
                                                                                                                  cm.npc_LeaveField("oid=1133662");
                                                                                                                  cm.npc_LeaveField("oid=1133666");
                                                                                                                  cm.npc_LeaveField("oid=1133664");
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                  cm.克里塞_获得技能();
                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                  cm.setStandAloneMode(false);
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