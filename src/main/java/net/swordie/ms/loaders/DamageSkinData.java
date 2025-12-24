package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.jwzlib.io.WzMappedInputStream;
import net.swordie.ms.loaders.containerclasses.DamageSkinInfo;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created on 06/04/2021.
 *
 * @author Asura
 */
public class DamageSkinData {
    private static final Logger log = LogManager.getLogger();

    private static void update() {
        StringData.loadItemStringsFromWz();

        System.out.println("\nUpdating The Damage Skin Map\n\n");


        // Obtain all Dmg Skins and put in a TreeMap
        List<DamageSkinInfo> wzDmgSkinList = new ArrayList<>();

        // Add Default Damage Skin
        wzDmgSkinList.add(new DamageSkinInfo(0, 0, false));

        WzObject<?, ?> dmgSkinList = getDamageSkinObjects();
        for (WzObject<?, ?> dmgSkinWzObject : dmgSkinList) {
            if (!Util.isNumber(dmgSkinWzObject.getName())) {
                log.warn(String.format("Non-Number Damage Skin Id | %s", dmgSkinWzObject.getName()));
                continue;
            }

            var dmgSkinId = Integer.parseInt(dmgSkinWzObject.getName());
            var dmgSkinInfo = new DamageSkinInfo(
                    getItemId(dmgSkinWzObject),
                    dmgSkinId,
                    isUnitDamageSkin(dmgSkinWzObject)
            );
            wzDmgSkinList.add(dmgSkinInfo);
        }



        // Check current list of Dmg Skins in DamageSkinConstants.java
        List<DamageSkinInfo> curMap = new ArrayList<>();
        File file = new File(ServerConstants.DIR + "\\src\\main\\java\\net\\swordie\\ms\\constants\\DamageSkinConstants.java");
        try (Scanner s = new Scanner(file)) {
            while (s.hasNextLine()) {
                String line = s.nextLine();
                if (line.contains("put(") && line.contains(");")) {
                    var dsi = readDamageSkinLine(line);
                    if (dsi != null) {
                        curMap.add(dsi);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }


        // Finding new or missing Damage Skins and try to find their ItemID.
        Collections.sort(wzDmgSkinList, Comparator.comparingInt(DamageSkinInfo::getDmgSkinId));
        for (var dmgSkinInfo : wzDmgSkinList) {

            var itemId = dmgSkinInfo.getItemId();
            var dmgSkinId = dmgSkinInfo.getDmgSkinId();
            var isUnit = dmgSkinInfo.isUnit();
            var prefix = itemId / 1000000;
            var hasItemId = itemId > 0;
            var itemName = "ITEM_NAME"; // No ItemID found. Thus must be done manually.

            if (itemId > 0) {
                itemName = StringData.getItemStringById(itemId);
                if (itemName != null) {
                    itemName = itemName.strip();
                }
            }


            List<DamageSkinInfo> curDSIList = curMap.stream().filter(dsi -> dsi.getDmgSkinId() == dmgSkinId).collect(Collectors.toList());

            // We have this Damage Skin in our damageSkin Map
            if (curDSIList.size() > 0) {
                // Print curDSIList
                for (var dsi : curDSIList) {
                    var itemNameCurDSI = StringData.getItemStringById(dsi.getItemId());
                    if (itemNameCurDSI != null) {
                        itemNameCurDSI = itemNameCurDSI.strip();
                    }
                    dsi.setUnit(isUnit);
                    System.out.println(dsi.toString(itemNameCurDSI));
                }
            } else {
                // Filter out weird ETC items that are somehow linked to a Damage Skin
                if (hasItemId && prefix != 2 && prefix != 5) {
                    continue;
                }
                System.out.println(dmgSkinInfo.toString(itemName));
            }
        }


        System.out.println("\n\nFinished Updating The Damage Skin Map");
    }


    private static WzObject<?, ?> getDamageSkinObjects() {
        String wzDir = ServerConstants.WZ_DIR + "/Effect.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        return dir.getChild("DamageSkin.img");
    }

    /**
     * Gets the Linked ItemID in DamageSkin WzObject. Return -1 if there's no ItemID linked
     *
     * @param damageSkinWzObject
     * @return ItemID linked with the DmgSkinWzObj. -1 if no ItemID is linked
     */
    private static int getItemId(WzObject<?, ?> damageSkinWzObject) {
        WzObject<?, ?> itemIdChild = damageSkinWzObject.getChild("ItemID");
        if (itemIdChild == null) {
            return 0;
        }

        return ((WzProperty) itemIdChild).getIntValue();
    }

    private static boolean isUnitDamageSkin(WzObject<?,?> damageSkinWzObject) {
        var noCustomChild = damageSkinWzObject.getChild("NoCustom");
        if (noCustomChild == null) {
            return false;
        }

        var customTypeChild = noCustomChild.getChild("customType");
        if (customTypeChild == null) {
            return false;
        }

        return ((String) ((WzProperty) customTypeChild).getValue()).equalsIgnoreCase("glUnit");
    }

    private static DamageSkinInfo readDamageSkinLine(String dmgSkinLine) {
        String[] split = dmgSkinLine.split("[()]"); // "put(2630586, 1381);  // Lightbulb Damage Skin"
        String info = split[1]; // "2630586, 1381"

        if (!info.contains(", ")) {
            return null;
        }

        var itemId = 0;
        var dmgSkinId = 0;
        var itemIdStr = info.split(", ")[0];
        var dmgSkinIdStr = info.split(", ")[1];
        if (Util.isNumber(dmgSkinIdStr)) {
            dmgSkinId = Integer.parseInt(dmgSkinIdStr);
        }
        if (Util.isNumber(itemIdStr)) {
            itemId = Integer.parseInt(itemIdStr);
        }

        return new DamageSkinInfo(itemId, dmgSkinId, false);
    }

    public static void main(String[] args) {
        update();
    }
}
