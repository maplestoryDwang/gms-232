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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 6000, -2, 18);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#肯恩据点"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#唔~这让人魂牵梦绕的“乡臭”……", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm47/SavageTerminal", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#事到如今，总算是真真切切地感觉到家了呢。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, 190, 18);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3004120, "oid=2367892", 416, 105, 15, 366, 466, 1, false, 1500, false);
                        cm.npc_SetSpecialAction("oid=2367892", "summon", 0, 0);
                        cm.npc_ChangeController(3004121, "oid=2367893", 457, 105, 16, 407, 507, 1, false, 1500, false);
                        cm.npc_SetSpecialAction("oid=2367893", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#啊……啊！#h0#？！你回来了啊！", 36, 3001542, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#哦，1号手下，\r\n我不在的这段期间，你的本事练得如何啊？", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#波……波波……波波……波……", 36, 3001252, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#棉花团也是，有没有对得起你的饭钱啊？", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#肯恩，快来看看谁来了！是#h0#！", 36, 3001542, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3004122, "oid=2367895", 229, 16, 27, 179, 279, 1, false, 1500, false);
                                    cm.npc_SetSpecialAction("oid=2367895", 'summon', 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#别咋呼了，科尼。", 36, 3001250, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们影子商人就像影子一般，来去无踪。", 36, 3001250, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#肯恩明明也暗暗掐着日子等#h0#回来呢……", 36, 3001542, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3001250, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#卡德娜，在新世界的冒险后有什么感想？", 36, 3001250, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#从眼神来看，你似乎已经在一定程度上接近了自己一直心心念念的强大。", 36, 3001250, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽然过程不太容易，不过现在我只靠自己也能够守住这地方。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#谦虚什么，一点都不像你了呢，\r\n听说你击败了冒险岛世界的#r堕落超越者#k？", 36, 3001250, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#哈哈，你果然知道了。\r\n虽说这笔生意并不能说有多划算，不过借此扬名倒也不坏。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#虽然很想夸夸你，不过现在就安下心来还为时过早，\r\n别忘了，你不过是终结了冒险岛世界的危机。", 36, 3001250, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#很快格兰蒂斯便将迎来另一番变故……\r\n要论情况，这边更糟糕。", 36, 3001250, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#没办法了，毕竟这里和冒险岛世界不同，不存在什么团结。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#所以说……", 36, 3001250, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#卡德娜，现在还不晚，表明自己王族的身份如何？", 36, 3001250, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我相信拥有王室血统的你绝对能够领导诺巴，\r\n如果能集结对抗高等翼人的势力，像冒险岛世界的人们一样组建联盟……", 36, 3001250, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#不行的。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#是我亲手撕毁了翅膀、尾巴还有姓名。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#毕竟王室血统什么的，现如今已与我无关了。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3001250, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#最重要的是，依着我的性子，要去领导众人实在是做不来。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#呵……\r\n是啊，不愧是你。", 36, 3001250, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#别担心，人称#b诺巴守护者#k之人正在大展拳脚，\r\n那才算得上是真正的正义使者吧。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我听说了，是叫狂龙战士的吗？", 36, 3001250, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#诺巴还是由那个家伙领导会更安全，\r\n虽然那家伙性子太过耿直，我们大概是合不来的。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#那你以后打算怎么办？", 36, 3001250, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#如果说守护者该有守护者的样子，要迎战邪恶，那么商人也该有商人的样子，要进行交易。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我打算去见一见团长。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#影子商团的团长？", 36, 3001250, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#没问题吗？这条路可能会很危险。", 36, 3001250, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#支部长，你已经观察了那么久，到现在还不明白吗？", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#没有什么能像危险一样让我热血沸腾。", 36, cm.getPlayer().getGender() == 1 ? 3001270 : 3001271, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_Hero9(0, 3000);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                        cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.forceStartQuest(39701, '');
                                                                                                                          cm.dispose();
                                                                                                                          cm.warp(993120000, 5, false);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                          cm.npc_LeaveField("oid=2367892");
                                                                                                                          cm.npc_LeaveField("oid=2367892");
                                                                                                                          cm.npc_LeaveField("oid=2367893");
                                                                                                                          cm.npc_LeaveField("oid=2367893");
                                                                                                                          cm.npc_LeaveField("oid=2367895");
                                                                                                                          cm.npc_LeaveField("oid=2367895");
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}