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
      cm.npc_ChangeController(9020011, "oid=59302", 2381, 29, 15, 2331, 2431, 1, false, false);
      cm.npc_ChangeController(9020013, "oid=59303", 2247, 29, 19, 2197, 2297, 1, false, false);
      cm.npc_ChangeController(9020014, "oid=59304", 2528, 29, 21, 2478, 2578, 1, false, false);
      cm.npc_ChangeController(9020015, 'oid=59305', 1867, 29, 17, 1817, 1917, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.forceStartQuest(31835, '');
      cm.sendNormalTalk("根据警卫兵们的报告，陌生人就在这附近……我们是第一次见到那些人……到底是谁……嗯？是他们？！快躲起来！", 1, 9020009, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("格兰蒂斯……嗯……确实和冒险岛世界不太一样……但是还能有什么差别呢？反正都是人们生活的地方。", 1, 9020011, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("深红次元传送口已经设置好了，现在只要希拉愿意，可以随时往来。那样的话，占领这里只是时间问题。", 1, 9020013, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不用着急，让我们慢慢玩玩。反正妨碍者已经出现了。是不是麦格纳斯对我们来说都一样。", 1, 9020011, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("麦格纳斯……曾经是军团长的那个人。他很强吗？", 1, 9020013, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("当然很强。但是很蠢。放着简单的路不走，非得选择困难的路绕着走。背叛……竟敢背叛……真是可笑。", 1, 9020011, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("背叛那位伟大的人，终究会付出代价。", 1, 9020013, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你也背叛了奥尔卡，还说这种话？啊……我不想评论你。我不想讨论忠诚问题。只是想说他选错了道路。", 1, 9020011, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("为什么大家都会做出那么愚蠢的选择呢？要是被那位伟大的人知道，结果明摆着。以为那位伟大的人会不知道那些愚蠢的念头吗？那就大错特错了。", 1, 9020011, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('…………', 1, 9020013, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好了，要开始次元入侵，发动超越次元的攻击吗？……不是一个次元，而是为了两个次元……", 1, 9020011, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我们回去吧，格里梅尔。看看麦格纳斯发现有人动了自己的餐桌之后生气的样子，一定很有意思，呵呵呵呵。", 1, 9020011, true, true);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(940020000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;