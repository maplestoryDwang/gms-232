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
      cm.npc_ChangeController(3001626, "oid=375288", -793, -171, 0, -843, -769, 1, false, 0, false);
      cm.npc_ChangeController(3001602, "oid=375289", 401, 32, 0, 351, 451, 1, false, 0, false);
      cm.npc_ChangeController(3001656, "oid=375290", -4, 35, 32, -54, 46, 0, false, 0, false);
      cm.npc_ChangeController(3001615, "oid=375291", 293, 35, 64, 243, 343, 0, false, 0, false);
      cm.npc_ChangeController(3001686, "oid=375292", -81, 35, 32, -159, -59, 4, true, 0, false);
      cm.npc_ChangeController(3001687, "oid=375293", 654, 35, 66, 588, 688, 4, true, 0, false);
      cm.npc_ChangeController(3001688, 'oid=375294', 717, 35, 66, 692, 792, 4, true, 0, false);
      cm.npc_ChangeController(3001689, 'oid=375295', 1028, 35, 66, 932, 1032, 4, true, 0, false);
      cm.npc_ChangeController(3001686, "oid=375296", 1039, 35, 66, 1039, 1139, 5, true, 0, false);
      cm.npc_ChangeController(3001686, "oid=375297", -1031, 35, 25, -1083, -983, 5, true, 0, false);
      cm.npc_ChangeController(3001688, "oid=375298", -971, 35, 25, -1011, -911, 5, true, 0, false);
      cm.npc_ChangeController(3001662, "oid=375299", -1766, 35, 12, -1816, -1716, 1, false, 0, false);
      cm.npc_ChangeController(3001662, 'oid=375300', -1626, 35, 13, -1626, -1576, 1, false, 0, false);
      cm.npc_ChangeController(3001670, "oid=375301", -2124, 35, 1, -2174, -2074, 5, true, 0, false);
      cm.npc_ChangeController(3001671, "oid=375302", -2029, 35, 12, -2073, -1979, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background("doll", 1, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1066, -526);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
        cm.npc_LeaveField("oid=375288");
        cm.npc_LeaveField("oid=375297");
        cm.npc_LeaveField('oid=375298');
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 600, -70);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(8000);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1066, -44);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.setAmbience("Ambience.img/town", 200, 60);
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 1066, -430);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                            cm.effect_Text(["#fn黑体##fs18#青云谷商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face12#嘶~", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face11#哈~", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face11#这便是尘世的味道啊！\r\n那就让我去享受享受……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3001651, "oid=2944533", 1116, -504, 79, 1066, 1166, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2944533", "summon", 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#什么玩意儿！？你该不会这么快就忘了你的承诺吧？", 37, 3001651, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face10#那什么，我的意思不就是开始后试着享受其中嘛？\r\n总得听人把话说完嘛，这么死脑筋，简直和我师父一个样。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你小子的话倒是要让人能相信啊……", 37, 3001651, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#切，你倒是告诉我怪物在哪儿啊！\r\n你体内的那些家伙总该感觉到点什么吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#这……我也不知道。", 37, 3001651, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face7#什么！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#变小之后就感觉不到了，\r\n不过搞不好若是能稍微恢复一点力量就能感觉到……", 37, 3001651, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#所以眼下没办法得知那帮家伙的位置，\r\n难道就没什么有关怪物的线索吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#那帮家伙原本就是在此地横行的怪物，\r\n在被我饕餮吸收之前，力量、大小和种类都是不尽相同的。", 37, 3001651, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#确实费了点力气把其中几个吞下去，\r\n也对，哪儿有怪物愿意被囚禁起来。", 37, 3001651, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这会儿应该已经解除了封印，开心不已吧，\r\n搞不好已经到处捅篓子了。", 37, 3001651, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#毕竟外形各不相同，贴榜也就没什么意义了。\r\n要说线索，也就只有那帮家伙可能会惹事这一条……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face7#额……除了亲自上阵，就没有别的法子了？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face11#好吧，眼下也只能胡乱试一试了，\r\n试过之后总能有结果吧？你说是不是？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#嗯……除此之外就没有别的法子了啊……", 37, 3001651, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face11#好吧，那眼下应该最先做的事……果然就是那个。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#那是什么？", 37, 3001651, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face10#就是有这么回事，快走吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face9##fc0xFFbfbfbf#（《太乙真人传》12卷中说，要想知道传闻就得去酒馆，\r\n去酒馆找找正在聊天的客人吧。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.forceCompleteQuest(39513);
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else if (status === V++) {
                                                                                              cm.warp(410000200, 4, false);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.npc_LeaveField("oid=2944533");
                                                                                              cm.npc_LeaveField("oid=2944533");
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