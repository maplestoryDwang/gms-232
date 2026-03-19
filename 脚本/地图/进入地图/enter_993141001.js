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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3003750, 'oid=502137', 1487, 339, 135, 1437, 1537, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502137", "summon", 0, 0);
      cm.npc_ChangeController(3004092, "oid=502138", 1628, 312, 136, 1578, 1678, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=502138', "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502138", 'sit', -1, 1);
      cm.npc_ChangeController(3004431, "oid=502139", 1698, 329, 136, 1648, 1748, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=502139", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502139", "sit", -1, 1);
      cm.npc_ChangeController(3004089, "oid=502140", 1771, 327, 136, 1721, 1821, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=502140", 'summon', 0, 0);
      cm.npc_ChangeController(3004067, "oid=502141", 1420, 327, 135, 1370, 1470, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=502141", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=502141", 'sit', -1, 1);
      cm.npc_ChangeController(3004114, "oid=502142", 1333, 330, 134, 1283, 1383, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=502142", "summon", 0, 0);
      cm.npc_ChangeController(3004116, "oid=502143", 1258, 329, 133, 1208, 1308, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=502143', "summon", 0, 0);
      cm.npcMove(3003750, 0, -20, 0);
      cm.npcMove(3004092, 0, -50, 0);
      cm.npcMove(3004067, 0, -35, 0);
      cm.npcMove(3004431, 0, -30, 0);
      cm.npcMove(3004089, 0, -30, 0);
      cm.npcMove(3004116, 0, -30, 0);
      cm.npcMove(3004114, 0, -30, 0);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#稍后，新前哨基地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1600, -573);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#也就是说……冒险岛世界和格兰蒂斯本就是一体的，现在不过是回到了原来的状态，你是这个意思吗？", 37, 3003672, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#对，没错。", 37, 3003750, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果是平时，我肯定会把这一切视为戏言，但现在看到这片天空…… ", 37, 3003672, true, true);
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
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呼，真不敢相信。", 37, 3003672, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("BgmEvent2/glory_Base", 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 1600, 283);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#万神殿望眼可及。心情还真有些微妙啊。", 37, 3004431, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这件事会给冒险岛世界带来什么实质性的影响呢？", 37, 1540453, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#像黑魔法师一样，格兰蒂斯也有企图颠覆世界的#r堕落超越者#k。", 37, 3003750, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#到目前为止我们都有着各自的立场，但今后似乎不再是那样了。", 37, 3004431, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我真是担心。万一那人立刻率领军队攻入冒险岛世界的话……", 37, 3003672, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果真是那样，我们能应付得过来吗？", 37, 3003672, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('#face0#……', 37, 3003750, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#短期内不会发生那种事情的。", 37, 3004433, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_SetHideEffect(1);
                                              cm.npc_ChangeController(3004433, "oid=502544", 1873, 348, 137, 1823, 1923, 1, true, 1500, false);
                                              cm.npc_SetSpecialAction("oid=502544", "summon", 0, 0);
                                              cm.npc_ChangeController(1540451, "oid=502545", 1820, 349, 137, 1770, 1870, 1, true, 1500, false);
                                              cm.npc_SetSpecialAction("oid=502545", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1500, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1754, 300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(2000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("抱歉，我们来迟了。我来介绍一下。这位是#b圣地塞尔提乌#k的王子，卡莱尔。", 37, 1540451, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#塞尔提乌？我第一次听说这个地方。", 37, 3003672, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#原来您就是从海的彼岸来的那位贵客啊。", 37, 3004431, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3003672, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#没错。", 37, 3004433, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("卡莱尔大人，请您说明一下翼人军的动向。", 37, 1540451, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##r吉伦·达尔摩尔#k的翼人军现正在对格兰蒂斯全面开战。", 37, 3004433, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#翼人军虽然势力庞大，但因为战线过长，还是有很多势力可以与之他们一战。", 37, 3004433, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#况且那个火魔暂时还无法跨越海洋抵达冒险岛世界。", 37, 3004433, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("还好是这样。", 37, 1540453, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……卡莱尔，你为什么来联盟这边？", 37, 3004431, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#虽然现在攻势还只是试探性的，但过不了多久，肯定会有大军浩荡而来。\r\n我们#b塞尔提乌#k是逃不出#r吉伦·达尔摩尔#k的掌心的。", 37, 3004433, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#既然如此，我们塞尔提乌希望向#b冒险岛联盟#k和#b对抗者#k请求援军，借助你们所拥有的可以击败#r超越者#k的强大力量。", 37, 3004433, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3003672, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#虽然联盟的情况也不乐观，但如果趁这次机会，能汇集格兰蒂斯大陆的全部势力，一定会对提升战斗力有巨大帮助。", 37, 3003672, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#也可以更轻松地获得翼人军的情报了。", 37, 3003672, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#很抱歉，塞尔提乌并不打算加入联盟。", 37, 3004433, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003672, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#我们只想守卫圣地，\r\n并不想与强大的超越者起冲突。", 37, 3004433, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你在说什么呢？\r\n不管世界变成什么样子，只要己方安危无虞，就算是万事大吉了吗？", 37, 3003672, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#吉格蒙特，你冷静点。\r\n你不能强迫所有人和我们一起战斗。", 37, 3003750, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#可是……", 37, 3003672, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我同意女皇陛下所言。\r\n绝不会对需要帮助的人视而不见，这不就是我们一直坚守的信念吗？", 37, 1540451, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#什么？", 37, 3003750, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#什么？！", 37, 3003672, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#看起来……似乎巨大的压力，最终还是影响了南哈特的大脑。", 37, 3004431, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("居然连伊、伊黛娜大人都这么说……", 37, 1540453, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我单纯是希望能够向陷入困境的人们施予我们的善意。", 37, 1540451, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("以此事为契机，塞尔提乌和联盟便可以成为朋友。\r\n还有，他们是不会忘记朋友的。", 37, 1540451, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这是自然。", 37, 3004433, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#塞尔提乌面积巨大，是朝圣者的圣地。\r\n因为有着众多前来朝拜的朝圣者，这里也有着十分可观的捐赠收入。", 37, 3004433, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#若您愿意向圣地派兵，为表感谢，我们会赠予您#b10箱黄金#k。", 37, 3004433, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#原来如此。", 37, 1540451, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#既然如此……", 37, 3003672, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face10#……", 37, 3003750, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#这真是万幸。你说是吧？", 37, 3004431, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("哈哈……", 37, 1540453, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_ChangeController(3004158, "oid=502999", 1404, 349, 134, 1354, 1454, 0, true, 1500, false);
                                                                                                                                  cm.npc_SetSpecialAction("oid=502999", 'summon', 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#（女皇陛下，有什么开心的事吗……）", 37, 3004158, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3003750, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#今天的会议就先到此为止。把情报整理好后就去想办法解决吧，记得谨慎一点。", 37, 3003750, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#还有……#h0#大人请留步。", 37, 3003750, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else if (status === V++) {
                                                                                                                                                cm.warp(993141002, 0, false);
                                                                                                                                                cm.npc_LeaveField('oid=502137');
                                                                                                                                                cm.npc_LeaveField("oid=502137");
                                                                                                                                                cm.npc_LeaveField('oid=502138');
                                                                                                                                                cm.npc_LeaveField("oid=502138");
                                                                                                                                                cm.npc_LeaveField("oid=502139");
                                                                                                                                                cm.npc_LeaveField('oid=502139');
                                                                                                                                                cm.npc_LeaveField("oid=502140");
                                                                                                                                                cm.npc_LeaveField("oid=502140");
                                                                                                                                                cm.npc_LeaveField("oid=502141");
                                                                                                                                                cm.npc_LeaveField("oid=502141");
                                                                                                                                                cm.npc_LeaveField('oid=502142');
                                                                                                                                                cm.npc_LeaveField("oid=502142");
                                                                                                                                                cm.npc_LeaveField('oid=502143');
                                                                                                                                                cm.npc_LeaveField("oid=502143");
                                                                                                                                                cm.npc_LeaveField("oid=502544");
                                                                                                                                                cm.npc_LeaveField('oid=502544');
                                                                                                                                                cm.npc_LeaveField("oid=502545");
                                                                                                                                                cm.npc_LeaveField("oid=502545");
                                                                                                                                                cm.npc_LeaveField("oid=502999");
                                                                                                                                                cm.npc_LeaveField('oid=502999');
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