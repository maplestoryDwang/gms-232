var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.npc_ChangeController(1531003, "oid=5568339", -360, 0, 8, -410, -310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=5568339", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -3500, -150);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 5, -150);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 7500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(8300);
          } else {
            if (status === O++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 290, -220);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === O++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === O++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                      } else {
                        if (status === O++) {
                          cm.npc_ChangeController(1531005, "oid=5568345", 310, -260, 45, 260, 360, 1, true, 1500, false);
                          cm.npc_SetSpecialAction("oid=5568345", "summon", 0, 0);
                          cm.sendNormalTalk_Bottom("#face0#尤娜！！", 37, V, false, true);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face0#我一直在等你，超能力者。", 37, 1531005, false, true);
                            } else {
                              if (status === O++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face0#你……到底是干什么的？", 37, V, false, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face3#我的能力，硬要说起来，是“解放”。", 37, 1531005, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("#face3#这股旋风也是我的能力，不，应该算是那个少女的能力。", 37, 1531005, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face0#！！你到底对尤娜做了什么！", 37, V, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("#face3#别担心，\r\n她一点都没有受伤，她的人性和记忆都还是老样子。", 37, 1531005, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.sendNormalTalk_Bottom("#face0#作为引爆剂的你忙得四处乱窜，我实在是别无他法了，\r\n就算是要多耗费些时间，我也要做出类似的引爆剂。这样才最有效率。", 37, 1531005, true, true);
                                          } else {
                                            if (status === O++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 0);
                                            } else {
                                              if (status === O++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else {
                                                if (status === O++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === O++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.userSetFieldFloating(331004000, 15, 15, 2000);
                                                    cm.sendNormalTalk_Bottom("#face0#……你为什么选择了尤娜？", 37, V, false, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom("#face0#事已至此，我很想和你悠闲地聊一聊，\r\n你看你现在这不就来了吗？", 37, 1531005, true, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.sendNormalTalk_Bottom("#face1#你已经疯了，\r\n虽然我也经常被人说不正常，但我还是第一次见到你这样的家伙。", 37, V, true, true);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呵呵……这样吗？", 37, 1531005, true, true);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.sendNormalTalk_Bottom("#face1#你还笑得出来吗？\r\n现在我可就要将你头朝下撂倒在地了哦？", 37, V, true, true);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.sendNormalTalk_Bottom("#face3#看来你对自己的能力很有信心啊。", 37, 1531005, true, true);
                                                            } else {
                                                              if (status === O++) {
                                                                cm.sendNormalTalk_Bottom("#face3#大家喜欢你，为你的能力欢呼，\r\n但是你觉得他们会持续到什么时候呢？", 37, 1531005, true, true);
                                                              } else {
                                                                if (status === O++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……？！", 37, V, true, true);
                                                                } else {
                                                                  if (status === O++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#现在连接世界的通道已经大到无法复原的地步，\r\n你这样的人也会接二连三地出现的。", 37, 1531005, true, true);
                                                                  } else {
                                                                    if (status === O++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#超能力者一开始会被奉为英雄，\r\n但是很快你们就会沦为这个世界的异类。", 37, 1531005, true, true);
                                                                    } else {
                                                                      if (status === O++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#这就是在这个世界上生存的人类的习性。", 37, 1531005, true, true);
                                                                      } else {
                                                                        if (status === O++) {
                                                                          cm.sendNormalTalk_Bottom("哼，你怎么说的好像自己已经活了数百年似的。", 37, V, true, true);
                                                                        } else {
                                                                          if (status === O++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#你这话没错。", 37, 1531005, true, true);
                                                                          } else {
                                                                            if (status === O++) {
                                                                              cm.sendNormalTalk_Bottom("你说什么？", 37, V, true, true);
                                                                            } else {
                                                                              if (status === O++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#因为这并不是我第一次活着。", 37, 1531005, true, true);
                                                                              } else {
                                                                                if (status === O++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#……你这要是个玩笑，能不能告诉我该在哪里笑啊？", 37, V, true, true);
                                                                                } else {
                                                                                  if (status === O++) {
                                                                                    cm.sendNormalTalk_Bottom("这不是玩笑，超能力者。\r\n你有没有想过你为什么会存在？", 37, 1531005, true, true);
                                                                                  } else {
                                                                                    if (status === O++) {
                                                                                      cm.sendNormalTalk_Bottom("我知道，\r\n不，记得这个表达方式才更准确吧。", 37, 1531005, true, true);
                                                                                    } else {
                                                                                      if (status === O++) {
                                                                                        cm.sendNormalTalk_Bottom("我是想要穿墙而过的人，\r\n历经数百年，为了实现“某种目的”，才有了我的存在。", 37, 1531005, true, true);
                                                                                      } else {
                                                                                        if (status === O++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#喂，别说胡话了，\r\n我会亲切地告诉你有关你的事情，给我好生记着。", 37, V, true, true);
                                                                                        } else {
                                                                                          if (status === O++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#你召唤出怪物，伤害人类，\r\n摧毁了我所生活的城市，害得数千人失踪，还绑架了尤娜。", 37, V, true, true);
                                                                                          } else {
                                                                                            if (status === O++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#虽然你将自己的行为包装得好像挺像那么回事，但你不过就是个垃圾，是个坏人。", 37, V, true, true);
                                                                                            } else {
                                                                                              if (status === O++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#呵呵……\r\n现在想来，从前也有个朋友曾经跟我说过和你差不多的话。", 37, 1531005, true, true);
                                                                                              } else {
                                                                                                if (status === O++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#……我改变想法了。\r\n虽然你讨厌我，但我好像还挺喜欢你的。", 37, 1531005, true, true);
                                                                                                } else {
                                                                                                  if (status === O++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === O++) {
                                                                                                      cm.userSetFieldFloating(331004000, 0, 0, 0);
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                    } else {
                                                                                                      if (status === O++) {
                                                                                                        cm.sendNormalTalk_Bottom("这是一个小测试，\r\n我很好奇在另一个世界所展开的最后舞台上，你是否有资格站上去。", 37, 1531005, false, true);
                                                                                                      } else {
                                                                                                        if (status === O++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#白魔法师，你要逃跑啊！", 37, V, true, true);
                                                                                                        } else {
                                                                                                          if (status === O++) {
                                                                                                            cm.sendNormalTalk_Bottom("别忘了，超能力者。\r\n变化才刚刚开始。", 37, 1531005, true, true);
                                                                                                          } else {
                                                                                                            if (status === O++) {
                                                                                                              cm.npc_LeaveField("oid=5568345");
                                                                                                              cm.npc_LeaveField("oid=5568345");
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 150, -79);
                                                                                                            } else {
                                                                                                              if (status === O++) {
                                                                                                                cm.npc_ChangeController(1531040, "oid=5568368", 360, 0, 24, 310, 410, 1, false, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=5568368", "summon", 0, 0);
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === O++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                } else {
                                                                                                                  if (status === O++) {
                                                                                                                    cm.npc_SetSpecialAction("oid=5568368", "apear", 1, 0);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kinesis/kingOmen", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                  } else {
                                                                                                                    if (status === O++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                    } else {
                                                                                                                      if (status === O++) {
                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                      } else {
                                                                                                                        if (status === O++) {
                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                        } else {
                                                                                                                          if (status === O++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else if (status === O++) {
                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                            cm.npc_LeaveField("oid=5568339");
                                                                                                                            cm.npc_LeaveField("oid=5568339");
                                                                                                                            cm.npc_LeaveField("oid=5568368");
                                                                                                                            cm.npc_LeaveField("oid=5568368");
                                                                                                                            cm.spawnMobLimit(2700301, 1, 360, 151, 100);
                                                                                                                            cm.setPartner(1, 1531006, 80001788, 0);
                                                                                                                            cm.eventSKill(0);
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
      }
    }
  }
}