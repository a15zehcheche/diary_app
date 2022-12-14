import { createStore, storeKey } from "vuex";
import SqliteManager from "./controller/sqliteManager.js"
import emoji from "./assets/emoji.json"
export default createStore({
  state: {
    emojiActive: true,
    pageIndex: 0,
    swiper:null,
    lookdiary:{},
    lookdiaryedit:{},
    dbName: "my.db",
    db: null,
    sqliteDbManager: null,
    packageName: "io.cordova.todolist",

    emoji:emoji.filter(emoji => emoji.category == "Smileys & Emotion"),
    nowDate: new Date(),
    pageTitle: "Diary",
    count: 1,
    diary:{
      "diary_id": 0,
      "diary_title": "",
      "diary_content": "",
      "emoji": "☺️",
      "create_date": null,
      "delete_data": null
    },
    xdiarys:[],
    diarys: [{
      "diary_id": 1,
      "diary_title": "title",
      "diary_content": `conten
      asd
      
      asd
      
      asd
      asdas
      asd
      asd`,
      "emoji": "😀",
      "create_date": 1671117235337,
      "delete_data": null
    }],
    week:
      [
        ["Sun", "Sunday"],
        ["Mon", "Monday"],
        ["Tue", "Tuesday"],
        ["Wed", "Wednesday"],
        ["Thu", "Thursday"],
        ["Fri", "Friday"],
        ["Sat", "Satuday"],
      ]
  },
  getters: {
    counter: (state) => state.count,
    pageTitle: (state) => state.pageTitle
  },
  actions: {

  },
  mutations: {
    refreshDate(state) {
      state.nowDate = new Date()
    },
    saveDiary(state, diary) {
      // let saveDiary = {
      //   "diary_title": diary.title,
      //   "diary_content": diary.content,
      //   "emoji": diary.emoji,
      //   "create_date": diary.time,
      // }
      state.sqliteDbManager.inset_diary(  state.diary)
      state.diary = {
        "diary_id": 0,
        "diary_title": "",
        "diary_content": "",
        "emoji": "☺️",
        "create_date": null,
        "delete_data": null
      }
    },
    updateDiary(state, diary) {
      state.sqliteDbManager.update_diary(diary)
    },
    deleteDiary(state, diary) {
      state.sqliteDbManager.delete_diary(diary)
    },
    resetDiaryData(state){
      console.log("reset create data")
      
    },
    avtiveLookMode(state, diary) {
      state.lookdiary = diary
      state.lookdiaryedit = Object.assign({},diary)

    },
    resetDiaryData(state){
      state.lookdiaryedit = Object.assign({},state.lookdiary)
    },
    setEmoji(state,data){
      if(data.name == "create"){
        state.diary.emoji = data.emoji
      }else if(data.name == "edit"){
        state.lookdiaryedit.emoji = data.emoji
        console.log("set emoji from edit")
      }
      console.log(state.lookdiary)
    },
    createDbManager(state, db) {
      state.sqliteDbManager = new SqliteManager(db)
      console.log("setup")
      var create_table_query = 'CREATE TABLE IF NOT EXISTS diary ( diary_id INTEGER PRIMARY KEY AUTOINCREMENT,  diary_title TEXT, diary_content TEXT , emoji VARCHAR(20), create_date TIMESTAMP, delete_data TIMESTAMP)'
      db.transaction(
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

    },
    getDiarys(state) {
      state.diarys = [];
      var query = `SELECT * FROM diary`
      state.db.executeSql(query, [], function (rs) {
        //rows have (item(index), length)
        let items = rs.rows
        console.log(items.length)
        for (let i = 0; i < items.length; i++) {
          console.log(items.item(i))
          state.diarys.unshift(items.item(i));
        }
        //console.log("print diary table");
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
      //state.diarys = this.sqliteDbManager.get_diarys_table()
    },
    setPageTitle(state, name) {
      state.pageTitle = name;
    },






    // ---------------------------------------------------------
   
    increment(state) {
      state.count++;
    },
    deincrement(state) {
      state.count--;
    },
    itemAppend(state, task_test) {
      //add task in fist array index

      state.db.executeSql(`INSERT INTO task (task_text, done) VALUES ("${task_test}", false);`, [], function (rs) {
        console.log('INSERT Success');
        console.log(rs)
        //console.log(rs.insertId);
        let task = {
          id: rs.insertId,
          done: false,
          text: task_test,
        };
        state.list.unshift(task);
      }, function (error) {
        console.log('INSERT ERROR: ' + error.message);
      });
      // show table
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        console.log(rs.rows.item(0));
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    itemDelete(state, data) {
      state.list.splice(data.index, 1);
      console.log(data.task_id);
      state.db.executeSql(`DELETE FROM task WHERE task_id =${data.task_id}`, [], function () {
        console.log("Delete Success");
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    itemUpdate(state, data) {
      //console.log(`UPDATE task SET done = ${data.done} WHERE task_id =${data.task_id}`)
      state.db.executeSql(`UPDATE task SET done = ${data.done} WHERE task_id =${data.task_id}`, [], function () {
        console.log("Update Success");
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    renderDBtask(state) {
      state.list = [];
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        let items = rs.rows
        for (let i = 0; i < items.length; i++) {
          let task = {
            id: items.item(i).task_id,
            done: items.item(i).done ? true : false,
            text: items.item(i).task_text,
          };
          state.list.unshift(task);
        }
        console.log(state.list)
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    showdb(state) {
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        let items = rs.rows
        console.log(items.length)
        console.log("db list")
        for (let i = 0; i < items.length; i++) {
          console.log(items.item(i))
        }/*
        console.log("store list")
        console.log(state.list)*/
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    }
  },

  actions: {
  }
});

/* db.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function(rs) {
    console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
  }, function(error) {
    console.log('SELECT SQL statement ERROR: ' + error.message);
  }); */

