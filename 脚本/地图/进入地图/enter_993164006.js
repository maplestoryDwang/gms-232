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
      cm.npc_ChangeController(3004908, "oid=363525", 492, 3, 8, 442, 542, 1, false, 0, false);
      cm.npc_ChangeController(3004912, 'oid=363526', 432, 63, 3, 382, 482, 0, false, 0, false);
      cm.npc_ChangeController(3004912, "oid=363527", 279, 63, 3, 232, 329, 0, false, 0, false);
      cm.npc_ChangeController(3004912, "oid=363528", 186, 63, 1, 136, 236, 0, false, 0, false);
      cm.npc_ChangeController(3004912, "oid=363529", 100, 63, 1, 50, 150, 0, false, 0, false);
      cm.npc_ChangeController(3004912, 'oid=363530', 362, 63, 3, 312, 412, 0, false, 0, false);
      cm.npc_ChangeController(3004907, "oid=562918", 1160, -49, 6, 1110, 1210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=562918", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
        cm.effect_Text(["#fn黑体##fs18#翌日……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1056, -7);
        } else {
          if (status === V++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1058, -36);
            cm.inGameDirectionEvent_OneTimeAction(29, 999999);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                  cm.sendNormalTalk_Bottom("#face0#饭吃得怎么样了？", 36, 3004907, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#就这样了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不，我说的是和老大吃的饭，我听说你们昨晚共进晚餐了。", 36, 3004907, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊……没什么的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3004910, "oid=562943", 970, 20, 4, 920, 1020, 0, true, 700, false);
                            cm.npc_SetSpecialAction("oid=562943", "summon", 0, 0);
                            cm.npc_ChangeController(3004911, 'oid=562944', 900, 20, 4, 850, 950, 0, true, 700, false);
                            cm.npc_SetSpecialAction("oid=562944", 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#该隐！听说你跟老大吃过饭了？！", 36, 3004910, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哈……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#食物呢？做得还行吗？", 36, 3004910, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是啊，\r\n虽说这些菜很不错，在这里很罕见……\r\n可我反而不记得味道了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#你紧张了吗？", 36, 3004910, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#实在是不知道进了嘴巴还是鼻子里，真尴尬。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#（现在想来……好像也没什么特别的事，为什么会叫我呢？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#话说你不觉得从刚刚起就很嘈杂吗？", 36, 3004911, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这还看不出来吗？这些是新加入的队员嘛。", 36, 3004910, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 370, -7);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip('oid=562943', -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=562944", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我什么都……不记得了……", 36, 3004912, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#这里到底是什么地方？你是什么人？", 36, 3004912, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#在座的各位全都是因为长期不还债而被限制人身自由，另外，各位不良债务的所有权已全数转到了本公司。", 36, 3004908, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#从现在起，在账要回来之前，各位有义务认真执行本公司发放的所有任务。", 36, 3004908, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#别废话了！倒是快说说你对我们都做了什么！", 36, 3004912, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#合约期内，本公司会将各位过去的所有#r记忆提取出#k以作担保，提取出的记忆会在合约结束时返还。", 36, 3004908, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你们这帮家伙……竟然擅自夺走了我的记忆？！", 36, 3004912, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我就没有家人吗？朋友呢？妻子呢？至少告诉我这件事！", 36, 3004912, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#有关#r设为担保的记忆#k，我什么都不能说。", 36, 3004908, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#你们这帮家伙！！别搞笑了！你们以为我会听你们，乖乖任你们宰割吗？！", 36, 3004912, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#别废话，把我的记忆交出来！！", 36, 3004912, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#想起从前了呢。", 36, 3004910, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#就是说啊。", 36, 3004911, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#比亚斯，你还记得当初吗？\r\n你刚来的时候什么都不懂就往该隐那里冲……", 36, 3004910, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#都说了多少遍了！", 36, 3004911, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我说，就这么看起来，这里的家伙也不过如此嘛？", 36, 3004904, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 220, -7);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_ChangeController(3004904, 'oid=562971', 20, -60, 1, -30, 70, 0, true, 700, false);
                                                                                                    cm.npc_SetSpecialAction("oid=562971", "summon", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(350);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_ChangeController(3004909, "oid=562972", -50, -60, 1, -100, 0, 0, true, 700, false);
                                                                                                      cm.npc_SetSpecialAction('oid=562972', 'summon', 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#别这样了，干脆推翻一切。", 36, 3004904, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#说得没错，将这帮家伙砸个稀巴烂！！", 36, 3004912, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 1056, -7);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这可真是……又开始了啊。", 36, 3004907, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn2", 100);
                                                                                                                    cm.npc_SetSpecialAction("oid=562918", 'call', -1, 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#是……是……新任务就麻烦你了，是，和以前一样，是。", 36, 3004907, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#还真是片刻都没得休息啊，该隐，\r\n也难怪老大会喜欢你。", 36, 3004910, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.forceCompleteQuest(39405);
                                                                                                                              cm.getPlayer().levelUp();
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;53=h1;73=h1");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h1");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;54=h1;73=h0");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;54=h1;73=h0");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h1;73=h0");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h1;82=h1;73=h0");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h1;82=h1;73=h0;83=h1");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h1;82=h1;73=h0;83=h1;84=h1");
                                                                                                                              cm.updateInfoQuest(39400, "51=h0;52=h0;80=h1;53=h0;81=h1;54=h1;82=h1;73=h0;83=h1;84=h1;85=h1");
                                                                                                                              cm.npc_LeaveField("oid=562918");
                                                                                                                              cm.npc_LeaveField("oid=562943");
                                                                                                                              cm.npc_LeaveField("oid=562944");
                                                                                                                              cm.npc_LeaveField("oid=562971");
                                                                                                                              cm.npc_LeaveField("oid=562972");
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(410000402, 1, true);
                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}