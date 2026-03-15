var status = 0;
var typed = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(w, e, Z) {
  if (w == -1) {
    cm.dispose();
  } else {
    if (w == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (w == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("\t\t- #e#r骚年，你找本王想干什么！快说出来！#k#n\r\n\r\n\r\n\r\n#b目前开启获得神龙宝箱需要能量：#r" + cm.getPlayerLog("宠物总计成长值", 0) + "#k#b / 1000 点 \r\n\r\n#r#L1#培养成神器说明#l            " + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + "\r\n\r\n#b#L2#[灌溉一下能量]#l         " + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + "\r\n#b#L3#[获得神龙宝箱]#l\r\n#b#L4#[炫耀一下能量]#l         " + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + '' + "#e#r#fEffect/ItemEff/1112811/0/0#" + '');
    } else {
      if (status == 1) {
        if (Z == 1) {
          cm.sendOk("\t\t- #e#d神宠培养成神器功能#k#n\r\n\r\n\r\n\r\n   #b通过神宠培养成后。几率获得普通箱子里面有3个中介和神龙箱子里面有4个中介.#r#e所有怪物几率性掉落的魔法球，可以来喂养神宠哟。\r\n\r\n#r");
          cm.dispose();
        } else {
          if (Z == 2) {
            typed = 3;
            cm.dispose();
            cm.openNpc(9073025, 100);
          } else {
            if (Z == 3) {
              if (cm.getPlayerLog('宠物总计成长值', 0) >= 800) {
                typed = 4;
                cm.dispose();
                cm.openNpc(9073025, 101);
              } else {
                cm.dispose();
                cm.sendOk("呼呼！#b神龙的力量失败了。\r\n#r神宠泪汪汪的告诉主人我还没有达到完全体的全盛状态。");
              }
            } else if (Z == 4) {
              if (cm.getPlayerLog('炫耀') < 3) {
                typed = 5;
                cm.addPlayerLog('炫耀');
                cm.dispose();
                cm.openNpc(9073025, 102);
              } else {
                cm.dispose();
                cm.sendOk('每天最多炫耀3次哦！');
              }
            }
          }
        }
      }
    }
  }
}