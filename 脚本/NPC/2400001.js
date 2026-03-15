var status = -1;
var selectionLog = [];
var level = 0;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (!cm.isQuestFinished(41903)) {
        cm.sendNormalTalk("神之子，请继续在冒险岛世界和镜世界中冒险。没有什么东西比冒险和经验更加重要。有关专业技术的课程最好等之后再进行。", 0, 2400001, false, false);
        cm.dispose();
      } else {
        var w = "专业技术就交给我戴尔罗吧！\r\n只要做到学习、熟悉、理解就可以了。\r\n#L0##b#e了解药草采集#k#n#l\r\n#L1##b#e了解采矿#k#n#l";
        if (cm.hasSkill(92020000)) {
          w += "\r\n#L5##b#e了解装备制作#k#n#l\r\n#L6##b#e初始化装备制作#k#n#l";
        } else {
          if (cm.hasSkill(92030000)) {
            w += "\r\n#L7##b#e了解饰品制作#k#n#l\r\n#L8##b#e初始化饰品制作#k#n#l";
          } else if (cm.hasSkill(92040000)) {
            w += "\r\n#L9##b#e了解炼金术#k#n#l\r\n#L10##b#e初始化炼金术#k#n#l";
          } else {
            w += "\r\n#L2##b#e学习装备制作#k#n#l\r\n#L3##b#e学习饰品制作#k#n#l\r\n#L4##b#e学习炼金术#k#n#l";
          }
        }
        cm.askMenu(w, 0, 2400001);
      }
    } else {
      var N = "action分支" + selectionLog[1];
      eval(N)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("学习药草采集需要花费#b1000金币#k和#b疲劳度5#k。只要按照我的讲座，就可以获得#r80#k熟练度。", 0, 2400001, false, true);
  } else {
    if (status === V++) {
      cm.gainMeso(-5000);
      cm.getPlayer().setFatigue(cm.getPlayer().getFatigue() + 5);
      level = cm.rand(0, 3);
      cm.getPlayer().addProfessionExp(92000000, 80 + level * 10);
      cm.zeroLearnProfessionSkill(92000000, level, 80 + level * 10, 0);
      cm.dispose();
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("学习矿物采集需要花费#b1000金币#k和#b疲劳度5#k。只要按照我的讲座，就可以获得#r80#k熟练度。", 0, 2400001, false, true);
  } else {
    if (status === V++) {
      cm.gainMeso(-5000);
      cm.getPlayer().setFatigue(cm.getPlayer().getFatigue() + 5);
      level = cm.rand(0, 3);
      cm.getPlayer().addProfessionExp(92010000, 80 + level * 10);
      cm.zeroLearnProfessionSkill(92010000, level, 80 + level * 10, 0);
      cm.dispose();
    }
  }
}
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("学习装备制作需要花费#b1000金币#k和#b疲劳度5#k。只要按照我的讲座，就可以获得#r80#k熟练度。", 0, 2400001, false, true);
  } else {
    if (status === V++) {
      cm.gainMeso(-5000);
      cm.getPlayer().setFatigue(cm.getPlayer().getFatigue() + 5);
      level = cm.rand(0, 3);
      cm.getPlayer().addProfessionExp(92020000, 80 + level * 10);
      cm.zeroLearnProfessionSkill(92020000, level, 10 + level * 30, 0);
      cm.dispose();
    }
  }
}
function action分支7(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("学习饰品制作需要花费#b1000金币#k和#b疲劳度5#k。只要按照我的讲座，就可以获得#r80#k熟练度。", 0, 2400001, false, true);
  } else {
    if (status === V++) {
      cm.gainMeso(-5000);
      cm.getPlayer().setFatigue(cm.getPlayer().getFatigue() + 5);
      level = cm.rand(0, 3);
      cm.getPlayer().addProfessionExp(92030000, 80 + level * 10);
      cm.zeroLearnProfessionSkill(92030000, level, 80 + level * 10, 0);
      cm.dispose();
    }
  }
}
function action分支9(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("学习炼金术需要花费#b1000金币#k和#b疲劳度5#k。只要按照我的讲座，就可以获得#r80#k熟练度。", 0, 2400001, false, true);
  } else {
    if (status === V++) {
      cm.gainMeso(-5000);
      cm.getPlayer().setFatigue(cm.getPlayer().getFatigue() + 5);
      level = cm.rand(0, 3);
      cm.getPlayer().addProfessionExp(92040000, 80 + level * 10);
      cm.zeroLearnProfessionSkill(92040000, level, 80 + level * 10, 0);
      cm.dispose();
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("学习#b装备制作#k，需要花费#b5000金币#k。真的要学习吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else if (cm.getMeso() < 5000) {
        cm.sendNormalTalk("你的金币不够啊。", 0, 2400001, false, true);
      } else {
        cm.gainMeso(-5000);
        cm.teachSkill(92020000, 16777216, 0);
        cm.fieldEffect_PlayFieldSound("profession/levelup", 100);
        cm.sendNormalTalk("学习装备制作成功，如果对装备制作想了解更多的话，随时可以来找我。", 0, 2400001, false, true);
        cm.effect_OnUserEff("Effect/OnUserEff.img/professions/equip_product_levelup");
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("学习#b饰品制作#k，需要花费#b5000金币#k。真的要学习吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else if (cm.getMeso() < 5000) {
        cm.sendNormalTalk("你的金币不够啊。", 0, 2400001, false, true);
      } else {
        cm.gainMeso(-5000);
        cm.teachSkill(92030000, 16777216, 0);
        cm.fieldEffect_PlayFieldSound("profession/levelup", 100);
        cm.sendNormalTalk("学习饰品制作成功，如果对饰品制作想了解更多的话，随时可以来找我。", 0, 2400001, false, true);
        cm.effect_OnUserEff("Effect/OnUserEff.img/professions/equip_product_levelup");
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("学习#b炼金术#k，需要花费#b5000金币#k。真的要学习吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else if (cm.getMeso() < 5000) {
        cm.sendNormalTalk("你的金币不够啊。", 0, 2400001, false, true);
      } else {
        cm.gainMeso(-5000);
        cm.teachSkill(92040000, 16777216, 0);
        cm.fieldEffect_PlayFieldSound("profession/levelup", 100);
        cm.sendNormalTalk("学习炼金术成功，如果对炼金术想了解更多的话，随时可以来找我。", 0, 2400001, false, true);
        cm.effect_OnUserEff("Effect/OnUserEff.img/professions/equip_product_levelup");
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支6(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("你想放弃装备制作？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else {
        cm.teachSkill(92020000, 0, 0);
        cm.sendNormalTalk("装备制作已经初始化。如果想重新学习，请再来找我。", 0, 2400001, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支8(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("你想放弃饰品制作？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else {
        cm.teachSkill(92030000, 0, 0);
        cm.sendNormalTalk("饰品制作已经初始化。如果想重新学习，请再来找我。", 0, 2400001, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支10(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("你想放弃炼金术？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？", 0, 2400001);
    cm.gainSkillBuff(100001263);
  } else {
    if (status === V++) {
      if (f != 1) {
        cm.sendNormalTalk("好的，你深思熟虑之后再回答吧。要慎重地选择才不会后悔！", 0, 2400001, false, true);
      } else {
        cm.teachSkill(92040000, 0, 0);
        cm.sendNormalTalk("炼金术已经初始化。如果想重新学习，请再来找我。", 0, 2400001, false, true);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}