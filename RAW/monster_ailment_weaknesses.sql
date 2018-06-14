CREATE TABLE mhw.monster_ailment_weaknesses (
  id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  ailment_id INT NOT NULL,
  weakness_level INT NOT NULL,
  PRIMARY KEY (id));
