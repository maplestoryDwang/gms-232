var status = 0;
var text = '';
var questid = 200100;
var maxtimes = 10;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapId = 0;
var lastMapList = Array();
var maplist = Array(Array(100000001, '射手村 - 玛亚的家'), Array(100000002, '射手村 - 长老斯坦的家'), Array(100000003, '射手村 - 丽娜的家'), Array(500000000, '泰国 - 水上市场'), Array(100000200, '射手村 - 射手村公园'), Array(100000201, '射手村 - 弓箭手培训中心'), Array(100000202, '射手村 - 宠物公园'), Array(100010000, '射手村 - 射手村北部小山'), Array(100010001, '射手村 - 奇怪的山丘'), Array(100010100, '射手村 - 梦境小道'), Array(102000000, '勇士部落 - 勇士部落'), Array(102000001, '勇士部落 - 勇士部落武器店'), Array(102000002, '勇士部落 - 勇士部落杂货店'), Array(102000003, '勇士部落 - 战士圣殿'), Array(102030000, '火焰之地 - 野猪的领土'), Array(102030100, '火焰之地 - 野生猪猪的领土'), Array(102030200, '火焰之地 - 铁甲猪猪的领土'), Array(102030300, '火焰之地 - 燃烧的热气'), Array(102030400, '火焰之地 - 灰烬之地'), Array(103000000, '废弃都市 - 废弃都市'), Array(103000001, '废弃都市 - 废都武器店'), Array(103000002, '废弃都市 - 废都药店'), Array(103000003, '废弃都市 - 废都爵士酒吧'), Array(103000004, '废弃都市 - 废都医院'), Array(103000005, '废弃都市 - 废都美发店'), Array(103000006, '废弃都市 - 废都修理店'), Array(104010000, '金银岛 - 明珠港郊外'), Array(100000204, '射手村 - 弓箭手的殿堂'), Array(101000004, '魔法密林 - 魔法师的殿堂'), Array(102000004, '勇士部落 - 战士的殿堂'), Array(103000007, '废弃都市 - 废都夜市'), Array(103000008, '废弃都市 - 飞侠的殿堂'), Array(800000000, '江戶村 - 古代神社'), Array(800010000, '江戶村 - 樱花山林'), Array(800010100, '江戶村 - 天皇殿堂'), Array(800010001, '江戶村 - 云狐山坡'), Array(800020000, '江戶村 - 乌鸦树林'), Array(800020101, '江戶村 - 乌鸦树林2'), Array(800020110, '江戶村 - 林野的松林'), Array(800020120, '江戶村 - 从地图中失踪的村庄'), Array(800020130, '江戶村 - 大佛的邂逅'), Array(800020100, '江戶村 - 前往墓地之路'), Array(800020200, '江戶村 - 死静的墓地'), Array(800020300, '江戶村 - 漂浮幽灵墓地'), Array(800020400, '江戶村 - 弯曲地狱路'), Array(800030000, '江戶村 - 妖兽之林'), Array(220000001, '玩具城 - 杂货店'), Array(220000002, '玩具城 - 药店'), Array(220000003, '玩具城 - 玩具城整形医院'), Array(220000004, '玩具城 - 玩具城美发店'), Array(220000005, '玩具城 - 玩具城护肤中心'), Array(220000006, '玩具城 - 玩具城宠物训练场'), Array(220000100, '玩具城 - 玩具城售票处'), Array(220000110, '玩具城 - 码头<开往天空之城>'), Array(240000001, '神木村 - 村长之家'), Array(240000002, '神木村 - 药水商店'), Array(240000003, '神木村 - 亚可之家'), Array(240000004, '神木村 - 依托之家'), Array(240000005, '神木村 - 库摩之家'), Array(240000006, '神木村 - 潘姆之家'));
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(e, c, b) {
    if (e == -1) {
        cm.dispose();
    } else {
        if (e == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
        } else {
            if (status == 0) {
                playerid = cm.getPlayer().getId();
                accepttimes = cm.getPlayerLog('寻宝任务');
                text = '			#e每日寻宝 - 金里奇的黄金口袋#n\r\n\r\n';
                text += '我的财富，遍布天涯世界各地……想要我的宝藏吗？哈哈哈\r\n';
                text += '今日剩余寻宝次数：#r' + (maxtimes - accepttimes) + '#k 次\r\n';
                text += '#r#L999#寻宝任务简介#l#k\r\n\r\n';
                if (cm.MissionStatus(playerid, questid, 0, 4)) {
                    if (cm.MissionStatus(playerid, questid, 0, 0)) {
                        if (maxtimes - accepttimes <= 0) {
                            text += '您已经完成了今天的寻宝任务，请明天0点后再来吧~\r\n';
                        } else {
                            text += '#b#L0#接受任务#l#k\r\n';
                        }
                    } else {
                        text += '#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n';
                    }
                } else {
                    text += '#b#L3#接受任务#l\r\n';
                }
                text += '#b#L222#购买黄金罗盘#l#k\r\n';
                cm.askMenu(text);
            } else {
                if (status == 1) {
                    if (b == 999) {
                        status = -1;
                        text = '#e#d什么是寻宝任务？#n#k\r\n';
                        text += '	接受寻宝任务之后，你将会获得一个#b金利奇的黄金口袋#k，我会告诉你可能藏有宝藏的5个地图，其中只有一个地图能打开我的口袋，你需要在#r10分钟之内#k找到这个#b正确的地图#k并打开我的口袋就能获得丰厚的奖励，如果超出了时间，就只能#r放弃任务#k咯，#b#e成功完成10次任务可以获得额外的3倍金币奖励哦！#k\r\n';
                        text += '#e#d什么是黄金罗盘？#n#k\r\n';
                        text += '	使用黄金罗盘，可以帮助你直接寻找到正确的宝藏地图。您可以通过购买获得黄金罗盘，同时寻宝过程中有几率获得黄金罗盘。\r\n';
                        cm.askMenu(text);
                    } else {
                        if (b == 222) {
                            cm.askYesNo('是否要花费#r8000#k点购买一个黄金罗盘？');
                        } else {
                            if (b == 0) {
                                if (cm.getLevel() < 160) {
                                    cm.sendOk('等级不足160级，无法领取任务。');
                                    cm.dispose();
                                    return;
                                }
                                if (cm.getSpace(2) < 1) {
                                    cm.sendOk('你的消耗栏格子不足，请先整理一下吧。');
                                    cm.dispose();
                                    return;
                                }
                                getRandomArray();
                                var d = Math.floor(Math.random() * lastMapList.length);
                                mapId = lastMapList[d][0];
                                cm.gainItem(2430641, 1, 1000 * 60 * 10);
                                text = '宝藏有可能藏匿在一下几个地图，你有#b10分钟#k的时间寻找的正确地图并打开我的黄金袋子！\r\n';
                                for (var a in lastMapList) {
                                    text += '#b' + lastMapList[a][1] + '\r\n';
                                }
                                text += '#r#e提示我只给你一次哦，一定要记牢！#n#k';
                                cm.MissionReMake(playerid, questid, 1, 0, 0);
                                cm.MissionSetMobId(playerid, questid, mapId);
                                cm.MissionMaxNum(questid, 0);
                                cm.sendOk(text);
                                cm.dispose();
                            } else {
                                if (b == 2) {
                                    cm.MissionFinish(playerid, questid);
                                    cm.addPlayerLog('寻宝任务');
                                    if (cm.haveItem(2430641)) {
                                        cm.gainItem(2430641, -cm.getItemQuantity(2430641));
                                    }
                                    text = '任务已放弃……';
                                    cm.sendOk(text);
                                    cm.dispose();
                                } else {
                                    if (b == 3) {
                                        if (cm.getLevel() < 160) {
                                            cm.sendOk('等级不足160级，无法领取任务。');
                                            cm.dispose();
                                            return;
                                        }
                                        if (cm.getSpace(2) < 1) {
                                            cm.sendOk('你的消耗栏格子不足，请先整理一下吧。');
                                            cm.dispose();
                                            return;
                                        }
                                        getRandomArray();
                                        var d = Math.floor(Math.random() * lastMapList.length);
                                        mapId = lastMapList[d][0];
                                        cm.gainItem(2430641, 1, 1000 * 60 * 10);
                                        text = '宝藏有可能藏匿在一下几个地图，你有#b10分钟#k的时间寻找的正确地图并打开我的黄金袋子！\r\n';
                                        for (var a in lastMapList) {
                                            text += '#b' + lastMapList[a][1] + '\r\n';
                                        }
                                        text += '#r#e提示我只给你一次哦，一定要记牢！#n#k';
                                        cm.MissionMake(playerid, questid, 1, 0, 0, mapId);
                                        cm.MissionMaxNum(questid, 0);
                                        cm.sendOk(text);
                                        cm.dispose();
                                    } else {
                                        cm.sendOk('此功能尚未开放，敬请期待！');
                                        cm.dispose();
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (status == 2) {
                        if (cm.getPlayer().getCSPoints(1) >= 3000) {
                            if (cm.getSpace(2) < 1) {
                                cm.sendOk('消耗栏不足');
                                cm.dispose();
                                return;
                            }
                            cm.getPlayer().modifyCSPoints(1, -8000);
                            cm.gainItem(2430030, 1);
                            cm.sendOk('购买成功');
                        } else {
                            cm.sendOk('点卷不足！');
                        }
                        cm.dispose();
                    }
                }
            }
        }
    }
}
function getRandomArray() {
    if (lastMapList.length >= 5) {
        return true;
    }
    var b = maplist[Math.floor(Math.random() * maplist.length)];
    for (var a in lastMapList) {
        if (lastMapList[a] == b) {
            getRandomArray();
            return false;
        }
    }
    lastMapList.push(b);
    getRandomArray();
}
function start() {
    status = -1;
    action(1, 0, 0);
}