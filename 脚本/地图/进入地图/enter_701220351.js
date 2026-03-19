var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getNumberFromQuestInfo(62012, 'secret');
  if (V == 1) {
    action1(f, E, e);
  } else {
    if (V == 3) {
      action2(f, E, e);
    } else {
      if (cm.isQuestFinished(62013) && !cm.isQuestFinished(62014)) {
        action3(f, E, e);
      } else {
        if (cm.isQuestFinished(62020) && V != 7 && cm.getQuestStatus(62036) == 0) {
          action4(f, E, e);
        } else {
          if (V == 7) {
            action5(f, E, e);
          } else if (cm.isQuestActive(62036)) {
            action6(f, E, e);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(9310577, "oid=6180067", -377, -34, 2, -427, -327, 0, true, false);
      cm.npc_SetSpecialAction("oid=6180067", "summon", 0, 0);
      cm.npc_ChangeController(9310578, "oid=6180068", 456, -79, 24, 406, 506, 0, false, false);
      cm.npc_SetSpecialAction("oid=6180068", 'summon', 0, 0);
      cm.npc_ChangeController(9310579, "oid=6180069", -14, 58, 6, -64, 36, 0, true, false);
      cm.npc_SetSpecialAction("oid=6180069", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=6180069", 'angry', -1, 1);
        cm.sendNormalTalk_Bottom("呀啊啊啊啊！！", 37, 9310579, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯嗯……有人类进来了！", 37, 9310578, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("赶快离开！", 37, 9310579, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊……啊！！！啊啊，等一下！！！", 57, 0, false, true);
              } else if (status === V++) {
                cm.playerMessage(5, "受到未知力量的影响，被赶出了门外。");
                cm.updateInfoQuest(62012, "secret=2;hidden=hid1;find=1");
                cm.dispose();
                cm.warp(701220300, 2);
                cm.npc_LeaveField("oid=6180067");
                cm.setInGameDirectionMode(false, true, false);
                cm.npc_LeaveField("oid=6180067");
                cm.npc_LeaveField("oid=6180068");
                cm.npc_LeaveField("oid=6180068");
                cm.npc_LeaveField("oid=6180069");
                cm.npc_LeaveField("oid=6180069");
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.npc_ChangeController(9310577, "oid=6180361", -377, -34, 2, -427, -327, 0, true, false);
      cm.npc_SetSpecialAction("oid=6180361", 'summon', 0, 0);
      cm.npc_ChangeController(9310578, "oid=6180362", 456, -79, 24, 406, 506, 0, false, false);
      cm.npc_SetSpecialAction("oid=6180362", "summon", 0, 0);
      cm.npc_ChangeController(9310579, "oid=6180363", -14, 58, 6, -64, 36, 0, true, false);
      cm.npc_SetSpecialAction("oid=6180363", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_Text(["#fn黑体##fs20#藏经阁秘密书库"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我就知道……我就知道会这样！人类找到我们了啊！", 37, 9310578, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('居然会被发现……', 37, 9310577, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#p9310577#，他们该不会是因为你偷了人类小孩的鞋子而发怒了吧？", 37, 9310578, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你难道忘记人们看到你的脸后，吓得仓皇而逃的样子了吗？", 37, 9310577, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呼，你真是！！", 37, 9310578, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("(村里发生的奇异事件，看来是这些妖怪捣的鬼。大师的脸应该也是因为这些家伙才变样的。)", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("等一下，我闻到了人类的气味。", 37, 9310579, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('呃啊-', 37, 9310578, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(居然暴露了。最好慢慢地靠近。)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_SetHideEffect(0);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=9310578"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=9310577"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=9310579"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……我可不是来害你们的。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("呃呃……那你来干什么？", 37, 9310578, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("小鬼，你相信人类的话？", 37, 9310577, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("他们本可以成群结队来攻击我们。可他还是独自一人前来……我觉得他不是坏人。", 37, 9310578, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("呼呼，你瞧着吧，这回肯定又要上人类的当了！", 37, 9310577, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('嘘！', 37, 9310579, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你有什么事啊？", 37, 9310579, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我在找一本书。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('书？', 37, 9310579, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("嗯，我在找一本书。那本书是很久以前由这里的大师所写。现在好像被保管在这里的某个地方。我能不能在书柜里找找呢？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("那怎么行！你是入侵者，还想在这里翻找东西？你要是不马上离开的话，看我不给你点颜色瞧瞧！", 37, 9310579, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("没错，你们人类就是喜欢得寸进尺。要是让你找到了书，肯定还会向我们要别的东西。比如说，我们的性命……啊，想想就可怕！", 37, 9310577, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("就……就把书给他吧！反正我们也不需要那玩意儿。要是他怀恨在心，再找上门，到时候我们怎么办啊。", 37, 9310578, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("(这些的确是妖怪。不过，它们好像不是那些想要伤害人类的邪恶妖怪。总之，先要找到书再说……最好和他们搞好关系。)", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("如果你们真能帮我找到书，我绝不会把这里的情况告诉给任何人，我保证。我要怎么做，你们才能相信我呢？", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("要不，你先帮我们几个忙吧！", 37, 9310578, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("喂，你的自尊心跑哪儿去了？居然拜托人类帮忙。", 37, 9310577, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("难道就这样一直躲躲藏藏，然后到处瞎捣蛋？我们总得搞清楚被召唤到这里的原因吧。", 37, 9310578, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("九尾狐，你意下如何？", 37, 9310577, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("嗯……", 37, 9310579, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("好吧，如果你能满足我们提出的要求，那我们就帮你找到那本书。但是，如果你无法满足我们其中任何一个要求的话……那你就别想活着回去。", 37, 9310579, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("嗯，既然#p9310579#你这样想的话，", 37, 9310577, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("嘁，#p9310577#，反正你最听九尾狐的话了。", 37, 9310578, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.updateInfoQuest(62012, "secret=4;hidden=hid1;find=1");
                                                                                cm.dispose();
                                                                                cm.warp(701220350, 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=6180361");
                                                                                cm.npc_LeaveField("oid=6180361");
                                                                                cm.npc_LeaveField("oid=6180362");
                                                                                cm.npc_LeaveField("oid=6180362");
                                                                                cm.npc_LeaveField("oid=6180363");
                                                                                cm.npc_LeaveField("oid=6180363");
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
    cm.dispose();
    cm.warp(701220350, 0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action4(f, E, e) {
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
      cm.npc_ChangeController(9310581, "oid=6194271", -377, -34, 2, -427, -327, 0, false, false);
      cm.npc_SetSpecialAction("oid=6194271", "summon", 0, 0);
      cm.npc_ChangeController(9310582, "oid=6194272", 456, -79, 24, 406, 506, 0, false, false);
      cm.npc_SetSpecialAction("oid=6194272", 'summon', 0, 0);
      cm.npc_ChangeController(9310583, "oid=6194273", -14, 58, 6, -64, 36, 0, false, false);
      cm.npc_SetSpecialAction("oid=6194273", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
        cm.effect_NormalSpeechBalloon("贵鬼~", 1, 0, 0, 2500, 9310581, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_NormalSpeechBalloon("姚侯~", 1, 0, 0, 2500, 9310582, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哼……瞧你们那被人类忽悠的样子。", 37, 9310583, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你不是也挺喜欢那个人类吗。你的表情骗不了我，哼哼", 37, 9310582, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你瞎说些什么呢！喂……我说，人类！不对……既然你和别的人类不同，那我就喊你的名字吧。\n#b#h0##k！之前你说，想在书柜里找书对吧？", 37, 9310583, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#r美狐#k那颗铁石心肠都能被你融化了……你果然不简单啊，嘿嘿", 37, 9310581, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("对了……你们是怎么来到这里的？我看你们好像没打算要伤害人类。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("反正就是某一天醒来后，我们就发觉自己来到了人类的世界。并且什么也不记得……呃呃 ", 37, 9310582, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我记得有个什么东西从黑暗中出现，并将我吸了进去。我敢肯定的是，我听到了人类的声音。", 37, 9310581, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我们妖怪的世界和人类的世界非常相似。而我们就是由人类的想象和愿望而形成的产物。", 37, 9310583, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("很久以前，人类所侍奉的那些守护着人类的神，只不过是一些拥有善良一面的灵物罢了。可现在如何呢？人类借助这些神的力量开始做起了坏事，因此，这些原本善良的灵物也变成了怪异的妖怪。", 37, 9310583, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("身为人类的你是想象不到的，我们所生活的世界已经变得残酷无比了……", 37, 9310583, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我估计，把我们召唤到这里的应该是一个能力非凡的人类。而且，那个人召唤我们前来，应该是为了做什么坏事吧。", 37, 9310583, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不过，把我们召唤来的人类在哪里呢？", 37, 9310582, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("就是啊，他应该马上会来找我们的吧。", 37, 9310581, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("(由人类的想象和愿望所形成的世界……而且居然还有人类把它们召唤到这里。虽然难以置信，但眼前的它们确确实实是从其他世界来的妖怪。那么，到底是谁做了这种事情呢……？)", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("好了，你现在可以尽情在书柜里寻找你要的书了。", 37, 9310583, true, true);
                                        } else if (status === V++) {
                                          cm.updateInfoQuest(62012, "secret=6;hidden=hid1;find=1");
                                          cm.dispose();
                                          cm.warp(701220350, 0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=6194271");
                                          cm.npc_LeaveField("oid=6194271");
                                          cm.npc_LeaveField("oid=6194272");
                                          cm.npc_LeaveField("oid=6194272");
                                          cm.npc_LeaveField("oid=6194273");
                                          cm.npc_LeaveField("oid=6194273");
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action5(f, E, e) {
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
      cm.npc_ChangeController(9310581, "oid=6195285", -377, -34, 2, -427, -327, 0, false, false);
      cm.npc_SetSpecialAction("oid=6195285", "summon", 0, 0);
      cm.npc_ChangeController(9310582, "oid=6195286", 456, -79, 24, 406, 506, 0, false, false);
      cm.npc_SetSpecialAction("oid=6195286", "summon", 0, 0);
      cm.npc_ChangeController(9310583, "oid=6195287", -14, 58, 6, -64, 36, 0, false, false);
      cm.npc_SetSpecialAction("oid=6195287", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("这就是#p9310053#所说的书啊。虽然非常老旧，但感觉散发着未知的力量。现在应该马上把书交给#p9310053#。", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("等一下！#b#h0##k！，给，这是给你的礼物。", 37, 9310583, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这……应该是个镜子啊？确定是送给我的吗？", 57, 0, true, true);
          cm.gainItem(4034725, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这可不是普通的镜子。只要对着镜子一照，就能知道是人还是妖。总之，你将来肯定会用到的。", 37, 9310583, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("居然是可以分辨人类和妖怪的镜子。好神奇啊？！\n啊！事不宜迟。我得赶快把书交给#p9310053#。", 57, 0, true, true);
            } else if (status === V++) {
              cm.updateInfoQuest(62012, "secret=8;hidden=hid1;find=1");
              cm.getTopMsgFont("把书交给[大雄宝殿]的方丈大师.", 3, 20, 20, 0);
              cm.dispose();
              cm.warp(701220300, 2);
              cm.setInGameDirectionMode(false, true, false);
              cm.npc_LeaveField("oid=6195285");
              cm.npc_LeaveField("oid=6195285");
              cm.npc_LeaveField("oid=6195286");
              cm.npc_LeaveField("oid=6195286");
              cm.npc_LeaveField("oid=6195287");
              cm.npc_LeaveField("oid=6195287");
            }
          }
        }
      }
    }
  }
}
function action6(f, E, e) {
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
      cm.npc_ChangeController(9310581, "oid=6196502", -377, -34, 2, -427, -327, 0, false, false);
      cm.npc_SetSpecialAction("oid=6196502", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#fs25##h0#，不好啦！#p9310582#和#p9310583#……", 37, 9310581, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#fs25#出什么事了？！", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("有个男的把他俩带走了！本来也要把我带走的，我好不容易才逃脱了。\n他急急忙忙往上层去了……现在该如何是好啊？", 37, 9310581, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("有个#b男子#k把他俩带走了？到底是谁竟敢做出这样的事呢……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("现在得抓紧时间，否则#p9310582#和#p9310583#可能会遇到什么不测！", 37, 9310581, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我去找他们！#p9310581#，请你为我指路！", 57, 0, true, true);
              } else if (status === V++) {
                cm.forceCompleteQuest(62036);
                cm.forceStartQuest(62037, '');
                cm.updateInfoQuest(62012, "secret=10;hidden=hid1;find=1");
                cm.dispose();
                cm.warp(701220300, 2);
                cm.npc_LeaveField("oid=6196502");
                cm.npc_LeaveField("oid=6196502");
                cm.setInGameDirectionMode(false, true, false);
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