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
      var O = cm.getMapId();
      if (O == 867111060) {
        cm.spawnMobLimit(9410883, 1, 0, 45, 1);
        cm.spawnMobLimit(9410865, 1, 0, -338, 1);
        cm.spawnMobLimit(9410863, 1, -720, -488, 1);
        cm.spawnMobLimit(9410864, 1, 720, -488, 3);
        cm.spawnMobLimit(9410864, 1, -810, 116, 3);
        cm.spawnMobLimit(9410864, 1, 810, 116, 3);
        for (var V = 0; V < 10; V++) {
          cm.spawnMobLimit(9410858, 1, cm.rand(-300, 600), 45, 10);
        }
        cm.addPopupSay(9400034, 2000, "这激光看起来很危险。当心不要碰到，赶快离开地图吧！");
      } else {
        if (O == 867111080) {
          cm.spawnMobLimit(9410883, 1, 0, 116, 1);
          cm.spawnMobLimit(9410867, 1, 0, 116, 1);
          for (var V = 0; V < 10; V++) {
            cm.spawnMobLimit(9410859, 1, cm.rand(-300, 600), 45, 10);
          }
          cm.addPopupSay(9400031, 2000, "啊啊！如果无法越过那条绳子！估计会出大事……！");
        } else {
          if (O == 867111100) {
            cm.spawnMobLimit(9410883, 1, 0, 45, 1);
            for (var V = 0; V < 10; V++) {
              cm.spawnMobLimit(9410858, 1, cm.rand(-300, 600), 45, 10);
            }
            cm.addPopupSay(9400033, 2000, "这剧毒看上去特别危险。当心不要掉下去。");
          } else {
            if (O == 867111120) {
              cm.spawnMobLimit(9410883, 1, 0, 45, 1);
              for (var V = 0; V < 10; V++) {
                cm.spawnMobLimit(9410856, 1, cm.rand(-300, 600), 45, 10);
              }
            } else {
              if (O == 867111200) {
                cm.spawnMobLimit(9410883, 1, 0, 45, 1);
                for (var V = 0; V < 10; V++) {
                  cm.spawnMobLimit(9410851, 1, cm.rand(-300, 600), 45, 10);
                }
                cm.addPopupSay(9400034, 2000, "这是那些家伙的无重力实验室。身体会浮起来，要当心啊！");
              } else {
                if (O == 867111220) {
                  cm.spawnMobLimit(9410883, 1, 0, 45, 1);
                  for (var V = 0; V < 10; V++) {
                    cm.spawnMobLimit(9410858, 1, cm.rand(-300, 600), 45, 10);
                  }
                  cm.addPopupSay(9400035, 2000, "那个焚烧器看起来相当危险。当心不要碰到。");
                } else {
                  if (O == 867111240) {
                    cm.forceCompleteQuest(59731);
                    cm.spawnMobLimit(9410883, 1, 0, 45, 1);
                    for (var V = 0; V < 10; V++) {
                      cm.spawnMobLimit(9410850, 1, cm.rand(-300, 600), 45, 10);
                    }
                  } else {
                    if (O == 867111300) {
                      cm.spawnMobLimit(9410883, 1, 0, 45, 1);
                      for (var V = 0; V < 10; V++) {
                        cm.spawnMobLimit(9410853, 1, cm.rand(-300, 600), 45, 10);
                      }
                      cm.spawnMobLimit(9410873, 1, -516, 116, 2);
                      cm.spawnMobLimit(9410874, 1, -641, 116, 2);
                      cm.spawnMobLimit(9410874, 1, -507, 116, 2);
                      cm.spawnMobLimit(9410873, 1, -662, 116, 2);
                      cm.addPopupSay(9400031, 2000, "呃啊啊啊，发射了，发射了！当心不要成为目标！");
                    } else {
                      if (O == 867111320) {
                        cm.spawnMobLimit(9410883, 1, 0, 45, 1);
                        cm.spawnMobLimit(9410877, 1, 0, 46, 1);
                        for (var V = 0; V < 10; V++) {
                          cm.spawnMobLimit(9410854, 1, cm.rand(-300, 600), 45, 10);
                        }
                        cm.addPopupSay(9400034, 2000, "除了少数的几个区域外，其他地方都在发生等离子爆炸。要小心啊！");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;