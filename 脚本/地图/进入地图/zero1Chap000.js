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
      cm.npc_ChangeController(2420031, "oid=24691", -107, 245, 4, -157, -57, 1, false, 0, false);
      cm.npc_ChangeController(2420032, "oid=24692", -967, 275, 33, -1017, -917, 0, false, 0, false);
      cm.npc_ChangeController(2420033, "oid=24693", -570, 275, 23, -620, -520, 0, false, 0, false);
      cm.npc_ChangeController(2420034, "oid=24694", -27, 275, 26, -77, 23, 1, false, 0, false);
      cm.npc_ChangeController(2420035, "oid=24695", -626, 275, 23, -676, -576, 0, false, 0, false);
      cm.npc_ChangeController(2420036, "oid=24696", 68, 275, 18, 18, 118, 1, false, 0, false);
      cm.npc_ChangeController(2420037, 'oid=24697', -712, 275, 27, -762, -662, 0, false, 0, false);
      cm.npc_ChangeController(2420038, "oid=24698", -787, 275, 43, -837, -737, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2420000, "oid=2030057", -290, 241, 5, -340, -240, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2030057", "summon", 0, 0);
      cm.npc_ChangeController(2420011, "oid=2030058", -466, 238, 8, -516, -416, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2030058", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("沙漠之国果然很热啊？阳光这么刺眼，别说影子村了，就和神木村也反差这么大……果然这世界还是很大啊。", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很神奇……", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("咦，那里有很多人？是不是发生什么事情了？我们去看看。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 220, -710, 300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3908);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(1700);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("您的东西我收到了，#p2420011#。阁下的礼物王妃非常喜欢，也答应阁下驻足王宫，那么请您进入王宫吧。", 33, 2420000, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("噢噢~王妃殿下看上#b蓝色眼泪#k了吗？真是太好了！因为王妃殿下的眼睛是蓝色的，我还特地找了和她的眼睛最般配的宝石！真是太好了！", 33, 2420011, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("您要答谢的话，最好直接去找殿下答谢吧。那么快进入王宫吧。", 33, 2420000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("呵呵呵，我听说阿里特安的宰相性格如刀，果然名不虚传！希望能和阿里安特有良好的发展。", 33, 2420011, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=2030057");
                                  cm.npc_LeaveField("oid=2030058");
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 250, -872, 275);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(655);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("嗯……那是什么？王宫是指那个建筑吗……是来了国宾还是什么？怎么宰相还亲自出来接见客人？", 41, 2400005, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(2);
                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(1);
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("……说国宾就是国宾啊，居然献给了王妃如此贵重的东西……咦？你们两个好像第一次见到。是到阿里特安来玩的旅行家？还是冒险家？反正很高兴，我是阿里特安的舞姬#p2420005#。", 33, 2420005, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("从事舞姬的工作，我也见过很多人，但是像你们这样长得这么像的双胞胎还是第一次见到。而且俩人性别还不同。", 33, 2420005, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("双胞胎？……双胞胎是什么？", 41, 2400006, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("咦？不是双胞胎吗？那就是长得很像的兄妹？谁大谁小我怎么一点都看不出来？谁大？", 33, 2420005, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face4#我是哥哥。", 41, 2400005, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("……哥哥？但#p2400005#不是哥哥啊。#p2400005#只是我……喔？", 41, 2400006, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("#b(为什么捂住我的嘴巴？)", 41, 2400006, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("#face0# #b(是因为你说没用的话啊！你也是你，我也是你，谁听到了还以为我们俩是精神病呢？)", 41, 2400005, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("嗯……不知道什么是什么，但是又觉得我明白了似的。好吧，好吧，谁大谁小有什么重要的。", 33, 2420005, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("你们来得正是时候，刚进到王宫里的那些人当中，穿红衣服的那个男人，是从外国来的富翁。名字叫#b#p2420011##k。", 33, 2420005, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("听说那个人要在这个阿里特安做生意，所以好像准备了很多。感觉会需要很多物资，如果抓准机会了，你们也能赚到一笔。", 33, 2420005, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("嗯……刚才和那个宰相说话的时候，稍微听到了一点。听说#p2420011#给王妃送了蓝色的眼泪，那是什么？", 41, 2400005, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("蓝色眼泪？好像是到阿里特安之前#p2420011#专门为王妃准备的礼物，听说是个#b很了不起的宝石#k，虽然我也没有见过。咦？你那表情是怎么回事？难道你们对蓝色眼泪感兴趣？", 33, 2420005, true, true);
                                                                      } else if (status === V++) {
                                                                        cm.forceStartQuest(40115, '1');
                                                                        cm.dispose();
                                                                        cm.warp(322000000, 9, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;