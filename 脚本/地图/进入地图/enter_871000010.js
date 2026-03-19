var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(9400928, "oid=12255907", 3900, 115, 1);
      cm.npc_SetSpecialAction("oid=12255907", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00/FloralLife", 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 230);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=12255907", -1, 100, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#哎呀……你是看了宣传单后来的吗？真的？", 37, 9400920, false, true);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=12255907", 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=12255907", 1, 150, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哎呀呀！别站着了，快点坐在这里吧！", 37, 9400920, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=12255907", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#虽然你已经看过宣传单了，但你应该知道这不是什么华丽的大宅子哦。它非常小巧，有点朴素但是非常温馨~，真的是很舒适的家哦。", 37, 9400920, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#请想象一下在结束了疲惫的一天后，躺在床上休息的样子。远处的鸟叫声，从窗子外面吹来的微风。可以在其中舒舒服服地休息！这不就是幸福吗！", 37, 9400920, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#家是回忆的场所，为了能让新的主人用回忆填满这个地方，家里已经留下了一些~空闲的地方。这样的留白总是让人激动呢。", 37, 9400920, true, true);
                          } else {
                            if (status === V++) {
                              cm.askMenu_Bottom("#face2#这样的房屋只要50万金币！怎么样？现在就马上签合同吧？\r\n#b#L0#我要签合同。#l\r\n#L1#给我一点时间考虑一下。#l\r\n#L2#这个价格是不是太便宜了。#l\r\n#L3#你这话说的有点奇怪啊。#l", 37, 9400920);
                            } else {
                              if (status === V++) {
                                switch (e) {
                                  case 0:
                                    cm.sendNormalTalk_Bottom("#face2#好的！请在这个合同上签字吧！", 37, 9400920, false, true);
                                    cm.playerMessage(5, "不会出现实际的金币支出和减少。");
                                    break;
                                  case 1:
                                    cm.sendNormalTalk_Bottom("#face3#嗯~现在想要签合同的人可都排起了长队呢，我可等不了太久。你应该知道这是个千载难逢的机会吧？", 37, 9400920, false, true);
                                    status -= 2;
                                    break;
                                  case 2:
                                    cm.sendNormalTalk_Bottom("#face3#啊，啊？你是觉得太便宜了，所以在怀疑吗？…… \r\n……虽然我觉得卖房不应该说这些……但是既然你在怀疑，那就没办法了。\r\n我的父母都是冒险家。虽然不是像勇士大人这么有名的冒险家，但也是为了冒险岛世界的和平而奋不顾身的人。他们把我和哥哥丢在这里……（抽泣）\r\n但是比起怨恨，我心中更多的是担心和思念。我们已经和他们失去联系很久了……（抽泣）所以我打算卖掉房子去寻找父母。你听说过[抛售]吗？抛！售！", 37, 9400920, false, true);
                                    status -= 2;
                                    break;
                                  default:
                                    cm.sendNormalTalk_Bottom("#face3#哎呀，你这人怎么这么多疑！难道你担心我是把这些话写好之后背下来的吗？！\r\n这都是我的真心话啊~", 37, 9400920, false, true);
                                    status -= 2;
                                    break;
                                }
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fs30##e[蘑菇屋买卖合同]", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fs15#买卖双方就以下标记的不动产按照下述内容结成买卖契约。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs20#\r\n所在地：冒险岛世界金银岛凯兰西亚村蘑菇路1-1", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs20#买卖金额：500,000 金币", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fs20#签约日期：" + cm.getNowTimeString(3), 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fs12#(绝对！绝对！禁止因为变心而退款！)", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fs15#\r\n卖方：艾米", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs15#买方：#h0#", 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#给，这个是能够马上前往家中的#i2630583:##t2630583#！", 37, 9400920, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.gainItem(2630583, 1);
                                                        cm.sendNormalTalk_Bottom("#face2#如果不小心弄丢了也不要担心，即使没有#t2630583#，还有很多可以前往家中的方法！", 37, 9400920, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('0', "Effect/DirectionWz2.img/effect/myHomeTuto/0", 0, 900, 0, -80, 12, 4, 0);
                                                          cm.sendNormalTalk_Bottom("#face1#第一，点击角色快捷栏的[前往我的小屋]按键后移动。", 37, 9400920, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#第二，在我的角色信息栏中点击[前往我的小屋]按键后移动。", 37, 9400920, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face1#我接下来还有事情，就不能和你一起去了……你应该能找到吧？", 37, 9400920, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#那就请好好享受冒险岛生活吧！下次再见……#fs8#(别再见)……#fs12#了！", 37, 9400920, true, true);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.updateInfoQuest(64612, "housing=4");
                                                                cm.updateInfoQuest(64612, "housing=4;furniture=2");
                                                                cm.forceCompleteQuest(500763);
                                                                cm.forceCompleteQuest(64590);
                                                                cm.forceStartQuest(64591, '');
                                                                cm.updateInfoQuest(500767, "7=1");
                                                                cm.updateInfoQuest(500773, "askR=0;managerHide=1;bonusTalk=0;s5=0;resetDate=" + cm.getNowTimeString(3) + ';affDown=' + cm.getNowTimeString(3));
                                                                cm.updateInfoQuest(500763, "name=" + cm.getPlayer().getName());
                                                                cm.playerMessage(5, "[我的小屋]入场方法");
                                                                cm.playerMessage(5, "1. 点击角色快捷栏的[前往我的小屋]按键即可进入。");
                                                                cm.playerMessage(5, "2. 点击我的角色信息栏的[前往我的小屋]按键即可进入。");
                                                                cm.playerMessage(5, "※ 完成所有的教程任务后，账号内的所有角色都能使用[我的小屋]。");
                                                                cm.warp(cm.getNumberFromQuestInfo(64590, 'rMap'));
                                                                cm.npc_LeaveField("oid=12255907");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;