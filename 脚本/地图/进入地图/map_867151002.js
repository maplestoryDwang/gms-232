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
      cm.npc_ChangeController(9401219, "oid=256217", 221, 86, 10, 171, 271, 0, false, 0, false);
      cm.npc_ChangeController(9401220, 'oid=256218', -1185, 86, 14, -1235, -1135, 0, false, 0, false);
      cm.npc_ChangeController(9401221, "oid=256219", 384, 86, 27, 334, 434, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, 300, 100]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("风风～！准备得还顺利吗？", 37, 9401219, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊，你来得正好，我正好有东西要给新来的队员看呢！！", 37, 9401221, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我就知道，所以就亲自来找你啦！来，风风，都准备好了吧？", 37, 9401219, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那是当然！\r\n#h0#队员，能看到这个吗？！", 37, 9401221, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这是……？", 57, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("好不容易进入海市蜃楼岛的先遣队拿到了重要情报，说是岛上封印有#b传奇遗物#k！", 37, 9401219, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("证据便是这#b古代石板#k！\r\n风风，就麻烦你说明一下了～！", 37, 9401219, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("哈哈哈！没错，多亏了风风我不分昼夜的解读，我们#b冒险岛探险队#k才找到了勘探的线索！", 37, 9401221, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("对了，忘记自我介绍了！我叫小风，负责冒险岛探险队的技术支持和研究工作。", 37, 9401221, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你可以像队长一样，亲切地叫我一声#b风风#k，要是觉得名字难记，也可以叫我#b博士#k，你想怎么叫都行！哈哈～", 37, 9401221, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("虽说她并没有博士学位。", 37, 9401219, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……咳咳，咳咳……！队长你也真是的，干吗说这些没用的话啦……！", 37, 9401221, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("总之，来～来看看吧！\r\n虽说目前才只解读了一丢丢而已……让我瞧瞧……能看到这一段吧？", 37, 9401221, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("大概从这里开始……看解读的内容就好……", 37, 9401221, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("………………所以我……", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("……决定在岛的最深处………………………………", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("…………在伟大的……………………光荣之下……", 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("………………………………将其封印…………", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("………………以期往事不再重复………………", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("看到了吧？看到了吧？这上面说封印了伟大的光荣宝物！！\r\n就在这座岛的最深处！！", 37, 9401219, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("啊……是……也算吧，这么解读也没什么不妥吧？虽说这里面并没有提到宝物这个词……", 37, 9401221, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……既然提到了封印……那也有可能是什么怪物或是什么可怕的东西吧……？", 57, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哎，呆子！不都说了是伟大的光荣嘛！虽说这#古代石板#k还有待进一步的解读，不过这#b海市蜃楼岛#k上一定藏着什么了不起的东西！", 37, 9401219, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("揭开隐藏的神秘之谜，便是我们#b冒险岛探险队#k的宿命！\r\n我便是为了能够拥有与之相对应的勇气和挑战精神，才当上了这个队长！", 37, 9401219, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这种没来由的自信便是我们队长最大的优点，也是最大的缺点。\r\n那什么，不过好歹作为队长，她还是挺有闯劲的！哈哈哈～", 37, 9401221, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("谢谢你的介绍，小风！那就辛苦你继续解读了，等我这边有了线索就告诉你！", 37, 9401219, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("尽管交给我好了～也要辛苦队长帮我们这位新来的队员好好指路～", 37, 9401221, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("好，那接下来我就去其他地方转转吧，#h0#，我还有一大堆事等着向你介绍呢！", 37, 9401219, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.forceCompleteQuest(65632);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(19, [0]);
                                                                        } else if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.dispose();
                                                                          cm.warp(867151000, 0, false);
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