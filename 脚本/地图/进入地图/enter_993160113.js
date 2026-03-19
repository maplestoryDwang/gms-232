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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;23=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
      cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;23=h0;32=h0;05=h0;24=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
      cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;23=h0;32=h0;05=h0;24=h0;06=h0;15=h0;33=h0;25=h0;34=h1;16=h1;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
      cm.npc_ChangeController(3001690, "oid=3010006", 243, 20, 2, 193, 293, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3010006", "summon", 0, 0);
      cm.npc_ChangeController(3001662, "oid=3010007", -39, 20, 3, -89, 11, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3010007", 'summon', 0, 0);
      cm.npc_ChangeController(3001662, "oid=3010008", 91, 20, 2, 41, 141, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3010008", "summon", 0, 0);
      cm.npc_ChangeController(3001662, "oid=3010009", 384, 20, 2, 334, 434, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3010009", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 268, 18);
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
            cm.sendNormalTalk_Bottom("#face0#胆敢在我们的地盘偷东西？", 37, 3001662, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#要是想在这附近干活，就要交出买路钱！", 37, 3001662, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#咳咳……唔……", 37, 3001676, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你怎么就死活听不懂人话呢？", 37, 3001662, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#难不成是村里的无赖菜鸡互啄吗？我说，对方是一个人……\r\n更何况从穿着打扮来看，根本就是个上了年纪的老人家嘛？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#居然合起伙来欺负弱小，\r\n而且理由简直叫人无语，这帮家伙实在歹毒。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#你又打算乱来吗！？", 37, 3001651, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#我一定会去好好教训……不对啊，\r\n我何必卷入这样的事情呢……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#这个杀千刀的家伙，你在听我饕餮说话吗！？", 37, 3001651, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#所以你到底交是不交？", 37, 3001662, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这段时间你在附近一带四处猖狂，\r\n看样子我得连本带利一起好好算算了！", 37, 3001662, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#没……没有，不是那样的，我只是……", 37, 3001676, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#那什么，那就得用别的东西代替了。", 37, 3001662, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#把人带走，快。", 37, 3001662, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#这帮混蛋……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -524, 18);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face11#我说，等一下！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1250, 2000, -39, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=3010007", -1);
                                                                cm.npc_setForceFlip("oid=3010008", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#！？", 37, 3001662, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你又是什么情况？", 37, 3001662, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face10#你不知道这是什么地方，就敢来这儿收税？\r\n这附近一带可是我虎影的地盘，你不知道吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#你这是上哪儿招摇撞骗呢！后巷这里可是我们的地盘！", 37, 3001662, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face9#从今天起这里就是我的地盘，就这么定了。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#你说什么！？", 37, 3001662, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face11#所以拿税钱来，如果你想在我的地盘做生意。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#你这是要打架吗，嗯？", 37, 3001662, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#要在我的地盘上动粗？拿100亿金币来。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#！？", 37, 3001662, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这个狂妄自大的家伙……", 37, 3001662, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face9#态度不佳，200亿金币。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#就叫你尝尝厉害！", 37, 3001662, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face12#你长得丑，500亿金币。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#嘘……", 37, 3001662, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#什么狗屁税钱！都给我上！", 37, 3001662, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#呀！", 37, 3001662, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#哒！", 37, 3001662, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face11#太卑鄙了吧，三个人一起上？好，好吧，我也是有同伴的好吗！？", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face9#出来吧，分身~！", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/Hit2", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -80, 18);
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
                                                                                                                                cm.npc_SetSpecialAction("oid=3010007", 'special', 2000, 1);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/G_out", 100);
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 390, 18);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetSpecialAction("oid=3010008", 'special', 2000, 1);
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/G_out", 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetSpecialAction("oid=3010009", "special", 2000, 1);
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/G_out", 100);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=3010007");
                                                                                                                                          cm.npc_LeaveField("oid=3010007");
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_LeaveField("oid=3010008");
                                                                                                                                            cm.npc_LeaveField("oid=3010008");
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_LeaveField("oid=3010009");
                                                                                                                                              cm.npc_LeaveField("oid=3010009");
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#对，对不起！", 37, 3001662, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#额啊啊！", 37, 3001662, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -260, 60);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face12#啧啧……那你为什么要做对不起我的事！？现在总算清醒点了吧？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.forceCompleteQuest(39533);
                                                                                                                                                                    cm.gainExp(4638);
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
                                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                                          cm.warp(410000202, 0, false);
                                                                                                                                                                          cm.eventSKill(0);
                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                          cm.npc_LeaveField("oid=3010006");
                                                                                                                                                                          cm.npc_LeaveField("oid=3010006");
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
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}