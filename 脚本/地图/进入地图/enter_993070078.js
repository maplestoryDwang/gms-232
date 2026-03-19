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
      cm.onSetMapObjectMove("attack", [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183868", -1650, -50, 4, -1700, -1600, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183868", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183869", -1300, -50, 4, -1350, -1250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183869", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183870", -950, -50, 1, -1000, -900, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183870", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183871", 950, -50, 3, 900, 1000, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183871", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183872", 1300, -50, 3, 1250, 1350, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183872", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=2183873", 1650, -50, 3, 1600, 1700, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183873", 'summon', 0, 0);
      cm.npc_ChangeController(3003676, "oid=2183874", -530, -50, 1, -580, -480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2183874", "summon", 0, 0);
      cm.npc_ChangeController(3003677, "oid=2183875", -630, -50, 1, -680, -580, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2183875", 'summon', 0, 0);
      cm.npc_ChangeController(3003675, "oid=2183876", -700, -50, 1, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2183876", "summon", 0, 0);
      cm.npc_ChangeController(3003672, "oid=2183877", -460, -50, 1, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2183877", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183878", -300, -50, 1, -350, -250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183878", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183879", -230, -50, 1, -280, -180, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183879", 'summon', 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183880", -160, -50, 1, -210, -110, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183880", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183881", 160, -50, 2, 110, 210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183881", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183882", 230, -50, 2, 180, 280, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183882", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2183883", 300, -50, 2, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2183883", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 500, 0, 0, -600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#此刻，反抗者1号舰。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#准备好了！！", 37, 3003759, false, true);
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
                  cm.sendNormalTalk_Bottom("#face0#发射！！", 37, 3003672, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#发射！！！", 37, 3003759, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2183868", 'special', 1, 1);
                        cm.npc_SetSpecialAction("oid=2183869", 'special', 1, 1);
                        cm.npc_SetSpecialAction("oid=2183870", 'special', 1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2183871", "special", 1, 1);
                          cm.npc_SetSpecialAction("oid=2183872", "special", 1, 1);
                          cm.npc_SetSpecialAction("oid=2183873", 'special', 1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -534, -120);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.userSetFieldFloating(993070078, 3, 3, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.monadForceMove("giantHit1", 1, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#报告！！", 37, 3003759, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#正中巨人心脏！！\r\n外表约70%消失！", 37, 3003759, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#作战成功！！\r\n虽然只有一小会，但能制止巨人继续行动！！", 37, 3003675, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#调转船头，迅速撤离！他们一定等得着急了！", 37, 3003677, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#全速掉转船头！尽快驶离巨人！", 37, 3003672, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.onSetMapObjectMove("attackAll", [1, 100, 0]);
                                              cm.onSetMapObjectMove("attackAll", '1', [2, 0]);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_attack", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#等等！！这是！！", 37, 3003676, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#大家趴下！！", 37, 3003675, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.userSetFieldFloating(993070078, 50, 50, 3);
                                                        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM3_giant2/skeleton", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呃啊啊！！", 37, 3003677, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(993070078, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -23, 17);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(993070078, 3, 3, 30);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#士兵们被卷走了！！", 37, 3003677, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#哦……？一点儿没事啊……", 37, 3003759, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183878"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183878"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183879"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183879"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183880"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183880"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183881"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183881"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183882"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183882"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/9", "oid=2183883"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/8", "oid=2183883"], [0, 0, 0, 1, -500, 1, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.Npc_Fadeout("oid=2183878", 0, 500);
                                                                                                    cm.Npc_Fadeout("oid=2183879", 0, 500);
                                                                                                    cm.Npc_Fadeout("oid=2183880", 0, 500);
                                                                                                    cm.Npc_Fadeout("oid=2183881", 0, 500);
                                                                                                    cm.Npc_Fadeout("oid=2183882", 0, 500);
                                                                                                    cm.Npc_Fadeout("oid=2183883", 0, 500);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=2183878");
                                                                                                      cm.npc_LeaveField("oid=2183878");
                                                                                                      cm.npc_LeaveField("oid=2183879");
                                                                                                      cm.npc_LeaveField("oid=2183879");
                                                                                                      cm.npc_LeaveField("oid=2183880");
                                                                                                      cm.npc_LeaveField("oid=2183880");
                                                                                                      cm.npc_LeaveField("oid=2183881");
                                                                                                      cm.npc_LeaveField("oid=2183881");
                                                                                                      cm.npc_LeaveField("oid=2183882");
                                                                                                      cm.npc_LeaveField("oid=2183882");
                                                                                                      cm.npc_LeaveField("oid=2183883");
                                                                                                      cm.npc_LeaveField("oid=2183883");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#啊！！！", 37, 3003672, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#好像变成了艾尔达……分崩离析了。", 37, 3003675, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#……", 37, 3003672, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#吉格蒙特！吉格蒙特！！", 37, 3003676, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#快醒醒！！", 37, 3003677, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#准备好……船……", 37, 3003672, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom('#face1#什么？', 37, 3003677, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我得去见见希纳斯。", 37, 3003672, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.forceCompleteQuest(35810);
                                                                                                                            cm.gainExp(360899508);
                                                                                                                            cm.npc_LeaveField("oid=2183868");
                                                                                                                            cm.npc_LeaveField("oid=2183868");
                                                                                                                            cm.npc_LeaveField("oid=2183869");
                                                                                                                            cm.npc_LeaveField("oid=2183869");
                                                                                                                            cm.npc_LeaveField("oid=2183870");
                                                                                                                            cm.npc_LeaveField("oid=2183870");
                                                                                                                            cm.npc_LeaveField("oid=2183871");
                                                                                                                            cm.npc_LeaveField("oid=2183871");
                                                                                                                            cm.npc_LeaveField("oid=2183872");
                                                                                                                            cm.npc_LeaveField("oid=2183873");
                                                                                                                            cm.npc_LeaveField("oid=2183874");
                                                                                                                            cm.npc_LeaveField("oid=2183874");
                                                                                                                            cm.npc_LeaveField("oid=2183875");
                                                                                                                            cm.npc_LeaveField("oid=2183875");
                                                                                                                            cm.npc_LeaveField("oid=2183876");
                                                                                                                            cm.npc_LeaveField("oid=2183876");
                                                                                                                            cm.npc_LeaveField("oid=2183877");
                                                                                                                            cm.npc_LeaveField("oid=2183877");
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(450012300, 0, false);
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
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}