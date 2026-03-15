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
      cm.sendNormalTalk_Bottom("#face0#我不是想故意偷听……", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b没关系。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#呵呵，你打算去哪里？", 36, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4##b……我要去追踪大师兄和那些黑道人物。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#江湖很大，但世界更广阔。", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#在大海的对面，有一座与江湖一样大的岛，名叫金银岛。在它的另一边，有一片望不到尽头的巨大大陆。\r\n但是，你知道更让人难以置信的事情是什么吗？", 36, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#还有和我们一样的世界存在。那被称为次元。\r\n以我的头脑实在是难以想象外面的世界有多广阔。", 36, 9401278, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#以你的能力……在那里应该也会有出色的表现。", 36, 9401278, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4##b我不想……有什么出色的表现。\r\n我的目标是变得更强，为大家报仇。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#哎呀，“重建玄山派”不也是你的目标之一吗？\r\n就算你什么都不做，只要继续像这样锄强扶弱、行侠仗义，你的名声就会传播出去，为重建玄山派奠定基础。", 36, 9401278, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face2#呵呵，我刚好也有事，一起去吧。", 36, 9401278, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0##b风形，你跑到江湖之外干什么？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#……我也是个大忙人。\r\n准备好之后，我们在码头见吧。", 36, 9401278, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0##b（最好和弟子还有师兄们……打个招呼再走。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else if (status === v++) {
                                cm.forceStartQuest(65949, '');
                                cm.OnStartNavigation(875000001, 1, "9401325", 65949);
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
      cm.sendNormalTalk_Bottom("听素笑师父说。\r\n你要到江湖之外去修行。", 36, 9401287, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("……还想再多学一点呢。真遗憾……", 36, 9401288, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1##b这一代的事情必须由这一代人解决，希望你能理解。\r\n我希望留给你们一个像过去一样强大、辉煌的玄山派。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("现在的玄山派也很好啊！尽力帮助别人的心不都一样吗，嘿嘿。", 36, 9401288, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("师父，你也许不知道……之前讨伐南部山寨的时候，你曾经救了我。还有我的父母……", 36, 9401288, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("多亏了师父，我才能活下来。我加入玄山派，就是为了像师傅一样帮助别人，所以已经足够了！", 36, 9401288, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("……我也一样。所以……千万别太勉强。", 36, 9401287, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("我们也会日以继夜地努力修炼，师父。", 36, 9401287, true, true, 1);
                  } else if (status === v++) {
                    cm.updateInfoQuest(65949, "NpcSpeech=94013251");
                    cm.OnStartNavigation(875000001, 1, '9401332', 65949);
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
function stage1(g, w, a) {
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
      cm.sendNormalTalk_Bottom("……我会帮助素笑照看好玄山派。你就尽管放心去吧。", 36, 9401285, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b师妹，有你在，我就很放心。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("谢谢你能这么说。让我们……一起努力。", 36, 9401285, true, true, 1);
        } else if (status === v++) {
          cm.updateInfoQuest(65949, "NpcSpeech=94013251/94013322");
          cm.OnStartNavigation(875000001, 1, "9401333", 65949);
          cm.dispose();
        }
      }
    }
  }
}
function stage2(g, w, a) {
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
      cm.sendNormalTalk_Bottom("抱歉，让你肩负了太重的责任。", 36, 9401286, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b不。那是……我该做的事。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("……我想暂时负责载经阁的工作。生活还是要继续下去。\r\n让我们在自己的位子上各尽其力吧。", 36, 9401286, true, true, 1);
        } else if (status === v++) {
          cm.updateInfoQuest(65949, "NpcSpeech=94013251/94013322/94013333");
          cm.OnStartNavigation(875000001, 1, '9401316', 65949);
          cm.dispose();
        }
      }
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
      cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "……你这就要走了吗？", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face4##b……我马上回来。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#好的。不管是累了、饿了，还是不堪重负的时候，你随时可以回来。答应我！", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b我答应你。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face3##b（……逐渐浮现的往日记忆，无意识之间迸发出的强大力量。我……真的是武神重生吗……）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0##b（是不是应该和素笑说说呢……）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "……你永远是我的" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我的家人。明白了吗？", 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#就算你放弃，你也是我的" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "。就算想去寻找其他道路，你也是我的" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "。\r\n不管怎样都没关系，不过该说的时候，一定要告诉我。", 36, 9401277, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0##b（……素笑好像已经知道了。真感谢她没有多问……）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0##b（在对这种力量拥有确信的时候，在完全掌握这种力量的时候……到时我会第一个告诉你。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0##b明白了，素笑。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face1##b素笑！你什么时候长大了？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#嗯哼！我已经长大了，只是个子小而已！", 36, 9401277, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face1##b哈哈，是的，没错。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#多保重，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 36, 9401277, true, true, 1);
                                } else if (status === v++) {
                                  cm.forceCompleteQuest(65949);
                                  cm.gainExp(12313);
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