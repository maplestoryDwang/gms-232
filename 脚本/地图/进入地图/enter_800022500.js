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
      cm.updateInfoQuest(58752, "count=7;aKey=1;bKey=2");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111025, "oid=3829474", 235, -35, 2, 185, 285, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829474", "summon", 0, 0);
      cm.npc_ChangeController(9111012, "oid=3829475", -480, -35, 19, -530, -430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829475", 'summon', 0, 0);
      cm.npc_ChangeController(9111013, "oid=3829476", -108, -70, 30, -158, -58, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829476", 'summon', 0, 0);
      cm.npc_ChangeController(9111014, "oid=3829477", 145, -35, 14, 95, 195, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829477", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829478", -630, -35, 17, -680, -580, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829478", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829479", -560, -35, 18, -610, -510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829479", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829480", -500, -35, 19, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829480", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829481", -440, -35, 20, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829481", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829482", -395, -35, 20, -445, -345, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829482", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829483", 270, -35, 15, 220, 320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829483", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829484", 310, -35, 15, 260, 360, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829484", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829485", 360, -35, 15, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829485", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829486", 420, -35, 3, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829486", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3829487", 480, -35, 1, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3829487", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#观众全都到齐了。", 37, 9111012, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呵呵……开始吧。", 45, 9111013, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#亲爱的各位亡者！我是负责守卫樱之岛安全的自卫队员镰鼬。", 37, 9111012, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#鵺是个邪恶之徒，他利用了你们空虚内心的弱点，来达到他吞并你们的企图！", 37, 9111012, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#今天趁着大家都在场，我们要一五一十地揭露他的真面目！", 37, 9111012, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#放，放肆！竟敢诋毁鵺大人的善行！", 37, 9111025, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#唔哈哈哈哈！！#b愚昧的人类#k！我可是#b在深渊中度过漫长岁月后终于获得新生的#k特殊生灵！我作为#b大太法师的钢铁之翼兼代言人#k，一直在#b为亡灵们的超度祈福#k！我这样具有奉献精神，怎么会是邪恶之徒！", 37, 9111013, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##h0#，就是现在！", 37, 9111012, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#鵺的话漏洞百出！正是给了我们扳倒他的借口！", 37, 9111012, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.askMenu_Bottom("#h0#，我们先从哪里开始反驳他？\r\n#L0##b愚昧的人类#k#l\r\n#L1##b在深渊中度过漫长岁月后终于获得新生的#k#l\r\n#L2##b大太法师的钢铁之翼兼代言人#k#l\r\n#L3##b为亡灵们的超度祈福#k#l", 37, 9111012);
                                  } else {
                                    if (status === V++) {
                                      selectionLog[66] = e;
                                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        var O = "action分支0_" + selectionLog[66];
                                        eval(O)(f, E, e, V);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0_0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你说我愚昧？！", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#哈！才这么一句话就把你惹毛啦。可笑。", 37, 9111013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##h0#……你要理性应对！", 37, 9111012, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哼！我实在听不下去了。", 37, 9111014, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你挺会编故事啊，可故事编得再好，也是没人信的。", 37, 9111014, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你们说这些话有什么证据吗？", 37, 9111014, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("证据？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呵呵，一上来就血口喷人，好歹拿出点证据来啊？", 37, 9111014, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##h0#！快把证据拿出来，证明你刚才说的话都是真的吧！", 37, 9111012, true, true);
                  } else if (status === V++) {
                    cm.askMenu_Bottom("#face0##h0#，你必须拿出合适的证物！\r\n#L0#鵺的日记本#l\r\n#L1#生日贺卡#l\r\n#L2#无头鬼的账本#l\r\n#L3#黑色圣水配方#l", 37, 9111012);
                    selectionLog[67] = -1;
                  } else {
                    if (selectionLog[67] < 0) {
                      selectionLog[67] = e;
                    }
                    if (selectionLog[67] == -1) {
                      action分支1_0(f, E, e, V);
                    } else {
                      actionFail(f, E, e, V);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0_1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("……鵺，你说你在深渊里待了多长时间？", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#哼！那是一段相当漫长的岁月。说起来跟太初一样遥不可及了！", 37, 9111013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你说谎！你诞生还不足5年！", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你挺会编故事啊，可故事编得再好，也是没人信的。", 37, 9111014, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你们说这些话有什么证据吗？", 37, 9111014, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("证据？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呵呵，一上来就血口喷人，好歹拿出点证据来啊？", 37, 9111014, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##h0#！快把证据拿出来，证明你刚才说的话都是真的吧！", 37, 9111012, true, true);
                } else if (status === V++) {
                  cm.askMenu_Bottom("#face0##h0#，你必须拿出合适的证物！\r\n#L0#鵺的日记本#l\r\n#L1#生日贺卡#l\r\n#L2#无头鬼的账本#l\r\n#L3#黑色圣水配方#l", 37, 9111012);
                  selectionLog[67] = -1;
                } else {
                  if (selectionLog[67] < 0) {
                    selectionLog[67] = e;
                  }
                  if (selectionLog[67] == 1) {
                    action分支1_1(f, E, e, V);
                  } else {
                    actionFail(f, E, e, V);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0_2(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你说谎！谁都没见过大太法师！！", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#哈！但是我见过。", 37, 9111013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我不相信！你拿出证据来！", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#倒是你，你有什么证据说我没见过大太法师。", 37, 9111013, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("证据？", 57, 0, true, true);
          } else if (status === V++) {
            cm.askMenu_Bottom("#face0##h0#，你必须拿出合适的证物！\r\n#L0#鵺的日记本#l\r\n#L1#生日贺卡#l\r\n#L2#无头鬼的账本#l\r\n#L3#黑色圣水配方#l", 37, 9111012);
            selectionLog[67] = -1;
          } else {
            if (selectionLog[67] < 0) {
              selectionLog[67] = e;
            }
            if (selectionLog[67] == 0) {
              action分支1_2(f, E, e, V);
            } else {
              actionFail(f, E, e, V);
            }
          }
        }
      }
    }
  }
}
function action分支0_3(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("那些被你超度的亡灵去哪里了？", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#……他们有罪的灵魂已被净化，得到了超度！", 37, 9111013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你说谎！你凭什么那么肯定？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#哼，难不成你有办法证明我在说谎？", 37, 9111013, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('证明的办法……？', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我可以证明你所谓的奇迹是伪造的！", 57, 0, true, true);
            } else if (status === V++) {
              cm.askMenu_Bottom("#face0##h0#，你必须拿出合适的证物！\r\n#L0#鵺的日记本#l\r\n#L1#生日贺卡#l\r\n#L2#无头鬼的账本#l\r\n#L3#黑色圣水配方#l", 37, 9111012);
              selectionLog[67] = -1;
            } else {
              if (selectionLog[67] < 0) {
                selectionLog[67] = e;
              }
              if (selectionLog[67] == -1) {
                action分支1_3(f, E, e, V);
              } else {
                actionFail(f, E, e, V);
              }
            }
          }
        }
      }
    }
  }
}
function action分支1_0(f, E, e, V) {
  if (status <= V++) {} else {}
}
function action分支1_1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("在这里！", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("证据就是你房间里堆积如山的画像贺卡！", 57, 0, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你看清楚这上面的语句！“调皮的鵺小朋友，四岁生日快乐。”，“祝贺鵺的第四个生日”等等！", 57, 0, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk_Bottom("我看，你只是个四岁的小亡灵！", 57, 0, true, true);
      } else {
        actionWin(f, E, e, V);
      }
    }
  }
}
function action分支1_2(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("像你这种整天缩在房间里的阿宅，怎么可能见过大太法师。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#哈！！我本身就是黑暗，是无处不在的影子！区区洞窟根本不能阻碍我的行动！", 37, 9111013, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#你除了一张嘴会说，有没有什么证据！", 37, 9111013, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("证据在这里！你的日记本！", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这是我在你房间里堆积如山的鵺福音之间发现的！！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你看这些句子！“有时候我也想到洞窟外面去看看。”，“我有时会哭泣。”，“我今天你也没能出去。切，不就是结界吗”等等！", 57, 0, true, true);
            } else if (status === V++) {
              cm.sendNormalTalk_Bottom("我看啊，你只不过是个还在青春期的感性死宅亡灵！", 57, 0, true, true);
            } else {
              actionWin(f, E, e, V);
            }
          }
        }
      }
    }
  }
}
function action分支1_3(f, E, e, V) {
  if (status <= V++) {} else {}
}
function actionWin(f, E, e, V) {
  if (status <= V++) {
    cm.inGameDirectionEvent_AskAnswerTime(3000);
    cm.effect_NormalSpeechBalloon("听起来好像有点道理哦……？", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111028, null, cm.getPlayer().getId());
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.effect_NormalSpeechBalloon("就是说嘛！我一开始就觉得有可疑了！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111028, null, cm.getPlayer().getId());
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#不，你们不要被他的话蛊惑了！", 37, 9111014, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3829476"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.sendNormalTalk_Bottom("……总结下来，鵺！你根本不是什么亡者之神，只不过是个饥饿的中二病亡灵罢了！", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呜哇啊啊啊啊！！！", 37, 9111013, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#鵺大人！", 37, 9111014, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不……", 37, 9111013, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我不是……！！！", 37, 9111013, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我不是我不是我不是我不是我不是我不是！！！！！！", 37, 9111013, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我……我……！！！呃啊啊啊啊啊！", 37, 9111013, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else if (status === V++) {
                        cm.warp(800022011, 0, false);
                        cm.npc_LeaveField("oid=3829474");
                        cm.npc_LeaveField("oid=3829474");
                        cm.npc_LeaveField("oid=3829475");
                        cm.npc_LeaveField("oid=3829475");
                        cm.npc_LeaveField("oid=3829476");
                        cm.npc_LeaveField("oid=3829476");
                        cm.npc_LeaveField("oid=3829477");
                        cm.npc_LeaveField("oid=3829477");
                        cm.npc_LeaveField("oid=3829478");
                        cm.npc_LeaveField("oid=3829478");
                        cm.npc_LeaveField("oid=3829479");
                        cm.npc_LeaveField("oid=3829479");
                        cm.npc_LeaveField("oid=3829480");
                        cm.npc_LeaveField("oid=3829480");
                        cm.npc_LeaveField("oid=3829481");
                        cm.npc_LeaveField("oid=3829481");
                        cm.npc_LeaveField("oid=3829482");
                        cm.npc_LeaveField("oid=3829482");
                        cm.npc_LeaveField("oid=3829483");
                        cm.npc_LeaveField("oid=3829483");
                        cm.npc_LeaveField("oid=3829484");
                        cm.npc_LeaveField("oid=3829484");
                        cm.npc_LeaveField("oid=3829485");
                        cm.npc_LeaveField("oid=3829485");
                        cm.npc_LeaveField("oid=3829486");
                        cm.npc_LeaveField("oid=3829486");
                        cm.npc_LeaveField("oid=3829487");
                        cm.npc_LeaveField("oid=3829487");
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.forceCompleteQuest(58752);
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
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
function actionFail(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#哈！！真无聊！就凭你们一张破嘴，无凭无据的，竟敢来审问我。", 37, 9111013, false, true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.effect_NormalSpeechBalloon("哈，这审判也太无厘头了吧……？", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111028, null, cm.getPlayer().getId());
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_NormalSpeechBalloon("感觉一点不可靠啊。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111028, null, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.fieldEffect_SaveEff("hillah/fail");
          cm.sendNormalTalk_Bottom("#face0#没必要继续听他们瞎扯淡了！马上把他们拖出去！", 37, 9111014, false, true);
        } else {
          if (status === V++) {
            cm.playerMessage(-1, "因为你没说服陪审员，被强制退场了。");
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.warp(800022520, 0, false);
            cm.setInGameDirectionMode(false, true, false);
            cm.npc_LeaveField("oid=3668126");
            cm.npc_LeaveField("oid=3668126");
            cm.npc_LeaveField("oid=3668127");
            cm.npc_LeaveField("oid=3668127");
            cm.npc_LeaveField("oid=3668128");
            cm.npc_LeaveField("oid=3668128");
            cm.npc_LeaveField("oid=3668129");
            cm.npc_LeaveField("oid=3668129");
            cm.npc_LeaveField("oid=3668130");
            cm.npc_LeaveField("oid=3668130");
            cm.npc_LeaveField("oid=3668131");
            cm.npc_LeaveField("oid=3668131");
            cm.npc_LeaveField("oid=3668132");
            cm.npc_LeaveField("oid=3668132");
            cm.npc_LeaveField("oid=3668133");
            cm.npc_LeaveField("oid=3668133");
            cm.npc_LeaveField("oid=3668134");
            cm.npc_LeaveField("oid=3668134");
            cm.npc_LeaveField("oid=3668135");
            cm.npc_LeaveField("oid=3668135");
            cm.npc_LeaveField("oid=3668136");
            cm.npc_LeaveField("oid=3668136");
            cm.npc_LeaveField("oid=3668137");
            cm.npc_LeaveField("oid=3668137");
            cm.npc_LeaveField("oid=3668138");
            cm.npc_LeaveField("oid=3668138");
            cm.npc_LeaveField("oid=3668139");
            cm.npc_LeaveField("oid=3668139");
            cm.dispose();
          }
        }
      }
    }
  }
}