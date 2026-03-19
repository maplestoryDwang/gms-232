var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(38004) == 1) {
    action38004(f, E, e);
  } else {
    if (cm.getQuestStatus(38011) == 1) {
      action38011(f, E, e);
    } else {
      if (cm.getQuestStatus(38020) == 1) {
        cm.dispose();
        cm.gainExp(3000);
        cm.forceCompleteQuest(38020);
        cm.warp(940200040, 0, false);
      } else {
        if (cm.getQuestStatus(38021) == 1) {
          cm.dispose();
          cm.warp(940200040, 0, false);
        } else if (cm.isQuestActive(38062)) {
          action38062(f, E, e);
        } else {
          cm.dispose();
          cm.warp(410000002, 0, false);
        }
      }
    }
  }
}
function action38011(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(3002102, "oid=110507744", 204, -135, 36, 154, 254, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=110507744", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("……干嘛跟过来？", 5, 3002102, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('……', 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("傻瓜，这里是经常有老虎出没的危险地带。", 5, 3002102, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('……对不起。', 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.askMenu("哼，干嘛说对不起？\r\n\r\n#b#L0#对不起，你送给我的生肝，我没吃#l\r\n#L1#对不起，我不该骗你说吃了生肝#l\r\n#L2#对不起，是我让你伤心了#l", 1, 0);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我，我干嘛要在乎你？什么都不知道的笨蛋！没有耳朵，也没有尾巴，长得倒挺大，又不会打猎。还有，还有……", 5, 3002102, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("好吧，对不起。", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("事实上，生肝是我弄到的。我去了很远的地方，一个人打猎，好不容易才弄到的……但是你为什么要像傻瓜一样给我答谢？只是搜集老鼠尾巴就让自己受了伤。隐月真是个傻瓜！傻瓜！", 5, 3002102, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("嗯，对不起。", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("…………还是不行！就算有了灵气隐月也还是太弱。既不能快速奔跑，也不能用厉爪抓挠，而且还不能用尖牙撕咬。这样下去的话说不上碰到只老虎就会被干掉的。所以…………所以，我要把我的灵气给隐月。", 5, 3002102, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你在说什么啊？等等，阿琅，你在想什么啊……", 17, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("eunwolTuto/rang", 100);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/passon/rang", "oid=110507744"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("eunwolTuto/eunwol", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2300);
                                } else {
                                  if (status === V++) {
                                    cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/passon/eunwol");
                                    cm.sendNormalTalk("阿琅！你到底……！", 17, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("既然是我捡回了隐月，就由我来负责吧。我的灵气会守护隐月的。我即使没了灵气也很强大的，所以没关系。万一我陷入危险，那么就由隐月来守护我就可以了。所以我没关系的！不过，这件事要对其他的狐狸保密！", 5, 3002102, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("…………阿琅", 17, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("不过，万一#r我的狐狸珠不见的话，我就不能使用技能了，#k所以我必须时刻带着我的狐狸珠。你能帮我守护我的#r狐狸珠#k吗？", 5, 3002102, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("那我先回村里去了……现在我也许会走得比隐月还慢。那我先走了！", 5, 3002102, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=110507744");
                                              cm.npc_LeaveField("oid=110507744");
                                              cm.sendNormalTalk("你到底为什么这么对我。到底为什么…………啊，这件事如果被村长狐狸诺亚知道了，他一定会大发雷霆的。", 17, 0, true, true);
                                            } else if (status === V++) {
                                              cm.teachSkill(25001002, 1, 25);
                                              cm.teachSkill(25001000, -1, 0);
                                              cm.gainExp(1800);
                                              cm.updateInfoQuest(38011, '');
                                              cm.forceStartQuest(38011, '');
                                              cm.forceCompleteQuest(38011);
                                              cm.forceCompleteQuest(38011);
                                              cm.playerMessage(-1, "[冲击拳]已经被强化为[闪拳]技能。");
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.dispose();
                                              cm.warp(410000002, 0, false);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action38004(f, E, e) {
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
      cm.npc_ChangeController(3002100, "oid=110484158", 204, -135, 36, 154, 254, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=110484158", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("狐神，狐神，他就是从今天开始住在我们村里的隐月。您也看到了，他是个没有耳朵也没有尾巴的可怜孩子。求狐神保佑他。", 5, 3002100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("(这是某种图腾崇拜吗？长得像狐狸的种族竟然相信狐神，真有趣。)", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("隐月！对了，别光顾着干别的，快点向狐神祈祷～快点！", 5, 3002100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那，那就拜托您……了。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("eunwolTuto/foxgod", 100);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/foxgod/stone", "oid=110484158"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("eunwolTuto/blessing", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/foxgod/eunwol");
                    cm.sendNormalTalk("…………！！！刚刚那是什么？！一个发光的东西在身体上方…………！", 17, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("还能是什么。这是狐神在为你赐福。快点说谢谢～狐神愿意给没有耳朵和尾巴的隐月赐福，可以说是大发慈悲。", 5, 3002100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("谢，谢谢……等等，刚才那道光是狐神的护佑吗？狐神的护佑是有实体的力量吗？", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("难道你以为是恶作剧吗？唰的一声，进入到隐月身体的是#r精灵之力#k。以后，隐月也能够像我们尖耳狐狸一样使用精灵之力了！我会将精灵之力的使用方法一个一个地交给你，听好了！", 5, 3002100, true, true);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=110484158");
                          cm.npc_LeaveField("oid=110484158");
                          cm.teachSkill(20051284, 0, -1);
                          cm.teachSkill(20051284, 1, 0);
                          cm.teachSkill(20050285, 0, -1);
                          cm.teachSkill(20050285, 1, 0);
                          cm.updateInfoQuest(38004, '');
                          cm.forceStartQuest(38004, '');
                          cm.forceCompleteQuest(38004);
                          cm.gainExp(600);
                          cm.playerMessage(-1, "你学会了[缩地]和[精灵凝聚第1招]技能。");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                          cm.warp(410000002, 0, false);
                        } else {
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
function action38062(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("(我的愿望是……让我能够拥有让一切恢复原状的力量和勇气。)", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("eunwolTuto/foxgod", 100);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/foxgod/stone"], [0, 204, -135, 1, 0, 1, 1, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2100);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("eunwolTuto/blessing", 100);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/foxgod/eunwol");
            cm.sendNormalTalk("哇，刚才看到了吗？狐神好像接受了你的愿望！你的运气真好！哎呀，但是我的愿望什么时候才能实现呢。狐神，嗯？", 5, 3002101, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("…………虽然你已经不记得，不过你曾经借给过我一样东西。我原本是想再见到你时还给你的，可是现在我必须再借一段时间。所以再等等吧。还有…………保重身体哦。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_SetHideEffect(1);
                cm.sendNormalTalk("我把东西借给了你？我从没有过。可是为什么有一种熟悉的气味呢。就…………像是风一样的气味。", 5, 3002101, true, true);
              } else if (status === V++) {
                cm.forceStartQuest(38063, 'clear');
                cm.forceCompleteQuest(38062);
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
                cm.warp(101000000, 0, false);
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