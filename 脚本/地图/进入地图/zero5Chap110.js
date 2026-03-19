var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getNumberFromQuestCustomData(40514);
  var O = 'action分支' + V;
  eval(O)(f, E, e);
}
function action分支0(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(40514, '1');
        cm.sendNormalTalk("欢迎来到谜之塔。刚才我已经说过了，如果在这里答对我出的谜题，就能前往上一层。", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("但是，如果答错的话，怪物就会出现的。这种情况下，你们必须击退怪物才能进入下一层。", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("答对问题或者消灭怪物……不管哪一样都好。希望你能想尽一切办法，到达我所在的最上层。", 33, 2460000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这塔一共有多少层？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那是秘密。啊，对了。#b如果你们发现这个塔的秘密，猜谜也会就此结束。你们就能直接来到最高层#k。好了，那我们开始吧？", 33, 2460000, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu("#fs18#有一个数字去掉一半的话可能变成0，也可能变成3，这个数字是几呢？\r\n#b#L0# 1。数字 0 #l  \r\n#b#L1# 2。数字 8 #l \r\n#b#L2# 3。数字 10 #l", 33, 2460000);
                } else {
                  if (status === V++) {
                    if (e == 1) {
                      cm.sendNormalTalk("答对啦？我马上把你送到下一层～", 33, 2460000, false, true);
                    } else {
                      cm.setInGameDirectionMode(false, false, false);
                      cm.sendNormalTalk("答错了！请接受惩罚！", 33, 2460000, false, true);
                      cm.dispose();
                      cm.spawnMob(9300791, 4, -57, 632);
                      cm.spawnMob(9300791, 2, 165, 241);
                      cm.spawnMob(9300791, 2, 142, 238);
                      cm.spawnMob(9300791, 4, 0, -98);
                      cm.spawnMob(9300791, 4, 0, -429);
                      cm.spawnMob(9300791, 2, -23, -718);
                    }
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(326090110, 0, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支1(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(40514, '2');
        cm.sendNormalTalk("因为不知道在第几层，所以不知道需要坚持到什么时候……就像刚才#p2460000#所说的一样，答对塔的秘密好像会比较快。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("塔的秘密……我不知道呢。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face5#看你的表情就知道你不知道了。真是，即使你面无表情，我也能知道你在想什么。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……是吗？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("两位，似乎很享受我的塔呢。那我就出第二个问题啦？不要担心。不会很难的。", 33, 2460000, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu("#fs18#什么东西会在天上撒网捕鱼？\r\n#b#L0# 1。蜘蛛 #l  \r\n#b#L1# 2。渔夫 #l \r\n#b#L2# 3。猫 #l", 33, 2460000);
                } else {
                  if (status === V++) {
                    if (e == 0) {
                      cm.sendNormalTalk("答对啦？我马上把你送到下一层～", 33, 2460000, false, true);
                    } else {
                      cm.setInGameDirectionMode(false, false, false);
                      cm.sendNormalTalk("答错了！请接受惩罚！", 33, 2460000, false, true);
                      cm.dispose();
                      cm.spawnMob(9300791, 4, -57, 632);
                      cm.spawnMob(9300791, 2, 165, 241);
                      cm.spawnMob(9300791, 2, 142, 238);
                      cm.spawnMob(9300791, 4, 0, -98);
                      cm.spawnMob(9300791, 4, 0, -429);
                      cm.spawnMob(9300791, 2, -23, -718);
                    }
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(326090110, 0, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支2(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(40514, '3');
        cm.sendNormalTalk("塔本来就是这样的吗？", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('什么？', 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("上了一层又一层，却发现每层都一样。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……真的呢。每层的风景都一样。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("两位，在我出问题之前，你们在谈论什么呢？请听第三个问题吧。", 33, 2460000, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu("#fs18#什么东西，就算你花了再多心思，只要没得到称赞，就会越来越多？\r\n#b#L0# 1。谎话 #l  \r\n#b#L1# 2。眼泪 #l \r\n#b#L2# 3。歌曲 #l", 33, 2460000);
                } else {
                  if (status === V++) {
                    if (e == 0) {
                      cm.sendNormalTalk("答对啦？我马上把你送到下一层～", 33, 2460000, false, true);
                    } else {
                      cm.setInGameDirectionMode(false, false, false);
                      cm.sendNormalTalk("答错了！请接受惩罚！", 33, 2460000, false, true);
                      cm.dispose();
                      cm.spawnMob(9300791, 4, -57, 632);
                      cm.spawnMob(9300791, 2, 165, 241);
                      cm.spawnMob(9300791, 2, 142, 238);
                      cm.spawnMob(9300791, 4, 0, -98);
                      cm.spawnMob(9300791, 4, 0, -429);
                      cm.spawnMob(9300791, 2, -23, -718);
                    }
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(326090110, 0, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支3(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(40514, '4');
        cm.sendNormalTalk("谜语之塔……是个很有趣的地方吧？我觉得两位肯定会很享受这里的。呼呼……那我们开始下一个问题吧？", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("等下。你说这塔在你创造的空间中？", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯，没错。啊，这塔是参照冒险世界的塔创造的。那个塔叫做天空之城塔。虽说两个塔的氛围有点不同。", 33, 2460000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('…………', 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.askMenu("#fs18#那我出第四个问题啦。什么东西，别人哭就跟着哭，别人笑就跟着笑？\r\n#b#L0# 1。猫咪 #l  \r\n#b#L1# 2。雨伞 #l \r\n#b#L2# 3。镜子 #l", 33, 2460000);
              } else {
                if (status === V++) {
                  if (e == 2) {
                    cm.sendNormalTalk("答对啦？我马上把你送到下一层～", 33, 2460000, false, true);
                  } else {
                    cm.setInGameDirectionMode(false, false, false);
                    cm.sendNormalTalk("答错了！请接受惩罚！", 33, 2460000, false, true);
                    cm.dispose();
                    cm.spawnMob(9300791, 4, -57, 632);
                    cm.spawnMob(9300791, 2, 165, 241);
                    cm.spawnMob(9300791, 2, 142, 238);
                    cm.spawnMob(9300791, 4, 0, -98);
                    cm.spawnMob(9300791, 4, 0, -429);
                    cm.spawnMob(9300791, 2, -23, -718);
                  }
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(326090110, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支4(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.forceStartQuest(40514, '5');
        cm.sendNormalTalk("你确定……只要发现这个塔的秘密，就能直接到达最顶层吧？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("当然啦~ 在此之前，请回答第五个问题吧。", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.askMenu("#fs18#每天都穿着黑色的衣服，就算想要和它分开都分不开的东西是什么？\r\n#b#L0# 1。警察 #l  \r\n#b#L1# 2。影子 #l \r\n#b#L2# 3。雨滴 #l", 33, 2460000);
          } else {
            if (status === V++) {
              if (e == 1) {
                cm.sendNormalTalk("答对啦？我马上把你送到下一层～", 33, 2460000, false, true);
              } else {
                cm.setInGameDirectionMode(false, false, false);
                cm.sendNormalTalk('答错了！请接受惩罚！', 33, 2460000, false, true);
                cm.dispose();
                cm.spawnMob(9300791, 4, -57, 632);
                cm.spawnMob(9300791, 2, 165, 241);
                cm.spawnMob(9300791, 2, 142, 238);
                cm.spawnMob(9300791, 4, 0, -98);
                cm.spawnMob(9300791, 4, 0, -429);
                cm.spawnMob(9300791, 2, -23, -718);
              }
            } else if (status === V++) {
              cm.dispose();
              cm.warp(326090110, 0, false);
            }
          }
        }
      }
    }
  }
}
function action分支5(f, E, e) {
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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("已经是第六个问题了吗？好像已经爬得很高了。请继续努力答题。好了，下一个问题是……", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("等下，不必再出问题了。因为我已经发现了这个塔的秘密了。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("一直重复着相同的空间……不是有形的空间，而是你用魔法创造的空间……还有那永无止尽的谜语……", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这个塔没完没了地重复着相同的东西。#b这个塔的秘密就是重复#k。不对吗？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……哦？没想到这么快就被你发现了。我为你们准备的谜语还有很多呢……是我太小看你们了吗？", 33, 2460000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我是个信守诺言的人……好吧。我这就把你们带到最顶层。", 33, 2460000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(326090120, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;