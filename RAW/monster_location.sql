CREATE TABLE mhw.monster_location (
  ml_id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  location_id VARCHAR(3) NOT NULL,
  PRIMARY KEY (ml_id),
  INDEX fk_ml_monster_idx (monster_id ASC),
  INDEX fk_ml_location_idx (location_id ASC),
  CONSTRAINT fk_ml_monster
    FOREIGN KEY (monster_id)
    REFERENCES mhw.monster (monster_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_ml_location
    FOREIGN KEY (location_id)
    REFERENCES mhw.location (location_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    INSERT INTO mhw.monster_location (monster_id, location_id)
      VALUES (1, "AF"),
            (1, "WW"),
            (2, "AF"),
            (2, "ER"),
            (3, "WW"),
            (4, "AF"),
            (4, "CH"),
            (4, "RV"),
            (4, "WW"),
            (4, "ER"),
            (5, "WW"),
            (6, "AF"),
            (6, "WW"),
            (6, "CH"),
            (6, "RV"),
            (6, "ER"),
            (7, "WW"),
            (8, "ER"),
            (9, "RV"),
            (10, "AF"),
            (11, "WW"),
            (12, "CH"),
            (13, "AF"),
            (13, "WW"),
            (14, "CED"),
            (15, "AF"),
            (15, "ER"),
            (16, "ER"),
            (17, "CH"),
            (18, "ER"),
            (19, "ER"),
            (19, "WW"),
            (20, "RV"),
            (20, "CH"),
            (21, "CH"),
            (22, "WW"),
            (22, "CH"),
            (23, "AF"),
            (24, "RV"),
            (25, "AF"),
            (26, "AF"),
            (26, "WW"),
            (27, "WW"),
            (27, "ER"),
            (28, "AF"),
            (29, "CH"),
            (30, "ER"),
            (31, "RV"),
            (32, "CoF"),
            (33, "Evr");
