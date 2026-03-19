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
      cm.npc_ChangeController(3001908, 'oid=434342', 389, -41, 12, 339, 439, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 258, -58);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啊，你是……伊利温说的那个人。", 36, 3001500, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……你的红色翅膀真的无法展开啊。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你为什么来到其他次元？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#因为我相信，次元相通绝不是偶然。\r\n吉伦·达尔莫尔想要的东西，就在这里的某处。", 36, 3001500, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我想问问你为什么没有再回去。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#因为我知道了真相……", 36, 3001500, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年讲述了自己在贝尔达的经历，\r\n在圣战的美名之下，犯下的残酷屠杀。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#自从我醒悟之后，就拒绝了上级的命令。\r\n因为知道他们企图破坏陌生的土地，所以我试图中止仪式。", 36, 3001500, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然成功阻碍了他们的计划，但我也中了他施下的诅咒。\r\n直到过了很长的时间，才苏醒过来。", 36, 3001500, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我这一部分变成怪物的身体……就是最好的证据。", 36, 3001500, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(抗拒命令的记忆……我似乎也做过这样的事。\r\n一时间，被掩盖的记忆在脑海里铺展开来。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                          cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", 'new', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
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
                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/past/4/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("“请主君……收回出战命令。”", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("在离出战还有3天的时候，", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("我苦思冥想，还是决定去面见主君。", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("\r\n“属下知道，这样不合礼数。”", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("“但是，守护主君是骑士的本分。”", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("“因此属下冒着不忠的罪名……斗胆进谏。”", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("“我们现在并没有足够开战的名分，”", 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("“其他异种族的反抗定会十分激烈。”", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("“搞不好，甚至会成为整个格兰蒂斯的敌人。”", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("尽管我苦口婆心地列举了应该停止战争的理由，", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("却只得到了……如下答复。", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("\r\n“这场战争是必要的。”", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\r\n“可是……”", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("\r\n“你不必再说了。”", 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("眼前这人的面貌，已不再是我在授封仪式上见到的那位神王。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("那双曾经如贤者般闪耀着智慧之光的眼睛，早已失去原本的光彩……", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("“是什么让主君变成了这番模样？”", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("“现在我能做的……”", 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("\r\n“骑士阿德莱德……”", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("“无法遵从神王陛下的出战命令。”", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("\r\n神王的脸色瞬间变得狰狞起来。", 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("\r\n“我不需要违逆我旨意的臣子。”", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("“立刻把她给我关起来！”", 1);
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
                                                                                                    cm.fieldEffect_Hero9(0, 1000);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                      cm.fieldEffect_Hero9(100, 500);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm16/Duskofgod", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#我听说你是先代神王的骑士。", 36, 3001500, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#那是比我所在的时代还要久远的过去。", 36, 3001500, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#虽然很想帮忙，但可惜我……", 36, 3001500, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#不……你说的故事，已经帮到了我。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#托你的福，让我想起了一份忘却的记忆。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我想去你待过的那个叫贝尔达的地方看看。\r\n……我要怎么去到那里？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#很遗憾，那地方在我来这里之前就已经毁掉了。\r\n所幸那些帮助我的同僚们得以平安逃了出来……", 36, 3001500, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不过，那地方或许还有遗留的残骸。\r\n等我同僚发来联络，我会帮你打听一下如何再次前往那里的方法。", 36, 3001500, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#贝尔达……我也找找办法。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#好，那你慢走……", 36, 3001500, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.forceStartQuest(39667, '');
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
                                                                                                                                              cm.warp(cm.getNumberFromQuestInfo(39667, 'rMap'), 0, false);
                                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
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