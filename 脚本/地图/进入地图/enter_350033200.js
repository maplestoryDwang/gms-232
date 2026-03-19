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
      cm.npc_ChangeController(1540637, "oid=22515090", 0, -150, 3, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22515090", 'summon', 0, 0);
      cm.npc_ChangeController(1540450, "oid=22515091", 70, -100, 1, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22515091", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22515092", -30, -80, 1, -80, 20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22515092", "summon", 0, 0);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3, -50);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("主动力减少了大约20%，但不会对航行能力造成什么影响。", 37, 1540451, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这样只要再过一小时，我们就能先甩开黑色天堂了。", 37, 1540451, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=22515092", -1);
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.npc_ChangeController(1540452, "oid=22515479", -430, 2, 27, -480, -380, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=22515479", 'summon', 0, 0);
                  cm.npc_SetForceMove("oid=22515479", 1, 200, 100);
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -120, -3);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("必须……必须调转船头。", 45, 1540452, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我们现在不能回到敌人的射程圈。", 37, 1540451, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom(" 我们必须去找失踪的队员。他们现在肯定在等待救援。", 45, 1540452, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("吉格蒙特……我知道你不肯相信这一切，但……从那么高的地方坠落是不可能生还的……听说你亲眼看到他们坠落了。", 37, 1540451, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('……。', 45, 1540452, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("但是，如果他们还活着……如果他们正等待救援……", 45, 1540452, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我们不能因为这个可能性，而让更多人牺牲。", 37, 1540451, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("更多的牺牲……嗯，不可能发生那样的事情。", 45, 1540452, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#吉格蒙特……？", 37, 1540450, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你们当然不会为我们反抗者做出任何牺牲了。牺牲永远只有我们反抗者的份。", 45, 1540452, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#南哈特所说的并不是那个意思……", 37, 1540450, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#不是那个意思？那这次的作战算什么？最终牺牲的是我们的队员啊！", 45, 1540452, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom(" 那是……我们没有想到敌人会提前得知我们的攻击。", 37, 1540451, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("没错，我把这个给忘了。", 45, 1540452, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#h0#！是你把弗朗西斯给放出来的吧？我们的作战计划因此才会走漏。", 45, 1540452, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我们现在还不能妄下断言。还有，如果当时对弗朗西斯置之不理的话……", 37, 1540450, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#如果那样的话，我们的队员也不会牺牲了。而且，说不定已经占据了黑色天堂！", 45, 1540452, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#希纳斯！这一切都是你那没用的人性造就的。你还不知道吗？", 45, 1540452, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("你竟敢冒犯女皇！", 37, 1540451, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1##fs25##r我们不是你的部下！！", 45, 1540452, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1##fs20#联盟是在平等的基础上组成的，我们为了达到各自的目的而互相帮助！", 45, 1540452, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1##fs20#我们来这里并不是为了成为你们作战的试验品！", 45, 1540452, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#请冷静点，吉格蒙特。", 37, 1540450, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1##fs25#别说了！", 45, 1540452, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("没错。这件事不能归咎于希纳斯，南哈特和骑士团。", 45, 1540452, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那是黑色之翼所期望的。", 45, 1540452, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("不过，这件事不能就这么算了。#h0#！我要正式向你追究作战失败的责任。", 45, 1540452, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这个……", 37, 1540450, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("如若不然，我真没脸见那些牺牲的队员……", 45, 1540452, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else if (status === V++) {
                                                                                        cm.dispose();
                                                                                        cm.warp(350033201, 0, true);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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