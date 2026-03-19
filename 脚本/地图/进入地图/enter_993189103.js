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
      cm.monadForceMove("fire0", 0, 0);
      cm.monadForceMove("fire1", 0, 0);
      cm.monadForceMove('fire2', 0, 0);
      cm.curNodeEventEnd(true);
      cm.克里塞_获得技能();
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
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
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1500, 100);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9062474, "oid=6846892", -1000, 30, 53, -1050, -950, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=6846892", "summon", 0, 0);
                cm.npc_ChangeController(9062475, "oid=6846893", -1080, 30, 53, -1130, -1030, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=6846893", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Text(["#fn黑体##fs18#<焕新城堡>", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哇……", 57, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("走近这么一看，还真是一座#r#e巨大的城堡#n#k啊……？", 57, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 400, 0);
                            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, -1100, 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=0"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=6846892"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=6846893", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=6846893"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("哇！#e#b#h0##k！！！", 37, 9062475, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嘿嘿！我一直在等你！\r\n#fs30##r很高兴见到你！你也很高兴吧？欢迎哦！", 37, 9062475, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b我送过去的驯鹿#k你顺利骑来了吗？", 37, 9062475, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=6846892", -1, 10, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              cm.npc_LeaveField("oid=6844948");
                                              cm.npc_LeaveField("oid=6844949");
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("冷静点，里奥，\r\n人家好不容易过来，可不能吓着人家。", 37, 9062474, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("啊……不好意思！\r\n我叫#b里奥#k！", 37, 9062475, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呵呵，#e#b#h0##k，\r\n你终于来了啊，我叫#b勒内#k。", 37, 9062474, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("这里是#r<焕新城堡>#k，\r\n次元重叠处所映射出的虚无#b#e幻影#n#k。", 37, 9062474, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你们就是焕新城堡的精灵啊，\r\n不过……什么叫#b幻影#k？", 57, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("这里是伴随着#b两个不同的次元#k合成一体后形成的空间！\r\n随着次元稳定下来，焕新城堡也会再次消失的！", 37, 9062475, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("呵呵，所以才邀请了大家，\r\n已经有很多人接到邀请，到达焕新城堡了！", 37, 9062474, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("那我就给你介绍一下已经来了的人吧。", 37, 9062474, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                                                        cm.npc_LeaveField("oid=6846892");
                                                                        cm.npc_LeaveField("oid=6846893");
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -500, -100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("自己一个人也能乐在其中的人！来这里~", 37, 9062461, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("恐怕没人比我更会玩游戏了吧？！", 37, 9062462, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("大家都#b齐聚在这里玩游戏#k！", 37, 9062475, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("什么游戏……什么像幼稚的小朋友，\r\n我会成为#r成功的商人#k的！", 37, 9062463, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("好好玩#b游戏#k就能获得#i4310307:##b#t4310307##k！", 37, 9062475, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("使用#i4310307:##b#t4310307##k，可以从那位商人界的新星那里买到#r超棒的道具#k。", 37, 9062474, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -250, -100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("嗯……我真的能感受到一股强大的力量，好满足啊。", 37, 9062459, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("那个人正在寻找一种拥有强大力量的宝石，\r\n#i4310308:##r#t4310308##k。", 37, 9062474, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("听说消灭#b强大BOSS#k，可以创造出#i4310308:##r#t4310308##k！", 37, 9062475, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 400, -100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("哟吼……你手上还真是有好东西呢！", 37, 9062457, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("呵呵，冒险岛世界有很多珍贵的东西，\r\n格兰蒂斯也有很多神秘的物件。", 37, 9062455, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("这里有#r各式各样的商人#k！", 37, 9062475, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("那些商人是焕新城堡所形成的力量源泉，\r\n给他们#i4310306:##b#t4310306##k，就能得到#r珍贵的物品#k。", 37, 9062474, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, 700, -100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_ChangeController(9062453, "oid=6848894", -230, -320, 9, -280, -180, 0, false, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=6848894", 'summon', 0, 0);
                                                                                                                      cm.npc_ChangeController(9062454, "oid=6848895", 230, -320, 10, 180, 280, 1, false, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=6848895", "summon", 0, 0);
                                                                                                                      cm.sendNormalTalk_Bottom("唯有坚持不懈的训练才能练就守卫和平的力量。", 37, 9062451, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("在获邀的地方也有人在认真训练。", 37, 9062474, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 0, -300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("这里真的聚集了#b冒险岛世界#k和#r格兰蒂斯#k的各式各样的人呢……", 57, 0, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("那当然！你来得太晚了！！", 37, 9062475, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 800, 4000, 0, -360);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("呵呵，希望#r焕新城堡#k也能给你留下美好的回忆。", 37, 9062474, false, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("和我们一起在#r焕新城堡#k共度美好时光吧！", 37, 9062475, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
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
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                    cm.克里塞_获得技能();
                                                                                                                                                    cm.updateInfoQuest(501250, 'mapTuto=3');
                                                                                                                                                    cm.npc_LeaveField("oid=6848894");
                                                                                                                                                    cm.npc_LeaveField("oid=6848895");
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(993189100, 0, false);
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