package net.swordie.ms.util;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.loaders.StringData;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * Created on 30/12/2021.
 *
 * @author Asura
 */
public class MobDropEntryNamer {

    private static void start() {
        //
        // Load Item and Mob Strings
        //
        StringData.loadItemStrings();
        StringData.loadMobStrings();

        //
        // Get drops entries .sql file
        //
        var file = new File(ServerConstants.SQL_DIR + "/InitTables_drops.sql");

        try (var s = new Scanner(file)) {
            while (s.hasNextLine()) {
                var line = s.nextLine();
                var copyLine = line;


                if (line.contains("),") && !line.contains("#")) {
                    line = line.replace("(", "");
                    var split = line.split(",");

                    var mobId = split[0].strip();
                    var itemId = split[1].strip();

                    if (!Util.isNumber(mobId) || !Util.isNumber(itemId)) {
                        System.out.println(copyLine);
                        continue;
                    }

                    var mobName = StringData.getMobStringById(Integer.parseInt(mobId));
                    var itemName = StringData.getItemStringById(Integer.parseInt(itemId));

                    copyLine = copyLine.stripTrailing().replace("%", "");
                    System.out.println(String.format("%s # %s | %s", copyLine, mobName, itemName));

                } else {
                    System.out.println(copyLine);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        start();
    }
}
