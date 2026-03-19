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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004850, "oid=2710012", 37, 529, 17, -13, 87, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710012", "summon", 0, 0);
      cm.npc_ChangeController(3004860, "oid=2710013", 461, 806, 3, 411, 511, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710013", "summon", 0, 0);
      cm.npc_ChangeController(3004860, "oid=2710014", 581, 806, 1, 531, 631, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710014", "summon", 0, 0);
      cm.npc_ChangeController(3004854, "oid=2710015", -141, 529, 17, -191, -91, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710015", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=2710015", 0, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -64, 528);
      cm.Hidden_background("blacksub", 1, 0, 0, 0);
      cm.Hidden_background('man', 1, 0, 0, 0);
      cm.monadForceMove("neckless", 0, 0);
      cm.onSetMapObjectMove('rope', [1, 0, 0]);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 192, 896);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#沃莉，没事吧？", 36, 3004850, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#没……没问题！", 36, 3004851, true, true, 1);
        } else {
          if (status === V++) {
            cm.Hidden_background("olly2", 1, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你该知道吧？一旦它们涌上来把#b探照灯#k挤碎，作战将立即终止。\r\n所以你要勤快地将它们打退。", 36, 3004850, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#交给我吧！", 36, 3004851, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -72, 605);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(真的没关系吗？还是我来……)", 56, 0, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0##h0#，你要保存战力。\r\n危险的事就交给我和沃莉吧。", 36, 3004850, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("动不动就把人派去战斗……", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#对付怪物，对你来说又不危险。\r\n#r与大海打交道#k才危险。", 36, 3004850, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("(与大海打交道……)", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#而且借此机会，沃莉她……或许会有所领悟。", 36, 3004850, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#真的得站到#r庞然之物#k面前，才能知道自己有多渺小。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#沃莉，累的话，要不要和你换班？", 36, 3004850, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#不，不必！！休麦要驾驶潜水艇呢！", 36, 3004851, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#真拗不过你……\r\n不过，生命线都连接好了，应该没事的。", 36, 3004850, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们有备用电池，遇到万一的情况，也可以使用#b逃生舱#k。", 36, 3004850, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#反正我们也快抵达目标了……", 36, 3004850, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setAmbience("SoundEff.img/sellas/phone", 100, 60);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2710012"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("通讯？从总部发来的吗？", 56, 0, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#不，那不可能。\r\n要想接收到来自水面上的电波，还要再上浮很长一段路。", 36, 3004850, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.playSoundEffDirectly("SoundEff.img/sellas/phone");
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                cm.sendNormalTalk_Bottom("#face0#（嗞嗞嗞）", 36, 3004861, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#（嗞嗞嗞）请回答，这里是……", 36, 3004861, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#（嗞嗞嗞嗞）紧急情况……", 36, 3004861, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("是救援信号。", 56, 0, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#这里是海蜇号。通信状态不佳。\r\n请表明身份。再重复一遍，请表明身份。", 36, 3004850, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#（嗞嗞嗞）这里是……点。通知总部。\r\n我们……沉没了。", 36, 3004861, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#喂，快说明位置！", 36, 3004850, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                              cm.sendNormalTalk_Bottom("#face0#（嗞嗞嗞）再重复一遍……这里……对总部……", 36, 3004861, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayBGM("SoundEff.img/BMpre/WSappear_loop", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#报告……#r部队全军覆没……", 36, 3004861, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这里是……", 36, 3004861, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##fs18#这里是……#r海蜇号……。", 36, 3004861, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1##fs20##r海……海蜇？！！", 36, 3004850, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(993185012, 1, 1, 5);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.userSetFieldFloating(993185012, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.userSetFieldFloating(993185012, 1, 1, 5);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(993185012, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.Hidden_background('olly2', 1, 1, 0, 0);
                                                                                                  cm.Hidden_background("blacksub", 1, 1, 0, 0);
                                                                                                  cm.Hidden_background("sub", 1, 0, 0, 0);
                                                                                                  cm.Hidden_background("blacksub", 1, 0, 0, 0);
                                                                                                  cm.Hidden_background("sub", 1, 1, 0, 0);
                                                                                                  cm.npc_LeaveField("oid=2710015");
                                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.setAccountQuestInfo(252, "count=4204;T=20210402124131");
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                                                                    cm.monadForceMove('neckless', 1, 1500);
                                                                                                    cm.setAmbience("Sound/SoundEff.img/sellas/mystery", 125, 60);
                                                                                                    cm.sendNormalTalk_Bottom("#face3#休麦！目标……能看见了！！", 36, 3004851, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('#face1#啊！', 36, 3004850, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#我再把绳子放长一点儿", 36, 3004851, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.Hidden_background("olly2", 1, 0, 0, 0);
                                                                                                          cm.sendNormalTalk_Bottom("#face1#不要啊！！沃莉！！！", 36, 3004850, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                            cm.userSetFieldFloating(993185012, 5, 5, 5);
                                                                                                            cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.userSetFieldFloating(993185012, 2, 2, 5);
                                                                                                              cm.sendNormalTalk_Bottom("呃……好强的冲击……。", 56, 0, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1 #沃莉！回来！！", 36, 3004850, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1##fs20#该死！！！这是#r我的恐惧！！", 36, 3004850, false, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1##fs20##r会被那家伙吞掉的！", 36, 3004850, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1##fs20##r沃莉！！！", 36, 3004850, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.Hidden_background("olly", 1, 0, 0, 0);
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.userSetFieldFloating(993185012, 0, 0, 0);
                                                                                                                                  cm.onSetMapObjectMove("rope", [1, 255, 1]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 192, 877);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                          } else if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                            cm.forceCompleteQuest(37916);
                                                                                                                                            cm.gainExp(132738181);
                                                                                                                                            cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;07=h1;25=h1;17=h0;09=h0;w2=open");
                                                                                                                                            cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;07=h0;25=h1;17=h0;09=h0;w2=open");
                                                                                                                                            cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;07=h0;25=h1;08=h1;17=h0;09=h0;w2=open");
                                                                                                                                            cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;07=h0;25=h1;08=h1;17=h0;09=h0;w2=open;w3=open");
                                                                                                                                            cm.npc_LeaveField("oid=2710012");
                                                                                                                                            cm.npc_LeaveField("oid=2710013");
                                                                                                                                            cm.npc_LeaveField("oid=2710014");
                                                                                                                                            cm.dispose();
                                                                                                                                            cm.warp(450016200, 0, false);
                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}