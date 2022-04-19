# User.create(firstname: "Stefan", lastname: "Inman", username: "StefanInman", password: "Spring2011", password_confirmation: "Spring2011")

# Event.create(body: "Drinks", start: "2022-06-07 15:00:00", end: "2022-06-07 18:00:00")


# User.create(firstname: "User", lastname: "Name", username: "username", password: "password", password_confirmation: "password")

# Message.create(body: "Yo, whats up?", user_id: 1, sent_to: 2)

# Event.create(body: "Drinks", start_date: "06/07/2022", start_time: "3:00pm", end_date: "06/07/2022", end_time: "6:00pm")

# Event.create(body: "Drinks", start_date: "4/18/2022", start_time: "3:00pm", end_date: "4/18/2022", end_time: "6:00pm")

# Event.create(body: "test", start_date: Faker::Date.forward(days: 3), start_time: "3:00", end_date: "06/07/2022", end_time: "6:00pm")

# 10.times {Event.create(body: Faker::Hobby.activity, start_date: Faker::Date.between(from: Date.today, to: Date.today), start_time: "3:00", end_date: "06/07/2022", end_time: "6:00pm")}

Event.create(body: "Drinks", start: "Mon Apr 18 2022 15:14:57 GMT-0500 (Central Daylight Time)", end: "Mon Apr 18 2022 15:14:57 GMT-0500 (Central Daylight Time)")