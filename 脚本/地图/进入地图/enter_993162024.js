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
      cm.npc_ChangeController(3001952, "oid=6475969", -795, 6, 3, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6475969", 'summon', 0, 0);
      cm.npc_ChangeController(3001960, "oid=6475970", -690, 6, 3, -740, -640, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6475970", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -660, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -653, 18);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=6475969", -1, 20, 120);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=6475969", 1, 10, 120);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face10#呃，呃啊……这里也有箱子！\r\n我，我都快有箱子恐惧症了。", 36, 3001952, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=6475970", "special7", 0, 0);
                              cm.sendNormalTalk_Bottom("#face4#布乌……", 36, 3001960, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#幸好不像刚才一样会动。\r\n钥匙应该就在其中一个箱子里……", 36, 3001952, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们仨分头找找吧。\r\n我去这边找。", 36, 3001952, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=6475969", -1, 20, 120);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(0);
                                      cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, -510, 18);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/box", 100);
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我打开旧箱子，一一检查了内容物。\r\n在箱子里的物品中发现了陈旧的骑士手套。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
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
                                                        cm.setNpcSpecialActionReset("oid=6475969");
                                                        cm.npc_SetSpecialAction("oid=6475970", "special2", -1, 0);
                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", 'new', '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/past/1/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("“阿黛尔……放我一马好吗？”", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("“我保证不再惹事……别杀我。”", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("\r\n要铲除的对象……是前骑士团成员。", 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("他正趴在地上，浑身颤抖。", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("\r\n“你打着骑士团的名号……”", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("“使国王蒙羞之罪。”", 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword1", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("剑刃抵住了叛徒的脖子。", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\r\n“啊啊！维，维罗妮卡……”", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("“我们不是好朋友吗……求你饶命。”", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("“行刑由我们小队长负责……”", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("\r\n“喀，喀呃……”", 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("手法干净利落，没有一丝犹豫。", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("不带任何情绪和慈悲，", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("手起刀落只是短短一瞬间。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("\r\n“行刑完毕……我们回去吧。”", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("\r\n我脱下了弄脏的手套。", 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("“哦，你这么快就完事了。”", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("“真是个铁血无情的家伙……”", 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("\r\n我只是履行身为骑士的职责。", 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("仅此而已。", 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", 'new', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                                        cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                                        cm.fieldEffect_Hero9(0, 1000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                          cm.fieldEffect_Hero9(100, 500);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm53/WhereTheSecretLies", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=6475969");
                                                                                                              cm.npc_LeaveField("oid=6475970");
                                                                                                              cm.npc_ChangeController(3001952, "oid=6481118", -620, 6, 3, -670, -570, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=6481118", "summon", 0, 0);
                                                                                                              cm.npc_ChangeController(3001960, "oid=6481119", -700, 6, 3, -750, -650, 0, true, 0, false);
                                                                                                              cm.npc_SetSpecialAction("oid=6481119", "summon", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#在这里……我找到钥匙了！阿黛尔，布乌！", 36, 3001952, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face6#……阿黛尔，阿黛尔？", 36, 3001952, true, true, 1);
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
                                                                                                                        cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(我的记忆回来了……这是与制服配套的手套。\r\n我所担负的任务……究竟是什么呢？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(尽管我认为自己只是履行了骑士的职责，\r\n可不知为什么，我并不想把这事告诉眼前的少年。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face6#不，不是，那什么……你没事吧？", 36, 3001952, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#我也不是第一次经历这种事。\r\n你找到钥匙了？那我们快出去吧。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face6#真的不要紧吗？", 36, 3001952, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#就算有事，也不会拖你后腿的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#额，好吧……我们走，布乌。", 36, 3001952, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#布乌~？", 36, 3001960, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.forceCompleteQuest(39617);
                                                                                                                                          cm.gainExp(2487);
                                                                                                                                          cm.gainExp(270);
                                                                                                                                          cm.forceCompleteQuest(39662);
                                                                                                                                          cm.updateInfoQuest(39601, "50=h1;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=2");
                                                                                                                                          cm.teachSkill(150020006, 2, 10);
                                                                                                                                          cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
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
                                                                                                                                                cm.warp(410000334, 0, false);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.npc_LeaveField("oid=6481118");
                                                                                                                                                cm.npc_LeaveField("oid=6481119");
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