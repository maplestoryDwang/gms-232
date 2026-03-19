var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = 'action' + cm.getMapId();
  eval(V)(f, E, e);
}
function action303090000(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(303090010, 0, false);
        }
      }
    }
  }
}
function action303090010(f, E, e) {
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
      cm.npc_ChangeController(1101001, "oid=21173", 384, 88, 8, 334, 434, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 180, 530, 70);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(11187);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("…出大事了啊。", 5, 2520013, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("…没有女皇的话，#b神兽#k的力量也就没用了……", 5, 2520013, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("…能够接受我力量的存在，真的都不在了吗？", 5, 2520013, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("黑魔法师被封印后的数百年。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("\r\n\r\n#fnBatang#―――――――#fn黑体# 圣地一直都没有女皇。", 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n#fs40#章节 II : 成为女皇的方法", 1);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(303090020, 0, false);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090020(f, E, e) {
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
      cm.npc_ChangeController(2520011, "oid=21175", 158, -192, 2, 108, 208, 1, false, 0, false);
      cm.npc_ChangeController(2520010, "oid=21176", -337, -197, 1, -387, -287, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("怎么会这样。黑魔法师的气息越来越强，圣地女皇的血脉却断绝了……", 5, 2520012, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这件事，绝不能被外面的人知道。", 5, 2520011, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("当然。但是这件事不知道能隐瞒到什么时候……如果数百年前被封印的#r#e黑魔法师#k#n复活的话，又或者在那之前，有人觊觎圣地的话，可是会出大事啊。", 5, 2520012, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#e所以说，必须在那之前，找到新的女皇。#n", 5, 2520000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("？？！谁？", 5, 2520012, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(2520023, "oid=3088197", -210, -14, 10, -260, -160, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3088197", "summon", 0, 0);
                    cm.npc_ChangeController(2520001, "oid=3088198", -240, -14, 10, -290, -190, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=3088198", 'summon', 0, 0);
                    cm.npc_ChangeController(2520006, "oid=3088199", -320, -14, 10, -370, -270, 0, false, 0, false);
                    cm.npc_SetSpecialAction("oid=3088199", 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("阿莉亚女皇没有留下直系后人，就去世了。从那时起，数百年间，女皇的血统一直在被弱化。", 5, 2520000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("最近圣地的高度下降这件事就是证据……我的推测应该没错吧？", 5, 2520000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……？！ 你究竟？", 5, 2520012, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("忘记介绍了。这位淑女是#b希纳斯#k小姐。另外，请叫我#b南哈特#k。", 5, 2520000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b奇姆#k，，怎么回事！这么秘密的职位，怎么能给个外人？", 5, 2520011, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("警卫队长，这位并不是外人。神兽已经亲自允许他出入圣地了。", 5, 2520006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#b神兽#k？", 5, 2520012, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("是的，这位小姐身上具有#e女皇的血统#n。", 5, 2520006, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2"], [1900, 253, -337, 1, 0, 1, 1, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2"], [1900, -179, -313, 1, 0, 1, 1, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2"], [1900, -419, -280, 1, 0, 1, 1, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("小姐，这是真的吗？", 5, 2520011, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("……这个……我也不是很清楚。但是，我过逝的母亲曾说过，我们祖先的故乡是在叫做圣地的地方。", 5, 2520001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("压低的声音，小心翼翼的表情。不过，那里的所有人，都能够察觉到她身上流淌着女皇的血统。", 5, 2520000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("因为她身上的气质，是无论如何也隐藏不了的。不管怎样，命运是不会骗人的。", 5, 2520000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……啊，失礼了。我们还是继续进行刚才的话题吧。", 5, 2520000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("她身上流淌着当今冒险岛世界上唯一的，也是最强大的女皇的血统。", 5, 2520000, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("真不敢相信，你……预测了这种情况，并通过磁力找到了她吗？", 5, 2520012, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("怎么会这样……你是预言家吗？", 5, 2520011, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("呵呵……不是，我只不过是个农村出身的书虫罢了。", 5, 2520000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("拥有丰富学识和先见之明的我，从那时起，就成了圣地的谋士……", 5, 2520000, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("#fs30#等等，等一下！！到这里！#fs12#", 17, 0, true, true);
                                                                  cm.effect_Voice("Voice.img/Library/Warrior/M/0", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(303090030, 0, false);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090030(f, E, e) {
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
      cm.npc_ChangeController(2520000, "oid=21178", -539, 88, 3, -589, -489, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(420);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(420);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(420);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("我说，#b南哈特#k。你到底想说什么？", 17, 0, false, true);
                cm.effect_Voice("Voice.img/Library/Warrior/M/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("性子还是这么急啊。偶尔试试多点耐心怎么样#h0#？", 5, 2520000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你这是在自我炫耀吗？是在炫耀自己吗？几年不见，你叫我来是为了炫耀你自己吗？我走啦？", 17, 0, true, true);
                    cm.effect_Voice("Voice.img/Library/Warrior/M/2", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("如果真的那么着急的话，我可以告诉你回去最快的路。现在就从这里跳下去就行。", 5, 2520000, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(420);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.inGameDirectionEvent_AskAnswerTime(420);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.sendNormalTalk("#fs18#疯了吗！这可是几千米的高空！#fs12#", 17, 0, false, true);
                            cm.effect_Voice("Voice.img/Library/Warrior/M/3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("呃，做不到吗？ #h0#不是自称是最棒的流浪武士吗？原来不过如此。", 5, 2520000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("咳咳……！", 17, 0, true, true);
                                cm.effect_Voice("Voice.img/Library/Warrior/M/4", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("没错，我就是#h0#,流浪武士。", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("真不知道我是怎么会和南哈特这样的坏家伙扯上关系，总之我现在在圣地。", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(303090040, 0, false);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090040(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction6.img/effect/phantomQuest/back/0", 1, 1, 1, 0, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("漂浮在几千米高空的神秘岛屿，圣地。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("还有，统治圣地的存在，女皇。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("没有女皇，这是非常危险的状况。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("因为女皇不仅仅是一个国家的皇帝，还是庇佑整个冒险岛世界的存在。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("没有女皇的话，就没人能够引导陷入危机的冒险岛世界。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("\r\n\r\n因此，我们打算推选新的女皇#fnBatang#―――――――#fn黑体# 南哈特说。", 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("......嗯，随便。", 0);
                          cm.effect_Voice("Voice.img/Library/Warrior/M/5", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("但是这种话为什么非要叫我来听呢? ", 0);
                            cm.effect_Voice("Voice.img/Library/Warrior/M/6", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("南哈特，一定是在打什么坏主意！", 1);
                              cm.effect_Voice("Voice.img/Library/Warrior/M/7", 100);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(303090050, 0, false);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090050(f, E, e) {
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
      cm.npc_ChangeController(2520000, "oid=21181", -539, 88, 3, -589, -489, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("总之，和这家伙打嘴仗，我是讨不到什么好处的。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("完全不会赢。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("哪怕是赐予这家伙嘴巴的造物主，和他吵上5分钟的话，也会深深反省自己的错误的。", 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("听听他究竟为什么叫我来这里，然后赶紧走人。", 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("南哈特，你居然能找到女皇的血脉，真是太厉害了。哈哈哈！我可是很忙的，那么就……", 17, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你有什么急事吗？", 5, 2520000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嗯，最近传言阿里安特地区发现了神奇的宝物。我已经按捺不住，想马上跑过去看看呢。", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("是吗？我得先向你道歉了。", 5, 2520000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('啊？什么？', 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#h0#你不能去那里。因为你必须在圣地这里停留1年。请你在这里帮助培养女皇。", 5, 2520000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#fs30#……你说什么？！#fs12#", 17, 0, false, true);
                                    cm.effect_Voice("Voice.img/Library/Warrior/M/8", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("经费你无需担心，那么就从明天开始马上……", 5, 2520000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("喂，等一下，谁答应了？不行。我最讨厌待在一个地方了。", 17, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#h0#，你不会是忘了欠我的债了吧？", 5, 2520000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("咳……！", 17, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("事实上，以前曾欠这家伙一条命。", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("……是我疯了。", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("如果早知道你这小子这么坏的话，当初还不如不接受你的帮助呢。", 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("呀，那也不行。虽然很抱歉，但我真的有事要做！我不能在这里停留1年。", 17, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("呃……是吗？", 5, 2520000, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("是……是啊。\r\n\r\n#b(什么嘛，这家伙怎么会这么好说话？)#k", 17, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("那么临走之前先去见见希纳斯吧。她可是未来的女皇，现在先拜访一下，对你没什么坏处。再怎么忙，这点时间应该有吧？", 5, 2520000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("嗯，好。\r\n\r\n#b(怎么回事，奇怪？感觉有股阴谋的味道……？)#k", 17, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("那时候我还不知道。那就是一切苦难开始的……", 1);
                                                                    cm.effect_Voice("Voice.img/Library/Warrior/M/9", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else if (status === V++) {
                                                                      cm.forceCompleteQuest(32605);
                                                                      cm.dispose();
                                                                      cm.warp(303000000, 0, false);
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
function action303090100(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       圣地，春", 1);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.forceCompleteQuest(32606);
      cm.dispose();
      cm.warp(303000000, 0, false);
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function action303090110(f, E, e) {
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
      cm.npc_ChangeController(2520000, "oid=21184", -427, 36, 17, -477, -377, 1, false, 0, false);
      cm.npc_ChangeController(2520001, "oid=21185", -690, 88, 10, -740, -640, 0, false, 0, false);
      cm.npc_ChangeController(2520006, 'oid=21186', -224, 88, 1, -274, -174, 1, false, 0, false);
      cm.npc_ChangeController(2520007, "oid=21187", -155, 88, 4, -205, -105, 1, false, 0, false);
      cm.npc_ChangeController(2520008, "oid=21188", -89, 88, 5, -139, -39, 1, false, 0, false);
      cm.npc_ChangeController(2520009, 'oid=21189', -25, 88, 5, -75, 25, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……好，希纳斯。你知道女皇君临天下，但并不独裁的意思吗？", 5, 2520000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Illus("是说，虽然身处最高位，但并不能强迫地位低的人做事情吗？皇帝的绝对权只有在冒险岛世界的居民意志统一时，才能行使。", 2520001, 5, true, true, 2);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(果然，聪慧啊……懂得举一反三。)", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus("圣地的历史故事真是太有趣了！接下来要学习什么呢？\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/0#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  ", 2520001, 5, true, true, 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(303090200, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090200(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_Monologue("女皇越来越聪明了。", 0);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice.img/Library/Warrior/M/10", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("有时甚至比一般的大人，洞察力还要敏锐。", 0);
        cm.effect_Voice("Voice.img/Library/Warrior/M/11", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("\r\n......即便如此，也还不过是个小女孩。", 0);
          cm.effect_Voice("Voice.img/Library/Warrior/M/12", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("离一名合格的女皇，还有很大距离。", 1);
            cm.effect_Voice("Voice.img/Library/Warrior/M/13", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       圣地，夏", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(303000000, 0, false);
                cm.inGameDirectionEvent_SetHideEffect(1);
                cm.setInGameDirectionMode(false, true, false);
              }
            }
          }
        }
      }
    }
  }
}
function action303090210(f, E, e) {
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
      cm.npc_ChangeController(2520002, "oid=21192", -328, 20, 33, -378, -278, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2520023, "oid=3099073", -476, 78, 3, -526, -426, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3099073", "summon", 0, 0);
      cm.npc_ChangeController(2520006, "oid=3099074", -536, 78, 3, -586, -486, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3099074", 'summon', 0, 0);
      cm.npc_ChangeController(2520007, "oid=3099075", -602, 78, 9, -652, -552, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3099075", "summon", 0, 0);
      cm.npc_ChangeController(2520008, "oid=3099076", -670, 78, 8, -720, -620, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3099076", 'summon', 0, 0);
      cm.npc_ChangeController(2520009, "oid=3099077", -735, 78, 6, -785, -685, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3099077", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -420, 60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Illus("我……看起来怎么样？合适吗？第一次穿这种裙子……", 2520002, 5, false, true, 2);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('真的非常合适。', 5, 2520023, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("真漂亮，小姐！", 5, 2520006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("真是太美了，心脏都跳个不停呢！", 5, 2520007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("就好像是女神降临到了圣地一样！", 5, 2520008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("这种耀眼的美丽，带来无尽的感动，有那么一刹那，感觉就好像踏在了云端一样！", 5, 2520009, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=3099073");
                          cm.npc_LeaveField("oid=3099074");
                          cm.npc_LeaveField("oid=3099075");
                          cm.npc_LeaveField("oid=3099076");
                          cm.npc_LeaveField("oid=3099077");
                          cm.npc_ChangeController(2520023, "oid=3099232", -476, 78, 3, -526, -426, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=3099232", "summon", 0, 0);
                          cm.npc_ChangeController(2520006, "oid=3099233", -536, 78, 3, -586, -486, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3099233", 'summon', 0, 0);
                          cm.npc_ChangeController(2520007, "oid=3099234", -602, 78, 9, -652, -552, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3099234", "summon", 0, 0);
                          cm.npc_ChangeController(2520008, "oid=3099235", -670, 78, 8, -720, -620, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3099235", "summon", 0, 0);
                          cm.npc_ChangeController(2520009, "oid=3099236", -735, 78, 6, -785, -685, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3099236", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [1000, -476, -38, 1, 0, 1, 1, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [1000, -602, -38, 1, 0, 1, 1, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [1000, -735, -38, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [1000, -676, -18, 1, 0, 1, 1, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [1000, -536, -18, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#b(…什么啊。这么大压力？我也要给她一些给力的赞美才行吧……)#k", 17, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.askMenu("别站那儿傻看啊，#h0#也说一句吧？\r\n\r\n#b#L0#宇宙超级无敌美。#l\r\n\r\n#b#L1#虽然是第一次见，但又好像不是第一次见，就仿若水下世界的人鱼闯入了阿里安特的绿洲一样，给人一种介于旧世界和新世界之间的美感。#l\r\n\r\n#b#L2#如果美丽也算一种技能的话，你的美丽不是4级技能，而是神圣技能。为你如花般美丽的水晶瞳孔，干杯。#l", 5, 2520000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Illus("……？虽然没明白你在说什么，但我就把它当做对我的赞美了。谢谢你，#h0#。\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/1#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  ", 2520002, 5, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(303090300, 0, false);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090300(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_Monologue("希纳斯正在逐渐具备女皇所应有的德行。", 0);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice.img/Library/Warrior/M/14", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("赞美她的传闻，很快开始传遍整个圣地。", 1);
        cm.effect_Voice("Voice.img/Library/Warrior/M/15", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("\r\n#fnBatang#―――――――#fn黑体#当然，事实往往不尽如人意。", 1);
          cm.effect_Voice("Voice.img/Library/Warrior/M/16", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(800);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       圣地，秋", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(303000000, 0, false);
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.setInGameDirectionMode(false, true, false);
              }
            }
          }
        }
      }
    }
  }
}
function action303090310(f, E, e) {
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
      cm.npc_ChangeController(2520003, "oid=21196", 2622, 20, 72, 2572, 2672, 1, false, 0, false);
      cm.npc_ChangeController(2520023, 'oid=21197', 2696, 88, 16, 2646, 2746, 1, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("希纳斯，身体什么样了？", 5, 2520000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Illus("已经好了很多。听说是很难找到的药呢……还听说你甚至去了武陵？真是太谢谢你了，#h0#。", 2520001, 5, true, true, 5);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("暂时不要太耗费精力了。这个季节的首要任务就是恢复希纳斯你的健康。照顾好自己的安危也是女皇必须做的事情。", 5, 2520000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus("……其实我真的不知道。自己是不是有资格成为女皇。", 2520001, 5, true, true, 5);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Illus("如果女皇的血脉没有断掉，我就会过上平凡的生活了吧。然而有一天，南哈特卿找到我，跟我说了好多听不懂的话……从那以后，一切就都变了。", 2520001, 5, false, true, 5);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Illus("当然我知道，这是我应该做的事情。但是，像我这样懦弱的人，真的能够负担起整个冒险岛世界的命运吗……想到这些，我的信心就会减弱。", 2520001, 5, true, true, 5);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b……(到底还是小女孩。会这样想也是正常。)#k", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Illus("……对不起。\r\n\r\n大家都在为我忙碌，我却说这种没用的话。也没有其他办法了是吧？因为我是最后的女皇的血统。", 2520001, 5, true, true, 5);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不是的，如果希纳斯你不愿意的话，也可以不用这样的。", 5, 2520000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('…！', 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Illus("……南哈特，那是什么意思？", 2520001, 5, true, true, 5);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我不是在哄你。每个人都有决定自己人生的权利。", 5, 2520000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("你也知道，我在边疆一个叫做#b里恩#k的地方长大。里恩族有个历史悠久的预言。「 英雄将会复活，和黑魔法师进行对抗。」。", 5, 2520000, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("但是无论怎样等待，英雄都没有复活，厌倦了的里恩族人开始陆续地离开。在那片除了冰块便再无其他的贫瘠的土地上，最后只剩下了我和妹妹，以及其他几个人。", 5, 2520000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(303090320, 0, false);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090320(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2520023, "oid=3106379", -118, 69, 12, -168, -68, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3106379", "summon", 0, 0);
      cm.npc_ChangeController(2520022, "oid=3106380", 51, 69, 12, 1, 101, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3106380", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……真的连哥哥你也要走吗？", 5, 2520022, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("利琳，我不是逃走，而是为了找到其它的办法才离开的。", 5, 2520000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("那只不过是借口而已。哥哥也厌倦了这个除了冰块外什么都没有的地方了吧？", 5, 2520022, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("利琳，我不能就这么干等着。你知道的，我从小，就钻在书房，做些研究。", 5, 2520000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("即便是女皇没有留下直系的血脉，但通过历史书上记载的零碎资料，还是可以汇出女皇的家谱。其中，有一条记录说，数百年前家族曾经分家过……", 5, 2520000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("如果那道血脉还在继续传承的话，再如果说，继承这道血脉的是个女子的话，她就是冒险岛世界上的 #e最强大的女皇候选人#n。我必须把她找出来。", 5, 2520000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……利琳，你会理解我的吧？", 5, 2520000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("…你不是已经做了决定了吗？谁能改变哥哥的心意呢？我理不理解，又有什么关系。", 5, 2520022, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("利琳，和我一起走吧。", 5, 2520000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("既然决定了，就快走吧。我不需要哥哥什么的。我要自己在这里等待 #b英雄战神#k的复活。", 5, 2520022, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("…好吧，既然你这样决定。", 5, 2520000, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=3106379", -1, 50, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=3106379");
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("哼，什么哥哥！就算你死在过往的石头人手里，我也不会眨一下眼的。", 5, 2520022, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#fs30#从此以后，你再也不是我的哥哥！！#fs12#", 5, 2520022, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("…………傻瓜。", 5, 2520022, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(303090330, 0, false);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090330(f, E, e) {
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
      cm.npc_ChangeController(2520003, "oid=21201", 2622, 20, 72, 2572, 2672, 1, false, 0, false);
      cm.npc_ChangeController(2520023, "oid=21202", 2696, 88, 16, 2646, 2746, 1, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我扔下唯一的妹妹利琳，离开了。但我不后悔。因为我选择的不是英雄，而是你。", 5, 2520000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("自己的路是由自己来决定的。谁都无法勉强。即便是打着“必须拯救世界”这种巨大的旗号，也不能改变。", 5, 2520000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("即使希纳斯你放弃女皇之路，我也不会指责或是怨恨你。我会去寻找别的对付黑魔法师的方法。", 5, 2520000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……我说了这么多废话啊。我先退下了，请你好好休息吧。", 5, 2520000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Illus("…………\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/1#  #fUI/UIWindow4.img/libraryCygnus/2/1#  ", 2520001, 5, true, true, 4);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("希纳斯先天性体弱，恢复花费了很长时间。", 0);
                      cm.effect_Voice("Voice.img/Library/Warrior/M/17", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("\r\n\r\n#fnBatang#―――――――#fn黑体#另外，与此同时。", 0);
                        cm.effect_Voice("Voice.img/Library/Warrior/M/18", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("在钢铁大陆埃德尔斯坦，其他问题正在萌发。", 1);
                          cm.effect_Voice("Voice.img/Library/Warrior/M/19", 100);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(303090340, 0, false);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090340(f, E, e) {
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
      cm.npc_ChangeController(2520017, 'oid=21204', 453, 18, 7, 403, 503, 1, false, 0, false);
      cm.npc_ChangeController(2520020, "oid=21205", 220, 18, 2, 170, 270, 0, false, 0, false);
      cm.npc_ChangeController(2520020, "oid=21206", 64, 18, 3, 14, 114, 0, false, 0, false);
      cm.npc_ChangeController(2520020, "oid=21207", -96, 18, 14, -146, -46, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯……在急着为圣地的一个人类小孩找药？", 5, 2520017, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("是的，从武陵传来的消息。", 5, 2520020, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("什么啊，怎么有种可疑的味道呢？", 5, 2520017, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
                cm.effect_REPEAT("Effect/Direction5.img/effect/blackMaster/orca/0", 1, 1, 1, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("军团长奥尔卡", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("为了黑魔法师的复活，创造了「 黑色之翼」组织的元凶。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("作为彻底占领埃德尔斯坦，建立强大组织的首领，不可能没有察觉到奇怪的动静。", 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("再去打听看看。如果我预想不错的话……也许能够轻易解决掉圣地呢。这些妨碍黑魔法师复活的最大障碍。", 5, 2520017, false, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(303090400, 0, false);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090400(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       圣地，冬", 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(303000000, 0, false);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}
function action303090500(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       圣地，又一春", 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(303090510, 0, false);
          }
        }
      }
    }
  }
}
function action303090510(f, E, e) {
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
      cm.npc_ChangeController(2520010, 'oid=21211', -334, -197, 1, -384, -284, 0, false, 0, false);
      cm.npc_ChangeController(2520011, "oid=21212", 161, -192, 2, 111, 211, 1, false, 0, false);
      cm.npc_ChangeController(2520002, 'oid=21213', -107, -2, 10, -157, -57, 0, false, 0, false);
      cm.npc_ChangeController(2520023, 'oid=21214', -215, -2, 10, -265, -165, 0, true, 0, false);
      cm.npc_ChangeController(2520006, "oid=21215", 308, -2, 10, 258, 358, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue(" 不知不觉就过了1年，约定的日子终于来临了。", 0);
            cm.effect_Voice("Voice.img/Library/Warrior/M/20", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("此时此地，一切都将被决定。", 1);
              cm.effect_Voice("Voice.img/Library/Warrior/M/21", 100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……到此为止，过去1年的女皇学习报告就结束了。", 5, 2520000, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('知道了，南哈特。', 5, 2520012, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("就我看，希纳斯现在绝对是位优秀的女皇候选人。", 5, 2520011, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("没错，希纳斯绝对是最适合坐上女皇之位的人！", 5, 2520006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("请其他人安静。少女，我最后一遍问你。", 5, 2520012, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Illus("……你是和我说话吗，长老？", 2520001, 5, true, true, 4);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你还是未成年人。因此，如果现在成为女皇的话，你将会因为无法完全承受神兽的力量，身体变得虚弱起来。", 5, 2520012, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("她已经知道了。", 5, 2520000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("南哈特，我现在是在问她本人。", 5, 2520012, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("少女，不仅仅是身体变弱，你还会遭遇无数的困境。女皇之路是一条荆棘之路……敌人会对你的生命虎视眈眈。可能还会失去你最珍爱的东西。", 5, 2520012, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("你准备好，要开始你的荆棘之路了吗？", 5, 2520012, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Illus('……我……', 2520001, 5, true, true, 4);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue('少女无法轻易回答。', 0);
                                              cm.effect_Voice("Voice.img/Library/Warrior/M/22", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("意志还是不够坚定吗……", 0);
                                                cm.effect_Voice("Voice.img/Library/Warrior/M/23", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("不，会这样也很正常。这个瞬间，只要一句话，整个人生都会改变。", 1);
                                                  cm.effect_Voice("Voice.img/Library/Warrior/M/24", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("突然，看到少女柔弱的肩膀。", 0);
                                                    cm.effect_Voice("Voice.img/Library/Warrior/M/25", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("即便她拒绝成为女皇的命运，这里也不会有人怨恨她的。", 1);
                                                      cm.effect_Voice("Voice.img/Library/Warrior/M/26", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Illus('……我……', 2520001, 5, false, true, 4);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("大事不好了，黑色之翼攻进来了！", 5, 1102001, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [1900, 253, -337, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [1900, -179, -313, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [1900, -419, -280, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("什么！黑色之翼怎么会到这里？！", 5, 2520011, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(303090520, 0, false);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090520(f, E, e) {
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
      cm.npc_ChangeController(2520018, "oid=21217", -2569, 88, 23, -2619, -2519, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, -2500, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5857);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嗯，圣地的结界如此薄弱吗？看来奥尔卡大人的预测没错。#e现在圣地没有女皇。#n", 5, 2520018, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("虽然这次的目标只是侦查，但既然来了，也许能够打破圣地的结界呢。只要能够启动结界解除机，一天左右……以现在的兵力，就足够了。", 5, 2520018, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(303090530, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090530(f, E, e) {
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
      cm.npc_ChangeController(2520010, "oid=21219", -334, -197, 1, -384, -284, 0, false, 0, false);
      cm.npc_ChangeController(2520011, "oid=21220", 161, -192, 2, 111, 211, 1, false, 0, false);
      cm.npc_ChangeController(2520002, "oid=21221", -107, -2, 10, -157, -57, 0, false, 0, false);
      cm.npc_ChangeController(2520023, "oid=21222", -215, -2, 10, -265, -165, 0, true, 0, false);
      cm.npc_ChangeController(2520006, "oid=21223", 308, -2, 10, 258, 358, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("居然如此大胆突袭……看来他们已经发现女皇不在一事了。", 5, 2520000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("敌人怎么会如此轻易闯入圣地，圣地不是有神兽的力量在保护吗？", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("女皇是连接神兽力量的存在……神兽的力量只有通过女皇才能发挥作用。也就是没有女皇的话，圣地的所有力量都会削弱。只不过现在这件事还没有被公开罢了。", 5, 2520012, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("现在只不过是最外面的第一层结界被打破了。但是继续下去的话……", 5, 2520011, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                  cm.sendNormalTalk_Illus("大家，请镇定。", 2520001, 5, true, true, 4);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm18.img/DrillHall", 0, 0);
                      cm.sendNormalTalk_Illus("现在，我要马上接受神兽的力量。然后去阻止敌人的进攻的话，还不算晚。", 2520001, 5, false, true, 4);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Illus("长老大人，你问我，有没有做好踏上荆棘之路的准备对吗？", 2520001, 5, true, true, 4);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Illus("这并不是什么人强制施加给我的任务，而是我必须行使的权利。这里是我必须存在的地方，而我必须成为女皇。", 2520001, 5, true, true, 4);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……！！", 5, 2520000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Illus("现在请把我带到神兽那里去吧。", 2520001, 5, true, true, 4);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("遵命，女皇。", 5, 2520012, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("请随我来，女皇！", 5, 2520006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Illus("各位，请务必做好迎战的准备！\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  ", 2520001, 5, true, true, 3);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(303090540, 0, false);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090540(f, E, e) {
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
      cm.npc_ChangeController(1101001, 'oid=21225', 384, 88, 8, 334, 434, 1, false, 0, false);
      cm.npc_ChangeController(2520006, "oid=21226", 736, 88, 10, 686, 786, 1, false, 0, false);
      cm.npc_ChangeController(2520010, "oid=21227", 10, 88, 3, -40, 60, 0, false, 0, false);
      cm.npc_ChangeController(2520011, "oid=21228", 113, 88, 2, 63, 163, 0, false, 0, false);
      cm.npc_ChangeController(2520007, 'oid=21229', -86, 88, 1, -136, -36, 0, false, 0, false);
      cm.npc_ChangeController(2520023, 'oid=21230', 675, 88, 9, 625, 725, 1, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2520002, "oid=3109469", 559, 78, 7, 509, 609, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3109469", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 600, 70);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4041);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("少女接受了上天赐予自己的责任。\r\n", 0);
                cm.effect_Voice("Voice.img/Library/Warrior/M/27", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("不是被动接受别人的意志，而是在自己意志的主导下。\r\n她选择了荆棘之路。", 1);
                  cm.effect_Voice("Voice.img/Library/Warrior/M/28", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("少女啊，你准备好接受我的力量了吗？", 5, 2520013, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Illus("是的，神兽。我要用我小小的身躯，接受将自己献给这个世界的你的力量。按照远古的约定，你的意志就是我的意志……", 2520001, 5, true, true, 4);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你的意志也是我的意志。这样，我们就是不可分割的整体了。", 5, 2520013, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=3109469");
                            cm.npc_ChangeController(2520004, "oid=3109702", 559, 78, 7, 509, 609, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=3109702", "summon", 0, 0);
                            cm.npc_SetSpecialAction("oid=3109702", "change1", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 200, 240, 240, 240, 3000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue(" 由于女皇的继位，圣地重新开始流淌远古的力量。\r\n", 0);
                                  cm.effect_Voice("Voice.img/Library/Warrior/M/29", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("\r\n#fnBatang#―――――――#fn黑体#决战的瞬间，那晚。", 1);
                                    cm.effect_Voice("Voice.img/Library/Warrior/M/30", 100);
                                  } else if (status === V++) {
                                    cm.forceCompleteQuest(32624);
                                    cm.gainItem(4033970, -1);
                                    cm.dispose();
                                    cm.warp(303000000, 0, false);
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
function action303000150(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 600, 300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\r\n\r\n#fs30#       深夜，圣地上空", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 134, -708);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(5551);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 80, 54, -508);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2694);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("南哈特说得对。此刻，夜幕降临，浓雾升起，正是敌人进攻的最佳时机。", 17, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("好歹也是个天生的谋略家……", 17, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("我们藏在雾里，寻找反攻的机会。全体，准备！以女皇的名义，消灭敌人！", 5, 2520011, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('以女皇的名义！', 5, 2520016, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, -400, -1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(5458);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.playerMessage(5, "必须消灭区域内的所有怪物，才能移动到下一区域。");
                                      cm.dispose();
                                      cm.warp(303050000, 0, false);
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
function action303090600(f, E, e) {
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
      cm.npc_ChangeController(2520016, "oid=21232", -2701, -332, 67, -2713, -2687, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21233", -2840, -152, 73, -2890, -2790, 0, false, 0, false);
      cm.npc_ChangeController(2520016, 'oid=21234', -3032, -212, 25, -3073, -2982, 0, false, 0, false);
      cm.npc_ChangeController(2520016, 'oid=21235', -2954, 88, 6, -3004, -2904, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21236", -3063, 88, 3, -3113, -3013, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21237", -2841, -392, 65, -2891, -2791, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21238", -2934, -392, 61, -2984, -2884, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21239", -3038, -392, 62, -3088, -2988, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21240", -3140, -392, 63, -3190, -3090, 0, false, 0, false);
      cm.npc_ChangeController(2520016, "oid=21241", -3162, 88, 7, -3212, -3112, 0, false, 0, false);
      cm.npc_ChangeController(2520016, 'oid=21242', -3236, -392, 64, -3286, -3186, 0, false, 0, false);
      cm.npc_ChangeController(2520011, "oid=21243", -2523, -272, 50, -2573, -2473, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("各位，打得好！我们成功击退了所有敌人。今晚，胜利属于我们！", 5, 2520011, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("万岁！希纳斯女皇万岁！", 5, 2520016, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("万岁！ ", 5, 2520016, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_PushMoveInfo(0, 80, -2790, -1300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("这天的胜利，很快传遍了整个冒险岛世界。\r\n", 0);
              cm.effect_Voice("Voice.img/Library/Warrior/M/31", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("圣地是不会轻易被侵犯的土地，女王依然存在。", 0);
                cm.effect_Voice("Voice.img/Library/Warrior/M/32", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("人们深深地意识到了这一事实。", 0);
                  cm.effect_Voice("Voice.img/Library/Warrior/M/33", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("\r\n\r\n这下，我的任务完成了。", 1);
                      cm.effect_Voice("Voice.img/Library/Warrior/M/34", 100);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(303090610, 0, false);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action303090610(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2520025, "oid=3111591", 87, 73, 4, 37, 137, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3111591", "summon", 0, 0);
      cm.npc_ChangeController(2520023, "oid=3111592", 200, 73, 9, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3111592", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Illus("现在要说再见了，#h0#。", 2520001, 5, false, true, 6);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Illus("……那个，你没想过继续留在圣地吗？", 2520001, 5, true, true, 6);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哈哈，我心里也想这样……但是我这个人，在一个地方待久了，浑身发痒。现在我要去走我自己的路了。", 17, 0, true, true);
              cm.effect_Voice("Voice.img/Library/Warrior/M/35", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("有相聚，必然会有别离。你这段时间，做得非常不错。", 5, 2520000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("哈哈，南哈特。有什么好担心的呢？你可是拥有 #e使唤他人的天赋#n呢。只要你在圣地，就没有好担心的。", 17, 0, true, true);
                  cm.effect_Voice("Voice.img/Library/Warrior/M/36", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("…… 那我们下次有机会再见吧。", 17, 0, true, true);
                    cm.effect_Voice("Voice.img/Library/Warrior/M/37", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(1);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(1);
                        cm.sendNormalTalk("……你没事吧，女皇？", 5, 2520000, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Illus("有点累呢。自从接受神兽力量之后，觉一下子变多了。", 2520001, 5, true, true, 6);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("那么稍微休息一下吧。", 5, 2520000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Illus("不了，还不到休息的时候。还有事情等着我们做呢。", 2520001, 5, true, true, 6);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.npc_SetForceMove("oid=3111591", -1, 100, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2600);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm34.img/DimensionLibrary", 0, 0);
                                  cm.sendNormalTalk_Illus("通过这次的事情，我发现，最重要的是人。", 2520001, 5, false, true, 6);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Illus("我需要更多的人。\r\n\r\n信任我，愿意追随我的人，以及能够和我共同度过以后的人生，值得信赖的人。这将成为所有事情的开始。", 2520001, 5, true, true, 6);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Illus("当然，我以后的人生，也会和他们一起度过。", 2520001, 5, true, true, 6);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('…………', 5, 2520000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=3111591", 1, 1, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Illus("……？为什么那么看我，南哈特？", 2520001, 5, false, true, 6);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("……没什么，你现在和1年前完全不同了。真的成长了很多。", 5, 2520000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Illus("呵呵……谢谢，南哈特。以后多多关照。", 2520001, 5, true, true, 6);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Illus("对了，既然说到这儿，不如打造新的#b骑士团#k如何？在冒险岛世界各地选拔能力出众者。", 2520001, 5, false, true, 6);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Illus('骑士团的名字……', 2520001, 5, true, true, 6);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Illus("嗯，就叫 #e希纳斯骑士团#n好了。", 2520001, 5, false, true, 6);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("果然是女皇的英明选择。", 5, 2520000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=3111591", 1, 500, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=3111592", 1, 500, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 100, -163, -725);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(7394);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n#fs40#章节 II : 成为女皇的方法", 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("过去的故事到这里就结束了。\r\n\r\n现在请回吧。回到现实中真正的#h0#去！ ", 5, 2500000, false, true);
                                                                              } else if (status === V++) {
                                                                                cm.forceCompleteQuest(32625);
                                                                                cm.forceCompleteQuest(32601);
                                                                                cm.finishAchievement(1179);
                                                                                cm.dispose();
                                                                                cm.warp(302000000, 0, false);
                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;