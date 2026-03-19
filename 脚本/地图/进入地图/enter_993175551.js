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
  if (cm.getQuestStatus(100442) != 1) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062255, "oid=27818794", 150, 110, 1, 100, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=27818794", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 35, 73);
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
            cm.sendNormalTalk_Bottom("#face0#你顺利到达了啊。\r\n这里便是#b严禁出入的房间。#k 不是谁都可以到这里来的。", 37, 9062255, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……！有好多假面。", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这些全都属于迄今为止所有邀请来参加假面舞会的客人。", 37, 9062255, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那些客人都怎么样了？", 57, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那些客人也全部在这个宅子里。\r\n都在这间宅子的四处#b不知所谓地#k四处游荡。\r\n你应该也见到了。就是你在那些阁楼里所见到的。", 37, 9062255, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我在阁楼见到的？\r\n啊……你是说那些幽灵吗？", 57, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错，那些幽灵就是迄今为止#b邀请来舞会的客人们#k。\r\n他们都中了#b假面绅士#k的圈套，并被永远困在了这个地方……", 37, 9062255, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b假面绅士#k？", 57, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b假面绅士。#k\r\n就是这个宅子的主人，也是主持#b假面舞会#k的……恶魔的爪牙。", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, 18, -111);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#听说他生前是一位#b富裕的企业家#k，也是一位#b热爱艺术和派对的绅士#k。", 37, 9062255, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#但他在因为一场#r可怕的事故#k丢了性命后……\r\n便开始举办#b假面舞会#k，以此来吸收死者的灵魂。", 37, 9062255, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 35, 73);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.sendNormalTalk_Bottom("吸收灵魂？", 57, 0, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#对，就像刚刚你见到的#b'可怕的假面'#k一样，如果一直戴着假面，就会#b忘记自己的死亡#k，无法去往#b死者世界#k。\r\n假面绅士会吸收这些客人的灵魂来维持生命。", 37, 9062255, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b死者世界#k……？这个地方在哪里？", 57, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我也没有去过。\r\n但是……我知道必须要去。以前我的#b爸爸#k说过，死者必须要去#b死者世界#k。", 37, 9062255, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("那为什么不能自己摘了假面呢？这也不难啊？", 57, 0, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你还记得刚刚可怕的假面深陷在#b对村庄担忧#k之中的样子吗？", 37, 9062255, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("对……即便忘记了自己死亡的事实，却还一直在担心村庄。", 57, 0, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这就是假面将死者牢牢困住的方式。\r\n只要是死者，假面就一定会让他们无法忘记自己的#b留恋或是悲伤的感情#k", 37, 9062255, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#如果没有人帮他们消解那份#b留恋和悲伤的情感#k，\r\n客人们就无法自己脱下假面。", 37, 9062255, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("如果一直戴着假面的话，灵魂就会被吸走吗？", 57, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#准确来说，在通往死者世界通道被开启的 #b今天，10月31日#k。\r\n戴着假面，将假面绅士的#b钢琴演奏一直听到最后的话#k……", 37, 9062255, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#就会被假面绅士#b吸走灵魂#k，失去自我意识，然后永远只能游荡在这间宅子里。", 37, 9062255, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#但是，并不是完全没有机会。\r\n只要在#b10月31日午夜摘掉假面……#k", 37, 9062255, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#所有客人就能去死者世界了。\r\n无法吸收灵魂的假面绅士也会失去力量。", 37, 9062255, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("那么，只要像刚刚一样帮助他们，就可以让他们自己摘掉假面了？", 57, 0, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#对。但是大家被困在这里的理由不尽相同，要找到解决办法并不容易……", 37, 9062255, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("那这么说来，你也是被困在这里了吗？", 57, 0, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#……嗯。但我又和他们有些不一样。假面绅士对我下了#b特别的诅咒#k……", 37, 9062255, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("什么诅咒？", 57, 0, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我既没有被吸取灵魂，也不能去往死者世界，只能一直协助举行假面舞会……而且我还失去了全部记忆。", 37, 9062255, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#不过，看着屋里的物件，我慢慢恢复了一些记忆。不知道是不是因为诅咒的威力变弱了，我自己可以摘下面具，于是我下决心一定要终结这个可怕的派对。", 37, 9062255, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#但是这并非能靠我一己之力办到的。\r\n虽然我也借助与我处境相同的#b管家和女仆#k的力量来劝说客人，但还是远远不够……所以我一直在等像你一样的人来帮助我们。", 37, 9062255, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我也想去#b死者世界#k……\r\n我也很想念在那里等我的#b爸爸，妈妈#k……", 37, 9062255, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("你的家人……？", 57, 0, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我的家人都被#b假面绅士#k杀害了……\r\n应该已经去了死者世界……", 37, 9062255, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("原来如此……\r\n我知道了。我会帮你的。", 57, 0, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#谢谢……没想到我等了几十年， 终于等到了可以帮我的人……", 37, 9062255, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#真的很谢谢你……", 37, 9062255, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("要去哪里才能见到下一个客人？", 57, 0, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#先到其他客房去吧。", 37, 9062255, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#对了……还有，绝不能让#b假面绅士#k发现我们的计划。\r\n如果被假面绅士察觉到我们的计划，那么全部客人会立刻被他#b消灭#k的。", 37, 9062255, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#那样一来，你的性命也会……受到威胁。", 37, 9062255, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("嗯……明白了，我会小心的。", 57, 0, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.setStandAloneMode(false);
                                                                                                              cm.npc_LeaveField("oid=27818794");
                                                                                                              cm.dispose();
                                                                                                              cm.warp(993175550, 0, false);
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}