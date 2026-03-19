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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(2052029, "oid=40203311", -1165, -43, 48, -1215, -1115, 0, true, false);
      cm.npc_SetSpecialAction("oid=40203311", "summon", 0, 0);
      cm.npc_ChangeController(2052029, "oid=40203312", -1100, -43, 48, -1150, -1050, 0, true, false);
      cm.npc_SetSpecialAction("oid=40203312", 'summon', 0, 0);
      cm.npc_ChangeController(2052001, "oid=40203313", -1130, -43, 48, -1180, -1080, 0, true, false);
      cm.npc_SetSpecialAction("oid=40203313", "summon", 0, 0);
      cm.npcSetSize("oid=40203313", 10, 100);
      cm.npc_ChangeController(2052032, "oid=40203314", -1570, -43, 50, -1620, -1520, 0, true, false);
      cm.npc_SetSpecialAction("oid=40203314", "summon", 0, 0);
      cm.npc_ChangeController(2052009, "oid=40203315", -1510, -43, 50, -1560, -1460, 0, true, false);
      cm.npc_SetSpecialAction("oid=40203315", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1000, -24);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 250, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs20#悠闲的午后，\r\n\r\n时间慢慢地流逝。", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯？你说什么？", 37, 2052029, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('什么？', 37, 2052029, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 250, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#fs20#枯燥乏味甚至让人开始出现了幻听。\r\n虽然去周围放哨看了看，\r\n但除了日常的平凡之外，毫无收获。", 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你没听到什么声音吗？喂？有人在吗？", 37, 2052029, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你说什么呢？你怎么了？", 37, 2052029, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 250, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fs20#他并没有发现，\r\n这个幻听是远超出自然规律的超越\r\n某个伟大的生命所留下的讯息。", 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("咦？？你是开玩笑的吧？", 37, 2052029, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs20#而且那个声音绝对不是在开玩笑，\r\n那是在郑重#r警告#k渐渐逼近的危险。", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("警，警告？！", 37, 2052029, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 250, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs20#稍后，#r残酷的暴力#k会将他吞噬。\r\n#r5、4、3、2…", 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("额啊啊啊！逃跑！", 37, 2052029, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("什么啊？你怎么了？", 37, 2052029, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=40203311", -1, 350, 150);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=40203312", -1, 350, 150);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                                                  cm.npc_SetForceMove("oid=40203314", 1, 350, 150);
                                                                  cm.npc_SetForceMove("oid=40203315", 1, 350, 150);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_close", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("很好，拿到门禁卡。", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#哎哟，脑筋很灵活嘛？不愧是#b废都塔#k的#b明星#k啊。", 37, 2052002, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#呵呵，对我这个一流明星而言，这点小事可是最基本的。\r\n我不过是稍微应用了一点在片场拍摄时的台词罢了。", 37, 2052001, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##b笔下求冒险岛#k正在火热上映中！\r\n这可是我的首部主演作品，一定要去看哦！", 37, 2052001, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#什么，你难道不是临时演员的吗？！", 37, 2052005, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/ame/0", 0, 500, 0, -90, 12, 4, 1);
                                                                                cm.sendNormalTalk_Bottom("#face2#那你说见过爱豆#b阿米#k的事也是真的吗？", 37, 2052005, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                  cm.sendNormalTalk_Bottom("#face1#那是当然！她可是跟我演对手戏的演员！！！", 37, 2052001, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#天啊，阿海哥哥居然如此人气爆棚？", 37, 2052004, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#你看看电视，琳儿。他是我们吸睛的主角。\r\n要是没有阿海，我们估计得在冒险岛金刚身上贴上赞助商的logo呢！", 37, 2052003, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#这虽然听起来像是个玩笑，不过并不是哦，\r\n上次博士居然让在绿冒险岛金刚上贴上什么#b化妆品海报#k。", 37, 2052002, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#之前跟我说的……", 37, 2052002, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(等，等一下，这么说要被换的对象难道是阿亮哥哥？额……也是)#k", 37, 2052004, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#喂，算了，我们还是赶紧走吧。\r\n我肚子饿了，赶紧收工，早点回本部煮个方便面吃吧。", 37, 2052005, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#嘤嘤……可怜的阿亮哥哥……", 37, 2052004, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                      cm.effect_Text(["#fn黑体##fs18#同一时间……#fs15##fn黑体#地球防御本部司令室"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#准备好没？不能再等了。", 37, 2052006, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#不可以！博士！现在还没有完成！", 37, 2052007, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#不，现在没办法了，赶紧把那个拿出来！", 37, 2052006, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/eat", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#嗯~果然这#b方便面#k就是得带点嚼劲才好吃。", 37, 2052006, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#嗯？话说#b粉狼的冒险能量#k怎么降低了这么多啊？", 37, 2052006, true, true);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.dispose();
                                                                                                                      cm.warp(221030550, 0);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;