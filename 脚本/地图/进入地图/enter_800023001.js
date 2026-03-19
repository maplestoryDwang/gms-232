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
      cm.forceCompleteQuest(58756);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=2;6=1;7=4;8=1;9=4");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1;5=1;6=1;7=1");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=2;6=1;7=1;8=1;9=4");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111016, "oid=3837958", 2015, -275, 11, 1965, 2065, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3837958", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.sendNormalTalk_Bottom("(……嗬！妖怪跑到蘑菇神社来了！)", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.cameraSwitch_PushSwitchMoveInfo("camera0", 1000);
              cm.npc_SetForceMove("oid=3837958", -1, 50, 100);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3837958"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……请问……这里是不是有位会给妖怪帮忙的年轻人……？", 37, 9111016, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啥？呃，也算不上帮忙吧……\r\n（难不成说的是竹野子？）", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9111001, "oid=3838175", 2710, -275, 8, 2660, 2760, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3838175", 'summon', 0, 0);
                    cm.npc_SetForceMove("oid=3838175", -1, 300, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#啊！泉奈！", 37, 9111001, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=3837958", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……竹野子！", 37, 9111016, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3837958"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.npc_SetSpecialAction("oid=3837958", "die1", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1900);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=3837958");
                                cm.npc_LeaveField("oid=3837958");
                                cm.npc_ChangeController(9111007, "oid=3838330", 1965, -275, 26, 1915, 2015, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=3838330", 'summon', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=3838330", 1, 50, 300);
                                  cm.npc_SetForceMove("oid=3838175", -1, 50, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3838330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("咦，她俩认识啊？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#竹野子！这段时间过得好吗？", 37, 9111007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#谢谢你惦记我，泉奈。现在我跟姐姐两人住在这蘑菇神社里。", 37, 9111001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#自从离开村庄后，妖怪们就不怎么来找我了，有点冷清呢。\r\n不过这边跟村里不一样，比较清静，我们日子过得很安详。", 37, 9111001, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#唉，可怜的竹野子……！", 37, 9111007, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#之前我一直担心如果我们来见你，又会发生像之前在村里那样不幸的事，\r\n所以虽然听说你在这里，却没能早点过来……。", 37, 9111007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#能再次见面，我真是太开心，太激动了。\r\n我好想你啊！", 37, 9111007, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#我也一样，真的很开心再次见到你！我很想念你们……！", 37, 9111001, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3838330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#对了，你过来是有什么事吗……我一直没有狐妖们的消息。", 37, 9111001, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#啊……也没什么事，我来找你，还是为了他……", 37, 9111007, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#自从你们姐妹俩离开村庄那天起，我的挚友，也是五行守护者暗就变成了蛰居者……！", 37, 9111007, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#什么？你说五行守护者变成了蛰居者……？！？！", 37, 9111001, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.sendNormalTalk_Bottom("这妖怪也是形形色色的啊……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3838330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.sendNormalTalk_Bottom("#face0#是的……已经5年了。自那天之后，他就把自己关在他的山洞里，不再领导我们了。\r\n所以现在狐妖们都各自散去，像野狐狸一样四处游荡……", 37, 9111007, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这可真糟糕……。", 37, 9111001, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(9111000, "oid=3840753", 1150, -275, 44, 1100, 1200, 0, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=3840753", "summon", 0, 0);
                                                                      cm.npc_SetForceMove("oid=3840753", 1, 400, 150);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#那边干嘛这么吵。", 37, 9111000, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=3838330", -1);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3838330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('嗬！', 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……行了。你去把那个不成器的狐妖救出来吧。", 37, 9111000, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……我收到启示，说地之五行会自己找上门来……。", 37, 9111000, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#我不懂得什么解救蛰居者的办法，但这次获得五行的关键好像就在那只妖怪身上，你按你的方式解决此事吧。", 37, 9111000, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                        cm.sendNormalTalk_Bottom("#face1#姐姐……谢谢你。", 37, 9111001, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=3838330", 'bow', 0, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#实在非常感谢！巫女姐姐！", 37, 9111007, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……但是竹野子你绝对不许外出。你留在蘑菇神社。", 37, 9111000, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3838175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0##h0#，辛苦你走一趟吧。", 37, 9111000, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("呃……我吗？？？？", 57, 0, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('……我知道了，巫女。', 57, 0, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢！真的很感谢你们！", 37, 9111007, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=3838330", "bow", 0, 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=3838330", 'bow', 0, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=3838330");
                                                                                                                    cm.npc_LeaveField("oid=3838330");
                                                                                                                    cm.npc_LeaveField("oid=3838175");
                                                                                                                    cm.npc_LeaveField("oid=3838175");
                                                                                                                    cm.npc_LeaveField("oid=3840753");
                                                                                                                    cm.npc_LeaveField("oid=3840753");
                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.warp(800000000, 2, false);
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