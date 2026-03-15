var status = 0;
var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";
var p2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
    action(1, 0, 0)
}

function action(d, b, a) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (d == 1) {
        status++
    } else {
        status--
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
        cm.dispose()
    } else {
        if (status == 0) {
            var c = "\r\n#e#d          " + cm.getServerName() + "服务中心#n#l#k\r\n";
            c += "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "\r\n";
            c += "#L11#" + p2 + "武器破攻#l#L12#" + p2 + "蜡笔潜能#l#L14#" + p2 + "爆率查询#l#L15#" + p2 + "装备还原#l\r\n";
            c += "#L100##b" + p2 + "神秘力量#l";
            c += "#L102##b" + p2 + "装备品质#l";
            c += "#L103##b" + p2 + "勋章融合#l";
            c += "#L105##b" + p2 + "星岩卡槽#l";
            c += "#L101##b" + p2 + "创世解封#l";
            c += "#L104##b" + p2 + "冒险联盟#l";
            c += "#L106##b" + p2 + "超级属性#l";
            c += "#L107##b" + p2 + "宠物复活#l";
            c += "#L109##b" + p2 + "转生修仙#l";
            c += "#L110##b" + p2 + "会员功能#l";
            //c += "#L111##b" + p2 + "取/戴<副手武器>#l\r\n";
            c += "#L112##b" + p2 + "內面耀光#l";
            c += "#L113##b" + p2 + "成就激活#l";
            c += "#L114##b" + p2 + "翅膀进化#l";
            // c += "#L115##b" + p2 + "翅膀进化2#l";
            c += "\r\n\r\n";
            c += "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "" + tz20 + "\r\n";
            cm.askMenu(c)
        } else {
            if (status == 1) {
                switch (a) {
                    case 113:
                        cm.dispose();
                        cm.openNpc(1530040, "成就激活");
                        break;
                    case 112:
                        cm.dispose();
                        cm.openNpc(1530040, "內面耀光");
                        break;
                    case 111:
                        cm.dispose();
                        cm.openNpc(1530040, "副手武器");
                        break;
                    case 110:
                        cm.dispose();
                        cm.openNpc(1530040, "会员功能_黄金版");
                        break;
                    case 109:
                        cm.dispose();
                        cm.openNpc(1530040, "飞升修仙");
                        break;
                    case 108:
                        cm.dispose();
                        cm.openNpc(1530040, "投胎转生");
                        break;
                    case 107:
                        cm.dispose();
                        cm.openNpc(1530040, "宠物复活_黄金版");
                        break;
                    case 106:
                        cm.dispose();
                        cm.openNpc(1530040, "超级属性_通用");
                        break;
                    case 105:
                        cm.dispose();
                        cm.openNpc(1530040, "星岩卡槽");
                        break;
                    case 104:
                        cm.dispose();
                        cm.openNpc(1530040, "冒险岛联盟");
                        break;
                    case 103:
                        cm.dispose();
                        cm.openNpc(1530040, "勋章融合");
                        break;
                    case 102:
                        cm.dispose();
                        cm.openNpc(1530040);
                        break;
                    case 101:
                        cm.dispose();
                        cm.openNpc(3003981, "创世解封");
                        break;
                    case 0:
                        cm.dispose();
                        cm.openNpc(9310144, 1);
                        break;
                    case 1:
                        cm.dispose();
                        cm.openNpc(9310144, 17);
                        break;
                    case 2:
                        cm.dispose();
                        cm.openNpc(9900003, 608);
                        break;
                    case 3:
                        cm.dispose();
                        cm.openNpc(9300011, 0);
                        break;
                    case 4:
                        cm.dispose();
                        cm.openNpc(9900003, 24);
                        break;
                    case 5:
                        cm.dispose();
                        cm.openNpc(9310144, 4);
                        break;
                    case 6:
                        cm.dispose();
                        cm.openNpc(9900004, 3);
                        break;
                    case 7:
                        cm.dispose();
                        cm.warp(100000104);
                        break;
                    case 9:
                        cm.dispose();
                        cm.openNpc(9900003, 111);
                        break;
                    case 11:
                        cm.dispose();
                        cm.openNpc(9900003, "武器突破系统");
                        break;
                    case 12:
                        cm.dispose();
                        cm.openNpc(9900003, 1001);
                        break;
                    case 14:
                        cm.dispose();
                        cm.openNpc(9900003, 5);
                        break;
                    case 15:
                        cm.dispose();
                        cm.openNpc(9000069, 1111);
                        break;
                    case 17:
                        cm.dispose();
                        cm.openNpc(9001014, "全场泡点");
                        break;
                    case 100:
                        cm.dispose();
                        cm.openNpc(9001014, "神秘力量");
                        break
                    case 114:
                        cm.dispose();
                        cm.openNpc(9001014, "终极翅膀");
                        break
                    case 115:
                        cm.dispose();
                        cm.openNpc(1052014);
                }
            }
        }
    }
};