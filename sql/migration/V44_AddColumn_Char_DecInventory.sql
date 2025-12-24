ALTER TABLE characters ADD COLUMN decInventory int NULL;
ALTER TABLE characters ADD FOREIGN KEY (decInventory) REFERENCES inventories(id);
