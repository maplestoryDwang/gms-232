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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_ChangeEquipment([1003421, 1052424, 1102039]);
      cm.setInGameDirectionMode(false, true, false);
      cm.npc_ChangeController(1402100, "oid=219876", 227, -52, 9, 177, 277, 1, false, 0, false);
      cm.npc_ChangeController(1402101, 'oid=219877', 167, -54, 7, 117, 217, 1, false, 0, false);
      cm.npc_ChangeController(1402102, "oid=219878", 302, -54, 11, 252, 352, 1, false, 0, false);
      cm.npc_ChangeController(1402103, "oid=219879", 74, -2, 12, 24, 124, 1, false, 0, false);
      cm.npc_ChangeController(1402104, "oid=219880", 366, -2, 12, 316, 416, 1, false, 0, false);
      cm.npc_ChangeController(1402105, 'oid=219881', 491, -54, 11, 441, 499, 1, false, 0, false);
      cm.npc_ChangeController(1402106, 'oid=219882', 436, -54, 11, 386, 486, 1, false, 0, false);
      cm.fieldEffect_ScreenMsg("phantom/mapname3");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("(大家果然都聚集起来了。好像还没开始……她好像还没没登场。要先找个位子坐下来吗？)", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(现在的女皇和她的骑士们吗……？气氛好像不太好，大家的表情都很严肃。也是，在这种情况下，这也是必然的。)", 17, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(与会议员们的表情好像也不是很好。他们是怎么判断这个情况的呢？要偷听一下吗？)", 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("希纳斯不是真的皇帝……是真的吗？", 1, 1402200, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你说得太过分了。不是真皇帝的话，难道说我们是在服侍一位假皇帝吗？希纳斯现在还是皇帝呢。", 1, 1402201, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("虽然是真皇帝……但是正统性受到了怀疑，这难道不是事实吗？如果真的有人拥有圣地的宝物的话……", 1, 1402203, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("阿莉亚先皇留下的宝物……记录上确实有。", 1, 1402202, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("唉……真让人为难。如果那个宝物能证明谁是真正的皇帝的话，如果真正拥有皇帝血统的人不是希纳斯，而是另有其人的话……我们该怎么办呢？", 1, 1402200, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("希纳斯一直领导着圣地，我们不能背叛她……但是又不能对拥有真正皇帝血统的人装作不知道……真是为难。", 1, 1402203, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("好不容易把冒险岛世界的人聚集了起来，组建了联盟……大家都是相信希纳斯，才会加入联盟的。如果希纳斯之外的其他人成为皇帝的话，联盟一定会发生动摇。", 1, 1402202, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我们在这里讨论，也得不出什么结论。不知道那个生成拥有真正皇帝血统的人是什么人……应该先确认一下。", 1, 1402201, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk('嘘……好像终于到了。', 1, 1402201, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("(……终于，一切事情的导演者登场了。)", 17, 1402201, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ScreenMsg("phantom/hillah");
                                          cm.fieldEffect_PlayFieldSound("Magatia/alceCircle", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(1402400, "oid=732630", -131, -7, 12, -181, -81, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=732630", 'summon', 0, 0);
                                            cm.npc_ChangeController(1402401, "oid=732631", -209, -7, 12, -259, -159, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=732631", "summon", 0, 0);
                                            cm.npc_ChangeController(1402401, 'oid=732632', -282, -7, 12, -332, -232, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=732632", 'summon', 0, 0);
                                            cm.npc_ChangeController(1402401, "oid=732633", -59, -7, 12, -109, -9, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=732633", "summon", 0, 0);
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("来了这么多人啊。你们都是来听我的说明的吗？真的非常感谢。我就是斗胆宣称拥有真正皇帝血统的人，我叫希拉。", 1, 1402400, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("......", 1, 1402100, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("……我只是想证明那句话是假的，只是为了这个。", 1, 1402101, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("啊，当然……你们可能不会相信我的话。但是真相就是真相。现在，我想说说圣地的很多人都遗忘了的过去的故事。关于黑魔法师支配冒险岛世界的时候，那时候的皇帝阿莉亚……", 1, 1402400, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("(……阿莉亚……)", 17, 1402400, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("大家都知道，当时圣地的很多东西都被黑魔法师破坏，几乎没有记录流传下来。但是有一件事大家都知道，当时的皇帝阿莉亚拥有一件名叫司卡亚的宝物。", 1, 1402400, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("阿莉亚皇帝拥有的圣地的宝物司卡亚……那是只传给冒险岛世界的皇帝的神秘宝石，拥有保护皇帝，增强皇帝能力的力量。", 1, 1402400, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("有关司卡亚的记录确实存在，但是没人知道那个宝石拥有什么样的力量。", 1, 1402104, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("这是当然的。因为希纳斯没有司卡亚。但是我不一样，因为司卡亚传给了我。", 1, 1402400, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("由于黑魔法师和军团长们的攻击，司卡亚从圣地消失了…….这就是你们知道的全部。但是皇帝的神物司卡亚怎么可能就这样消失？那么重要的东西，先祖们会把它丢掉吗？", 1, 1402400, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("怎么可能？司卡亚被非常小心地传了下来。为了防止黑魔法师和手下们的攻击，被秘密地……传给了拥有真正皇帝血统的人。就这样传了数百年。", 1, 1402400, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("那是说那个人是你吗？", 1, 1402105, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("这是事实。", 1, 1402400, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("但，但是……你怎么证明你拥有的那个司卡亚是真的呢？你完全可以拿个假的来骗我们嘛。", 1, 1402103, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("呵呵，问得好。司卡亚虽然名气很大，但却是一块几乎没有人见过的神秘的宝石。现在冒险岛世界中知道司卡亚长什么样的人，只有你们这些见过司卡亚的画的人。", 1, 1402400, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("如果我拥有的司卡亚，和各位见到的样子一样的话，不就简单了吗？", 1, 1402400, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("喂，你在说什么啊？宝石都长得差不多。我们又没办法断定其他地方没有留下有关司卡亚的记录，不是吗？", 1, 1402106, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("我们又不是几百年前的人，不，就算是几百年前的人，也几乎没人见过司卡亚……老实说，我觉得可能性微乎其微。", 1, 1402400, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("还有其他证据。希纳斯软弱的身体就是证明。如果希纳斯拥有真正的皇帝血统，就不会被神兽的力量压制……所以她的身体才会那么弱。希纳斯，你也知道吧？你那么弱的原因……", 1, 1402400, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk('你太无礼了！', 1, 1402102, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("哎呀……让你觉得无礼了吗？真对不起。但是我没说错，不是吗？", 1, 1402400, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("我并不是让大家现在就相信我的话。但是，如果觉得我的话有道理的话，就先听着，然后好好讨论一番。这难道不是你应该做的吗，希纳斯？", 1, 1402400, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("……是的，我能坐上现在的位子……不是因为我很特别。只，只是因为这是与生俱来的。", 1, 1402100, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("但是我的正统性……不容有任何怀疑。需要的话…… 我可以把一切都说给大家听。", 1, 1402100, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk('希纳斯！', 1, 1402101, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("为了我们认为正确的道路，不断把其他人拖入我们的战争，而我却在这里受到所有人的保护。这都是因为我是皇帝，不是因为别的。但是如果我没有成为皇帝的资格的话……", 1, 1402100, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("我没有资格领导冒险岛世界的这么多人……", 1, 1402100, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("(声音虽然在颤抖，但目光很坚定。虽然看上去很柔弱，但其实意志很坚强。策士脸上一副绝对不能接受的表情，团长们则摆出了战斗的姿势，看来人望还挺高的嘛？真的是阿莉亚的……)", 17, 1402100, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("好吧，那就用不着兜圈子了。我们就在这里证明谁是拥有真正皇帝血统的人吧。据说司卡亚放在真正的主人手上就会发光。圣地的女皇希纳斯……如果你拥有真正的皇帝血统，就拿起司卡亚吧。", 1, 1402400, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("如果你是真正的冒险岛世界的皇帝，司卡亚一定会发光……", 1, 1402400, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ScreenMsg("phantom/skaia");
                                                                                                          cm.fieldEffect_PlayFieldSound("phantom/skaia", 100);
                                                                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(7500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("……啊……", 1, 1402100, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk("果然一点光都没有。难道这还不够清楚吗？", 1, 1402400, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk("......", 1, 1402100, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk("现在下结论还早，女皇。", 1, 1402102, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk("是啊，女皇陛下，谁知道那个光到底是不是真的呢？", 1, 1402106, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("没，没错！发光的魔法，我也会用。", 1, 1402103, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("等神兽回来之后，就会真相大白。希纳斯，绝对不能相信那个女人的话。", 1, 1402104, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("如果连你都动摇的话，大家就都会动摇。打起精神。", 1, 1402105, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk("好不容易决定组成联盟，为联合冒险岛世界的所有力量打下了基础。希纳斯女皇，这说不定是什么人的阴谋，想趁机离间我们，让我们互相猜疑。不要被那个来历不明的女人的话欺骗。", 1, 1402101, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk("大家……", 1, 1402100, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("哎呀……你的骑士们想否定事实吗？", 1, 1402400, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk("之前你率领圣地的骑士团，把冒险岛世界带上了正确的道路，希纳斯……我不想否定你的功劳。你是个聪明人，现在还不算太晚，希望你能做出正确的选择。", 1, 1402400, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk("说出真正的皇帝是谁，并把皇帝的位子让出来。", 1, 1402400, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk("然后把这件事告诉联盟。", 1, 1402400, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk("我不想催你。你现在一定不知所措，我给你时间，让你整理一下心情。如果你怀疑我的话，欢迎你继续对我进行调查。", 1, 1402400, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk("但是最终你会知道，冒险岛世界的皇帝是我，希拉……", 1, 1402400, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk("(阿尔弗雷德应该准备好了吧……现在该我出场了吗？好的，深呼吸，一，二，三！)", 17, 1402400, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_ScreenMsg("phantom/phantom");
                                                                                                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk("现在下结论是不是太早了点？", 17, 1402400, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.forceStartQuest(25001, '1');
                                                                                                                                                    cm.forceStartQuest(25010, '0');
                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                    cm.playVideoByScript("phantom.avi");
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.dispose();
                                                                                                                                                    cm.warp(150000000, 2, false);
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    cm.npc_LeaveField("oid=732630");
                                                                                                                                                    cm.npc_LeaveField("oid=732631");
                                                                                                                                                    cm.npc_LeaveField("oid=732632");
                                                                                                                                                    cm.npc_LeaveField("oid=732633");
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}