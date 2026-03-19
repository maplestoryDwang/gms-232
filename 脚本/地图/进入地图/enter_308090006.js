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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.playVideoByScript("demensionLibrary.avi");
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -603, -397);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -670, -91);
          cm.npc_ChangeController(2570101, "oid=37948670", -510, -10, 3, -560, -460, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948670", "summon", 0, 0);
          cm.npc_ChangeController(2570102, "oid=37948671", -628, 56, 8, -678, -578, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948671", "summon", 0, 0);
          cm.npc_ChangeController(2570103, "oid=37948672", -541, 0, 7, -591, -491, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948672", 'summon', 0, 0);
          cm.npc_ChangeController(2570104, "oid=37948673", -687, 88, 15, -737, -637, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948673", "summon", 0, 0);
          cm.npc_ChangeController(2570105, "oid=37948674", -741, 14, 2, -791, -691, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948674", 'summon', 0, 0);
          cm.npc_ChangeController(2570130, "oid=37948675", -115, 56, 11, -165, -65, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948675", "summon", 0, 0);
          cm.npc_ChangeController(2570130, "oid=37948676", -6, 53, 12, -56, 44, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=37948676", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#这里是……？", 36, 2570101, false, true, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1500, 7000, -603, 35);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(8000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#这是……怎么回事？空间移动？", 36, 2570103, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#不，伤口……伤口都痊愈了。", 36, 2570101, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#哦？真的耶，受伤的手臂……", 36, 2570103, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……好神奇。我刚才不是死了吗？", 36, 2570105, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=37948670", -1);
                          cm.npc_setForceFlip("oid=37948671", -1);
                          cm.npc_setForceFlip("oid=37948672", -1);
                          cm.npc_setForceFlip("oid=37948673", -1);
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37948670"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37948671"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37948672"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#你？！你怎么……！！", 36, 2570102, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#鬼？？！！！", 36, 2570103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#你胡说八道些什么。\r\n刚刚还在跟恶魔交战的家伙，怎么突然怕鬼了？", 36, 2570105, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#快逃！大家快逃！！", 36, 2570130, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=37948675", -1, 270, 140);
                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -530, 35);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=37948670", 1);
                                      cm.npc_setForceFlip("oid=37948671", 0);
                                      cm.npc_setForceFlip("oid=37948672", 1);
                                      cm.npc_setForceFlip("oid=37948673", 0);
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#大家快逃……", 36, 2570130, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你们是……田鼠骑士团？", 36, 2570130, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#又是田鼠……", 36, 2570103, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#喂，这事轮不到你们这些阿猫阿狗插手。\r\n想活命的话，就赶紧逃吧。", 36, 2570130, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face5#什么？', 36, 2570103, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=37948675", -1, 560, 130);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Npc_Fadeout("oid=37948675", 0, 800);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=37948672", -1);
                                                      cm.sendNormalTalk_Bottom("#face5#喂！\r\n事情到底进行得怎么样了？", 36, 2570103, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=37948676", -1, 410, 130);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=37948672", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#国王召唤出了#r恶魔#k。", 36, 2570130, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#等等，这话刚才也……", 36, 2570105, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#国王已经死了。王子可能也在城中的某处遭遇了不测。", 36, 2570130, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#你明白吗？圣瑞尼亚已经完蛋了。要灭亡了。", 36, 2570130, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=37948676", -1, 500, 130);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.Npc_Fadeout("oid=37948676", 0, 1500);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570101, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#和刚才说的话完全一模一样。", 36, 2570101, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这也许……", 36, 2570103, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#我们将时间……", 36, 2570102, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
                                                                                  cm.sendNormalTalk_Bottom("……时间逆转了吗？", 56, 0, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face3#呼，幸好。\r\n我这是第一次经历死亡呢，哈哈。", 36, 2570105, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=37948670", -1);
                                                                                          cm.npc_setForceFlip("oid=37948671", -1);
                                                                                          cm.npc_setForceFlip("oid=37948672", -1);
                                                                                          cm.npc_setForceFlip("oid=37948673", -1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#……。", 36, 2570102, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#你这叫什么话？干脆重新去死吧！", 36, 2570102, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#喂，还不是为了救你才死的……", 36, 2570105, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#住口！！", 36, 2570102, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.effect_Voice("SoundEff.img/blackHeaven/slap1", 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face4#咳……。", 36, 2570105, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.forceCompleteQuest(37805);
                                                                                                            cm.updateInfoQuest(37805, 'exp=1');
                                                                                                            cm.gainExp(5872020);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.npc_LeaveField("oid=37948670");
                                                                                                            cm.npc_LeaveField("oid=37948671");
                                                                                                            cm.npc_LeaveField("oid=37948672");
                                                                                                            cm.npc_LeaveField("oid=37948673");
                                                                                                            cm.npc_LeaveField("oid=37948674");
                                                                                                            cm.npc_LeaveField("oid=37948675");
                                                                                                            cm.npc_LeaveField("oid=37948676");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(308000006, 0, false);
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