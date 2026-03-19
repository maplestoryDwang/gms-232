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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 140, 165);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003500, "oid=2000831", 200, 100, 22, 150, 250, 1, true, false);
        cm.npc_SetSpecialAction("oid=2000831", 'summon', 0, 0);
        cm.npc_ChangeController(3003516, "oid=2000832", 200, -400, 4, 150, 250, 1, false, false);
        cm.npc_SetSpecialAction("oid=2000832", "summon", 0, 0);
        cm.npc_ChangeController(3003517, "oid=2000833", 440, -400, 5, 390, 490, 1, false, false);
        cm.npc_SetSpecialAction("oid=2000833", 'summon', 0, 0);
        cm.npc_ChangeController(3003518, "oid=2000834", 580, -560, 11, 530, 630, 1, false, false);
        cm.npc_SetSpecialAction("oid=2000834", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2000832", "special2", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#我来试试看。", 37, 3003500, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##fs14#其实我小时候的梦想是成为一名魔法少女#fs14#。", 37, 3003500, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("以爱和正义之名～", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003500, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon('呀！', 0, 0, 0, 2000, 1, 0, 0, 0, 4, 3003500, cm.getPlayer().getId());
                          cm.npc_SetSpecialAction("oid=2000831", "special3", 1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/wand2", 200);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 300, -360);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm49.img/MirrorCage", 0, 0);
                                  cm.sendNormalTalk_Bottom("#face5#不……这……", 37, 3003508, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#看来你恢复记忆了。呵呵呵……但是已经太迟了。", 37, 3003503, true, true);
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
                                            cm.sendNormalTalk_Bottom("那是？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#是#fs18##r军团长威尔#k#fs16#。", 37, 3003500, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#你不知道是当然的。\r\n因为他从未在冒险岛世界中露过面。", 37, 3003500, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#在记录着世间万物的图书馆中，曾经发现过他的痕迹。", 37, 3003500, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#虽然没人知道他在干什么，以及拥有什么能力……", 37, 3003500, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#现在终于现身，一定是觉得有了相当的把握。", 37, 3003500, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#好了～塔纳……乖乖地成为#b太阳#k吧。为了新世界……", 37, 3003503, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#嗯？！！", 37, 3003503, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/portal_attack", 200);
                                                                cm.npc_SetSpecialAction("oid=2000834", "special", 1, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2000832", "special", 1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/will_teleport", 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=2000833", "special", 1, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#呃，有人捣乱……", 37, 3003503, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#可恶……好像很难回收了。", 37, 3003503, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#失去了太阳……这可不在计划之内……", 37, 3003503, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 140, 165);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2000832");
                                                                                    cm.npc_LeaveField("oid=2000833");
                                                                                    cm.npc_LeaveField("oid=2000834");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('失去了太阳……？', 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.setNpcSpecialActionReset("oid=2000831");
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#看来好像受到了什么人的攻击。\r\n仪式失败了，塔纳好像落到了海里的某个地方。", 37, 3003500, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("原来梅尔朗所说的太阳是塔纳。\r\n嗯……太阳……到底是指什么呢？", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#不要随便打听别人的私生活。", 37, 3003503, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, 260, 165);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_ChangeController(3003519, "oid=2000842", 400, 100, 22, 350, 450, 1, false, 1000, false);
                                                                                                    cm.npc_SetSpecialAction("oid=2000842", 'summon', 0, 0);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2000831"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                    cm.npc_setForceFlip("oid=2000831", 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#快退下，#h0#！！！", 37, 3003500, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetSpecialAction("oid=2000831", "special4", 1, 1);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/defence", 200);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("沃莉？！", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#嗯……？", 37, 3003503, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=2000831", "special", 1, 1);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/sword", 200);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#军、军团长威尔！如果你再不后退，我就攻击了！", 37, 3003500, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#呵呵，我只是想打个招呼，别太激动。", 37, 3003503, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("有什么话，就快说。趁我还有耐心。", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那位伟大的人说。\r\n#r#fs18#「终极之光只有在终极黑暗中才能找到。」", 37, 3003503, false, true);
                                                                                                                          cm.effect_Voice("Voice4.img/Will/a_2-1.mp3", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("终极黑暗？", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#等你明白我的意思的时候，就能见到我。", 37, 3003503, true, true);
                                                                                                                              cm.effect_Voice("Voice4.img/Will/a_3-2.mp3", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我等着你。", 37, 3003503, false, true);
                                                                                                                                  cm.effect_Voice("Voice4.img/Will/a_5-1.mp3", 128);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#虽然我喜欢等待，但这次的等待尤其让我兴奋。", 37, 3003503, true, true);
                                                                                                                                    cm.effect_Voice("Voice4.img/Will/a_4-1.mp3", 128);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetSpecialAction("oid=2000842", "special", 1, 1);
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/will_teleport", 200);
                                                                                                                                        cm.Npc_Fadeout("oid=2000842", 0, 1000);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=2000842");
                                                                                                                                          cm.sendNormalTalk_Bottom("等……！", 57, 0, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_OneTimeAction(2, 0);
                                                                                                                                              cm.sendNormalTalk_Bottom("消失了……", 57, 0, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.setNpcSpecialActionReset("oid=2000831");
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 140, 165);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("终极黑暗……沃莉知道吗？", 57, 0, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom('沃莉？', 57, 0, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#（#h0#，难道你一直在跟那种人对抗吗……）", 37, 3003500, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#没想到小姑娘会为你挡下来……计划又出错了。", 37, 3003503, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#虽然结果不会有太大的改变……", 37, 3003503, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#那个姑娘……让人有一种不快的感觉。", 37, 3003503, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.forceCompleteQuest(34568);
                                                                                                                                                                          cm.npc_LeaveField("oid=2000831");
                                                                                                                                                                          cm.dispose();
                                                                                                                                                                          cm.warp(450007050, 0);
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
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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