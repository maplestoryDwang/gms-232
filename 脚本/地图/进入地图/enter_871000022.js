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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 270, 250);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400928, "oid=746756", 190, 270, 1, 140, 240, 0, true, false);
      cm.npc_SetSpecialAction('oid=746756', "summon", 0, 0);
      cm.npc_ChangeController(9400932, 'oid=746757', 130, 270, 1, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=746757", "summon", 0, 0);
      cm.npc_ChangeController(9400935, "oid=746758", 80, 270, 1, 30, 130, 0, true, false);
      cm.npc_SetSpecialAction("oid=746758", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=746759", 35, 250, 1, -15, 85, 0, true, false);
      cm.npc_SetSpecialAction("oid=746759", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=746760", -20, 270, 1, -70, 30, 0, true, false);
      cm.npc_SetSpecialAction('oid=746760', "summon", 0, 0);
      cm.npc_ChangeController(9400931, "oid=746761", -80, 270, 1, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction('oid=746761', 'summon', 0, 0);
      cm.npc_ChangeController(9400929, "oid=746762", -140, 270, 1, -190, -90, 0, true, false);
      cm.npc_SetSpecialAction("oid=746762", 'summon', 0, 0);
      cm.npc_ChangeController(9400934, "oid=746763", -210, 270, 1, -260, -160, 0, true, false);
      cm.npc_SetSpecialAction("oid=746763", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 50, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#过了一会儿……凯尼斯家"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b咳咳，大家都……到齐了吧？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face1#嗯！', 37, 9400920, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#怎么突然召开居民大会，出什么事了吗？", 37, 9400922, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b不是的，没有出事。请别担心。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b今天……我要向大家介绍愉快的万圣节！", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#万圣节？", 37, 9400922, true, true);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("#b对，万圣节！万圣节就是10月31日……\r\n(向居民们介绍万圣节。)\r\n\r\n#L0#是亡灵回归，魔女和怪物出没的日子。#l\r\n#L1#是怪物们力量增强的日子。#l\r\n#L2#是所有杂货店集体促销的日子。#l", 57, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=746758"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face0#呃、呃啊啊？！幽灵？魔女？！", 37, 9400926, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这哪里是愉快的日子？！是可怕的日子才对吧？！", 37, 9400922, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#特鲁迪好怕怕！", 37, 9400926, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b不、不是的，特鲁迪，别担心！我知道一个办法，可以吓跑幽灵和魔女！", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.askMenu_Bottom("#b那就是…… \r\n(向居民们介绍万圣节。)\r\n\r\n#L0#在门前挂大蒜，撒糯米！#l\r\n#L1#我们可以打扮成更可怕的怪物和幽灵，或者著名的勇士，吓唬它们！#l\r\n#L2#天下无敌的我会全副武装，把幽灵统统打跑！#l", 57, 0);
                                } else {
                                  if (status === V++) {
                                    if (e == 0) {
                                      status -= 2;
                                      cm.sendNormalTalk_Bottom("#b(……这好像只能吓跑吸血鬼和僵尸。)", 57, 0, false, true);
                                    } else if (e == 1) {
                                      cm.sendNormalTalk_Bottom("#face1#哇，那我就不用变装了！", 37, 9400925, false, true);
                                    } else {
                                      status -= 2;
                                      cm.sendNormalTalk_Bottom("#b(……这样也行，但是应该还有更好的办法。)", 57, 0, false, true);
                                    }
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b是啊，哈哈…… ", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b其他村庄的居民会用南瓜和各种装饰，把房子装扮得阴森森的，开派对欢度万圣节。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b孩子们会打扮成幽灵或怪物，挨家挨户敲门讨要糖果，还会发出可爱的威胁：#k“不给糖果就捣蛋！”#b。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('#b听起来很有趣吧？', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=746757"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face0#……可是如果真的招来幽灵了该怎么办……", 37, 9400923, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=746756"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.sendNormalTalk_Bottom("#face2#呀吼！这么说，要是有人不给糖果，我就可以尽情捣蛋了？", 37, 9400920, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#啊，那我得提前准备好糖果和点心才行。", 37, 9400922, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#……我这就去买南瓜。", 37, 9400924, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b(幸好大家都一副兴致勃勃的样子。) ", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b今年我们村也来举办一场万圣节派对，怎么样？名字就叫凯兰西亚式万圣节派对！大家都来参与，体验前所未有的乐趣吧！", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=746756"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face2#我举双手赞成！", 37, 9400920, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#特鲁迪真的好怕怕……", 37, 9400926, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#艾丹也有点害怕……", 37, 9400923, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#好，派对上的食物统统交给我埃尔宾吧！", 37, 9400921, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#……恐怖这就上演了吗。", 37, 9400920, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我负责万圣节的装饰，我要把来到家里的幽灵们吓得魂飞魄散。", 37, 9400924, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#我也觉得不错。借此机会还能去其他村看看，顺便多要点糖果。", 37, 9400925, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#呃、嗯……虽然我觉得杰弗里做不到可爱的威胁了……不过那又怎么样！", 37, 9400920, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('#b好，那就……！', 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip('oid=746756', -1);
                                                                              cm.npc_setForceFlip("oid=746757", -1);
                                                                              cm.npc_setForceFlip("oid=746758", -1);
                                                                              cm.npc_setForceFlip("oid=746759", -1);
                                                                              cm.npc_setForceFlip('oid=746760', -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#看来大家都很开心嘛，哈哈哈。", 37, 9400922, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else if (status === V++) {
                                                                                  cm.warp(871000001, 0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.forceCompleteQuest(500841);
                                                                                  cm.forceCompleteQuest(64691);
                                                                                  cm.updateInfoQuest(500841, "name=" + cm.getPlayer().getName());
                                                                                  cm.npc_LeaveField("oid=746756");
                                                                                  cm.npc_LeaveField("oid=746757");
                                                                                  cm.npc_LeaveField("oid=746758");
                                                                                  cm.npc_LeaveField('oid=746759');
                                                                                  cm.npc_LeaveField("oid=746760");
                                                                                  cm.npc_LeaveField("oid=746761");
                                                                                  cm.npc_LeaveField("oid=746762");
                                                                                  cm.npc_LeaveField('oid=746763');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;