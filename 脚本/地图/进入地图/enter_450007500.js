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
      cm.npc_ChangeController(3003515, "oid=49869", -353, 248, 1, -403, -303, 1, true, false);
      cm.npc_ChangeController(3003515, "oid=49870", -123, 248, 1, -173, -73, 1, true, false);
      cm.npc_ChangeController(3003504, "oid=49871", 339, 248, 1, 289, 389, 1, false, false);
      cm.npc_ChangeController(3003504, "oid=49872", 234, 248, 1, 184, 284, 1, false, false);
      cm.npc_ChangeController(3003504, "oid=49873", 446, 248, 1, 396, 496, 1, false, false);
      cm.npc_ChangeController(3003515, 'oid=49874', -241, 248, 1, -291, -191, 1, true, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -400, 228);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003508, "oid=2006639", -520, 200, 1, -570, -470, 0, true, false);
        cm.npc_SetSpecialAction("oid=2006639", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face5#艾欧娜！！！还不快出来！！", 37, 3003508, false, true);
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
                cm.sendNormalTalk_Bottom("#face0#站住。你不能过去。", 45, 3003515, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我不会说第二遍。", 37, 3003508, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#你真的想消失吗？", 37, 3003508, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#住手，塔纳。", 45, 3003509, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 54, 112);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#都给我退下。只是小孩子在闹脾气，用不着反应过度，不是吗？", 45, 3003509, false, true);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 48, 112);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#闹脾气？！你消灭了七个种族，还说我是闹脾气？！！", 37, 3003508, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2006639", 1, 400, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#没办法。那是我的工作。", 45, 3003509, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 21, 220);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2006639", 'special', -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face7#你真的是疯了，艾欧娜。", 37, 3003508, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你想跟我打架吗？在没有力量的时候，你也从没赢过我。", 45, 3003509, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face8#你没有资格拥有那种力量。", 37, 3003508, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#记忆就到这里了。", 37, 3003501, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("她们俩决裂了。但是灭亡了七个种族……", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#格兰蒂斯的超越者一直在积极地介入世界。", 37, 3003501, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#艾欧娜好像不太喜欢留下痕迹。\r\n因此之前人们对她的行踪完全一无所知。", 37, 3003501, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#但是……她的话有点奇怪。", 37, 3003501, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#她说……#fs18##r没办法#k#fs16#。\r\n听上去好像她不是自愿的一样。", 37, 3003501, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("嗯？！", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else if (status === V++) {
                                                                                    cm.forceCompleteQuest(34582);
                                                                                    cm.dispose();
                                                                                    cm.warp(450007210, 0);
                                                                                    cm.setStandAloneMode(false);
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
                        }
                      }
                    }
                  }
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