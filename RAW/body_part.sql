CREATE TABLE mhw.body_part (
  body_part_id VARCHAR(2) NOT NULL,
  body_part_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (body_part_id));

  insert into body_part
    values ("He","Head"),
    ("Ho","Horn"),
    ("M","Mane"),
    ("C","Chest"),
    ("FL","Front Legs"),
    ("HL","Hind Legs"),
    ("B","Back"),
    ("T","Tail"),
    ("W","Wings");
