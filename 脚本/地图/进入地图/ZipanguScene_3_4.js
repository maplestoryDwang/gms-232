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
      cm.forceCompleteQuest(58739);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=1;4=1;5=4;6=4;7=4;8=4;9=4");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=1;4=1;5=1;6=4;7=4;8=4;9=4");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111014, "oid=3594024", 145, -35, 14, 95, 195, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594024", "summon", 0, 0);
      cm.npc_ChangeController(9111025, "oid=3594025", -335, -35, 5, -385, -285, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594025", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594026", -630, -35, 17, -680, -580, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594026", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594027", -560, -35, 18, -610, -510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594027", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594028", -500, -35, 19, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594028", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594029", -440, -35, 20, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594029", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594030", -395, -35, 20, -445, -345, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594030", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594031", 235, -35, 2, 185, 285, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594031", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594032", 310, -35, 15, 260, 360, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594032", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594033", 360, -35, 15, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594033", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594034", 420, -35, 3, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594034", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3594035", 480, -35, 1, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3594035", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#……今天的弥撒内容是鵺福音第二章第6节。", 37, 9111014, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……全知全能的鵺，请施与我们慈悲，原谅我们的罪孽，引导我们走向永生！", 37, 9111014, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……博爱的鵺，真理的求道者，黑炎的引导者。请接受我们的赞美之词。", 37, 9111014, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……为信者赐予生命及灵魂的鵺，与信徒同在……", 37, 9111014, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9111013, "oid=3594559", -108, -70, 30, -158, -58, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=3594559", 'summon', 0, 0);
                          cm.sendNormalTalk_Bottom("#face0#……我看见了。", 37, 9111013, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……喂，你！！该死的家伙！！", 37, 9111013, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……我看见你心中的恐惧了！", 37, 9111013, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你已经吓得屁滚尿流了吧！！！", 37, 9111013, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          cm.effect_NormalSpeechBalloon("唔啊啊啊啊！！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111025, null, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#不管你怎么掩饰，都休想躲过我的魔眼！", 37, 9111013, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你心中的恐慌！对生命的畏惧！！我要统统拿走！！！！", 37, 9111013, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我要用我右手中封印的黑炎之火烧光你的恐惧！", 37, 9111013, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……你的恐惧……", 37, 9111013, true, true);
                                                  cm.effect_NormalSpeechBalloon("呃啊啊啊啊啊！！呃啊！唔啊啊啊！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111025, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……将。被。燃。尽", 37, 9111013, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……咦……，怎么回事？？？？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#奇迹发生了！！！！！！！", 37, 9111028, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("奇迹出现了……！奇迹！！！", 37, 9111028, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……看吧！好好看清楚鵺的权能！！鵺是全知全能的！", 37, 9111014, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哇！太了不起了！！！", 37, 9111025, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#(他死瞪着亡灵队长。虽然听不见他在说什么，但从口型判断应该是在骂脏话。)", 37, 9111014, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#唔-呜哈哈哈哈哈哈哈哈哈！！！", 37, 9111013, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#……我一直在思考。", 37, 9111013, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这个世界为什么会扭曲至此？", 37, 9111013, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#这扭曲的现实源自哪里，那原罪是如何束缚我们的？", 37, 9111013, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……源头正是我们对生命的恐惧。死亡的恐怖使这世界扭曲了。", 37, 9111013, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#既然如此，已经失去生命的我们又为何受这恐惧的操控！", 37, 9111013, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#尽管我们的心脏已停止跳动，灵魂已失去活力……", 37, 9111013, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……即便如此却为何……！！\r\n我们这些亡灵为何如此迫切地渴望活着！！！！", 37, 9111013, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=3594559", "rage", 0, 1);
                                                                                    cm.sendNormalTalk_Bottom("#face0#……我是重生于漆黑黑暗中的黑暗火焰……！", 37, 9111013, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……我是漆黑中的灯塔。我用足以熔化钢铁的双眼洞彻黑暗，我是深渊凝视者！", 37, 9111013, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……我将成为新世纪的神！我是黑炎的统治者——黑暗火焰掌控者！", 37, 9111013, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#……徘徊九泉的迷途羔羊们，都到我这儿来。", 37, 9111013, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……我将救赎你们，免于堕入黑暗！！", 37, 9111013, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……不用害怕。", 37, 9111013, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……只有我才能向亡灵展示真相……", 37, 9111013, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#……痛苦只是一瞬。在转瞬即逝的短暂疼痛之后，你们将看见耀眼的真正荣耀！", 37, 9111013, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#来吧！投身黑暗之火中，与我融为一体吧！！", 37, 9111013, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#亡灵队长！把<黑色圣水>分发给信徒们。", 37, 9111014, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#遵命！", 37, 9111025, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("(这帮家伙到底在干什么……完全就是邪教嘛！去找竹野子咨询下吧！)", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.warp(800022002, 0, false);
                                                                                                            cm.npc_LeaveField("oid=3594559");
                                                                                                            cm.npc_LeaveField("oid=3594559");
                                                                                                            cm.npc_LeaveField("oid=3594024");
                                                                                                            cm.npc_LeaveField("oid=3594024");
                                                                                                            cm.npc_LeaveField("oid=3594025");
                                                                                                            cm.npc_LeaveField("oid=3594025");
                                                                                                            cm.npc_LeaveField("oid=3594026");
                                                                                                            cm.npc_LeaveField("oid=3594026");
                                                                                                            cm.npc_LeaveField("oid=3594027");
                                                                                                            cm.npc_LeaveField("oid=3594027");
                                                                                                            cm.npc_LeaveField("oid=3594028");
                                                                                                            cm.npc_LeaveField("oid=3594028");
                                                                                                            cm.npc_LeaveField("oid=3594029");
                                                                                                            cm.npc_LeaveField("oid=3594029");
                                                                                                            cm.npc_LeaveField("oid=3594030");
                                                                                                            cm.npc_LeaveField("oid=3594030");
                                                                                                            cm.npc_LeaveField("oid=3594031");
                                                                                                            cm.npc_LeaveField("oid=3594031");
                                                                                                            cm.npc_LeaveField("oid=3594032");
                                                                                                            cm.npc_LeaveField("oid=3594032");
                                                                                                            cm.npc_LeaveField("oid=3594033");
                                                                                                            cm.npc_LeaveField("oid=3594033");
                                                                                                            cm.npc_LeaveField("oid=3594034");
                                                                                                            cm.npc_LeaveField("oid=3594034");
                                                                                                            cm.npc_LeaveField("oid=3594035");
                                                                                                            cm.npc_LeaveField("oid=3594035");
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
            }
          }
        }
      }
    }
  }
}