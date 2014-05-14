#download
ssh -C simonheys@spica.dreamhost.com mysqldump --opt --user=mykrobe_com --password=tkavxcUZmpWB4dsjp7AT --host=mysql.simonheys.com mykrobe_com_wordpress > ../data/sql/clients.simonheys.com.mykrobe.sql

#convert urls
sed 's/http:\/\/clients.simonheys.com\/mykrobe/http:\/\/telemachus.local\/mykrobe\/website/g' <../data/sql/clients.simonheys.com.mykrobe.sql >../data/sql/clients.simonheys.com.mykrobe.local.sql

#import, prevent double-encoding
/Applications/MAMP/Library/bin/mysql -u mykrobe_com -ptkavxcUZmpWB4dsjp7AT mykrobe_com_wordpress < ../data/sql/clients.simonheys.com.mykrobe.local.sql
