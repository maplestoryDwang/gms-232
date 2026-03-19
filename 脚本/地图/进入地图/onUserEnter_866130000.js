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
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390383, "oid=2272322", -622, -529, 33, -672, -572, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272322", "summon", 0, 0);
      cm.npc_ChangeController(9390382, "oid=2272323", -652, -529, 33, -702, -602, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272323", "summon", 0, 0);
      cm.npc_ChangeController(9390306, "oid=2272324", -661, -526, 33, -711, -611, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2272324", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("现在该怎么办?\r\n不能一直这么下去啊。", 3, 9390383, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("现在再怎么消灭下边的怪物,或许还会像刚才一样,出现什么其他怪物呢,老大。", 1, 9390383, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我觉得,我觉得,堵住进入村庄的门不行吗?", 1, 9390382, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("但是想要关闭门的话,需得爬到那个岗楼上转动控制杆才行。\r\n不过下边的怪物太多,因此想要靠近那里则非常危险。", 3, 9390382, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我也不知道该怎么过去,能爬到岗楼的梯子也被毁了,所以现在进退两难。", 1, 9390383, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("这个时候要是能飞上天就好了……", 3, 9390383, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("布兰,在这里捣乱很危险,会掉下去的!", 1, 9390305, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("没关系,这棵树我每天都在爬。呃…… 啊……", 1, 9390306, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [800, -470, -50, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/23"], [800, -320, -50, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg1/5"], [800, 0, -100, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2272324", "falling", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2272324");
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/18"], [2600, -189, 0, 1, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -604, -250);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                              cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/19", 1, 1, 1, 0, 0);
                                              cm.updateInfoQuest(65890, "count=518;todayCount=488;lastDate=20210530");
                                              cm.updateInfoQuest(65890, "count=518;todayCount=518;lastDate=20210530");
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("BgmBT.img/FightingPinkBeenHawk", 0, 0);
                                                cm.npc_ChangeController(9390306, "oid=2272360", -690, -526, 36, -740, -640, 0, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=2272360", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/19", 1, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(9390384, "oid=2272362", -330, -529, 37, -380, -280, 1, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2272362", "summon", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk('哇!伊卡来啦!', 1, 9390382, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("哼,在这里干什么呢?你们这些笨蛋。", 1, 9390384, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("你来啦,姐姐! \r\n 我正等着你呢。", 1, 9390383, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/22"], [800, 0, -100, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("嘿嘿?拉伊的态度变了哦。", 3, 9390383, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("拉伊,波波。阿尔所说的那个孩子在哪里?", 1, 9390384, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("就在前边啊,姐姐。", 1, 9390383, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2272362", "attack1", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("(啊……好吓人的眼光……)", 3, 9390383, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("那么,在哪里呢?", 1, 9390384, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("被,被否定啦!", 3, 9390384, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("我觉得,我觉得,他就是阿尔所说的小孩。\r\n刚才还和波波结下守护契约一起战斗呢,应该挺厉害的。嘿嘿嘿。", 1, 9390382, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("什么啊?已经签订契约啦?\r\n拉伊你也是吗?", 1, 9390384, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("呃!那,那个姐姐啊……看那样,还蛮勇敢的……", 1, 9390383, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("真烦人!一号大笨蛋! \r\n 我们寻找我们潜在的主人都已经100年了呢! \r\n 结果你居然和那种小鬼签订契约?", 1, 9390384, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("美丽的小姐。不要再教训拉伊和波波了。虽然不知道是什么原因,不过要是因为我的话,我替他们道歉好了。\r\n 当务之急是先拯救我们的村落才是。\r\n 求你帮帮我们吧。", 3, 9390384, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("看,你看,姐姐! \r\n 这就是不仅心灵美,而且又敏锐的最强的老大。", 1, 9390383, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("真烦人!!! \r\n 总之,现在当务之急的是像那个孩子说的那样,先救这里的人们再说。\r\n 拉伊,那么该做什么呢?", 1, 9390384, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("姐姐要是和老大签订契约并提供力量的话……\r\n就可以飞到那岗楼上,继而就可以关闭进入村庄的门。", 1, 9390383, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=2272362", "attack1", 0, 1);
                                                                                                    cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Eka1", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("#b(啊……这次又打拉伊的主意呢……)#k", 3, 9390383, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/22"], [800, -80, -150, 1, 0, 0, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("叫#b#h0##k没错吧？\r\n反正,那些二货们已经签订了契约,而且又没什么时间,那我就和你签契约好了。\r\n不过你可别误会,这并不意味着我已经完全接受你了？\r\n方法你都已经知道了吧？", 1, 9390384, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk('是,来击掌吧!!!', 3, 9390384, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=2272362", "special2", 0, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_OneTimeAction(2014, 1000);
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/13"], [700, 60, -529, 1, 0, 0, 0, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("ShamanBTTuto/Contract", 100);
                                                                                                                    cm.sendNormalTalk('嚓,嚓,嚓!!', 3, 9390384, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("伊卡。既然现在已经签订了契约,就把我……", 3, 9390384, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("啊哈哈哈……姐姐。我们老大有点不懂事。请稍等……", 1, 9390383, true, true);
                                                                                                                          cm.updateInfoQuest(65890, "count=548;todayCount=518;lastDate=20210530");
                                                                                                                          cm.updateInfoQuest(65890, "count=548;todayCount=548;lastDate=20210530");
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk("嘿,老大。那个姐姐还是挺有性格的。看来你得从称呼开始,好好整理一下了。", 1, 9390383, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk("怎么帮?和伊卡……一起?", 3, 9390383, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("哼,菜鸟小鬼。\r\n 既然已经改了称呼,在我改变主意之前,还是赶紧动身为好。是想到那个岗楼上边是吧?", 1, 9390384, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk("啊,嗯……不是啊!", 3, 9390384, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk("知道了。虽然麻烦,但是谁让这是签订契约后的第一个委托呢。", 1, 9390384, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk("看来得从这里飞走,或者使用技能飞走了。", 1, 9390384, true, true);
                                                                                                                                    } else if (status === V++) {
                                                                                                                                      cm.updateInfoQuest(59021, "fly=0");
                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                                      cm.dispose();
                                                                                                                                      cm.warp(866131000, 0, true);
                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                      cm.npc_LeaveField("oid=2272322");
                                                                                                                                      cm.npc_LeaveField("oid=2272323");
                                                                                                                                      cm.npc_LeaveField("oid=2272360");
                                                                                                                                      cm.npc_LeaveField("oid=2272362");
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}