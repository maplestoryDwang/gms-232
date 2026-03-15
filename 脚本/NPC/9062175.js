var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("我是骑士甘迪，为了守护新复古王国，负责帮助勇士进行训练！你想咨询什么？\r\n\r\n#L0# 给我介绍一下#b#e热闹监视塔#k#n！#l\r\n#L1# 给我介绍一下#b#e竞速疾跑#k#n！#l\r\n#L2# 给我介绍一下#b#e新复古反转棋#k#n！#l\r\n#L3# 给我介绍一下#b#e怪物金字塔#k#n！#l\r\n#L4# 给我介绍一下#b#e新复古飞越天际#k#n！#l\r\n", 132, 9062175, 3);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#r#e热闹监视塔#k#n非常好盖！\r\n不过，这项工作要求投入大量的#b#e集中力#k#n，这是勇士应有的特制YO！", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n当旁边出现一层层的楼层时，按#r#e空格#k#n键可以把它停放下来，这一步操作是最考验集中力的！", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("当楼层停放在一定范围内时，会出现闪烁的特效，同时你将获得大量的#r新复古能量#k！就像这样YO！\r\n\r\n#i3801384#", 132, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不过，就算没能在范围内停放楼层，也不一定会失败。只是所造楼层的宽度会缩窄。\r\n\r\n#i3801385#", 132, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n随着宽度逐渐变窄，想盖高会越来越难，这个不用我讲你也知道吧？所以说，这是个需要#r集中力#k的工作！", 36, 9062175, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("每10层就会在楼层两侧插上纪念旗帜，你要是想知道监视塔盖到多少层了，就抬头数数旗帜吧！\r\n盖监视塔可以获得大量#r新复古能量#k，记住咯！\r\n\r\n#i3801386#", 132, 9062175, true, true, 3);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("\r\n你要认真认真建造监视塔YO！\r\n我会在这里关注你的训练情况的！", 36, 9062175, true, false, 3);
              } else if (status === V++) {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#r#e竞速疾跑#n#k是在新复古王国附近的小路上进行的\r\n#e#b勇士修行#n#kYO！", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n骑上名字就很拉风的#b#e银色野猪#n#k，开启风驰电掣的疾驰！", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n你将骑着逐渐加速的银色野猪，利用#e#b左右方向键#k#n躲避障碍物，锻炼爆发力！", 36, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n你骑在银色野猪背上集中精神，就能感觉到#e#b新复古能量#n#k在一点一滴地聚集起来YO！", 36, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n撞到障碍物也没关系YO！吃点东西一会儿就能恢复，不用担心哈~！", 36, 9062175, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n现在明白竞速疾跑怎么玩了吗~？\r\n那就认真开展#b#e勇士修行#n#k吧，不许偷懒YO！", 36, 9062175, true, false, 3);
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#b#e新复古反转棋#n#k是通过模拟战斗进行的#b#e勇士修行！#n#k\r\n按照一对一的形式，靠翻转棋子一局定胜负！", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n交替着把#b你下的棋子#k和夹在#b你其他棋子#k\r\n#b#e之间的对手的棋子#n#k全部呼啦啦地\r\n翻转掉！", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n此处很重要的第一条规则\r\n\r\n根据翻转的棋子给对手造成相应程度的伤害！", 36, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n一次翻转的棋子越多，\r\n造成的伤害就越强，瞅准时机就迅速做出选择YO！", 36, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n第二条规则\r\n\r\n#b双方下着下着，下到没位置放棋子的话，#k血量较多的一方获胜，游戏结束！", 36, 9062175, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n当然，如果在此之前对手的#b血量降到0#k，被#bK.O.#k掉的话，\r\n就能直接获胜！", 36, 9062175, true, true, 3);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("\r\n把游戏#b#e进行到底#k#n，就可以获得#b#e新复古能量#k#nYO！\r\n获胜的话，将获得#b#e更多#k#n新复古能量！", 36, 9062175, true, true, 3);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("\r\n#r#e这里需要注意一点！#n#k\r\n\r\n如果超过规定时间还没决定，我会自动为你把棋子下在任何位置YO~！", 36, 9062175, true, true, 3);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("\r\n如果我替你下了三次棋子~！\r\n你就会被#r强制退出#k游戏！", 36, 9062175, true, true, 3);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("\r\n老实说，三次都不下棋子的话，也太过分了吧？", 36, 9062175, true, true, 3);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n现在明白规则了吗~？\r\n那就认真开展#b#e勇士修行#n#k吧，不许偷懒YO！", 36, 9062175, true, false, 3);
                      } else if (status === V++) {
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
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#b#e怪物金字塔#n#k可以锻炼忍耐和毅力，钻研策略，是#b#e勇士修行中的集大成者！#n#k", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n你有没有玩过#b#e一层层#n#k堆硬币的游戏！？", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n凡是集中精神堆砌东西，都需要#e#b耐心#n#k~！", 36, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n就是把#b#e怪物#n#k一层一层……#b堆成金字塔形，靠堆叠的怪物来决出胜负#n#k的勇士修行YO！", 36, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n怪物包括#b#e5种普通怪物各7只#n#k，还有#r#e1只特殊怪物！#n#k\r\n总共#e#b36只#n#kYO~！", 36, 9062175, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n#b#e3名勇士#n#k各分到#b#e12只#n#k怪物之后！\r\n按顺序轮流选择1只怪物堆叠金字塔就行！", 36, 9062175, true, true, 3);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("\r\n这里要注意一点！\r\n堆叠怪物时，#b#e下层必须有1种相同种类的怪物#n#k，才能往上堆YO！", 36, 9062175, true, true, 3);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("\r\n大家都很固执，除非是好朋友，否则绝对不肯往上堆YO！", 36, 9062175, true, true, 3);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("\r\nYO，当然，#b#e第一层可以不管种类#n#k进行堆叠！\r\n这个你应该知道哦~？", 36, 9062175, true, true, 3);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("\r\n噢！差点儿忘了！\r\n#r#e特殊怪物#n#k可以#b#e不管下层进行任意堆叠哦！#n#k", 36, 9062175, true, true, 3);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n还有，特殊怪物#b#e上方不能堆叠任何怪物YO~！#n#k\r\n小伙伴们都挺害怕爬高呢！", 36, 9062175, true, true, 3);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("\r\n每次堆叠怪物时都能#e#b获得分数#n#k，努力争取比其他勇士取得更高得分吧~！", 36, 9062175, true, true, 3);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("\r\n#r#e这里需要注意一点！#n#k\r\n\r\n如果超过规定时间还没决定，我会自动堆叠任意怪物YO~！", 36, 9062175, true, true, 3);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("\r\n如果我替你堆叠了三次怪物~！\r\n你就会被#r强制退出#k游戏！", 36, 9062175, true, true, 3);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("\r\n老实说，三次超过规定时间的话，也太过分了吧？", 36, 9062175, true, true, 3);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("\r\n现在明白规则了吗~？\r\n那就认真开展#b#e勇士修行#n#k吧，不许偷懒YO！", 36, 9062175, true, false, 3);
                                } else if (status === V++) {
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
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("\r\n#r#e新复古飞越天际#n#k是在新复古飞越天际上空进行的#e#b勇士修行#n#kYO！", 36, 9062175, false, true, 3);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("\r\n输入#r#e冲锋（→→）#n#k命令，在跑道上快速助跑，然后按#r#e跳跃键#n#k高高跳起，接着利用#r#e空格键#n#k打开#e气球#n，尽可能飞得远远地！", 36, 9062175, true, true, 3);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("\r\n飞行途中撞到空中漂浮的#e#b宝石#k#n时，可以获得#e#b新复古能量#n#kYO！", 36, 9062175, true, true, 3);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n#b#e天空点数#k#n达到一定水平时，#b#e飞行等级#n#k就会上升，并自动#b#e升级#k#n新复古气球，敬请期待YO~！", 36, 9062175, true, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n现在明白新复古飞越天际怎么玩了吗~？\r\n那么，下面就去开展#b#e勇士修行#n#k吧！希望你能飞得更高！！更远！！", 36, 9062175, true, false, 3);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}