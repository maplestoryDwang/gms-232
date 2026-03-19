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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -50, -4040);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3002110, "oid=37928057", 85, -3770, 38, 35, 135, 1, true, false);
          cm.npc_SetSpecialAction("oid=37928057", 'summon', 0, 0);
          cm.npc_SetSpecialAction("oid=37928057", 'rope', -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2500, 1000, 2500, -50, -4150);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_MoveAction(3);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呼，终于摆脱了。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.npcMove(3002110, 0, -150, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face8#一，一起走……嘿嘿……", 37, 3002110, false, true);
                      } else {
                        if (status === V++) {
                          cm.npcMove(3002110, 0, -180, 1500);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=37928057");
                            cm.npc_SetSpecialAction("oid=37928057", "rope_Stop", -1, 1);
                            cm.sendNormalTalk_Bottom("#face8#跑得那么慢……爬树倒是把好手……嘿嘿……", 37, 3002110, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("没事吧？你看上去好像很累的样子。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face8#呃……只是快没力气了……", 37, 3002110, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npcMove(3002110, 0, -30, 500);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face9#呃啊！', 37, 3002110, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npcMove(3002110, 0, 360, 500);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(940204108, 3, 3, 5);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.userSetFieldFloating(940204108, 0, 0, 0);
                                          cm.sendNormalTalk_Bottom("玛鲁！", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.setNpcSpecialActionReset("oid=37928057");
                                                  cm.npc_SetSpecialAction("oid=37928057", "drop", -1, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 100, -3700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('#face2#啊呀！', 37, 3002110, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(7);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(8);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                              cm.sendNormalTalk_Bottom("你……你的腿……受伤了吗……？", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#！！！", 37, 3002110, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face4#这个样子……没办法……再往上爬了吗……", 37, 3002110, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#到底是怎么回事……明明有狐神……在保佑着我……", 37, 3002110, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#这个状态……不行了……这次作战……又失败了……", 37, 3002110, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#但是……", 37, 3002110, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/foxvalley/band/0", 0, 500, 0, -80, 12, 4, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#虽然大人们总喜欢唠叨……但每次摔伤的时候，他们都会精心照料我。", 37, 3002110, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face11#不能就这样放弃……", 37, 3002110, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face11#大家……", 37, 3002110, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face14##b我必须……保护大家！#k", 37, 3002110, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField("oid=37928057");
                                                                                        cm.npc_LeaveField("oid=37928057");
                                                                                        cm.dispose();
                                                                                        cm.warp(410000103, 2);
                                                                                        cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h1;19=B;29=h0");
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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