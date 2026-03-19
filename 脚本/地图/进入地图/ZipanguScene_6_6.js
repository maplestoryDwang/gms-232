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
      cm.forceCompleteQuest(58782);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111064, "oid=3986631", 105, 40, 17, 55, 155, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3986631", "summon", 0, 0);
      cm.npc_ChangeController(9111013, "oid=3986632", 480, 40, 20, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3986632", 'summon', 0, 0);
      cm.npc_ChangeController(9111014, "oid=3986633", 550, 80, 28, 500, 600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3986633", "summon", 0, 0);
      cm.npc_ChangeController(9111015, "oid=3986634", -420, 80, 23, -470, -370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3986634", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3##p9111001#！！", 37, 9111000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#不……不……。不要死……。", 37, 9111000, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9111072, "oid=3986796", 240, 85, 27, 190, 290, 1, false, 0, false);
              cm.npc_SetSpecialAction("oid=3986796", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#噢，求求你……\r\n你别死，竹野子，快醒过来吧", 37, 9111000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#快睁开眼睛看看我……竹野子！快醒醒！！！", 37, 9111000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#求求你……求求你快醒醒……睁开眼睛看看我……\r\n你怎么能一句话不说就丢下我……", 37, 9111000, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#大太法师，大太法师显显灵吧！请救救我妹妹……", 37, 9111000, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#求求你，拜托了……快显灵吧……大太法师！！！", 37, 9111000, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9111074, "oid=3987251", 405, 40, 20, 355, 455, 1, false, 0, false);
                              cm.npc_SetSpecialAction("oid=3987251", "summon", 0, 0);
                              cm.npc_ChangeController(9111073, "oid=3987252", -385, 80, 24, -435, -335, 1, false, 0, false);
                              cm.npc_SetSpecialAction("oid=3987252", 'summon', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……已经……太迟了吗……", 57, 0, false, true);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=3986632", 1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3986632"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#……都怪我太愚昧了……！", 37, 9111000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#是我上了妖怪的当……\r\n最后竟亲手害死了你……！", 37, 9111000, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#怎么办……你要怎么惩罚我这白痴姐姐啊……", 37, 9111000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#要是早知道会这么快与你生离死别……！", 37, 9111000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#早知道会这样的话，我该多疼爱你一些的……", 37, 9111000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#……姐姐是多么……\r\n多么珍爱你，你知道吗……？", 37, 9111000, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#对我来说，你是多么宝贵的存在……", 37, 9111000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(9111071, "oid=3987748", 600, 80, 29, 550, 650, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=3987748", 'summon', 0, 0);
                                                        cm.npc_ChangeController(9111072, "oid=3987749", -25, 40, 15, -75, 25, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=3987749", "summon", 0, 0);
                                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#好难过……感觉心里像被掏了个大洞……", 37, 9111000, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#……神啊……", 37, 9111000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#……生命之母啊，尊敬的大太法师啊……", 37, 9111000, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#……这是您给我的惩罚吗……？", 37, 9111000, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#您是怪我为了救妹妹不择手段反受奸人欺骗……\r\n为了惩罚我的愚昧才这样惩罚我吗……？", 37, 9111000, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#干脆……", 37, 9111000, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#干脆……把我的命拿去吧……", 37, 9111000, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(9111071, "oid=3988015", -225, 80, 24, -275, -175, 1, false, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=3988015", "summon", 0, 0);
                                                                              cm.npc_ChangeController(9111072, "oid=3988016", 450, 80, 28, 400, 500, 1, false, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=3988016", "summon", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#我妹妹为什么要死……\r\n因为流着半妖之血，她一辈子都没法自由地玩乐……\r\n为什么要夺走我可怜又善良的妹妹……？", 37, 9111000, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#为什么……", 37, 9111000, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(9111073, "oid=3988204", 225, 40, 27, 175, 275, 1, false, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=3988204", "summon", 0, 0);
                                                                                    cm.npc_ChangeController(9111071, "oid=3988205", 225, 40, 27, 175, 275, 1, false, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=3988205", 'summon', 0, 0);
                                                                                    cm.sendNormalTalk_Bottom('(五……五行……？)', 57, 0, true, true);
                                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#在这个没有竹野子的世界上……我已经没理由，也没有信心和勇气独自苟活……", 37, 9111000, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#竹野子……姐姐马上就去陪你……", 37, 9111000, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('木野子！', 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                            } else if (status === V++) {
                                                                                              cm.warp(800025006, 0, false);
                                                                                              cm.npc_LeaveField("oid=3987251");
                                                                                              cm.npc_LeaveField("oid=3987251");
                                                                                              cm.npc_LeaveField("oid=3987252");
                                                                                              cm.npc_LeaveField("oid=3987252");
                                                                                              cm.npc_LeaveField("oid=3987748");
                                                                                              cm.npc_LeaveField("oid=3987748");
                                                                                              cm.npc_LeaveField("oid=3987749");
                                                                                              cm.npc_LeaveField("oid=3987749");
                                                                                              cm.npc_LeaveField("oid=3988015");
                                                                                              cm.npc_LeaveField("oid=3988015");
                                                                                              cm.npc_LeaveField("oid=3988016");
                                                                                              cm.npc_LeaveField("oid=3988016");
                                                                                              cm.npc_LeaveField("oid=3988204");
                                                                                              cm.npc_LeaveField("oid=3988204");
                                                                                              cm.npc_LeaveField("oid=3988205");
                                                                                              cm.npc_LeaveField("oid=3988205");
                                                                                              cm.npc_LeaveField("oid=3986796");
                                                                                              cm.npc_LeaveField("oid=3986796");
                                                                                              cm.npc_LeaveField("oid=3986631");
                                                                                              cm.npc_LeaveField("oid=3986631");
                                                                                              cm.npc_LeaveField("oid=3986632");
                                                                                              cm.npc_LeaveField("oid=3986632");
                                                                                              cm.npc_LeaveField("oid=3986633");
                                                                                              cm.npc_LeaveField("oid=3986633");
                                                                                              cm.npc_LeaveField("oid=3986634");
                                                                                              cm.npc_LeaveField("oid=3986634");
                                                                                              cm.eventSKill(0);
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