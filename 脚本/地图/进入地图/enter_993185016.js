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
      cm.Hidden_background('sub', 1, 0, 0, 0);
      cm.npc_ChangeController(3004850, "oid=2710839", -662, -130, 18, -712, -612, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710839", "summon", 0, 0);
      cm.npc_ChangeController(3004854, "oid=2710840", -746, -130, 18, -796, -696, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710840", "summon", 0, 0);
      cm.npc_ChangeController(3004854, "oid=2710841", -690, -130, 18, -740, -640, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710841", "summon", 0, 0);
      cm.npc_ChangeController(3004854, "oid=2710842", -836, -130, 18, -886, -786, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710842", "summon", 0, 0);
      cm.npc_ChangeController(3004854, "oid=2710843", -595, -130, 18, -645, -545, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2710843", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2710840", 140, 1);
      cm.Npc_Fadeout("oid=2710841", 0, 1);
      cm.Npc_Fadeout("oid=2710842", 0, 1);
      cm.Npc_Fadeout("oid=2710843", 0, 1);
      cm.Npc_Fadeout("oid=2710840", 0, 1);
      cm.npc_SetSpecialAction("oid=2710839", 'special6', -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -671, -69);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(560);
        } else {
          if (status === V++) {
            cm.effect_Voice("SoundEff.img/sellas/lightOff", 100);
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.sendNormalTalk_Bottom("#face3#像这样尽可能减少电池消耗的话……", 36, 3004850, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#估计还能再坚持一两个小时。", 36, 3004850, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#不可能失败。#h0#，那家伙和我们不一样。", 36, 3004850, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#但逃生舱就两个。\r\n就算救出了沃莉，也没有我的位置……", 36, 3004850, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#最终……我也会变成星星吧……", 36, 3004850, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2400);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2710839"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                  cm.sendNormalTalk_Bottom("#face0#……麦。", 36, 3004861, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#休麦……！休麦……！能听见吗！", 36, 3004851, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1##fs18#沃莉？！", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#沃莉！你没事吧？！\r\n你别担心，乖乖等着！#h0#会马上过去！", 36, 3004850, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#我已经见到#h0#了！", 36, 3004851, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#什么？", 36, 3004850, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('休麦！！', 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我也被困住了……。", 56, 0, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('#face1#……？', 36, 3004850, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#什么……？", 36, 3004850, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#我们两个的氧气都没剩多少了。\r\n休麦，你必须马上救我们出去。", 36, 3004851, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#可、可是那家伙……", 36, 3004850, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#如果连#h0#你也陷入疲惫……我实在是……", 36, 3004850, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#休麦……。", 36, 3004851, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3##h0#把休麦说的话全都告诉我了。", 36, 3004851, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#休麦，我想我可能是个傻子。\r\n你说的什么星星，大海，我一个字都听不懂。", 36, 3004851, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#额，那个……那个现在不重要。重要的是现在……", 36, 3004850, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#是重要的事。因为……\r\n休麦至少搞错了一点。", 36, 3004851, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#这家伙……既不是大海，也不是鲸鱼。", 36, 3004851, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#这家伙才叫小呢。", 36, 3004851, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#什……什么？这话什么意思？", 36, 3004850, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#感觉是很熟悉的触感，软乎乎的……。", 36, 3004851, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#软乎乎……？", 36, 3004850, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.setAccountQuestInfo(252, "count=4809;T=20210402125136");
                                                                                            cm.sendNormalTalk_Bottom("#face1#软乎乎……", 36, 3004850, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#这么说……他也最终……", 36, 3004850, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face3#休麦，你现在改变想法了吗？", 36, 3004851, false, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#去救人几乎是不可能的。海里一片黑暗，那家伙速度又快。", 36, 3004850, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#但是，可以把它召唤出来。", 36, 3004850, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                              cm.npc_LeaveField("oid=2710839");
                                                                                                              cm.npc_LeaveField("oid=2710840");
                                                                                                              cm.npc_LeaveField("oid=2710841");
                                                                                                              cm.npc_LeaveField("oid=2710842");
                                                                                                              cm.npc_LeaveField("oid=2710843");
                                                                                                              cm.dispose();
                                                                                                              cm.warp(993185017, 0, true);
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