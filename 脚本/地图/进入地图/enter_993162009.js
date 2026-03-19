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
      cm.npc_ChangeController(3001957, "oid=6363807", -500, -200, 3, -550, -450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6363807", "summon", 0, 0);
      cm.npc_ChangeController(3001959, "oid=6363808", 200, -200, 1, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6363808", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 28, -370);
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
            cm.npc_SetForceMove("oid=6363808", -1, 200, 100);
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 28, -167);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#您这肉麻的戏，到底要演到什么时候？\r\n我应该早就和您说过，还有很多工作需要处理哦。", 37, 3001959, false, true, 1);
              cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -344, -167);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=6363808", -1, 280, 120);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#那些琐碎小事，不值得我浪费时间。\r\n你自己看着办吧。", 37, 3001957, false, true, 1);
                      cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是，那些琐碎小事，我熬了通宵才好不容易处理完了。\r\n但这次的事情，需要您亲自确认……", 36, 3001959, false, true, 1);
                          cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#嘁。", 36, 3001957, true, true, 1);
                            cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#请您在这文件上签字……", 36, 3001959, true, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#唉……好烦。", 36, 3001957, true, true, 1);
                                cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#对了，您要找的那些画，已经打听到了三幅…………\r\n其余的还不知下落，估计还要花些时日。", 36, 3001959, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#既然如此，也没办法。但是，一定要全部给我找到。", 36, 3001957, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不管用什么办法，明白吗，西蒙？", 36, 3001957, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#是，塞德里克大人。", 36, 3001959, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=6363807", 1);
                                            cm.sendNormalTalk_Bottom("#face0#你果然是个能干的管家。", 36, 3001957, true, true, 1);
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
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -20, -167);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(3001968, "oid=6368484", 20, -200, 1, -30, 70, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=6368484", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001968, "oid=6368485", -60, -200, 2, -110, -10, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=6368485", 'summon', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=6368484", -1, 180, 120);
                                                          cm.npc_SetForceMove("oid=6368485", -1, 180, 120);
                                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -344, -167);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#什么事？", 37, 3001957, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#小人有急事禀报……", 36, 3001968, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#听说广场上出现了一个可疑人物。\r\n是在我们的人追小偷的时候，不知从哪突然冒出来的……", 36, 3001968, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/7/0", 0, 1000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                      cm.sendNormalTalk_Bottom("#face0#据说那人一出手，就撂倒了好几个警卫兵，\r\n当时仿佛有剑在空中舞动……", 36, 3001968, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#总之，实力不是一般的高强！", 36, 3001968, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#舞动的剑……", 36, 3001957, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/present/7/1", 0, 1000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face0#还有就是，那人穿着骑士制服……\r\n看上去不像是王国的人。", 36, 3001968, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#此外，恕小人冒昧，\r\n听说此人舞剑的身姿……", 36, 3001968, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#有如行云流水，精彩得让人目不暇接。", 36, 3001968, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#那人现在在哪里？", 36, 3001957, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#额，那、那个……请大、大人恕罪。\r\n本来差点儿就抓到了，结果还是被他们溜掉了。", 36, 3001968, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#啧……知道了，你回去吧。", 36, 3001957, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=6368484", 1, 380, 120);
                                                                                          cm.npc_SetForceMove("oid=6368485", 1, 380, 120);
                                                                                          cm.sendNormalTalk_Bottom("#face0#某天突然出现的剑术达人。\r\n这不正是我梦中心心念念的传说中的骑士吗！", 36, 3001957, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#西蒙，你顺便把那名骑士的事情也调查下。\r\n一有什么消息，马上和我报告。", 36, 3001957, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#好，小人明白。", 36, 3001959, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#哼哼……终于找到了，配得上我塞德里克的骑士。\r\n等着哈，我一定要让你成为我的守护骑士！", 36, 3001957, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#啊，我亲爱的骑士！你为何到现在才出现！？\r\n过去那无数岁月的漫长等待，都是你对我的考验吗？", 36, 3001957, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#唉……又开始了。我要快点辞职才行。", 36, 3001959, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
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
                                                                                                                  cm.warp(993162010, 0, false);
                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                  cm.npc_LeaveField("oid=6363807");
                                                                                                                  cm.npc_LeaveField("oid=6363808");
                                                                                                                  cm.npc_LeaveField("oid=6368484");
                                                                                                                  cm.npc_LeaveField("oid=6368485");
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