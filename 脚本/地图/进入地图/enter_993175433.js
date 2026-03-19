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
      cm.forceCompleteQuest(100449);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062255, "oid=27573685", -250, 260, 1, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27573685", "summon", 0, 0);
      cm.npc_ChangeController(9062260, "oid=27573686", 100, 260, 1, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=27573686", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -8, 250);
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
            cm.sendNormalTalk_Bottom("#face0#我想和那些朋友们玩儿……\r\n可是他们，就算我把数字都数~完了，他们也没有和我玩。", 37, 9062260, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#就因为……因为我不是人类。", 37, 9062260, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我真的，\r\n哪怕只有一次，也想变成#r人类#k！", 37, 9062260, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("人类？", 57, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face0#人类？', 37, 9062255, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#对！", 37, 9062260, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#可是……这个我们也……", 37, 9062255, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不要担心！\r\n我在垃圾场看了很多书，最后找到了\r\n#b变成人类的方法。", 37, 9062260, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#还有这种书？\r\n也是，我在这呆了都快100年了……\r\n当然有可能会有这种书！", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你错了，不可能会有这种书。", 57, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#只要有#b补丁心脏#k, #b填满棉絮的大脑#k以及#b赋予勇气的药水#k，\r\n就可以变成#r人类#k了！", 37, 9062260, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9062255, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是真……真的！\r\n书里明明就是这么写的！", 37, 9062260, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我本来准备自己去找……\r\n但是燃料都耗尽了，所以动不了了！", 37, 9062260, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("苏菲莉亚，他看的应该是童话书，可他好像当真了。怎么办呢？", 57, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……#b#h0##k，\r\n找一些差不多的给他吧。", 37, 9062255, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/FarmSE.img/1", 100);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('你说要找那些材料？', 57, 0, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#不然的话也没其他办法了。", 37, 9062255, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("可是用那些东西是#b不能变成人类的#k。\r\n这你也很清楚啊。", 57, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#不然真的告诉他，要帮他找#r变成人类的药#k吗？", 37, 9062255, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("可是再怎么样，也不能说谎啊……", 57, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#就这样了！", 37, 9062255, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#没有时间了！\r\n必须要在#r午夜#k前搞定那个家伙。", 37, 9062255, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("知……知道了，干嘛发火啊？", 57, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fs25#时间已到了晚上11点。", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("#fs25#还剩一个小时，假面绅士的演奏就要开始了。", 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("等等，会不会哭泣的假面#b真正想要的#k其实是其他的东西呢？", 57, 0, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#这是什么意思？", 37, 9062255, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("你再回想一下哭泣的假面说过的话。", 57, 0, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#他说他看到了人类聚在一起#r开派对的样子#k……", 37, 9062255, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("哭泣的假面想变成人类是因为，他想和他们#b一起玩#k。", 57, 0, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("哭泣的假面一开始真正想要的并不是用那些奇怪的配件把自己#b变成真正的人类#k。", 57, 0, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("那家伙虽然一辈子都在为别人#b服务#k，却一直#b被当作破铜烂铁#k。", 57, 0, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("按他的说法，他最后是#b被孤零零地丢在#k垃圾场，寿命也差不多要耗尽…… ", 57, 0, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("要是换做我，肯定会觉得特别孤单寂寞的。", 57, 0, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#哭泣的假面他……\r\n……原来是需要#b朋友#k啊。 ", 37, 9062255, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=0"], [0, 100, 275, 1, 0, 1, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=27573686", -1, 110, 50);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#你们两个，说什么悄悄话呢。\r\n能不能也告诉我？", 37, 9062260, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", "oid=0"], [0, -250, 275, 1, 0, 1, 1, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0##b#h0##k，我想到一个好主意。", 37, 9062255, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.setStandAloneMode(false);
                                                                                                              cm.npc_LeaveField("oid=27573685");
                                                                                                              cm.npc_LeaveField("oid=27573686");
                                                                                                              cm.dispose();
                                                                                                              cm.warp(993175430, 0, false);
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}