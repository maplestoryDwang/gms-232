function action(e, f, h) {
    cm.fieldEffect_PlayBGM("BgmTW/MapleHighSchool");
    var k = cm.getMapId() - 744000000;
    if (k == 0) {
        cm.dispose();
        return
    }
    var b = em.getMapFactoryMap(cm.getMapId());
    var a = getPartyMaxLevel();
    switch (k) {
        case 1:
            var g = cm.rand(1, 2);
            if (g == 1) {
                cm.getMap().startSimpleMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120063);
                spawnMob(em, eim, b, a, Math.pow(a, 2.5), 9410191, 50, 240)
            } else {
                if (g == 2) {
                    cm.getMap().startSimpleMapEffect("真是……不懂得放弃的人啊，告诉你吧。", 5120064);
                    spawnMob(em, eim, b, a, Math.pow(a, 2.5), 9410192, 50, 240)
                } else {
                    if (g == 3) {
                        cm.getMap().startSimpleMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120065);
                        spawnMob(em, eim, b, a, Math.pow(a, 2.5), 9410193, 50, 240)
                    } else {
                        cm.getMap().startSimpleMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120066);
                        spawnMob(em, eim, b, a, Math.pow(a, 2.5), 9410194, 50, 240)
                    }
                }
            }
            break;
        case 2:
            var g = cm.rand(1, 2);
            if (g == 1) {
                spawnMob(em, eim, b, a, Math.pow(a, 2), 9410165, 70, 240)
            } else {
                if (g == 2) {
                    spawnMob(em, eim, b, a, Math.pow(a, 2), 9410166, 70, 240)
                } else {
                    if (g == 3) {
                        spawnMob(em, eim, b, a, Math.pow(a, 2), 9410167, 70, 240)
                    } else {
                        spawnMob(em, eim, b, a, Math.pow(a, 2), 9410168, 70, 240)
                    }
                }
            }
            break;
        case 3:
            var g = cm.rand(1, 3);
            if (g == 1) {
                cm.getMap().startSimpleMapEffect("很感谢你的心意，但是可以训练多少……", 5120069);
                spawnMob(em, eim, b, a, a * a, 9410178, 50, 240)
            } else {
                if (g == 1) {
                    cm.getMap().startSimpleMapEffect("竟敢说要教训我？那就来试试看！呵呵呵", 5120068);
                    spawnMob(em, eim, b, a, a * a, 9410177, 50, 240)
                } else {
                    cm.getMap().startSimpleMapEffect("嘿嘿~看你怎么训练我。", 5120073);
                    spawnMob(em, eim, b, a, a * a, 9410179, 50, 240)
                }
            }
            break;
        case 4:
            cm.spawnNpc(9330181 + cm.rand(0, 2), 47, -36);
            cm.getMap().startSimpleMapEffect("刚刚那个像是一直在等谁的小孩就是你吗？", 5120120);
            break;
        case 5:
            em.scheduleAtTimestamp("passRoom5", new Date().getTime() + 60 * 1000);
            cm.getMap().startSimpleMapEffect("讨厌打针的话，就得避开保健室老师顶住1分钟。", 5120120);
            spawnMob(em, eim, b, a, Math.pow(a, 4), 9410186, cm.rand(-400, 400), 240);
            spawnMob(em, eim, b, a, Math.pow(a, 4), 9410170, cm.rand(-400, 400), 240);
            spawnMob(em, eim, b, a, Math.pow(a, 4), 9410169, cm.rand(-400, 400), 240);
            break;
        case 6:
            cm.getMap().startSimpleMapEffect("请帮帮我~僵尸竟然这么多……", 5120076);
            for (var d = 9410147; d <= 9410151; d++) {
                for (var c = 0; c < 4; c++) {
                    spawnMob(em, eim, b, a, Math.pow(a, 1.5), d, cm.rand(-400, 400), 240)
                }
            }
            break;
        case 7:
            var g = cm.rand(1, 2);
            if (g == 1) {
                cm.getMap().startSimpleMapEffect("我会比之前的班主任库梅老师教得更好。", 5120120)
            } else {
                cm.getMap().startSimpleMapEffect("身为导师绝不原谅打架这件事！只能用力量来阻止你！", 5120067)
            }
            spawnMob(em, eim, b, a, a * a, 9410171, 70, 240);
            break;
        case 8:
            cm.getMap().startSimpleMapEffect("不通过考试的话，谁都不能出去。", 5120120);
            break;
        case 9:
            cm.getMap().startSimpleMapEffect("那些家伙把人参带走了。赶快帮一下忙！", 5120020);
            for (var d = 9410187; d <= 9410189; d++) {
                for (var c = 0; c < 7; c++) {
                    spawnMob(em, eim, b, a, Math.pow(a, 1.5), d, cm.rand(-400, 400), 240)
                }
            }
            break;
        case 10:
            cm.getMap().startSimpleMapEffect("这次大家要一起合作。四大天王中任一位被击倒的话，就算失败啰！", 5120064);
            spawnMob(em, eim, b, a, a * a, 9410173, 80, 240);
            spawnMob(em, eim, b, a, a * a, 9410174, 150, 240);
            spawnMob(em, eim, b, a, a * a, 9410175, 220, 240);
            spawnMob(em, eim, b, a, a * a, 9410176, 290, 240);
            for (var d = 0; d < 20; d++) {
                spawnMob(em, eim, b, a, Math.pow(a, 1.5), 9410190, cm.rand(-400, 400), 240)
            }
            break;
        case 11:
            cm.getMap().startSimpleMapEffect("开始上物理课。如果打的力太大会更痛，打的力太小则只会造成小伤害。", 5120071);
            spawnMob(em, eim, b, a, a * a, 9410180, 50, 240);
            break;
        case 12:
            cm.getMap().startSimpleMapEffect("开始上历史课，以前的英雄们是这样攻击黑魔法师……", 5120070);
            spawnMob(em, eim, b, a, a * a, 9410181, 50, 240);
            break;
        case 13:
            cm.getMap().startSimpleMapEffect("我是来招募新生的……今天要来把你抓走！呼呼呼~", 5120072);
            spawnMob(em, eim, b, a, a * a, 9410182, 50, 240);
            break;
        case 14:
            cm.getMap().startSimpleMapEffect("进到柔道部……一点都不用害怕。就是入社测试！！", 5120075);
            spawnMob(em, eim, b, a, a * a, 9410183, 50, 240);
            break;
        case 15:
            cm.getMap().startSimpleMapEffect("我想到了不得了的乐曲……我再弹给你听~呵呵呵", 5120074);
            spawnMob(em, eim, b, a, a * a, 9410184, 50, 240);
            break;
        case 16:
            cm.getMap().startSimpleMapEffect("既然你已经赢了最厉害的问题学生，那就接受我的考核吧。", 5120120);
            spawnMob(em, eim, b, a, Math.pow(a, 3), 9410198, 50, 240);
            break
    }
    cm.dispose()
}

function getPartyMaxLevel() {
    var a = 0;
    if (cm.getPlayer().getParty() == null) {
        a = cm.getLevel()
    } else {
        cm.getPlayer().getParty().getMembers().forEach(function (b) {
            a = Math.max(a, b.getLevel())
        })
    }
    return a
}

function spawnMob(c, d, b, a, f, i, g, e) {
    var h = c.getMonster(i);
    h.changeLevel(a);
    b.spawnMonsterOnGroundBelow(h, new java.awt.Point(g, e))
}

function start() {
    status = -1;
    action(1, 0, 0)
};