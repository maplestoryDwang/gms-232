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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, 76);
      cm.npc_ChangeController(3004434, "oid=556737", 5, 76, 2, -45, 55, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=556737", 'summon', 0, 0);
      cm.npc_ChangeController(3004431, "oid=556738", -215, 76, 2, -265, -165, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=556738", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=556739", -320, 76, 1, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=556739', "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("教团已经指定了圣剑的下一任主人。", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("同要求圣骑士忠于教团的教条一般，这次也是一位严守教条的忠诚之人。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("我们为圣剑寻回光芒之时，神谕必定会一同归来。", 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/3/2", 0, 1500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这是教团世代流传的，所谓的圣剑之主标志……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/3/0", 0, 1500, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不过另一个……？看起来有点普通啊……", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是可以证明密特拉圣骑士身份的标志。\r\n与我所持的别无二致。", 37, 3004430, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -96, 26);
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
                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#相似，但不一样。", 37, 3004431, false, true);
                                      cm.effect_Voice("Voice5.img/CH2/Idea/63-1", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#近天峰沦陷后，许多骑士都不知去向。\r\n其中肯定有人持有该标志。", 37, 3004430, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Seren/17", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你们怎么看？", 37, 3004430, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Seren/18", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这可不好办。眼下翼人军马上大军压境，那些骑士在哪儿都不知道，要追踪他们很不现实。", 37, 3004431, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Idea/64-1", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#嗯……那倒是。", 37, 3004430, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Seren/19", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#但我认为，剑的主人应该离我们很近，\r\n如果预言没错的话。", 37, 3004430, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Seren/20", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#预言没错的话……你的想法还真乐观。", 37, 3004431, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Idea/65-1", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#我们把这称为信念。", 37, 3004430, false, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Seren/21", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那你的信念真够乐观的。", 37, 3004431, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Idea/66-1", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#……说话请慎重。这里是圣地塞尔提乌。", 37, 3004430, false, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Seren/22", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("气氛又……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#有件事好奇怪。", 37, 3004431, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/84", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你指什么？", 37, 3004430, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Seren/23", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你也是天族人。而且非常踏实可靠。\r\n无论是从物理上、还是精神上来说，你都是最接近圣剑的人吧？", 37, 3004431, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Idea/85", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我不是说了吗。我没有那个标志。", 37, 3004430, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Seren/24", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#标志是教团授予的吧。\r\n但是，教团已经有多久没有听见神之语音了？", 37, 3004431, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Idea/86", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('#face0#……', 37, 3004430, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#这不是那么简单的事情。\r\n剑的主人不是你想当就能当，况且教团方面也不会轻易承认这份资格。", 37, 3004430, true, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Seren/25", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#反过来说，这也不是说不想干就不干的，教团方面承不承认也没什么意义。", 37, 3004431, true, true);
                                                                                cm.effect_Voice("Voice5.img/CH2/Idea/87", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#所谓天选之人，最终还是由#b太阳神密特拉#k决定的吧？", 37, 3004431, true, true);
                                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/88", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#我……我没有资格。因为我无法展开翅膀。", 37, 3004430, false, true);
                                                                                      cm.effect_Voice("Voice5.img/CH2/Seren/26", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#无法展开翅膀？为什么……", 37, 3004431, true, true);
                                                                                        cm.effect_Voice("Voice5.img/CH2/Idea/89", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face5#我在执行圣剑运送任务的途中，受了伤。", 37, 3004430, true, true);
                                                                                          cm.effect_Voice("Voice5.img/CH2/Seren/27", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#你身为诺巴族人，应该明白那意味着什么。", 37, 3004430, true, true);
                                                                                            cm.effect_Voice("Voice5.img/CH2/Seren/28", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#天色已晚，我先回去了。", 37, 3004430, true, true);
                                                                                              cm.effect_Voice("Voice5.img/CH2/Seren/29", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.Npc_Fadeout('oid=556739', 0, 500);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#无法展开翅膀的天族……", 37, 3004431, false, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/92-1", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.warp(410000690, 1, false);
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.forceCompleteQuest(39812);
                                                                                                    cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                                                                    cm.npc_LeaveField("oid=556737");
                                                                                                    cm.npc_LeaveField("oid=556737");
                                                                                                    cm.npc_LeaveField("oid=556738");
                                                                                                    cm.npc_LeaveField('oid=556738');
                                                                                                    cm.npc_LeaveField("oid=556739");
                                                                                                    cm.npc_LeaveField('oid=556739');
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