var itemList = Array(Array(4310100, 800, 50, 3), Array(4310100, 800, 60, 3), Array(4310100, 800, 70, 3));
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 910360203) {
    action地铁管理处(f, W, U);
  } else {
    action2(f, W, U);
  }
}
function action地铁管理处(f, W, U) {
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askYesNo("#b（箱子里有东西闪闪发光，要拿出来看看吗？）#k");
  } else {
    if (status == 1) {
      if (cm.isQuestActive(2057)) {
        cm.gainItem(4031041, 1);
        cm.warp(103000000, 0);
      } else {
        var V = 1 + Math.floor(Math.random() * 6);
        if (V == 1) {
          cm.gainItem(4010003, 2);
        } else {
          if (V == 2) {
            cm.gainItem(4010000, 2);
          } else {
            if (V == 3) {
              cm.gainItem(4010002, 2);
            } else {
              if (V == 4) {
                cm.gainItem(4010005, 2);
              } else {
                if (V == 5) {
                  cm.gainItem(4010004, 2);
                } else if (V == 6) {
                  cm.gainItem(4010001, 2);
                }
              }
            }
          }
        }
        cm.warp(103000000, 0);
      }
      cm.gainSubAchievement(1069, 0);
      cm.dispose();
    }
  }
}
function action2(f, W, U) {
  if (status >= 2 && f == 0) {
    cm.sendOk("Alright, see you next time.");
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var V = Math.floor(Math.random() * 800);
    var w = Array();
    for (var N = 0; N < itemList.length; N++) {
      if (itemList[N][1] >= V) {
        w.push(itemList[N]);
      }
    }
    if (w.length != 0) {
      var u;
      var Q = new java.util.Random();
      var m = Q.nextInt(w.length);
      var c = w[m][0];
      var B = w[m][2];
      var F = w[m][3];
      u = cm.gainGachaponItem(c, B, "航海奖励", F);
      if (u != -1) {
        cm.worldSpouseMessage(37, "[航海奖励]玩家 " + cm.getPlayer().getName() + " 等级 " + cm.getPlayer().getLevel() + "击败航海妖怪领取凯梅尔兹金币" + B + '个');
      } else {
        cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
      }
    } else {
      var u;
      var Q = new java.util.Random();
      var m = Q.nextInt(w.length);
      var c = w[m][0];
      var B = w[m][2];
      var F = w[m][3];
      u = cm.gainGachaponItem(c, B, '航海奖励', F);
      if (u != -1) {
        cm.worldSpouseMessage(37, "[航海奖励]玩家 " + cm.getPlayer().getName() + " 等级 " + cm.getPlayer().getLevel() + "击败航海妖怪领取凯梅尔兹金币" + B + '个');
      } else {
        cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
      }
    }
    cm.gainItem(2433015, 1);
    cm.warp(103000000, 0);
    cm.dispose();
  }
}
var status = -1;