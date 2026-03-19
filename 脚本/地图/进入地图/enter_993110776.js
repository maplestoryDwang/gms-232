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
      cm.npc_ChangeController(3004139, "oid=1975136", 722, -210, 38, 672, 772, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975136", "summon", 0, 0);
      cm.npc_ChangeController(3004143, "oid=1975137", 281, -317, 35, 231, 331, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975137", 'summon', 0, 0);
      cm.npc_ChangeController(3004154, "oid=1975138", 20, -436, 16, -30, 70, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975138", "summon", 0, 0);
      cm.npc_ChangeController(3004152, "oid=1975139", 689, -442, 52, 639, 739, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975139", "summon", 0, 0);
      cm.npc_ChangeController(3004153, "oid=1975140", -4, -198, 33, -54, 46, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975140", "summon", 0, 0);
      cm.npc_ChangeController(3004155, "oid=1975141", -121, -89, 90, -171, -71, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1975141", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 6000, 361, -143);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.effect_Text(["#fn黑体##fs18#神之子神殿"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我皮埃真是心潮澎湃啊。", 36, 3004139, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#虽然迄今为止，作为神官的人生一直都是多姿多彩的，\r\n可我没想到能有幸一同经历如此激动人心的时刻。", 36, 3004139, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("真的经历了许多绝望的时刻……\r\n虽然现在能笑着去回忆，但光是想想当初……哈哈……", 36, 3004143, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#虽然事到如今论短道长不太好，不过我一开始知道女神创造出来的孩子是两人的时候，可真是有些不满。", 36, 3004140, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我一直都知道啊。", 36, 3004141, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#这……这样吗……？", 36, 3004140, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯，你总是朝我瞪着一对三角眼嘛。", 36, 3004141, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face11#就这样，摆出这副表情。", 36, 3004141, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face7#这么说……你也并不是不会察言观色的嘛。", 36, 3004140, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face7#实在没办法啊，\r\n你让我怎么能够轻易接受一夕之间多出来的二重身。", 36, 3004140, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3004142, "oid=1975777", 438, -305, 35, 388, 488, 1, false, 1500, false);
                                cm.npc_SetSpecialAction("oid=1975777", "summon", 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#就是说呢。不过即便如此，最终二位也成功逆转了我无力改变的未来啊。", 36, 3004142, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("伦娜……", 36, 3004140, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("连相信其他人都很难做到的我，\r\n能够真正爱上冒险岛世界吗？", 36, 3004140, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("竭尽全力去击败黑魔法师，与其说是出于爱，\r\n倒不如说更多是源自于我个人的复仇欲。", 36, 3004140, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face10#可我们是超越者。", 36, 3004140, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face10#用无限的爱意去拥抱冒险岛世界……\r\n总得有这样的想法才行吧？", 36, 3004140, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 36, 3004142, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#不是的。", 36, 3004142, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#超越者的存在并不仅仅是为了拥抱世界、守护世界的。", 36, 3004142, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你这是什么意思，伦娜？", 36, 3004141, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face0#……', 36, 3004142, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#现如今已经脱离了超越者之路的我，即便试图说明也一定会徒劳无功。", 36, 3004142, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#但……相信你们很快就会知道的。", 36, 3004142, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("还有啊，爱这种东西，说不定某一天就会突然涌现的吧？", 36, 3004139, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("它会慢慢渗透，慢到自己都察觉不到的地步。", 36, 3004139, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("最初的时候，\r\n女神也并没有像现在这般充满了爱意。", 36, 3004139, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("即便眼下已经击退了黑魔法师，\r\n二位也还是会迎战新的威胁呀。", 36, 3004139, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#这是当然，如果有什么会威胁到冒险岛世界，我一定会竭力阻止的。", 36, 3004140, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#我也是。", 36, 3004141, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("有这样的态度就够了。", 36, 3004139, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('博大的爱就扎根于此。', 36, 3004139, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#果真意义非凡呢，\r\n下定决心辅佐二位，是我人生中所作出的最棒的选择！", 36, 3004139, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face7#什……什么情况，这气氛是怎样？", 36, 3004140, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("可能是看到你比从前懂事了太多，有些激动吧。", 36, 3004141, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#什么叫懂事了？我本来就这样！", 36, 3004140, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("不，和从前相比，真的变了很多。", 36, 3004141, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('我们大家都是。', 36, 3004141, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#虽说光是想想都觉得很心疼，\r\n不过日后二位也许还将面临更加危险的事态。", 36, 3004139, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#那也要一直赢下去。", 36, 3004140, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#毕竟就算形态不完整，我们也是超越者……", 36, 3004140, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#今后一定能做得更好。", 36, 3004141, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#没错，两个就……两个吧。", 36, 3004140, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#嗯，毕竟可以相互扶持嘛。", 36, 3004141, true, true);
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
                                                                                                                          cm.npc_LeaveField("oid=1975136");
                                                                                                                          cm.npc_LeaveField("oid=1975136");
                                                                                                                          cm.npc_LeaveField("oid=1975137");
                                                                                                                          cm.npc_LeaveField("oid=1975137");
                                                                                                                          cm.npc_LeaveField("oid=1975138");
                                                                                                                          cm.npc_LeaveField("oid=1975138");
                                                                                                                          cm.npc_LeaveField("oid=1975139");
                                                                                                                          cm.npc_LeaveField("oid=1975139");
                                                                                                                          cm.npc_LeaveField("oid=1975140");
                                                                                                                          cm.npc_LeaveField("oid=1975140");
                                                                                                                          cm.npc_LeaveField("oid=1975141");
                                                                                                                          cm.npc_LeaveField("oid=1975141");
                                                                                                                          cm.npc_LeaveField("oid=1975777");
                                                                                                                          cm.npc_LeaveField("oid=1975777");
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}