var status = -1;
var potList = Array(Array(40603, "攻击BOSS时伤害：+40%", 1), Array(40292, "无视怪物40%的防御率", 1), Array(42051, '攻击力：+12%', 1), Array(42053, '魔法力：+12%', 1), Array(60001, "总伤害：+12% (不能修改附加潜能)", 1), Array(60002, "所有属性：+20% (不能修改附加潜能)", 1), Array(40045, "MaxHP : +12% (不能修改附加潜能)", 1), Array(60008, "攻击力/魔力：+10 (不能修改附加潜能)", 1), Array(40055, "爆击率 12%", 1));
var potId = -1;
var depict = '';
var points = -1;
var potline = 2;
var oldEquip;
var newEquip;
var potline = 2;
var Nx = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var V = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n亲爱的#r#h ##k您好!想选择什么样的潜能:\r\n#k拥有橙色蜡笔: #r" + cm.getItemQuantity(3994418) + "#v3994418##k\r\n\r\n";
    for (var w = 0; w < potList.length; w++) {
      V += "\r\n#L" + w + "##b" + potList[w][1] + "#k  \r\n\t#d(需消耗： #r" + potList[w][2] + "#k #k #d橙色蜡笔)#l\r\n";
    }
    cm.askMenu(V + " \r\n ");
  } else {
    if (status == 1) {
      oldEquip = cm.getEquipBySlot(1);
      if (oldEquip == null || oldEquip.getGrade(false) != 20) {
        cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
        cm.dispose();
        return;
      }
      var N = potList[U];
      if (N != null) {
        potId = N[0];
        depict = N[1];
        points = N[2];
        cm.askYesNo("您是否要将#b装备栏第一格装备\r\n第二条潜能属性(不会改变其它潜能属性)#k\r\n一键洗潜能属性为 #b" + depict + "#k？");
      } else {
        cm.sendOk("出现错误...");
        cm.dispose();
      }
    } else {
      if (status == 2) {
        if (cm.getItemQuantity(3994418) < 1) {
          cm.sendOk("请确认背包中是否存在#v3994418##t3994418#");
          cm.dispose();
          return;
        }
        if (potId <= 0 || depict == '' || points <= 0) {
          cm.sendOk("购买道具出现错误...");
          cm.dispose();
          return;
        }
        cm.askYesNo("洗出潜能属性为 #b" + depict + "#k 用了 #b" + 1 + "#k 次。\r\n本次保留该属性需要:#r 1 #k 橙色蜡笔 是否保留该属性？");
      } else {
        if (status == 3) {
          newEquip = cm.getEquipBySlot(1);
          if (oldEquip == newEquip) {
            if (cm.changePotential(1, potline, potId, true)) {
              cm.gainItem(3994418, -1);
              cm.sendOk("恭喜您成功洗出潜能属性....");
              cm.dispose();
              return;
            } else {
              cm.sendOk("出现错误...");
              cm.dispose();
            }
          } else {
            cm.sendOk("出现错误...");
            cm.dispose();
          }
        }
      }
    }
  }
}