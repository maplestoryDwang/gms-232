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
      cm.askMenu("你想了解宝石工艺系统吗？\r\n#L0#什么是#b#e宝石工艺#k#n？#l\r\n#L1#请将#b#eS级宝石戒指#n#k换成SS级大师宝石戒指。#l\r\n#L2#结束对话。#l", 0, 9000132);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e宝石工艺#n#k是一种对拥有#b神秘力量#k的#b宝石#k进行#b合成#k或将其与#i1112762:##b#t1112762##k相#b组合#k的系统。\r\n你能看到在我面前单独移动的#r魔法石臼#k吧？#b点击#k石臼就能开始宝石工艺。", 4, 9000132, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b#e宝石#n#k可在#i2439659:# #b#t2439659##k获得。\r\n#b<力量宝石>#k\r\n#i4440100:# #i4440200:# #i4440300:#\r\n#b<幸运宝石>#k\r\n#i4441100:# #i4441200:# #i4441300:#\r\n#b<智慧宝石>#k\r\n#i4442100:# #i4442200:# #i4442300:#\r\n#b<敏捷宝石>#k\r\n#i4443100:# #i4443200:# #i4443300:#", 4, 9000132, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#r用2个同样等级的宝石#k放入#b魔法石臼#k中可制成高级宝石。当然合成失败后也能获得同等级的宝石。\r\n合成#b宝石#k时需要#r一定费用#k因而最好准备一些金币。", 4, 9000132, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#r宝石合成成功率#k根据不同等级会有如下划分。\r\n\r\n#b#eC > B#n#k: #e70%#n\r\n#b#eB > A#n#k: #e50%#n\r\n#b#eA > S#n#k: #e30%#n", 4, 9000132, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("如果制作成了想要的#b宝石#k，就可以用相同的方法与#i1112762:##b#t1112762##k相合成，制作成#b宝石戒指#k。", 4, 9000132, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("来！这里有一个核心要点！\r\n#i1112763:##i1112767:##i1112771:##i1112775:#\r\n你去制作4个#bS级的宝石戒指#k#r来，无论种类如何#k，\r\n我会帮你换成#i1113231:##b#t1113231##k。", 4, 9000132, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("制作#b#t1113231##k是一件#r相当困难的事情#k\r\n作为辛苦费，需要支付#b#e2000万#n#k金币，这个你是能够理解的吧？", 4, 9000132, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那剩余时间你就去试试挑战#i1113231:##b#t1113231##k吧！", 4, 9000132, true, true);
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
function action分支1(f, W, U, V) {
  var w = [1112763, 1112767, 1112771, 1112775];
  if (status <= V++) {
    var N = 0;
    for (var V = 0; V < 4; V++) {
      N += cm.getItemQuantity(w[V]);
    }
    if (N >= 4) {
      cm.askYesNo("你已经收集够#bS级宝石戒指#k了吗？厉害！支付#b#e2000万#n#k金币，我就会帮你换成#i1113231:##b#t1113231##k。\r\n\r\n现在要下定决心更换吗？", 9000132);
    } else {
      cm.sendNormalTalk("你手上的#bS级宝石戒指#k数量似乎还不够啊？\r\n#i1112763:##i1112767:##i1112771:##i1112775:#\r\n去找来超过4个#bS级宝石戒指#k，#r无论种类如何#k。", 4, 9000132, false, false);
      cm.dispose();
    }
  } else {
    if (status === V++) {
      var N = 4;
      for (var V = 0; V < 4; V++) {
        var u = cm.getItemQuantity(w[V]);
        cm.gainItem(w[V], -Math.min(4, u));
        N -= Math.min(4, u);
        if (N <= 0) {
          break;
        }
      }
      cm.gainItem(1113231, 1);
      cm.sendOk("这是你的#i1113231:##b#t1113231##k，拿好喽！", 9000132);
      cm.dispose();
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}