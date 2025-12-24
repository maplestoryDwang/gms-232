package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.loaders.containerclasses.ReactorInfo;
import net.swordie.ms.util.Rect;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.HashMap;

/**
 * Created on 4/21/2018.
 */
public class ReactorData {
    private static final boolean LOG_UNKS = false;
    private static final String REACTORS_FILE = ServerConstants.DAT_DIR + "/reactors.dat";

    private static final Logger log = LogManager.getLogger();
    private static HashMap<Integer, ReactorInfo> reactorInfo = new HashMap<>();
    private static HashMap<Integer, Integer> reactorOffsets;

    private static void loadReactorsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Reactor.wz");
        for (WzObject<?, ?> reactorIdNode : file) {
            int id = Integer.parseInt(reactorIdNode.getName().replace(".img", ""));
            ReactorInfo ri = new ReactorInfo();
            ri.setId(id);
            ri.setQuest(((WzProperty) reactorIdNode.getChild("quest", 0)).getIntValue());
            ri.setAction(((WzProperty<String>) reactorIdNode.getChild("action", "")).getValue());
            WzObject<?, ?> infoNode = reactorIdNode.getChild("info");
            for (WzObject<?, ?> in : infoNode) {
                ri.setInfo(((WzProperty<String>) in.getChild("info", "")).getValue());
                ri.setName(((WzProperty<String>) in.getChild("name", "")).getValue());
                ri.setViewName(((WzProperty<String>) in.getChild("viewName", "")).getValue());
                ri.setLink(((WzProperty) in.getChild("link", 0)).getIntValue());
                ri.setLevel(((WzProperty) in.getChild("level", 0)).getIntValue());
                ri.setResetTime(((WzProperty) in.getChild("resetTime", 0)).getIntValue());
                ri.setHitCount(((WzProperty) in.getChild("hitCount", 0)).getIntValue());
                ri.setOverlapHit(((WzProperty) in.getChild("overlapHit", 0)).getIntValue());
                ri.setOverlapHitTime(((WzProperty) in.getChild("overlapHitTime", 0)).getIntValue());
                ri.setActMark(((WzProperty) in.getChild("actMark", 0)).getIntValue());
                ri.setDcMark(((WzProperty) in.getChild("dcMark", 0)).getIntValue() != 0);
                ri.setActivateByTouch(((WzProperty) in.getChild("activateByTouch", 0)).getIntValue() != 0);
                ri.setRemoveInFieldSet(((WzProperty) in.getChild("removeInFieldSet", 0)).getIntValue() != 0);
                ri.setNotHittable(((WzProperty) in.getChild("notHitable", 0)).getIntValue() != 0);
                ri.setNotFatigue(((WzProperty) in.getChild("notFatigue", 0)).getIntValue() != 0);
                addReactorInfo(ri);
            }
            reactorIdNode.clear();
        }
        file.clear();
    }

    private static void saveReactors(String file) {
        int tableSize = getReactorInfo().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        reactorOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (ReactorInfo ri : getReactorInfo().values()) {
                reactorOffsets.put(ri.getId(), (int) raf.getFilePointer());
                raf.writeInt(ri.getId());
                raf.writeInt(ri.getLink());
                raf.writeInt(ri.getLevel());
                raf.writeInt(ri.getResetTime());
                raf.writeInt(ri.getOverlapHitTime());
                raf.writeInt(ri.getActMark());
                raf.writeInt(ri.getHitCount());
                raf.writeInt(ri.getOverlapHit());
                raf.writeInt(ri.getQuest());
                raf.writeUTF(ri.getInfo());
                raf.writeUTF(ri.getName());
                raf.writeUTF(ri.getViewName());
                raf.writeUTF(ri.getAction());
                raf.writeBoolean(ri.isNotFatigue());
                raf.writeBoolean(ri.isDcMark());
                raf.writeBoolean(ri.isRemoveInFieldSet());
                raf.writeBoolean(ri.isActivateByTouch());
                raf.writeBoolean(ri.isNotHittable());
                raf.writeBoolean(ri.getRect() != null);
                if (ri.getRect() != null) {
                    Rect r = ri.getRect();
                    raf.writeShort(r.getLeft());
                    raf.writeShort(r.getTop());
                    raf.writeShort(r.getRight());
                    raf.writeShort(r.getBottom());
                }
            }
            IOHelper.writeOffsetTable(reactorOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static ReactorInfo loadReactorFromFile(int id) {
        ReactorInfo ri = null;
        try (RandomAccessFile raf = new RandomAccessFile(REACTORS_FILE, IOHelper.READ_MODE)) {
            raf.seek(reactorOffsets.get(id));
            ri = new ReactorInfo();
            ri.setId(raf.readInt());
            ri.setLink(raf.readInt());
            ri.setLevel(raf.readInt());
            ri.setResetTime(raf.readInt());
            ri.setOverlapHitTime(raf.readInt());
            ri.setActMark(raf.readInt());
            ri.setHitCount(raf.readInt());
            ri.setOverlapHit(raf.readInt());
            ri.setQuest(raf.readInt());
            ri.setInfo(raf.readUTF());
            ri.setName(raf.readUTF());
            ri.setViewName(raf.readUTF());
            ri.setAction(raf.readUTF());
            ri.setNotFatigue(raf.readBoolean());
            ri.setDcMark(raf.readBoolean());
            ri.setRemoveInFieldSet(raf.readBoolean());
            ri.setActivateByTouch(raf.readBoolean());
            ri.setNotHittable(raf.readBoolean());
            boolean hasRect = raf.readBoolean();
            if (hasRect) {
                Rect r = new Rect();
                r.setLeft(raf.readShort());
                r.setTop(raf.readShort());
                r.setRight(raf.readShort());
                r.setBottom(raf.readShort());
                ri.setRect(r);
            }
            addReactorInfo(ri);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ri;
    }

    public static ReactorInfo getReactorInfoByID(int id) {
        if (reactorOffsets == null) {
            reactorOffsets = new HashMap<>();
            IOHelper.loadOffsets(reactorOffsets, REACTORS_FILE);
        }
        if (!reactorOffsets.containsKey(id)) {
            return null;
        }
        ReactorInfo ri = getReactorInfo().get(id);
        return ri == null ? loadReactorFromFile(id) : ri;
    }

    public static Reactor getReactorByID(int id) {
        Reactor r = new Reactor(id);
        r.init();
        return r;
    }

    private static HashMap<Integer, ReactorInfo> getReactorInfo() {
        return reactorInfo;
    }

    private static void addReactorInfo(ReactorInfo ri) {
        getReactorInfo().put(ri.getId(), ri);
    }

    public static void generateDatFiles() {
        log.info("Started generating reactor data.");
        long start = System.currentTimeMillis();
        loadReactorsFromWZ();
        saveReactors(REACTORS_FILE);
        log.info(String.format("Completed generating reactor data in %dms.", System.currentTimeMillis() - start));
    }

    public static void main(String[] args) {
        generateDatFiles();
    }

    public static void clear() {
        getReactorInfo().clear();
        if (reactorOffsets != null) {
            reactorOffsets = null;
        }
    }
}
