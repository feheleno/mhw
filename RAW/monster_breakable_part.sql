CREATE TABLE mhw.moster_brekable_part (
  mbp_id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  body_part_id VARCHAR(1) NOT NULL,
  sever_level INT NOT NULL,
  blunt_level INT NOT NULL,
  ammo_level INT NOT NULL,
  PRIMARY KEY (mbp_id),
  INDEX fk_moster_brekable_part_1_idx (monster_id ASC),
  INDEX fk_moster_brekable_part_2_idx (body_part_id ASC),
  CONSTRAINT fk_mbp_moster
    FOREIGN KEY (monster_id)
    REFERENCES mhw.monster (monster_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_mbp_brekable_part
    FOREIGN KEY (body_part_id)
    REFERENCES mhw.body_part (body_part_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
