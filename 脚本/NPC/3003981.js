var status = -1;
var selectionLog = [];
var 创世武器 = [1212129, 1222122, 1232122, 1242139, 1242141, 1252106, 1262051, 1272040, 1282040, 1302355, 1312213, 1322264, 1332289, 1362149, 1372237, 1382274, 1402268, 1412189, 1422197, 1432227, 1442285, 1452266, 1462252, 1472275, 1482232, 1492245, 1522152, 1532157, 1542128, 1552130, 1582044, 1592022];
var SS潜能通用 = [40601, 40602, 40603, 40291, 40292, 40041, 40042, 40043, 40044, 40086, 42087, 40055, 40070, 40056, 40057];
var S潜能通用 = [30291, 30041, 30042, 30043, 30044, 30070];
var SS潜能主 = [60001, 60002, 60008, 60012, 60020, 60021];
var SS潜能攻击 = [30051, 40051];
var SS潜能魔攻 = [30052, 40052];
var 超星强化材料 = [4001889, 4036457, 4001895, 4036458];
var 潜能魔方材料 = [5062010, 5062500];
var 卷轴材料 = [2613050, 2613051, 2612061, 2612062, 2613064, 2613065, 2612076, 2612077, 2613066, 2613067, 2612078, 2612079];
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
  if (status == 0) {
    对话首页();
  } else {
    switch (selectionLog[1]) {
      case 1:
      case 4:
        星力注入();
        break;
      case 2:
        卷轴附魔();
        break;
      case 3:
        潜能激活();
        break;
      default:
        cm.askMenu("啊你说什么？没听清楚。");
        cm.dispose();
        break;
    }
  }
}
function 对话首页() {
  text = "#k创世武器上拥有的力量太过强大，一般的强化手段已经无法对它们生效。我可以帮助你为它们附加更强大的力量，但是代价也比常规途径要大。\r\n";
  text += "#k#e┌\t\t         ─ 创世强化 ─   \t\t\t┐#n\r\n\r\n";
  var f = cm.getInventory(1).getItem(1);
  if (f != null && 创世武器.indexOf(f.getItemId()) > -1) {
    text += "             目前装备着  #i" + f.getItemId() + '##e#r#z' + f.getItemId() + "##n#k\r\n";
    text += "#L1##v4001839##b星力注入#l          ";
    text += "#L2##v2612076##b卷轴附魔\r\n#l";
    text += "#L3##v5062103##b潜能激活#l          ";
    text += "#L4##v4031515##b超星强化\r\n#l";
  } else {
    text += "#k将#b创世武器#k放在#r装备栏第一位#k，我可以帮你看看如何进一步强化。";
    cm.dispose();
  }
  text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
  cm.askMenu(text);
}
function 星力注入() {
  var f = cm.getInventory(1).getItem(1);
  var W = f.getEnhanceLevel() + 1;
  var U = Math.max(1, f.getEnhanceLevel() - 5);
  var V = Math.max(1, Math.floor((f.getEnhanceLevel() - 5) / 2));
  var w = f.getPAD() > f.getMAD();
  var N = selectionLog[1] == 4;
  var u = Math.max(1, Math.floor(((f.getEnhanceLevel() + 1) * 3108 - 3000) / 1000));
  var Q = f.getEnhanceLevel() + 1;
  var m = cm.getItemQuantity(4036084);
  var c = Math.floor(cm.getItemQuantity(4001839) / 1000);
  if (status == 1) {
    text = "#k我可以帮助你一次性注入星之力到达下一个等级，最高可以达到#r" + (N ? 127 : 25) + "阶星之力#k。但是作为代价，你需要付出比一般装备所需更浓缩的星之力。\r\n\r\n";
    text += "#k只有由#b1000份#b#v4001839##k星星浓缩而成的#b#v4036084#闪亮星星#k可以满足创世武器的要求。如果你还没来得及转换，我也可以帮你一并将背包里的星星浓缩成闪亮星星。\r\n\r\n";
    if (N) {
      text += "#k#e┌\t\t       ─ #v4031515##b超星强化 ─   \t\t  ┐#n\r\n\r\n";
    } else {
      text += "#k#e┌\t\t       ─ #v4001839#星力注入 ─   \t\t  ┐#n\r\n\r\n";
    }
    if (!N && W > 25) {
      endTalk(text, "#k#i" + f.getItemId() + "#这把武器已经强化到" + "#fEffect/CharacterEff/1112924/0/0#" + "#r25阶星之力#k了。需要进行#r超星强化#k才能继续为它注入能量。\r\n");
      return;
    }
    if (N && W <= 25) {
      endTalk(text, "#k#i" + f.getItemId() + "#这把武器现在只能进行标准的星力注入，还无法承受超星强化的力量。提升到#r25阶星之力#k之后再来找我吧。\r\n");
      return;
    }
    if (N && W > 127) {
      endTalk(text, "#k#i" + f.getItemId() + "#这把武器已经强化到" + "#fEffect/CharacterEff/1112925/0/0#" + "#r127阶星之力#k了。我无法再给它注入更强大的力量。\r\n");
      return;
    }
    text += "#k提升 #i" + f.getItemId() + '##e#r#z' + f.getItemId() + "##n#k 为 " + (N ? "#fEffect/CharacterEff/1112925/0/0#" : "#fEffect/CharacterEff/1112924/0/0#") + '#d' + (W - 1) + "#e->" + W + "#n星#e#g ↑1#n#k 需要材料：\r\n";
    text += "#v4036084##b#z4036084##e #k× " + u + " / #n现有 " + m + " + " + c + " 个\r\n";
    text += "#v4001878##b#z4001878##e #k× " + Q + " / #n现有 #c" + 4001878 + "# 个\r\n";
    if (W > 25) {
      text += '#v' + 超星强化材料[0] + "##d#z" + 超星强化材料[0] + "##e #k× " + (Q - 25) + " / #n现有 #c" + 超星强化材料[0] + "# 个\r\n";
    }
    if (W > 50) {
      text += '#v' + 超星强化材料[1] + "##d#z" + 超星强化材料[1] + "##e #k× " + (Q - 50) + " / #n现有 #c" + 超星强化材料[1] + "# 个\r\n";
    }
    if (W > 75) {
      text += '#v' + 超星强化材料[2] + "##r#z" + 超星强化材料[2] + "##e #k× " + (Q - 75) + " / #n现有 #c" + 超星强化材料[2] + "# 个\r\n";
    }
    if (W > 100) {
      text += '#v' + 超星强化材料[3] + "##r#z" + 超星强化材料[3] + "##e #k× " + (Q - 100) + " / #n现有 #c" + 超星强化材料[3] + "# 个\r\n";
    }
    text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
    cm.askMenu(text);
  } else {
    if (status == 2) {
      if (m + c >= u && cm.haveItem(4001878, Q) && (W <= 25 || cm.haveItem(超星强化材料[0], Q - 25)) && (W <= 50 || cm.haveItem(超星强化材料[1], Q - 50)) && (W <= 75 || cm.haveItem(超星强化材料[2], Q - 75)) && (W <= 100 || cm.haveItem(超星强化材料[3], Q - 100))) {
        if (m >= u) {
          cm.gainItem(4036084, -u);
        } else {
          浓缩星星(u, m);
        }
        cm.gainItem(4001878, -Q);
        if (W > 25) {
          cm.gainItem(超星强化材料[0], -Q + 25);
        }
        if (W > 50) {
          cm.gainItem(超星强化材料[1], -Q + 50);
        }
        if (W > 75) {
          cm.gainItem(超星强化材料[2], -Q + 75);
        }
        if (W > 100) {
          cm.gainItem(超星强化材料[3], -Q + 100);
        }
        text = "#k升星成功了！查看一下你的武器吧。\r\n\r\n";
        text += '#i' + f.getItemId() + "##e#r#z" + f.getItemId() + "##n#k的属性得到如下强化：\r\n";
        if (w) {
          text += "#r◆攻击力 #k- " + f.getPAD() + "#e -> " + (f.getPAD() + U) + "#g\t↑" + U + "#n#k\r\n";
        } else {
          text += "#r◆魔法力 #k- " + f.getMAD() + "#e -> " + (f.getMAD() + U) + "#g\t↑" + U + "#n#k\r\n";
        }
        text += "#b◇ 力量  #k- " + f.getStr() + "#e -> " + (f.getStr() + V) + "#g\t↑" + V + "#n#k\r\n";
        text += "#b◇ 敏捷  #k- " + f.getDex() + "#e -> " + (f.getDex() + V) + "#g\t↑" + V + "#n#k\r\n";
        text += "#b◇ 智力  #k- " + f.getInt() + "#e -> " + (f.getInt() + V) + "#g\t↑" + V + "#n#k\r\n";
        text += "#b◇ 幸运  #k- " + f.getLuk() + "#e -> " + (f.getLuk() + V) + "#g\t↑" + V + "#n#k\r\n";
        var B = f.copy();
        B.setEnhanceLevel(W);
        if (w) {
          B.setPAD(B.getPAD() + U);
        } else {
          B.setMAD(B.getMAD() + U);
        }
        B.setStr(B.getStr() + V);
        B.setDex(B.getDex() + V);
        B.setInt(B.getInt() + V);
        B.setLuk(B.getLuk() + V);
        var F;
        if (W > 100) {
          F = '★★';
          text += "#b◇全体伤害 #k- " + f.getDamR() + "#e -> " + (f.getDamR() + 1) + "#g\t↑1#n#k\r\n";
          B.setDamR(B.getDamR() + 1);
        } else {
          if (W > 75) {
            F = '★☆';
            text += "#b◇所有属性 #k- " + f.getStatR() + "#e -> " + (f.getStatR() + 1) + "#g\t↑1#n#k\r\n";
            B.setStatR(B.getStatR() + 1);
          } else {
            if (W > 50) {
              F = '★';
              text += "#b◇无视防御 #k- " + f.getIMDR() + "#e -> " + (f.getIMDR() + 1) + "#g\t↑1#n#k\r\n";
              B.setImdr(B.getIMDR() + 1);
            } else if (W > 25) {
              F = '☆';
              text += "#b◇首领伤害 #k- " + f.getBDR() + "#e -> " + (f.getBDR() + 1) + "#g\t↑1#n#k\r\n";
              B.setBdr(B.getBDR() + 1);
            }
          }
        }
        if (N) {
          B.setTitle(F + W + '阶');
          B.setItemState(0);
        }
        cm.removeSlot(1, 1, 1);
        cm.addFromDrop(B, false);
      } else {
        text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
      }
      cm.askMenu(text);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function 浓缩星星(f, W) {
  cm.gainItem(4036084, -W);
  var U = f - W;
  var V = 30;
  while (U > 0) {
    while (U >= V) {
      cm.gainItem(4001839, -1000 * V);
      U -= V;
    }
    V = Math.max(1, Math.floor(V / 2));
  }
}
function 卷轴附魔() {
  var f = cm.getInventory(1).getItem(1);
  var W = f.getPAD() > f.getMAD();
  var U = f.getUpgradeLevel() + 1;
  var V = Math.max(1, Math.floor(U / 10));
  if (status == 1) {
    text = "#k注入了星之力后，就可以将卷轴附魔到创世武器里了。每提高一阶星之力，都可以再附魔一次卷轴。\r\n";
    text += "#k只有足够强大的卷轴才能附魔到创世武器之上。但随着附魔次数的增加，对卷轴的要求也越高。\r\n";
    text += "#k#v2613064#系列的卷轴可以用于#r1~25级#k的附魔。\r\n";
    text += "#k#v2613050#系列的卷轴可以用于#r1~50级#k的附魔。\r\n";
    text += "#k#v2612078#系列的卷轴可以用于#r所有等级#k的附魔。\r\n";
    text += "另外，已使用卷轴附魔的次数越高，需要的材料也更多。\r\n";
    text += "把符合资助的卷轴放在#b消耗栏第一格#k，我们就可以开工了。\r\n";
    text += "#k#e┌\t\t     ─ #v2612076#卷轴附魔 ─   \t\t  ┐#n\r\n\r\n";
    if (U > 127) {
      endTalk(text, "#k已经达到武器卷轴附魔次数的上限了。");
      return;
    }
    if (U >= f.getEnhanceLevel()) {
      endTalk(text, "#k已经达到现阶段可以进行卷轴附魔次数的上限。需要进一步提升武器的星之力等级才行。");
      return;
    }
    if (U <= 25) {
      text += "#L1#使用#v2613064##l\t#L2#使用#v2613050##l\t#L3#使用#v2612078##l\t";
    } else if (U <= 50) {
      text += "不再适用#rV卷轴#k\t#L2#使用#v2613050##l\t#L3#使用#v2612078##l\t";
    } else {
      text += "不再适用#rV卷轴#k\t不再适用#rX卷轴#k\t#L3#使用#v2612078##l\t";
    }
    text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
    cm.askMenu(text);
  } else {
    if (status == 2) {
      var w = selectionLog[2] * 4 - 4;
      text = "#k#e┌\t\t     ─ #v2612076#卷轴附魔 ─   \t\t  ┐#n\r\n\r\n";
      text += "#k为 #i" + f.getItemId() + "##e#r#z" + f.getItemId() + "##n#k 进行#r第 " + U + " #e/ " + f.getEnhanceLevel() + " #n次#k卷轴附魔需要材料：\r\n";
      text += "#v4001878##b#z4001878##e #k× " + U + " / #n现有 #c" + 4001878 + "# 个\r\n";
      text += '#v' + 卷轴材料[w + (W ? 0 : 1)] + '#' + '#b#z' + 卷轴材料[w + (W ? 0 : 1)] + "##e #k× " + V + " / #n现有 #c" + 卷轴材料[w + (W ? 0 : 1)] + "# 个\r\n";
      text += '#v' + 卷轴材料[w + (W ? 0 : 1) + 2] + '#' + "#b#z" + 卷轴材料[w + (W ? 0 : 1) + 2] + "##e #k× " + V + " / #n现有 #c" + 卷轴材料[w + (W ? 0 : 1) + 2] + "# 个\r\n";
      text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
      cm.askMenu(text);
    } else {
      if (status == 3) {
        var w = selectionLog[2] * 4 - 4;
        var N = selectionLog[2] == 1 ? [Math.random() * 3 + 9, 8, 8, 8, 8] : selectionLog[2] == 2 ? [12, 10, 10, 10, 10] : [13, 11, 11, 11, 11];
        if (cm.haveItem(4001878, U) && cm.haveItem(卷轴材料[w + (W ? 0 : 1)], V) && cm.haveItem(卷轴材料[w + (W ? 0 : 1) + 2], V)) {
          cm.gainItem(4001878, -U);
          cm.gainItem(卷轴材料[w + (W ? 0 : 1)], -V);
          cm.gainItem(卷轴材料[w + (W ? 0 : 1) + 2], -V);
          text = "#k卷轴附魔成功了！查看一下你的武器吧。\r\n\r\n";
          text += '#i' + f.getItemId() + '##e#r#z' + f.getItemId() + "##n#k的属性得到如下强化：\r\n";
          if (W) {
            text += "#r◆攻击力 #k- " + f.getPAD() + "#e -> " + (f.getPAD() + N[0]) + "#g\t↑" + N[0] + "#n#k\r\n";
          } else {
            text += "#r◆魔法力 #k- " + f.getMAD() + "#e -> " + (f.getMAD() + N[0]) + "#g\t↑" + N[0] + "#n#k\r\n";
          }
          text += "#b◇ 力量  #k- " + f.getStr() + "#e -> " + (f.getStr() + N[1]) + "#g\t↑" + N[1] + "#n#k\r\n";
          text += "#b◇ 敏捷  #k- " + f.getDex() + "#e -> " + (f.getDex() + N[2]) + "#g\t↑" + N[2] + "#n#k\r\n";
          text += "#b◇ 智力  #k- " + f.getInt() + "#e -> " + (f.getInt() + N[3]) + "#g\t↑" + N[3] + "#n#k\r\n";
          text += "#b◇ 幸运  #k- " + f.getLuk() + "#e -> " + (f.getLuk() + N[4]) + "#g\t↑" + N[4] + "#n#k\r\n";
          var u = f.copy();
          u.setUpgradeLevel(U);
          if (W) {
            u.setPAD(u.getPAD() + N[0]);
          } else {
            u.setMAD(u.getMAD() + N[0]);
          }
          u.setStr(u.getStr() + N[1]);
          u.setDex(u.getDex() + N[2]);
          u.setInt(u.getInt() + N[3]);
          u.setLuk(u.getLuk() + N[4]);
          cm.removeSlot(1, 1, 1);
          cm.addFromDrop(u, false);
        } else {
          text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
        }
        cm.askMenu(text);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function 潜能激活() {
  var f = cm.getInventory(1).getItem(1);
  var W = f.getEnhanceLevel() + 1;
  if (status == 1) {
    text = "#k只有足够强大的魔方#v" + 潜能魔方材料[0] + '#或#v' + 潜能魔方材料[1] + "#才能激活创世武器的潜能，因此激活后也必定会拥有S级至SS级的潜在能力。\r\n";
    text += "星之力强化阶数越高，激活SS级潜能的可能性越高，但是需要的材料也更多。\r\n";
    text += "#k#e┌\t\t      ─ #v5062103#潜能激活 ─  \t\t  ┐#n\r\n\r\n";
    text += "#k激活 #i" + f.getItemId() + "##e#r#z" + f.getItemId() + "##n#k 的潜在能力需要材料：\r\n";
    text += "#v4001878##b#z4001878##e #k× " + W + " / #n现有 #c" + 4001878 + "# 个\r\n";
    text += "#L101##v" + 潜能魔方材料[0] + '#' + "#b『激活潜在能力』#l\r\n";
    text += '#b#z' + 潜能魔方材料[0] + "##e #k× " + W + " / #n现有 #c" + 潜能魔方材料[0] + "# 个\r\n";
    text += "#L102##v" + 潜能魔方材料[1] + '#' + "#d『激活附加潜能』#l\r\n";
    text += "#d#z" + 潜能魔方材料[1] + "##e #k× " + W + " / #n现有 #c" + 潜能魔方材料[1] + "# 个\r\n";
    text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
    cm.askMenu(text);
  } else {
    if (status == 2) {
      var U = selectionLog[2] == 102;
      var V = f.getPAD() > f.getMAD();
      var w = U ? 潜能魔方材料[0] : 潜能魔方材料[1];
      if (cm.haveItem(w, W) && cm.haveItem(4001878, W)) {
        cm.gainItem(w, -W);
        cm.gainItem(4001878, -W);
        text = "#k潜能激活成功了！查看一下你的武器吧。\r\n\r\n";
        var N = f.copy();
        N.setOption(randomPot(U, W, V), 1, U);
        N.setOption(Math.random() < 0.25 + W / 400 ? N.getOption(1, U) : randomPot(U, W, V), 2, U);
        N.setOption(Math.random() < 0.1 + W / 1000 ? N.getOption(1, U) : randomPot(U, W, V), 3, U);
        cm.removeSlot(1, 1, 1);
        cm.addFromDrop(N, false);
      } else {
        text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
      }
      cm.askMenu(text);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function randomPot(f, W, U) {
  var V = SS潜能通用.concat(U ? SS潜能攻击 : SS潜能魔攻);
  if (f) {
    V = V.concat(SS潜能主);
  }
  if (Math.random() > 0.5 + W / 200) {
    V = V.concat(S潜能通用);
  }
  return V[Math.floor(Math.random() * V.length)];
}
function endTalk(f, W) {
  f += W;
  f += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
  cm.askMenu(f);
  cm.dispose();
}