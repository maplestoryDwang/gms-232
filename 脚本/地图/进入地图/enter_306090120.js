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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(2550000, "oid=1775513", 1829, -130, 3, 1779, 1879, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1775513", 'summon', 0, 0);
      cm.npc_ChangeController(2550003, "oid=1775514", 1700, -130, 1, 1650, 1750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1775514", "summon", 0, 0);
      cm.npc_ChangeController(2550009, "oid=1775515", 1620, -130, 12, 1570, 1670, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1775515", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1740, -114);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/0", 100);
          cm.inGameDirectionEvent_AskAnswerTime(700);
          cm.effect_Text(["#fn黑体##fs18#几年后……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/2", 100);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/3", 100);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                        cm.sendNormalTalk_Bottom("我来了，队长。好久不见呢？", 37, 2550003, false, true);
                        cm.effect_Voice("Voice3.img/DLep4/q/q_1.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嘤，嘤。", 37, 2550009, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("噗，你看？这小家伙都长这么大了。", 37, 2550003, true, true);
                            cm.effect_Voice("Voice3.img/DLep4/q/q_2.mp3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("好，故事该从哪里讲起呢……", 37, 2550003, true, true);
                              cm.effect_Voice("Voice3.img/DLep4/q/q_3.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm48.img/Nowhere", 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/DLep4/1/0", 0, 2500, 0, -75, 0, 4, 1);
                                  cm.sendNormalTalk_Bottom("看到你拼了命才点燃的烽火，许多人都聚集了起来。", 37, 2550003, false, true);
                                  cm.effect_Voice("Voice3.img/DLep4/r/r_1.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("其中就有足以对抗强大的黑魔法师的英雄们。", 37, 2550003, true, true);
                                    cm.effect_Voice("Voice3.img/DLep4/r/r_2.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/DLep4/1/2", 0, 1500, 0, -75, 0, 4, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("拥有神秘过往的光之魔法师", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1500, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/DLep4/1/1", 0, 1500, 0, -75, 0, 4, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("有无敌、不败之称的战神，", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect3.img/DLep4/1/3", 0, 1500, 0, -75, 0, 4, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("还有创造了烽火的龙神……", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1500, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect3.img/DLep4/1/4", 0, 1500, 0, -75, 0, 4, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("叱咤战场的精灵族女王，", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 1500, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('5', "Map/Effect3.img/DLep4/1/5", 0, 1500, 0, -75, 0, 4, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("最后连怪盗幻影也来了。", 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('5', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("过程中虽然有不少流血牺牲……\r\n但是最后，我们还是成功封印了黑魔法师。", 37, 2550003, false, true);
                                                                        cm.effect_Voice("Voice3.img/DLep4/r/r_3.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("啊，我刚刚说了“我们”吧？", 37, 2550003, true, true);
                                                                          cm.effect_Voice("Voice3.img/DLep4/r/r_4.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("呃呃……没错，我也帮了忙。\r\n所以才会耗尽了所有力量吧？", 37, 2550003, true, true);
                                                                            cm.effect_Voice("Voice3.img/DLep4/r/r_5.mp3", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("你可别误会。我只是……母亲嘛。\r\n母亲有义务安抚哭泣的孩子，不是吗？", 37, 2550003, true, true);
                                                                              cm.effect_Voice("Voice3.img/DLep4/r/r_6.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("另外，还有一个遗憾的消息……", 37, 2550003, false, true);
                                                                                  cm.effect_Voice("Voice3.img/DLep4/s/s_1.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我们在爆炸现场发现了……海姿。\r\n他好像举着火把，直接跑进了炸药堆里。", 37, 2550003, true, true);
                                                                                    cm.effect_Voice("Voice3.img/DLep4/s/s_2.mp3", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("毕竟周围都是怪物，也没有别的办法了吧。", 37, 2550003, true, true);
                                                                                      cm.effect_Voice("Voice3.img/DLep4/s/s_3.mp3", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("迈勒在烽火台内部。\r\n为了缩短烽火的启动时间，他耗尽了全部的生命力。", 37, 2550003, true, true);
                                                                                        cm.effect_Voice("Voice3.img/DLep4/s/s_4.mp3", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("两人都像你们说的那样，回到故乡去了。", 37, 2550003, true, true);
                                                                                          cm.effect_Voice("Voice3.img/DLep4/s/s_5.mp3", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("你做得很好了。柳德。\r\n现在你也可以安心休息了。", 37, 2550003, false, true);
                                                                                              cm.effect_Voice("Voice3.img/DLep4/t/t_1.mp3", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我也该回归故乡了。", 37, 2550003, true, true);
                                                                                                cm.effect_Voice("Voice3.img/DLep4/t/t_2.mp3", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=1775513", 'die', 0, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("……  ", 37, 2550003, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("这把剑我拿走了。可以吧？", 37, 2550003, true, true);
                                                                                                        cm.effect_Voice("Voice3.img/DLep4/t/t_3.mp3", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=1775514", "magic", 0, 1);
                                                                                                            cm.npc_LeaveField("oid=1775513");
                                                                                                            cm.npc_LeaveField("oid=1775513");
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 1815, -120, 1, 0, 1, 1, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=1775514", -1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayBGM("Bgm34/DimensionLibrary", 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("好了，我们也该分开了。", 37, 2550003, false, true);
                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/u/u_1.mp3", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('嘤，嘤？', 37, 2550009, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("你就留在这个世界上吧。\r\n这是柳德拼上性命保护的世界啊。", 37, 2550003, true, true);
                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/u/u_2.mp3", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("现在也不需要方舟了。", 37, 2550003, true, true);
                                                                                                                          cm.effect_Voice("Voice3.img/DLep4/u/u_3.mp3", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=1775514", 1);
                                                                                                                              cm.sendNormalTalk_Bottom("虽然说不定哪天，世界还是会陷入危险……", 37, 2550003, false, true);
                                                                                                                              cm.effect_Voice("Voice3.img/DLep4/v/v_1.mp3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("但是，那时就会有其他英雄出现吧。", 37, 2550003, true, true);
                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/v/v_2.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2300, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_Monologue("好了，英雄柳德的故事，就到这里了。", 0);
                                                                                                                                      cm.effect_Voice("Voice3.img/DLep4/w/w_1.mp3", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("虽然没人记得有个叫柳德的人，", 0);
                                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/w/w_2.mp3", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_Monologue("但是，如果他的牺牲挽救了无数人的性命……他也该含笑九泉了吧。", 0);
                                                                                                                                          cm.effect_Voice("Voice3.img/DLep4/w/w_3.mp3", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/w/w_4.mp3", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_Monologue("再见……柳德。", 0);
                                                                                                                                              cm.effect_Voice("Voice3.img/DLep4/w/w_5.mp3", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs40#EpisodeIV:雪原吟游诗人", 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk("故事到此结束了。", 5, 2500000, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk("现在请回来吧，回到现实中真正的#h0#！", 5, 2500000, true, true);
                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                          cm.dispose();
                                                                                                                                                          cm.warp(302000000, 0, true);
                                                                                                                                                          cm.forceCompleteQuest(32699);
                                                                                                                                                          cm.finishAchievement(1181);
                                                                                                                                                          cm.forceCompleteQuest(32695);
                                                                                                                                                          cm.gainExp(186336);
                                                                                                                                                          cm.eventSKill(0);
                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                          cm.npc_LeaveField("oid=1775514");
                                                                                                                                                          cm.npc_LeaveField("oid=1775514");
                                                                                                                                                          cm.npc_LeaveField("oid=1775515");
                                                                                                                                                          cm.npc_LeaveField("oid=1775515");
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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