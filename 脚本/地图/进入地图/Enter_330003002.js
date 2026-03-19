var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33100, "First") == 0) {
    action0(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action0(f, E, e) {
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
      cm.npc_ChangeController(1530140, "oid=41745916", 627, 72, 5, 577, 677, 0, true, false);
      cm.npc_SetSpecialAction("oid=41745916", 'summon', 0, 0);
      cm.npc_ChangeController(1530274, "oid=41745917", 547, 72, 4, 497, 597, 0, true, false);
      cm.npc_SetSpecialAction("oid=41745917", 'summon', 0, 0);
      cm.npc_ChangeController(1530284, "oid=41745918", 467, 72, 4, 417, 517, 0, false, false);
      cm.npc_SetSpecialAction("oid=41745918", 'summon', 0, 0);
      cm.npc_ChangeController(1530304, "oid=41745919", 707, 72, 5, 657, 757, 1, true, false);
      cm.npc_SetSpecialAction("oid=41745919", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs26#神兽国际学校旧楼\r\n#fs14#某个教室"], [100, 2500, 4, 0, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 666, 42);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("画着O，X的纸张。", 33, 1530140, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("已……已经放在这里了。", 33, 1530274, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("绑着头发的红笔。", 33, 1530140, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我带来了，给你。", 33, 1530284, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("所……所有准备已经完成。现在我们一起喊咒语，召唤出灵验的精灵吧！", 33, 1530140, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_NormalSpeechBalloon("力量……黑暗……充斥着周围！啊哈哈哈哈哈咔哈！", 0, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                      cm.effect_NormalSpeechBalloon("力量…黑暗…充斥着周围！啊哈哈哈哈哈哈哈！", 0, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("不……不过，弗朗西斯……咒语对吗？好像有些奇怪呢。", 33, 1530284, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("不要担心……呼呼……这是我在Facebook里看到的获得[1000个赞]的咒语，肯定不会有错的。", 33, 1530140, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("原……原来如此！", 33, 1530284, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_NormalSpeechBalloon("力量……黑暗……充斥着周围！ 啊哈哈哈呲哈哈！", 0, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("力量……黑暗……充斥着周围！ 啊哈哈哈呵哈哈！", 0, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 1000, 1530274, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                    cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 800, 1530284, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      cm.effect_NormalSpeechBalloon('....', 1, 0, 0, 1000, 1530304, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_NormalSpeechBalloon("精……精灵? 你们出现啦? ", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 887, 90, 1, 0, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                              cm.npc_ChangeController(1530545, "oid=41757427", 887, 72, 6, 837, 937, 1, false, false);
                                              cm.npc_SetSpecialAction("oid=41757427", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(400);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 987, 90, 1, 0, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                cm.npc_ChangeController(1530540, "oid=41757759", 987, 72, 6, 937, 1037, 1, false, false);
                                                cm.npc_SetSpecialAction("oid=41757759", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1047, 90, 1, 0, 1, 1, 0]);
                                                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                  cm.npc_ChangeController(1530541, "oid=41757762", 1047, 72, 6, 997, 1097, 1, false, false);
                                                  cm.npc_SetSpecialAction("oid=41757762", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1097, 90, 1, 0, 1, 1, 0]);
                                                    cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                    cm.npc_ChangeController(1530542, "oid=41757782", 1097, 72, 7, 1047, 1147, 1, false, false);
                                                    cm.npc_SetSpecialAction("oid=41757782", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1157, 90, 1, 0, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                      cm.npc_ChangeController(1530543, "oid=41758274", 1157, 71, 7, 1107, 1207, 1, false, false);
                                                      cm.npc_SetSpecialAction("oid=41758274", 'summon', 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1217, 90, 1, 0, 1, 1, 0]);
                                                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                        cm.npc_ChangeController(1530544, "oid=41758347", 1217, 71, 7, 1167, 1267, 1, false, false);
                                                        cm.npc_SetSpecialAction("oid=41758347", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=41745919");
                                                          cm.npc_LeaveField("oid=41745919");
                                                          cm.npc_ChangeController(1530304, "oid=41758369", 707, 72, 5, 657, 757, 0, true, false);
                                                          cm.npc_SetSpecialAction("oid=41758369", "summon", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.effect_NormalSpeechBalloon("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", 0, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                              cm.effect_NormalSpeechBalloon("是你们在召唤我们吗? ", 1, 0, 0, 3000, 1530545, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                cm.effect_NormalSpeechBalloon("精……精灵. 你是能回答我们任何问题的那位精灵吗? ", 1, 0, 0, 4000, 1530140, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                  cm.effect_NormalSpeechBalloon("问题? ", 1, 0, -500, 2000, 1530545, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                    cm.effect_NormalSpeechBalloon("呵呵呵, 问得好……嗯, 我会回答你任何问题", 1, 0, -500, 2000, 1530545, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      cm.effect_NormalSpeechBalloon('不过……', 1, 0, -500, 3000, 1530545, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("flowervioleta/appear", 100);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 917, 30);
                                                                        cm.effect_NormalSpeechBalloon("得在你们全部变为黑暗精灵之后！！呃哈哈哈哈！！！！", 0, 0, -800, 3000, 1530545, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=41745917", "suprise", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=41745918", 'suprise', -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=41758369", "suprise", -1, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 617, 50);
                                                                            cm.effect_NormalSpeechBalloon("呃啊啊啊啊啊啊啊啊！！！！", 0, 0, 0, 5000, 1530140, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else if (status === V++) {
                                                                                cm.updateInfoQuest(33100, "count=0;date=19/11/24;First=1");
                                                                                cm.dispose();
                                                                                cm.warp(330003000, 3);
                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
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
      cm.sendNormalTalk_Bottom("你好！#e#ho##n，我准备为你简单介绍下#e#b神兽国际学校旧楼#n#k的情况。", 37, 1530050, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("说明并不难，希望你能集中注意力认真听。", 37, 1530050, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这是以神兽国际学校旧楼为背景，由#b4个普通关卡#k和#r1个首领怪关卡#k构成的打猎场。", 37, 1530050, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("如果#ho#你能出色地通关这里，就能获得与之相符的多种奖励。", 37, 1530050, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯……比如说……", 37, 1530050, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ChangeEquipment([1051402]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("现在你试穿的校服也是奖励中的一种哦！校服真的很合身吧？", 37, 1530050, false, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('UI', "Map/Effect2.img/spinOff1/GrowUpUi", 0, 1000, 0, -50, 12, 4, 0);
                      cm.sendNormalTalk_Bottom("此外，你在这里不仅能获得普通经验值，还能获得使你所佩戴的#e#r#t1182079##n#k#e获得成长的#r装备经验值#k，以及能购买多种#r校服#k的#b#t4310125##n#k。", 37, 1530050, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('UIA', "Map/Effect2.img/spinOff1/GrowipUIAlert", 0, 500, 0, -50, 12, 4, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("UIA", '', 2, 500, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("UIA", "Map/Effect2.img/spinOff1/GrowipUIAlert", 0, 500, 0, -50, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('UIA', '', 2, 500, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('UIA', "Map/Effect2.img/spinOff1/GrowipUIAlert", 0, 500, 0, -50, 12, 4, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("UIA", '', 2, 500, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer("UIA", "Map/Effect2.img/spinOff1/GrowipUIAlert", 0, 500, 0, -50, 12, 4, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("特别是，当#e#r#t1182079##n#k#e获得一定的装备经验值后，装备的能力值将获得提高，该装备达到特定的阶段后，将会拥有提升#r攻击力与魔力#k的特殊力量。这或许是#ho#变得更为强大的绝佳机会。", 37, 1530050, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('UI', '', 2, 300, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("UIA", '', 2, 300, 0, 0, 0, 0, 0);
                                        cm.sendNormalTalk_Bottom("那么，我们现在来了解下进行方法吧？", 37, 1530050, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("首先，普通关卡由这幢建筑物中的#r医务室、美术室、科学室、音乐室、教室#k构成，#ho#，你必须依次完成这些房间中的任意4个。", 37, 1530050, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 897, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530558, "oid=41784987", 897, 72, 6, 847, 947, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784987", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1047, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530559, "oid=41784988", 1047, 72, 6, 997, 1097, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784988", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1187, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530558, "oid=41784989", 1187, 72, 7, 1137, 1237, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784989", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1317, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530559, "oid=41784990", 1317, 72, 8, 1267, 1367, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784990", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 697, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530558, "oid=41784991", 697, 72, 5, 647, 747, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784991", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 537, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530559, "oid=41784992", 537, 72, 4, 487, 587, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784992", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 347, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530558, "oid=41784993", 347, 72, 4, 297, 397, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784993", "summon", 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 227, 90, 1, 0, 1, 1, 0]);
                                            cm.npc_ChangeController(1530559, "oid=41784994", 227, 72, 3, 177, 277, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=41784994", 'summon', 0, 0);
                                            cm.sendNormalTalk_Bottom("#e#ho##n入场之后，每个房间将会像现在这样，在一定时间内出现两种不同种类的普通怪物。", 37, 1530050, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("还有，在规定的时间内狩猎怪物后……", 37, 1530050, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=41784987");
                                                cm.npc_LeaveField("oid=41784987");
                                                cm.npc_LeaveField("oid=41784988");
                                                cm.npc_LeaveField("oid=41784988");
                                                cm.npc_LeaveField("oid=41784989");
                                                cm.npc_LeaveField("oid=41784989");
                                                cm.npc_LeaveField("oid=41784990");
                                                cm.npc_LeaveField("oid=41784990");
                                                cm.npc_LeaveField("oid=41784991");
                                                cm.npc_LeaveField("oid=41784991");
                                                cm.npc_LeaveField("oid=41784992");
                                                cm.npc_LeaveField("oid=41784992");
                                                cm.npc_LeaveField("oid=41784993");
                                                cm.npc_LeaveField("oid=41784993");
                                                cm.npc_LeaveField("oid=41784994");
                                                cm.npc_LeaveField("oid=41784994");
                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 717, 90, 1, 0, 1, 1, 0]);
                                                  cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                  cm.npc_ChangeController(1530540, "oid=41786331", 717, 72, 5, 667, 767, 1, false, false);
                                                  cm.npc_SetSpecialAction("oid=41786331", 'summon', 0, 0);
                                                  cm.sendNormalTalk_Bottom("将会出现1只像这样强大的怪物。", 37, 1530050, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("让我看看……总共有5个房间，应该会有5种怪物！", 37, 1530050, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 967, 90, 1, 0, 1, 1, 0]);
                                                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                        cm.npc_ChangeController(1530541, "oid=41787632", 967, 72, 6, 917, 1017, 1, false, false);
                                                        cm.npc_SetSpecialAction("oid=41787632", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1017, 90, 1, 0, 1, 1, 0]);
                                                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                          cm.npc_ChangeController(1530542, "oid=41787640", 1017, 72, 6, 967, 1067, 1, false, false);
                                                          cm.npc_SetSpecialAction("oid=41787640", 'summon', 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1077, 90, 1, 0, 1, 1, 0]);
                                                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                                            cm.npc_ChangeController(1530543, "oid=41788120", 1077, 72, 7, 1027, 1127, 1, false, false);
                                                            cm.npc_SetSpecialAction("oid=41788120", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1117, 90, 1, 0, 1, 1, 0]);
                                                              cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                              cm.npc_ChangeController(1530544, "oid=41788123", 1117, 72, 7, 1067, 1167, 1, false, false);
                                                              cm.npc_SetSpecialAction("oid=41788123", "summon", 0, 0);
                                                              cm.sendNormalTalk_Bottom("这些怪物比普通怪物体力更好，并且各自具备#r特有的技能#k，因此你要格外小心。", 37, 1530050, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("但是，你也不要太过担心。你们在遇到非常危险的攻击时，埃尔文会在一旁指导你们的。", 37, 1530050, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("还有，请不要忘记，如果你们击退了这些怪物，在通关这里后，就能额外获得特别的#b#e★Bonus★#n#k。", 37, 1530050, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("好了，最后我来介绍下首领怪关卡吧。", 37, 1530050, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_LeaveField("oid=41786331");
                                                                      cm.npc_LeaveField("oid=41786331");
                                                                      cm.npc_LeaveField("oid=41787632");
                                                                      cm.npc_LeaveField("oid=41787632");
                                                                      cm.npc_LeaveField("oid=41787640");
                                                                      cm.npc_LeaveField("oid=41787640");
                                                                      cm.npc_LeaveField("oid=41788120");
                                                                      cm.npc_LeaveField("oid=41788120");
                                                                      cm.npc_LeaveField("oid=41788123");
                                                                      cm.npc_LeaveField("oid=41788123");
                                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1017, 90, 1, 0, 1, 1, 0]);
                                                                        cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                                                        cm.npc_ChangeController(1530545, "oid=41789419", 1017, 72, 6, 967, 1067, 1, false, false);
                                                                        cm.npc_SetSpecialAction("oid=41789419", "summon", 0, 0);
                                                                        cm.sendNormalTalk_Bottom("首领怪关卡与其他关卡不同，不会出现普通怪物，只有1只强大的首领怪。", 37, 1530050, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("首领怪将以惊人的体力，及目前为止你从未见过的多种强大技能来攻击#h0#你。", 37, 1530050, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("但是，据传闻说#e#b#t4310124##n#k#e只能从这些首领怪身上获得，因此，你好像无法对这些首领怪置之不理哦。", 37, 1530050, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("对啦！在副本中，即使角色死亡，也不会损失经验值，请不必担心。不过，每死亡一次，界面上方的#r#e死亡计数#n#k就会减少#r1#k，当计数变为#r#e0#n#k时，便会被强制退出猎场。", 37, 1530050, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("需要注意的是，#r#e死亡计数#n#k与复活类技能无关，只要死亡，数值便会减少。", 37, 1530050, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("那么，我的说明就此结束，我将把你送到原来所在的地方。#e#ho##n！请一定要从黑暗精灵手中守住这个城市。加油~！", 37, 1530050, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                      cm.setNumberForQuestInfo(33100, "First", 2);
                                                                                      cm.updateInfoQuest(32720, "sms=211");
                                                                                      cm.dispose();
                                                                                      cm.warp(330003000, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;