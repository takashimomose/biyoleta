CREATE TABLE related_words (
  word_id INTEGER REFERENCES words(id) ON DELETE CASCADE,
  related_word_id INTEGER REFERENCES words(id) ON DELETE CASCADE,
  relation_type TEXT CHECK (relation_type IN ('synonym', 'antonym', 'variant')),
  PRIMARY KEY (word_id, related_word_id)
);

-- maayo (good) ↔ kaon, balay etc. — add antonym: daotan (bad) would need a word entry
-- Using existing words for demo
INSERT INTO related_words (word_id, related_word_id, relation_type) VALUES
  (1, 5, 'variant'),  -- maayo ↔ kaon (demo)
  (3, 4, 'variant'),  -- tubig ↔ balay (demo)
  (5, 1, 'variant');  -- kaon ↔ maayo (demo)
