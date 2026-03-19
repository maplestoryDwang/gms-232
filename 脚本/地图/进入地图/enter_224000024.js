var status = -1;
var selectionLog = [];
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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1752, 326);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074110, "oid=2595185", -1707, 320, 498, -1757, -1657, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595185", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2595186", -1885, 320, 493, -1935, -1835, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595186", "summon", 0, 0);
        cm.npc_ChangeController(2074116, "oid=2595187", -1768, 320, 496, -1818, -1718, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595187", "summon", 0, 0);
        cm.npc_ChangeController(2074115, "oid=2595188", -1795, 320, 496, -1845, -1745, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595188", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("真的很谢谢，这份大恩大德我该怎么偿还……", 37, 2074116, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("听你们这么一说，看来您是独自带大女儿的，", 37, 2074116, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("要不要给您介绍一个不错的姑娘？我工作的地方有个叫#b芭德阿姨#k的……", 37, 2074116, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不用了，不用了，没关系的。\r\n我现在只想找回女儿，其他的我什么都不想。", 37, 2074110, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这样啊，真的谢谢了。\r\n那我就先行告辞了……", 37, 2074116, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('喵！', 37, 2074115, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=2595188");
                      cm.npc_LeaveField("oid=2595187");
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#到底是怎么一回事？祭物就只是那只猫，\r\n沈青只留下了花样发带……", 37, 2074100, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊……沈青啊！青儿！你到底去哪儿了，青儿！", 37, 2074110, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2074118, "oid=2595202", -1626, 320, 498, -1676, -1576, 1, false, 500, false);
                            cm.npc_SetSpecialAction("oid=2595202", "summon", 0, 0);
                            cm.sendNormalTalk_Bottom("爹？你去哪儿了？", 37, 2074118, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2595185", 1);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595185"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.sendNormalTalk_Bottom("青儿？青儿！", 37, 2074110, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/illust/5", 0, 500, 0, 0, 7, 4, 1);
                                  cm.sendNormalTalk_Bottom("青儿！你到底去哪儿了！", 37, 2074110, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("什么？我……我去茅房了……", 37, 2074118, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
                                        cm.sendNormalTalk_Bottom("茅房？", 37, 2074110, false, true);
                                        cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("茅房……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#茅房！", 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                cm.sendNormalTalk_Bottom("对不起，我是不是去太久了？\r\n好不容易吃了一次#g肉菜#k……我一整天……", 37, 2074118, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("青儿！青儿啊！\r\n呜呜呜呜呜！我还以为你被卖给商人了……", 37, 2074110, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("商人吗？#b清朝商人#k？\r\n啊！我已经决定去那边工作了。", 37, 2074118, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("他们看了我的#b发带#k，说是特别喜欢呢！\r\n我已经先把自己用的那个给卖掉了，他们还说能不能多做几个……", 37, 2074118, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("要是去那里工作，以后就能让您总吃上肉了，\r\n供米三百石应该也能很快备好的。", 37, 2074118, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("青，青儿啊！！！！", 37, 2074110, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("什么？什么？您怎么了，爹？", 37, 2074118, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我！我不希望你去工作！\r\n你千万不要去！绝对不要去那里！不可以！", 37, 2074110, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("可是，那边给的钱真的很多啊……", 37, 2074118, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("不！那些家伙，那些商人面相不好！\r\n千万！你千万不要去！你再去找找其他工作。", 37, 2074110, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("面相吗？您不是看不见嘛……", 37, 2074118, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("青儿啊啊啊啊啊啊啊啊啊！", 37, 2074110, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("是！好好，我答应您，我不去，爹。\r\n您冷静点。", 37, 2074118, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我看不看得见并不重要，青儿，重要的是我会失去你。", 37, 2074110, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("爹……", 37, 2074118, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("我们就像现在这样，幸福地生活下去。\r\n眼睛能看见了又怎么样？只要有你在我就满足了。", 37, 2074110, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("是，爹。", 37, 2074118, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595186"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#啊！沈师铭身上有宝玉！", 37, 2074100, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/1", 0, 300, 0, 0, 8, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('back3', "Map/Effect2.img/downtown2015/illust/15", 0, 1000, 0, 0, 9, 4, 1);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#g(获得了后悔宝玉！)#k", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('back2', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_ProcessOnOffLayer("back3", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                              cm.sendNormalTalk_Bottom("#face1#既然已经获得了宝玉，\r\n那我们就告辞了吧？", 37, 2074100, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=2595186");
                                                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                cm.sendNormalTalk_Bottom("话说回来，青儿，你也跟这边的尼姑打声招呼。\r\n为了找你她也帮了不少的忙。", 37, 2074110, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('尼姑？您说的是谁啊？', 37, 2074118, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=2595185", -1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2595185", 1);
                                                                                                        cm.sendNormalTalk_Bottom("我什么声音……都没听见啊……？\r\n好吧……看样子是已经走远了吧。", 37, 2074110, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('有谁，跟您一块儿吗？', 37, 2074118, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("她一直在帮我，\r\n南无阿弥陀佛……", 37, 2074110, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.updateInfoQuest(30412, "gExpCheck=1");
                                                                                                              cm.forceStartQuest(30412, '');
                                                                                                              cm.gainExp(142059);
                                                                                                              cm.forceCompleteQuest(30412);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.dispose();
                                                                                                              cm.warp(224000000, 21, true);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;