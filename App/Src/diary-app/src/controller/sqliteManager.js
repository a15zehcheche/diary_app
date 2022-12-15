export default class DbManager {
    constructor(db) {
        this.db = db;
        this.table_name = "diary"
    }
    // Getter
    get get_db() {
        return this.db
    }

    // Method
    info() {
        return "DbManager object"
    }
    create_table() {
        console.log("create table diary");
        let create_table_query = 'CREATE TABLE IF NOT EXISTS diary ( diary_id INTEGER PRIMARY KEY AUTOINCREMENT,  diary_title TEXT, diary_content TEXT , emoji letCHAR(20), create_date TIMESTAMP, delete_data TIMESTAMP)'
        this.db.transaction(
            function (tx) {
                tx.executeSql(create_table_query);
            },
            function (error) {
                console.log("Transaction ERROR: " + error.message);
            },
            function () {
                console.log("Populated database OK");
            }
        );
    }

    get_diarys_table() {
        // `SELECT * from diary WHERE diary.create_date > '2022-12-13 00:00:00' and diary.create_date < '2022-12-14 00:00:00'`
        // `SELECT * from diary WHERE DATETIME(diary.create_date, 'unixepoch') >'2022-12-13 00:00:00' and  DATETIME(diary.create_date, 'unixepoch') < '2022-12-14 00:00:00'`
        // new Date().toISOString().split('T')[0]
        console.log("print table diary");
        let query = `SELECT * FROM ${this.table_name}`
        this.db.executeSql(query, [], function (rs) {
            //rows have (item(index), length)
            let items = rs.rows
            console.log(items.length)
            // for(let i=0;i<items.length;i++){
            //  console.log(items.item(i))
            // }
            return rs.rows
        }, function (error) {
            console.log('SELECT SQL statement ERROR: ' + error.message);
            return new Array()
        });
    }

    inset_diary(diary) {
        console.log("insert data to table diary");
        let inset_query = `INSERT INTO diary (diary_title,diary_content,emoji,create_date)  VALUES("${diary.diary_title}","${diary.diary_content}","${diary.emoji}","${diary.create_date}")`

        this.db.executeSql(inset_query, [], function (rs) {
            console.log('INSERT Success');
            console.log(rs)
        }, function (error) {
            console.log('INSERT ERROR: ' + error.message);
        });
    }

    update_diary(diary) {
        let update_query = `UPDATE diary
        SET diary_title = '${diary.diary_title}',
            diary_content = '${diary.diary_content}',
            emoji = "${diary.emoji}"
        WHERE
            diary_id = ${diary.diary_id};`
        this.db.executeSql(update_query, [], function (rs) {
            console.log('Update Success');
            console.log(rs)
        }, function (error) {
            console.log('Update ERROR: ' + error.message);
        });
    }

    delete_diary(diary) {
        let delete_query = `DELETE FROM diary
            WHERE diary_id = ${diary.diary_id};`
        this.db.executeSql(delete_query, [], function (rs) {
            console.log('delete_Success');
            console.log(rs)
        }, function (error) {
            console.log('delete_ERROR: ' + error.message);
        });
    }
}



