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
      cm.forceStartQuest(58783, '');
      cm.updateInfoQuest(58711, "10=0;11=3;13=3;0=3;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=2");
      cm.updateInfoQuest(58711, "10=0;11=3;12=3;13=3;0=3;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=2");
      cm.forceStartQuest(58701, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -100, -590);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111000, "oid=3988505", 5, -70, 33, -45, 55, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3988505", "summon", 0, 0);
        cm.npc_ChangeController(9111027, "oid=3988506", -345, -70, 29, -395, -295, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=3988506", "summon", 0, 0);
        cm.npc_ChangeController(9111051, "oid=3988507", -160, -70, 31, -210, -110, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=3988507", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 3000, -100, -100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.sendNormalTalk_Bottom("你是……？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#虽然我有各种称呼……\r\n但我的名字叫亚西亚，我是在巫纳守护樱之岛的守护者。", 37, 9111027, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……我还有个你们熟知的名字……大太法师……。", 37, 9111027, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3988505"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face3#……你，你是真正的大太法师……？", 37, 9111000, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3988506"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#因为巫纳之精气很不稳定，我难以行动……这期间竟发生了这么多事……", 37, 9111027, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#巫纳的精灵们跟我说了关于你们和这位少女的故事。", 37, 9111027, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#都怪我……是我愚昧的私心害死了妹妹……", 37, 9111000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=3988505", "cry", 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=3988505");
                                        cm.npc_LeaveField("oid=3988505");
                                        cm.npc_ChangeController(9111064, "oid=3989155", 5, -70, 33, -45, 55, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=3989155", 'summon', 0, 0);
                                        cm.sendNormalTalk_Bottom("……。", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#是我的过错。请你原谅……", 37, 9111027, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我身为樱之岛的守护者，不能亲自介入这些事。", 37, 9111027, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("亚西亚……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111027, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("虽然我们为竹野子集齐了五行，可是全都白费了。\r\n……最终还是失去了她。\r\n请问您能否发发慈悲救活竹野子？", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3988506"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#(呵呵，如果是#b“他”#k的话……肯定会毫不犹豫地帮助这些生灵……)", 37, 9111027, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#(……他说过，有力量不用就失去力量的意义了……)", 37, 9111027, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3988506"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……这事就交给我吧。", 37, 9111027, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#为了抚慰你们的伤痛，\r\n我就借助五行之力，召回这少女的魂魄吧 。", 37, 9111027, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……拜托了。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=3988507");
                                                                  cm.npc_LeaveField("oid=3988507");
                                                                  cm.npc_ChangeController(9111031, "oid=3989522", -160, -70, 31, -210, -110, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=3989522", "summon", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getFire", "oid=3989522"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getMetal", "oid=3989522"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getWater", "oid=3989522"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getLand", "oid=3989522"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getWood", "oid=3989522"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#……", 37, 9111001, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……好了，她会慢慢恢复的。\r\n五行补上了她缺失的那半灵魂。", 37, 9111027, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#竹野子！！", 37, 9111000, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#现在的她……应该在做着美梦……\r\n你们好好照顾她吧。", 37, 9111027, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#谢谢您！谢谢！！非常感谢！！！", 37, 9111000, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("这么说五行……\r\n五行被竹野子吸收到体内了吗？", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……是的。", 37, 9111027, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#五行是组成这个世界的力量本身。\r\n为了向世界树巫纳源源不断地供应足以支撑世界的力量，才诞生了五行。", 37, 9111027, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#因为担心那股力量太强大，反而会对世界造成威胁，樱之岛的守护者们将五行之力一分为五。\r\n只有具备资格之人，也就是懂得理解及关怀他人的善者，为了拯救他人而需要使用这股力量时，才能获得五行之力。", 37, 9111027, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##b#p9111024##k正是钻了这条件的空子。\r\n因为这力量只能由利他之心发动，所以只要将这力量为他人所用时，对方便可以顺利吸收五行，而不会出现发疯的副作用。", 37, 9111027, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("您的意思是……竹野子为#b#p9111024##k献出了五行之力？", 57, 0, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=3988506", -1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#她出于什么想法做了那样的决定，我们不得而知。\r\n但可以确定的是，她当时打算了结自己的生命。", 37, 9111027, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#还有你身上的力量也一样。\r\n虽然尚不完整，却已可以消灭吸收了五行之力的魔僧。", 37, 9111027, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#那是因时刻为他人着想而生的缘分之力。\r\n因为你和你的同伴们为了拯救他人，冒死付出了努力，所以你才能借助五行之力取得成功。", 37, 9111027, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=3988506", 1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#而且对我来说，也需要像你这样坚强的人。\r\n不过，现在还不是时候。", 37, 9111027, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#等时机成熟，请你为了我，也为了樱之岛，再来见我。", 37, 9111027, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.warp(800025007, 0, false);
                                                                                                                        cm.npc_LeaveField("oid=3988506");
                                                                                                                        cm.npc_LeaveField("oid=3988506");
                                                                                                                        cm.npc_LeaveField("oid=3989155");
                                                                                                                        cm.npc_LeaveField("oid=3989155");
                                                                                                                        cm.npc_LeaveField("oid=3989522");
                                                                                                                        cm.npc_LeaveField("oid=3989522");
                                                                                                                        cm.eventSKill(0);
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