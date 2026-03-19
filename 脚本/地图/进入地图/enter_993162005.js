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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3001952, "oid=6267700", 1700, 100, 9, 1650, 1750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6267700", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1475, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onSetMapTagedObjectVisible(1, "rope", 512);
        cm.Hidden_background("rope2", 1, 0, 0, 0);
        cm.onSetMapTagedObjectVisible(1, "piano", 512);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=6267700", -1, 200, 120);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#应该就在这附近……", 36, 3001952, false, true, 1);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=6267700", 1, 1, 120);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 1200, -33);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6267700", -1, 90, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#找到了，是这间屋子。", 37, 3001952, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=6267700", -1, 100, 120);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哈！", 37, 3001952, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1200, 130);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=6267700");
                                    cm.npc_ChangeController(3001952, "oid=6269595", 1200, 30, 4, 1150, 1250, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=6269595", "summon", 0, 0);
                                    cm.setNpcSpecialActionReset("oid=6269595");
                                    cm.npc_SetSpecialAction("oid=6269595", "special4", -1, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                          cm.setNpcSpecialActionReset("oid=6269595");
                                          cm.npc_SetSpecialAction("oid=6269595", "special2", 2500, 0);
                                          cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 2500, 2500, 1200, -10);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#尽管遇上了一点麻烦，总算是充实的一天。", 37, 3001952, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 300, 3000, 1);
                                                cm.setNpcSpecialActionReset("oid=6269595");
                                                cm.npc_SetSpecialAction("oid=6269595", "special3", -1, 0);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 1200, -10);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                                    cm.sendNormalTalk_Bottom("#face7#而且还见到了传说中的骑士，嘻嘻……\r\n看来我实现夙愿的日子指日可待！", 36, 3001952, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/rock2", 100);
                                                        cm.userSetFieldFloating(993162005, 5, 5, 5);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(993162005, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                            cm.sendNormalTalk_Bottom("#face6#哦，哦哦！", 37, 3001952, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(居然会犯那样的失误，真是个笨蛋。\r\n要不要帮他一回？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 1040, -120);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npcMove(3001952, 20, 90, 0);
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/rope", 100);
                                                                    cm.onSetMapTagedObjectVisible(1, "rope", 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.Hidden_background("rope", 1, 0, 0, 0);
                                                                      cm.Hidden_background("rope2", 1, 1, 0, 0);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/rope", 100);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1250, 90);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face10#呼哧，呼哧……差点儿没掉下去。\r\n还以为这下要死翘翘了。", 36, 3001952, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#幸好刚巧抓住这个！\r\n真走运！", 36, 3001952, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 690, 159);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/lock", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年以熟练的手法撬开窗户，爬了进去。\r\n紧接着响起了一阵沙沙作响的声音。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我还说他在干什么，原来是在偷别人家的东西。\r\n看来那家伙就是个普普通通的小贼……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#(之前他似乎认识我，八成也是装的。\r\n等把要问的话问完，就别再和他打交道了。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
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
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1250, 90);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=6269595");
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
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1250, 90);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_ChangeController(3001952, "oid=6273555", 1215, 100, 8, 1165, 1265, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=6273555", 'summon', 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#嘻嘻，这次行动也很成功呢。\r\n愿里斯托尼亚王国永葆和平……", 36, 3001952, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你果真是个小毛贼。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=6273555", -1);
                                                                                                                    cm.sendNormalTalk_Bottom("#face6#！？", 36, 3001952, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1050, 90);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.forceCompleteQuest(39602);
                                                                                                                            cm.gainExp(656);
                                                                                                                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h1;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                                                                                                                  cm.warp(410000320, 0, false);
                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  cm.npc_LeaveField("oid=6273555");
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
  }
}