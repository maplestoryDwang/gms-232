package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.shop.NpcShopDlg;
import net.swordie.ms.world.shop.NpcShopItem;
import net.swordie.orm.dao.NpcShopItemDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 2/19/2018.
 */
public class NpcData {
    private static final Object lockObj = new Object();
    private static final NpcShopItemDao npcShopItemDao = (NpcShopItemDao) SworDaoFactory.getByClass(NpcShopItem.class);
    
    private static final Logger log = LogManager.getLogger();
    private static final boolean LOG_UNKS = false;
    private static final String NPCS_FILE = ServerConstants.DAT_DIR + "/npcs.dat";

    private static HashMap<Integer, Npc> npcs = new HashMap<>();
    private static HashMap<Integer, Integer> npcOffsets;

    private static Map<Integer, NpcShopDlg> shops = new HashMap<>();

    private static Map<Integer, NpcShopDlg> getShops() {
        return shops;
    }

    private static void addShop(int id, NpcShopDlg nsd) {
        getShops().put(id, nsd);
    }

    private static void loadNpcsFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Npc.wz");
        for (WzObject<?, ?> idNode : file) {
            int id = Integer.parseInt(idNode.getName().replace(".img", ""));
            Npc npc = new Npc(id);
            WzObject<?, ?> infoNode = idNode.getChild("info");
            WzObject<?, ?> scriptNode = infoNode.getChild("script");
            if (scriptNode != null) {
                for (WzObject<?, ?> scriptIdNode : scriptNode) {
                    if (!Util.isNumber(scriptIdNode.getName())) {
                        continue;
                    }
                    int scriptId = Integer.parseInt(scriptIdNode.getName());
                    WzProperty<String> scriptString = (WzProperty<String>) scriptIdNode.getChild("script");
                    if (scriptString != null && scriptString.getValue() != null) {
                        npc.getScripts().put(scriptId, scriptString.getValue());
                    }
                }
            }
            npc.setTrunkGet(((WzProperty) infoNode.getChild("trunkGet", 0)).getIntValue());
            npc.setTrunkPut(((WzProperty) infoNode.getChild("trunkPut", 0)).getIntValue());
            npc.setShop(((WzProperty) infoNode.getChild("shop", 0)).getIntValue() != 0);
            npc.setMove(((WzProperty) infoNode.getChild("move", 0)).getIntValue() != 0);
            getBaseNpcs().put(npc.getTemplateId(), npc);
            idNode.clear();
        }
    }

    public static void saveNpcsToDat(String file) {
        int tableSize = getBaseNpcs().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        npcOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
        	raf.seek(tableSize);
            for (Npc npc : getBaseNpcs().values()) {
                npcOffsets.put(npc.getTemplateId(), (int) raf.getFilePointer());
                raf.writeInt(npc.getTemplateId());
                raf.writeBoolean(npc.isMove());
                raf.writeInt(npc.getTrunkGet());
                raf.writeInt(npc.getTrunkPut());
                raf.writeBoolean(npc.isShop());
                raf.writeShort(npc.getScripts().size());
                npc.getScripts().forEach((key, val) -> {
                    try {
                        raf.writeInt(key);
                        raf.writeUTF(val);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
            }
            IOHelper.writeOffsetTable(npcOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static Npc getNpc(int id) {
        return getBaseNpcs().get(id);
    }

    public static Npc getNpcDeepCopyById(int templateId) {
        if (getBaseNpcs().containsKey(templateId)) {
            return getBaseNpcs().get(templateId).deepCopy();
        }

        synchronized (lockObj) {
            if (npcOffsets == null) {
                npcOffsets = new HashMap<>();
                IOHelper.loadOffsets(npcOffsets, NPCS_FILE);
            }
        }

        if (!npcOffsets.containsKey(templateId)) {
            System.out.println("=> Size = " + npcOffsets.size());
            log.error("[NpcData] Could not find npc " + templateId);
            return null;
        }

        try (RandomAccessFile raf = new RandomAccessFile(NPCS_FILE, IOHelper.READ_MODE)) {
            raf.seek(npcOffsets.get(templateId));
            Npc npc = new Npc(raf.readInt());
            npc.setMove(raf.readBoolean());
            npc.setTrunkGet(raf.readInt());
            npc.setTrunkPut(raf.readInt());
            npc.setShop(raf.readBoolean());
            short size = raf.readShort();
            for (int i = 0; i < size; i++) {
                int id = raf.readInt();
                String val = raf.readUTF();
                npc.getScripts().put(id, val);
            }
            getBaseNpcs().put(npc.getTemplateId(), npc);
            return npc.deepCopy();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static NpcShopDlg loadNpcShopDlgFromDB(int id) {
        var items = npcShopItemDao.byShopId(id);
        if (items == null || items.size() == 0) {
            return null;
        }
        NpcShopDlg nsd = new NpcShopDlg();
        nsd.setNpcTemplateID(id);
        nsd.setShopID(id);
        items.sort(Comparator.comparingInt(NpcShopItem::getItemID));
        nsd.setItems(items);
        addShop(id, nsd);

        return nsd;
    }

    public static NpcShopDlg getShopById(int id) {
        return getShops().getOrDefault(id, loadNpcShopDlgFromDB(id));
    }

    public static void generateDatFiles() {
        log.info("Started generating npc data.");
        long start = System.currentTimeMillis();
        loadNpcsFromWz();
        saveNpcsToDat(NPCS_FILE);
        log.info(String.format("Completed generating npc data in %dms.", System.currentTimeMillis() - start));
    }

    public static Map<Integer, Npc> getBaseNpcs() {
        return npcs;
    }

    public static void main(String[] args) {
        generateDatFiles();
    }

    public static void clear() {
        getBaseNpcs().clear();
        if (npcOffsets != null) {
            npcOffsets = null;
        }
        getShops().clear();
    }
}
