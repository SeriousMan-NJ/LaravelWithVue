DELIMITER $$
DROP PROCEDURE IF EXISTS createPosts$$
DELETE FROM posts$$
CREATE PROCEDURE createPosts()
BEGIN
  DECLARE i INT DEFAULT 0;
  label1: LOOP
    IF i < 1000 THEN
INSERT INTO posts (title, content) VALUES ('테스트입니다', '테스트 본문입니다. 테스트 본문입니다.테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다. 테스트 본문입니다.');
      SET i = i + 1;
      ITERATE label1;
    END IF;
    LEAVE label1;
  END LOOP label1;
END $$
DELIMITER $$
CALL createPosts();
