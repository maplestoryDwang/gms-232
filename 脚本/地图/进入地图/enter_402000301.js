var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34626) && cm.getQuestStatus(34627) == 0) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34639) && cm.getQuestStatus(34640) == 0) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;2=1;3=1;5=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1161, 6);
      cm.curNodeEventEnd(true);
      cm.npc_ChangeController(3001251, "oid=683144", 1259, 11, 59, 1209, 1309, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=683144", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
              cm.sendNormalTalk_Bottom("#face1#警备越来越森严，看来这附近一定有什么阴谋。", 37, 3001251, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#那个，我怀疑那边有人冲过来了……我们还是再往里面走走吧……", 37, 3001251, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#恩，不如搭个话，转移一下他们的注意力吧。", 37, 3001251, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField('oid=683144');
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.setStandAloneMode(false);
                        cm.setPartner(true, 3001251, 80002311, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;failC=1;2=1;3=1;4=1;5=1;7=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 364, -136);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/mic", 100);
          cm.sendNormalTalk_Bottom("#face0#哈哈，你来了。说好的武器部件带来了吗？快交出来！", 37, 3001262, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('#face0#……', 37, 3001270, true, true, 1);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 50, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(50);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 100, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(50);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 50, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(50);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 100, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(50);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 50, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#怎么，看到我们言出必行，吓了一跳吧？是不是被我们的人道主义精神感动了？", 37, 3001263, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#……", 37, 3001270, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#呃，你该不会想说是来营救支部队员的吧？", 37, 3001262, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#什么正义的使徒，全是屁话！扔下同伴离开这才是最明智的选择！？", 37, 3001263, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#……你们长没长脑子？真的是影子商团的成员吗？", 37, 3001270, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#什、什么？", 37, 3001262, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#影子商团绝不做无意义的争斗。这是最基本的准则。", 37, 3001270, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#我来这可不是做慈善的。我的目的是……", 37, 3001270, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#……打败Mr.哈扎尔，证明卡德娜大人的实力吧。消灭叛徒，赢得实力的飞跃。", 37, 3001270, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#大、大胆狂徒！我看你是吃了熊心豹子胆！哼，竟敢对Mr.哈扎尔大人无礼……", 37, 3001263, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#呃呃，你要跟我们决斗？不知死活的家伙，等着瞧，我会让你后悔的！", 37, 3001262, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#Mr.哈扎尔的手下马上就会一拥而上。消灭他们倒不是什么难事……", 37, 3001270, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#喂，新来的。可别忘了我们啊。", 37, 3001250, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我也赞成。", 37, 3001255, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                                              cm.npc_ChangeController(3001250, "oid=684652", -200, -100, 4, -250, -150, 0, false, 0, false);
                                                              cm.npc_SetSpecialAction("oid=684652", "summon", 0, 0);
                                                              cm.npc_ChangeController(3001253, "oid=684653", -300, -100, 3, -350, -250, 0, true, 0, false);
                                                              cm.npc_SetSpecialAction('oid=684653', "summon", 0, 0);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/0", "oid=684653"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#支部长！帕皮鲁斯兄弟！你们不是被那些家伙抓住了吗？", 37, 3001270, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#不是说只有我被抓住，才能保护支部队员吗？我自己想办法逃出来了。就是受了点小伤……", 37, 3001250, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……嗯，没时间犹豫了。那家伙的手下马上就会包围这里。", 37, 3001250, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#剩下的事就交给帕皮鲁斯兄弟负责吧。你返回Mr.哈扎尔据点，阻止那家伙。", 37, 3001250, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#前往正门的通道危险重重，回去是上策。那就拜托你了。", 37, 3001250, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#知道了，支部长。那待会见，帕皮鲁斯兄弟也保重。", 37, 3001270, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/0", "oid=684653"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                                                                            cm.npc_LeaveField("oid=684652");
                                                                            cm.npc_LeaveField("oid=684653");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#……可该怎么回去呢？需要跟支部长无线联络吗？可哪有时间啊……", 37, 3001270, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_ChangeController(3001252, "oid=684782", -500, 10, 53, -550, -450, 0, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=684782", "summon", 0, 0);
                                                                                cm.npc_SetSpecialAction("oid=684782", "jump", -1, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#波波、波！", 37, 3001252, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#啊，你不是那个……棉花团嘛？你是来为我引路的吗？", 37, 3001270, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#波、波波！波波!", 37, 3001252, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#好，棉花团。你带我到Mr.哈扎尔据点后门去吧！", 37, 3001270, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=684782");
                                                                                                cm.dispose();
                                                                                                cm.warp(402000302, 0, false);
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}