var status = -1;
function action(f, E, e) {
  if (f === 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.resetMap(cm.getMapId());
      cm.fieldEffect_ScreenMsg(false, "phantom/mapname2");
      cm.funckeySetByScript(1, 20031211, 83);
      cm.funckeySetByScript(1, 20031212, 79);
      cm.spawnMobLimit(9300498, 1, -2050, -1294, 3);
      cm.spawnMobLimit(9300507, 1, -2420, -1054, 2);
      cm.spawnMobLimit(9300498, 1, -2070, -772, 3);
      cm.spawnMobLimit(9300507, 1, -2070, -491, 2);
      cm.spawnMobLimit(9300498, 1, -2430, -210, 3);
      cm.onScriptMessage_显示教程引导图片(["UI/tutorial/phantom/0/0"]);
    } else {
      if (status === V++) {
        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/phantom/1/0"]);
      } else {
        if (status === V++) {
          cm.onScriptMessage_显示教程引导图片(["UI/tutorial/phantom/2/0"]);
        } else {
          if (status === V++) {
            cm.onScriptMessage_显示教程引导图片(["UI/tutorial/phantom/3/0"]);
          } else {
            if (status === V++) {
              cm.onScriptMessage_显示教程引导图片(["UI/tutorial/phantom/4/0"]);
            } else if (status === V++) {
              cm.dispose();
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