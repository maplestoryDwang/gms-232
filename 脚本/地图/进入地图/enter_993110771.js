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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3004123, "oid=2353473", -70, 144, 14, -120, -20, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=2353473", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 4000, -122, -264);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1500, 3500, -122, 120);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs18#尤兰斯的棚屋"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咦，狂龙战士？你怎么会来这里？", 56, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊，爆莉萌天使。", 36, 3004123, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#其实我是来见迪奥的……可惜白跑了一趟，正打算回去。", 36, 3004123, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是，是吗？迪奥她……\r\n唔……不在啊。", 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(呜……早知道就早点来了！)", 56, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#爆莉萌天使你怎么会来这里？", 36, 3004123, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我？我……我也是来找迪奥的，\r\n我们好久没见了，嘿嘿……", 56, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这样啊，\r\n说起来最近倒是压根没见过迪奥这家伙嘛。", 36, 3004123, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我莫名有点担心这个爱哭鬼会不会又在哪儿哭呢。", 36, 3004123, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("（爱哭鬼……？）", 56, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是吗？在我看来，迪奥就算独自一人也能过得相~当好啊？", 56, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#什么？刚刚说好久没见了……", 36, 3004123, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("因、因为我和迪奥熟啊！\r\n几日不见如隔三秋啊……哈哈……", 56, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#这样啊……那我就先告辞了。", 36, 3004123, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2353473", -1, 300, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -310, 120);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('那个……！', 56, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2353473", 1);
                                                    cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3004123, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("啊，关于据点的耀光石……", 56, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("迪奥让我转告一声谢谢。", 56, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#face0#……', 36, 3004123, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#那有没有说过其他什么话呢？", 36, 3004123, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('嗯？呃……还不错？', 56, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('好感动啊？', 56, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('太漂亮了？', 56, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("那什么，这种赞美……好像也有过……", 56, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#……", 36, 3004123, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#她是什么表情？", 36, 3004123, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("那当然是笑得超灿烂的咯！", 56, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这样啊……", 36, 3004123, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("（你为什么……看起来这样悲伤？）", 56, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#从前我所认识的那个迪奥，也一定会被这种不起眼的礼物打动，\r\n感动到哭哭啼啼。", 36, 3004123, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#然后就会眯起肿得大大的眼睛，笑得像个傻子。", 36, 3004123, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('……', 56, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#你说得没错。", 36, 3004123, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#就算没有我在，迪奥也过得很好呢，\r\n看来她已经不再是从前那个爱哭鬼了呢。", 36, 3004123, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("这个嘛……应该是吧……", 56, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#那就……下次再见了，爆莉萌天使。", 36, 3004123, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("你，你打算就这么走了吗？再稍微等一会儿，迪奥就会来了吧？", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#既然已经确认你过得很好，现在我也可以放心离开了。", 36, 3004123, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2353473", -1);
                                                                                                        cm.npc_SetForceMove("oid=2353473", -1, 500, 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.Npc_Fadeout("oid=2353473", 0, 500);
                                                                                                          cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_ChangeController(3004124, "oid=2353486", 566, 92, 43, 516, 616, 1, false, 1500, false);
                                                                                                                cm.npc_SetSpecialAction("oid=2353486", "summon", 0, 0);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 420, 120);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 270, 135);
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#看起来你思绪颇多啊。", 36, 3004124, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("回头想想……卡伊尔说得没错，我过去真的是个爱哭鬼来着。", 56, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("那天，雨实在下太久了，久到我以为太阳再也不会升起，为此痛哭不已。", 56, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#哈哈，所以被称为爱哭鬼也没什么好抱怨的。", 36, 3004124, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom('呜……。', 56, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("不过那时候卡伊尔是这么说的。", 56, 0, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("别伤心，迪奥。\r\n这场大雨会清洗整个世界，明天升起的太阳，光芒一定会更加明亮。", 56, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#呵呵，这话不错。\r\n悲伤的日子过完，总会迎来喜悦的生活。", 36, 3004124, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#好吧，终于擦干泪水的迪奥，现在你有什么打算？", 36, 3004124, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("我……", 56, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom('我想要升起彩虹！', 56, 0, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#彩虹？", 36, 3004124, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("时隔数百年，雨终于停了啊。", 56, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("希望大家都可以擦干泪水，尽情拥抱这片晴空……", 56, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("那里一定会有绚烂的彩虹。", 56, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("毕竟我是带给大家笑容的战场偶像。", 56, 0, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_Hero9(0, 3000);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk('喳喳！！', 4, 3004150, false, true);
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
                                                                                                                                                                            cm.npc_LeaveField("oid=2353473");
                                                                                                                                                                            cm.npc_LeaveField("oid=2353473");
                                                                                                                                                                            cm.npc_LeaveField("oid=2353486");
                                                                                                                                                                            cm.npc_LeaveField("oid=2353486");
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}