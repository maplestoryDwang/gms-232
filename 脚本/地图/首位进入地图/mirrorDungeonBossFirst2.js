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
            if (d == 321146000) {
                cm.spawnMobLimit(2600029, 1, 853, -374, 100);
                cm.spawnMobLimit(2600029, 1, 754, -374, 100);
                cm.spawnMobLimit(2600029, 1, 28, -373, 100);
                cm.spawnMobLimit(2600029, 1, 250, -384, 100);
                cm.spawnMobLimit(2600029, 1, 627, -383, 100);
                cm.spawnMobLimit(2600029, 1, 128, 39, 100);
                cm.spawnMobLimit(2600029, 1, 749, 45, 100);
                cm.spawnMobLimit(2600029, 1, 385, 35, 100);
                cm.spawnMobLimit(2600028, 1, 1095, -373, 100);
                cm.spawnMobLimit(2600028, 1, -79, -373, 100);
                cm.spawnMobLimit(2600028, 1, 127, -380, 100);
                cm.spawnMobLimit(2600028, 1, 508, -384, 100);
                cm.spawnMobLimit(2600028, 1, 859, 45, 100);
                cm.spawnMobLimit(2600028, 1, 655, 39, 100);
                cm.spawnMobLimit(2600028, 1, 466, 35, 100);
                cm.spawnMobLimit(2600028, 1, 263, 35, 100);
                cm.spawnMobLimit(2600028, 1, 3, 46, 100);
                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                cm.updateMirrorDungeonBoss(1, 2600030);
                cm.spawnMobLimit(2600030, 1, 395, -384, 100)
            } else {
                if (d == 322036000) {
                    cm.spawnMobLimit(2600115, 1, 969, -145, 100);
                    cm.spawnMobLimit(2600116, 1, 717, 215, 100);
                    cm.spawnMobLimit(2600115, 1, 1353, -145, 100);
                    cm.spawnMobLimit(2600116, 1, 597, 215, 100);
                    cm.spawnMobLimit(2600115, 1, 1008, -145, 100);
                    cm.spawnMobLimit(2600116, 1, 446, 215, 100);
                    cm.spawnMobLimit(2600115, 1, 607, -145, 100);
                    cm.spawnMobLimit(2600116, 1, 867, 215, 100);
                    cm.spawnMobLimit(2600115, 1, 1317, -145, 100);
                    cm.spawnMobLimit(2600116, 1, 976, 215, 100);
                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                    cm.updateMirrorDungeonBoss(1, 2600117);
                    cm.spawnMobLimit(2600117, 1, 1300, 215, 100)
                } else {
                    if (d == 322046000) {
                        cm.spawnMobLimit(2600123, 1, 147, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -99, 155, 100);
                        cm.spawnMobLimit(2600123, 1, 77, 155, 100);
                        cm.spawnMobLimit(2600123, 1, 298, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -402, 155, 100);
                        cm.spawnMobLimit(2600123, 1, 6, 155, 100);
                        cm.spawnMobLimit(2600123, 1, 235, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -174, 155, 100);
                        cm.spawnMobLimit(2600123, 1, 309, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -283, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -212, -145, 100);
                        cm.spawnMobLimit(2600123, 1, -329, -145, 100);
                        cm.spawnMobLimit(2600123, 1, -143, -145, 100);
                        cm.spawnMobLimit(2600123, 1, 244, -145, 100);
                        cm.spawnMobLimit(2600123, 1, -21, -145, 100);
                        cm.spawnMobLimit(2600123, 1, -19, -145, 100);
                        cm.spawnMobLimit(2600123, 1, 156, 155, 100);
                        cm.spawnMobLimit(2600123, 1, -19, -145, 100);
                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                        cm.updateMirrorDungeonBoss(1, 2600125);
                        cm.spawnMobLimit(2600125, 1, 79, 155, 100)
                    } else {
                        if (d == 323016000) {
                            cm.spawnMobLimit(2600207, 1, 325, -1165, 100);
                            cm.spawnMobLimit(2600206, 1, 589, -625, 100);
                            cm.spawnMobLimit(2600207, 1, 619, -985, 100);
                            cm.spawnMobLimit(2600206, 1, -40, -625, 100);
                            cm.spawnMobLimit(2600207, 1, 936, -985, 100);
                            cm.spawnMobLimit(2600206, 1, 187, -625, 100);
                            cm.spawnMobLimit(2600207, 1, 841, -985, 100);
                            cm.spawnMobLimit(2600206, 1, -267, -683, 100);
                            cm.spawnMobLimit(2600207, 1, 762, -985, 100);
                            cm.spawnMobLimit(2600206, 1, 371, -625, 100);
                            cm.spawnMobLimit(2600207, 1, 153, -1165, 100);
                            cm.spawnMobLimit(2600206, 1, 1067, -625, 100);
                            cm.spawnMobLimit(2600207, 1, -34, -1142, 100);
                            cm.spawnMobLimit(2600206, 1, 706, -625, 100);
                            cm.spawnMobLimit(2600207, 1, -180, -1045, 100);
                            cm.spawnMobLimit(2600206, 1, 855, -625, 100);
                            cm.spawnMobLimit(2600207, 1, -335, -985, 100);
                            cm.spawnMobLimit(2600206, 1, -194, -635, 100);
                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                            cm.updateMirrorDungeonBoss(1, 2600208);
                            cm.spawnMobLimit(2600208, 1, 944, -625, 100)
                        } else {
                            if (d == 323046000) {
                                cm.spawnMobLimit(2600229, 1, 1186, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 413, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 963, -200, 100);
                                cm.spawnMobLimit(2600230, 1, 1197, 100, 100);
                                cm.spawnMobLimit(2600230, 1, -66, 100, 100);
                                cm.spawnMobLimit(2600230, 1, -5, -260, 100);
                                cm.spawnMobLimit(2600229, 1, 976, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 283, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 873, -200, 100);
                                cm.spawnMobLimit(2600230, 1, 814, 100, 100);
                                cm.spawnMobLimit(2600230, 1, 113, 100, 100);
                                cm.spawnMobLimit(2600230, 1, 93, -260, 100);
                                cm.spawnMobLimit(2600229, 1, 1498, 100, 100);
                                cm.spawnMobLimit(2600229, 1, -258, 100, 100);
                                cm.spawnMobLimit(2600229, 1, 698, -200, 100);
                                cm.spawnMobLimit(2600230, 1, 779, -200, 100);
                                cm.spawnMobLimit(2600230, 1, 624, 100, 100);
                                cm.spawnMobLimit(2600230, 1, 330, -260, 100);
                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                cm.updateMirrorDungeonBoss(1, 2600231);
                                cm.spawnMobLimit(2600231, 1, 1046, 100, 100)
                            } else {
                                if (d == 324036000) {
                                    cm.spawnMobLimit(2600315, 1, 753, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 65, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 565, 243, 100);
                                    cm.spawnMobLimit(2600315, 1, 156, 243, 100);
                                    cm.spawnMobLimit(2600315, 1, 607, -57, 100);
                                    cm.spawnMobLimit(2600315, 1, 166, -57, 100);
                                    cm.spawnMobLimit(2600315, 1, 753, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 65, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 649, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 156, 243, 100);
                                    cm.spawnMobLimit(2600315, 1, 607, -57, 100);
                                    cm.spawnMobLimit(2600315, 1, 166, -57, 100);
                                    cm.spawnMobLimit(2600315, 1, 753, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 65, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 354, 543, 100);
                                    cm.spawnMobLimit(2600315, 1, 372, 243, 100);
                                    cm.spawnMobLimit(2600315, 1, 607, -57, 100);
                                    cm.spawnMobLimit(2600315, 1, 166, -57, 100);
                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                    cm.updateMirrorDungeonBoss(1, 2600316);
                                    cm.spawnMobLimit(2600316, 1, 302, 543, 100)
                                } else {
                                    if (d == 324046000) {
                                        cm.spawnMobLimit(2600319, 1, 484, 96, 100);
                                        cm.spawnMobLimit(2600319, 1, 1193, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 793, -468, 100);
                                        cm.spawnMobLimit(2600320, 1, 787, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 999, 169, 100);
                                        cm.spawnMobLimit(2600320, 1, 49, 170, 100);
                                        cm.spawnMobLimit(2600319, 1, 484, 96, 100);
                                        cm.spawnMobLimit(2600319, 1, 1193, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 793, -468, 100);
                                        cm.spawnMobLimit(2600320, 1, 787, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 999, 169, 100);
                                        cm.spawnMobLimit(2600320, 1, 49, 170, 100);
                                        cm.spawnMobLimit(2600319, 1, 484, 96, 100);
                                        cm.spawnMobLimit(2600319, 1, 1193, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 793, -468, 100);
                                        cm.spawnMobLimit(2600320, 1, 787, -140, 100);
                                        cm.spawnMobLimit(2600320, 1, 999, 169, 100);
                                        cm.spawnMobLimit(2600320, 1, 49, 170, 100);
                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                        cm.updateMirrorDungeonBoss(1, 2600321);
                                        cm.spawnMobLimit(2600321, 1, 1338, 170, 100)
                                    } else {
                                        if (d == 325046000) {
                                            cm.spawnMobLimit(2600424, 1, 2454, -344, 100);
                                            cm.spawnMobLimit(2600424, 1, 3097, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, 2273, 16, 100);
                                            cm.spawnMobLimit(2600423, 1, 2577, 16, 100);
                                            cm.spawnMobLimit(2600424, 1, 2454, -344, 100);
                                            cm.spawnMobLimit(2600424, 1, 3097, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, 2273, 16, 100);
                                            cm.spawnMobLimit(2600423, 1, 2577, 16, 100);
                                            cm.spawnMobLimit(2600424, 1, 2454, -344, 100);
                                            cm.spawnMobLimit(2600424, 1, 3097, -44, 100);
                                            cm.spawnMobLimit(2600423, 1, 2273, 16, 100);
                                            cm.spawnMobLimit(2600423, 1, 2577, 16, 100);
                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                            cm.updateMirrorDungeonBoss(1, 2600425);
                                            cm.spawnMobLimit(2600425, 1, 2352, 16, 100)
                                        } else {
                                            if (d == 326016000) {
                                                cm.spawnMobLimit(2600503, 1, 352, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, 888, -113, 100);
                                                cm.spawnMobLimit(2600502, 1, 1062, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, -336, 17, 100);
                                                cm.spawnMobLimit(2600503, 1, 82, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, 475, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 945, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, -371, 17, 100);
                                                cm.spawnMobLimit(2600503, 1, -145, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, 1188, 214, 100);
                                                cm.spawnMobLimit(2600503, 1, 761, -113, 100);
                                                cm.spawnMobLimit(2600502, 1, 557, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, -441, 17, 100);
                                                cm.spawnMobLimit(2600503, 1, 1294, 38, 100);
                                                cm.spawnMobLimit(2600502, 1, 1426, 38, 100);
                                                cm.spawnMobLimit(2600503, 1, 1707, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, 1423, 38, 100);
                                                cm.spawnMobLimit(2600502, 1, 1216, 214, 100);
                                                cm.spawnMobLimit(2600502, 1, -524, 17, 100);
                                                cm.spawnMobLimit(2600502, 1, -538, 17, 100);
                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                cm.updateMirrorDungeonBoss(1, 2600504);
                                                cm.spawnMobLimit(2600504, 1, 1707, 214, 1)
                                            } else {
                                                if (d == 326026000) {
                                                    cm.spawnMobLimit(2600507, 1, -501, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -92, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 468, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 117, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 740, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, -357, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -501, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -92, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 468, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 117, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 740, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, -357, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -501, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, -92, 167, 100);
                                                    cm.spawnMobLimit(2600507, 1, 468, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 117, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, 740, 167, 100);
                                                    cm.spawnMobLimit(2600508, 1, -357, 167, 100);
                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                    cm.updateMirrorDungeonBoss(1, 2600509);
                                                    cm.spawnMobLimit(2600509, 1, 629, 167, 100)
                                                } else {
                                                    if (d == 326046000) {
                                                        cm.spawnMobLimit(2600517, 1, 254, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 695, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -19, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 99, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, 9, -114, 100);
                                                        cm.spawnMobLimit(2600517, 1, -456, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 428, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 829, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -19, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -84, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, -73, -114, 100);
                                                        cm.spawnMobLimit(2600517, 1, -616, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 266, 67, 100);
                                                        cm.spawnMobLimit(2600517, 1, 476, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, 81, 167, 100);
                                                        cm.spawnMobLimit(2600517, 1, -217, -114, 100);
                                                        cm.spawnMobLimit(2600517, 1, 173, -114, 100);
                                                        cm.spawnMobLimit(2600517, 1, -161, 167, 100);
                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                        cm.updateMirrorDungeonBoss(1, 2600518);
                                                        cm.spawnMobLimit(2600518, 1, 595, 167, 100)
                                                    } else {
                                                        if (d == 327016000) {
                                                            cm.spawnMobLimit(2600606, 1, 1783, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 2129, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 849, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 393, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 1783, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 2129, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 849, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 393, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 1783, 162, 100);
                                                            cm.spawnMobLimit(2600606, 1, 2129, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 849, 162, 100);
                                                            cm.spawnMobLimit(2600605, 1, 393, 162, 100);
                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                            cm.updateMirrorDungeonBoss(1, 2600607);
                                                            cm.spawnMobLimit(2600607, 1, 2009, 162, 100)
                                                        } else {
                                                            if (d == 327036000) {
                                                                cm.spawnMobLimit(2600620, 1, -435, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -179, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -233, 2043, 100);
                                                                cm.spawnMobLimit(2600621, 1, 252, 1903, 100);
                                                                cm.spawnMobLimit(2600621, 1, 358, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -173, 2578, 100);
                                                                cm.spawnMobLimit(2600620, 1, -435, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -179, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -233, 2043, 100);
                                                                cm.spawnMobLimit(2600621, 1, 252, 1903, 100);
                                                                cm.spawnMobLimit(2600621, 1, 358, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -173, 2578, 100);
                                                                cm.spawnMobLimit(2600620, 1, -435, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -179, 1826, 100);
                                                                cm.spawnMobLimit(2600620, 1, -233, 2043, 100);
                                                                cm.spawnMobLimit(2600621, 1, 252, 1903, 100);
                                                                cm.spawnMobLimit(2600621, 1, 358, 2578, 100);
                                                                cm.spawnMobLimit(2600621, 1, -173, 2578, 100);
                                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                cm.updateMirrorDungeonBoss(1, 2600622);
                                                                cm.spawnMobLimit(2600622, 1, 374, 1903, 100)
                                                            } else {
                                                                if (d == 327046000) {
                                                                    cm.spawnMobLimit(2600629, 1, -55, 187, 100);
                                                                    cm.spawnMobLimit(2600629, 1, 443, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -377, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 326, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 636, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -508, 771, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -55, 187, 100);
                                                                    cm.spawnMobLimit(2600629, 1, 443, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -186, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 326, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 334, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -176, 771, 100);
                                                                    cm.spawnMobLimit(2600629, 1, -55, 187, 100);
                                                                    cm.spawnMobLimit(2600629, 1, 443, 482, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 408, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 414, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, 245, 771, 100);
                                                                    cm.spawnMobLimit(2600630, 1, -343, 771, 100);
                                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                    cm.updateMirrorDungeonBoss(1, 2600632);
                                                                    cm.spawnMobLimit(2600631, 1, -512, 771, 100)
                                                                } else {
                                                                    if (d == 328016000) {
                                                                        cm.spawnMobLimit(2600703, 1, 62, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 281, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 763, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -213, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 684, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -265, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 62, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 281, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 763, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -213, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 684, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -265, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 62, -517, 100);
                                                                        cm.spawnMobLimit(2600703, 1, 281, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 763, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -213, 181, 100);
                                                                        cm.spawnMobLimit(2600704, 1, 684, -178, 100);
                                                                        cm.spawnMobLimit(2600704, 1, -265, -517, 100);
                                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                        cm.updateMirrorDungeonBoss(1, 2600705);
                                                                        cm.spawnMobLimit(2600705, 1, 479, 181, 100)
                                                                    } else {
                                                                        if (d == 328026000) {
                                                                            cm.spawnMobLimit(2600709, 1, 390, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, 335, -139, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -518, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -180, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -440, -166, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -973, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, 390, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, 335, -139, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -518, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -180, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -440, -166, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -973, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, 390, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, 335, -139, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -518, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -180, 181, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -440, -166, 100);
                                                                            cm.spawnMobLimit(2600709, 1, -973, 181, 100);
                                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                            cm.updateMirrorDungeonBoss(1, 2600710);
                                                                            cm.spawnMobLimit(2600710, 1, 320, 181, 100)
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