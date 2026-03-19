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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 35, 154);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001952, "oid=6419767", 133, 113, 3, 83, 183, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6419767", "summon", 0, 0);
        cm.npc_ChangeController(3001961, "oid=6419768", 226, 117, 3, 176, 276, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6419768", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#背面刷金漆……可是，这只是一幅老旧的画作。\r\n真的是伯爵要找的那幅画吗？", 36, 3001952, false, true, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/cloth", 100);
                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/2/0", 0, 1000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#如果非要说这幅画有什么特别，那只有一点。\r\n即，这不是完成版，只是画作的一部分。", 36, 3001952, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(画的边角部分就像撕裂似的，被硬生生截断了。\r\n看上去似乎是把一幅画分成了许多块。）", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#拼图？', 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#没错，必须将许多块拼合在一起，才能成为一幅画。\r\n广告中没有写明画的正面，也是这个原因。", 36, 3001952, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#今天就先到这里。其余的，等画作完成之后再确认。\r\n只要在画的一角装上这个接收器……", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嘻嘻，这样就有助于我们追踪画作的所在地。\r\n我们出去吧，阿黛尔，还有布乌。", 36, 3001952, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#既然看完了，就把画放回原处，咳……，\r\n哈，哈啊……喷嚏，阿嚏～！", 36, 3001952, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction18.img/effect/adele/etc/jerome/0", "oid=6419767"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=6419767", "special1", -1, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#布乌！", 36, 3001960, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/Transform", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            cm.npc_LeaveField("oid=6412255");
                                            cm.npc_LeaveField("oid=6412256");
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/past/0/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(由于布乌的变身解除，撞倒了一旁堆放的物品。\r\n可这东西怎么……有点眼熟。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(这把陈旧的铁剑……我记得在哪里见过它。\r\n在我很小的时候……曾经与某人一起对练。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                    cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_Hero9(0, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                        cm.fieldEffect_Hero9(100, 500);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setNpcSpecialActionReset("oid=6419767");
                                                            cm.npc_SetSpecialAction("oid=6419768", "special2", -1, 0);
                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", 'new', '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff0", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff1", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/past/0/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue('“再快点！”', 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("“不能让着对手！”", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("“瞅准漏洞下手！”", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword0", 100);
                                                                            cm.inGameDirectionEvent_Monologue("\r\n一个孩子的剑滚落在地。", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("倒在地上的孩子一脸哭相。", 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("\r\n我朝那孩子伸出了手。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("\r\n“来，站起来。”", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("“小姐！”", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("\r\n教授剑术的男子大声喊道。", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("\r\n“唉……您忘了吗？”", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("“在战斗中不能表露情绪。”", 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("“请将全副注意力集中在剑上。”", 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("\r\n那孩子自己站了起来。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("她眼里含着眼泪，狠狠剜了我一眼。", 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("\r\n“你别得意。”", 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("\r\n耳边响起的这句带刺的话，", 0);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("却仿佛刺痛了那个孩子的内心。", 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                                          cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face10#……黛尔！", 36, 3001952, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face10#阿黛尔，阿黛尔！", 36, 3001952, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face10#你醒醒！", 36, 3001952, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_Hero9(0, 1000);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm53/RomanticSunset", 0, 0);
                                                                                                                    cm.fieldEffect_Hero9(100, 500);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6#……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face6#阿黛尔，你清醒点吗？怎么回事？\r\n你为什么紧紧抓着一把陈旧的铁剑？", 36, 3001952, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#布乌～？", 36, 3001960, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(我对少年讲述了刚才看到的情景。\r\n这把铁剑似乎让我回想起了遗忘的记忆。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#原来如此……不过，你脸色好苍白。\r\n我们快回据点……来，你靠着我。", 36, 3001952, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#布乌……", 36, 3001960, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
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
                                                                                                                                                cm.warp(993162017, 0, false);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.npc_LeaveField("oid=6419767");
                                                                                                                                                cm.npc_LeaveField("oid=6419768");
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