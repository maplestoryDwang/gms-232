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
      cm.sendNormalTalk("是，爆莉萌天使小姐吗？", 0, 3001030, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("是的。怎么，罗梅洛？你是想告诉我，找1000个彪鲁纪念币是玩笑话吗？是不是？", 2, 3001030, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("他居然让你去找彪鲁纪念币啦…… #p3001005#这家伙，还是那副样子啊？虽然我不知道那东西有什么价值，但据说现在在冒险岛世界能卖大约#r2亿金币#k。而且还说要找1000个。就算我睁只眼闭只眼，可这也太过分了。", 0, 3001030, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("你是谁，居然连这件事都知道？", 2, 3001030, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("啊，忘了自我介绍。我叫#p3001004#，影子商团的成员。 顺便讲一下，我的业绩比#p3001005#高那么一点点。", 0, 3001030, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("这样啊。嗯……可是#p3001005#说这都是影子商团的入团考验啊？", 2, 3001030, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("问题就在这。我们影子商团的入团规则确实十分繁琐复杂。 连什么资格证考取都要经过1次合格、2次合格、最终合格！哇啊~！ 现在你也是影子商团！不，还不是。必须满足这些复杂、晦涩且琐碎的规定，才能加入影子商团。", 0, 3001030, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("总之，也就是说#p3001005#纯粹是#b利用你#k满足自身的私欲。", 0, 3001030, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("不，不可……能！#p3001005#还说自己是最厉害的业绩王？！？", 2, 3001030, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk(".. 必须揭穿这一切。实际上我才是业绩王。给……看看这份资料。", 0, 3001030, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("#b(通信器上面出现了一系列复杂的符号和数字，所有的信息都证明业绩不是#p3001005#而是#p3001004#。)\r\n怎么会这样！那么想要加入影子商团，究竟应该怎么做呢？", 2, 3001030, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("其实很难用语言说清楚加入的方法。因为没有人知道那究竟是什么，而且规定本身就很模糊且繁琐。能确定的只有一件事，那就是如果能长久的和影子商团维持密切的关系，“也许会有”机会加入。", 0, 3001030, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("但是我不想再和欺骗我的#p3001005#有任何瓜葛了？！", 2, 3001030, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("他也没什么恶意。原本是位善良的朋友……只是被业绩冲昏了头脑而已。啊，要不你和我保持联系怎么样？当然需要支付一定的代价。", 0, 3001030, true, true);
                              } else {
                                if (status === v++) {
                                  cm.askAcceptDecline("我最近对可以从#b#o2400105#身上弄到的#t4033422##k很感兴趣。为了避免积压库存，麻烦你先帮我收集……#r50个#k左右吧。\r\n\r\n#r#e（接受时，将自动移至该区域。）", 0, 3001030);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("#b#o2400105##k大多栖息在#r#m401030200##k。那我就在这里等你了哦，记住是#b50个#t4033422##k。", 0, 3001030, false, true);
                                  } else if (status === v++) {
                                    cm.forceCompleteQuest(31632);
                                    cm.forceStartQuest(31633, '');
                                    cm.dispose();
                                    cm.warp(401030200, 0, false);
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
      cm.sendNormalTalk("收集齐了吗？\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 105,469\r\n#i4033389:# #t4033389:# 1个", 0, 3001030, false, true);
    } else {
      if (status === v++) {
        cm.forceCompleteQuest(31633);
        cm.gainExp(105469);
        cm.sendNormalTalk("速度很快嘛。很好。我支付给你的商团金币可以和包括我在内的任何商团成员进行交易，希望你能妥善使用。下次有事我会找你的。再见。", 0, 3001030, true, true);
      } else if (status === v++) {
        cm.gainItem(4033389, 1);
        cm.gainItem(4033422, -50);
        cm.sendNormalTalk("#b(叮咚叮咚叮咚叮咚-！！)\r\n\r\n刚挂掉，通信器又响了。 真是喘口气的功夫都没有啊。重新打开通信器吧。#k", 2, 3001030, true, false);
        cm.dispose();
      }
    }
  }
}