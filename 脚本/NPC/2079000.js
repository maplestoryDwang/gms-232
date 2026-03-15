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
      cm.askMenu_Bottom("欢迎你来到鬼魂公园！呵呵，我是鬼魂公园的主人休彼德蔓，如果你对这里有什么想知道的，尽管可以问我。\r\n#L0# #b鬼魂公园是什么？#k#l\r\n#L1# #b请告诉我鬼魂公园的使用方法。#k#l\r\n#L2# #b请告诉我今天可以入场的次数。#k#l\r\n#L3# #b我集齐了7种符咒。#k#l\r\n#L4# #b我不要再听说明了。#k#l", 128, 2079000);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b鬼魂公园#k是继怪物公园之后开张的第二个休彼德蔓主题公园！\r\n在这个让人毛骨悚然的地方可以体验到童话村的各种鬼，呵呵。", 32, 2079000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#b鬼魂公园#k并不仅仅只像是个鬼屋，\r\n这里的鬼是集聚毁掉童话村的#r邪恶气息#k并将其实体化后制作而成的。", 32, 2079000, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你若是消灭了鬼，也算是净化了童话村的#r邪恶气息#k。\r\n光是享受#b鬼魂公园#k的乐趣，也算是对童话村的安定做出了贡献！\r\n怎么样，是不是很厉害啊？哈哈！", 32, 2079000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你问我是如何将#r邪恶气息#k实体化后变成鬼的？\r\n这是#d我专属的秘密#k，我可不能告诉你，呵呵，\r\n而我会将你净化的气息收集起来……", 32, 2079000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呵呵，我越说越多了呢。\r\n总之，好好享受吧，呵呵。", 32, 2079000, true, true);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b#e<入场条件>#k#n\r\n为了安全使用鬼魂公园，身高要在125cm……不对，得#b超过125级#k才可以，只身一人进去太可怕了，还是得#b组队#k入场。\r\n一天可以入场的次数为#b5次#k。", 32, 2079000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#b#e<入场条件>#k#n\r\n鬼魂公园的推荐等级是#b125级到145级#k，就算超过了145级，鬼魂公园的鬼也不会超过这个等级，所以得留心着点。", 32, 2079000, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b#e<符咒设置>#k#n\r\n进入时的匹配性服务已经准备好，可以通过休彼德蔓牌特制符咒#b按照口味强化邪恶气息#k。", 32, 2079000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b#e<符咒设置>#k#n\r\n公园会根据邪恶气息的种类对固定的#b妨碍要素#k进行激活，越是强化邪恶气息，妨碍得就越严重，如此净化也得加速才行吧？#b经验值#k也会提升呢！哈哈！", 32, 2079000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b#e<内部规则>#k#n\r\n为了能够在鬼魂公园内部畅快使用，限制外带饮食的摄入。也就是#b禁止使用药水类道具#k，不过#b防止经验值下降#k的基本服务还是会提供的。", 32, 2079000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b#e<内部规则>#k#n\r\n另外惊悚的气息可能会让你的#b血量恢复能力#k变得没有用武之地，\r\n就算使用血量恢复技能，也不会有什么用的。", 32, 2079000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b#e<经验值>#k#n\r\n要么是根据累计打猎数，经验值量会逐渐增加，要么是根据血量状态产生额外的经验值，甚至还有符咒强化加成，我们准备了#b丰富多样的经验值加成#k，能拿多少就拿多少哦，呵呵。", 32, 2079000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("\r\n是使用方法太复杂了吗？我相信你既然达到了143级，就一定能够理解的。\r\n那就让我们拭目以待你能撑到什么时候吧！呵呵！", 32, 2079000, true, true);
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
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.updateInfoQuest(30200, "date=19/12/08");
    cm.updateInfoQuest(30200, "count=0;date=19/12/08");
    cm.sendNormalTalk_Bottom("今天没有进入鬼魂公园的记录呢，\r\n鬼魂公园#b每天有5次#k可以进场的机会。", 32, 2079000, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你的装备背包好像没有符咒啊，\r\n在#b鬼魂公园#k内猎鬼就可以获得#b7种符咒#k。", 32, 2079000, false, true);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}