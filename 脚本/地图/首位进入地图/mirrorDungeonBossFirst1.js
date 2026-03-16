var status = -1;
var selectionLog = [];

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.dispose();
            var d = cm.getMapId();
            if (em.getNumberProperty("clear" + d) == 1) {
                return
            }
            cm.playerMessage(-1, "副本主人出场了。");
            cm.fieldEffect_ScreenMsg("mirrorDungeon/start");
            if (d == 321145000) {
                cm.spawnMobLimit(2600028, 1, 613, 219, 100);
                cm.spawnMobLimit(2600028, 1, 1815, 30, 100);
                cm.spawnMobLimit(2600028, 1, 1674, 212, 100);
                cm.spawnMobLimit(2600028, 1, 617, 695, 100);
                cm.spawnMobLimit(2600028, 1, 1600, 706, 100);
                cm.spawnMobLimit(2600028, 1, 1377, 706, 100);
                cm.spawnMobLimit(2600028, 1, 741, 695, 100);
                cm.spawnMobLimit(2600028, 1, 611, 41, 100);
                cm.spawnMobLimit(2600029, 1, 740, 220, 100);
                cm.spawnMobLimit(2600029, 1, 474, 220, 100);
                cm.spawnMobLimit(2600029, 1, 1516, 216, 100);
                cm.spawnMobLimit(2600029, 1, 1490, 706, 100);
                cm.spawnMobLimit(2600029, 1, 1714, 709, 100);
                cm.spawnMobLimit(2600029, 1, 1856, 211, 100);
                cm.spawnMobLimit(2600029, 1, 1325, 164, 100);
                cm.spawnMobLimit(2600029, 1, 1034, 705, 100);
                cm.spawnMobLimit(2600029, 1, 854, 695, 100);
                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                cm.updateMirrorDungeonBoss(1, 2600030);
                cm.spawnMobLimit(2600030, 1, 938, 701, 100)
            } else {
                if (d == 322045000) {
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 155, 1538, 100);
                    cm.spawnMobLimit(2600123, 1, 574, 155, 100);
                    cm.spawnMobLimit(2600123, 1, -116, 155, 100);
                    cm.spawnMobLimit(2600123, 1, -151, 155, 100);
                    cm.spawnMobLimit(2600123, 1, -180, -145, 100);
                    cm.spawnMobLimit(2600123, 1, 109, -145, 100);
                    cm.spawnMobLimit(2600123, 1, -213, -145, 100);
                    cm.spawnMobLimit(2600123, 1, -94, -145, 100);
                    cm.spawnMobLimit(2600123, 1, 88, -145, 100);
                    cm.spawnMobLimit(2600123, 1, 140, 155, 100);
                    cm.spawnMobLimit(2600123, 1, -153, 155, 100);
                    cm.spawnMobLimit(2600123, 1, 218, -145, 100);
                    cm.spawnMobLimit(2600123, 1, 146, 155, 100);
                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                    cm.updateMirrorDungeonBoss(1, 2600125);
                    cm.spawnMobLimit(2600125, 1, 79, 155, 100)
                } else {
                    if (d == 323015000) {
                        cm.spawnMobLimit(2600205, 1, -423, -7, 100);
                        cm.spawnMobLimit(2600201, 1, -46, -25, 100);
                        cm.spawnMobLimit(2600205, 1, -500, -25, 100);
                        cm.spawnMobLimit(2600201, 1, -229, -265, 100);
                        cm.spawnMobLimit(2600205, 1, -802, -85, 100);
                        cm.spawnMobLimit(2600201, 1, -902, -325, 100);
                        cm.spawnMobLimit(2600205, 1, 68, 155, 100);
                        cm.spawnMobLimit(2600201, 1, -114, -265, 100);
                        cm.spawnMobLimit(2600205, 1, 189, 155, 100);
                        cm.spawnMobLimit(2600201, 1, 64, -25, 100);
                        cm.spawnMobLimit(2600205, 1, -100, 148, 100);
                        cm.spawnMobLimit(2600201, 1, 155, -25, 100);
                        cm.spawnMobLimit(2600205, 1, -314, 35, 100);
                        cm.spawnMobLimit(2600201, 1, -418, -265, 100);
                        cm.spawnMobLimit(2600205, 1, -642, -33, 100);
                        cm.spawnMobLimit(2600201, 1, -1050, -325, 100);
                        cm.spawnMobLimit(2600205, 1, -920, -25, 100);
                        cm.spawnMobLimit(2600201, 1, -782, -325, 100);
                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                        cm.updateMirrorDungeonBoss(1, 2600208);
                        cm.spawnMobLimit(2600208, 1, -476, -25, 100)
                    } else {
                        if (d == 322035000) {
                            cm.spawnMobLimit(2600116, 1, 594, -145, 100);
                            cm.spawnMobLimit(2600115, 1, 1207, 215, 100);
                            cm.spawnMobLimit(2600116, 1, 1923, -205, 100);
                            cm.spawnMobLimit(2600115, 1, 1646, 155, 100);
                            cm.spawnMobLimit(2600116, 1, 1396, -205, 100);
                            cm.spawnMobLimit(2600115, 1, 915, 215, 100);
                            cm.spawnMobLimit(2600116, 1, 1532, -205, 100);
                            cm.spawnMobLimit(2600115, 1, 1445, 155, 100);
                            cm.spawnMobLimit(2600116, 1, 1738, -265, 100);
                            cm.spawnMobLimit(2600115, 1, 1981, 215, 100);
                            cm.spawnMobLimit(2600116, 1, 729, -145, 100);
                            cm.spawnMobLimit(2600115, 1, 1320, 175, 100);
                            cm.spawnMobLimit(2600116, 1, 854, -205, 100);
                            cm.spawnMobLimit(2600115, 1, 1086, 215, 100);
                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                            cm.updateMirrorDungeonBoss(1, 2600117);
                            cm.spawnMobLimit(2600117, 1, 1076, 215, 100)
                        } else {
                            if (d == 323045000) {
                                cm.spawnMobLimit(2600230, 1, 801, 214, 100);
                                cm.spawnMobLimit(2600230, 1, 382, 100, 100);
                                cm.spawnMobLimit(2600230, 1, 1280, 40, 100);
                                cm.spawnMobLimit(2600229, 1, 1254, -200, 100);
                                cm.spawnMobLimit(2600229, 1, 1155, 280, 100);
                                cm.spawnMobLimit(2600229, 1, 679, -140, 100);
                                cm.spawnMobLimit(2600230, 1, 1406, 280, 100);
                                cm.spawnMobLimit(2600230, 1, 528, -140, 100);
                                cm.spawnMobLimit(2600230, 1, 1346, 40, 100);
                                cm.spawnMobLimit(2600229, 1, 1309, -200, 100);
                                cm.spawnMobLimit(2600229, 1, 621, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 159, 100, 100);
                                cm.spawnMobLimit(2600230, 1, 996, 280, 100);
                                cm.spawnMobLimit(2600230, 1, 834, -140, 100);
                                cm.spawnMobLimit(2600230, 1, 1477, 40, 100);
                                cm.spawnMobLimit(2600229, 1, 1464, -200, 100);
                                cm.spawnMobLimit(2600229, 1, 1304, 280, 100);
                                cm.spawnMobLimit(2600229, 1, -15, 100, 100);
                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                cm.updateMirrorDungeonBoss(1, 2600231);
                                cm.spawnMobLimit(2600231, 1, 1149, 280, 100)
                            } else {
                                if (d == 324035000) {
                                    cm.spawnMobLimit(2600314, 1, 873, 543, 100);
                                    cm.spawnMobLimit(2600314, 1, 162, -177, 100);
                                    cm.spawnMobLimit(2600314, 1, 183, 123, 100);
                                    cm.spawnMobLimit(2600314, 1, 846, 3, 100);
                                    cm.spawnMobLimit(2600314, 1, 889, 303, 100);
                                    cm.spawnMobLimit(2600314, 1, 214, 498, 100);
                                    cm.spawnMobLimit(2600314, 1, 873, 543, 100);
                                    cm.spawnMobLimit(2600314, 1, 162, -177, 100);
                                    cm.spawnMobLimit(2600314, 1, 183, 123, 100);
                                    cm.spawnMobLimit(2600314, 1, 846, 3, 100);
                                    cm.spawnMobLimit(2600314, 1, 889, 303, 100);
                                    cm.spawnMobLimit(2600314, 1, 214, 498, 100);
                                    cm.spawnMobLimit(2600314, 1, 873, 543, 100);
                                    cm.spawnMobLimit(2600314, 1, 162, -177, 100);
                                    cm.spawnMobLimit(2600314, 1, 183, 123, 100);
                                    cm.spawnMobLimit(2600314, 1, 846, 3, 100);
                                    cm.spawnMobLimit(2600314, 1, 889, 303, 100);
                                    cm.spawnMobLimit(2600314, 1, 214, 498, 100);
                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                    cm.updateMirrorDungeonBoss(1, 2600316);
                                    cm.spawnMobLimit(2600316, 1, 901, 543, 100)
                                } else {
                                    if (d == 324045000) {
                                        cm.spawnMobLimit(2600320, 1, -1, -374, 100);
                                        cm.spawnMobLimit(2600320, 1, 516, -420, 100);
                                        cm.spawnMobLimit(2600320, 1, -62, 192, 100);
                                        cm.spawnMobLimit(2600319, 1, 33, -53, 100);
                                        cm.spawnMobLimit(2600319, 1, 524, -103, 100);
                                        cm.spawnMobLimit(2600319, 1, 312, 192, 100);
                                        cm.spawnMobLimit(2600320, 1, -1, -374, 100);
                                        cm.spawnMobLimit(2600320, 1, 516, -420, 100);
                                        cm.spawnMobLimit(2600320, 1, -62, 192, 100);
                                        cm.spawnMobLimit(2600319, 1, 33, -53, 100);
                                        cm.spawnMobLimit(2600319, 1, 524, -103, 100);
                                        cm.spawnMobLimit(2600319, 1, 312, 192, 100);
                                        cm.spawnMobLimit(2600320, 1, -1, -374, 100);
                                        cm.spawnMobLimit(2600320, 1, 516, -420, 100);
                                        cm.spawnMobLimit(2600320, 1, -62, 192, 100);
                                        cm.spawnMobLimit(2600319, 1, 33, -53, 100);
                                        cm.spawnMobLimit(2600319, 1, 524, -103, 100);
                                        cm.spawnMobLimit(2600319, 1, 312, 192, 100);
                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                        cm.updateMirrorDungeonBoss(1, 2600321);
                                        cm.spawnMobLimit(2600321, 1, 382, 192, 100)
                                    } else {
                                        if (d == 325045000) {
                                            cm.spawnMobLimit(2600424, 1, 487, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 754, -284, 100);
                                            cm.spawnMobLimit(2600424, 1, 957, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 240, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, -284, -284, 100);
                                            cm.spawnMobLimit(2600423, 1, -521, 16, 100);
                                            cm.spawnMobLimit(2600424, 1, 487, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 754, -284, 100);
                                            cm.spawnMobLimit(2600424, 1, 957, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 240, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, -284, -284, 100);
                                            cm.spawnMobLimit(2600423, 1, -521, 16, 100);
                                            cm.spawnMobLimit(2600424, 1, 487, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 754, -284, 100);
                                            cm.spawnMobLimit(2600424, 1, 957, -44, 100);
                                            cm.spawnMobLimit(2600424, 1, 240, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, -284, -284, 100);
                                            cm.spawnMobLimit(2600423, 1, -521, 16, 100);
                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                            cm.updateMirrorDungeonBoss(1, 2600425);
                                            cm.spawnMobLimit(2600425, 1, 671, -44, 100)
                                        } else {
                                            if (d == 326015000) {
                                                cm.spawnMobLimit(2600502, 1, 866, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 1078, -95, 100);
                                                cm.spawnMobLimit(2600503, 1, 307, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, -257, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 1102, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 1190, -95, 100);
                                                cm.spawnMobLimit(2600503, 1, 193, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, -417, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 753, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 1229, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 958, -95, 100);
                                                cm.spawnMobLimit(2600503, 1, 1322, 38, 100);
                                                cm.spawnMobLimit(2600503, 1, 58, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, -522, 214, 100);
                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                cm.updateMirrorDungeonBoss(1, 2600504);
                                                cm.spawnMobLimit(2600504, 1, 1007, 214, 100)
                                            } else {
                                                if (d == 326025000) {
                                                    cm.spawnMobLimit(2600508, 1, -210, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 593, 87, 100);
                                                    cm.spawnMobLimit(2600508, 1, -41, 87, 100);
                                                    cm.spawnMobLimit(2600507, 1, -706, 87, 100);
                                                    cm.spawnMobLimit(2600507, 1, -467, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 376, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, -113, 87, 100);
                                                    cm.spawnMobLimit(2600508, 1, 726, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 163, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -387, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -603, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 420, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, -639, 87, 100);
                                                    cm.spawnMobLimit(2600508, 1, 705, 87, 100);
                                                    cm.spawnMobLimit(2600508, 1, 285, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -311, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -807, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 528, 167, 100);
                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                    cm.updateMirrorDungeonBoss(1, 2600509);
                                                    cm.spawnMobLimit(2600509, 1, 211, 167, 100)
                                                } else {
                                                    if (d == 326045000) {
                                                        cm.spawnMobLimit(2600517, 1, -153, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, 466, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 615, -101, 100);
                                                        cm.spawnMobLimit(2600517, 1, -479, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -144, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -926, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -339, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, 206, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 428, -101, 100);
                                                        cm.spawnMobLimit(2600517, 1, -321, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -144, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -1045, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 100, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, 571, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 785, -101, 100);
                                                        cm.spawnMobLimit(2600517, 1, -554, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 36, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -716, 167, 100);
                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                        cm.updateMirrorDungeonBoss(1, 2600518);
                                                        cm.spawnMobLimit(2600518, 1, -609, 167, 100)
                                                    } else {
                                                        if (d == 327015000) {
                                                            cm.spawnMobLimit(2600606, 1, 2069, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 846, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 1476, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 970, -78, 100);
                                                            cm.spawnMobLimit(2600605, 1, 484, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 2069, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 846, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 1476, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 970, -78, 100);
                                                            cm.spawnMobLimit(2600605, 1, 484, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 2069, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 846, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 1476, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 970, -78, 100);
                                                            cm.spawnMobLimit(2600605, 1, 484, 162, 100);
                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                            cm.updateMirrorDungeonBoss(1, 2600607);
                                                            cm.spawnMobLimit(2600607, 1, 1828, 162, 100)
                                                        } else {
                                                            if (d == 327035000) {
                                                                cm.spawnMobLimit(2600621, 1, 226, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -165, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -499, 2578, 100);
                                                                cm.spawnMobLimit(2600620, 1, -361, 2290, 100);
                                                                cm.spawnMobLimit(2600620, 1, 93, 2340, 100);
                                                                cm.spawnMobLimit(2600620, 1, 240, 2093, 100);
                                                                cm.spawnMobLimit(2600621, 1, 226, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -165, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -499, 2578, 100);
                                                                cm.spawnMobLimit(2600620, 1, -361, 2290, 100);
                                                                cm.spawnMobLimit(2600620, 1, 93, 2340, 100);
                                                                cm.spawnMobLimit(2600620, 1, 240, 2093, 100);
                                                                cm.spawnMobLimit(2600621, 1, 226, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -165, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -499, 2578, 100);
                                                                cm.spawnMobLimit(2600620, 1, -361, 2290, 100);
                                                                cm.spawnMobLimit(2600620, 1, 93, 2340, 100);
                                                                cm.spawnMobLimit(2600620, 1, 240, 2093, 100);
                                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                cm.updateMirrorDungeonBoss(1, 2600622);
                                                                cm.spawnMobLimit(2600622, 1, 458, 2578, 100)
                                                            } else {
                                                                if (d == 327045000) {
                                                                    cm.spawnMobLimit(2600629, 1, -125, 732, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -519, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 270, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 344, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -610, 479, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -729, 771, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -125, 732, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -519, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 270, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 344, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -610, 479, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -729, 771, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -125, 732, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -519, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 270, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 344, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -610, 479, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -729, 771, 100);
                                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                    cm.updateMirrorDungeonBoss(1, 2600632);
                                                                    cm.spawnMobLimit(2600631, 1, 345, 771, 100)
                                                                } else {
                                                                    if (d == 328015000) {
                                                                        cm.spawnMobLimit(2600703, 1, 170, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 413, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -126, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 420, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 709, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -432, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 170, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 413, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -126, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 420, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 709, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -432, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 170, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 413, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -126, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 420, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 709, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -432, -517, 100);
                                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                        cm.updateMirrorDungeonBoss(1, 2600705);
                                                                        cm.spawnMobLimit(2600705, 1, 280, -517, 100)
                                                                    } else {
                                                                        if (d == 328025000) {
                                                                            cm.spawnMobLimit(2600709, 1, -224, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -612, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -1111, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -392, -592, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -940, -145, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -878, -592, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -224, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -612, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -1111, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -392, -592, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -940, -145, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -878, -592, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -224, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -612, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -1111, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -392, -592, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -940, -145, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -878, -592, 100);
                                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                            cm.updateMirrorDungeonBoss(1, 2600710);
                                                                            cm.spawnMobLimit(2600710, 1, -205, 181, 100)
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};