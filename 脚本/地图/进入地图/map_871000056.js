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
      if (cm.isQuestFinished(64903)) {
        cm.npc_ChangeController(9401091, "oid=2572184", -200, 300, 5, -250, -150, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2572184", "summon", 0, 0);
        cm.npc_ChangeController(9401092, "oid=2572185", -250, 300, 4, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2572185", "summon", 0, 0);
        cm.npc_ChangeController(9401094, "oid=2572186", 50, 300, 11, 0, 100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2572186", 'summon', 0, 0);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, -100, 280]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400928, "oid=2564899", -600, 250, 1, -650, -550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564899", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564899", "stand", -1, 0);
        cm.npc_ChangeController(9400929, "oid=2564900", -600, 250, 1, -650, -550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564900", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564900", 'stand', -1, 0);
        cm.npc_ChangeController(9400932, "oid=2564901", 50, 300, 11, 0, 100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564901", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564901", "stand", -1, 0);
        cm.npc_ChangeController(9401060, "oid=2564902", 150, 300, 12, 100, 200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564902", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564902", "stand", -1, 0);
        cm.npc_ChangeController(9401061, "oid=2564903", -250, 300, 4, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564903", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564903", "stand", -1, 0);
        cm.npc_ChangeController(9401062, "oid=2564904", -35, 300, 7, -85, 15, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564904", "summon", 0, 0);
        cm.npc_ChangeController(9401063, "oid=2564905", -120, 300, 10, -170, -70, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564905", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2564905", "stand", -1, 0);
        cm.npc_ChangeController(9401064, "oid=2564906", 200, 300, 12, 150, 250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2564906", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2564906", "stand", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
                    cm.setNpcSpecialActionReset("oid=2564902");
                    cm.setNpcSpecialActionReset("oid=2564903");
                    cm.setNpcSpecialActionReset("oid=2564904");
                    cm.setNpcSpecialActionReset("oid=2564905");
                    cm.setNpcSpecialActionReset("oid=2564906");
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
                      cm.npc_SetForceMove("oid=2564903", -1, 10, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/chop", 128);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2564903"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.npc_SetForceMove("oid=2564902", -1, 10, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2564902"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2564904"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.setNpcSpecialActionReset("oid=2564904");
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2564905"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2564906"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face0#我晕……喂！他们追上来了！", 37, 9401061, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#真的假的？我去！真的呢！？快跑！！！", 37, 9401062, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2564902", 1, 850, 300);
                              cm.npc_SetForceMove("oid=2564903", 1, 880, 300);
                              cm.npc_SetForceMove("oid=2564904", 1, 850, 300);
                              cm.npc_SetForceMove("oid=2564905", 1, 850, 300);
                              cm.npc_SetForceMove("oid=2564906", 1, 800, 300);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(17, [2000, 2000, 2000, 300, 280]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2564901", 1, 10, 300);
                                    cm.sendNormalTalk_Bottom("#face2#呃呃呃喂喂喂！你们去哪？帮人帮到底啊！！", 37, 9400923, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2564901", -1, 10, 300);
                                        cm.sendNormalTalk_Bottom("#face0#喂！你们给我站住！！！", 37, 9400920, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNewEffects(17, [1000, 2000, 2000, -250, 280]);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2564899", 1, 370, 300);
                                            cm.npc_SetForceMove("oid=2564900", 1, 320, 200);
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(17, [2000, 2000, 2000, -180, 280]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#哎呦，那些家伙真快！", 37, 9400920, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#艾米。不要那么凶的追他们。一直恐吓他们的话，好像又要逃走了呢？", 37, 9400921, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#干嘛吓唬他们！他们会逃走的！\r\n你不懂做贼心虚吗？", 37, 9400920, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b#b(他们会是谁呢？)#k", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你们在这儿干什么？他们为什么逃走了？\r\n你们该不会……和他们打架了？", 37, 9400923, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#打什么架啊，一群毛头小子！\r\n一看到我们就逃走了！", 37, 9400920, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我见到了凯尼斯大叔。艾丹正在伐木呢，大叔让我们帮帮他。孩子们都去帮忙了吗？", 37, 9400921, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#对，没错。一个人做起来比想象的要困难。正当我焦头烂额的时候，多亏有那些孩子的出现，我才能放下心来。\r\n你说这看起来很有趣，所以也让你过来帮忙。", 37, 9400923, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#倒是你们，为什么要把那么好的劳动力赶走！", 37, 9400923, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#不是我们赶走的吗？", 37, 9400920, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#不管怎样，我很希望你们能帮忙！", 37, 9400923, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#b当然了，艾丹。我一开始就是为了帮助你才来这里的。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#你难不成想靠一张大嘴帮忙？", 37, 9400920, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#纸上谈兵？\r\n如果可以的话，以后能不能说句你辛苦了？", 37, 9400923, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#啊哈~！淑女都说要帮忙了！你也太无礼了吧！我以后会收你很多钱的，做好觉悟吧~", 37, 9400920, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#是是，当然了~", 37, 9400923, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#唉唉，恶作剧到此为止，快干活吧。再这样下去，太阳都落山了！太阳落山后森林里是很危险的。", 37, 9400921, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.forceCompleteQuest(64903);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2564899");
                                                                                    cm.npc_LeaveField("oid=2564899");
                                                                                    cm.npc_LeaveField("oid=2564900");
                                                                                    cm.npc_LeaveField("oid=2564900");
                                                                                    cm.npc_LeaveField("oid=2564901");
                                                                                    cm.npc_LeaveField("oid=2564901");
                                                                                    cm.npc_LeaveField("oid=2564902");
                                                                                    cm.npc_LeaveField("oid=2564902");
                                                                                    cm.npc_LeaveField("oid=2564903");
                                                                                    cm.npc_LeaveField("oid=2564903");
                                                                                    cm.npc_LeaveField("oid=2564904");
                                                                                    cm.npc_LeaveField("oid=2564904");
                                                                                    cm.npc_LeaveField("oid=2564905");
                                                                                    cm.npc_LeaveField("oid=2564905");
                                                                                    cm.npc_LeaveField("oid=2564906");
                                                                                    cm.npc_LeaveField("oid=2564906");
                                                                                    cm.npc_ChangeController(9401091, "oid=2572184", -200, 300, 5, -250, -150, 0, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=2572184", 'summon', 0, 0);
                                                                                    cm.npc_ChangeController(9401092, "oid=2572185", -250, 300, 4, -300, -200, 0, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=2572185", "summon", 0, 0);
                                                                                    cm.npc_ChangeController(9401094, "oid=2572186", 50, 300, 11, 0, 100, 1, true, 0, false);
                                                                                    cm.npc_SetSpecialAction("oid=2572186", "summon", 0, 0);
                                                                                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNewEffects(19, [0]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                      } else if (status === V++) {
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
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