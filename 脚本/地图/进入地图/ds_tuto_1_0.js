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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2159308, "oid=247670", 207, -35, 1, 157, 257, 1, false, 0, false);
      cm.npc_ChangeController(2159310, "oid=247671", -41, -35, 1, -91, 9, 0, false, 0, false);
      cm.npc_ChangeController(2159339, "oid=247672", -142, -47, 3, -178, -126, 0, false, 0, false);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("除了出去外勤的军团长，大家都到齐了吗…那就开始开会吧。", 1, 2159310, false, true);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/0", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("在伟大的大人——黑魔法师办完事情之前，我们也要做好我们分内的事情。不能因为他没监督我们，就偷懒，不是吗？话说回来#h0#……我听说你搞到了有趣的情报？", 1, 2159308, true, true);
          cm.effect_Voice("Voice.img/DemonSlayertutorial_A/1", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……我收到了抵抗军们正在集结的情报。", 3, 2159308, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("抵抗军……一群乌合之众能做什么，咳咳咳……听说人们叫他们#r英雄#k？可笑至极。", 1, 2159308, true, true);
              cm.effect_Voice("Voice.img/DemonSlayertutorial_A/2", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我还很期待呢，这也算是垂死挣扎吧？真好奇他们会怎么反抗我们。上次的圣地占领战他们不也败北了吗~消灭那个被称为女皇的家伙太容易了，我都觉得无聊了呢。", 1, 2159339, true, true);
                cm.effect_Voice("Voice.img/DemonSlayertutorial_A/3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那次的战斗能够轻松获胜，全靠黑魔法师的实力，跟你的能力没啥关系吧。#p2159339#？别那么嚣张。", 1, 2159308, true, true);
                  cm.effect_Voice("Voice.img/DemonSlayertutorial_A/4", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("唔…可是我都没什么可做的啊！", 1, 2159339, true, true);
                    cm.effect_Voice("Voice.img/DemonSlayertutorial_A/5", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("斯乌大人好像很忙的样子，奥尔卡，您在这里没问题吗？", 3, 2159339, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("斯乌他是认真过了头，总会找些没用的事来做！不过我也正打算去一趟斯乌那里！哼！军团长都太刻板了，无聊。", 1, 2159339, true, true);
                        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/6", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("…那会议呢？", 1, 2159310, true, true);
                          cm.effect_Voice("Voice.img/DemonSlayertutorial_A/7", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("真是的，#p2159339#一吵起来，会都进行不下去了。啧啧…刚才是在说英雄们的事情，对吧？英雄啊…哼，自然会有高贵的#h0#来收拾他们吧。", 1, 2159308, true, true);
                            cm.effect_Voice("Voice.img/DemonSlayertutorial_A/8", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("连时间女神都能战胜的人，那么点英雄算什么啊？不是吗？哈哈哈哈…", 1, 2159308, true, true);
                              cm.effect_Voice("Voice.img/DemonSlayertutorial_A/9", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("…不能小看了他们。勇于拼命的人总会发挥出超长的能量的。而且我只是让时间女神陷入了无法行动的状态…而最终抓住敌人的还是那一位。", 3, 2159308, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("哎哟，哎哟，这么谦虚啊。不过你也因此在大人那里记了一个大功，不是吗？跟这件事比起来，之前我在神殿里展开的无数地下工作都羞于启齿了。", 1, 2159308, true, true);
                                  cm.effect_Voice("Voice.img/DemonSlayertutorial_A/10", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("…你们两个够了吧。", 1, 2159310, false, true);
                                      cm.effect_Voice("Voice.img/DemonSlayertutorial_A/11", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("为什么？不是很有意思吗？继续啊。#p2159309#。", 1, 2159339, true, true);
                                        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/12", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("我只是在称颂我们军团最高功臣#h0#而已啊，咳咳咳……", 1, 2159308, true, true);
                                          cm.effect_Voice("Voice.img/DemonSlayertutorial_A/13", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#p2159309#。自从占领了神殿，一切都快要结束了…在这件事情上，能把时间女神困住，确实是#h0#的一大功劳啊。", 1, 2159310, false, true);
                                              cm.effect_Voice("Voice.img/DemonSlayertutorial_A/14", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("而且你蒙住女神的眼睛那件事，不是已经得到了相应的报酬了吗？你还想干什么，#p2159309#?", 1, 2159310, true, true);
                                                cm.effect_Voice("Voice.img/DemonSlayertutorial_A/15", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("我能想干什么…哼，那这个话题就到此为止，我们继续开会吧。那些无聊的英雄就不要再说了，说说其他的抵抗势力现在怎么样了？", 1, 2159308, true, true);
                                                  cm.effect_Voice("Voice.img/DemonSlayertutorial_A/16", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("…按照命令，已经确认过了，他们全部都已经破坏殆尽了。", 1, 2159310, true, true);
                                                    cm.effect_Voice("Voice.img/DemonSlayertutorial_A/17", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk('哦哦，这样啊。', 1, 2159308, true, true);
                                                      cm.effect_Voice("Voice.img/DemonSlayertutorial_A/18", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("不过啊~黑魔法师他为什么会突然改变计划了呢？不是说好占领神殿就结束的吗？我当然无所谓了，可是全都破坏干净了，以后就没什么可玩儿的了，不是吗？", 1, 2159339, true, true);
                                                        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/19", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("…破坏？那又是…什么命令？我都没听说过。", 3, 2159339, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("啊哈，对了，我是看你之前和女神战斗太辛苦，所以没告诉你。你想知道是什么命令啊？很简单。", 1, 2159308, true, true);
                                                            cm.effect_Voice("Voice.img/DemonSlayertutorial_A/20", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("伟大的那一位希望我们把这一切战争都结束掉。我们接到了命令，要把那些拖拖拉拉的抵抗势力全都消灭干净。所以除了你之外的所有军团长都出发了。", 1, 2159308, true, true);
                                                              cm.effect_Voice("Voice.img/DemonSlayertutorial_A/21", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/18"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("…对神木村不要留一棵草、一棵树，全都被消灭干净了…", 1, 2159310, false, true);
                                                                  cm.effect_Voice("Voice.img/DemonSlayertutorial_A/22", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("(神木村所处的南部地区还有我的家人啊…！)", 3, 2159310, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("黑魔法师所希望的事情，也许能为抵抗军树立榜样…所以这次的事情办得有些过于彻底了。这也算是好事一桩啊，不是吗？", 1, 2159308, true, true);
                                                                        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/23", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("是啊…那个叫龙的种族估计现在已经所剩无几了。", 1, 2159310, true, true);
                                                                          cm.effect_Voice("Voice.img/DemonSlayertutorial_A/24", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("…等等，我们不是说好不攻击南部地区的吗？现在南部地区都破坏到哪里了？请告诉我…！", 3, 2159310, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("破坏到哪里了…那位大人的命令应该不会被草草执行吧？如果接到的命令是彻底毁灭，那应该就是斩草除根了吧，咳咳咳…你干嘛要这么敏感啊？有什么心事吗？", 1, 2159308, true, true);
                                                                              cm.effect_Voice("Voice.img/DemonSlayertutorial_A/25", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/11"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("我有事要确认一下，先行告辞了…！", 3, 2159308, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("哎哟~就算你再受黑魔法师的宠爱，也不能这么随便啊。我不是说了我们要做份内的事情吗？你现在离开，就是违抗命令。", 1, 2159308, true, true);
                                                                                    cm.effect_Voice("Voice.img/DemonSlayertutorial_A/26", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                                                      cm.sendNormalTalk("(戴米安，妈妈…但愿你们平安无事...)", 3, 2159308, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("他听都不听我说的。哼…不过你是有#r家人#k在那里吗？咳咳咳…祝你好运了！", 1, 2159308, true, true);
                                                                                        cm.effect_Voice("Voice.img/DemonSlayertutorial_A/27", 100);
                                                                                      } else if (status === V++) {
                                                                                        cm.curNodeEventEnd(true);
                                                                                        cm.dispose();
                                                                                        cm.warp(924020010, 0, false);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}