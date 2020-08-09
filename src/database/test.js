const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    proffyValue = {
        name: 'Bruno Morari',
        avatar: 'https://avatars3.githubusercontent.com/u/44806943?s=460&u=5b348354cf0f02dda176b9298dcea9d3a69a4a18&v=4',
        whatsapp: '91431107',
        bio: 'Monstro das matemáticas'
    }

    classValue = {
        subject: 5,
        cost: '25'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 750,
            time_to: 1200
        },
        {
            weekday: 3,
            time_from: 900,
            time_to: 1600
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE Classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})