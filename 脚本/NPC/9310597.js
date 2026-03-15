var status = -1;
var selectionLog = [];
var item = ['白虎', '巨鹰', "男飞侠", '香炉', "小金人", '巨型钝器金人', '持枪银人', '附魂蓝石', '红武士', '武士帽', "方丈大师"];
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
      cm.askMenu_Bottom("和自乐对话。\r\n#L1#妖怪宝珠是什么？。#l\r\n#L0#我想了解收集妖怪宝珠的事情。#l\r\n#L2 #我会帮助你的。#l", 56, 0);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 1) {
          cm.sendNormalTalk_Bottom("没有什么妖怪是天生的。平凡的事物可能会在因缘的作用下成为妖怪，而守护人类的灵物也可能因为人类的变化而变为妖怪。\n妖怪宝珠是由妖怪的情感凝结而成的。我能通过宝珠对各种妖怪进行研究。", 37, 9310597, false, false);
          cm.dispose();
        } else {
          if (selectionLog[1] == 0) {
            cm.sendNormalTalk_Bottom("我叫自乐，是研究妖怪的学者。", 37, 9310597, false, true);
          } else {
            var w = "哦……好啊。你只要能找到对研究有帮助的妖怪宝珠，我就用珍贵的物品和你交换。你带来了什么妖怪宝珠呢？";
            for (var V = 0; V < item.length; V++) {
              if (cm.getQuestStatus(62024 + V) == 0) {
                w += "\r\n#L" + V + '#' + item[V] + "妖怪宝珠#l";
              }
            }
            w += "\r\n#L99##b再考虑下吧#l";
            cm.askMenu_Bottom(w, 37, 9310597);
          }
        }
      } else {
        if (status === V++) {
          if (selectionLog[1] == 0) {
            cm.sendNormalTalk_Bottom("只要你能帮助我研究项目，我会给你非常有用的东西。\r\n在人类世界中非常有用而闻名的装有 #i4001832#，#i4001839#，#i2048703#，#i2049710#等物品的 #i2434666# #t2434666#作为奖励给你。\r\n而且你能完成所有任务的话我会作为奖励给你 #i2434618# #t2434618# 。", 37, 9310597, true, true);
          } else if (selectionLog[2] == 99) {
            cm.dispose();
          } else {
            cm.askYesNo_Bottom("现在要开始[搜集" + item[selectionLog[2]] + "妖怪宝珠]任务吗？", 37, 9310597);
          }
        } else if (status === V++) {
          if (selectionLog[1] == 0) {
            cm.sendNormalTalk_Bottom("不过你不想帮我，那就别跟我废话。", 37, 9310597, true, false);
          } else {
            cm.sendNormalTalk_Bottom("那么，就请你帮我找来1个#b" + item[selectionLog[2]] + "#k掉落的妖怪宝珠吧。宝珠可是很贵重的哦，你得小心点啊！", 37, 9310597, false, true);
            cm.forceStartQuest(selectionLog[2] + 62024, '');
          }
        } else {
          cm.dispose();
        }
      }
    }
  }
}