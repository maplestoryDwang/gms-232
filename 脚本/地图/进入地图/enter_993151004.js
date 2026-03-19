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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004431, "oid=1011013", -320, 6, 1, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1011013", 'summon', 0, 0);
      cm.npc_ChangeController(3004433, "oid=1011014", -400, 6, 1, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1011014", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=1011013", "special7", -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -530, 6);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -402, 12);
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
            cm.sendNormalTalk_Bottom("#face1#伊黛娜大人？快醒醒。", 37, 3004433, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7#猩猩……我看起来像猩猩吗？哈哈哈哈嘿嘿嘿嘿嘿嘿。", 37, 3004431, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#唉呀……该拿她如何是好……", 37, 3004433, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#好？我很好啊？\r\n啊……母亲她也还好吧？", 37, 3004431, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/ghostGone", 100);
                    cm.onSetNpcScript("oid=1011013", 1, ['special6', "special7"], [1, -1]);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("她究竟怎么了？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=1011014", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，#h0#大人。您来的正好。\r\n圣水带来了吧？", 37, 3004433, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#还是先把圣水给她服用吧。", 37, 3004433, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=1011013", 'special5', -1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/waterDrink", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/ghostGone", 100);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5#啊，总算是恢复过来了。", 37, 3004431, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=1011013", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#呃……", 37, 3004431, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这是怎么一回事？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#艾伦说闪电魔法很危险，让我们不要在图书馆里使用。", 37, 3004431, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#毕竟是在图书馆里嘛。\r\n要是发生火灾，后果可就不堪设想了。", 37, 3004431, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这里收藏的都是从古代保存至今的文献。", 37, 3004434, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#请慎重地对待它们。", 37, 3004434, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#我本以为只是一点点灵异现象……但没想到会这么缠人。", 37, 3004431, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("哈哈……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#还请多多包涵。毕竟这个图书馆对艾伦来说是很特别的。", 37, 3004433, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#多亏艾伦，这里才有个图书馆的样子，不然这栋建筑就要被荒废了。", 37, 3004433, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#那这些书呢？就那样扔在这里？", 37, 3004431, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#馆藏的大部分书籍都是用古语写的，可是没人读得懂。\r\n所以也就很少有人知晓其中的价值。", 37, 3004433, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('#face0#哈……', 37, 3004431, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#哈哈，也体谅我一下吧。\r\n毕竟光是处理教团间激化的矛盾，就已经够让我焦头烂额的了。", 37, 3004433, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我也不知道#b艾伦#k是怎么得知这座图书馆的，\r\n总之，他就那么来了。", 37, 3004433, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#虽然大家都因为突然出现的#r高等翼人#k受惊不小，\r\n所幸没出什么大事。", 37, 3004433, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#是我执意任命#b艾伦#k为图书管理员的。\r\n一方面那些乱糟糟的古籍能得到整理，同时他也可以随心所欲地进行研究。", 37, 3004433, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#原来如此。", 37, 3004431, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#当然那时我也没想到，几年后他会将数万卷古代文献全部整理出来。", 37, 3004433, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("哇……", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#对了，听说两位在打听塞伦的事？", 37, 3004433, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("（转达了黎明祭司说的话。）", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('#face0#哼……', 37, 3004431, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#塞伦是因为心中的伤痕，所以无法展开翅膀……", 37, 3004431, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#王子殿下是不是知道什么？", 37, 3004431, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#我觉得……\r\n她好像已经断定自己再也无法展翅飞翔了。", 37, 3004433, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#大概是对自己失去信心了吧。", 37, 3004433, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#你好好想想。", 37, 3004433, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 50, 0, 0, 0, 4, 1, 0, 0, -1, 0);
                                                                                                              cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/3/BurnningSky_00", "animation", '', 'sky'], [0, 1, 0, 90000, 0, 0, -1, 1]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/burningSky", 100);
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('BlackOut', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#近天峰，民众，还有并肩作战的战友……", 37, 3004433, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#那些曾是她的全部。", 37, 3004433, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#也是身为骑士的她，理应守护的所有。", 37, 3004433, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_取消复合图片动画('sky', 1, 500);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#原来如此。为什么我早先没有注意到呢？\r\n仔细想想的话，应该能察觉到啊……", 37, 3004431, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这样下去，就连#b活下来的战友#k最终也会变得……", 37, 3004431, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#。你说你刚刚去见她了，是吗？\r\n她现在怎么样？", 37, 3004431, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.askMenu_Bottom("嗯……\r\n\r\n#b#L0#看起来很正常。#l\r\n#L1#不太清楚。", 57, 0);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#哼……", 37, 3004431, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            } else if (status === V++) {
                                                                                                                                              cm.eventSKill(0);
                                                                                                                                              cm.warp(993151005, 0, false);
                                                                                                                                              cm.npc_LeaveField("oid=1011013");
                                                                                                                                              cm.npc_LeaveField("oid=1011013");
                                                                                                                                              cm.npc_LeaveField("oid=1011014");
                                                                                                                                              cm.npc_LeaveField("oid=1011014");
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