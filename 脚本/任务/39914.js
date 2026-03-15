var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#天选之人想要打破圣地的和平，翼人军依旧没有停下攻势，\r\n在这个关头，冒险岛联盟居然决定要撤退…… ", 36, 3004433, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#真没想到情况会糟糕到这种地步。", 36, 3004433, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#……", 36, 3004433, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##h0#，你能去劝劝塞伦吗？", 36, 3004433, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("她会听我的吗？", 56, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1#看来你还没有意识到啊。对塞伦来说，你和别人都不一样。", 36, 3004433, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("这是什么意思？", 56, 0, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#她失去了许多她本应守护的东西。\r\n但是你和她不同，你守住了自己的世界。", 36, 3004433, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#你的力量和勇气让那一切成为可能，这对她来说有着非凡的意义。", 36, 3004433, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#拜托你了，去见见她吧。", 36, 3004433, true, true);
                      } else {
                        if (status === v++) {
                          cm.askYesNo_Bottom("(先去找塞伦吧？)", 56, 3004511);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#问问周围的人，就知道她在哪里了。", 36, 3004433, false, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#我去找伊黛娜大人。她掌握的信息或许会对我们有所帮助。", 36, 3004433, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然不知道能不能帮上忙……但是总要做些什么。", 36, 3004433, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#那就拜托你了。", 36, 3004433, true, true);
                                } else if (status === v++) {
                                  cm.forceStartQuest(39914, '');
                                  cm.setStringForQuestInfo(39900, '12', 'h1');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#您这么闲逛真的没关系吗？\r\n翼人军就要来了，邻居们都在忙着收拾行李呢……", 36, 3004519, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#守护者大人？这个嘛……", 36, 3004519, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#连对方的情况都不了解，就坚信圣剑的主人会来拯救圣地……", 36, 3004519, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我们又能说什么呢？", 36, 3004519, true, true);
          } else if (status === v++) {
            cm.OnStartNavigation(410000500, 1, "3004520", 39914);
            cm.updateInfoQuest(39914, "NpcSpeech=30045191");
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage1(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#真不敢相信。本以为历尽千辛万苦，好不容易守住了圣地……", 36, 3004442, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你问我守护者大人在哪里？", 36, 3004442, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#不知道。我们也四处找了半天，但就是找不到。", 36, 3004442, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#如果找到她了，就请尽量说服她吧。", 36, 3004442, true, true);
          } else if (status === v++) {
            cm.OnStartNavigation(410000500, 1, "3004521", 39914);
            cm.updateInfoQuest(39914, "NpcSpeech=30045191/30045202");
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage2(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#真是想不通啊。", 36, 3004444, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#她到底怎么想的？\r\n我认为守护者理所当然应该成为圣剑的主人……", 36, 3004444, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我当然知道她无法张开翅膀。\r\n大神官大人被捕时，我也认为她与其他圣骑士是一个德行。", 36, 3004444, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#但那并不是她的真心。", 36, 3004444, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#在密特拉教团里，能找回神之力的人，除她之外不做第二人想啊。", 36, 3004444, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#可是……她却要把圣剑交给不知从哪里冒出来的废物？", 36, 3004444, true, true);
              } else if (status === v++) {
                cm.OnStartNavigation(410000500, 1, "3004512", 39914);
                cm.updateInfoQuest(39914, "NpcSpeech=30045191/30045202/30045213");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#我也不知道守护者大人在哪里。", 36, 3004437, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#对了，刚才铁匠也在找守护者大人呢……", 36, 3004437, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom('铁匠？', 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.curNodeEventEnd(true);
            cm.setStringForQuestInfo(39800, '55', 'h1');
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -801, 35);
            cm.npc_ChangeController(3004455, "oid=63519072", -668, 35, -1, -473, -873, 1, false, 1000, true);
            cm.npc_SetSpecialAction("oid=63519072", "summon", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -668, -10);
          } else {
            if (status === v++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
              cm.npc_LeaveField("oid=377625");
            } else {
              if (status === v++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#如果您是在找守护者大人的话，她刚刚好像往南边去了。", 36, 3004455, false, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#她大概去#b战友们的坟墓#k那边了吧。", 36, 3004455, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("听说你在找塞伦，你们见过面了吗？", 56, 0, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#我有东西要交给她……但现在似乎还不是时候。", 36, 3004455, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#之后您能亲自帮我转达吗？", 36, 3004455, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("(铁匠递来一条项链，上面挂着#b一柄小巧玲珑的剑#k。)", 56, 0, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("这是……？", 56, 0, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#你交给她，她就会明白了。", 36, 3004455, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#虽然对现在的她来说，连接受这东西都会成为一种负担，但是……", 36, 3004455, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#等这复杂的局面告终，她整理好自己的心绪后，到时就能心安理得地接受了吧。", 36, 3004455, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("(不知道她在说什么。总之先去墓地那边吧。)", 56, 0, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === v++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === v++) {
                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                            cm.sendNormalTalk_Bottom("#face0##h0#。", 36, 3004431, false, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("伊黛娜？", 56, 0, true, true);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#你知道吗？\r\n圣剑运输作战后，塞伦向大神官要求了什么？", 36, 3004431, true, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("不知道啊？", 56, 0, true, true);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#塞伦要求对自己进行#r惩罚#k。", 36, 3004431, true, true);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom('什么？', 56, 0, true, true);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我知道她为什么没能成为圣剑的主人了。", 36, 3004431, true, true);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face2#一起去吧。我要亲自向她确认一下。", 36, 3004431, true, true);
                                                        } else if (status === v++) {
                                                          cm.eventSKill(0);
                                                          cm.warp(993151016, 0, true);
                                                          cm.setStringForQuestInfo(39800, '30', 'h1');
                                                          cm.setStringForQuestInfo(39800, '31', 'h1');
                                                          cm.npc_LeaveField("oid=63519072");
                                                          cm.npc_LeaveField("oid=63519072");
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