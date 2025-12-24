package net.swordie.ms.scripts;

/**
 * Created on 2/19/2018.
 */
public enum ScriptType {
    None(""),
    Npc("npc"),
    Field("field"),
    FirstEnterField("field"),
    Portal("portal"),
    Reactor("reactor"),
    Item("item"),
    Quest("quest")
    ;

    private String dir;

    ScriptType(String dir) {
        this.dir = dir;
    }

    public String getDir() {
        return dir;
    }

    public ScriptType[] getClashingScriptTypes() {
        switch (this) {
            case None:
                return new ScriptType[]{};
            case Field:
                return new ScriptType[]{ScriptType.Field};
            case FirstEnterField:
                return new ScriptType[]{ScriptType.FirstEnterField};
            case Npc:
            case Portal:
            case Item:
            case Quest:
                return new ScriptType[]{
                        ScriptType.Npc,
                        ScriptType.Portal,
                        ScriptType.Item,
                        ScriptType.Quest,
                };
            case Reactor:
                return new ScriptType[]{ScriptType.Reactor};
        }
        return new ScriptType[]{};
    }
}
