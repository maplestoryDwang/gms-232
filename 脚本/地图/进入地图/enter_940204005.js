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
      cm.npc_ChangeController(3003406, "oid=2005979", -450, -94, 2, -500, -400, 0, true, false);
      cm.npc_SetSpecialAction("oid=2005979", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2005979", "die", -1, 1);
      cm.Npc_Fadeout("oid=2005979", 0, 100);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -373, -23);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -270, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.inGameDirectionEvent_Monologue("她和人类明显是不同的。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("就像关押她的这座监狱一样，她阴暗、冰冷，又牢不可破。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("所以我完全无法想象。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue('', 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("如果说「一束光」照进了这幽深的地下监狱……", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('', 1);
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
                          cm.sendNormalTalk_Bottom("一束光……？", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嘘！快躲起来。", 37, 3003409, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("飞鱼？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1215, -34);
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/HofM/fall2", "oid=2005979"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Aran/down", 100);
                                          cm.Npc_Fadeout("oid=2005979", 255, 500);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#哎呦喂，我死定了……", 37, 3003406, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.setNpcSpecialActionReset("oid=2005979");
                                              cm.sendNormalTalk_Bottom("#face11#咳咳、咳咳！这不是地下监狱嘛？", 37, 3003406, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("(江？！！你该不会是来找塔纳的吧？)", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.npc_SetForceMove("oid=2005979", 1, 60, 120);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -300, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm46.img/Lake Of Oblivion", 0, 0);
                                                          cm.sendNormalTalk_Bottom("#face0#你好，记得我吗？我叫江。大盗江。你叫什么名字？", 37, 3003406, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……塔纳。", 37, 3003400, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face11#好美的名字啊。嘿嘿。", 37, 3003406, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face10#看来你话不多？\r\n也难怪，总待在这种地方，没办法不忧郁。", 37, 3003406, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#别伤心。", 37, 3003400, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我……不知道什么是伤心。", 37, 3003400, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#是吗？这倒挺让人羡慕！", 37, 3003406, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("(你到底是怎么进来的？)", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/morass/JeanNTana1/0", 0, 1500, 0, -75, 0, 4, 1);
                                                                            cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/morass/JeanNTana1/1", 0, 1500, 0, -75, 0, 4, 1);
                                                                            cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/morass/JeanNTana1/2", 0, 1500, 0, -75, 0, 4, 1);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/chain", 100);
                                                                            cm.sendNormalTalk_Bottom("#face4#呃……这根本不是普通的锁链啊！", 37, 3003406, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("就这样，两人重逢了。", 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("虽然江马上明白过来，他无法解救塔纳了，但是……", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect3.img/morass/JeanNTana1/3", 0, 1500, 0, -75, 0, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("他此后也一直在寻找塔纳。", 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我怕无聊，所以带了书来……要看吗？", 37, 3003406, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#无聊……", 37, 3003400, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#读给我听。", 37, 3003400, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你问哪里无聊。额……嗯……", 37, 3003406, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你想知道？", 37, 3003406, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#很久很久以前，某个被施了魔法的城堡里关着一位美丽的公主……", 37, 3003406, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect3.img/morass/JeanNTana1/4", 0, 1500, 0, -75, 0, 4, 1);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#肚子不饿吗？要不要吃面包？", 37, 3003406, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("虽然无法得知江到底在想些什么，", 0);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("但我已决定默不作声地观察。", 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("就那样，他们一直见面，没有发生什么特别的事情。", 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("不过，如果说塔纳出现了一点小小的变化，", 0);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue("大概就是，她偶尔会抬头看着天花板吧……", 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                                                cm.forceCompleteQuest(34260);
                                                                                                                                cm.npc_LeaveField("oid=2005979");
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(450006240, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;