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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=78347531", -150, 280, 9, -200, -100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=78347531", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=78347532", -600, 280, 8, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=78347532", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -240, 330]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呼，这样暂时好像安全了。", 37, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=78347532", 1, 225, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#喂！墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "！\r\n哦~？这不是素笑姑娘吗！难道你是出来修行的吗？", 37, 9401278, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#风乞丐大叔！呵呵，是的！我终于接到任务了。", 37, 9401277, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=78347531", -1, 25, 100);
                        cm.sendNormalTalk_Bottom("#face1#真是可喜可贺！\r\n好的，让我看看……", 37, 9401278, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukhyunIcon/0", "oid=78347532"], [2000, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face1#原来在这里！来，姑娘，我送你一份薄礼！", 37, 9401278, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#哎呀，太感谢了，大叔！", 37, 9401277, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##b你一直把这种东西带在身上吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#因为不知道什么时候需要，也不知道用来干什么。啊！难道你？", 37, 9401278, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#在哪来着？好像放在这里了啊……", 37, 9401278, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1##b虽然不知道是什么，但我可不想要放在那种地方的东西……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#找到了！", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/MukhyunIcon/1", "oid=78347532"], [2000, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.sendNormalTalk_Bottom("#face1#呵呵，别客气，收下这个吧！", 37, 9401278, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1##b……没关系。请慢用……但是到底有什么事呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#哎呀，墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "，听说你到山下来了，我当然应该来打个招呼！", 37, 9401278, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你难得过来一趟，我来给你仔细讲讲村里的情况。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=78347532", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Mukhyun/0"], [999999, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                      cm.Npc_Fadeout("oid=78347532", 0, 300);
                                                      cm.Npc_Fadeout("oid=78347531", 0, 300);
                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 3000);
                                                      cm.sendNewEffects(13, [20000, -2000, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##b昨天遇到的时候，怎么什么都没说呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#呵呵呵，我是个讲商业道德的人！\r\n不能把事情推给刚做完事回来的人，呵呵。", 37, 9401278, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1##b啊……好的。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#呵呵，那是什么反应？\r\n这个先不说。野兽们变得狂暴，连山魔鬼也跑到了村里的事情，你听说了吗？", 37, 9401278, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#嗯！我接到的任务就是消灭掉那些狂暴的野兽！", 37, 9401277, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#没错。山魔鬼原来生活在阴森的地方。那不是普通阴暗、潮湿的地方，而是笼罩着魔气的地方。\r\n一般来说，无人管理的墓穴或者冤魂栖息的地方常常会笼罩着魔气。", 37, 9401278, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#但是！山魔鬼跑到活人居住的村子里来？这可真是闻所未闻。\r\n野兽们变得狂暴，很可能是因为那些山魔鬼。", 37, 9401278, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##b难道是山魔鬼在村里感觉到了魔气？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#那个嘛，野兽比人类敏感，也许感觉到了我们没能感觉到的东西。", 37, 9401278, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#而且偏偏在这个时候，出现了很多陌生的外乡人……", 37, 9401278, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=78347531");
                                                                              cm.npc_LeaveField("oid=78347532");
                                                                              cm.sendNormalTalk_Bottom("#face0##b外乡人不是一直都有吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#没错。但一直在后巷中避人耳目的外乡人应该很少吧？", 37, 9401278, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0##b后巷？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#对了！后巷。\r\n我似乎嗅到了一点异常的味道。", 37, 9401278, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##b看来必须调查一下到底是怎么回事。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#哎呀，那种事情就交给我吧！\r\n后巷就像是我家一样。", 37, 9401278, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b好的，请多多关照。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#我风乞丐从不会欠人饭钱，所以不用担心！呵呵呵。", 37, 9401278, true, true, 1);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(875003012, 0, true);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}