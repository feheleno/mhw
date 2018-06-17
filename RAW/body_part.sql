CREATE TABLE mhw.body_part (
  body_part_id VARCHAR(2) NOT NULL,
  body_part_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (body_part_id));

  insert into body_part
    values ("Ho","Horn"),
    ("He","Head"),
    ("M","Mane"),
    ("FL","Front Legs"),
    ("HL","Hind Legs"),
    ("C","Chest"),
    ("B","Back"),
    ("W","Wings"),
    ("T","Tail");
