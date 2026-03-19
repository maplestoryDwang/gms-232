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
      cm.npc_ChangeController(3001656, "oid=375365", -4, 35, 32, -54, 46, 0, false, 0, false);
      cm.npc_ChangeController(3001686, "oid=375366", 618, 35, 64, 591, 691, 2, true, 0, false);
      cm.npc_ChangeController(3001687, "oid=375367", 812, 35, 66, 713, 813, 4, true, 0, false);
      cm.npc_ChangeController(3001688, "oid=375368", 145, 35, 32, 78, 178, 5, true, 0, false);
      cm.npc_ChangeController(3001689, 'oid=375369', 251, 35, 64, 158, 258, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.setAmbience("Ambience.img/town", 200, 60);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(29, 999999);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 355, -668);
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
              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 355, 20);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Text(["#fn黑体##fs18#第二天，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……所以说你所谓的计划到底是什么？", 37, 3001651, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face11#我正在构思一个超绝的点子，你以为作战计划三下五除二就能想出来吗？\r\n再稍等等。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#从法堂逃出来之后已经过去一天了，时间所剩不多了啊。", 37, 3001651, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face10#都说心急吃不了热豆腐。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#唔……", 37, 3001651, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#相信我吧，我都想好了。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（……虽然我那般大放厥词，可其实我的计划就是直接离开村庄，\r\n我冷静下来想了想，便得出了这个结论。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（既然那帮家伙的目的是吸收精气，\r\n前辈眼下应该不会出什么事。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（最重要的是，就算我不出马，也会有别的解决师接手，\r\n只要将迄今为止打听到的消息转手给情报商人就好。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（反正打从一开始我也没有抱着什么誓死保卫村庄的想法……\r\n崇高理想，也是时候该放弃了。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（这件事就算不用我插手也能解决，\r\n不过……不过不知为何，我还是觉得心情沉重……）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#哎，不管了！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……先吃完饭再考虑吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 355, 20);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('10', "Effect/Direction9.img/HoyoungStory/10", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哧溜哧溜……哧溜哧溜……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#喏，给，这可是专门特供给解决师你的小菜哦，\r\n吃下这些菜后可要加油啊，呵呵。", 37, 3001656, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#谢谢，今天也依然美味呢。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#呲溜……呲溜……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#呵呵呵，多吃点。", 37, 3001656, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（村庄今天也是一片祥和呢……）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('21', "Effect/Direction9.img/HoyoungStory/21", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你不是还夸好吃嘛，怎么突然将勺子放下了？\r\n你不是喜欢吃泡饭的吗？", 37, 3001651, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我说，饕餮。你觉得我们先抓到其他地方的怪物，\r\n之后再回这座村庄怎么样？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#要是能回收所有的怪物倒是无妨……\r\n不过，你为什么突然会这么问？", 37, 3001651, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#没什么，你就当没听见吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#不知为何，今天没什么胃口呢，我刚刚放盐了吗……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（没错，任务还没有危险到需要豁出性命的地步，\r\n不过这个决定却重要到足以决定日后的道士之路。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（是找到窍门，走上人人夸赞的康庄大道，\r\n还是另辟荆棘之路，搞不好会沦落为命运悲惨的英雄。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#别再放了，肯定咸过头了，混蛋。", 37, 3001651, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（虽说鼠精变强了，但若是全力应对，还是有胜算的，\r\n这点道理总不至于不懂吧。）", 37, 3001651, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（已经在动摇了啊……小老虎，\r\n我倒要看看，你小子会做出什么样的选择。）", 37, 3001651, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('10', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('21', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
                                                                                                              cm.forceCompleteQuest(39599);
                                                                                                              cm.forceCompleteQuest(39532);
                                                                                                              cm.gainExp(1084);
                                                                                                              cm.gainExp(3511);
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
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.warp(410000200, 2, false);
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