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
      cm.npc_ChangeController(3003622, "oid=275910", 116, -40, 3, 66, 161, 0, false, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275911', -1310, -40, 6, -1360, -1260, 4, true, 0, false);
      cm.npc_ChangeController(3003661, 'oid=275912', -2373, -40, 7, -2423, -2323, 4, true, 0, false);
      cm.npc_ChangeController(3003671, "oid=275913", 417, -40, 2, 382, 482, 5, true, 0, false);
      cm.npc_ChangeController(3003661, "oid=275914", -2445, -40, 7, -2495, -2395, 4, true, 0, false);
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 100, -500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.monadForceMove("white", 1, 30);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
            cm.inGameDirectionEvent_AskAnswerTime(30);
          } else {
            if (status === V++) {
              cm.monadForceMove("white", 0, 30);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.monadForceMove("white", 1, 30);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.monadForceMove("white", 0, 900);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1990);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#巨大怪兽将联盟的舰队毁坏殆尽，", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#才闭上眼睛，回到了迷雾之中。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n舰队的大部分船只都被击沉，被卷入了虚空波涛之中，", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#只有白色之矛和几艘船幸存了下来。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n就算是拥有必死的决心，", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#在超越常识的恐惧面前也会产生动摇。", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#勇士们的勇气正在失去原来的光芒……", 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#恐惧在内心的缝隙中生根发芽。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n虽然面对损兵折将的凄惨景象，", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#联盟的指挥官希纳斯却必须做出决断。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n不管是多么痛苦的决断……", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n在那只巨大的眼睛再次发光之前，时间所剩不多了。", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setAmbience("Ambience.img/BM1_crowd", 50, 60);
                                                          cm.inGameDirectionEvent_ForcedFlip(0);
                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 250);
                                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 100, -140);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 300, -44);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 300, -30);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(0);
                                                                          cm.sendNormalTalk_Bottom("#face2#好像只有掉落在白色之矛附近的船幸存了下来。\r\n哈……几百艘船的舰队，现在只剩下了几艘。", 37, 3003667, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#被波涛席卷着，重新被推向迷雾之中的舰队会怎么样呢？\r\n好像……没办法联系上他们……", 37, 3003667, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -406, -30);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#那个巨大的怪物到底是什么？\r\n岩石和锁链纠缠在一起……好像不是活着的东西……", 37, 3003667, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#巨大的怪物释放出了邪恶的意念。\r\n好像想要阻止他们靠近黑太阳一样……", 37, 3003667, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#咳咳……我想回家……\r\n我能回家吗……这是什么地方……", 37, 3003617, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#呃……士兵们大部分都丧失了斗志……\r\n这种情况……就算用魔法的力量也无法治愈。", 37, 3003667, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 650);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -1029, -30);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#可能需要一段时间才能重新打起精神来。\r\n在他们恢复之前，请先照顾好他们。", 37, 3003667, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#啊……时间神官，经过一段时间之后就能打起精神来吗？\r\n呜呜……我的朋友死了，都是我的错……呜，呜呜……", 37, 3003660, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 1130);
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1500, 8000, -2208, -30);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_LeaveField("oid=275910");
                                                                                                                  cm.npc_LeaveField("oid=275913");
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你来啦，#b#ho##k。\r\n我是来向南哈特转达伊黛娜的口信的。", 37, 3003661, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，据伊黛娜说，那个巨大的怪物\r\n是笼罩在这一带的迷雾的根源。", 37, 3003661, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#所以也许有办法可以把同伴们救出来。\r\n如果能打倒那个怪物，驱散迷雾的话。", 37, 3003661, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果能……哈……打倒那个怪物的话……\r\n……实话说，我很害怕。要是再次见到那个怪物，我……", 37, 3003661, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 610);
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -2863, -30);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#咳……#b#ho##k，我们还能活着回去吗？\r\n原本我相信我们能赢……现在我也不确定了。", 37, 3003617, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……我害怕，虽然从小就拿着剑走上了战场，\r\n但这还是第一次……我感觉到了死亡的气息……", 37, 3003617, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 1050);
                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1500, 7000, -3812, -30);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(9000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=275911");
                                                                                                                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;mPark75=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
                                                                                                                                          cm.sendNormalTalk_Bottom("(这是个拯救被虚空波涛卷走的同伴的机会，\r\n也是前往黑太阳的机会……)", 57, 0, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("（……但是士兵们大部分都失去了斗志。\r\n在这种绝境之下，希纳斯到底会如何选择呢？）", 57, 0, true, true);
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
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(993060057, 0, false);
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