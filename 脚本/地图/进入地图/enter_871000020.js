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
      cm.npc_ChangeController(9400931, "oid=21204654", -25, 265, 32, -75, 25, 0, true, false);
      cm.npc_SetSpecialAction("oid=21204654", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=21204655", 25, 265, 32, -25, 75, 0, true, false);
      cm.npc_SetSpecialAction("oid=21204655", 'summon', 0, 0);
      cm.npc_ChangeController(9400934, "oid=21204656", 90, 265, 32, 40, 140, 1, true, false);
      cm.npc_SetSpecialAction("oid=21204656", 'summon', 0, 0);
      cm.npc_ChangeController(9400932, "oid=21204657", 180, 265, 32, 130, 230, 1, true, false);
      cm.npc_SetSpecialAction("oid=21204657", "summon", 0, 0);
      cm.npc_ChangeController(9400935, "oid=21204658", 230, 265, 32, 180, 280, 1, true, false);
      cm.npc_SetSpecialAction("oid=21204658", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=21204659", -210, 290, 7, -260, -160, 0, true, false);
      cm.npc_SetSpecialAction("oid=21204659", 'summon', 0, 0);
      cm.npc_ChangeController(9400929, "oid=21204660", -290, 265, 32, -340, -240, 0, true, false);
      cm.npc_SetSpecialAction("oid=21204660", "summon", 0, 0);
      cm.npc_ChangeController(9400928, "oid=21204661", -220, 265, 32, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=21204661", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -50, 310]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fs20#杰弗里家"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=21204660", 1, 100, 100);
            cm.npc_SetForceMove("oid=21204661", 1, 80, 100);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
            cm.sendNormalTalk_Bottom("#face2##h0#，埃尔宾~！你来得正好！", 37, 9400925, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#现在都聚齐了呢，呵呵", 37, 9400922, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#主人公还非得迟到啊？", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b抱歉来晚了~~！杰弗里的家真是漂亮啊？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#呵呵，我也没怎么装饰。请尝尝这些食物吧！番茄芝士沙拉和豆奶奶油意面，甜点是芒果蛋挞和胡萝卜蛋糕！", 37, 9400925, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#b这是你自己做的？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#是的，这里的蔬菜真的很新鲜！种类也很多，这里简直就是天堂！", 37, 9400925, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#这个真的很好吃！", 37, 9400920, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=21204658", -1, 80, 100);
                            cm.sendNormalTalk_Bottom("#face1#请多吃点，艾米！大家如果觉得不够，请随时告诉我！", 37, 9400925, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=21204658"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face1#哇啊啊~？真的好柔软啊！", 37, 9400926, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=21204655", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#…", 37, 9400925, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21204656"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.npc_setForceFlip("oid=21204656", 1);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=21204657"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("#face0#…", 37, 9400923, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b…", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#…", 37, 9400922, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#face0#…', 37, 9400924, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=21204657"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.sendNormalTalk_Bottom("#face0#哈哈哈，杰弗里的时尚观念还真是特别。", 37, 9400923, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.askMenu_Bottom("#b(……！我要说什么呢……)\r\n#b#L0#最近好像正流行动物耳朵和尾巴呢。#l\r\n#L1#尾巴真是可爱呢，下次也请借给我玩玩吧。#l\r\n#L3#我也认识尾巴很柔软的朋友！#l", 57, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#呵呵……", 37, 9400922, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=21204656", -1);
                                                          cm.sendNormalTalk_Bottom("#face0#嗯……你们是怎么想的？", 37, 9400922, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=21204655", 1);
                                                            cm.sendNormalTalk_Bottom("#face0#说吧。", 37, 9400924, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……其实……我们从一开始就看出来了。杰弗里你并不是平凡的人类……", 37, 9400922, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#虽然我们都很害怕，但是我们相信艾丹和#h0#，所以大家都没说什么。他们肯定也是知道的，但还是带你来了。", 37, 9400922, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#在过去的几天里，我们一直在观察你的言行，我们现在已经做好准备接纳你了。", 37, 9400922, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#…", 37, 9400925, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……凯，凯尼斯你在说什么……", 37, 9400923, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#不，艾丹。不用再为了我说谎了。", 37, 9400925, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#杰弗里……", 37, 9400923, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=21204656", 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=21204656", 1, 200, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=21204658", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=21204657", 1);
                                                                                      cm.sendNormalTalk_Bottom("#face0#…#h0#……", 37, 9400923, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b没关系的，艾丹。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.updateInfoQuest(64625, "start=1;wolf=2");
                                                                                          cm.npc_setForceFlip("oid=21204656", -1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=21204656", -1, 50, 100);
                                                                                            cm.sendNewEffects(13, [2000, 100, 0, 0, 0]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400931, 9897148);
                                                                                                cm.effect_NormalSpeechBalloon("!!!", 0, 0, 0, 2000, 9400933, 9897148);
                                                                                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400932, 9897148);
                                                                                                cm.effect_NormalSpeechBalloon("!!!", 0, 0, 0, 2000, 9400928, 9897148);
                                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400929, 9897148);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('#face3#…', 37, 9400925, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=21204658", 1, 70, 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=21204658"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                        cm.sendNormalTalk_Bottom("#face1#太帅气了！", 37, 9400926, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#毛好软啊！", 37, 9400926, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21204661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.sendNormalTalk_Bottom("#face3#特……特鲁迪，原来你喜欢这种啊。我……我也喜欢柔软的东西。", 37, 9400920, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#毛……是种不错的材料呢。", 37, 9400924, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你，你别说这么可怕的话啊，米兰达？", 37, 9400923, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom('#face1#呵呵', 37, 9400922, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('#face1#呵呵呵', 37, 9400926, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_SetForceMove("oid=21204654", 1, 100, 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#杰弗里……", 37, 9400922, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#看到你现在的样子，我就觉得你之前的生活肯定并不平坦。", 37, 9400922, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#欢迎你成为我们的邻居。为了能让你过上梦想中的生活，我们都会尽全力帮助你的。", 37, 9400922, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#……呜呜……凯尼斯……啊啊啊，嗷呜！", 37, 9400925, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#我，一定会成为一个好邻居的，呜呜……", 37, 9400925, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.eventSKill(0);
                                                                                                                                        cm.warp(871000000, 1);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.npc_LeaveField("oid=21204654");
                                                                                                                                        cm.npc_LeaveField("oid=21204655");
                                                                                                                                        cm.npc_LeaveField("oid=21204656");
                                                                                                                                        cm.npc_LeaveField("oid=21204657");
                                                                                                                                        cm.npc_LeaveField("oid=21204658");
                                                                                                                                        cm.npc_LeaveField("oid=21204659");
                                                                                                                                        cm.npc_LeaveField("oid=21204660");
                                                                                                                                        cm.npc_LeaveField("oid=21204661");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.forceCompleteQuest(64625);
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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