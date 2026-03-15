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
      cm.sendNormalTalk_Bottom("#face0#我联系你是有要事相告。冒险岛世界中有一个暗中行动的组织叫做黑色之翼，我在调查他们的时候，发现一个衣着打扮与#h0#相近的人，曾经和黑色之翼的干部有接触。", 37, 1012100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#不知道#h0#你认不认识那个人，他绑着长马尾，带着一把比自己个头还要高的大刀。他是你之前提到的织田军势力的人吗？", 37, 1012100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我是在射手村附近的石人寺院入口处，一个奇怪的建筑里看见了那个人与黑色之翼的干部接触的。我会继续调查下去，只是想起了#h0#，才会将这个消息告诉你。", 37, 1012100, true, true, 1);
        } else {
          if (status === v++) {
            cm.askYesNo_Bottom("快去石人寺院吧！", 57, 0, 1);
          } else if (status === v++) {
            cm.forceStartQuest(57490, '');
            cm.OnStartNavigation(910600101, 0, "in00", 0);
            cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#你到底是谁？干嘛突然闯进别人家里撒野？", 37, 9130067, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("明明是你突然攻击我的嘛。", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#倒是你，怎么门都不敲就闯进我们家里来了！我这是正当防卫！最近怎么这么多擅闯民宅的入侵者？而且还那么强……哼哼……我现在连私生活都得不到保障了吗？这让我以后怎么活下去嘛？", 37, 9130067, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("嗯……对不起，这一路过来道路复杂，我想找人询问，但不知道该问谁才好，所以就擅自闯了进来。不过，我有件事情想问一下你……", 57, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#什么呀，你想知道什么？我会回答你，听完之后就赶紧回去！反正，如果我不好好回答，你肯定会捣乱的吧？一定会揍我一顿对不对？", 37, 9130067, true, true, 1);
            } else {
              if (status === v++) {
                cm.askYesNo_Bottom("#face0#不知道这家伙究竟是做什么的，那个小鬼真的是邪恶组织的干部吗？", 37, 9130081, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("我听说一个与我衣着打扮相似的男子来找过你。你能告诉我那人是谁吗？他为什么回来找你？", 57, 0, false, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#你说的是那个面容清秀的家伙吗？我也是第一次见他。他突如其来地说要和我们黑色之翼联手，好像说他们有一支什么武士队，所以我们能够帮助到彼此？", 37, 9130067, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("所以，你接受那个提议了吗？", 57, 0, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#我只是中间管理层而已，这件事情我没办法随便决定，但我已经向主人报告了。他说想直接找我们主人聊聊……但我怎么能让主人见到那么帅气的家伙呢？", 37, 9130067, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("你听到那个人的名字了吗？", 57, 0, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#他叫明……什么的。明子光洙？唔，大概就是这一类的名字吧……", 37, 9130067, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#神那！你知道是谁吗？", 37, 9130081, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("这个嘛……盟军中确实没有人叫这个名字。", 57, 0, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#反正他就叫那个名字，无论是长相还是说话语气都让人很不爽。总之，我就知道这些。究竟会不会按照那家伙所说，与他们合作，这是我们主人要做的决定，我只是中间管理层而已。你想知道都知道了吧？那就快走吧！快走啦！", 37, 9130067, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#那就让我见见你们主人！", 37, 9130081, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#不可能！不可能，绝对不可能！无论如何，这是不可能的！就是不可能！", 37, 9130067, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("……先回去吧。", 57, 0, true, true, 1);
                                      } else if (status === v++) {
                                        cm.forceCompleteQuest(57490);
                                        cm.dispose();
                                        cm.warp(100040000, 8, false);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}