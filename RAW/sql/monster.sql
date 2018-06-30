CREATE TABLE mhw.monster (
  monster_id INT NOT NULL AUTO_INCREMENT,
  monster_name VARCHAR(15) NOT NULL,
  element VARCHAR(2) NOT NULL,
  species VARCHAR(3) NOT NULL,
  PRIMARY KEY (monster_id),
  INDEX fk_monster_1_idx (element ASC),
  CONSTRAINT fk_monster_element
    FOREIGN KEY (element)
    REFERENCES mhw.element (element_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO mhw.monster (monster_name, element, species)
  VALUES ("Anjanath", "F", "bru"),
  ("Azure Rathalos", "F", "fly"),
  ("Barroth", "NE", "bru"),
  ("Bazelgeuse", "F", "fly"),
  ("Black Diablos", "NE", "fly"),
  ("Deviljho", "D", "bru"),
  ("Diablos", "NE", "fly"),
  ("Dodogama", "F", "fan"),
  ("Great Girros", "NE", "fan"),
  ("Great Jagras", "NE", "fan"),
  ("Jyuratodus", "W", "pis"),
  ("Kirin", "T", "eld"),
  ("Kulu-Ya-Ku", "NE", "bir"),
  ("Kulve Taroth", "F", "eld"),
  ("Kushala Daora", "NE", "eld"),
  ("Lavasioth", "F", "pis"),
  ("Legiana", "I", "fly"),
  ("Lunastra", "F", "eld"),
  ("Nergigante", "NE", "eld"),
  ("Odogaron", "NE", "fan"),
  ("Paolumu", "NE", "fly"),
  ("Pink Rathian", "F", "fly"),
  ("Pukei-Pukei", "NE", "bir"),
  ("Radobaan", "NE", "bru"),
  ("Rathalos", "F", "fly"),
  ("Rathian", "F", "fly"),
  ("Teostra", "F", "eld"),
  ("Tobi-Kadachi", "T", "fan"),
  ("Tzitzi-Ya-Ku", "NE", "bir"),
  ("Uragaan", "F", "bru"),
  ("Vaal Hazak", "NE", "eld"),
  ("Xeno'jiiva", "D", "eld"),
  ("Zorah Magdaros", "F", "eld");
