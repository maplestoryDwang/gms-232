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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm55/WhereStarsRest", 0, 0);
      cm.npc_ChangeController(3004850, "oid=678579", -610, 186, 7, -660, -560, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=678579", 'summon', 0, 0);
      cm.npc_ChangeController(3004851, 'oid=678580', -521, 195, 6, -571, -471, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=678580', "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -703, 140);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -571, 183);
      } else {
        if (status === V++) {
          cm.Hidden_background('antenna', 1, 0, 0, 0);
          cm.sendNormalTalk_Bottom("#face0#好了，这临时装置虽然造得有点粗糙，但可以有效地放大信号。", 36, 3004850, false, true, 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.setAccountQuestInfo(252, "count=7693;T=20210430212652");
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#下面只要把这个粘贴在潜水艇顶部就行……", 36, 3004850, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#哎呀，怎么都够不着啊。", 36, 3004850, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看着不算太高。\r\n走远点儿助跑猛力一跳，可以轻松够得着。", 36, 3004851, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#那样就会直接被海流卷走，再也回不来了。", 36, 3004850, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#嗬……", 36, 3004851, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#没办法了。我们仨坐上舞灯吧。", 36, 3004850, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("顺序怎么定？", 56, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#啊，不如这样？", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Sellas/illust/0", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.sendNormalTalk_Bottom("这是什么？", 56, 0, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这是刚才在潜水艇的搁板上发现的。是抽签用的。", 36, 3004851, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#那个……还留着吗。", 36, 3004850, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这上面写着“卫生值日用”。\r\n看来不论什么时候，大家都很讨厌打扫卫生啊。", 36, 3004851, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#哦……如果抽到末端是红色的签子……就是没中。", 36, 3004850, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("一边这么说着，一边抽到的签子末端是红色的哦？", 56, 0, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004850, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#休麦，你要振作起来。\r\n不管再怎么悲伤，胜负的世界是冷漠无情的。", 36, 3004851, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#……啊，嗯。", 36, 3004850, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#对。沃莉，你的话没错。\r\n但是……", 36, 3004850, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你们知道这个怎么设置吗？", 36, 3004850, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#……。", 36, 3004851, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#能不能让我想想办法……", 36, 3004851, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("不要！！", 56, 0, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -683, 183);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.teachSkill(80002983, 0, -1);
                                                                    cm.teachSkill(80002983, 1, 0);
                                                                    cm.npc_LeaveField("oid=678579");
                                                                    cm.npc_LeaveField("oid=678580");
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#很抱歉。我明白胜负的世界是冷漠无情的。", 36, 3004850, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("……。知道了，休麦……快点设置吧……。", 56, 0, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#等一会儿。嗯……", 36, 3004850, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#完全把不稳重心啊。\r\n#ho#，你下半身的力量是不是有点弱？", 36, 3004850, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("呃……。", 56, 0, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.teachSkill(80002982, 0, -1);
                                                                                    cm.teachSkill(80002982, 1, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_QTE(2);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('#face0#行了。', 36, 3004850, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.Hidden_background("antenna", 1, 1, 0, 0);
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#设置好了。把我放下去吧。", 36, 3004850, false, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom('#face1#……。', 36, 3004851, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#你们怎么一言不发？", 36, 3004850, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#大事不好了。", 36, 3004851, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#腿上没有任何感觉。", 36, 3004851, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我，我也……", 56, 0, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.teachSkill(80002982, -1, 0);
                                                                                                                cm.teachSkill(80002983, -1, 0);
                                                                                                                cm.dispose();
                                                                                                                cm.warp(993185006, 0, false);
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}