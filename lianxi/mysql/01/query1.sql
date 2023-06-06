-- INNER JOIN 是全连接
select * from author inner join authorbook on auther.id = autherorbook.authorid;
-- select * from author left join authorbook
SELECT * from author as a LEFT JOIN authorbook as b on a.id = b.authorid;

SELECT * from author as a right JOIN authorbook as b on a.id = b.authorid;

-- select * from author join authorbook
select a.id,a.bookname,author,authorid from authorbook as a,author as b where a.authorid = b.id;
