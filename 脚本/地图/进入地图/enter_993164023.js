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
      cm.npc_ChangeController(3004985, "oid=363566", 638, 63, 3, 588, 638, 1, false, 0, false);
      cm.npc_ChangeController(3004985, "oid=363567", 528, 63, 3, 478, 578, 1, false, 0, false);
      cm.npc_ChangeController(3004985, "oid=363568", 350, 63, 3, 300, 400, 0, false, 0, false);
      cm.npc_ChangeController(3004984, 'oid=363569', 186, 63, 1, 136, 236, 0, false, 0, false);
      cm.npc_ChangeController(3004985, "oid=363570", 268, 63, 3, 232, 318, 0, false, 0, false);
      cm.npc_ChangeController(3004907, "oid=363571", 1022, 63, 4, 972, 1069, 1, false, 0, false);
      cm.npc_ChangeController(3004912, "oid=363572", 1099, 63, 5, 1099, 1149, 1, false, 0, false);
      cm.npc_ChangeController(3004913, "oid=363573", 1162, 63, 5, 1112, 1212, 1, false, 0, false);
      cm.Hidden_background("kain_lighton", 1, 0, 0, 0);
      cm.Hidden_background("kain_lightoff", 1, 1, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004904, "oid=567552", 1138, -78, 23, 1088, 1188, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=567552', "summon", 0, 0);
        cm.npc_ChangeController(3004910, "oid=567553", 900, -20, 11, 850, 950, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567553", "summon", 0, 0);
        cm.npc_ChangeController(3004907, "oid=567554", 1022, 54, 4, 972, 1072, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=567554', "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=567552", "sit", -1, 1);
        cm.npc_SetSpecialAction("oid=567554", "call", -1, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 500, 5);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1500, 7000, 1063, 5);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(9000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#是，目前爆发了骚乱，老大目前在据点上层孤立无援。", 36, 3004907, false, true, 1);
                cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#看起来很难稳住事态。", 36, 3004907, true, true, 1);
                  cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#把终端机给我。", 36, 3004904, false, true, 1);
                      cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=567554");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我说，情况都听清楚了吧。", 36, 3004904, false, true, 1);
                            cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#一大半德拉卡兹都已经倒戈，\r\n现在拿下整栋楼不过是时间问题。", 36, 3004904, true, true, 1);
                              cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#要求条件很简单，以后这个组织归我们掌管。", 36, 3004904, false, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=567553"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                    cm.sendNormalTalk_Bottom("#face0#（什么……？！！）", 36, 3004910, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#该隐？现在没有，\r\n想要找到倒是不难，不过为什么需要这个家伙？", 36, 3004904, false, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#喂？我说，你在听吗？", 36, 3004904, true, true, 1);
                                          cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/phone", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cut", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -308, -306);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#（该隐和……老大的命都有赏金。）", 36, 3004910, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#交涉成功了啊。", 36, 3004904, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.npc_ChangeController(3004911, "oid=567594", 848, 54, 4, 798, 898, 0, true, 0, false);
                                                          cm.npc_SetSpecialAction("oid=567594", 'summon', 0, 0);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1063, 5);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#提拉格，上面差不多要开始顶不住了。", 36, 3004911, false, true, 1);
                                                                cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setNpcSpecialActionReset("oid=567552");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#走吧，必须做个了断了。", 36, 3004904, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/11", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我不参与。", 36, 3004910, false, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/12", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#什么？", 36, 3004904, true, true, 1);
                                                                            cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/13", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#现在就快差不多了，这是什么意思？", 36, 3004911, true, true, 1);
                                                                              cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#由我们来经营组织？比亚斯，你也知道吗？", 36, 3004910, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('#face0#……', 36, 3004911, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#哈，这是彻底失心疯了啊，\r\n这是还要重复这种破事儿的意思嘛？而且还是打头阵！", 36, 3004910, true, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#我不会阻止你离开的，伊林。不过……\r\n这个项圈恐怕一辈子都拿不下来了。", 36, 3004904, false, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3004910, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.Npc_Fadeout("oid=567553", 0, 1000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 36, 3004911, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#干嘛呢？带路吧，比亚斯。", 36, 3004904, true, true, 1);
                                                                                                  cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/20", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我吗？可、可是一直以来……", 36, 3004911, true, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/21', 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#要想当老大，也要让其他队员好好见证一下自己的实力才对，\r\n难道不是吗，下一任老大？", 36, 3004904, true, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/kain/22/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/22", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=567552");
                                                                                                          cm.npc_LeaveField("oid=567553");
                                                                                                          cm.npc_LeaveField("oid=567554");
                                                                                                          cm.npc_LeaveField("oid=567594");
                                                                                                          cm.dispose();
                                                                                                          cm.warp(993164024, 1, true);
                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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