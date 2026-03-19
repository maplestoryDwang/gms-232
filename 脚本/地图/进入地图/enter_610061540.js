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
      cm.updateInfoQuest(61333, "act1=610061540");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2866644", -341, 198, 7, -391, -291, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2866644", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("卢坎，你还好吗？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#……绯红之心。", 37, 9201536, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#是的，我想起来了。\r\n多亏了你，我全都想起来了。", 37, 9201536, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#我从何而来，我又是谁……", 37, 9201536, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那你能跟我们说说细节吗？\r\n比如#b纳瑞坎#k是谁，还有#b幻日#k究竟是什么？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("幻日是一块拥有无穷无尽的能量的石头，它能够任意扭曲时空。", 37, 9201536, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("是这样的，绯红之心、我还有其他所有宗师，\r\n我们都来自一个叫反转界的世界。", 37, 9201536, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("反转界是战士和魔法师的圣地。", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("它的居民都只追求武艺和知识。\r\n但是即便如此，拥有强大力量的人依旧会引发混乱……", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("幻日就是在很久以前以反转界最强大的英雄为代价，制作出来的。", 37, 9201536, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("创造它的目的在于守护反转界不受混乱侵害。", 37, 9201536, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("幻日凭借其无边的能量，很快就终止了所有冲突。", 37, 9201536, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("反转界的每个人都接触了幻日，获得了一份力量和一份责任。", 37, 9201536, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("绯红之心则是当时反转界最伟大的战士，因此被选为幻日的守护长。于是，在相当一段时间内，反转界都很和平。", 37, 9201536, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("直到#b绯红之心的养子，纳瑞坎#k的出现。", 37, 9201536, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("他对力量的贪求在反转界无人能及，甚至盗走了一块幻日碎片。", 37, 9201536, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("这是令人难以置信、无法原谅的背叛行为。", 37, 9201536, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("因此，#b绯红之心携带幻日，穿越到这个被你们称为冒险岛世界的地方。#k", 37, 9201536, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("他想要防止纳瑞坎盗走幻日的本体。", 37, 9201536, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("所以，他把幻日藏在守护者的要塞内，和#b宗师们#k一起守护着它……", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("话说，宗师们到底是什么人？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("他们是4个穿越到冒险岛世界的#b反转界最强战士#k。", 37, 9201536, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("魔法师戴尔格兰德。\r\n弓手努曼纳尔。\r\n盗贼利瑞尼。\r\n还有战士，也就是我。", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我们因协助绯红之心获得了使用幻日的权力。", 37, 9201536, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我们继承了前辈留下的名号……\r\n而当我们死去，本应有更多人继承这一名号", 37, 9201536, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("但现在看来，我们就是最后的宗师了。", 37, 9201536, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("明白了。\r\n那个叫#b利瑞尼#k的女士，她最后……", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2##b那个叛徒#k。\r\n她背叛了绯红之心的信任和身为大师的荣耀。", 37, 9201536, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#我永远不会原谅她。", 37, 9201536, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你刚才……说这就是我所熟知的克拉奇安，只不过经过了1000年？", 37, 9201536, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我不清楚她有没有后裔，但要是有的话……\r\n我希望他们永远忘不掉她的罪孽。", 37, 9201536, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("那#b苏巴尼#k，就是那个封印了纳瑞坎的人……r\n他们俩是兄弟吗？", 57, 0, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("名分上是，血缘上不是。\r\n绯红之心是一位非常善良温和的人……", 37, 9201536, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("他收养了无家可归的小孩，将他们视如己出。", 37, 9201536, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("苏巴尼是他第一个收养的儿子，\r\n纳瑞坎是第二个。", 37, 9201536, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("而他却恩将仇报……", 37, 9201536, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("为什么纳瑞坎那么想要幻日？\r\n他到底打算拿它做什么？", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("他说他想要用幻日的力量控制所有人。", 37, 9201536, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("完全的控制……让大家对他言听计从。", 37, 9201536, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("纳瑞坎经常建议我们利用幻日的力量对抗邪恶……", 37, 9201536, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("但随着他对幻日的痴迷日渐严重，他变得只想操控、奴役他人。", 37, 9201536, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("绯红之心自然拒绝了纳瑞坎的建议。\r\n我们都拒绝了。", 37, 9201536, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("谁会想一直被人操控，当一辈子木偶呢？", 37, 9201536, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("最后，他们成功阻止纳瑞坎染指幻日。", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b但代价就是克拉齐亚#k……或者说克拉奇安沉入海底。", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("但现在克拉齐亚重见天日……是不是就皆大欢喜了？", 57, 0, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("困在一个古怪的未来世界，无法与我的兄弟们相见……算什么皆大欢喜啊。", 37, 9201536, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("你说苏巴尼封印了纳瑞坎……那他应该没法作恶了。", 37, 9201536, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("不过，既然克拉奇安——抱歉，你们是怎么称呼它的来着？", 37, 9201536, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("是克拉齐亚。", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("对。既然克拉齐亚沉底千年后突然重见天日……", 37, 9201536, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("我总觉得有点不太对劲。\r\n告诉我，守护者的要塞 还在吗？", 37, 9201536, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom('在的，离这儿不远。', 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("我想要亲眼看一下那里。", 37, 9201536, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("我必须确定纳瑞坎还被封印着。", 37, 9201536, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("好的，我给你带路。", 57, 0, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("很高兴你能找回记忆！", 37, 9201537, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("我确实不该怀疑你，我奇怪的朋友。", 37, 9201536, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#但你并没有欺骗我。\r\n你对我的恩情我恐怕永远都无法还清。", 37, 9201536, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("哈，没关系啦。\r\n你们俩在外头小心点！", 37, 9201537, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("谢谢你。", 57, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                          cm.npc_SetForceMove("oid=2866644", -1, 150, 100);
                                                                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=2866644");
                                                                                                                                                            cm.npc_LeaveField("oid=2866644");
                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 12, 180);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                  cm.sendNormalTalk_Bottom("都弄好了，市长！\r\n我照你吩咐帮他恢复所有记忆了。", 37, 9201537, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.addPopupSay(9201050, 2000, "干得不错。\r\n他是这一切的关键。", '', 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("话又说回来，“这一切”是指什么呢？", 37, 9201537, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.addPopupSay(9201050, 2000, "狐智、狐智、狐智啊……", '', 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.addPopupSay(9201050, 2000, "我要跟你说多少遍才够，这你不必知道。", '', 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.addPopupSay(9201050, 2000, "你只要听从我的命令就行。", '', 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("是啊，我要知道的是……\r\n嗯，你会不会给我经费！", 37, 9201537, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("不过想也会了，至少在我完成你的小惊喜前……", 37, 9201537, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 50, 12, -350);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                                      cm.warp(610061550, 0, true);
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
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}