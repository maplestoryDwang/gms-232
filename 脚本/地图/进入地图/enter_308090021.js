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
      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
      cm.npc_ChangeController(2570101, "oid=38071753", 483, 100, 2, 433, 533, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38071753", "summon", 0, 0);
      cm.npc_ChangeController(2570102, "oid=38071754", 560, 141, 3, 510, 610, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38071754", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=38071755", 413, 168, 4, 363, 463, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38071755", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=38071756", 260, 160, 4, 210, 310, 0, true, 1, false);
      cm.npc_SetSpecialAction("oid=38071756", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=38071757", 640, 165, 8, 590, 690, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38071757", "summon", 0, 0);
      cm.Npc_Fadeout("oid=38071757", 0, 0);
      cm.npc_ChangeController(2570100, "oid=38071758", 200, 140, 3, 150, 250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=38071758", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 410, 122);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 90, 140);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你的剑在发抖，哈丁。", 36, 2570100, false, true, 1);
              cm.effect_Voice("Voice6.img/Library/kel/20-01-kel.mp3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#你听到了吗？是惨叫声。", 36, 2570101, true, true, 1);
                cm.effect_Voice("Voice6.img/Library/hadin/20-02-hadin.mp3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哈丁，剑出现了震动。先去确认下那家伙是否断气了。", 36, 2570100, true, true, 1);
                  cm.effect_Voice("Voice6.img/Library/kel/20-03-kel.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#惨叫声……我听得很清楚。这声音是……艾德……肯定是艾德。", 36, 2570101, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/hadin/20-04-hadin.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#什么……你到底在说什么……艾德他……他还活着。不是，艾德他……", 36, 2570103, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/ryan/20-05-ryan.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#他战死了吗？莫非又是因为我……？", 36, 2570102, true, true, 1);
                        cm.effect_Voice("Voice6.img/Library/ain/20-06-ain.1.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#我……好像是我做的。对……是我，是我做的。", 36, 2570101, true, true, 1);
                          cm.effect_Voice("Voice6.img/Library/hadin/20-07-hadin.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这样不行……不快点结束的话……", 36, 2570100, true, true, 1);
                            cm.effect_Voice("Voice6.img/Library/kel/20-08-kel.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#是瑞恩。", 36, 2570105, true, true, 1);
                              cm.effect_Voice("Voice6.img/Library/ed/20-09-ed.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.Npc_Fadeout("oid=38071757", 255, 700);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯？！", 36, 2570100, false, true, 1);
                                  cm.effect_Voice("Voice6.img/Library/kel/20-10-kel.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#是瑞恩的箭，刺穿了我的肩膀。", 36, 2570105, true, true, 1);
                                    cm.effect_Voice("Voice6.img/Library/ed/20-11-ed.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#我……是我干的……？", 36, 2570103, true, true, 1);
                                      cm.effect_Voice("Voice6.img/Library/ryan/20-12-ryan.mp3", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#是幻觉吗……？\r\n这……大家都看到了相同的幻觉吗？", 36, 2570100, true, true, 1);
                                        cm.effect_Voice("Voice6.img/Library/kel/20-13-kel.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction25.img/Dlep6/effect/2", 0, 2000, 30, 2, 20, 4, 0, 0, 0, 0, -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#！！", 36, 2570100, false, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/kel/20-14-kel.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#大家清醒点……！", 36, 2570100, false, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/kel/20-15-kel.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我还有救……你们看……团长的手上……", 36, 2570105, true, true, 1);
                                                  cm.effect_Voice("Voice6.img/Library/ed/20-16-ed.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face6#啊……！那个是……鲁碧安？！", 36, 2570102, true, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/ain/20-17-ain.1.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#你能救活我的，亚殷。", 36, 2570105, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/Library/ed/20-18-ed.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#亚殷……救我……", 36, 2570105, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/Library/ed/20-19-ed.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face6#艾德！！！", 36, 2570102, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/Library/ain/20-20-ain.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#团长……！", 36, 2570102, true, true, 1);
                                                            cm.effect_Voice("Voice6.img/Library/ain/20-21-ain.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face6#快把鲁碧安给我……传说可以复活亡者的鲁碧安……", 36, 2570102, true, true, 1);
                                                              cm.effect_Voice("Voice6.img/Library/ain/20-22-ain.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('#face0#……。', 36, 2570100, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#已经迟了吗……。", 36, 2570100, true, true, 1);
                                                                  cm.effect_Voice("Voice6.img/Library/kel/20-24-kel.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#对，鲁碧安……我们有鲁碧安。", 36, 2570102, true, true, 1);
                                                                    cm.effect_Voice("Voice6.img/Library/ain/20-25-ain.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face6#求你救救他，用鲁碧安救救艾德。", 36, 2570102, true, true, 1);
                                                                      cm.effect_Voice("Voice6.img/Library/ain/20-26-ain.mp3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#不，我们得救那少女。她已经好几次……好几次……是几次来着？", 36, 2570101, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/Library/hadin/20-27-hadin.1.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face6#惨叫声！惨叫声又响起了……", 36, 2570101, true, true, 1);
                                                                          cm.effect_Voice("Voice6.img/Library/hadin/20-28-hadin.1.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#我有个好主意。我们得复活国王。", 36, 2570103, true, true, 1);
                                                                            cm.effect_Voice("Voice6.img/Library/ryan/20-29-ryan.mp3", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face6#是他召唤了恶魔。\r\n他肯定也知道将恶魔赶回地狱的方法，以及终结这诅咒的方法！", 36, 2570103, true, true, 1);
                                                                              cm.effect_Voice("Voice6.img/Library/ryan/20-30-ryan.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……我不能将鲁碧安用于任何人。", 36, 2570100, false, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/Library/kel/20-31-kel.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#为什么？为什么不行？", 36, 2570102, true, true, 1);
                                                                                    cm.effect_Voice("Voice6.img/Library/ain/20-32-ain.mp3", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#啊，我明白了。是因为王子吧？", 36, 2570102, true, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/Library/ain/20-33-ain.1.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face6#你敬爱的王子，你想用来救他！！", 36, 2570102, true, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/Library/ain/20-34-ain.mp3", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#不是那样的。", 36, 2570100, true, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/Library/kel/20-35-kel.mp3", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#你撒谎！！", 36, 2570102, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/Library/ain/20-36-ain.mp3", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face6#我从之前就觉得你很可疑。你不是对王子发过誓了吗。", 36, 2570103, true, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/Library/ryan/20-37-ryan.mp3", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face6#说会复活他，用鲁碧安来保护他。", 36, 2570103, true, true, 1);
                                                                                                cm.effect_Voice("Voice6.img/Library/ryan/20-38-ryan.mp3", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#别扯什么守护圣瑞尼亚。\r\n说到底，他就是为了复活王子，才把我们拖下水的！", 36, 2570103, true, true, 1);
                                                                                                  cm.effect_Voice("Voice6.img/Library/ryan/20-39-ryan.1.mp3", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face6#对……一定是这样！所以只有你能坚持下来。", 36, 2570102, true, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/Library/ain/20-40-ain.mp3", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#你们都不记得了。\r\n我说过好几遍，我向王子许下的誓约……", 36, 2570100, true, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/20-41-kel.mp3", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                        cm.npc_SetSpecialAction("oid=38071753", 'attack', -1, 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#惨叫声……惨叫声一直没有消失。那少女……", 36, 2570101, false, true, 1);
                                                                                                          cm.effect_Voice("Voice6.img/Library/hadin/20-42-hadin.1.mp3", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#任务呢……？", 36, 2570104, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('#face0#……。', 36, 2570100, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#把他们全杀了。", 36, 2570100, false, true, 1);
                                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/20-45-kel.mp3", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=38071756", "attack4", -1, 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face7#哈哈哈哈哈哈！！！！", 36, 2570102, false, true, 1);
                                                                                                                            cm.effect_Voice("Voice6.img/Library/ain/20-46-ain.mp3", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                              cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.updateInfoQuest(37800, "01=die;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.updateInfoQuest(37800, "01=die;02=die;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.updateInfoQuest(37800, "01=die;02=die;03=die;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.updateInfoQuest(37800, "01=die;02=die;03=die;q1=clear;04=die;q2=clear;05=h1;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.updateInfoQuest(37800, "01=die;02=die;03=die;q1=clear;04=die;q2=clear;05=h0;06=h0;q4=clear;q6=clear;q7=clear;q8=clear;q9=clear;dir00=end;dir01=end;dir02=end;dir03=end;dir04=end;dir05=end;q10=clear;q11=clear;q12=clear;q13=clear");
                                                                                                                              cm.npc_LeaveField("oid=38071753");
                                                                                                                              cm.npc_LeaveField("oid=38071754");
                                                                                                                              cm.npc_LeaveField("oid=38071755");
                                                                                                                              cm.npc_LeaveField("oid=38071756");
                                                                                                                              cm.npc_LeaveField("oid=38071757");
                                                                                                                              cm.npc_LeaveField("oid=38071758");
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(308000022, 0, false);
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