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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001300, "oid=916872", 100, 0, 43, 50, 150, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=916872', 'summon', 0, 0);
        cm.npc_ChangeController(3001310, "oid=916873", 255, 0, 43, 205, 305, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=916873", "summon", 0, 0);
        cm.npc_ChangeController(3001307, 'oid=916874', 175, 0, 43, 125, 225, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=916874', "summon", 0, 0);
        cm.npc_ChangeController(3001301, 'oid=916875', 500, 0, 43, 450, 550, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=916875', "summon", 0, 0);
        cm.npc_ChangeController(3001313, "oid=916876", 595, 0, 43, 545, 645, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=916876', "summon", 0, 0);
        cm.npc_ChangeController(3001302, "oid=916877", 680, 0, 44, 630, 730, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=916877", "summon", 0, 0);
        cm.npc_ChangeController(3001303, "oid=916878", 750, 0, 44, 700, 800, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=916878", "summon", 0, 0);
        cm.npc_ChangeController(3001305, "oid=916879", 820, 0, 44, 770, 870, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=916879", "summon", 0, 0);
        cm.npc_ChangeController(3001321, 'oid=916880', 890, 0, 44, 840, 940, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=916880", "summon", 0, 0);
        cm.npc_ChangeController(3001322, "oid=916881", 960, 0, 44, 910, 1010, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=916881', "summon", 0, 0);
        cm.npc_ChangeController(3001308, "oid=916882", -100, 0, 42, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=916882', 'summon', 0, 0);
        cm.npc_ChangeController(3001311, "oid=916883", -295, 0, 42, -345, -245, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=916883', 'summon', 0, 0);
        cm.npc_ChangeController(3001317, "oid=916884", -165, 0, 42, -215, -115, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=916884", 'summon', 0, 0);
        cm.npc_ChangeController(3001314, "oid=916885", -230, 0, 42, -280, -180, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=916885", 'summon', 0, 0);
        cm.npc_ChangeController(3001315, 'oid=916886', -425, 0, 42, -475, -375, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=916886", 'summon', 0, 0);
        cm.npc_ChangeController(3001316, "oid=916887", -360, 0, 42, -410, -310, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=916887", "summon", 0, 0);
        cm.Npc_Fadeout('oid=916886', 0, 0);
        cm.Npc_Fadeout("oid=916887", 0, 0);
        cm.Npc_Fadeout("oid=916882", 0, 0);
        cm.Npc_Fadeout("oid=916883", 0, 0);
        cm.Npc_Fadeout("oid=916884", 0, 0);
        cm.Npc_Fadeout("oid=916885", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 380, -532);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 380, 10);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.effect_REPEAT("Effect/Direction14.img/illium/text/2", 1, 1, 1, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.effect_REPEAT("Effect/Direction14.img/illium/text/2", 1, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom('看那个！真厉害啊！', 37, 3001321, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们都办了几十年天神祭了,还是头一次见到这样的造型物！", 37, 3001322, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#伊利温同学的作品真棒啊。", 37, 3001313, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#何止村民,连我们教授团都看得目不转睛。干得漂亮,伊利温。", 37, 3001302, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你竟然让玲珑水晶和金属配件实现了完美的融合！", 37, 3001305, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#伊利温,你表现得很棒。我为你感到自豪。", 37, 3001301, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7#谢谢……", 37, 3001351, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face8#(阿加特大人……现在消气了吗？)", 37, 3001351, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#看到伊利温一直这么努力,我不知道有多欣慰……", 37, 3001301, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#这多亏了阿加特大人……", 37, 3001351, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#这么短的时间内,竟然取得如此大的进步……感谢你一直以来的配合。", 37, 3001301, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#哦~伊利温！身手不错嘛？", 37, 3001307, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#凭你这种实力,绝对有资格当我迪恩的朋友了！", 37, 3001307, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=916886", 255, 1000);
                                              cm.Npc_Fadeout("oid=916887", 255, 1000);
                                              cm.Npc_Fadeout('oid=916882', 255, 1000);
                                              cm.Npc_Fadeout("oid=916883", 255, 1000);
                                              cm.Npc_Fadeout('oid=916884', 255, 1000);
                                              cm.Npc_Fadeout("oid=916885", 255, 1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#伊利温！", 37, 3001308, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face7#卡尼里恩！伙伴们！", 37, 3001351, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=916872", -1);
                                                      cm.npc_setForceFlip("oid=916873", -1);
                                                      cm.npc_setForceFlip("oid=916874", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, 60, 10);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#我看过……你的作品了！", 37, 3001308, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#是……是吗？谢谢……", 37, 3001351, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("真厉害！", 37, 3001316, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face5#真的？嘿嘿……你的也很酷啊……", 37, 3001351, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("能够一起准备天神祭,我实在太开心了。", 37, 3001314, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face5#还、还有我……", 37, 3001351, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#刚开始有些困难……这都多亏了你们！", 37, 3001351, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#伊利温,我今天心情不错,给我买点好吃的吧！", 37, 3001310, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#嗯、嗯？好、好的！哈哈。", 37, 3001351, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#伊利温的造型物,真是越看越奇特？究竟是怎么做出来的？", 37, 3001307, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#这是在……夸我吧？", 37, 3001351, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#那当然了,嘿嘿！", 37, 3001307, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#大家……", 37, 3001351, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#太感动了……谢谢！", 37, 3001351, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=916882");
                                                                                          cm.npc_LeaveField("oid=916883");
                                                                                          cm.npc_LeaveField("oid=916884");
                                                                                          cm.npc_LeaveField("oid=916885");
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.updateInfoQuest(34816, 'fin=1;d1=1');
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.forceCompleteQuest(34816);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                            } else if (status === V++) {
                                                                                              cm.updateInfoQuest(34816, "fin=1;exp=1;d1=1");
                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.gainItem(4036171, -10);
                                                                                              cm.npc_LeaveField('oid=916872');
                                                                                              cm.npc_LeaveField('oid=916873');
                                                                                              cm.npc_LeaveField("oid=916874");
                                                                                              cm.npc_LeaveField("oid=916875");
                                                                                              cm.npc_LeaveField("oid=916876");
                                                                                              cm.npc_LeaveField('oid=916877');
                                                                                              cm.npc_LeaveField("oid=916878");
                                                                                              cm.npc_LeaveField("oid=916879");
                                                                                              cm.npc_LeaveField("oid=916880");
                                                                                              cm.npc_LeaveField("oid=916881");
                                                                                              cm.npc_LeaveField("oid=916886");
                                                                                              cm.npc_LeaveField("oid=916887");
                                                                                              cm.dispose();
                                                                                              cm.warp(402000529, 0, true);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}