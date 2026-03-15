var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#哇，这是谁啊？这不是村庄的英雄嘛？", 36, 3005107, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face6#英雄真是谬赞了，叫我啦啦就好！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#怎么会是谬赞，我们真是欠了你很多人情呢，从领主的问题开始，到这次的事……", 36, 3005107, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#谁能想到，海娜居然在背后捣鼓那些事。", 36, 3005107, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#……", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#对了，现在可不是聊这些的时候！", 36, 3005107, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#你说过现在要离开村庄了吧？你有目的地吗？", 36, 3005107, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#不，并不明确，走到哪儿算哪儿，不就遇到了像这次一样这么精彩的巧合了吗？", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#你这家伙倒是挺浪漫的，你听着，这可是你之前一直在找的情报。", 36, 3005107, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#啊，关于铃铛和器物你查到什么了吗？", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#不行，靠我是不够的……还要有个超厉害的包打听。", 36, 3005107, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#你知道影子商团吗？", 36, 3005107, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#那帮家伙掌握着格兰蒂斯的消息，不仅话多，还一身的臭毛病。", 36, 3005107, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然这帮家伙不与任何人为敌，也不与任何人为友，不过他们的情报倒是靠得住。", 36, 3005107, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#不久前荒蛮终点站的那帮家伙大肆扩展商业版图，很有威胁。", 36, 3005107, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#这不巧了嘛，我也有了介绍信呢。", 36, 3005107, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#怎么样？你要是想要，我也可以转手给你。", 36, 3005107, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.askAcceptDecline_Bottom("#face0#要怎么做呢？要接受提议吗？", 36, 3005100, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#好，我总不能拒绝善意的帮助。", 36, 3005100, false, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face6#那我可以请你帮这个忙吗？", 36, 3005100, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#你决定了吗？那我这就送你去荒蛮终点站。", 36, 3005107, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#咳咳，别因为那儿稍微有点味道就惊讶哦。", 36, 3005107, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那儿可并没有看起来那么糟糕。", 36, 3005107, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3005107, false, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……", 36, 3005135, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哇，刚刚那个家伙又是什么人？另一个委托人吗？", 36, 3005135, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#啊，你别对那家伙感兴趣，虽然看起来懦弱，其实很吓人的。", 36, 3005107, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("#face0#啊，是那个啊，“纳林村的英雄”？", 36, 3005135, true, true, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face0#嘻嘻，早知道就见一面了。你知道吗？这下这边可麻烦了呢。", 36, 3005135, true, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哎哟，好怕怕啊，我也不是故意的。\r\n事已至此，这次的事就算是我的失误，委托就权当取消了吧……", 36, 3005107, true, true, 1);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#不！不必那样。", 36, 3005135, true, true, 1);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#改一下委托内容吧。", 36, 3005135, true, true, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#刚刚那个孩子手上的东西分明就是器物吧？\r\n哎哟，这倒是让我有些好奇了……", 36, 3005135, true, true, 1);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#哎，可再怎么说，深挖其他委托人的身份信息可有违商业道德，\r\n该给你看的我都已经给你看了，就此打住吧。", 36, 3005107, true, true, 1);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#啊，付这么多钱够了吗？", 36, 3005135, true, true, 1);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……", 36, 3005107, true, true, 1);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#从哪里开始说起好呢？", 36, 3005107, true, true, 1);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#唔，就该这样，果然还是钱最方便。", 36, 3005135, true, true, 1);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……不过自然有些东西胜过任何金银珠宝。", 36, 3005135, true, true, 1);
                                                                                } else if (status === v++) {
                                                                                  cm.forceStartQuest(36237, '');
                                                                                  cm.OnStartNavigation(402000000, 1, '3001204', 36237);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#这里是荒蛮终点站……", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#厉害！居然大白天都完全看不到太阳！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#就算没有太阳，整个城市也是闪闪发光，真酷！", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#那、那个……", 36, 3001542, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face6#哇，你好！你住在这里吗？", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#啊，嗯，好……那个，在这里最好举止不要太显眼。", 36, 3001542, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#虽说这地方原本对外人就不算多友好……可，可最近人心变得更可怕了……", 36, 3001542, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#你在这里有什么事吗？", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#诶，你没听到吗？毕竟这件事也不值得在街坊四邻中间炫耀……", 36, 3001542, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#那也不必担心，荒蛮终点站还有正义使者呢。", 36, 3001542, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face2#哇，正义使者吗？", 36, 3005100, true, true, 1);
                        } else if (status === v++) {
                          cm.forceCompleteQuest(36237);
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