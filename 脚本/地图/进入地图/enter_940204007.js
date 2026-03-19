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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -689, -38);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -650, 0);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003401, "oid=2006234", -275, -55, 4, -325, -225, 1, false, false);
        cm.npc_SetSpecialAction("oid=2006234", "summon", 0, 0);
        cm.npc_ChangeController(3003406, "oid=2006235", -180, -55, 5, -230, -130, 1, true, false);
        cm.npc_SetSpecialAction("oid=2006235", 'summon', 0, 0);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("难道是海加顿强行要求实验，\r\n阿卡伊勒被迫执行了一项注定失败的实验……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#失败导致的副作用会让海加顿变成怪物。", 37, 3003409, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("飞鱼？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嘘，他来了。接下来很关键。", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -250, 20);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你还好吗，塔纳？", 37, 3003406, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#以后都不用来了。", 37, 3003400, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face10#嗯？你怎么了，塔纳？出什么事了？", 37, 3003406, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我已经……腻烦书了。", 37, 3003400, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#腻烦，就是失去兴趣……再也不想看到的意思。", 37, 3003400, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#看来你不太会撒谎。", 37, 3003406, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##fs18#不管怎么样，终于能摆脱这令人作呕的监狱了……", 37, 3003408, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##fs18#无论成败与否，实验体都会#fs20##r陨灭#k#fs18#。", 37, 3003408, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#消灭……", 37, 3003400, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face10#塔纳？", 37, 3003406, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我……消灭……非人类的……", 37, 3003400, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("SoundEff.img/morass/magic_ab", 0, 0);
                                                  cm.userSetFieldFloating(940204007, 3, 3, 10);
                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2006234", "special2", -1, 1);
                                                    cm.sendNormalTalk_Bottom("#face7#嗬呃呃呃呃。", 37, 3003400, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#塔纳？塔纳！", 37, 3003406, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face8#痛……住手……", 37, 3003400, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#冷静点，是我，我是江。没事了。", 37, 3003406, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face7#退、退下……", 37, 3003400, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("(不行，如果再不快点分开！)", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#(你别插手！不是的。江明明在入侵那天之前还活着。)", 37, 3003409, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.OverlapScreenDetail19(0, 500, 500, 1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -250, 20);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=2006234", "special3", -1, 1);
                                                                        cm.setAmbience("SoundEff.img/morass/tana1", 100, 60);
                                                                        cm.sendNormalTalk_Bottom("#face9#消灭……就是我所追求的事情……吗？", 37, 3003400, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face9#我……为什么……讨厌……", 37, 3003400, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#塔、塔纳！", 37, 3003406, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.playSoundEffDirectly("SoundEff.img/morass/tana1");
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.userSetFieldFloating(940204007, 0, 0, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face9#！！！", 37, 3003400, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/morass/JeanNTana2/0", 0, 1500, 0, -80, 12, 4, 1);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/morass/JeanNTana2/1", 0, 1500, 0, -80, 12, 4, 1);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', "Map/Effect3.img/morass/JeanNTana2/2", 0, 1500, 0, -80, 12, 4, 1);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('03', "Map/Effect3.img/morass/JeanNTana2/3", 0, 1500, 0, -80, 12, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face4#没关系，塔纳。没关系……", 37, 3003406, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm46.img/Lake Of Oblivion", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face4#我就在你旁边。", 37, 3003406, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('#face7#！！', 37, 3003400, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#啊啊……？", 37, 3003400, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("(怎么总是……听到脚步声？)", 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face4#怎么办……", 37, 3003400, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face4#我会保护你的。", 37, 3003406, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.setNpcSpecialActionReset("oid=2006234");
                                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3003400, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在……没事了。", 37, 3003400, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#额？额！嗯……", 37, 3003406, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face8#抱、抱歉。塔纳。", 37, 3003406, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我……", 37, 3003400, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#别来了。", 37, 3003400, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('#face12#……', 37, 3003406, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetForceMove("oid=2006235", 1, 30, 80);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=2006235", -1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face10#先前那个故事……你知道最后怎么样了吗？", 37, 3003406, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#帅气的骑士救出了身中魔法的公主。", 37, 3003406, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#你不是骑士。", 37, 3003400, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face11#反正你也不是公主。", 37, 3003406, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#……", 37, 3003400, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.forceForfeitQuest(49005);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face7#我们出去吧，塔纳。这次轮到我来救你了。", 37, 3003406, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#……", 37, 3003400, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom('#face3#……', 37, 3003400, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("笑了？刚刚明明……", 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_Monologue("她的微笑成为一股巨大的冲击力，时刻鞭打着我的心脏。", 0);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("我什么话也说不出，只能看着那两人的笑容。", 0);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_Monologue("命运这东西，有时候奇妙无比，有时候又残忍不堪,", 0);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("有时候我也会想，那装置到底有什么用呢。", 0);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("各自的故事，各自的人们", 0);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("就像#r齿轮#k一样，互相衔接着转动。", 0);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("那东西虽然缓慢，但正在一点点地被组装起来。", 0);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("最终变成了完全出乎意料的形态。", 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#r「克里蒂亚斯之终结」#k正在降临。", 1);
                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                cm.forceCompleteQuest(34262);
                                                                                                                                                                                cm.updateInfoQuest(34262, "book=1");
                                                                                                                                                                                cm.updateInfoQuest(34271, "20=h1;30=h1;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h1;35=h0;54=h1;18=h0;36=h0;28=h1;29=h1");
                                                                                                                                                                                cm.npc_LeaveField("oid=2006234");
                                                                                                                                                                                cm.npc_LeaveField("oid=2006235");
                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                cm.warp(940204008, 0, true);
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
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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