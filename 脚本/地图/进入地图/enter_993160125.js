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
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -51, -139);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
              cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/8/skeleton", "02_gone", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -32, -140);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3001654, "oid=14634588", 566, -186, 23, 516, 616, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=14634588", "summon", 0, 0);
                          cm.setNPC_Fadein(3001654, 1);
                          cm.sendNormalTalk_Bottom("#face5#就让我去将道术集掏出来看看……呵呵。", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我打开师父的抽屉，可却没有看到本应该在里面的道术集，\r\n上一次明明还在来着……）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face7#诶，没有嘛？难不成是因为精神被扰乱，无法专注！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#……你在找这个吗？", 37, 3001654, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 566, -140);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face7#！？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=14634588");
                                              cm.npc_ChangeController(3001654, "oid=14635338", 13, -158, 9, -37, 63, 1, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=14635338", "summon", 0, 0);
                                              cm.setNPC_Fadein(3001654, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -32, -140);
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
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face7#师，师父！？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#……不对，这里是梦境，不过为什么师父他……\r\n也对，就算是在做梦，毕竟这里是道观，就算师父在也没什么好奇怪的。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#你慌什么，跟看见鬼似的，\r\n你要道术集做什么？……难不成你打算闯什么祸？", 37, 3001654, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face5#祸……已经闯了，我正想着为了学习新道术，\r\n暂时借师父的道术集一用呢。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我吐露了之前所发生的一切。\r\n反正都是一场梦，不如早死早超生吧。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#哈……是这样啊。", 37, 3001654, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#狠狠打我吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#可恶的家伙！", 37, 3001654, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face7#……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#我不会打你的，小子，毕竟覆水难收嘛。\r\n总得为将来考虑考虑。", 37, 3001654, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face7#……你不生气吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#这是为闯祸付出的代价啊！我认为这样惩罚就算够了，\r\n就是你要背负重担。", 37, 3001654, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face5#那为什么要挡住通往道观的入口呢？\r\n我怎么找都没有发现能走的路啊？所以才会来到这里。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#你以为仙界是随便什么人都能进出的吗？\r\n那里对未经允许的人而言可是不得进入的禁域。", 37, 3001654, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face7#仙界！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#嗯……既然你都已经能施展道术了，现在我也可以说了，\r\n关于你的过去还有仙界的事情。", 37, 3001654, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#我是收到仙界召唤的仙人，匡扶尘世正义便是我的职责所在，\r\n在过去格兰蒂斯混乱时期，我的每一天都是在战场上度过的。", 37, 3001654, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#然后某一天，我在化为废墟的村里听到了老虎的呜咽声，\r\n那是个出生还没多久的小家伙，那便是你。", 37, 3001654, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#从周围的情况来看，除了你之外，其他同伴貌似都咽了气，\r\n我便怀着恻隐之心，将你带来了仙界。", 37, 3001654, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#你的成长日新月异，不知从哪天起你开始求我教你道术，\r\n而那一天我便看到了你体内所蕴含的无限道力。", 37, 3001654, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#但是那道力很危险，那股力量相当狂野，可能会完全不受控制，\r\n所以我才会决定封印你的道力。", 37, 3001654, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#所以……就算再怎么努力也还是没用啊？\r\n那要是当初能早点告诉我该多好啊？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#那就不该在修炼上偷懒吧！？", 37, 3001654, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#话虽如此……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#总之现在总算领悟道义，解除了封印，\r\n道术似乎也达到了一定境界。", 37, 3001654, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face5#搞不好现在比师父都要厉害。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#这个讨厌的家伙……", 37, 3001654, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#很抱歉我不该自作主张骗你过来的，现在想来，\r\n当初我应该更信任你一点才是，你一定也挺郁闷的吧。", 37, 3001654, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#师父……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#来，那为了表示歉意，我就送你全新的法术和礼物，\r\n这样你能原谅我这个没出息的师父吗？", 37, 3001654, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face9#那什么，就这样吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（师父伸手抚上我的头，\r\n只见眼前一片明亮，我的脑海里便接收到了全新的法术。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#这将是我教你的最后一道法术，\r\n自此自后，一切就要靠你自己了，努力成长吧。", 37, 3001654, false, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face10#别担心，总有一天我会超越师父的。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#好啊，你可别失了这份霸气。", 37, 3001654, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face11#再见了，师父……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.forceStartQuest(39554, '');
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
                                                                                                                                                            cm.warp(cm.getNumberFromQuestInfo(39554, "rMap"), 0);
                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                            cm.npc_LeaveField("oid=14635338");
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